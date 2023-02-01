import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
} from "@material-ui/core";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./rfpproducts.css";
import Live from "../../Assets/live.jpg";
import Open from "../../Assets/Open.png";
import Close from "../../Assets/Close.png";
import Pending from "../../Assets/Pending.png";
import EnhancedTable from "./rfpproductstable/rpfproductstable";
import axios from "axios";
function RfpProducts() {
  const [openCount, setOpenCount] = useState(0);
  const [closedCount, setClosedCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);

  const getOpenData = async () => {
    const response = await axios.get("http://localhost:5000/getopencount");
    console.log(response.data.closedcount[0].count, "open");
    setOpenCount(response.data.closedcount[0].count);
  };

  const getClosedData = async () => {
    const response = await axios.get("http://localhost:5000/getopencount");
    console.log(response.data.closedcount[0].count, "open");
    setClosedCount(response.data.closedcount[0].count);
  };

  const getPendingData = async () => {
    const response = await axios.get("http://localhost:5000/getpendingcount");
    console.log(response.data.closedcount[0].count, "open");
    setPendingCount(response.data.closedcount[0].count);
  };

  useEffect(() => {
    getOpenData();
    getClosedData();
    getPendingData();
  }, []);

  return (
    <>
      <div className="rfpProducts">
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
                      {openCount} Open
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
                      {closedCount} Close
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
                      {pendingCount} Pending
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Box
        sx={{
          backgroundColor: "#dedede",
          // backgroundSize:'cover'
          paddingBottom: "10px",
        }}
      >
        <Grid>
          <EnhancedTable />
        </Grid>
      </Box>
    </>
  );
}

export default RfpProducts;
