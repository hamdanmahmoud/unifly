import React from "react";
import "./SearchContainer.css";

import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function SearchContainer(props) {
  const courses = props.courses;
  const handleSelectedCourses = props.handleSelectedCourses;
  return (
    <div className="searchContainer">
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={courses}
        disableCloseOnSelect
        getOptionLabel={(option) => option}
        onChange={(_, selectedCourses) =>
          handleSelectedCourses(selectedCourses)
        }
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option}
          </React.Fragment>
        )}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Type course name..."
          />
        )}
      />
    </div>
  );
}

export default SearchContainer;
