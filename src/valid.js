const validPassword = () => <h1>valid Password</h1>
const invalidPassword = () => <h1>invalid PasswordvalidPassword</h1>
const Password = ({isvalid}) =>{
   // return <validPassword/>;
return<invalidPassword/>;
return isvalid ? <validPassword/> : <invalidPassword/>;


};

const Valid = () =>{
  //  return <Password isvalid = {true}/>

};







export default Valid;