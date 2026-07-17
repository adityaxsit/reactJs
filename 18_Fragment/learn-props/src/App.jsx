import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput"; 
import "./App.css";
import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = ["Pizza", "Burger", "Pasta", "Biryani", "Ice Cream"];

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={(e) => console.log(e.target.value)}></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container> */}
    </>
  );
}

export default App;
