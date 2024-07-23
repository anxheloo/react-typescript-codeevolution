import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <div>
      <Button
        handleClick={(event, id) => {
          console.log("Button Click:", event, "id:", id);
        }}
      ></Button>

      <Input value="" handleChange={(e) => console.log("event", e)}></Input>
    </div>
  );
}

export default App;
