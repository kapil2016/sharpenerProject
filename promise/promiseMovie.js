console.log('person1 : shows tickt');
console.log('person2 : shows tickt');
const promisWifeBringingTickt = new Promise((resolve , reject)=>{
    setTimeout(() => {
        resolve('ticket')
    }, 2000);
});
const getPopcorn = promisWifeBringingTickt.then((data) =>{
    console.log('wife : i have tics')
    console.log('husband : we should go in');
    console.log('wife : no i am hungry');
    return new Promise((resolve, reject)=> resolve(`${data} popcorn`))
});

const getButter = getPopcorn.then((data) =>{
    console.log('husband : i got popcorn');
    console.log('husband : we should go in');
    console.log('wife : no i need butter on my popcorn');
    return new Promise((resolve, reject)=> resolve(`${data} butter`))
});

const getColdDrinks = getButter.then((data)=>{
    console.log('husband : i got butter');
    console.log('husband : we should go in');
    console.log('wife : no i need coldDrinks also');
    return new Promise((resolve, reject)=> resolve(`${data} coldDrinks`))

})

getColdDrinks.then((data)=> console.log(data))


console.log('person4: shows ticket');
console.log('person5: shows ticket');
