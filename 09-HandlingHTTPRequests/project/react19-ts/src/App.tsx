import "./App.css";
import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  const handleAddUser = () => {
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "Rendy",
        lastName: "Saputra",
        age: 25,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const handleUpdateUser = () => {
    fetch("https://dummyjson.com/users/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "Rendy",
        lastName: "Saputra",
        age: 25,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  /*const handleDeleteUser = () => {
    fetch("https://dummyjson.com/users/0", {
      method: "DELETE",
    })
      .then(async (response) => {
        if (response.ok) {
          console.log("User deleted successfully");
          return response.json();
        } else {
          let errData = await response.json();
          throw new Error(errData.message || "Failed to delete user");
        }
      })
      .then((data) => console.log(data))
      .catch((error) => alert(error.message));
  };*/

  const handleDeleteUser = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users/0", {
        method: "DELETE",
      });
      if (!response.ok) {
        let errData = await response.json();
        throw new Error(errData.message || "Failed to delete user");
      }
      const data = await response.json();
      console.log(data);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="max-w-[600px] mx-auto space-y-2 my-5">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={handleAddUser}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Add user
        </button>
        <button
          type="button"
          onClick={handleUpdateUser}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Update user
        </button>
        <button
          type="button"
          onClick={handleDeleteUser}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Delete user
        </button>
      </div>
      {users.map((user: any) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
