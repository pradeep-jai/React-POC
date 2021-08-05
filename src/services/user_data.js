import axios from "axios";

export const getUserData = async () => {
  return await axios.get(`https://jsonplaceholder.typicode.com/users`);
};
