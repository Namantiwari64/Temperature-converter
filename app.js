//scripts

const celsiusFeild = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

// window loading reset
window.addEventListener("load",() => {
    degree.value = "";
    celsiusFeild.innerHTML = "";
})

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius(); 
})

function convertToCelsius() {
    let inputValue = degree.value;

    // if(tempType.value === "fahrenheit") {
        const fahrenheitToCelsius = (inputValue -32) * (5/9);
        console.log(fahrenheitToCelsius);
        celsiusFeild.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg; c`;

    // }
}