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
import React, { useEffect, useState } from "react";
import "./createrfpopopup.css";
import { createVendorPopup } from "../../jotaistore";
import {
  Box,
  Button,
  Checkbox,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@material-ui/core";
import { Autocomplete } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useDispatch } from "react-redux";
import { setAddCreatRfpPopUp } from "../../redux/feature/popup.feature";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { createVendorSuccess } from "../../jotaistore";
import * as yup from "yup";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Success from "../success";
import { yupResolver } from "@hookform/resolvers";
import { useAtom } from "jotai";
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

function CreateRfpPopUp({ data, setData }) {
  const [vendorList, setVendorList] = React.useState([]);
  const [releaseDate, setReleaseDate] = React.useState(new Date());
  // const [categoryitem, setCategoryitem] = React.useState("");
  // const [subCategory, setSubCategory] = React.useState([]);
  const [rfpState, setRefpState] = React.useState("");
  const [qunatity, setQuantity] = useState("");
  const [rfpCost, setRfpCost] = useState(0);
  const [closureDate, setClosureDate] = React.useState(new Date());
  const [file, setFile] = React.useState();
  const [details, setDetails] = React.useState("");
  const [success, setSuccess] = useState(false);
  const [successSetup, setSuccessSetup] = useAtom(createVendorSuccess);
  const [openModal, setOpen] = React.useState(false);
  const [createVpopup, setCreateVpopup] = useAtom(createVendorPopup);
  const [getCategory, setGetCategory] = useState([]);
  const [getSubCategory, setGetSubCategory] = useState([]);
  const [categoryDefine, setCategoryDefine] = useState("");
  const [subcategoryDefine, setSubCategoryDefine] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [bidDate, setBidDate] = React.useState(new Date());

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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const closePopUp = () => {
    // setIsAddRfp(true)
    setCreateVpopup(false);
  };
  const handleReleaseDate = (newValue) => {
    setReleaseDate(newValue);
  };

  const handleClosureDate = (newValue) => {
    setClosureDate(newValue);
  };

  const handleBidDate = (newValue) => {
    setBidDate(newValue);
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  // const validationSchema = yup.object().shape({
  //   vendorlist: yup.array().required("Required"),
  //   rfpno: yup.string().required("Required"),
  //   categories: yup.array().required("Required"),
  // });

  const category = [...new Set(data.map((item) => item.category))];

  const handleCategory = (event, value) => {
    let subcategories = data.filter((state) => state.category === value);
    subcategories = [
      ...new Set(
        subcategories.map((item) => {
          return item.subcategory;
        })
      ),
    ];
    subcategories.sort();

    setGetSubCategory(subcategories);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("vendor", vendorList);
    formData.append("rfpnumber", rfpState);
    formData.append("category", categoryDefine);
    formData.append("subcategory", subcategoryDefine);
    formData.append("Quantity", qunatity); //$d
    formData.append("ReleaseDate", releaseDate || releaseDate.$d);
    formData.append("ClosureDate", closureDate || closureDate.$d);
    formData.append("BidDate", bidDate || bidDate.$d);
    formData.append("rfpcost", rfpCost); //name
    formData.append("uploadtheDocument", file);

    formData.append("Details", details);

    axios({
      method: "post",
      url: "http://localhost:5000/createRFP",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success

        if (response.status === 201) {
          setSuccess(response.status);
          setSuccessSetup(true);
          setCreateVpopup(false);
          setSuccess(true);
        }
        //   setTimeout(() => {
        //     <
        //   }, 2000);
        // }
      })
      .catch(function (response) {
        //handle error
      });
  };

  console.log(categoryDefine, "categorydefine");
  console.log(subcategoryDefine, "subcategorydefine");

  return (
    <>
      <div className="popUpmodal">
        <div className="modaloverlay">
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
              title="CREATE RFP"
            />
            <CardContent>
              <div className="modal-body">
                <form onSubmit={submitHandler}>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <FormControl sx={{ width: 220 }}>
                        <InputLabel
                          style={{
                            marginBottom: "10px",
                            // fontWeight:'bold'
                            color: "black",
                            fontSize: "14px",
                          }}
                        >
                          Vendor List
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          multiple
                          value={vendorList}
                          onChange={handleChange}
                          input={<OutlinedInput label="Tag" />}
                          renderValue={(selected) => selected.join(", ")}
                          name="vendorlist"
                          // MenuProps={MenuProps}
                          required
                        >
                          {names.map((name) => (
                            <MenuItem key={name} value={name}>
                              <Checkbox
                                checked={vendorList.indexOf(name) > -1}
                              />
                              <ListItemText primary={name} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item md={4}>
                      <FormControl>
                        <InputLabel
                          style={{
                            marginBottom: "10px",
                            // fontWeight:'bold'
                            color: "black",
                            fontSize: "14px",
                          }}
                        >
                          RFP No.
                        </InputLabel>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          required
                          name="rfpState"
                          onChange={(e) => setRefpState(e.target.value)}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item md={4}>
                      <FormControl sx={{ width: 220 }}>
                        <InputLabel
                          style={{
                            marginBottom: "10px",
                            // fontWeight:'bold'
                            color: "black",
                            fontSize: "14px",
                          }}
                        >
                          Categories
                        </InputLabel>

                        <Autocomplete
                          onChange={(event, value) =>
                            handleCategory(event, value)
                          }
                          id="category"
                          getOptionLabel={(category) => `${category}`}
                          options={category}
                          isOptionEqualToValue={(option, value) => {
                            setCategoryDefine(value);
                            return option.category === value.name;
                          }}
                          noOptionsText={"No Available Data"}
                          renderOption={(props, category) => (
                            <Box
                              component="li"
                              {...props}
                              key={category}
                              value={getCategory}
                            >
                              {category}
                            </Box>
                          )}
                          renderInput={(params) => (
                            <TextField {...params} label="Search" />
                          )}
                        />
                      </FormControl>
                    </Grid>

                    <Grid item md={4}>
                      <FormControl sx={{ width: 220 }}>
                        <InputLabel
                          style={{
                            marginBottom: "10px",
                            // fontWeight:'bold'
                            color: "black",
                            fontSize: "14px",
                          }}
                        >
                          Sub-Categories
                        </InputLabel>
                        <Autocomplete
                          id="Sub Category"
                          getOptionLabel={(getSubCategory) =>
                            `${getSubCategory}`
                          }
                          options={getSubCategory}
                          isOptionEqualToValue={(option, value) => {
                            setSubCategoryDefine(value);
                            return option.name === value.name;
                          }}
                          noOptionsText={"No Available User"}
                          renderOption={(props, getSubCategory) => (
                            <Box component="li" {...props} key={getSubCategory}>
                              {getSubCategory}
                            </Box>
                          )}
                          renderInput={(params) => (
                            <TextField {...params} label="Sub Category" />
                          )}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item md={4}>
                      <FormControl>
                        <InputLabel
                          style={{
                            marginBottom: "10px",
                            // fontWeight:'bold'
                            color: "black",
                            fontSize: "14px",
                          }}
                        >
                          Quantity
                        </InputLabel>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          required
                          value={qunatity}
                          onChange={(e) => setQuantity(e.target.value)}
                          name="qunatity"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item md={4}>
                      <FormControl>
                        <InputLabel
                          style={{
                            marginBottom: "10px",
                            // fontWeight:'bold'
                            color: "black",
                            fontSize: "14px",
                          }}
                        >
                          Release Date
                        </InputLabel>
                        <Box style={{ display: "flex" }}>
                          {/* <TextField
                          style={{
                            marginRight: "10px",
                            width: "190px",
                          }}
                          id="outlined-basic"
                          variant="outlined"
                        />{" "}
                        <CalendarMonthIcon
                          style={{
                            marginTop: "5px",
                          }}
                        /> */}
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                              inputFormat="MM/DD/YYYY"
                              value={releaseDate}
                              onChange={handleReleaseDate}
                              name="releaseDate"
                              required
                              renderInput={(params) => (
                                <TextField
                                  style={{
                                    width: "85%",
                                  }}
                                  value={releaseDate}
                                  name="releaseDate"
                                  {...params}
                                />
                              )}
                            />
                          </LocalizationProvider>
                        </Box>
                      </FormControl>
                    </Grid>
                    <Grid item md={4}>
                      <FormControl>
                        <InputLabel
                          style={{
                            marginBottom: "10px",
                            // fontWeight:'bold'
                            color: "black",
                            fontSize: "14px",
                          }}
                        >
                          Closure Date
                        </InputLabel>
                        <Box style={{ display: "flex" }}>
                          {/* <TextField
                          style={{
                            marginRight: "10px",
                            width: "190px",
                          }}
                          id="outlined-basic"
                          variant="outlined"
                        />{" "}
                        <CalendarMonthIcon
                          style={{
                            marginTop: "5px",
                          }}
                        /> */}

                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                              // label="Date desktop"
                              inputFormat="MM/DD/YYYY"
                              value={closureDate}
                              onChange={handleClosureDate}
                              name="closuredate"
                              renderInput={(params) => (
                                <TextField
                                  style={{
                                    width: "85%",
                                  }}
                                  value={closureDate}
                                  required
                                  name="closuredate"
                                  {...params}
                                />
                              )}
                            />
                          </LocalizationProvider>
                        </Box>
                      </FormControl>
                    </Grid>
                    <Grid item md={4}>
                      <FormControl>
                        <InputLabel
                          style={{
                            marginBottom: "10px",
                            // fontWeight:'bold'
                            color: "black",
                            fontSize: "14px",
                          }}
                        >
                          Bid Date
                        </InputLabel>
                        <Box style={{ display: "flex" }}>
                          {/* <TextField
                          style={{
                            marginRight: "10px",
                            width: "190px",
                          }}
                          id="outlined-basic"
                          variant="outlined"
                        />{" "}
                        <CalendarMonthIcon
                          style={{
                            marginTop: "5px",
                          }}
                        /> */}
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                              // label="Date desktop"
                              inputFormat="MM/DD/YYYY"
                              value={bidDate}
                              onChange={handleBidDate}
                              name="biddate"
                              renderInput={(params) => (
                                <TextField
                                  disabled
                                  style={{
                                    width: "85%",
                                  }}
                                  required
                                  name="bidDate"
                                  value={bidDate}
                                  {...params}
                                />
                              )}
                            />
                          </LocalizationProvider>
                        </Box>
                      </FormControl>
                    </Grid>
                    <Grid item md={4}>
                      <FormControl>
                        <InputLabel
                          style={{
                            marginBottom: "10px",
                            // fontWeight:'bold'
                            color: "black",
                            fontSize: "14px",
                          }}
                        >
                          RFP Cost (&#8377;)
                        </InputLabel>
                        <TextField
                          type="number"
                          id="outlined-basic"
                          variant="outlined"
                          value={rfpCost}
                          name="rfpCost"
                          required
                          onChange={(e) => setRfpCost(e.target.value)}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item md={4}>
                      <FormControl>
                        <InputLabel
                          style={{
                            marginBottom: "10px",
                            // fontWeight:'bold'
                            color: "black",
                            fontSize: "14px",
                          }}
                        >
                          Upload the Document
                        </InputLabel>
                        <TextField
                          type="file"
                          id="outlined-basic"
                          variant="outlined"
                          required
                          // value={file}
                          onChange={handleFileChange}
                          name="file"
                          accept="csv/*"
                          // value={file}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item md={8} lg={8}>
                      <FormControl sx={{ width: "92%" }}>
                        <InputLabel
                          style={{
                            marginBottom: "10px",
                            // fontWeight:'bold'
                            color: "black",
                            fontSize: "14px",
                          }}
                        >
                          Details
                        </InputLabel>
                        <TextField
                          variant="outlined"
                          fullWidth
                          multiline
                          required
                          value={details}
                          inputProps={{ maxLength: 250 }}
                          name="details"
                          onChange={(e) => setDetails(e.target.value)}
                        />
                        <div className="text-[10px] text-right ">
                          Max Characters Length :- 250
                        </div>
                      </FormControl>
                    </Grid>
                    <Grid item md={12}>
                      <Box
                        component="div"
                        style={{
                          float: "right",
                          marginTop: "10px",
                        }}
                      >
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
                          type="submit"
                        >
                          Submit
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      {<div>Bishnu</div>}
    </>
  );
}

export default CreateRfpPopUp;
