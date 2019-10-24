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
    this.waitingList = []}

        addChild(child){
            if(this.children.length != this.maxFreeSpots){
                this.children.push(child);
            } else {
                console.log("No places are availiable, you are added to waiting list");
                this.waitingList.push(child);

            }
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
parent3 = new Parents("Boiko" , "Kladow" , "+49836546473" , new Child("Philipp", "11.12.2017"))
parent4 = new Parents("Lot" , "Kreuzberg", "+490000000", new Child("Lisa", "01.01.2018"))
parent5 = new Parents("Doder", "Mitte", "+498765456", new Child("Mark", "04.08.2017"))
parent6 = new Parents("Frank", "Reikenindorf", "+49647387261", new Child("Olya", "30.12.2017"))
parent7 = new Parents( "Schrank", "kreuzberg", "+4962763545", new Child("Pepe", "27.07.2018"))
kita1.addChild(parent1.child)
kita1.addChild(parent2.child)
kita1.addChild(parent3.child)
kita1.addChild(parent4.child)
kita1.addChild(parent5.child)
kita1.addChild(parent6.child)
kita1.addChild(parent7.child)

console.log("Amount of children in " + kita1.name + " = " + kita1.children.length)
console.log("Parents in waiting list : " + kita1.waitingList.length)
//("-------END---------")
