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
import "./rfpproducts.css";
import Live from "../../Assets/live.jpg";
import Open from "../../Assets/Open.png";
import Close from "../../Assets/Close.png";
import Pending from "../../Assets/Pending.png";
import EnhancedTable from "./rfpproductstable/rpfproductstable";
function RfpProducts() {
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
