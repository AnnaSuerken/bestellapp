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

    for (let indexBasketDishes = 0; indexBasketDishes < basketDishes.length; indexBasketDishes++) {
        basketDishesRef.innerHTML += getBasketDishTemplate(indexBasketDishes);
    }
}

function toggleBasketText(){
    let basketInput = document.getElementById("basket-dish");
    let emptyBasket = document.getElementById("empty-basket")

    if (basketInput !== "") {
        emptyBasket.classList.add("d_none")
        
    }
}

function addToBasket(indexMainDishes){
    let mainDish = mainDishes[indexMainDishes].dish;
    let mainDishPrice = mainDishes[indexMainDishes].price;
    let mainDishQuantity = mainDishes[indexMainDishes].quantity;
    let existingDish = basketDishes.find((basketDishes) => basketDishes.dish === mainDish);

    if (existingDish ) {
        existingDish.quantity++;
    } else {

    basketDishes.push(basketInputTemplate(mainDish, mainDishPrice, mainDishQuantity))};
    init();
}

function sumOfDish(indexBasketDish){
    return basketDishes[indexBasketDish].price.toFixed(2) * basketDishes[indexBasketDish].quantity;
}




function sumOfBasket(){
    let sum = 0;

    for (let indexSum = 0; indexSum < basketDishes.length; indexSum++) {
       sum += basketDishes[indexSum].quantity * basketDishes[indexSum].price;

        
    }
}