function search (item,array){
    for(i=0; i<array.length;i++){
        if(item == array[i])
        return i;
    }
    return -1;
}
module.exports = search;