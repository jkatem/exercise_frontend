class Exercise {
    constructor(exercise, exerciseAttributes) {
        this.id = exercise.id
        this.name = exerciseAttributes.name
        this.description = exerciseAttributes.description
        this.duration = exerciseAttributes.duration
        this.muscle = exerciseAttributes.muscle
        Exercise.push(this)
        console.log(this);
    }
}

    // I want user's inputs to be able to show up on the dom
    // renderExercise() {
    //     return `
    //             <div class="col-md-f">
    //                 <div class="card mb-4 shadow-sm">
    //                     <div class="card-body">
    //                         <h5 class="card-name">${this.name}</h5>
    //                         <p class="card-text">${this.description}</p>
    //                         <div class="d-flex justify-content-between align-items-center">
    //                         <div class="btn-group">
    //                         <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
    //                         <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
    //                         </div>
    //                         // <small class="text-muted">Category: ${this.category.name}</small>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //     `
    // }






    // renderExerciseCard() {
    //     return `
    //         <div class="col-md-f">
    //             <div class="card mb-4 shadow-sm">
    //                 <div class="card-body">
    //                     <h5 class="card-name">${this.name}</h5>
    //                     <p class="card-text">${this.description}</p>
    //                     <div class="d-flex justify-content-between align-items-center">
    //                     <div class="btn-group">
    //                     <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
    //                     <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
    //                     </div>
    //                     <small class="text-muted">Category: ${this.category.name}</small>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
            
    //     `
    // }

//     function render(exercise) {
//             const exerciseMarkup = `
//                 <div data-id=${exercise.id}>
//                     <h3>${exercise.attributes.name}</h3>
//                     <p>${exercise.attributes.description}</p>
//                     <p>${exercise.attributes.duration}</p>
//                     <button data-id=${exercise.id}>edit</button>
//                 </div>
//                 <br><br>`;
        
//             document.querySelector('#exercise-container').innerHTML += exerciseMarkup;
        
//         }

// }

// Exercise.all = [];