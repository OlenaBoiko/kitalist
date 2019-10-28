module.exports = class Parent {
    makeApplication(kindergarten) { 
        this.kindergarten.push(kindergarten); 
   }
   constructor(name, adress, phone,  child) {
       this.name = name
       this.adress = adress
       this.phone = phone
       this.child = child  
       this.kindergarten = []    
}
}