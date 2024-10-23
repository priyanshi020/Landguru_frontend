import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import xmark from "../../Images/_xmark.png";
import plus from "../../Images/plus.png";

const StyledAccordion = styled(Accordion)({
  margin: "0px 0",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
});

const StyledAccordionSummary = styled(AccordionSummary)({
  "& .MuiAccordionSummary-content": {
    display: "flex",
    alignItems: "center",
  },
});

export default function Accordian() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="text-center ">
        <p className="fw-bold" style={{ color: "#FF9906",fontSize:'14px' }}>
        Frequent Question
        </p>
        <p className="mt-3 fw-bold" style={{fontSize:'36px'}}>Do you have any question</p>
      </div>
      <div style={{ width: "60%", margin: "0 auto", borderRadius: "65px" }}>
        <StyledAccordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          style={{padding:'2%'}}
        >
          <StyledAccordionSummary
            aria-controls="panel1-content"
            id="panel1-header"
            style={{fontSize:'18px',fontWeight:'400'}}
          >
            <img
              src={expanded === "panel1" ? xmark : plus}
              alt={expanded === "panel1" ? "collapse" : "expand"}
              style={{ width: "20px", height: "20px", marginRight: "12px" }}
            />
            <span className="text-secondary mr-5" style={{marginRight:'10px'}}>01</span>How to contact with riders emergency ?
          </StyledAccordionSummary>
          <AccordionDetails className="text-secondary" style={{fontSize:'16px',fontWeight:'400',marginLeft:'10%'}}>
            You can get a quote by visiting our Get a Quote page, calling our customer service at 1-800-123-4567, or visiting one of our local offices.
          </AccordionDetails>
        </StyledAccordion>

        <StyledAccordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          style={{padding:'2%'}}
        >
          <StyledAccordionSummary
            aria-controls="panel2-content"
            id="panel2-header"
            style={{fontSize:'18px',fontWeight:'400'}}
          >
            <img
              src={expanded === "panel2" ? xmark : plus}
              alt={expanded === "panel2" ? "collapse" : "expand"}
              style={{ width: "20px", height: "20px", marginRight: "12px" }}
            />
            <span className="text-secondary mr-5" style={{marginRight:'10px'}}>02</span>App installation failed, how to update system information?
          </StyledAccordionSummary>
          <AccordionDetails className="text-secondary" style={{fontSize:'16px',fontWeight:'400',marginLeft:'10%'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </StyledAccordion>

        <StyledAccordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          style={{padding:'2%'}}
        >
          <StyledAccordionSummary
            aria-controls="panel3-content"
            id="panel3-header"
            style={{fontSize:'18px',fontWeight:'400'}}
          >
            <img
              src={expanded === "panel3" ? xmark : plus}
              alt={expanded === "panel3" ? "collapse" : "expand"}
              style={{ width: "20px", height: "20px", marginRight: "8px" }}
            />
            <span className="text-secondary mr-5" style={{marginRight:'10px'}}>03</span>Website reponse taking time, how to improve?
          </StyledAccordionSummary>
          <AccordionDetails className="text-secondary" style={{fontSize:'16px',fontWeight:'400',marginLeft:'10%'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </StyledAccordion>

        <StyledAccordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          style={{padding:'2%'}}
        >
          <StyledAccordionSummary
            aria-controls="panel4-content"
            id="panel4-header"
            style={{fontSize:'18px',fontWeight:'400'}}
          >
            <img
              src={expanded === "panel4" ? xmark : plus}
              alt={expanded === "panel4" ? "collapse" : "expand"}
              style={{ width: "20px", height: "20px", marginRight: "12px" }}
            />
            <span className="text-secondary mr-5" style={{marginRight:'10px'}}>04</span>New update fixed all bug and issues
          </StyledAccordionSummary>
          <AccordionDetails className="text-secondary" style={{fontSize:'16px',fontWeight:'400',marginLeft:'10%'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </StyledAccordion>

      
      </div>
    </>
  );
}
