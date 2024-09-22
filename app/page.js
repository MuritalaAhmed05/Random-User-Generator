"use client";
import React, { useEffect, useState } from "react";
import { ImSpinner6  } from "react-icons/im";

export default function RandomUserGenerator() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        setUser(data.results[0]);
      } catch (e) {
        setError("Error fetching user:", e);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div className=" flex justify-center items-center min-h-screen">
     <ImSpinner6  className="animate-spin text-blue-900 h-10 w-10"/>
    </div>
  
  }

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto">
        <div className="flex flex-col items-center">
        <p>{error}</p>
          <img
            className="rounded-full w-32 h-32 mb-4"
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {user.name.title} {user.name.first} {user.name.last}
          </h1>
        </div>

        <div className="space-y-2 text-left">
          <p className="text-gray-600">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-gray-600">
            <strong>Username:</strong> {user.login.username}
          </p>
          <p className="text-gray-600">
            <strong>Password:</strong> {user.login.password}
          </p>
          <p className="text-gray-600">
            <strong>Gender:</strong> {user.gender}
          </p>
          <p className="text-gray-600">
            <strong>Location:</strong> {user.location.street.number}, {user.location.street.name}
          </p>
          <p className="text-gray-600">
            <strong>Location:</strong> {user.location.city} {user.location.state} {user.location.country}
          </p>
         
          <p className="text-gray-600">
            <strong>Nationality:</strong> {user.nat}
          </p>
          <p className="text-gray-600">
            <strong>Date:</strong> {user.dob.date}
          </p>
          <p className="text-gray-600">
            <strong>Age:</strong> {user.dob.age}
          </p>
        </div>
      </div>
    </div>
  );
}
