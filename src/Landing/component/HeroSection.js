// src/Main.js
import React from "react";
import "./CSS/Main.css";
import Rating from "@mui/material/Rating";
import { Grid } from "@mui/material";
import { SECONDARY } from "../../styles/color";
import bg from "../../Images/BG.png";
import videoSrc from "../../Images/video.mp4";
const HeroSection = () => {
  const [value, setValue] = React.useState(2);
  return (
    <React.Fragment>
      <div style={{ margin: "3% 6%" }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} md={6}>
            <div className="d-flex" style={{ alignItems: "" }}>
              <Rating
                name="read-only"
                value={value}
                readOnly
                className="mr-3"
                style={{ marginRight: "10px" }}
              />
              <p style={{ fontSize: "15px" }}>Trusted by over 4,332 students</p>
            </div>
            <p
              style={{
                fontSize: "85px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              Learn Design with Nia Matos
            </p>
            <p
              style={{ fontWeight: "400", fontSize: "18px", color: SECONDARY }}
            >
              Get your blood tests delivered at home. Let us collect samples
              from the victory of management that supplies the best design
              system guidelines ever.
            </p>
          </Grid>

          <Grid item xs={12} md={6} style={{ textAlign: "end" }}>
            {" "}
            <div
              className="video-section"
              style={{ maxWidth: "100%", textAlign: "right" }}
            >
              <video
                controls
                className="video"
                style={{ width: "100%", height: "auto" }}
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
