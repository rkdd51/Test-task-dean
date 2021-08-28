import React from "react";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Avatar } from "@material-ui/core";
import "./main.css";
import Step1 from "./Assets/Wizard-Step1.png";
import Step2 from "./Assets/Wizard-Step2.png";
import Step3 from "./Assets/Wizard-Step3.png";
import Step4 from "./Assets/Wizard-Step4.png";
import Step5 from "./Assets/Wizard-Step5.png";
import logo from "./Assets/Logo.png";
import AvatarN from "./Assets/Avatar.png";

export default function SpacingGrid() {
  return (
    <Grid container>
      <Grid container justify="center">
        <img src={logo} />
      </Grid>

      <Grid
        container
        spacing={5}
        justify="center"
        style={{ marginTop: "10px", color: "grey" }}
      >
        {/* <hr /> */}{" "}
        <Grid item style={{ color: "blue" }} className="steps">
          <Avatar src={Step1} />
          <br />
          <span className="STEPS">
            {" "}
            STEP 1 :<br />
          </span>
          <br />
          <span>
            CREATE YOUR <br />
            ACCOUNT <br />
            PASSWORD
          </span>
        </Grid>
        <Grid item justify="center" className="steps">
          <Avatar src={Step2} />
          <br />
          <span className="STEPS">
            {" "}
            STEP 2 :<br />
          </span>
          <br />
          PERSONAL
          <br />
          INFORMATION
        </Grid>
        <Grid item justify="center" className="steps">
          <Avatar src={Step3} />
          <br />
          <span className="STEPS">
            {" "}
            STEP 3 :<br />
          </span>
          <br />
          EMPLOYEMENT
          <br />
          DETAILS
        </Grid>
        <Grid item justify="center" className="steps">
          <Avatar src={Step4} />
          <br />
          <span className="STEPS">
            {" "}
            STEP 4 :<br />
          </span>
          <br />
          UPLOAD
          <br />
          DOCUMENTS
        </Grid>
        <Grid item justify="center" className="steps">
          <Avatar src={Step5} />
          <br />
          <span className="STEPS">
            {" "}
            STEP 5 :<br />
          </span>
          <br />
          COMPLETE
          <br />
        </Grid>
      </Grid>
      <div
        style={{ alignContent: "center", width: "745px", margin: "30px auto" }}
      >
        <Grid
          container
          justify="center"
          style={{
            marginTop: "30px",
            color: "black",
            background: "lightblue",
            height: "30px",
            padding: "5px",
          }}
          className="create1"
        >
          CREATE YOUR ACCOUNT
        </Grid>
      </div>
      <Grid container justify="center" className="para">
        Because there will be document that you need to prepare to apply for the
        loan, let's start off by <br />
        creating a password so that you can login to your account once you have
        these document ready.
        <br />
        <br />
      </Grid>
      <Grid container>
        {/* <div style={{margin:"30px auto"}}>
          <Avatar src={AvatarN} style={{width:"100px", height:"100px"}} />
        </div> */}

        <Grid container justify="center">
          <div>
            <Avatar src={AvatarN} style={{ width: "100px", height: "100px" }} />{" "}
            {/* <br /> */}
            &nbsp; &nbsp; <span className="avatar">Upload</span>
          </div>
          &nbsp; &nbsp;
          <div>
            <div>
              Name
              <br />
              <input type="text" className="input" />
            </div>
            <br />
            <div>
              Password
              <br />
              <input type="password" className="input" />
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;
          <div>
            <div>
              Email
              <br />
              <input type="text" className="input" />
            </div>
            <br></br>

            <div>
              Confirm Password
              <br />
              <input type="password" className="input" />
            </div>
          </div>
        </Grid>

        <Grid container justify="center">
          <button className="button">
            SAVE & NEXT <ArrowForwardIcon />
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
}
