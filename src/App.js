import List from "./components/List";
import Add from "./components/Add";
function App() {
  return (
    <div className="form-control m-12">
      <h1 className="form-control">Contact List APP</h1>
      <Add />

      <List />
    </div>
  );
}

export default App;
