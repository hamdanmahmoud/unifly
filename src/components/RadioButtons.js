import React, { useEffect, useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function FormControlLabelPlacement(props) {
  const [state, setState] = useState({
    radioOptions: props.radioOptions,
  });
  console.log("OPTIONS IN RESULTS", state.radioOptions);
  const radioButtons = Object.keys(state.radioOptions);
  const handleRadioEvent = props.handleRadioEvent;
  const labels = [];
  for (let i = 0; i < radioButtons.length; i++) {
    const option = radioButtons[i];
    labels.push(
      <FormControlLabel
        value={option}
        control={<Radio color="primary" />}
        label={option.charAt(0).toUpperCase() + option.slice(1)}
        key={i}
        onChange={(event, value) => handleRadioEvent(event.target.value, value)}
      />
    );
  }

  useEffect(() => {
    console.log("Radio options changed");
    setState((prevState) => ({
      ...prevState,
      radioOptions: props.radioOptions,
    }));
  }, [props.radioOptions]);

  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-label="position"
        name="position"
        defaultValue="this week"
      >
        {labels}
      </RadioGroup>
    </FormControl>
  );
}
