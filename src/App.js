import "./Styles.css";


import Button from "./Button";
import Valid from "./Valid";
import Weather from "./Weather"
import Greetings from "./Greetings";
import Copy from "./Copy";

const App = () => {
return (
<div>
  <Button/>
  <Valid/>
  <Weather/>
  <Greetings timeOfDay = "morning"/>
  <Copy/>
</div>
);
};

export default App;