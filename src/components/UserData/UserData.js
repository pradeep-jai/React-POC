import { useEffect, useState } from "react";
import "./UserData.css";
import { getUserData } from "../../services/user_data";

const UserData = () => {
  const [userData, setUerData] = useState([]);

  useEffect(async () => {
    try {
      const response = await getUserData();
      let users = response.data || [];
      setUerData(users);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <div className="table-wrapper">
        <table className="table table-bordered table-striped table-hover shadow">
          <thead>
            <tr>
              <th>Row</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserData;
