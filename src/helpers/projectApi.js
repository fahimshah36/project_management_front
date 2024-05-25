export const createProject = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/project/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
};

export const getAllProjects = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/project/get`
  );
  return response.json();
};

export const getProject = async (id) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/project/get/${id}`
  );
  return response.json();
};

export const deleteProject = async (id) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/project/delete/${id}`,
    {
      method: "DELETE",
    }
  );
  return response.json();
};
