const duplicatedNames = (arrayNames)=> {
    let duplicados = arrayNames.filter((value,index,array)=>{
        return array.indexOf(value) !== index;
    });

    return duplicados.length > 0;
}