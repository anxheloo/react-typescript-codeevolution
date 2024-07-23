import Person from "./components/Person";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  return (
    <div>
      <Person name={personName}></Person>
    </div>
  );
}

export default App;
