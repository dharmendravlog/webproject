const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById("city_name");

const temp_real_value = document.getElementById("temp_real_value");
const temp_status = document.getElementById("temp_status");

const datahide = document.querySelector(".middle_layer");     // bina type kiye search krne per data hide krne k liye


const getInfo = async (event) => {
    event.preventDefault();                              // alert per ok krne per query string bnne se rokne ke liye event call
    //alert("hii");
    let cityVal = cityName.value;
    if (cityVal === '') {
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add("data_hide");
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=e896a1b0365b84eed8205432c7eccf83`;        // `` means template string
            const response = await fetch(url);           // api ke throw jo bhi data get kr rhe hai in the form of json time lega isliye await krege
            //console.log(response);                     // body readable stream  because the res in form json
            const data = await response.json();          // pure javascript me convert krna pdega. res.json se object me convert ho jayga         
            //console.log(data);
            const arrData = [data];                      // data array me convert  array of an object

            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            temp_real_value.innerText = arrData[0].main.temp;
            //temp_status.innerText = arrData[0].weather[0].main;
            const tempMood = arrData[0].weather[0].main;

            // condition to check sunny or cloudy
            if (tempMood == "clear") {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "clouds") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "rain") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }

            datahide.classList.remove("data_hide");


        } catch {
            city_name.innerText = `Plz enter the city name properly`;
            datahide.classList.add("data_hide");
        }
    }

}

submitBtn.addEventListener("click", getInfo);
