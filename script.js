function init() {
    renderDishes();
    renderBasketDishes();
}

function renderDishes() {
    let mainDishRef = document.getElementById("main-dish");
    mainDishRef.innerHTML = "";
    let sideDishRef = document.getElementById("side-dish");
    sideDishRef.innerHTML = "";
    let dessertsRef = document.getElementById("dessert");
    dessertsRef.innerHTML = "";

    for (let indexMainDishes = 0; indexMainDishes < mainDishes.length; indexMainDishes++) {
        mainDishRef.innerHTML+= DishTemplate(mainDishes, indexMainDishes);
    }

    for (let indexSideDishes = 0; indexSideDishes < sideDishes.length; indexSideDishes++) {
        sideDishRef.innerHTML+= DishTemplate(sideDishes, indexSideDishes);
    }

    for (let indexDesserts = 0; indexDesserts < desserts.length; indexDesserts++) {
        dessertsRef.innerHTML+= DishTemplate(desserts, indexDesserts);
    }
}

function renderBasketDishes () {
    let basketCheckoutRef = document.getElementById("basket-check-out");
    basketCheckoutRef.innerHTML = "";
    let emptyBasket = document.getElementById("empty-basket");
    let basketDishesRef = document.getElementById("basket-dish");
    basketDishesRef.innerHTML = "";

    for (let indexBasketDishes = 0; indexBasketDishes < basketDishes.length; indexBasketDishes++) {
        basketDishesRef.innerHTML += getBasketDishTemplate(indexBasketDishes);
    }

    if (basketDishes.length === 0) {
        emptyBasket.classList.remove("d_none");
    } else if (basketDishes.length > 0){ 
        emptyBasket.classList.add("d_none");
        basketCheckoutRef.innerHTML += getBasketSumTemplate();};
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

function increaseQuantity(indexBasketDishes){
    basketDishes[indexBasketDishes].quantity++;
    init();

}

function decreaseQuantity(indexBasketDishes){
    basketDishes[indexBasketDishes].quantity--;
    init();
}

function sumOfDish(indexBasketDishes){
    return basketDishes[indexBasketDishes].price.toFixed(2) * basketDishes[indexBasketDishes].quantity;
}

function sumOfBasket(){
    let sum = 0;

    for (let indexSum = 0; indexSum < basketDishes.length; indexSum++) {
       sum += basketDishes[indexSum].quantity * basketDishes[indexSum].price;
    } return sum
}

function clearBasket(){
    let basketCheckoutRef = document.getElementById("basket-check-out");
    basketCheckoutRef.innerHTML = "";
    let emptyBasket = document.getElementById("empty-basket");
    

    basketDishes = [];
    renderBasketDishes ();
    emptyBasket.classList.add("d_none");
    basketCheckoutRef.innerHTML += getBasketCheckoutTemplate();
}

function openNewBasket(){
    let emptyBasket = document.getElementById("empty-basket");
    renderBasketDishes ();
    emptyBasket.classList.remove("d_none");
}