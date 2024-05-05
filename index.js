const planetsForm = document.querySelector('.planets_form')

const bigPlanet = document.querySelector('.big-planet')
const smallPlanet = document.querySelector('.small-planet')

planetsForm.addEventListener('click',(event)=>{
    console.log('click')
    const item = event.target.closest('.planet_item')
    if(item){
        const planet = item.querySelector('.planet').value

        switch (planet){
            case 'mars':
                bigPlanet.style.backgroundImage = "url('./assets/images/марс.png')"
                smallPlanet.style.backgroundImage = "url('./assets/images/марс1.png')"
                break;
            case 'venus':
                bigPlanet.style.backgroundImage = "url('./assets/images/венера.png')"
                smallPlanet.style.backgroundImage = "url('./assets/images/венера1.png')"

                break;
            case 'earth':
                bigPlanet.style.backgroundImage = "url('./assets/images/земля.png')"
                smallPlanet.style.backgroundImage = "url('./assets/images/земля1.png')"
                break;
            default : break;
        }
    }
})