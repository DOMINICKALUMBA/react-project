import "./Styles.css";


import Button from "./Button";
import Valid from "./Valid";
import Weather from "./Weather"
import Greetings from "./Greetings";
import Copy from "./Copy";
import Counter from "./Counter";

const App = () => {
return (
<div>
  <Button/>
  <Valid/>
  <Weather/>
  <Greetings timeOfDay = "morning"/>
  <Copy/>
  <Counter/>

</div>
);
};

export default App;