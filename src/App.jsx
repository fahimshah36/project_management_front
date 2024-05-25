import "./App.css";
import Header from "./Components/Header";
import AddProject from "./Components/AddProject";
import ProjectTable from "./Components/ProjectTable";
import {useState} from "react";

function App() {
  const [dataTrigger, setDataTrigger] = useState(false);
  return (
    <>
      <Header title={"Welcome to Core Devs Project"} />
      <AddProject setDataTrigger={setDataTrigger} dataTrigger={dataTrigger} />
      <ProjectTable setDataTrigger={setDataTrigger} dataTrigger={dataTrigger} />
    </>
  );
}

export default App;
