import {Button} from "antd";
import React from "react";
import {createProject} from "../helpers/projectApi";

const AddProject = ({setDataTrigger, dataTrigger}) => {
  const addProject = () => {
    createProject();
    setDataTrigger(!dataTrigger);
  };
  return (
    <div>
      <Button
        type="primary"
        style={{
          marginTop: "20px",
          marginBottom: "20px",
        }}
        onClick={() => addProject()}
      >
        Add New
      </Button>
    </div>
  );
};

export default AddProject;
