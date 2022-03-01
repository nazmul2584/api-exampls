const serchfood = () =>{
    const serchfild = document.getElementById('serch-field');
    const serchtext = serchfild.value;
    // console.log(serchtext);

     serchfild.value='';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${serchtext}
    `;
    // console.log(url)
    fetch(url)
    .then(res =>res.json())
    .then(data => displayserchresult(data.meals));
} 

const displayserchresult = meals => {
    // console.log(meals);
    const serchresult = document.getElementById('serch-result');
    
    meals.forEach(meal =>{
         console.log(meal);
        const div = document.createElement('div');
     
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${meal.strMeal}  </h5>
                <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
                 </div>
        </div>
        
        `
        serchresult.appendChild(div);
    });
    
}

