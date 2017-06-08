const app = {
    init(selectors){
        //this.dinos()
        this.max=0
       this.list = document.querySelector(selectors.listSelector)
        document
        .querySelector(selectors.formSelector)
        .addEventListener('submit', this.addDino.bind(this))   

        //making when refreshed will not have to click in box
        

    },
addDino(ev){
    ev.preventDefault()
    //const dinoName = ev.target.dinoName.value
    //object 
    
    
    const dino = {
        //increasing with every dino added
        id: this.max + 1,
        name: ev.target.dinoName.value, 
    }
    const listItem = this.renderListItem(dino)
    this.list.appendChild(listItem)


    //TODO: add dino to this.dinos array

    //console.log(dino.name, dino.id) 
    this.max ++ 
    //clearing out the input so do not have to backspace 
    ev.target.reset()

    }, 
    renderListItem(dino){
       const item = document.createElement('li')
       item.textContent = dino.name
       return item 
    }
}
//passing object
app.init({
    formSelector: '#dino-form',
    listSelector: '#dino-list',
})