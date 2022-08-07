import { useState, useEffect } from "react";
import "./App.css";
//React State
//state in react is a plane javasript object used by react to represent
//a piece of information about the component's current situation
//it is completely managed by the component it self

//showing a purpose why to use state (using a counter)

function App() {
  const [counter, setCounter] = useState(0); //array destructuring
  //calling useState as a function
  //when you call something as a function and start with use in react
  //we call that a hook

  //first part in the square brackets pair is going to be the name
  //of the state so lets call it counter
  //and second part is going to be a setter fucntion
  //we call it setCounter

  //good rule of thumb is to use
  //name of the second variable same as first just add a prefix set to it
  //because it is a setter function for the first variable
  //inside the useState we provide the initial value

  //events
  //an event is a action that can be triggered as a result of
  //user action or some kind of system generated event
  //e.g. mouseClick or buttonPress is an event

  //useEffect allows us to do something on some kind of effect
  //or lets say on some kind of event
  //so this code right here is going to get run as soon as the page loads

  useEffect(() => {
    // alert("Reload");
    //this code in useEffect happens as soon as below component renders
    //knowing that this is going to happen at the start
    //how do you change our counter, our state to be 100
    //as soon as the page loads
    //if we wanted to do something like this counter = 100;
    //thats going to cause a major issue
    //we are breaking a most important rule of react
    //and that is never modify state manually, never mutate the state
    //counter is not just a normal variable, it is a part of react state
    //can only be changed using its own setter function
    //counter = 100; this is strictly forbidden
    // alert("You have changed the counter to " + counter);
    setCounter(100);
  }, []);
  //second parameter to the useEffect which is called a dependency array
  //when the dependency array left empty the code inside useEffect
  //is only going to happen at the inital load of the component
  //now if we write some kind of variable inside the dependency array
  //like a counter then this code going to update everytime the variable
  //inside of this dependency array changes

  return (
    <div className="App">
      {/* <button onClick={() => alert("clicked")}>-</button> */}
      {/* now we dont want to alert something we want to change the state */}
      {/* <button onClick={() => setCounter(-5)}>-</button> */}
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      {/* inside the setCounter we have something prevState  */}
      {/* we see in the browser it set dynamically onClick  */}
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
      {/* thats how we re-render something on page  */}
      {/* right now if we click on these buttons nothing going to happen
      so we have to use states */}
    </div>
  );
}

// if you are using react then you can update everything on the page
// without needing a page reload
//we cant use the state without using this react hook

export default App;
