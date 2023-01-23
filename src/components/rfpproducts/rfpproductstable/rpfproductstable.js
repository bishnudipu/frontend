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
import CloseIcon from "@mui/icons-material/Close";
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
import { Button, Modal } from "@material-ui/core";
import CreateRfpPopUp from "../../createrfppopup/createrfppopup";
import { useDispatch, useSelector } from "react-redux";
import { setAddCreatRfpPopUp } from "../../../redux/feature/popup.feature";
import { useReactToPrint } from "react-to-print";
import { CSVLink } from "react-csv";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { useAtom } from "jotai";
import {
  createVendorSuccess,
  rfpData,
  totalvendor,
  vendorlistPopup,
} from "../../../jotaistore";
import Vendordetails from "../../vendordetails";
import VendorPopup from "../../createvendorpopup";
import { createVendorPopup } from "../../../jotaistore";
import Success from "../../success";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

// import { Stack } from "@mui/system";

const CreateData = (
  Id,
  Category,
  SubCategory,
  Quantity,
  Status,
  Releasedate,
  Closuredate,
  Description,
  Vendors
) => {
  return {
    Id,
    Category,
    SubCategory,
    Quantity,
    Status,
    Releasedate,
    Closuredate,
    Description,
    Vendors,
  };
};

const rows = [
  CreateData(
    "#654",
    "Electronics",
    "Monitors",
    "98 Pics",
    "Open",
    "12/11/2022",
    "12/12/2022",
    "Need 98 Pcs of Dell Brand Monitors",
    6
  ),
  CreateData(
    "#655",
    "Food & Health",
    "Package Drinking Water",
    "12 Pics",
    "Pending",
    "12/11/2022",
    "12/12/2022",
    "Need 12 Pcs of Package Drinking Water",
    10
  ),
  CreateData(
    "#656",
    "Electronics",
    "Mouse and Keyboards",
    "12 Pics",
    "Pending",
    "12/11/2022",
    "12/12/2022",
    "Need 12 Pcs of Dell Brand Mouse and Keyboards",
    10
  ),
  CreateData(
    "#658",
    "Furniture",
    "Working Desk",
    "11 Pics",
    "Closed",
    "12/11/2022",
    "12/12/2022",
    "Need 11 Pcs of Working Desk",
    7
  ),
  CreateData(
    "#659",
    "Office Supply",
    "Office Stationery",
    "9 Pics",
    "Closed",
    "12/11/2022",
    "12/12/2022",
    "Need 9 Pcs of sticky note pad 10 pen stand, 2 Nos of papper",
    "6"
  ),
  CreateData(
    "#660",
    "Office Supply",
    "Office Stationery",
    "9 Pics",
    "Closed",
    "12/11/2022",
    "12/12/2022",
    "Need 9 Pcs of sticky note pad 10 pen stand, 2 Nos of papper",
    "6"
  ),
  CreateData(
    "#661",
    "Office Supply",
    "Office Stationery",
    "9 Pics",
    "Closed",
    "12/11/2022",
    "12/12/2022",
    "Need 9 Pcs of sticky note pad 10 pen stand, 2 Nos of papper",
    "6"
  ),
  CreateData(
    "#661",
    "Office Supply",
    "Office Stationery",
    "9 Pics",
    "Closed",
    "12/11/2022",
    "12/12/2022",
    "Need 9 Pcs of sticky note pad 10 pen stand, 2 Nos of papper",
    "6"
  ),
  CreateData(
    "#662",
    "Office Supply",
    "Office Stationery",
    "9 Pics",
    "Closed",
    "12/11/2022",
    "12/12/2022",
    "Need 9 Pcs of sticky note pad 10 pen stand, 2 Nos of papper",
    "6"
  ),
  CreateData(
    "#663",
    "Office Supply",
    "Office Stationery",
    "9 Pics",
    "Closed",
    "12/11/2022",
    "12/12/2022",
    "Need 9 Pcs of sticky note pad 10 pen stand, 2 Nos of papper",
    "6"
  ),
  CreateData(
    "#664",
    "Office Supply",
    "Office Stationery",
    "9 Pics",
    "Closed",
    "12/11/2022",
    "12/12/2022",
    "Need 9 Pcs of sticky note pad 10 pen stand, 2 Nos of papper",
    "6"
  ),
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

function EnhancedTableHead(props) {
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
          align="center"
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
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
          {/* <div className="mr-[10px]">Status </div> */}
        </TableCell>
        <TableCell
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
          align="center"
        >
          Release Date
        </TableCell>
        <TableCell
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
          align="center"
        >
          Closure Date
        </TableCell>
        <TableCell
          align="center"
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Description
        </TableCell>
        <TableCell
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
          align="center"
        >
          Vendors
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
  const [dense, setDense] = React.useState(false);
  const [openVendorPopup, setVendorPopup] = useAtom(vendorlistPopup);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [vendorId, setVendorId] = React.useState("");
  const [createVPopup, setCreateVPopup] = useAtom(createVendorPopup);
  const [successSetup, setSuccessSetup] = useAtom(createVendorSuccess);
  const [vendorList, setVendorList] = useAtom(totalvendor);
  const [rfpResponse, setRfpResponse] = useAtom(rfpData);
  // const [isAddRfp,setIsAddRfp] = React.useState(false)
  let dispatch = useDispatch();
  const isPopUp = useSelector((state) => {
    return state["popup"];
  });

  let { createPopup } = isPopUp;

  // const rows = [createData(rfpResponse.rfpnumber, rfpResponse.category)];
  // rfpResponse.data.map((item) => {

  //   return <div>item</div>;
  // });

  //

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  // const style = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: 400,
  //   bgcolor: "background.paper",
  //   border: "2px solid #000",
  //   boxShadow: 24,
  //   p: 4,
  // };

  const getRfp = async () => {
    const response = await axios.get("http://localhost:5000/getrfps");
    response.status !== 200 ? console.log("loading") : console.log("success");
    setRfpResponse(response.data);
  };

  useEffect(() => {
    getRfp();
  }, []);

  const [data, setData] = React.useState([]);
  // const [getCategory, setGetCategory] = useState([]);
  // const [getSubCategory, setGetSubCategory] = useState([]);

  const categoryData = async () => {
    const response = await fetch("http://localhost:5000/getCategory");
    const data = await response.json();
    setData(data);
  };

  React.useEffect(() => {
    categoryData();
  }, []);

  const getData = async () => {
    const response = await axios.get("http://localhost:5000/getVender");
  };

  React.useEffect(() => {
    getData();
  }, []);

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

  const componentRef = React.useRef();
  const handleToPrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "vendor data",
    onAfterPrint: () => alert("print success"),
  });

  return (
    <Box sx={{ width: "96%", marginX: "auto" }} component="div">
      <Box sx={{ display: "flex", width: "100%" }} component="div">
        <Typography
          style={{
            padding: "20px 0px 20px 0px",
            fontWeight: "bold",
          }}
        >
          RFP Dashboard
        </Typography>

        <Box
          component="div"
          sx={{
            position: "absolute",
            right: "40px",
            padding: "20px 0px 20px 0px",
            float: "right",
          }}
        >
          <Button
            size="large"
            aria-label="show 4 new mails"
            //   color="inherit"
            style={{
              backgroundColor: "#d04a02",
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
                backgroundColor: "#d04a02",
                height: "30px",
                marginRight: "10px",
                // borderRadius:'20px',
                fontSize: "15px",
                color: "white",
                //
              }}
            >
              DOWNLOAD
            </Button>
          </CSVLink>
          <Button
            size="large"
            aria-label="show 4 new mails"
            //   color="inherit"
            style={{
              backgroundColor: "#d04a02",
              height: "30px",
              // marginRight: "10px",
              // borderRadius:'20px',
              fontSize: "15px",
              color: "white",
              //
            }}
            onClick={() => {
              setCreateVPopup(true);
            }}
          >
            Create RFP
          </Button>
        </Box>
      </Box>

      <Paper sx={{ width: "100%", mb: 2 }}>
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
              rowCount={rfpResponse.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
              {stableSort(rfpResponse, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.rfpnumber);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.rfpnumber)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.rfpnumber}
                      selected={isItemSelected}
                      sx={{ height: "70px" }}
                    >
                      <TableCell padding="checkbox"></TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align="center"
                      >
                        {row.rfpnumber}
                      </TableCell>
                      <TableCell align="center">{row.category}</TableCell>
                      <TableCell align="center">{row.subcategory}</TableCell>

                      <TableCell align="center">
                        {" "}
                        <div> {row.Quantity} </div>{" "}
                      </TableCell>
                      <TableCell align="center">
                        {" "}
                        <div className="mr-[15px]">open </div>
                      </TableCell>
                      <TableCell align="center">{row.ReleaseDate}</TableCell>
                      <TableCell align="center">{row.ClosureDate}</TableCell>
                      <TableCell align="center">{row.Details}</TableCell>
                      <TableCell
                        align="center"
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          setVendorPopup(true);
                          setVendorId(row.rfpnumber);
                        }}
                      >
                        {" "}
                        <div className="text-blue-500 ">
                          {" "}
                          {row.vendor.length}
                        </div>
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

      {createVPopup && <CreateRfpPopUp data={data} setData={setData} />}
      {successSetup && (
        // <Modal
        //   keepMounted
        //   aria-labelledby="keep-mounted-modal-title"
        //   aria-describedby="keep-mounted-modal-description"
        // >
        //   <Box sx={style}>
        //     <Typography
        //       id="keep-mounted-modal-title"
        //       variant="h6"
        //       component="h2"
        //     >
        //       Text in a modal
        //     </Typography>
        //     <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
        //       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        //     </Typography>
        //   </Box>
        // </Modal>

        <div
          className="modaloverlay"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack
            sx={{
              width: "30%",
            }}
            spacing={2}
          >
            <div className="p-[120px]  ">
              <Alert
                severity="success"
                sx={{ display: "flex" }}
                className="relative"
              >
                <div
                  className="absolute right-[-10px] top-[-13px] bg-[#ffffff] rounded-[50%] text-orange-600 cursor-pointer "
                  onClick={() => setSuccessSetup(false)}
                >
                  <CloseIcon />
                </div>
                <div>
                  {` RFP is successfully created and have sent to ${vendorList.length} vendors`}
                </div>
              </Alert>
            </div>
          </Stack>
        </div>
        // <CreateRfpPopUp />
      )}

      {openVendorPopup && <Vendordetails vendorId={vendorId} />}
    </Box>
  );
}
