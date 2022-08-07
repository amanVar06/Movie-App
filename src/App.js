import "./App.css";

function App() {
  //React allows to dynamically render the data with jsx
  //on the browser
  //we can write any java script expression inside curly braces
  //in JSX
  const name = "Aman";
  // const name = null;
  const isNameShowing = false; //try to do when this is false/true

  //if you want to render two elements in jsx/react one next to another
  //you need to wrap them in a so called react fragment

  //React fragment is just an empty parenthese

  return (
    <div className="App">
      <h1>Hello, React!</h1>
      {/* <h1>Hello, {name}!</h1> */}
      {/* <h1>Hello, {5 + 5}!</h1> */}
      <h1>Hello, {isNameShowing ? name : "someone"}!</h1>
      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <h1>test</h1>
          <h2>There is no name</h2>
        </>
      )}
    </div>
  );
}

export default App;
