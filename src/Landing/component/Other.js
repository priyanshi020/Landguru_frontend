import React from "react";
import Button from "../../component/Button";

const Other = () => {
  return (
    <React.Fragment>
      <div
        className="d-flex flex-column align-items-center"
        style={{ margin: "7%" }}
      >
        <p
          className="text-center"
          style={{ fontSize: "50px", fontWeight: "500" }}
        >
          Ready to learn design
          <br />
          with Nia Matos
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
      </div>
    </React.Fragment>
  );
};

export default Other;
