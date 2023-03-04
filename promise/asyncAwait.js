async function preMovie(){
    console.log('person1 : shows tickt');
    console.log('person2 : shows tickt');
    const promisWifeBringingTickt = new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve('ticket')
        }, 2000);
    });
    const getPopcorn = new Promise((resolve, reject)=> resolve(`popcorn`)) ;
    const getButter = new Promise((resolve, reject)=> resolve(`butter`)) ;
    const getcoldDrinks = new Promise((resolve, reject)=> resolve(`coldDrinks`)) ;
    

    const ticket =  await promisWifeBringingTickt ;
        console.log(`wife : i have ${ticket}`)
        console.log('husband : we should go in');
        console.log('wife : no i am hungry');
       
    const popcorn =  await getPopcorn ;
        console.log(`husband : i got ${popcorn}`);
        console.log('husband : we should go in');
        console.log('wife : no i need butter on my popcorn');
       
    const butter =  await getButter ;
        console.log(`husband : i got ${butter}`);
        console.log('husband : we should go in');
        console.log('wife : no i need coldDrinks also');

    const coldDrinks = await getcoldDrinks ;  
       console.log(`now we have ${coldDrinks}also`)

        
   return [ticket , popcorn , butter , coldDrinks] ;
    

}
preMovie().then((data)=>console.log(data));