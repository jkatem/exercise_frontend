const endPoint = "http://localhost:3000/api/v1/exercises"

document.addEventListener('DOMContentLoaded', () => {
    getExercises()

    const createExerciseForm = document.querySelector("#create-exercise-form")
    createExerciseForm.addEventListener("submit", (e) => createFormHandler(e))
    
});


function getExercises() {
    // debugger
    fetch(endPoint)
    .then(resp => resp.json())
    .then(exercise => {
        exercise.data.forEach(exercise => {
            let newExercise = new Exercise(exercise)
            newExercise.renderExercise()

            // document.querySelector('#exercise-container').innerHTML += newExercise.renderExercise()
        })
    })
}


function createFormHandler(e) {
    
    e.preventDefault()
    const nameInput = document.querySelector('#input-name').value
    const descriptionInput = document.querySelector('#input-description').value
    const durationInput = document.querySelector('#input-duration').value

    const muscle_id = parseInt(document.querySelector('#muscles').value)
    postFetch(nameInput, descriptionInput, durationInput, muscle_id)
}

function postFetch(name, description, duration, muscle_id) {
    
    const bodyData = {name, description, duration, muscle_id}
// debugger
    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(resp => resp.json())
    .then(exercise => {
        console.log(exercise);
        const exerciseData = exercise.data
// debugger
        let newExercise = new Exercise(exerciseData)
        newExercise.renderExercise()
    }
)}