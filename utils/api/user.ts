import api from "../axios";

// save user into database
export const saveUser = async (data) => {
  try {
    const res = await api.post("/users", data);
    return res;
  } catch (error) {
    console.error(error);
  }
};
