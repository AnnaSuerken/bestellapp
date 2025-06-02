function init() {
    renderDishes("mainDishes");
    renderDishes("sideDishes");
    renderDishes("desserts");
    renderBasketDishes();
}

function renderDishes(arrayName) {
    let array = dishes[arrayName];
    let containerId = `${arrayName}-container`;
    let container = document.getElementById(containerId);
    container.innerHTML = "";


    for (let index = 0; index < array.length; index++) {
        container.innerHTML+= DishTemplate(arrayName, array, index);
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

function addToBasket(arrayName, index){
    let dish = dishes[arrayName][index];
    let existingDish = basketDishes.find((item) => item.title === dish.title);

    if (existingDish ) {
        existingDish.quantity++;
    } else {

    basketDishes.push(basketInputTemplate(dish.title, dish.price, dish.quantity))};
    init();
}

function increaseQuantity(indexBasketDishes){
    basketDishes[indexBasketDishes].quantity++;
    init();

}

function decreaseQuantity(indexBasketDishes){
    basketDishes[indexBasketDishes].quantity--;
    if (basketDishes[indexBasketDishes].quantity <= 0){
        basketDishes.splice(indexBasketDishes, 1);
    }
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

function deleteDish(indexBasketDishes){
    let basketDishesRef = document.getElementById(`basket-dishes${indexBasketDishes}`)
    basketDishesRef.innerHTML = "";
    basketDishes.splice(indexBasketDishes, 1);
    renderBasketDishes ();
}

function toggleBurgerMenu(){
    document.getElementById("burger-menu").classList.toggle("burger-menu-closed")
}