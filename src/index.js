const endPoint = "http://localhost:3000/api/v1/exercises"

document.addEventListener('DOMContentLoaded', () => {
    getExercises()
});


function getExercises() {
    fetch(endPoint)
    .then(resp => resp.json())
    .then(exercises => {
        exercises.data.forEach(exercise => {
            const exerciseMarkup = `
            <div data-id=${exercise.id}>
                <h3>${exercise.attributes.name}</h3>
                <p>${exercise.attributes.description}</p>
                <p>${exercise.attributes.duration}</p>
                <p>${exercise.attributes.muscle.legs}
            </div> 
            <br><br>`;

            document.querySelector('#exercise-container').innerHTML += exerciseMarkup

        })
    })
}