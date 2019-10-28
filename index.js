// This project is dedicated to the idea of facilitating the registration of parents 
//of their children in a multiply number of kindergartens with one application. 
const Kindergarten = require ('./kindergarten')
const Parent = require ('./parent')
const Child = require ('./child')

const Database = require('./database')

const Chalk = require('chalk')









//("-------START---------")


const kita1 = new Kindergarten("Kita1", "Spandau", "eee@gmail.com", "www.kita1.de", 2)
const parent1 = new Parent("Parents1 ", "Mitte ", "+49123456789", new Child("Bob", "11.01.2018" ))
const parent2 = new Parent("Parents2 ", "Wedding ", "+49987654321", new Child("Mike", "10.10.2018"))
const parent3 = new Parent("Boiko" , "Kladow" , "+49836546473" , new Child("Philipp", "11.12.2017"))
const parent4 = new Parent("Lot" , "Kreuzberg", "+490000000", new Child("Lisa", "01.01.2018"))
const parent5 = new Parent("Doder", "Mitte", "+498765456", new Child("Mark", "04.08.2017"))
const parent6 = new Parent("Frank", "Reikenindorf", "+49647387261", new Child("Olya", "30.12.2017"))
const parent7 = new Parent( "Schrank", "kreuzberg", "+4962763545", new Child("Pepe", "27.07.2018"))
kita1.addChild(parent1.child)
kita1.addChild(parent2.child)
kita1.addChild(parent3.child)
kita1.addChild(parent4.child)
kita1.addChild(parent5.child)
kita1.addChild(parent6.child)
kita1.addChild(parent7.child)

console.log("Amount of children in " + Chalk.inverse.red(kita1.name) + " = " + Chalk.inverse.green(kita1.children.length))
console.log("Parent in waiting list : " + Chalk.bgRed(kita1.waitingList.length))
//("-------END---------")
Database.save('kindergarten.json', kita1)
const loadedFileKindergarten = Database.load('kindergarten.json')
console.log(loadedFileKindergarten.name) 

const parentList = [parent1, parent2, parent3, parent4, parent5, parent6, parent7]
Database.save('parents.json', parentList)
const loadedFileParent = Database.load('parents.json')
console.log(loadedFileParent.name) 

const childList = [parent1.child, parent2.child, parent3.child, parent4.child, parent5.child, parent6.child, parent7.child]

Database.save('children.json', childList)
const childrenFile = Database.load('children.json')
console.log(childrenFile.name) 

