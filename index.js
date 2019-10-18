// This project is dedicated to the idea of facilitating the registration of parents 
//of their children in a multiply number of kindergartens with one application. 
Kindergarten = class {
    constructor(name, adress){
        this.name = name
        this.adress = adress
    }
    accept(parents){
        console.log("Dear" + parents.name + "your child is added to the our waiting list!")
    }
    deny(parents){
        console.log("Sorry " + parents.name + "your application is denied")
    }
}
Parents = class {
    constructor(name, adress, phone)
{
    this.name = name
    this.adress = adress
    this.phone = phone
}
    apply(kindergarten){
        console.log("Application for chilnd1 age 4" + kindergarten.name + " from" + kindergarten.adress)
        console.log("Best regards" + this.name)

    }
}

kita1 = new Kindergarten("Kita1", "Spandau")
parent1 = new Parents("Parents1 ", "Mitte ", "+49123456789")
parent2 = new Parents("Parents2 ", "Wedding ", "+49987654321")
parent1.apply(kita1)
kita1.accept(parent1)
kita1.deny(parent2)