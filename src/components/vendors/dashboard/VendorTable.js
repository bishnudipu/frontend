import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { Button } from "@material-ui/core";
import CreateRfpPopUp from "../../createrfppopup/createrfppopup";
import { useDispatch, useSelector } from "react-redux";
import VendorPopup from "../../createvendorpopup";
import { setAddCreatRfpPopUp } from "../../../redux/feature/popup.feature";
import { openPopup } from "../../../jotaistore";
import { useAtom } from "jotai";
import { productData } from "../../../jotaistore";
import Notperticipate from "../../notprticipate/notperticipate";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { CSVLink } from "react-csv";

function createData(
  id,
  company,
  category,
  subcat,
  quantity,
  status,
  closerdate,
  bidprice,
  pertnotpert
) {
  return {
    id,
    company,
    category,
    subcat,
    quantity,
    status,
    closerdate,
    bidprice,
    pertnotpert,
  };
}

const rows = [
  createData(
    "#654",
    "Phillips",
    "Monitors",
    "dualcore",
    "5",
    "pending",
    "12/12/2022",
    "9",
    "perticipate"
  ),
  createData(
    "#655",
    "Phillips",
    "Monitors",
    "dualcore",
    "5",
    "pending",
    "12/12/2022",
    "9",
    "perticipate"
  ),
  createData(
    "#656",
    "Phillips",
    "Monitors",
    "dualcore",
    "5",
    "pending",
    "12/12/2022",
    "9",
    "Not Perticipate"
  ),
  createData(
    "#657",
    "Phillips",
    "Monitors",
    "dualcore",
    "5",
    "pending",
    "12/12/2022",
    "9",
    "perticipate"
  ),
  createData(
    "#658",
    "Phillips",
    "Monitors",
    "dualcore",
    "5",
    "pending",
    "12/12/2022",
    "9",
    "perticipate"
  ),
  createData(
    "#659",
    "Phillips",
    "Monitors",
    "dualcore",
    "5",
    "pending",
    "12/12/2022",
    "9",
    "perticipate"
  ),
  createData(
    "#660",
    "Phillips",
    "Monitors",
    "dualcore",
    "5",
    "pending",
    "12/12/2022",
    "9",
    "perticipate"
  ),
  createData(
    "#661",
    "Phillips",
    "Monitors",
    "dualcore",
    "5",
    "pending",
    "12/12/2022",
    "9",
    "perticipate"
  ),
  createData(
    "#662",
    "Phillips",
    "Monitors",
    "dualcore",
    "5",
    "pending",
    "12/12/2022",
    "9",
    "perticipate"
  ),
  createData(
    "#663",
    "Phillips",
    "Monitors",
    "dualcore",
    "5",
    "pending",
    "12/12/2022",
    "9",
    "perticipate"
  ),
  createData(
    "#664",
    "Phillips",
    "Monitors",
    "dualcore",
    "5",
    "pending",
    "12/12/2022",
    "9",
    "perticipate"
  ),
  //   createData('#660','Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('#661','Jelly Bean', 375, 0.0, 94, 0.0),
  //   createData('#662','KitKat', 518, 26.0, 65, 7.0),
  //   createData('#663','Lollipop', 392, 0.2, 98, 0.0),
  //   createData('#664','Marshmallow', 318, 0, 81, 2.0),
  //   createData('#665','Nougat', 360, 19.0, 9, 37.0),
  //   createData('#667','Oreo', 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// const headCells = [
//   {
//     id: "id",
//     numeric: false,
//     disablePadding: true,
//     label: "#ID",
//   },
//   {
//     id: "category",
//     numeric: true,
//     disablePadding: false,
//     label: "Category",
//   },
//   {
//     id: "subcategory",
//     numeric: true,
//     disablePadding: false,
//     label: "Sub-Category",
//   },
//   {
//     id: "Quantity",
//     numeric: true,
//     disablePadding: false,
//     label: "Quantity",
//   },
//   {
//     id: "status",
//     numeric: true,
//     disablePadding: false,
//     label: "Status",
//   },
//   {
//     id: "releasedate",
//     numeric: true,
//     disablePadding: false,
//     label: "Release Date",
//   },
//   {
//     id: "closerdate",
//     numeric: true,
//     disablePadding: false,
//     label: "Closer Date",
//   },
//   {
//     id: "description",
//     numeric: true,
//     disablePadding: false,
//     label: "Description",
//   },
//   {
//     id: "vendors",
//     numeric: true,
//     disablePadding: false,
//     label: "Vendors",
//   },
// ];

function EnhancedTableHead(props) {
  // const {
  //   onSelectAllClick,
  //   order,
  //   orderBy,
  //   numSelected,
  //   rowCount,
  //   onRequestSort,
  // } = props;
  // const createSortHandler = (property) => (event) => {
  //   onRequestSort(event, property);
  // };

  return (
    <TableHead
      style={{
        backgroundColor: "black",
        // color:'white'
      }}
    >
      <TableRow
        style={{
          fontSize: "10px",
        }}
      >
        <TableCell padding="checkbox">
          {/* <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          /> */}
        </TableCell>
        <TableCell
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
            // marginRight:'20px'
          }}
          align="center"
        >
          #ID
        </TableCell>
        <TableCell
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
          align="center"
        >
          Company
        </TableCell>
        <TableCell
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
          align="center"
        >
          Category
        </TableCell>
        <TableCell
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
          align="center"
        >
          Sub-Category
        </TableCell>
        <TableCell
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
          align="center"
        >
          Quantity
        </TableCell>
        <TableCell
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
          align="center"
        >
          Status
        </TableCell>
        <TableCell
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
          align="center"
        >
          Closer Date
        </TableCell>
        <TableCell
          align="center"
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Bid Price
        </TableCell>
        <TableCell
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
          align="center"
        >
          Participate/Not Participate
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [openpopup, setOpenPopup] = useAtom(openPopup);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [orderData, setOrderData] = React.useState(productData);
  const [selectedValue, setSelectedValue] = React.useState("");
  const [ppopup, setPpopup] = React.useState(false);
  // const [isAddRfp,setIsAddRfp] = React.useState(false)
  let dispatch = useDispatch();
  const isPopUp = useSelector((state) => {
    return state["popup"];
  });

  let { createPopup } = isPopUp;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // let modal = null;
  // React.useEffect(() => {
  //   console.log(selected,'bishnuselected' )
  //   if(selected && selected[0] === 'notperticepate'){
  //     modal = <div></div>
  //   }
  // },[selected])

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const componentRef = useRef();
  const handleToPrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "vendor data",
    onAfterPrint: () => alert("print success"),
  });

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const addRfp = () => {
    // setIsAddRfp(true)
    dispatch(setAddCreatRfpPopUp());
  };

  const selectedOnChange = (e) => {
    setSelectedValue(e.target.value);
  };

  React.useEffect(() => {
    console.log(selectedValue, "selectedValue");
    if (selectedValue === "notperticepate") {
      setPpopup(true);
    }
  }, [selectedValue, ppopup]);

  console.log(ppopup, "popup");

  return (
    <Box sx={{ width: "95%", marginX: "auto" }} component="div">
      <Box
        sx={{ display: "flex", width: "100%" }}
        className="  ml-10 flex justify-start items-center"
        component="div"
      >
        <Typography
          style={{
            padding: "20px 0px 20px 0px",
            fontWeight: "normal",
            marginLeft: "-35px",
            fontFamily: "sans-serif",
          }}
        >
          Bid List
        </Typography>

        <div className="relative ml-6 w-[30%]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full h-5 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for RFP ID, Vendors......"
            required
          />
        </div>

        <Box
          component="div"
          sx={{
            position: "absolute",
            right: "1.5%",
            padding: "20px 0px 20px 0px",
            float: "right",
          }}
        >
          <Button
            size="large"
            aria-label="show 4 new mails"
            //   color="inherit"
            style={{
              backgroundColor: "#242526",
              height: "30px",
              marginRight: "10px",
              // borderRadius:'20px',
              fontSize: "15px",
              color: "white",
              //
            }}
            onClick={handleToPrint}
          >
            PRINT
          </Button>
          <CSVLink data={rows} filename={"vendor list"} target="_blank">
            <Button
              size="large"
              aria-label="show 4 new mails"
              //   color="inherit"
              style={{
                backgroundColor: "#242526",
                height: "30px",
                marginRight: "20px",
                // borderRadius:'20px',
                fontSize: "15px",
                color: "white",
                //
              }}
            >
              DOWNLOAD
            </Button>
          </CSVLink>
        </Box>
      </Box>

      <Paper>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer ref={componentRef}>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        onClick={() => setOpenPopup(true)}
                        className="cursor-pointer "
                        align="center"
                      >
                        <div className="text-blue-600"> {row.id}</div>
                      </TableCell>
                      <TableCell align="center">{row.company}</TableCell>
                      <TableCell align="center">{row.category}</TableCell>
                      <TableCell align="center">{row.subcat}</TableCell>
                      <TableCell align="center">
                        <div style={{ marginLeft: "12px" }}>{row.quantity}</div>
                      </TableCell>
                      <TableCell align="center">{row.status}</TableCell>
                      <TableCell align="center">{row.closerdate}</TableCell>
                      <TableCell align="center">{row.bidprice}</TableCell>
                      <TableCell align="center">
                        <select
                          onChange={selectedOnChange}
                          className="bg-green-400 p-2 cursor-pointer"
                        >
                          <option
                            defaultValue="perticepate"
                            className="bg-green-400 cursor-pointer"
                          >
                            Participate
                          </option>
                          <option
                            value="notperticepate"
                            className="bg-red-500 cursor-pointer"
                          >
                            Not Participate
                          </option>
                        </select>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {ppopup && (
        <Notperticipate
          ppopup={ppopup}
          setPpopup={setPpopup}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      )}
      {openpopup && <VendorPopup />}
    </Box>
  );
}
