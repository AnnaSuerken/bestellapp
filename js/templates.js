
function DishTemplate(arrayName, array, index) {
    let dish = array[index];
    return `<div class="main-dish-div">
                            <h3>${dish.title} <img src="./assets/img/plus-orange.png" alt="hinzufügen" class="icon" id="add-to-basket" onclick="addToBasket('${arrayName}', ${index})"></h3>
                            <span class="dish-price">${dish.price.toFixed(2)} €</span>
                            <span>${dish.info} </span>
                        </div>`
}

function getBasketDishTemplate(indexBasketDishes){
    return `<div class="basket-dishes" id="basket-dishes${indexBasketDishes}">
                        <h3 class="dish-title">${basketDishes[indexBasketDishes].title}</h3>
                            <div class="sum-of-dish">
                                    <div class="dish-amount">
                                        <img src="./assets/img/minus-orange.png" alt="reduzieren" class="icon-basket" onclick="decreaseQuantity(${indexBasketDishes})">
                                        <span>${basketDishes[indexBasketDishes].quantity}x</span>
                                        <img src="./assets/img/plus-orange.png" alt="erhöhen" class="icon-basket" onclick="increaseQuantity(${indexBasketDishes})">
                                    </div>
                                <span class="dish-price-basket">${sumOfDish(indexBasketDishes).toFixed(2)} €</span>
                                <img src="./assets/img/bin_delete.svg" alt="alles löschen" class="icon-basket" onclick="deleteDish(${indexBasketDishes})">
                            </div>
                    </div>`            
}

function getBasketSumTemplate(){
    return `<div class="basket-check-out">
        <span> Zwischensumme: ${sumOfBasket().toFixed(2)} </span>
        <span> Lieferkosten: 3.50 €</span>  
        <span> Gesamtsumme: ${(sumOfBasket()+ 3.50).toFixed(2)} €</span> 
        <button onclick="clearBasket()">Jetzt Bestellen</button>  
        </div> `
}

function basketInputTemplate(title, price, quantity){
    return {
        "title" : title,
        "price" : price,
        "quantity" : quantity,
        };
}


function getBasketCheckoutTemplate(){
    return `<div class="empty-basket">
                    <span>Vielen Dank für Ihre Bestellung.</span>
                    <button onclick="openNewBasket()">Weitere Bestellung aufgeben</button>
            </div>`
}