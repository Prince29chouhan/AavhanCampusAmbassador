import React from "react";
import { Link } from "react-router-dom";

function Task() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Welcome to Task Management System of {" "}
              <span className="text-orange-500">Aavhan! :) </span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non qui molestias cumque nam odio eaque quos provident ipsa. Inventore impedit, culpa tenetur pariatur molestias rerum numquam possimus vel nisi voluptate.
          </p>
          <Link to={"/"}>
          <button className="btn  bg-orange-500 px-10 mt-5 hover:bg-orange-700">back</button>
          </Link>
        </div>
         
      </div>
    </>
  );
}

export default Task;
