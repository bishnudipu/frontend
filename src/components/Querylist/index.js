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
  import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
  import { useDispatch } from "react-redux";
  import { setAddCreatRfpPopUp } from "../../redux/feature/popup.feature";
  import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
  import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
  import { useState } from "react";
  import { useAtom } from "jotai";
  import { vendorlistPopup } from "../../jotaistore";
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
      "vendorName": "Suresh",
      "id": 1,
      "responseStatus": "Open",
      "query": 2,
      "Closure Date" : "12/12/22",
      
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }]
  
  
  
  
  const Querylist = () => {
    const [vendorList, setVendorList] = useState([]);
    const [value, setValue] = React.useState(new Date());
    const [category, setCategory] = React.useState([]);
    const [subCategory, setSubCategory] = React.useState([]);
    const [openVendorPopup, setOpenVendorPopup] = useAtom(vendorlistPopup);
    const [openSpace,setOpenSpace] = useState(false)
  
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
  
    console.log(openSpace,'openspace')
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
              title={`Vendors`}
            />
            <CardContent>
              <div className="modal-body">
                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-center border-[1px]">
                          <thead className="border-b bg-gray-800">
                            <tr>
                              <th
                                scope="col"
                                className="text-sm font-medium text-white px-6 py-4"
                              >
                                Querykist
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
                            <tr className="bg-white">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                1
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                Mark
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"  onClick={() => setOpenSpace(true)} >
                                2
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                10/12/22
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                4
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                94
                              </td>
                            </tr>
  
                            <tr className="bg-white">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                1
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                Mark
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              2
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              10/12/22
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              4
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              86
                              </td>
                            </tr>
                            <tr className="bg-white">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                1
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                Mark
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                               0
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                @mdo
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                @mdo
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                @mdo
                              </td>
                            </tr>
                        
                         
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </>
    );
  };
  
  export default Querylist;
  