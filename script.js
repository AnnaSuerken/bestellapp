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

    for (let indexBasketDish = 0; indexBasketDish < basketDishes.length; indexBasketDish++) {
        basketDishesRef.innerHTML += getBasketDishTemplate(indexBasketDish);
    }
}

function addToBasket(indexMainDishes, indexBasketDish){
    let mainDish = mainDishes[indexMainDishes].course;
    let basketDish = basketDishes.course;
    let mainDishPrice = mainDishes[indexMainDishes].price;
    let existingDish = basketDishes.find(basketDishes => basketDish === mainDish && basketDishes.price === mainDishPrice);

    if (existingDish) {
        existingDish.quantity++;
    } else {

    basketDishes.push(basketInputTemplate(mainDish, mainDishPrice))};
    init();
}

function clearingBasket(){
    let basketInput = document.getElementById("basket-dish");
    let emptyBasket = document.getElementById("empty-basket")

    if (basketInput !== "") {
        emptyBasket.classList.add("d_none")
        
    }
}

