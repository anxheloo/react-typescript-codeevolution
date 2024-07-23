import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const personList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Darli", last: "Varfi" },
    { first: "Karl", last: "Larfi" },
  ];

  return (
    <div>
      <Greet name="Anxhelo" messageCount={20} isLoggedIn={true} />
      <Person name={personName}></Person>
      <PersonList list={personList}></PersonList>
      <Status message="loading"></Status>
      <Heading>Placeholder text</Heading>

      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>

      <Greet name="Beqo" isLoggedIn={true}></Greet>
    </div>
  );
}

export default App;
