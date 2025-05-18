function getMainCoursesTemplate(indexMainCourses) {
    return `<div class="main-course-div">
                            <h3>${mainCourses[indexMainCourses].course} <img src="./img/add_icon.svg" alt="hinzufügen" class="icon" id="add-to-basket"></h3>
                            <span class="menu-price">${mainCourses[indexMainCourses].price.fixed(2)} €</span>
                            <span>${mainCourses[indexMainCourses].info} </span>
                        </div>`
}