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
import React, { useState } from "react";
import "./createrfpopopup.css";
import {
  Box,
  Button,
  Checkbox,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextareaAutosize,
} from "@material-ui/core";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useDispatch } from "react-redux";
import { setAddCreatRfpPopUp } from "../../redux/feature/popup.feature";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers";
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

function CreateRfpPopUp() {
  const [vendorList, setVendorList] = React.useState([]);
  const [releaseDate, setReleaseDate] = React.useState(new Date());
  const [category, setCategory] = React.useState([]);
  const [subCategory, setSubCategory] = React.useState([]);
  const [rfpState, setRefpState] = React.useState("");
  const [qunatity, setQuantity] = useState("");
  const [rfpCost, setRfpCost] = useState(0);
  const [closureDate, setClosureDate] = React.useState(new Date());
  const [file, setFile] = React.useState();
  const [details, setDetails] = React.useState("");

  const [bidDate, setBidDate] = React.useState(new Date());

  console.log(vendorList, "vendorList");
  console.log(category, "category");
  console.log(subCategory, "subCategory");
  console.log(qunatity, "quantity");

  console.log(closureDate, "closureDate");
  console.log(releaseDate, "releaseDate");
  console.log(bidDate, "bidDate");

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
    dispatch(setAddCreatRfpPopUp());
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
  console.log(file, "file");

  console.log(rfpCost, "bishnu");
  console.log(vendorList, "vendorlist");

  // const validationSchema = yup.object().shape({
  //   vendorlist: yup.array().required("Required"),
  //   rfpno: yup.string().required("Required"),
  //   categories: yup.array().required("Required"),
  // });

  const submitHandler = (e) => {
    e.preventDefault();

    debugger;
    const formData = new FormData();
    formData.append("bishnu", "shshs");
    formData.append("bishnu", "shshssssssss");

    formData.append("vendor", [vendorList]);
    formData.append("rfpno", rfpState);
    formData.append("category", [category]);
    formData.append("subcategory", [subCategories]);
    formData.append("quantity", qunatity); //$d
    formData.append("releaseDate", releaseDate.$d);
    formData.append("closureDate", closureDate.$d);
    formData.append("bidDate", bidDate.$d);
    formData.append("rfpcost", rfpCost); //name
    formData.append("file", file.name);

    formData.append("details", details);

    axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });

    for (const value of formData.values()) {
      console.log(value, "formdata");
    }
  };

  return (
    <>
      <div className="popUpmodal">
        {/* <div className="modaloverlay"></div> */}
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
                            <Checkbox checked={vendorList.indexOf(name) > -1} />
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
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={category}
                        onChange={handleCategoryChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(", ")}
                        name="category"
                        // MenuProps={MenuProps}
                      >
                        {categories.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={category.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
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
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={subCategory}
                        onChange={handleSubCategoryChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(", ")}
                        name="subCategory"
                        // MenuProps={MenuProps}
                      >
                        {subCategories.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox
                              checked={subCategory.indexOf(name) > -1}
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
                        Quantity
                      </InputLabel>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
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
                        // value={file}
                        onChange={handleFileChange}
                        name="file"
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
                        value={details}
                        name="details"
                        onChange={(e) => setDetails(e.target.value)}
                      />
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
    </>
  );
}

export default CreateRfpPopUp;
