



const Weather = ({temperature }) => {
    if (temperature < 15) {
    console.log("its cold outside");
    
}else if (temperature >= 15 && temperature <=25) {
    console.log("its nice outside");


}else{
    console.log("its hot outside")

};};
    export default Weather;