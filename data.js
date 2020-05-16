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
  console.log(data)

  
  

  /*document.getElementById("stateData").innerHTML = `${data.state}`
  document.getElementById("positiveData").innerHTML = `${stateObj.positive}`
  document.getElementById("negativeData").innerHTML = `${stateObj.negative}`
  document.getElementById("totalTestResultsData").innerHTML = `${stateObj.totalTestResults}`
  document.getElementById("deathData").innerHTML = `${stateObj.death}`
  document.getElementById("percentPositive").innerHTML = percentPositive
  document.getElementById("percentDeathOfPositive").innerHTML = percentDeathOfPositive*/

  

  //Loop will let us write one line and have conditional styling throughout table 
  

  
  const stateWrapper = document.querySelector("div");
  const renderToDom = resultsString => {
    stateWrapper.innerHTML += resultsString;
    console.log(stateWrapper)
  };
  const resultsHtmlRepresentation = stateObj => {
    
    return `
    <body>
    <div class="wrapper">
    <table rowspan=${data.length} style="width:100%">
    
    <tr>
    <td id="stateData">${stateObj.state}</td>
    <td id="positiveData">${stateObj.positive}</td>
    <td id="negativeData">${stateObj.negative}</td>
    <td id="totalTestResultsData">${stateObj.totalTestResults}</td>
    <td id="deathData">${stateObj.death}</td>
    <td id="percentPositive">${stateObj.positive / stateObj.totalTestResults * 100}</td>
    <td id="percentDeathOfPositive">${stateObj.death / stateObj.positive * 100}</td>
    </tr>
    </table>
    `;
  };
    if (percentPositive > 10){
      document.getElementById("percentPositive").style.backgroundColor = "red";
      document.getElementById("percentPositive").style.color = "white";
    }
    
    data.forEach(stateObj => {
        const HtmlString = resultsHtmlRepresentation(stateObj);
        renderToDom(HtmlString);
    
      }) 
    })
  
  

