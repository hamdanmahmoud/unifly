import React, { useState, useEffect } from "react";
import "./GenericContainer.css";
import SearchContainer from "./SearchContainer";
import ResultsContainer from "./ResultsContainer";
import moment from "moment";

const courses = [
  {
    weekday: "Tue",
    date: "2020-10-08",
    time: "14:00",
    name: "Computer architecture",
    location: "JK 204",
    activityType: "Lecture",
    professor: "G. Iorga",
    groups: "1240F, 1241F",
    activityTypeCategory: "OTHER",
  },
  {
    weekday: "Wed",
    date: "2020-10-09",
    time: "12:00",
    name: "Applied Electronics",
    location: "NB 108",
    activityType: "Lab",
    professor: "M. Zaragoza",
    groups: "1241F",
    activityTypeCategory: "OTHER",
  },
  {
    weekday: "Mon",
    date: "2020-10-14",
    time: "10:00",
    name: "Management",
    location: "JK 202",
    activityType: "Seminary",
    professor: "S. Jmen",
    groups: "1240F, 1241F",
    activityTypeCategory: "OTHER",
  },
  {
    weekday: "Wed",
    date: "2020-10-09",
    time: "18:00",
    name: "Computer architecture",
    location: "JK 203",
    activityType: "Seminary",
    professor: "G. Iorga",
    groups: "1240F, 1241F",
    activityTypeCategory: "OTHER",
  },
  {
    weekday: "Mon",
    date: "2020-10-14",
    time: "16:00",
    name: "Computer architecture",
    location: "JK 203",
    activityType: "Laboratory",
    professor: "I. Iram",
    groups: "1240F, 1241F",
    activityTypeCategory: "OTHER",
  },
  {
    weekday: "Tue",
    date: "2020-10-15",
    time: "14:00",
    name: "Computer architecture",
    location: "JK 203",
    activityType: "Digital Exam",
    professor: "G. Iorga",
    groups: "1240F, 1241F",
    activityTypeCategory: "EXAM",
  },
  {
    weekday: "Wed",
    date: "2020-10-16",
    time: "12:00",
    name: "Applied Electronics",
    location: "JK 201",
    activityType: "Written Exam",
    professor: "M. Zaragoza",
    groups: "1241F",
    activityTypeCategory: "EXAM",
  },
  {
    weekday: "Wed",
    date: "2020-10-16",
    time: "18:00",
    name: "Management",
    location: "NB 001",
    activityType: "Written Exam",
    professor: "S. Jmen",
    groups: "1240F, 1241F",
    activityTypeCategory: "EXAM",
  },
  {
    weekday: "Thu",
    date: "2020-07-30",
    time: "14:00",
    name: "Object Oriented Programming",
    location: "JK 001",
    activityType: "Lecture",
    professor: "G. Iorga",
    groups: "1240F, 1241F",
    activityTypeCategory: "OTHER",
  },
  {
    weekday: "Wed",
    date: "2020-07-29",
    time: "16:00",
    name: "Object Oriented Programming",
    location: "JK 004",
    activityType: "Laboratory",
    professor: "I. Iram",
    groups: "1240F, 1241F",
    activityTypeCategory: "OTHER",
  },
  {
    weekday: "Fri",
    date: "2020-07-31",
    time: "12:00",
    name: "Object Oriented Programming",
    location: "JK 004",
    activityType: "Written Exam",
    professor: "I. Iram",
    groups: "1240F, 1241F",
    activityTypeCategory: "EXAM",
  },
  {
    weekday: "Mon",
    date: "2020-07-27",
    time: "12:00",
    name: "Security",
    location: "JK 003",
    activityType: "Lecture",
    professor: "V. Arian",
    groups: "1241F",
    activityTypeCategory: "OTHER",
  },
  {
    weekday: "Tue",
    date: "2020-07-29",
    time: "14:00",
    name: "Security",
    location: "JK 002",
    activityType: "Laboratory",
    professor: "V. Arian",
    groups: "1241F",
    activityTypeCategory: "OTHER",
  },
  {
    weekday: "Fri",
    date: "2020-07-31",
    time: "16:00",
    name: "Security",
    location: "JK 004",
    activityType: "Digital Exam",
    professor: "V. Arian",
    groups: "1241F",
    activityTypeCategory: "EXAM",
  },
  {
    weekday: "Mon",
    date: "2020-08-03",
    time: "12:00",
    name: "Security",
    location: "JK 003",
    activityType: "Lecture",
    professor: "V. Arian",
    groups: "1241F",
    activityTypeCategory: "OTHER",
  },
  {
    weekday: "Tue",
    date: "2020-08-04",
    time: "14:00",
    name: "Security",
    location: "JK 002",
    activityType: "Laboratory",
    professor: "V. Arian",
    groups: "1241F",
    activityTypeCategory: "OTHER",
  },
];

function GenericContainer() {
  const [state, setState] = useState({
    courses: courses,
    selectedCourses: [],
    displayedCourses: [],
    options: {
      classes: true,
      exams: true,
      radio: {
        "this week": true,
        "whole year": false,
      },
    },
  });

  function handleSelectedCourses(updatedSelections) {
    // param is list of strings
    const selectedCourses = courses.filter(
      (course) => updatedSelections.indexOf(course.name) !== -1
    );
    setState((prevState) => ({
      ...prevState,
      selectedCourses: selectedCourses, // property is actual objects
      displayedCourses: [],
    }));
  }

  function handleCheckBoxEvent(checkBox, value) {
    console.log("Handling checkbox event", checkBox, value);
    setState((prevState) => ({
      ...prevState,
      options: {
        ...prevState.options,
        [checkBox]: value,
      },
    }));
  }

  function handleRadioEvent(radioButton, value) {
    console.log("Handling radio button event", radioButton, value);
    let radioOptions = state.options.radio;
    Object.keys(radioOptions).forEach(
      (radioOption) => (radioOptions[radioOption] = false)
    );

    setState((prevState) => ({
      ...prevState,
      options: {
        ...prevState.options,
        radio: {
          ...radioOptions,
          [radioButton]: value,
        },
      },
    }));
  }

  function dateInSelectedPeriod(courseDate, selectedPeriod) {
    console.log(courseDate, selectedPeriod);
    if (selectedPeriod === "this week") {
      let now = moment();
      let date = moment(courseDate); // check this
      console.log(now.isoWeek() === date.isoWeek());
      return now.isoWeek() === date.isoWeek();
    }
    return true;
  }

  useEffect(() => {
    console.log("Options updated");
    console.log(state.options);

    let displayedCourses = state.selectedCourses.filter((course) => {
      return (
        ((course.activityTypeCategory === "OTHER" &&
          state.options.classes === true) ||
          (course.activityTypeCategory === "EXAM" &&
            state.options.exams === true)) &&
        dateInSelectedPeriod(
          course.date,
          Object.keys(state.options.radio).find(
            (key) => state.options.radio[key] === true
          )
        )
      );
    });

    console.log(displayedCourses);

    setState((prevState) => ({
      ...prevState,
      displayedCourses: displayedCourses,
    }));
  }, [state.options, state.selectedCourses]);

  return (
    <div>
      <SearchContainer
        courses={[...new Set(courses.map((course) => course.name))]}
        handleSelectedCourses={handleSelectedCourses}
      ></SearchContainer>
      <ResultsContainer
        displayedCourses={state.displayedCourses}
        handleCheckBoxEvent={handleCheckBoxEvent}
        handleRadioEvent={handleRadioEvent}
        options={state.options}
      ></ResultsContainer>
    </div>
  );
}

export default GenericContainer;
