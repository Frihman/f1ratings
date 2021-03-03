function Init() {
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
            <img class='driverImg' src='images/daniel-ricciardo.webp'>
            <div class='nameTeam'>
            <p class='driverName'>${i + 1}. ${drivers[i].FirstName} ${drivers[i].LastName}</p>
            <p class='driverTeam'>${drivers[i].Team}</p>
            <hr>
            <label>DOTD</label>
            <input type='radio' name='DOTD' value='${drivers[i]._id}'>
            <br>
            <label>Rating</label>
            <select id='driverRating${drivers[i]._id}' name='driverRating${i}'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            </select>
            </div>
            `;
    
            ul.appendChild(li);
        }
    }
    
}




window.onload = Init();