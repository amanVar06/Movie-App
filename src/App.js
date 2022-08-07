import "./App.css";
//React Components
//A component is a piece of code that returns or renders some jsx

const Person = (props) => {
  return (
    <>
      <h1>Name : {props.name}</h1>
      <h2>LastName : {props.lastName}</h2>
      <h2>Age : {props.age}</h2>
    </>
  );
};
//props(important)
//props allows you to pass dynamic data through react components
//props are just arguments that you pass into react components
//they are passed via attributes
//they are just a shorter way of saying properties

//Every component has a built in props object

function App() {
  return (
    <div className="App">
      <Person name={"John"} lastName={"Doe"} age={30} />
      <Person name="Marry" lastName="Doe" age={25} />
      <Person name="Kevin" lastName="Doe" age={75} />
      {/* <Person name={"John"} lastName={"Doe"} age={30} /> */}
      {/* <Person name="Rock" /> */}
      {/* you can just write in quotes if its just a string  */}
      {/* this is how we call a functional/custom component
       with jsx in React by its name as many times we want
       this is the advantage of using custom component 
       we dont need to write it manually many times a block of code*/}
    </div>
  );
}

export default App;
