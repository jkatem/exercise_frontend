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
                </div>`;
    
            let elm = document.createElement('div')
            elm.innerHTML = exerciseMarkup
            main.appendChild(elm)

            let button = document.createElement('button');
            button.setAttribute("id",this.id)
            button.innerHTML = 'Delete';
            button.addEventListener('click', (e) => removeExercise(e));
            
            // where do we want to have the button to appear?
            // you can append it to another element just by doing something like
            // document.getElementById('foobutton').appendChild(button);
            main.appendChild(button);
    
    }
    
}


Exercise.all = [];