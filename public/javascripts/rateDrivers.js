
function Init() {
    var raceInfo;

    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);

    var xhr = new XMLHttpRequest();

    xhr.open('GET', `http://localhost:3000/races/${id}`);
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            raceInfo = JSON.parse(xhr.response);
            console.log(raceInfo[0]);
            
            displayRace(displayDrivers);
        }
    }

    function displayRace(displayDrivers) {
        var divRace = document.getElementById('race');

        var img = document.createElement('img');
        img.src = raceInfo[0].Img;
        
        divRace.appendChild(img);

        var divRaceInfo = document.createElement('div');
        divRaceInfo.id = 'raceInfo';

        var h2 = document.createElement('h2');
        h2.innerHTML =  raceInfo[0].Name; 
        divRaceInfo.appendChild(h2); 
        
        var pCity = document.createElement('p');
        pCity.innerHTML = raceInfo[0].City;
        divRaceInfo.appendChild(pCity);

        var pCircuit = document.createElement('p');
        pCircuit.innerHTML = raceInfo[0].Circuit;
        divRaceInfo.appendChild(pCircuit);
        
        var pStart = document.createElement('p')
        pStart.innerHTML = raceInfo[0].StartTime;
        divRaceInfo.appendChild(pStart);

        divRace.appendChild(divRaceInfo);

        displayDrivers();

    }

    function displayDrivers() {
        var drivers = [];
        
        var xhr = new XMLHttpRequest();
    
        xhr.open('GET', `http://localhost:3000/drivers`);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                drivers = JSON.parse(xhr.response);
                console.log(drivers);
                
                displayContent();
            }
        }
    
        
        function displayContent() {
            var ul = document.getElementById('drivers');
            var li;
        
            for (let i = 0; i < drivers.length; i++) {
                li = document.createElement('li');
                li.class = 'entries';
        
                li.innerHTML = 
                `
                <img class='driverImg' src='${drivers[i].Img}'>
                <div class='nameTeam'>
                <p class='driverName'>${i + 1}. ${drivers[i].FirstName} ${drivers[i].LastName}</p>
                <p class='driverTeam'>${drivers[i].Team}</p>
                <hr>
                <label>DOTD</label>
                <input type='radio' name='DOTD' value='${drivers[i].Number}'>
                <br>
                <label>Rating</label>
                <select id='driverRating' name='driverRating'>
                <option value='1_${drivers[i].Number}'>1</option>
                <option value='2_${drivers[i].Number}'>2</option>
                <option value='3_${drivers[i].Number}'>3</option>
                <option value='4_${drivers[i].Number}'>4</option>
                <option value='5_${drivers[i].Number}'>5</option>
                <option value='6_${drivers[i].Number}'>6</option>
                <option value='7_${drivers[i].Number}'>7</option>
                <option value='8_${drivers[i].Number}'>8</option>
                <option value='9_${drivers[i].Number}'>9</option>
                <option value='10_${drivers[i].Number}'>10</option>
                </select>
                </div>
                `;
        
                ul.appendChild(li);
            }
        }
        
    }
}

window.onload = Init();