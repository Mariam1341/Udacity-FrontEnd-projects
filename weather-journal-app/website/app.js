/* Global Variables */

let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
const apiKey = '&appid=bd7ce34fdd5c68428a7d57c4724c69f0&units=metric'

const Generate = async () => {
  
  getData().then((data) =>{
    console.log("data",data)
    let feelings = document.getElementById("feelings").value;
   postData({date:newDate, temp:data.list[0].main.temp , content:feelings})
  })
}
async function getData(){
  let zip = document.getElementById("zip").value;
  const request = await fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip},${apiKey}`)
  const data = await request.json();
  return data;
}

document.getElementById("generate").addEventListener("click", Generate);

async function postData(information = {}) {
  let res = await fetch('http://localhost:5501/postData', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(information)
  });
  document.querySelector('#temp').innerText = `TEMP : ${information.temp}`;
  document.querySelector('#date').innerText = `DATE : ${information.date}`;
  document.querySelector('#content').innerText = `FEELINGS : ${information.content}`;

  const newData = await res.json();
    let resp = await fetch('http://localhost:5501/getData');
    let dataa = await resp.json();
  document.querySelector('.entry').style.visibility = "visible";
}

