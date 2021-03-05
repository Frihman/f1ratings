function Init() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', `http://localhost:3000/races`);
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            raceInfo = JSON.parse(xhr.response);
            console.log(raceInfo);
            
            displayContent();
        }
    }

    function displayContent() {
        var ulRace = document.getElementById('races');
        
        for (let i = 0; i < raceInfo.length; i++) {
            var a = document.createElement('a');
            a.href = `/rate_drivers/${raceInfo[i].Round}`;

            var li = document.createElement('li');

            li.innerHTML = `
            <img src=${raceInfo[i].Img}>
            <div class='raceInfo'>
            <h2>${raceInfo[i].Name}</h2>
            <p>${raceInfo[i].City}</p>
            <p>${raceInfo[i].Circuit}</p>
            <p>${raceInfo[i].StartTime}</p>
            </div>
            `;

            li.className = 'race';

            a.appendChild(li);

            ulRace.appendChild(a);

    
        }
    }
}

window.onload = Init;