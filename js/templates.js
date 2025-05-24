
function DishTemplate(array, index) {
    let dish= array[index];
    return `<div class="main-dish-div">
                            <h3>${dish.dish} <img src="./assets/img/plus-orange.png" alt="hinzufügen" class="icon" id="add-to-basket" onclick=" addToBasket(${index})"></h3>
                            <span class="dish-price">${dish.price.toFixed(2)} €</span>
                            <span>${dish.info} </span>
                        </div>`
}

function getBasketDishTemplate(indexBasketDishes){
    return `<div class="basket-dishes">
                        <h3 class="dish-title">${basketDishes[indexBasketDishes].dish}</h3>
                            <div class="sum-of-dish">
                                    <div class="dish-amount">
                                        <img src="./assets/img/minus-orange.png" alt="reduzieren" class="icon-basket" onclick="decreaseQuantity(${indexBasketDishes})">
                                        <span>${basketDishes[indexBasketDishes].quantity}x</span>
                                        <img src="./assets/img/plus-orange.png" alt="erhöhen" class="icon-basket" onclick="increaseQuantity(${indexBasketDishes})">
                                    </div>
                                <span class="dish-price-basket">${sumOfDish(indexBasketDishes).toFixed(2)} €</span>
                            </div>
                    </div>`            
}

function getBasketCheckoutTemplate(){
    return `<div class="basket-check-out">
        <span> Zwischensumme: ${sumOfBasket().toFixed(2)} </span>
        <span> Lieferkosten: 3.50 €</span>  
        <span> Gesamtsumme: ${(sumOfBasket()+ 3.50).toFixed(2)} €</span> 
        <button onclick="clearBasket()">Jetzt Bestellen</button>  
        </div> `
}

function basketInputTemplate(mainDish, mainDishPrice, mainDishQuantity){
    return {
        "dish" : mainDish,
        "price" : mainDishPrice,
        "quantity" : mainDishQuantity,
        };
}

function testBasketInputTemplate(array, index){
    let dish= array[index].dish;
    let price = array[index].price;
    let quantity = array[index].quantity;

    return {
        "dish" : dish,
        "price" : price,
        "quantity" : quantity,
        };
}