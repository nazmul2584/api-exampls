const loadcountris = () =>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(allcountris => displayui(allcountris))
}

loadcountris();

const displayui = allcountris =>{
//    for (const country of allcountris){
//        console.log(country);
//    }
const countrisdiv = document.getElementById('countris');

allcountris.forEach(country => {
    // console.log(country);

    const div = document.createElement('div');
    div.classList.add('country');

    div.innerHTML = `
                <h3>${country.name}</h3>
                <p>${country.capital}</p>
                <button onclick="loadCountryByname"('${country.capital}')>details</button>
                
    `
    // const h3 = document.createElement('h3');
    //       h3.innerText= country.altSpellings;
    //       div.appendChild(h3)
    //       const p = document.createElement('p');
    //       h3.innerText= country.capital;
    //       div.appendChild(p);
          countrisdiv.appendChild(div);

});
  
}


const loadCountryByname = name => {

    
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}