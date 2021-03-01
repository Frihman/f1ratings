function Init() {
    var drivers = [{Id: 0, FirstName: 'Daniel', LastName: 'Ricciardo', Team: 'McLaren', Img: 'images/daniel-ricciardo'},
    {Id: 0, FirstName: 'Daniel', LastName: 'Ricciardo', Team: 'McLaren', Img: 'images/daniel-ricciardo'},
    {Id: 0, FirstName: 'Daniel', LastName: 'Ricciardo', Team: 'McLaren', Img: 'images/daniel-ricciardo'} ];

    var ul = document.getElementById('drivers');
    var li;

    for (let i = 0; i < drivers.length; i++) {
        li = document.createElement('li');
        li.class = 'entries';

        li.innerHTML = 
        `
        <img class='driverImg' src='images/daniel-ricciardo.webp'>
        <div class='NameTeam'>
        <p class='driverName'>${i + 1}. ${drivers[i].FirstName} ${drivers[i].LastName}</p>
        <p class='driverTeam'>${drivers[i].Team}</p>
        </div>
        `;

        ul.appendChild(li);
    }

    
}



window.onload = Init();