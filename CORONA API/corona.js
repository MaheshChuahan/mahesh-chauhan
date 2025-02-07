let selectedDate = "";
let availableStates = [];

function fetchStates() {
    selectedDate = document.getElementById('date').value;
    if (!selectedDate) {
        alert("Please select a date.");
        return;
    }

    console.log(selectedDate);

    fetch('https://api.rootnet.in/covid19-in/stats/history')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let historyData = data.data.find(entry => entry.day === selectedDate);
            if (!historyData) {
                alert("No data found for this date.");
                console.log("No data found for this date.");
                return;
            }

            availableStates = historyData.regional;

            let stateCardsContainer = document.getElementById('stateCardsContainer');
            stateCardsContainer.innerHTML = '';

            availableStates.forEach(stateData => {
                let card = document.createElement('div');
                card.className = 'state-card';
                card.onclick = function () {
                    displayCovidData(stateData);
                };

                console.log(stateData);

                let confirmed = stateData.totalConfirmed !== undefined ? stateData.totalConfirmed : 'Data not available';
                let discharged = stateData.discharged !== undefined ? stateData.discharged : 'Data not available';
                let deaths = stateData.deaths !== undefined ? stateData.deaths : 'Data not available';

                card.innerHTML = `
                    <h3>${stateData.loc}</h3>
                    <p><strong>Confirmed:</strong> ${confirmed}</p>
                    <p><strong>Discharged:</strong> ${discharged}</p>
                    <p><strong>Deaths:</strong> ${deaths}</p>
                `;

                stateCardsContainer.appendChild(card);
            });
        })
        .catch(error => {
            alert("Error fetching data: " + error);
            console.error("Error details:", error);
        });
}

function displayCovidData(data) {
    let stateName = document.getElementById('stateName');
    let confirmedDetail = document.getElementById('confirmed');
    let dischargedDetail = document.getElementById('discharged');
    let deathsDetail = document.getElementById('deaths');
    let covidDetail = document.getElementById('covidDetail');

    console.log("Clicked State Data: ", data);

    stateName.textContent = `${data.loc} - ${selectedDate}`;
    confirmedDetail.innerHTML = `<strong>Confirmed:</strong> ${data.totalConfirmed || 'Data not available'}`;
    dischargedDetail.innerHTML = `<strong>Discharged:</strong> ${data.discharged || 'Data not available'}`;
    deathsDetail.innerHTML = `<strong>Deaths:</strong> ${data.deaths || 'Data not available'}`;

    covidDetail.style.display = 'block';
}
