const endPoint = "http://localhost:3000/api/v1/exercises"

document.addEventListener('DOMContentLoaded', () => {
    getExercises()

    // let createExerciseForm = document.querySelector("create-exercise-form")

    // createExerciseForm.addEventListener('submit', (e) => createFormHandler(e))

    // const exerciseContainer = document.querySelector('#exercise-container')
    // exerciseContainer.addEventListener('click', e => {
    //     console.log('clicked');
    // });
});


function getExercises() {
    fetch(endPoint)
    .then(resp => resp.json())
    .then(json => renderExercises(json))
}

function renderExercises(exercises) {
    const main = document.querySelector('main')
    
    exercises.data.forEach(exercise => {
        const exerciseMarkup = `
            <div data-id=${exercise.id}>
                <h3>${exercise.attributes.name}</h3>
                <p>${exercise.attributes.description}</p>
                <p>${exercise.attributes.duration}</p>
            </div> 
            <br><br>`;

        const h2 = document.createElement('h2')
        h2.innerHTML = exerciseMarkup
        main.appendChild(h2)
    })
}



function createFormHandler(e) {
    e.preventDefault()
    const nameInput = document.querySelector('#input-title').value
    const descriptionInput = document.querySelector('#input-description').value
    const durationInput = document.querySelector('#input-duration').value

    const muscleId = parseInt(document.querySelector('#muscle').value)
    postFetch(nameInput, descriptionInput, durationInput, muscleId)
}



