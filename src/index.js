const endPoint = "http://localhost:3000/api/v1/exercises"



document.addEventListener('DOMContentLoaded', () => {
    getExercises()
    // event listener and handler for create exercise form 
    const createExerciseForm = document.querySelector("#create-exercise-form")
    createExerciseForm.addEventListener("submit", (e) => createFormHandler(e))

});

function getExercises() {
    fetch(endPoint)
    .then(function(resp){
        if (resp.status == 200)
           return resp;
        else
            throw new Error(resp.message)
    })
    .then(resp => resp.json())
    .then(exercise => {
        exercise.data.forEach(exercise => {
            let newExercise = new Exercise(exercise)
            newExercise.renderExercise()
        })
    })
    .catch(error => {
        alert(error.message);
    });
}
    
// create form 
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
    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(function(resp){
            if (resp.status != 202)
                throw new Error(resp.message)
            else {
                location.reload();
                return resp;
            }   
        })
    .then(resp => resp.json())
    .then(exercise => {
        console.log(exercise);
        const exerciseData = exercise.data

        let newExercise = new Exercise(exerciseData)
        newExercise.renderExercise();

    })
    .catch(error => {
        alert('FAIL. TRY AGAIN');
    });

}


function removeExercise(e) {
    e.preventDefault();
    let execId = e.target.id[3];
    fetch(`http://localhost:3000/api/v1/exercises/${e.target.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(function(resp){
        if (resp.status == 204)
            location.reload();
        else
            throw new Error(resp.message)
            console.log(resp.status)
    })
    .catch(error => {
        alert('FAIL. TRY AGAIN');
    });
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}