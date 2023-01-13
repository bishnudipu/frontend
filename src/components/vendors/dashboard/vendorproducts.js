import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
} from "@material-ui/core";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./vendorproducts.css";
import Live from "../../../Assets/live.jpg";
import Open from "../../../Assets/Open.png";
import Close from "../../../Assets/Close.png";
import pendingvendor from "../../../Assets/Vendor-Icons/Pending.png";
import neworder from "../../../Assets/Vendor-Icons/New Orders.png";
import totalorder from "../../../Assets/Vendor-Icons/Total-Orders.png";
// import pendingvendor from "../../../Assets/pendingvendor.png";
import delivered from "../../../Assets/Vendor-Icons/Delivered.png";

function VendorProducts() {
  return (
    <>
      <div className="rfpProducts">
        <Box
          sx={{
            marginBottom: "30px",
          }}
        >
          <div className="w-full mx-auto md:flex justify-evenly items-center gap-7">
            <div className="max-w-sm p-6 bg-slate-50   rounded-lg shadow-md border-b-[30px] border-orange-600 relative md:w-96 md:h-56 flex justify-around items-center  ">
              <img src={totalorder} height="150px" width="150px" alt="" />
              <div className="text-[50px]"> 14</div>

              <div className="absolute bottom-[-24px] right-2 text-white  ">
                Total Orders
              </div>
            </div>

            {/* <div className="bg-orange-600 rounded-b-lg text-right text-white">
                <div className="mr-[9px]">Total Orders</div>
              </div> */}

            <div className="max-w-sm p-6 bg-slate-50   rounded-lg shadow-md border-b-[30px] border-orange-600 relative md:w-96 md:h-56 flex justify-around items-center  ">
              <img src={neworder} height="150px" width="150px" alt="" />
              <div className="text-[50px]"> 14</div>

              <div className="absolute bottom-[-22px] right-2 text-white ">
                New Orders
              </div>
            </div>

            <div className="max-w-sm p-6 bg-slate-50   rounded-lg shadow-md border-b-[30px] border-orange-600 relative md:w-96 md:h-56 flex justify-around items-center  ">
              <img src={pendingvendor} height="150px" width="150px" alt="" />
              <div className="text-[50px]"> 14</div>

              <div className="absolute bottom-[-22px] right-2 text-white ">
                Pending
              </div>
            </div>
            <div className="max-w-sm p-6 bg-slate-50   rounded-lg shadow-md border-b-[30px] border-orange-600 relative md:w-96 md:h-56 flex justify-around items-center  ">
              <img src={delivered} height="150px" width="150px" alt="" />
              <div className="text-[50px]"> 14</div>

              <div className="absolute bottom-[-22px] right-2 text-white ">
                Delivered
              </div>
            </div>
          </div>
        </Box>
      </div>
      <Box></Box>
    </>
  );
}

export default VendorProducts;
