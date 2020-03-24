const remoteURL = "http://localhost:8080"
const getStateStats = feature => {
        return fetch(`${remoteURL}/stats`).then(result => result.json())
}
console.log(getStateStats())
        
  /*post(newStats) {
    return fetch(`${remoteURL}/stats`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newStats)
    }).then(data => data.json())
},

update(editedStats) {
    return fetch(`${remoteURL}/stats/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedStats)
    }).then(data => data.json());
  },
  
    delete() {
      return fetch(`http://localhost:8088/stats`, {
          method: "DELETE"
      })
      .then(result => result.json())
    }



const getParksData = feature => {
    return fetch(
      `https://data.nashville.gov/resource/74d7-b74t.json?${feature}=Yes`  
    ).then(response => response.json());
  };
  
  const fetchTicketMasterData = genre => {  
    return fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&classificationId=${genre}&apikey=${
        apiKeys.ticketMaster
      }`
    ).then(response => response.json());
  };
  
  const getRestaurantsData = () => {
    return fetch(
      "https://cors-anywhere.herokuapp.com/https://opentable.herokuapp.com/api/restaurants?city=Nashville&per_page=100",
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(response => response.json());
  };
  */