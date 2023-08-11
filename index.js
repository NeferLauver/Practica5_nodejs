let repited = listOfNames.map((el)=>0);
listOfNames.forEach((name)=>{
    listOfNames.forEach((el,i)=>{
        if(el === name ){
            repited[i]++;
        }
    })
})

let isRepited = repited.reduce ((acum,curr)=>{
    return curr > 1 ? true : false;
},false)
console.log(isRepited ? 'se repite': 'no se repite')


/* cual es el nombre mas largo */

let nameSize = listOfNames.reduce((acum,curr)=>{
    return curr.length > acum.length ? curr : acum ;
}, listOfNames[0])
console.log(nameSize)


/* cual es el nombre mas corto */

let nameShort = listOfNames.reduce((acum,curr)=>{
    return curr.length < acum.length ? curr : acum ;
}, listOfNames[0])
console.log(nameShort)