function Random(){
  let randomNumber = Math.floor(Math.random() * 100);
  return <h3 style={{'background-color':'#766767'}}>Random Number: {randomNumber}</h3>
}
export default Random;