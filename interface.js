const apikey="bc591acd114cbee033e431c45b790009";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");

searchbtn.onclick=()=>{
    console.log(searchbox.value);
checkWeather(searchbox.value);
}

async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apikey}`);
    var data=await response.json() ;
    console.log(data);
    document.querySelector(".placehead").innerHTML=data.name;
    document.querySelector(".temphead").innerHTML=`${Math.round(data.main.temp)}deg`;
    document.querySelector(".percentage").innerHTML=`${data.main.humidity}%`;
    document.querySelector(".speed").innerHTML=`${data.wind.speed}km/h`;

const weatherIcon=document.querySelector("img_icon").src="sunclouds.jpg"
    if(data.weather[0].main=="clouds"){

    }
}
