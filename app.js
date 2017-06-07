const app = {
    init(selectors){
        this.max=0
       // =document.querySelector
        document
        .querySelector(selectors.formSelector)
        .addEventListener('submit', this.addDino.bind(this))        
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
    this.renderListItem(dino)
    
    //console.log(dino.name, dino.id) 
    this.max ++ 

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