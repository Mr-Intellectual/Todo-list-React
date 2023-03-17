import React from "react";

//include images into your bundle
import Todo from "./todo.jsx";

//create your first component
const Home = () => {
 
	return (
	  <div className="container mt-5">
		<h1 className="text-center m-3">Todo List</h1>
		<Todo />
		<div className="text-center m-3">holder</div>
	  </div>
	  
	);
  };

export default Home;
