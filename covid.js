//If we use... ${feature} allows refactoring of code due to four features - this allows for one line of code versus manyconst remoteURL = "http://localhost:8080"

const getStateStats2 = feature => {
  return fetch(
    `https://covidtracking.com/api/states.json`  
  ).then(response => response.json());
};
console.log(getStateStats2())
        