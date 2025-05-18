function getMainCoursesTemplate(indexMainCourses) {
    return `<div class="main-course-div">
                            <h3>${mainCourses[indexMainCourses].course} <img src="./img/add_icon.svg" alt="hinzufügen" class="icon" id="add-to-basket"></h3>
                            <span class="course-price">${mainCourses[indexMainCourses].price.fixed(2)} €</span>
                            <span>${mainCourses[indexMainCourses].info} </span>
                        </div>`
}

function getBasketCoursesTemplate(){
    return `<div class="basket-couses">
                        <span class="course-title">${basketCourses[indexBasketCourses].course}</span>
                        <span class="course-price-basket">${basketCourses[indexBasketCourses].price.fixed(2)}€</span>
                    </div>`            
}