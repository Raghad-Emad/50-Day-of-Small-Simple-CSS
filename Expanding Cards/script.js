// Add property 'active' to the card with add event listener

let cards = document.querySelectorAll(".card") 

cards.forEach( card => {
    card.addEventListener('mouseover', ()=>{
        removeActiveClasses()
        card.classList.add('active')
    })
})

// Remove property 'active' from the card after mouse is out

function removeActiveClasses() {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}
