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
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
import { useState,useRef } from "react";
import { useAtom } from "jotai";
import { vendorlistPopup } from "../../jotaistore";
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
    query: 0,
    responseStatus: "Open",
    closureDate: "10/02/22",
    quantity: 4,
    bidRate: 92,
  },
  {
    vendorName: "A Mennucc1",
    id: 2,
    query: 1,
    responseStatus: "Pending",
    closureDate: "10/09/22",
    quantity: 6,
    bidRate: 96,
    senderMessage: [
      {
        "Do you need Internal or external Webcam, lock, carrying case, external hard drive for backups?": `The monitor/display size is: 14" LCD monitor, resolution of 1600 x 900 or better. Intel Core i5, Microsoft Windows 10 Professional x64,
         16 GB RAM`,
      },
      // {
      //   re1:,
      // },
      {
        "Need to understand more details on the Laptop configuration. Please call at 9900178921":""
      },
      // {
      //   re1: ,
      // },
    ],
  },
  {
    vendorName: "Aasi Media",
    id: 3,
    query: 2,
    responseStatus: "Closed",
    closureDate: "10/11/22",
    quantity: 3,
    bidRate: 82,
    senderMessage: [
      {
        "Do you need Internal or external Webcam, lock, carrying case, external hard drive for backups?": `The monitor/display size is: 14" LCD monitor, resolution of 1600 x 900 or better. Intel Core i5, Microsoft Windows 10 Professional x64,
         16 GB RAM`,
      },
      // {
      //   re1:,
      // },
      {
        "Need to understand more details on the Laptop configuration. Please call at 9900178921": `The monitor/display size is: 14" LCD monitor, resolution of 1600 x 900 or better. Intel Core i5, Microsoft Windows 10 Professional x64,
       16 GB RAM`,
      },
      // {
      //   re1: ,
      // },
    ],

    receiverMessage: {},
  },
];

const Vendordetails = ({ vendorId }) => {
  const [vendorList, setVendorList] = useState([]);
  const [value, setValue] = React.useState(new Date());
  const [category, setCategory] = React.useState([]);
  const [subCategory, setSubCategory] = React.useState([]);
  const [openVendorPopup, setOpenVendorPopup] = useAtom(vendorlistPopup);
  const [openSpace, setOpenSpace] = useState(false);
  const [queryList, setQueryList] = useState("");
  const [userId,setUserId] = useState("")


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

  const [expandedRows, setExpandedRows] = useState(null);
  const [isExpanded,setIsExpanded] = useState(false);

  const handleExpandRow = (userId) => {

    setUserId(userId)
    let currentExpandedRows = null;
    console.log(userId,'userId')

    const isRowExpanded = currentExpandedRows === userId ? userId : null;
    console.log(isRowExpanded,'isexpanded')
    console.log(currentExpandedRows,'currentExpandedRows')
    const newExpandedRows = isRowExpanded
      ? null
      : (currentExpandedRows = userId);
    if (expandedRows !== userId) {
      setExpandedRows(newExpandedRows);
      setIsExpanded(true)
    } else {
      setExpandedRows(null);
      setIsExpanded(false)
    }
  
  };

  console.log(userId,'userId')
  console.log('','bishnu')
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
            title={`Vendors ${vendorId}`}
          />
          <CardContent>
            <div className="modal-body">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-center border-[1px] bg--500">
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

                        {data.map((item, index) => {
                          console.log(index,'indexnumber')
                          const {
                            vendorName,
                            responseStatus,
                            query,
                            closureDate,
                            quantity,
                            bidRate,
                            senderMessage,
                          } = item;
                          console.log(vendorName,'vendorName')
                          return (
                            <tbody>
                              <tr
                                className="bg-white"
                                onClick={() => handleExpandRow(index)}
                              >
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {vendorName}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {responseStatus}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex">
                                  <div className="text-blue-500 cursor-pointer">
                                    {" "}
                                    {query}
                                  </div>
                                 { query > 0 && isExpanded && userId === index ? <ExpandLessIcon  className="cursor-pointer"/> : <ExpandMoreIcon  className="cursor-pointer"   />}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {closureDate}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {quantity}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {bidRate}
                                </td>
                              </tr>
                              {expandedRows === index ? (
                                <tr>
                                  
                                  <td
                                    colSpan="6"
                                    className="collaps-viewer mx-auto  "
                                  >
                                     
                                    {query > 0 && (
                                      <>
                                        {senderMessage.map((item,index) => {
                                        console.log(Object.values(item).join(),'objectvalues')
                                       const marginTopKeep = Object.values(item).join()
                                          return (
                                            <> 
                                          
                                              <div className="h-4 bg-slate-100 text-left font-sans  text-[10px] ">
                                                {" "}
                                               {index + 1} Query{" "}
                                              </div>
                                              <div className=" w-full flex text-left  h-[50px] text-[14px]">
                                                {/* {senderMessage.map(
                                            (item) => item.sen1
                                          )} */}
                                                {Object.keys(item)}
                                              </div>
                                              <div className="h-4 bg-slate-100 text-left font-sans  text-[10px]">
                                              {index + 1} answer
                                              </div>

                                              <div className={`w-full flex text-left  h-[50px] text-[14px] ${ marginTopKeep === '' && 'hidden' } `}>
                                                {/* {senderMessage.map(
                                            (item) => item.re1
                                          )} */}
                                                {Object.values(item).length > 0 && Object.values(item)}
                                              </div>

                                              {/* <div className="h-4 bg-slate-100 text-left font-sans  text-[10px] ">
                                          {" "}
                                        </div>
                                        <input className=" w-full flex text-left h-[50px] text-[14px]" />
                                        <div className=" mt-4  flex justify-end items-end ">
                                          <button className="  bg-[#d04a02] p-2 px-3 text-[#ffffff] ">
                                            Replay
                                          </button>
                                        </div> */}
                                            </>
                                          );
                                        })}
                                        <input className=" w-full flex text-left h-[50px] text-[14px] border border-black " />
                                        <div className=" mt-4  flex justify-end items-end ">
                                          <button className="  bg-[#d04a02] p-2 px-3 text-[#ffffff] ">
                                            Replay
                                          </button>
                                        </div>
                                      </>
                                    )}
                                  </td>
                                </tr>
                              ) : null}
                            </tbody>
                          );
                        })}
                      </table>
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
