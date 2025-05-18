function init() {
    renderMainCourses ();
    renderBasketCourses ();
}


function renderMainCourses () {
    let mainCoursesRef = document.getElementById("main-courses");
    mainCoursesRef.innerHTML = "";

    for (let indexMainCourses = 0; indexMainCourses < mainCourses.length; indexMainCourses++) {
        mainCoursesRef.innerHTML += getMainCoursesTemplate(indexMainCourses);
    }
}

function renderBasketCourses () {
    let basketCoursesRef = document.getElementById("basket-courses");
    basketCoursesRef.innerHTML = "";

    for (let indexBasketCourses = 0; indexBasketCourses < basketCourses.length; indexBasketCourses++) {
        basketCoursesRef.innerHTML += getBasketCoursesTemplate(indexBasketCourses);
    }
}

function addToBasket(){
    let course = 
}
