import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";  

function App() {
  let foodItems = ["Pizza", "Burger", "Pasta", "Biryani", "Ice Cream"];
  

  return (
    <>
      <h1>List of food items</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>     
    </>
  );
}

export default App;
