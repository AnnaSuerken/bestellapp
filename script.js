function init() {
    renderMainCourses ();
}


function renderMainCourses () {
    let mainCoursesRef = document.getElementById("main-courses");
    mainCoursesRef.innerHTML = "";

    for (let indexMainCourses = 0; indexMainCourses < mainCourses.length; indexMainCourses++) {
        mainCoursesRef.innerHTML += getMainCoursesTemplate(indexMainCourses);
    }
}