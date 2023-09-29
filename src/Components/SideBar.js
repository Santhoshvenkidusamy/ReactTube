import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className=" w-52 h-screen py-6 mt-20">
      <ul className="">
        <Link to="/">
          <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-300 hover:rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <span className="text-lg">Home</span>
          </li>
        </Link>
        <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-300 hover:rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="text-lg">Trending</span>
        </li>
        <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-300 hover:rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span className="text-lg">Subscriptions</span>
        </li>
        <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-300 hover:rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span className="text-lg">Library</span>
        </li>
      </ul>

      <hr className="my-4" />

      <ul className="">
        <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-300 hover:rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span className="text-lg">History</span>
        </li>
        <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-300 hover:rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 15.879V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10.879l7-7 7 7z"
            />
          </svg>
          <span className="text-lg">Watch Later</span>
        </li>
        <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-300 hover:rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="text-lg">Liked Videos</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
