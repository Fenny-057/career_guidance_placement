const form = document.getElementById("predictionForm");

form.addEventListener("submit", async function(e){

e.preventDefault();

const ssc = document.getElementById("ssc").value;
const hsc = document.getElementById("hsc").value;
const degree = document.getElementById("degree").value;

const response = await fetch("http://localhost:5001/api/predict", {

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
ssc_p:ssc,
hsc_p:hsc,
degree_p:degree
})

});

const data = await response.json();

document.getElementById("result").innerText =
"Prediction: " + data.prediction;

});