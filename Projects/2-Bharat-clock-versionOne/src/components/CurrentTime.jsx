function CurrentTime() {
  let time = new Date();

 

  return (
    <div>
      <h3>Current Date and Time: {time.toLocaleDateString()} {time.toLocaleTimeString()}</h3>
    </div>
  );
  
}
  

export default CurrentTime;