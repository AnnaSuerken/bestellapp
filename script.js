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

function addToBasket(indexMainDishes){
    let mainDish = mainDishes[indexMainDishes].course;
    let mainDishPrice = mainDishes[indexMainDishes].price;
    let mainDishQuantity = mainDishes[indexMainDishes].quantity;
    let existingDish = basketDishes.find((basketDishes) => basketDishes.course === mainDish);

    if (existingDish ) {
        existingDish.quantity++;
        existingDish.price * existingDish.quantity;
    } else {

    basketDishes.push(basketInputTemplate(mainDish, mainDishPrice, mainDishQuantity))};
    init();
}

function clearingBasket(){
    let basketInput = document.getElementById("basket-dish");
    let emptyBasket = document.getElementById("empty-basket")

    if (basketInput !== "") {
        emptyBasket.classList.add("d_none")
        
    }
}
