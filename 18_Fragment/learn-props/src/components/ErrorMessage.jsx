const ErrorMessage = ({items}) => {
  return <>{items.length === 0 && <p>No food items available.</p> }</>
};
export default ErrorMessage; 