import {
    Card,
    CardContent,
    CardHeader,
    FormControl,
    Grid,
    IconButton,
    TextField,
  } from "@mui/material";
  import CloseIcon from "@mui/icons-material/Close";
  import React from "react";
  import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
  import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
  
  import {
    Box,
    Button,
    Checkbox,
    InputLabel,
    ListItemText,
    makeStyles,
    MenuItem,
    OutlinedInput,
    Select,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextareaAutosize,
  } from "@material-ui/core";
  import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
  import { useDispatch } from "react-redux";
  import { setAddCreatRfpPopUp } from "../../redux/feature/popup.feature";
  import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
  import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
  import { useState } from "react";
  import { useAtom } from "jotai";
  import { querynos, vendorlistPopup } from "../../jotaistore";
  import Querylist from "../Querylist";
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        //   maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        //   width: 250,
      },
    },
  };
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  
  const categories = [
    "bishnu",
    "asd",
    "asdds",
    "asdfds",
    "zxcxxc",
    "qwert",
    "iuytr",
    "nbvc",
    "jhgfd",
    "nbgfd",
  ];
  
  const subCategories = [
    "bishnu",
    "asd",
    "asdds",
    "asdfds",
    "zxcxxc",
    "qwert",
    "iuytr",
    "nbvc",
    "jhgfd",
    "nbgfd",
  ];
  
  const data = [
    {
      vendorName: "A M Kuchling",
      id: 1,
      query: 2,
      responseStatus: "Open",
      closureDate: "10/02/22",
      quantity: 4,
      bidRate: 92,
    },
    {
      vendorName: "A Mennucc1",
      id: 2,
      query: 2,
      responseStatus: "Pending",
      closureDate: "10/09/22",
      quantity: 6,
      bidRate: 96,
    },
    {
      vendorName: "Aasi Media",
      id: 3,
      query: 0,
      responseStatus: "Closed",
      closureDate: "10/11/22",
      quantity: 3,
      bidRate: 82,
    },
  ];
  
  const Vendordetails = ({ vendorId }) => {
    const [vendorList, setVendorList] = useState([]);
    const [value, setValue] = React.useState(new Date());
    const [category, setCategory] = React.useState([]);
    const [subCategory, setSubCategory] = React.useState([]);
    const [openVendorPopup, setOpenVendorPopup] = useAtom(vendorlistPopup);
    const [openSpace, setOpenSpace] = useState(false);
    const [queryList, setQueryList] = useAtom(querynos);
  
    console.log(vendorList, "vendorList");
    console.log(category, "category");
    console.log(subCategory, "subCategory");
  
    let dispatch = useDispatch();
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setVendorList(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
  
    console.log(data.map((item) => item, "bishnuitem"));
  
    const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
      const [isExpanded, setIsExpanded] = React.useState(false);
  
      return (
        <>
          <TableRow {...otherProps}>
            <TableCell padding="checkbox">
              <IconButton onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            {children}
          </TableRow>
          {isExpanded && (
            <TableRow>
              <TableCell padding="checkbox" />
              {expandComponent}
            </TableRow>
          )}
        </>
      );
    };
  
    const useStyles = makeStyles({
      root: {
        width: "100%",
        overflowX: "auto",
      },
      table: {
        minWidth: 650,
      },
    });
  
    function createData(name, query, detail, responseStatus, closureDate, quantity,bidRate) {
      return { name, query, detail, responseStatus, closureDate, quantity,bidRate };
    }
  
  
  
  
    const rows = [
      createData(
        "A M Kuchling",
        0,
        'aasdfghjklqwertyui',
        "Closed",
        "10/11/22",
        3,
        82
      ),
      createData(
        "A M Dulia",
        3,
        'aasdfghjklqwertyui',
        "Closed",
        "10/11/22",
        3,
        82
      ),
      createData(
        "A K Sahu",
        3,
        'aasdfghjklqwertyui',
        "Closed",
        "10/11/22",
        3,
        82
      ),
    ];
  
    const handleCategoryChange = (event) => {
      const {
        target: { value },
      } = event;
      setCategory(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
  
    const handleSubCategoryChange = (event) => {
      const {
        target: { value },
      } = event;
      setSubCategory(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
    const closePopUp = () => {
      // setIsAddRfp(true)
      setOpenVendorPopup(false);
    };
    const handleDateChange = (newValue) => {
      setValue(newValue);
    };
  
    console.log(openSpace, "openspace");
  
    console.log(queryList, "querylist");
  
    const classes = useStyles();
  
    return (
      <>
        <div className="popUpmodal">
          <Card className="modal-content">
            <CardHeader
              sx={{
                backgroundColor: "#d04a02",
                color: "white",
              }}
              action={
                <IconButton aria-label="settings" onClick={closePopUp}>
                  <CloseIcon sx={{ color: "white" }} />
                </IconButton>
              }
              title={`Vendors ${vendorId}`}
            />
            <CardContent>
              <div className="modal-body">
                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        {/* <table className="min-w-full text-center border-[1px]">
                          <thead className="border-b bg-gray-800">
                            <tr>
                              <th
                                scope="col"
                                className="text-sm font-medium text-white px-6 py-4"
                              >
                                Vendor Name
                              </th>
                              <th
                                scope="col"
                                className="text-sm font-medium text-white px-6 py-4"
                              >
                                Response Status
                              </th>
                              <th
                                scope="col"
                                className="text-sm font-medium text-white px-6 py-4"
                              >
                                Query
                              </th>
                              <th
                                scope="col"
                                className="text-sm font-medium text-white px-6 py-4"
                              >
                                Closure Date
                              </th>
                              <th
                                scope="col"
                                className="text-sm font-medium text-white px-6 py-4"
                              >
                                Quantity
                              </th>
                              <th
                                scope="col"
                                className="text-sm font-medium text-white px-6 py-4"
                              >
                                Bid Rate
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((item) => {
                              return (
  
                                <tr className="bg-white">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {item.vendorName}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {item.responseStatus}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"  onClick={() => {setOpenSpace(true) 
                                setQueryList(item.query) }} >
                              <div  className="text-blue-500 cursor-pointer" > {item.query}</div>
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {item.closureDate}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {item.quantity}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {item.bidRate}
                              </td>
                            </tr>
  
                              )
                            })}
                           
  
                      
                         
                          </tbody>
                        </table> */}
  
                        <Table
                          className={classes.table}
                          aria-label="simple table"
                        >
                          <TableHead>
                            <TableRow>
                              <TableCell padding="checkbox" />
                              <TableCell>Vendor Name</TableCell>
                              <TableCell align="right">Response Status</TableCell>
                              <TableCell align="right">Query</TableCell>
                              <TableCell align="right">Closure Date</TableCell>
                              <TableCell align="right">
                                Quantity
                              </TableCell>
                              <TableCell align="right">
                                Bid rate
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {/* {rows.map(row => (
              <React.Fragment key={row.name}>
                <TableRow>
                  <TableCell padding="checkbox">
                    <IconButton>
                      <KeyboardArrowDownIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              </React.Fragment>
            ))} */}
  
  
                            {rows.map((row) => (
                              <ExpandableTableRow
                                key={row.name}
                                expandComponent={
                                  <TableCell colSpan="5">{row.detail}</TableCell>
                                }
                              >
                                <TableCell component="th" scope="row">
                                  {row.name}
                                </TableCell>
                                <TableCell align="right">
                                  {row.responseStatus}
                                </TableCell>
                                <TableCell align="right">{row.query}</TableCell>
                                <TableCell align="right">{row.closureDate}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right">{row.bidRate}</TableCell>
                              </ExpandableTableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            {openSpace && <Querylist />}
          </Card>
        </div>
      </>
    );
  };
  
  export default Vendordetails;
  
  // import React from 'react';
  // import { makeStyles } from '@material-ui/core/styles';
  // import Table from '@material-ui/core/Table';
  // import TableBody from '@material-ui/core/TableBody';
  // import TableCell from '@material-ui/core/TableCell';
  // import TableHead from '@material-ui/core/TableHead';
  // import TableRow from '@material-ui/core/TableRow';
  // import Paper from '@material-ui/core/Paper';
  // import IconButton from '@material-ui/core/IconButton';
  // import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
  // import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
  
  // const useStyles = makeStyles({
  //   root: {
  //     width: '100%',
  //     overflowX: 'auto'
  //   },
  //   table: {
  //     minWidth: 650
  //   }
  // });
  
  // function createData(name, calories, fat, carbs, protein, detail) {
  //   return { name, calories, fat, carbs, protein, detail };
  // }
  
  // const rows = [
  //   createData(
  //     'Frozen yoghurt',
  //     159,
  //     6.0,
  //     24,
  //     4.0,
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  //   ),
  //   createData(
  //     'Ice cream sandwich',
  //     237,
  //     9.0,
  //     37,
  //     4.3,
  //     'Maecenas rutrum urna vel lacus viverra, id ultrices dui rutrum'
  //   ),
  //   createData(
  //     'Eclair',
  //     262,
  //     16.0,
  //     24,
  //     6.0,
  //     'Morbi congue gravida nunc, eu cursus felis vulputate id'
  //   ),
  //   createData(
  //     'Cupcake',
  //     305,
  //     3.7,
  //     67,
  //     4.3,
  //     'Vestibulum efficitur, ipsum consectetur finibus maximus, ligula dolor vehicula ex, sed viverra nulla mauris id purus'
  //   ),
  //   createData(
  //     'Gingerbread',
  //     356,
  //     16.0,
  //     49,
  //     3.9,
  //     ' Suspendisse vehicula eu libero eget viverra'
  //   )
  // ];
  
  // const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
  //   const [isExpanded, setIsExpanded] = React.useState(false);
  
  //   return (
  //     <>
  //       <TableRow {...otherProps}>
  //         <TableCell padding="checkbox">
  //           <IconButton onClick={() => setIsExpanded(!isExpanded)}>
  //             {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
  //           </IconButton>
  //         </TableCell>
  //         {children}
  //       </TableRow>
  //       {isExpanded && (
  //         <TableRow>
  //           <TableCell padding="checkbox" />
  //           {expandComponent}
  //         </TableRow>
  //       )}
  //     </>
  //   );
  // };
  
  // export default function Vendordetails() {
  //   const classes = useStyles();
  
  //   return (
  //     <Paper className={classes.root}>
  
  //     </Paper>
  //   );
  // }
  