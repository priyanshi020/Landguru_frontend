import React from "react";
import { PRIMARY, SECONDARY } from "../../styles/color";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Card, Grid } from "@mui/material";
import tick from "../../Images/tick.png";
import cross from "../../Images/cross.png";
import Button from "../../component/Button";
const Pricing = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <div className="text-center">
        <p style={{ fontSize: "14px", color: PRIMARY, fontWeight: "400" }}>
          PRICING PLAN
        </p>
        <p style={{ fontSize: "36px", color: SECONDARY, fontWeight: "600" }}>
          Choose your pricing policy
        </p>
      </div>
      <Box
        sx={{
          width: "30%",
          maxWidth: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px auto",
          backgroundColor: "#F7F8FB",
          padding: "10px",
          borderRadius: "10px",
        }}
        className="text-center"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="black"
          indicatorColor="transparent"
          aria-label="centered tabs example"
          centered
        >
          <Tab
            value="one"
            label="Monthly Plan"
            sx={{
              backgroundColor: value === "one" ? "white" : "#F7F8FB",
              color: "black",
              borderRadius: "5px",
              padding: "10px 40px",

              boxShadow:
                value === "one" ? "0px 4px 6px rgba(0,0,0,0.1)" : "none",
              transition: "background-color 0.3s",
            }}
          />
          <Tab
            value="two"
            label="Annual Plan"
            sx={{
              backgroundColor: value === "two" ? "white" : "#F7F8FB",
              color: "black",
              borderRadius: "5px",
              padding: "10px 40px",

              boxShadow:
                value === "two" ? "0px 4px 6px rgba(0,0,0,0.1)" : "none",
              transition: "background-color 0.3s",
            }}
          />
        </Tabs>
      </Box>
      <div style={{ margin: "2% 10%" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className="p-5">
              <p style={{ fontSize: "22px", fontWeight: "500" }}>Free Plan</p>
              <p style={{ fontSize: "16px" }}>For Small teams or office</p>
              <div className="d-flex ">
                <img src={tick} className="mr-2" height={23} />
                <p
                  style={{
                    fontSize: "16px",
                    color: SECONDARY,
                    marginLeft: "8px",
                  }}
                  className="ml-5"
                >
                  Ultimate access to all course, exercises and assessments
                </p>
              </div>
              <div className="d-flex ">
                <img src={tick} className="mr-2" height={23} />
                <p
                  style={{
                    fontSize: "16px",
                    color: SECONDARY,
                    marginLeft: "8px",
                  }}
                  className="ml-5"
                >
                  Free acess for all kind of exercise corrections with
                  downloads.
                </p>
              </div>
              <div className="d-flex ">
                <img src={tick} className="mr-2" height={23} />
                <p
                  style={{
                    fontSize: "16px",
                    color: SECONDARY,
                    marginLeft: "8px",
                  }}
                  className="ml-5"
                >
                  Total assessment corrections with free download access system
                </p>
              </div>
              <div className="d-flex ">
                <img src={cross} className="mr-2" height={23} />
                <p
                  style={{ fontSize: "16px", color: "gray", marginLeft: "8px" }}
                  className="ml-5"
                >
                  Total assessment corrections with free download access system
                </p>
              </div>
              <div className="d-flex ">
                <img src={cross} className="mr-2" height={23} />
                <p
                  style={{ fontSize: "16px", color: "gray", marginLeft: "8px" }}
                  className="ml-5"
                >
                  Total assessment corrections with free download access system
                </p>
              </div>
              <div className="d-flex justify-content-center mt-5">
                <div className="w-25 ">
                  <Button
                    text="Explore Details"
                    color="#EF9E48"
                    size="sm"
                    block={true}
                    className=""
                  />
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="p-5">
              <div className="d-flex justify-content-between">
                <div>
                  <p style={{ fontSize: "22px", fontWeight: "500" }}>Premium</p>
                  <p style={{ fontSize: "16px" }}>For startup enterprise</p>
                </div>
                <div>
                  <p style={{ fontSize: "16px", color: SECONDARY }}>
                    Starting from
                  </p>
                  <p style={{ fontSize: "26px", color: "#25CB9E" }}>49.99/mo</p>
                </div>
              </div>
              <div className="d-flex">
                <img src={tick} className="mr-2" height={23} />
                <p
                  style={{
                    fontSize: "16px",
                    color: SECONDARY,
                    marginLeft: "8px",
                  }}
                  className="ml-5"
                >
                  Ultimate access to all course, exercises and assessments
                </p>
              </div>
              <div className="d-flex">
                <img src={tick} className="mr-2" height={23} />
                <p
                  style={{
                    fontSize: "16px",
                    color: SECONDARY,
                    marginLeft: "8px",
                  }}
                  className="ml-5"
                >
                  Free access for all kinds of exercise corrections with
                  downloads.
                </p>
              </div>
              <div className="d-flex">
                <img src={tick} className="mr-2" height={23} />
                <p
                  style={{
                    fontSize: "16px",
                    color: SECONDARY,
                    marginLeft: "8px",
                  }}
                  className="ml-5"
                >
                  Total assessment corrections with free download access system
                </p>
              </div>
              <div className="d-flex">
                <img src={tick} className="mr-2" height={23} />
                <p
                  style={{
                    fontSize: "16px",
                    color: SECONDARY,
                    marginLeft: "8px",
                  }}
                  className="ml-5"
                >
                  Total assessment corrections with free download access system
                </p>
              </div>
              <div className="d-flex">
                <img src={tick} className="mr-2" height={23} />
                <p
                  style={{
                    fontSize: "16px",
                    color: SECONDARY,
                    marginLeft: "8px",
                  }}
                  className="ml-5"
                >
                  Total assessment corrections with free download access system
                </p>
              </div>

              <div className="d-flex justify-content-center mt-5">
                <div className="w-25">
                  <Button
                    text="Explore Details"
                    color="#EF9E48"
                    size="sm"
                    block={true}
                    className=""
                  />
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Pricing;
