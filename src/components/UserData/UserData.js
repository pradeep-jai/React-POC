import "./UserData.css";

const USER_DATA = [
  {
    id: 1,
    first_name: "Jeanette",
    last_name: "Penddreth",
    email: "jpenddreth0@census.gov",
    gender: "Female",
    ip_address: "26.58.193.2",
  },
  {
    id: 2,
    first_name: "Giavani",
    last_name: "Frediani",
    email: "gfrediani1@senate.gov",
    gender: "Male",
    ip_address: "229.179.4.212",
  },
  {
    id: 3,
    first_name: "Noell",
    last_name: "Bea",
    email: "nbea2@imageshack.us",
    gender: "Female",
    ip_address: "180.66.162.255",
  },
  {
    id: 4,
    first_name: "Willard",
    last_name: "Valek",
    email: "wvalek3@vk.com",
    gender: "Male",
    ip_address: "67.76.188.26",
  },
  {
    id: 5,
    first_name: "John",
    last_name: "Joe",
    email: "jhonjoe3@vk.com",
    gender: "Male",
    ip_address: "67.76.188.24",
  },
  {
    id: 6,
    first_name: "Meera",
    last_name: "veela",
    email: "meeraveela@vk.com",
    gender: "Female",
    ip_address: "67.76.188.24",
  },
  {
    id: 7,
    first_name: "Lusee",
    last_name: "kareem",
    email: "Luseekareem@vk.com",
    gender: "Male",
    ip_address: "67.76.188.24",
  },
];

const UserData = () => {
  return (
    <div>
      <div className="table-wrapper">
        <table className="table table-bordered table-striped table-hover shadow">
          <thead>
            <tr>
              <th>Row</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {USER_DATA.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
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
