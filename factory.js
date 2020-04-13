/*function makeTable() {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < 15; i++) {
      var row = document.createElement('tr');
      fragment.appendChild(row);

      for (var j = 0; j < 56; j++) {
          var cell = document.createElement('td');
          cell.appendChild(document.createTextNode(i.toString() + ', ' + j.toString()));
          row.appendChild(cell);
      }
  }
  
  var target = document.getElementById('target');
  target.appendChild(fragment);
}

makeTable();
*/

/*const statsHtmlRep = (stateObj) => {
    return `
    <th class="state" id="th--${stateObj.state}">
    <th class="positive" id="th--${stateObj.positive}">
    <th class="negative" id="th--${negative}">
    <th class="pending" id="th--${pending}">
    <th class="hospitalized" id="th--${hospitalized}">
    <th class="death" id="th--${death}">
    <th class="totalTestResults" id="th--${totalTestResults}">
    <th class="lastUpdateEt" id="th--${lastUpdateEt}">
    <th class="checkTimeEt" id="th--${checkTimeEt}">
    <th class="percentPositive" id="th--${percentPositive}">
    <th class="percentDeathPositive" id="th--${percentDeathPositive}">
    <th class="statePopulation" id="th--${statePopulation}">
    <th class="percentPopulationTestedteStat" id="th--${percentPopulationTested}">
    <th class="percentPopulationPositive" id="th--${percentPopulationPositive}">
    </th>

    <tr class="stateResult" id="tr--${state}">
    `
  }
  
  function GenerateTable() {
    //Build an array containing State data. push all the about classes into 
    //the array. Will need new variables possibly and delete above. 
    var states = new Array();
    states.push(["state", "positive", "negative", "pending", "hospitalized", "death",
    "totalTestResults", "lastUpdateEt", "checkTimeEt", "percentPostitive", "percentDeathPositive", "statePopulation", "percentPopulationTested",
    "percentPopulationPositive"]);
    states.push([state, positive, negative, pending, hospitalized, death, totalTestResults, lastUpdateEt, checkTimeEt, percentPositive, percentDeathPositive, statePopulation, percentPopulationTested, percentPopulationPositive ]);
    
    
    //Create a HTML Table element.
    var table = document.createElement("entireTable");
    table.border = "1";
    
    //Get the count of columns.
    var columnCount = states[0].length;
    
    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
      var headerCell = document.createElement("TH");
      headerCell.innerHTML = states[0][i];
      row.appendChild(headerCell);
    }
    
    //Add the data rows.
    for (var i = 1; i < states.length; i++) {
      row = table.insertRow(-1);
      for (var j = 0; j < columnCount; j++) {
        var cell = row.insertCell(-1);
        cell.innerHTML = states[i][j];
      }
    }
    
    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
    
  }
  */
  