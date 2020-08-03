import React from "react";
import "./ResultsContainer.css";
import CheckBoxes from "./CheckBoxes";
import RadioButtons from "./RadioButtons";
import ScheduleTable from "./ScheduleTable";

function ResultsContainer(props) {
  console.log("OPTIONS IN RESULTS", props.options);
  return (
    <div>
      <h2>Schedule</h2>
      <div className="checkBoxes">
        <div className="types">
          <h4>Types</h4>
          <CheckBoxes
            options={["Classes", "Exams"]}
            handleCheckBoxEvent={props.handleCheckBoxEvent}
          ></CheckBoxes>
        </div>

        <div className="activities">
          <h4>Activities</h4>
          <RadioButtons
            radioOptions={props.options.radio}
            handleRadioEvent={props.handleRadioEvent}
          ></RadioButtons>
        </div>
      </div>

      <ScheduleTable displayedCourses={props.displayedCourses}></ScheduleTable>
    </div>
  );
}

export default ResultsContainer;
