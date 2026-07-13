import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let listItems = ["An item", "A second item", "A third item", "A fourth item", "And a fifth one"];
  return (
    <>
      {" "}
      {/*adding a fragment to avoid the error of having multiple root elements*/}
      <h1>List manually</h1>
      <ul class="list-group">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
      
      {/*mapping through the array to create list items dynamically*/}
      <h1>List using map()</h1>
      <ul className="list-group"f>
        {listItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
