const app = {
    init(selectors){
       // this.dinos = []
        //this.dinos()
        this.max=0
       this.list = document.querySelector(selectors.listSelector)
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
    const listItem = this.renderListItem(dino)
    //adding input to begining of list 
    this.list.insertBefore(listItem,this.list.firstChild)


    //TODO: add dino to this.dinos array
    //makes array of objects 
    //adding to the end to the array "push"
    this.dinos.push(dino);




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