console.log('person 1: shows ticket')
console.log('person 2: shows ticket')

const preMovie = async ()=>{
    
    const promiseWifeBringingtickets = new Promise((reolve,reject)=>{
        setTimeout(() => reolve('ticket'), 3000);
    })

    const getPopcorn = new Promise((resolve,reject)=>resolve('popcorn'))

let ticket = await promiseWifeBringingtickets

console.log('husband: we should go in')
console.log('no i am hungry')

let popcorn = await getPopcorn;

const addButter = new Promise((resolve,reject)=>resolve('Butter'))
console.log('husband: we shoulld go in')
console.log('wife : i need butter on my popcorn')

let Butter = await addButter;

console.log(`husband : i got some ${Butter} on popcorn`)
console.log(`husband: anything else`)
console.log('wife: need some drinks')

const getColdDrinks = new Promise((resolve,reject)=> resolve('Cold Drinks')) 

let coolDrinks = await getColdDrinks

console.log(`husband : i got some ${coolDrinks}`)
console.log(`husband: anything else`)
console.log('wife:no we are getting late')
console.log(`husband thank you for the reminder *grins*`)
return ticket

}


preMovie().then((m)=>console.log(`shows ${m}`) )

console.log('person 4: shows ticket')
console.log('person 5: shows ticket')
