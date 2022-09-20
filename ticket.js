console.log('person 1: shows ticket')
console.log('person 2: shows ticket')

const promiseWifeBringingticket = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')
    },3000)
})

const getPopcorn = promiseWifeBringingticket.then((t)=>{
    console.log('husband: we should go in')
    console.log('no i am hungry')
    return new Promise((resolve,reject)=> resolve(`${t} popcorn`))
})

const getButter = getPopcorn.then((t)=> {
    console.log('husband: we shoulld go in')
    console.log('wife : i need butter on my popcorn')
    return new Promise((resolve,reject)=>resolve(`${t} butter`))
})

const getColdDrinks=getButter.then((t)=>{
    console.log(`husband: anything else`)
    console.log('wife: need some drinks')
    return new Promise((resolve)=> resolve(`${t} colddrinks`))

})

getColdDrinks.then((t)=>console.log(t))
console.log('person 4: shows ticket')
console.log('person 5: shows ticket')
