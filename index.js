// This project is dedicated to the idea of facilitating the registration of parents 
//of their children in a multiply number of kindergartens with one application. 
class Kindergarten { 
    constructor(name, adress,email, webSite, maxFreeSpots){
        this.name = name
        this.adress = adress
        this.email = email
        this.webSite = webSite
        this.maxFreeSpots = maxFreeSpots
        this.children = []
    this.waitingListKita1 = []}

        addChild(child){
            this.children.push(child);
        } 
        waitingList(child){
            this.waitingListKita1.push(child)
        }
    }

        


class Parents {
     makeApplication(kindergarten) { 
         this.kindergarten.push(kindergarten); 
    }
    constructor(name, adress, phone, email, child) {
        this.name = name
        this.adress = adress
        this.phone = phone
        this.email = email
        this.child = child  
        this.kindergarten = []    
}
}

class Child {
    constructor(name , dateOfBirth ){
    this.name = name
    this.dateOfBirth = dateOfBirth
}

}


//("-------START---------")


kita1 = new Kindergarten("Kita1", "Spandau", "eee@gmail.com", "www.kita1.de", 2)
parent1 = new Parents("Parents1 ", "Mitte ", "+49123456789", new Child("Bob", "11.01.2018" ))
parent2 = new Parents("Parents2 ", "Wedding ", "+49987654321", new Child("Mike", "10.10.2018"))
kita1.addChild(parent1.child)
kita1.addChild(parent2.child)
kita1.waitingList(parent1.child)
kita1.waitingList(parent2.child)
console.log("Amount of children in " + kita1.name + " = " + kita1.children.length)
console.log("Parents in waiting list : " + kita1.waitingList.length)
//("-------END---------")
