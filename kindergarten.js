
module.exports = class Kindergarten { 
    constructor(name, adress,email, webSite, maxFreeSpots){
        this.name = name
        this.adress = adress
        this.email = email
        this.webSite = webSite
        this.maxFreeSpots = maxFreeSpots
        this.children = []
    this.waitingList = []}
/* This function add kids into kindergarten until free spots is availiable . 
When there is not enought plases ,kid goes to waiting list */
        addChild(child){
            if(this.children.length != this.maxFreeSpots){
                this.children.push(child);
            } else {
                console.log("No places are availiable, you are added to waiting list");
                this.waitingList.push(child);

            }
        }
    }
    