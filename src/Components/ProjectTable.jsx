import {Button, Modal, Table, Typography} from "antd";
import React, {useEffect, useState} from "react";
import {deleteProject, getAllProjects, getProject} from "../helpers/projectApi";

const ProjectTable = ({dataTrigger, setDataTrigger}) => {
  const [projects, setProjects] = useState([]);
  const [loader, setLoader] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectData, setProjectData] = useState(null);
  useEffect(() => {
    const fetchProjects = async () => {
      setLoader(true);
      getAllProjects().then((data) => {
        setProjects(
          data.map((project, index) => {
            return {
              ...project,
              sl: index + 1,
              creationTime: new Date(project.creationTime).toLocaleString(),
            };
          })
        );
        setLoader(false);
      });
    };
    fetchProjects();
  }, [dataTrigger]);

  useEffect(() => {
    if (selectedProject) {
      getProject(selectedProject).then((data) => {
        setProjectData(data);
      });
    }
  }, [selectedProject]);
  console.log(projectData);
  return (
    <div>
      <Table
        loading={loader}
        title={() => (
          <div>
            <Typography.Text
              style={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              All Projects
            </Typography.Text>
          </div>
        )}
        dataSource={projects || []}
        pagination={false}
        scroll={{x: 400}}
        columns={[
          {
            title: "Sl.",
            dataIndex: "sl",
            key: "sl",
          },
          {
            title: "ID",
            dataIndex: "_id",
            key: "_id",
          },
          {
            title: "Created At",
            dataIndex: "creationTime",
            key: "creationTime",
          },
          {
            title: "Action",
            key: "action",
            render: (data) => {
              return (
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Button
                    type="primary"
                    onClick={() => {
                      setSelectedProject(data?._id);
                      setModalOpen(true);
                    }}
                  >
                    View
                  </Button>
                  <Button
                    danger
                    type="primary"
                    onClick={() => {
                      deleteProject(data?._id).then(() => {
                        setDataTrigger(!dataTrigger);
                      });
                    }}
                  >
                    Delete
                  </Button>
                </div>
              );
            },
          },
        ]}
      />
      <Modal
        open={modalOpen}
        children={
          <div style={{padding: "20px"}}>
            <Typography.Text
              strong
              level={4}
              style={{
                fontSize: "18px",
              }}
            >
              ID : {projectData?._id}
            </Typography.Text>
            <br />
            <Typography.Text
              strong
              level={4}
              style={{
                fontSize: "18px",
              }}
            >
              Created At :{" "}
              {projectData?.creationTime &&
                new Date(projectData?.creationTime).toLocaleString()}
            </Typography.Text>
          </div>
        }
        onCancel={() => {
          setModalOpen(false);
        }}
        onOk={() => {
          setModalOpen(false);
        }}
      />
    </div>
  );
};

export default ProjectTable;
