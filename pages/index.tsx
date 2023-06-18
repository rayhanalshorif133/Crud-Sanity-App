import React from "react";
import Header from "./../components/Header";
import Users from "./../components/Users";

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

  return (
    <div>
      {/* Navbar */}
      <Header />
      <Users users={users} />
    </div>
  );
}
