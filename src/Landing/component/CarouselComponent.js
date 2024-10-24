import { Grid } from "@mui/material";
import React from "react";
import { PRIMARY, SECONDARY } from "../../styles/color";
import Button from "../../component/Button";
import card from "../../Images/1.png";
const CarouselComponent = () => {
  return (
    <React.Fragment>
      <div style={{ margin: "7% 5%" }}>
        <Grid container className="">
          <Grid item xs={12} md={6}>
            <img src={card} />
          </Grid>
          <Grid item xs={12} md={6}>
            <p style={{ color: PRIMARY }}>FREE TUTORIAL</p>
            <p style={{ fontSize: "48px", fontWeight: "700" }}>
              More than thousand of free tutorial upload every weeks
            </p>
            <p style={{ color: SECONDARY, fontSize: "18px" }}>
              Get your tests delivered at let home collect sample from the
              victory of the managments that supplies best design system
              guidelines ever. Get your tests delivered at let home collect
              sample.
            </p>
            <div className="w-25 mt-5">
              <Button
                text="Explore Details"
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

export default CarouselComponent;
