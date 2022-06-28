let searchBtn = document.querySelector('#searchBtn')
console.log(searchBtn);
let searchInput = document.querySelector('#searchInput')
console.log(searchInput);
let mealList = document.querySelector('#meals')



searchBtn.addEventListener('click', getMealList)
mealList.addEventListener('click', getRecipe)


// get a list of meals that includes the ingredient
function getMealList(){
    let input = searchInput.value
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let html = ''

        if (data.meals) {
            data.meals.forEach(meals => {
                html += `
                    <div id="meals">
                        <img src=${meals.strMealThumb} alt="">
                        <h4>${meals.strMeal}</h4>
                        <button class="recipeBtn" id="recipeBtn"><a href="">Get Recipe</a></button>
                    </div>
                `
            });
        } 
        else {
            html = `Sorry, we didnt find any meal!`
        }
        document.querySelector('#result-Output').innerHTML = html

    })
}


// function getRecipe(e){
//     e.preventDefault()
//     if(e.target.classlist.includes('recipeBtn')){
//         let mealItem = e.target.parentElement.parentElement
//         console.log(mealItem);
//     }
// }