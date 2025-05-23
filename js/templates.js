function getMainDishTemplate(indexMainDishes) {
    return `<div class="main-dish-div">
                            <h3>${mainDishes[indexMainDishes].dish} <img src="./assets/img/plus-orange.png" alt="hinzufügen" class="icon" id="add-to-basket" onclick="toggleBasketText(); addToBasket(${indexMainDishes})"></h3>
                            <span class="dish-price">${mainDishes[indexMainDishes].price.toFixed(2)} €</span>
                            <span>${mainDishes[indexMainDishes].info} </span>
                        </div>`
}

function getBasketDishTemplate(indexBasketDish){
    return `<div class="basket-dishes">
                        <h3 class="dish-title">${basketDishes[indexBasketDish].dish}</h3>
                            <div class="sum-of-dish">
                                    <div class="dish-amount">
                                        <img src="./assets/img/minus-orange.png" alt="reduzieren" class="icon-basket">
                                        <span> ${basketDishes[indexBasketDish].quantity}x</span>
                                        <img src="./assets/img/plus-orange.png" alt="erhöhen" class="icon-basket">
                                    </div>
                                <span class="dish-price-basket">${sumOfDish(indexBasketDish).toFixed(2)} €</span>
                            </div>
                    </div>`            
}

function getBasketCheckoutTemplate(){
    `<div class="basket-check-out">
        <span> Zwischensumme: ${sumOfBasket()} </span>
        <span> Lieferkosten: </span>  
        <span> Gesamtsumme: </span> 
    </div>
            <button>Jetzt Bestellen</button>   `
}
function basketInputTemplate(mainDish, mainDishPrice, mainDishQuantity){
    return {
        "dish" : mainDish,
        "price" : mainDishPrice,
        "quantity" : mainDishQuantity,
        };
}