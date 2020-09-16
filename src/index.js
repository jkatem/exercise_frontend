const endPoint = "http://localhost:3000/api/v1/exercises"

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is Loaded");
    getExercises()
})

function getExercises() {
    // fetch(endPoint)
    // .then(response => response.json())
    // .then(exercises => {
    //     exercises.data.forEach(exercise => {
    //         let newExercise  = new exercise(exercise, exercise.attributes)

    //         document.querySelector('#syllabus-container').innerHTML += newExercise.renderExercise()
    //     })
    // })
}