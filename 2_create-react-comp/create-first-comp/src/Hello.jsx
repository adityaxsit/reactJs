function Hello(){
  let fullName=()=>{
    return{
    firstName:"Aditya",
    lastName:"Kumar",
    };
  };
  return <h3>Hello, I am a {fullName().firstName} {fullName().lastName}!</h3>
}
export default Hello;