function init() {
    renderMainDishes();
    renderBasketDishes();
}


function renderMainDishes() {
    let mainDishRef = document.getElementById("main-dish");
    mainDishRef.innerHTML = "";

    for (let indexMainDishes = 0; indexMainDishes < mainDishes.length; indexMainDishes++) {
        mainDishRef.innerHTML+= getMainDishTemplate(indexMainDishes);
    }
}

function renderBasketDishes () {
    let basketDishesRef = document.getElementById("basket-dish");
    basketDishesRef.innerHTML = "";

    for (let indexBasketDish = 0; indexBasketDish < basketCourses.length; indexBasketDish++) {
        basketDishesRef.innerHTML += getBasketDishTemplate(indexBasketDish);
    }
}

/*function addToBasket(){
    let course = 
}*/
