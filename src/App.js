import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import GenericContainer from "./components/GenericContainer";

function App() {
  return (
    <div className="App">
      <NavigationBar changeLanguage={changeLanguage}></NavigationBar>
      <GenericContainer></GenericContainer>
    </div>
  );
}

const changeLanguage = (language) => {
  console.log(`Changing language to ${language}...`);
  throw new Error("Changing language not implemented.");
};

export default App;
