import PersonList from "./components/PersonList";

function App() {
  const personList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Darli", last: "Varfi" },
    { first: "Karl", last: "Larfi" },
  ];

  return (
    <div>
      <PersonList list={personList}></PersonList>
    </div>
  );
}

export default App;
