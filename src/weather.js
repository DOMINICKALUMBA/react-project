



const Weather = () => {

    let temperature = 10;

    if (temperature < 15) {
    return<h1>"its cold outside"</h1>;
     
  }else if (temperature >= 15 && temperature <=25) {
   return<h1>"its nice outside"</h1>;


  }else{
   return<h1>"its hot outside"</h1>

   };

};
    export default Weather;