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

  
  

  /*document.getElementById("positiveData").innerHTML = `${stateObj.positive}`
  document.getElementById("negativeData").innerHTML = `${stateObj.negative}`
  document.getElementById("totalTestResultsData").innerHTML = `${stateObj.totalTestResults}`
  document.getElementById("deathData").innerHTML = `${stateObj.death}`
  document.getElementById("percentPositive").innerHTML = percentPositive
  document.getElementById("percentDeathOfPositive").innerHTML = percentDeathOfPositive*/
  
  
  
  //Loop will let us write one line and have conditional styling throughout table 
  
  
  
  const stateWrapper = document.querySelector("table");
  const renderToDom = resultsString => {
    stateWrapper.innerHTML += resultsString;
    console.log(stateWrapper)
  };
  
  const resultsHtmlRepresentation = stateObj => {
    let percentPositive = (stateObj.positive / stateObj.totalTestResults * 100).toFixed(2)
    let percentDeathOfPositive = (stateObj.death / stateObj.positive * 100).toFixed(2)
    /*let redPercentPositive = document.getElementById("percentPositiveRow").innerHTML 
    let whitePercentPositive = document.getElementById("percentPositiveRow").innerHTML
    
    if (percentPositive >= 10) {
      redPercentPositive.style.backgroundColor = "red";
      whitePercentPositive.style.color = "white";
    }*/
    
    
    //This just returns the final object in the array rather than the actual max death rate state
    /*let maxDeath = Math.max(percentDeathOfPositive)
    document.getElementById("writtenP1").innerHTML = `The highest death rate percentage is ${maxDeath}% in ${stateObj.state}`*/
    
    
    
    return `
    <body>
    <div class=${"wrapper"}>
    <table rowspan=${data.length} style="width:100%">
    <p id=${"writtenP1"}></p>
    <tr>
    <td>${stateObj.state}</td>
    <td>${stateObj.positive}</td>
    <td>${stateObj.negative}</td>
    <td>${stateObj.totalTestResults}</td>
    <td>${stateObj.death}</td>
    <td id=${"percentPositiveRow"}>${percentPositive}</td>
    <td>${percentDeathOfPositive}</td>
    </tr>
    </table>
    </div>
    `;
  };
  
  
  data.forEach(stateObj => {
    const HtmlString = resultsHtmlRepresentation(stateObj);
    renderToDom(HtmlString); 
  })
})



