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
  import { openPopup } from "../../jotaistore";
  import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
  import { useDispatch } from "react-redux";
  //   import { setAddCreatRfpPopUp } from "../../redux/feature/popup.feature";
  import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
  import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
  import Accordion from "@mui/material/Accordion";
  import AccordionSummary from "@mui/material/AccordionSummary";
  import AccordionDetails from "@mui/material/AccordionDetails";
  import Typography from "@mui/material/Typography";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  
  import { useAtom } from "jotai";
import VendorHome from "../../pages/vendorHome/vendorhomepage";
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
  function Notperticipate({setPpopup,setSelectedValue}) {
    const [personName, setPersonName] = React.useState([]);
    const [value, setValue] = React.useState(new Date());
    const [popup, setPopup] = useAtom(openPopup);
  
    let dispatch = useDispatch();
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
  
   
    const closePopUp = () => {
     
        setPpopup(false)
        setSelectedValue("Perticipate")
    };
    const handleDateChange = (newValue) => {
      setValue(newValue);
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
              title="Not Participate for this Bid"
            />
            <CardContent>
              <div className="modal-body">
                <form>
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
                          Company Name
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          multiple
                          value={personName}
                          onChange={handleChange}
                          input={<OutlinedInput label="Tag" />}
                          renderValue={(selected) => selected.join(", ")}
                          // MenuProps={MenuProps}
                          required
                        >
                          {names.map((name) => (
                            <MenuItem key={name} value={name}>
                              <Checkbox checked={personName.indexOf(name) > -1} />
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
                          RFP Id.
                        </InputLabel>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          required
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
                          value={personName}
                          onChange={handleChange}
                          input={<OutlinedInput label="Tag" />}
                          renderValue={(selected) => selected.join(", ")}
                          // MenuProps={MenuProps}
                        >
                          {names.map((name) => (
                            <MenuItem key={name} value={name}>
                              <Checkbox checked={personName.indexOf(name) > -1} />
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
                          value={personName}
                          onChange={handleChange}
                          input={<OutlinedInput label="Tag" />}
                          renderValue={(selected) => selected.join(", ")}
                          // MenuProps={MenuProps}
                        >
                          {names.map((name) => (
                            <MenuItem key={name} value={name}>
                              <Checkbox checked={personName.indexOf(name) > -1} />
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
                        <TextField id="outlined-basic" variant="outlined" />
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
                              value={value}
                              onChange={handleDateChange}
                              renderInput={(params) => (
                                <TextField
                                  style={{
                                    width: "85%",
                                  }}
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
                              value={value}
                              onChange={handleDateChange}
                              renderInput={(params) => (
                                <TextField
                                  style={{
                                    width: "85%",
                                  }}
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
                              value={value}
                              onChange={handleDateChange}
                              renderInput={(params) => (
                                <TextField
                                  disabled
                                  style={{
                                    width: "85%",
                                  }}
                                  {...params}
                                />
                              )}
                            />
                          </LocalizationProvider>
                        </Box>
                      </FormControl>
                    </Grid>
                    <Grid item md={4}>
                      Participate in bid?
                      <div className="flex ">
                        <div>
                          <input
                            type="radio"
                            id="yes"
                            name="drone"
                            value="yes"
                            checked
                          />
                          <label for="huey">Yes</label>
                        </div>
                        <div className="ml-[20px]">
                          <input
                            type="radio"
                            id="no"
                            name="drone"
                            value="no"
                            checked
                          />
                          <label for="huey">No</label>
                        </div>
                      </div>
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
                        />
                      </FormControl>
                    </Grid>
                    <Grid item md={7.3} lg={7.3}>
                      <FormControl sx={{ width: "100%" }}>
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
                        <TextField variant="outlined" fullWidth multiline />
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
  
  export default Notperticipate;
  