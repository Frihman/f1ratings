function Init() {
    var drivers = [{Id: 0, FirstName: 'Daniel', LastName: 'Ricciardo', Team: 'McLaren', Img: 'images/daniel-ricciardo'},
    {Id: 1, FirstName: 'Daniel', LastName: 'Ricciardo', Team: 'McLaren', Img: 'images/daniel-ricciardo'},
    {Id: 2, FirstName: 'Daniel', LastName: 'Ricciardo', Team: 'McLaren', Img: 'images/daniel-ricciardo'} ];

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
        <input type='radio' name='DOTD' value='${drivers[i].Id}'>
        <br>
        <label>Rating</label>
        <select id='driverRating${i}' name='driverRating${i}'>
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



window.onload = Init();