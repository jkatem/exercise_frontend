class Exercise {
    constructor(exercise) {
        // debugger
        this.id = exercise.id
        this.name = exercise.attributes.name
        this.description = exercise.attributes.description
        this.duration = exercise.attributes.duration
        this.muscle = exercise.attributes.muscle.name
        Exercise.all.push(this)
        console.log(this);
    }

    renderExercise() {
        const main = document.querySelector('main')
               
            const exerciseMarkup = `
                <div data-id=${this.id}>
                    <h3>${this.name}</h3>
                    <p>${this.description}</p>
                    <p>${this.duration}</p>
                    <p>${this.muscle}</p>

                </div> 
                <br><br>`;
    
            const h2 = document.createElement('h2')
            h2.innerHTML = exerciseMarkup
            main.appendChild(h2)
    
    }
    

    // renderExerciseCard() {
    //     return `
    //         <div class="col-md-f">
    //             <div class="card mb-4 shadow-sm">
    //                 <div class="card-body">
    //                     <h5 class="card-name">${this.title}</h5>
    //                     <p class="card-text">${this.description}</p>
    //                     <p class="card-text">${this.duration}</p>
    //                 </div>
    //             </div>
    //         </div>
    //     `
        
    //     console.log('hello')
    // }
}

Exercise.all = [];