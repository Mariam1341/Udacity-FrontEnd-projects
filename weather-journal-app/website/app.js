/* Global Variables */
// //&appid=
// const apikey ='bd7ce34fdd5c68428a7d57c4724c69f0'

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */
const Generate = async ()=>{  
  let data = getData()
  getData().then(postData(data))   
}
const getData = async ()=>{ 
  let zip = document.getElementById("zip").value;
  const request = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},&appid=bd7ce34fdd5c68428a7d57c4724c69f0&units=metric`)
  const datao = await request.json();
  return datao;
}

document.getElementById("generate").addEventListener("click", Generate);

async function postData (data){
  let res = await fetch('http://localhost:5501/postData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if(res.ok){
    let resp = await fetch('http://localhost:5501/getData');
    let dataa = await resp.json();
    document.querySelector('#temp').innerText = dataa.temperature;
    document.querySelector('#date').innerText = dataa.date;
    document.querySelector('#content').innerText = dataa.feelings;
    console.log(dataa)
  }else{
    console.log("error")
  }
    document.querySelector('.entry').style.visibility = "visible";
}

/* Function to GET Project Data */
