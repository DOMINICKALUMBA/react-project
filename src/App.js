import Button from "./Button";
import  styles from "./Styles.css";
import Valid from "./Valid";
import Weather from "./Weather"
import Greetings from "./Greetings";

const App = () => {
return (
<div>
  <Button/>
  <Valid/>
  <Weather/>
  <Greetings timeOfDay = "mornin"/>
</div>
);
};

export default App;