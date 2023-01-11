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
import "./vendors.css";

import pendingvendor from "../../Assets/Vendor-Icons/Pending.png";
import neworder from "../../Assets/Vendor-Icons/New Orders.png";
import totalorder from "../../Assets/Vendor-Icons/Total-Orders.png";
// import pendingvendor from "../../../Assets/pendingvendor.png";
import delivered from "../../Assets/Vendor-Icons/Delivered.png";
import VendorTable from "./dashboard/VendorTable";
function Vendors() {
  return (
    <>
      
      <Box
        sx={{
          backgroundColor: "#dedede",
          // backgroundSize:'cover'
          paddingBottom: "10px",
        }}
      >
        <Grid>
          <VendorTable />
        </Grid>
      </Box>
    </>
  );
}

export default Vendors;

/**
 * 
 */

// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Container,
//   Grid,
// } from "@material-ui/core";
// import { Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import React from "react";
// import "./vendors.css";
// import Live from "../../Assets/live.jpg";
// import Open from "../../Assets/Open.png";
// import Close from "../../Assets/Close.png";
// import Pending from "../../Assets/Pending.png";
// import VendorTable from "./dashboard/VendorTable";
// function Vendors() {
//   return (
//     <Box
//       sx={{
//         backgroundColor: "#dedede",
//         // backgroundSize:'cover'
//         paddingBottom: "10px",
//       }}
//     >
//       <Grid>
//         <VendorTable />
//       </Grid>
//     </Box>
//   );
// }

// export default Vendors;

/**
 * import {
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
          
             <div>
             <div className="block p-6 rounded-t-lg bg-slate-50  max-w-sm w-[265px] h-[140px]">
                <div className="flex justify-between items-center " >
                <img src={totalorder} height='100px' width = '100px'/>
                <div  className="text-[50px]" > 14</div>
                </div>           
            </div>
            <div className="bg-orange-600 rounded-b-lg text-right text-white">
              <div className='mr-[9px]'>Total Orders</div>
            </div>
             </div>
             <div>
             <div className="block p-6 rounded-t-lg bg-slate-50  max-w-sm w-[265px] h-[140px]">
                <div className="flex justify-between items-center " >
                <img src={neworder} height='100px' width = '100px'/>
                <div  className="text-[50px]" > 12</div>
                </div>           
            </div>
            <div className="bg-orange-600 rounded-b-lg text-right text-white">
              <div className='mr-[9px]'>New Orders</div>
            </div>
             </div>
             <div>
             <div className="block p-6 rounded-t-lg bg-slate-50  max-w-sm w-[265px] h-[140px]">
                <div className="flex justify-between items-center " >
                <img src={pendingvendor} height='90px' width = '90px'/>
                <div  className="text-[50px]" > 5</div>
                </div>           
            </div>
            <div className="bg-orange-600 rounded-b-lg text-right text-white">
              <div className='mr-[9px]'>Pending</div>
            </div>
             </div>
             <div>
             <div className="block p-6 rounded-t-lg bg-slate-50  max-w-sm w-[265px] h-[140px]">
                <div className="flex justify-between items-center " >
                <img src={delivered} height='100px' width = '100px'/>
                <div  className="text-[50px]" > 16</div>
                </div>           
            </div>
            <div className="bg-orange-600 rounded-b-lg text-right text-white">
              <div className='mr-[9px]'>Delivered</div>
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

 */
/**
 * <div className="rfpProducts">
        <Typography
          variant="h5"
          style={{
            marginBottom: "20px",
          }}
        >
          Overview
        </Typography>
        <Box
          sx={{
            marginBottom: "30px",
          }}
        >
          <Grid container spacing={7}>
            <Grid item md={4}>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="div"
                  style={{
                    width: "130px",
                    height: "100px",
                    backgroundColor: "#d04a02",
                  }}
                >
                  <img
                    src={Open}
                    alt=""
                    style={{
                      marginLeft: "15px",
                      marginTop: "10px",
                    }}
                  />
                </CardMedia>
                <Box>
                  <CardContent>
                    <Typography
                      component="div"
                      style={{
                        marginLeft: "60px",
                        marginTop: "20px",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      3 Open
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="div"
                  style={{
                    width: "130px",
                    height: "100px",
                    backgroundColor: "#d04a02",
                  }}
                >
                  <img
                    src={Close}
                    style={{
                      marginLeft: "15px",
                      marginTop: "10px",
                    }}
                  />
                </CardMedia>
                <Box>
                  <CardContent>
                    <Typography
                      component="div"
                      style={{
                        marginLeft: "60px",
                        marginTop: "20px",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      6 Close
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="div"
                  style={{
                    width: "130px",
                    height: "100px",
                    backgroundColor: "#d04a02",
                  }}
                >
                  <img
                    src={Pending}
                    style={{
                      marginLeft: "15px",
                      marginTop: "10px",
                    }}
                  />
                </CardMedia>
                <Box>
                  <CardContent>
                    <Typography
                      component="div"
                      style={{
                        marginLeft: "60px",
                        marginTop: "20px",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      11 Pending
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* <Box
          sx={{
            marginBottom: "30px",
          }}
        >
          <div className="w-full mx-auto md:flex justify-evenly items-center gap-7">
            <div>
              <div className="block p-6 rounded-t-lg bg-slate-50  max-w-sm w-[265px] h-[140px]">
                <div className="flex justify-between items-center ">
                  <img src={totalorder} height="100px" width="100px" />
                  <div className="text-[50px]"> 14</div>
                </div>
              </div>
              <div className="bg-orange-600 rounded-b-lg text-right text-white">
                <div className="mr-[9px]">Total Orders</div>
              </div>
            </div>
            <div>
              <div className="block p-6 rounded-t-lg bg-slate-50  max-w-sm w-[265px] h-[140px]">
                <div className="flex justify-between items-center ">
                  <img src={neworder} height="100px" width="100px" />
                  <div className="text-[50px]"> 12</div>
                </div>
              </div>
              <div className="bg-orange-600 rounded-b-lg text-right text-white">
                <div className="mr-[9px]">New Orders</div>
              </div>
            </div>
            <div>
              <div className="block p-6 rounded-t-lg bg-slate-50  max-w-sm w-[265px] h-[140px]">
                <div className="flex justify-between items-center ">
                  <img src={pendingvendor} height="90px" width="90px" />
                  <div className="text-[50px]"> 5</div>
                </div>
              </div>
              <div className="bg-orange-600 rounded-b-lg text-right text-white">
                <div className="mr-[9px]">Pending</div>
              </div>
            </div>
            <div>
              <div className="block p-6 rounded-t-lg bg-slate-50  max-w-sm w-[265px] h-[140px]">
                <div className="flex justify-between items-center ">
                  <img src={delivered} height="100px" width="100px" />
                  <div className="text-[50px]"> 16</div>
                </div>
              </div>
              <div className="bg-orange-600 rounded-b-lg text-right text-white">
                <div className="mr-[9px]">Delivered</div>
              </div>
            </div>
          </div>
        </Box> 
      
 */