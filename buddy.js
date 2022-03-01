const loadbuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res =>res.json())
    .then(data => displybuddyui(data))
}
loadbuddy();

const displybuddyui = data => {
    const buddies = data.results;
    const buddydiv = document.getElementById('buddddy');
    for (const buddy of buddies ){
        console.log(buddy.name);
         const p = document.createElement('p');
         p.innerText = `name:${buddy.name.title} ${buddy.name.first} ${buddy.name.last} email:${buddy.email}`;
         buddydiv.appendChild(p)
    }
   
}