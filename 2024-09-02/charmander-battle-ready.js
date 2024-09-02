// PREP
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle

// P: the parameter is going to be Charmander's current temp
// R: we want to check if Charmander's current temp is above 0 degrees so he can battle



// my solution

let celsius = (32°F − 32) × 5/9 

const battleReady(current temp){
    if(celsius > 0){
        console.log('battle on')
    }
}


// right solution
function fahrenheitToCelcius(temperature){
    let convertedToCel = (temperature - 32) * 5/9;
    return convertedToCel;
    }
    
    function canCharmanderBattle(currentTemp){
    let converted = fahrenheitToCelcius(currentTemp);
    if(converted > 0){
    console.log('Chanrmander can battle!');
    }else{
    console.log('Charmander can not battle!');
    }
    }