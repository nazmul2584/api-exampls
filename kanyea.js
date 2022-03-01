const loadquata = () => {

    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displyquta(data))
}

function displyquta(data){
    
    const qoutelement = document.getElementById('quote') ;
    qoutelement.innerText = data.quote;
}