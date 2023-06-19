import React, { useState } from "react";
import Header from "../components/Header";
import Users from "../components/Users";
import AddUser from "../components/AddUser";

export default function index({ users }) {

  const [isCreate,setIsCreate] = useState(false);

  const handleCreateFrom = () => {
    setIsCreate(!isCreate);
  };


  return (
    <div>
      {/* Navbar */}
      <Header />
      <div className="mx-auto max-w-7xl">
        <p className="sm:text-center mr-4 mt-3">
          <button onClick={handleCreateFrom}
            className="bg-teal-600 py-2 px-4 
           rounded-xl text-white hover:border hover:border-teal-600 hover:bg-white hover:text-teal-600"
          >
            Add User <i className="fas fa-plus"></i>
          </button>
        </p>
        <hr className="bg-teal-400 mt-4" />
      </div>
      {
        isCreate && <AddUser handleCreateFrom={handleCreateFrom}/>
      }
      <Users users={users} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/api/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
    revalidate: 1, // In seconds
  };
}
