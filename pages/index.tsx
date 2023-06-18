import React from "react";
import Header from "./../components/Header";

export default function index() {
  const [users, setUsers] = React.useState([
    {
      id: 1,
      name: "Mr A",
      age: 25,
    },
    {
      id: 2,
      name: "Mr B",
      age: 24,
    },
    {
      id: 3,
      name: "Mr C",
      age: 23,
    },
    {
      id: 4,
      name: "Mr D",
      age: 23,
    },
    {
      id: 5,
      name: "Mr E",
      age: 245,
    },
  ]);

  console.log(users);

  return (
    <div>
      {/* Navbar */}
      <Header />
      <div className="grid sm:grid-cols-1 sm:gap-0 md:gap-1 lg:grid-cols-2 lg:gap-0 max-w-7xl justify-center mx-auto">
        {users &&
          users.length > 0 &&
          users.map((user) => (
            <div className="card" key={user.id}>
              <h1 className="card-title">{user.name}</h1>
              <p className="card-body">
                {user.name} is {user.age} years old.
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
