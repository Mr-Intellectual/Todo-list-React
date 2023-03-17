import React from "react";
import PropTypes from 'prop-types';

export default function Todo(props) {
   
    const [inputValue, setInputValue] = React.useState("");
    const [todos, setTodos] = React.useState([]);
        
        const trashIcon = () => {
          if(inputValue === "") {
            alert("The input cannot be empty");
          }
          else {
            alert("Trash");
          }
        };
        const checkIcon = () => {
          if(inputValue === "") { 
            alert("The input cannot be empty");
          }
          else {
            alert("Check");
          }
        };
    
  
    return (
    //Some html code should go here
    <div class="input-group mb-3">
    <button onClick={checkIcon} class="btn btn-outline-success text-success" type="button">
    <i class="fa-regular fa-square-check"></i>
    </button>
    <input
      type="text"
      class="form-control p-2"
      placeholder="What do you need to do?"
      aria-label="Example text with two button addons"
      onChange={e => setInputValue(e.target.value)} value={inputValue} 
      />
    <button onClick={trashIcon} class="btn btn-outline-danger text-danger" type="button">
    <i class="fa-regular fa-trash-can"></i>
    </button>
  </div>

  // <ul>
  //     <li><input type="text"</li>
  //   </ul>
  );
}


// Todo.propTypes = {
//   url: PropTypes.string,
//   children: PropTypes.string,
//   title:PropTypes.string,
//   a:PropTypes.string
// };

// Todo.defaultProps={
//   url: "Hello",
//   children: "Text goes here.",
//   title:"Card Title",
//   a: "Find Out More !"
// }