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
  document.getElementById("stateData").textContent = `${data["1"].state}`
  document.getElementById("positiveData").textContent = `${data["1"].positive}`
  document.getElementById("negativeData").textContent = `${data["1"].negative}`
  document.getElementById("totalTestResultsData").textContent = `${data["1"].totalTestResults}`
  document.getElementById("deathData").textContent = `${data["1"].death}`
})

