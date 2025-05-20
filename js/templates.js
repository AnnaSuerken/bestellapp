function getMainDishTemplate(indexMainDishes) {
    return `<div class="main-course-div">
                            <h3>${mainDishes[indexMainDishes].course} <img src="./assets/img/add_icon.svg" alt="hinzufügen" class="icon" id="add-to-basket" onclick="clearingBasket(); addToBasket(${indexMainDishes})"></h3>
                            <span class="course-price">${mainDishes[indexMainDishes].price.toFixed(2)} €</span>
                            <span>${mainDishes[indexMainDishes].info} </span>
                        </div>`
}

function getBasketDishTemplate(indexBasketDish){
    return `<div class="basket-dishes">
                        <span class="course-title">${basketDishes[indexBasketDish].course}</span>
                        <span class="course-price-basket">${basketDishes[indexBasketDish].price.toFixed(2)} €</span>
                    </div>`            
}

function basketInputTemplate(mainDish, mainDishPrice){
    return {
        "course" : mainDish,
        "price" : mainDishPrice,
        } 
}