function getMainDishTemplate(indexMainDishes) {
    return `<div class="main-course-div">
                            <h3>${mainDishes[indexMainDishes].course} <img src="./img/add_icon.svg" alt="hinzufügen" class="icon" id="add-to-basket"></h3>
                            <span class="course-price">${mainDishes[indexMainDishes].price.fixed(2)} €</span>
                            <span>${mainDishes[indexMainDishes].info} </span>
                        </div>`
}

function getBasketDishTemplate(){
    return `<div class="basket-couses">
                        <span class="course-title">${basketCourses[indexBasketDish].course}</span>
                        <span class="course-price-basket">${basketCourses[indexBasketDish].price.fixed(2)}€</span>
                    </div>`            
}