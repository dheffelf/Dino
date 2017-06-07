const app = {
    init(formSelector){
        this.max=0
        document
        .querySelector(formSelector)
        .addEventListener('submit', this.addDino.bind())        
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
    
    console.log(dino.name, dino.id) 
    this.max ++ 

    },

}

app.init('#dino-form')