import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function FormControlLabelPosition(props) {
  const options = props.options;
  const labels = [];
  const handleCheckBoxEvent = props.handleCheckBoxEvent;
  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    labels.push(
      <FormControlLabel
        value={option.toLowerCase()}
        onChange={(event, value) =>
          handleCheckBoxEvent(event.target.value, value)
        }
        control={<Checkbox color="primary" defaultChecked={true} />}
        label={option}
        labelPlacement="end"
        key={i}
      />
    );
  }
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        {labels}
      </FormGroup>
    </FormControl>
  );
}
