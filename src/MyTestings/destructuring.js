const person={
    name:'hicham',
    age:24,
    location:{
        city:'Philadelphia',
        temp:46
    }
}

const { name: firstName="default" , age }=person;
// console.log(`my name is ${firstName} and my age is ${age} `)
// const {city, temp:temperature}=person.location;
// console.log(`my city is ${city} and temperatue is ${temperature}`)

//Array destructuring 

const adress=["Quartier Tifardine","Lakhssas","SIDI IFNI","55500"];
const [quartier, city="Aknown Town" , /*province*/, zip] = adress;

// console.log(`You live in ${quartier} in city ${city} in province of ${province} your zip ${zip}`)
console.log(`You live in ${quartier} in city ${city} your zip ${zip}`)