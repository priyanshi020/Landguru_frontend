import React from "react";
import { PRIMARY, SECONDARY } from "../../styles/color";
import Button from "../../component/Button";
import { Card, Grid } from "@mui/material";
import "./CSS/feature.css";
const Feature = () => {
  return (
    <React.Fragment>
      <div style={{ margin: "3% 6%" }}>
        <Grid container spacing={4} className="">
          <Grid item xs={12} md={6}>
            <div className="d-flex ">
              <div className="mt-5 " style={{ marginRight: "10px" }}>
                <Card className="p-3 text-center rounded-4 shadow shadow-md mb-5 card1">
                  <p
                    style={{
                      fontSize: "72px",
                      fontWeight: "500",
                      color: "#EF9E48",
                    }}
                  >
                    80K+
                  </p>
                  <p style={{ fontSize: "18px", color: SECONDARY }}>
                    We have more than
                    <br /> students
                  </p>
                </Card>

                <Card className="p-3 text-center rounded-4 shadow shadow-md card1">
                  <p
                    style={{
                      fontSize: "72px",
                      fontWeight: "500",
                      color: "#FA578E",
                    }}
                  >
                    90+
                  </p>
                  <p style={{ fontSize: "18px", color: SECONDARY }}>
                    Daily updated blog
                    <br />
                    post maintain
                  </p>
                </Card>
              </div>
              <div>
                <Card className="p-3 text-center rounded-4 shadow shadow-md mb-5 card1">
                  <p
                    style={{
                      fontSize: "72px",
                      fontWeight: "500",
                      color: "#FF753A",
                    }}
                  >
                    150+
                  </p>
                  <p style={{ fontSize: "18px", color: SECONDARY }}>
                    Free online tutorials
                    <br />
                    videos avaialble
                  </p>
                </Card>
                <Card className="p-3 text-center rounded-4 shadow shadow-md card1">
                  <p
                    style={{
                      fontSize: "72px",
                      fontWeight: "500",
                      color: "#E682FF",
                    }}
                  >
                    & 3M
                  </p>
                  <p style={{ fontSize: "18px", color: SECONDARY }}>
                    Job posted everydays <br />
                    with qualification
                  </p>
                </Card>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p style={{ color: PRIMARY }}>CORE FEATURES</p>
            <p style={{ fontSize: "48px", fontWeight: "700" }}>
              Smart Jackpots that you may love this anytime & anywhere
            </p>
            <p style={{ color: SECONDARY, fontSize: "18px" }}>
              Get your tests delivered at let home collect sample from the
              victory of the managments that supplies best design system
              guidelines ever. Get your tests delivered at let home collect
              sample.
            </p>
            <div className="w-25 mt-5">
              <Button
                text="Explore"
                color="#EF9E48"
                size="sm"
                block={true}
                className=""
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Feature;
