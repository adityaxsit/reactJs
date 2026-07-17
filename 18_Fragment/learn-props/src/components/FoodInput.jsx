const FoodInput = ({ handleOnChange }) => { 
  return (
    <>
      <input type="text" placeholder="Enter food item" onChange={handleOnChange} />
    </>
  );
};

export default FoodInput;