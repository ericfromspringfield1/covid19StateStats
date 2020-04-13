//If we use... ${feature} allows refactoring of code due to four features - this allows for one line of code versus many
/*const remoteURL = "https://localhost:8081"
const getStateStats = feature => {
        return fetch(`${remoteURL}/stats`).then(result => result.json())
}*/

/*const getStateStats = feature => {
  return fetch(
    `https://covidtracking.com/api/states`  
  ).then(response => response.json())
  
};
console.log(getStateStats())*/


const dataURL = `https://covidtracking.com/api/states`;

fetch(dataURL)
.then(function(resp) {
  return resp.json();
})
.then(function(data) {
  console.log(data["1"], data["42"])
  document.getElementById("state").textContent = `State - ${data["1"].state}`
  document.getElementById("positive").textContent = `Positive Results - ${data["1"].positive}`
  document.getElementById("negative").textContent = `Negative Results - ${data["1"].negative}`
  document.getElementById("totalTestResults").textContent = `Total Results - ${data["1"].totalTestResults}`
  document.getElementById("death").textContent = `Deaths - ${data["1"].death}`
})

