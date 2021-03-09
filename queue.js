function Queue () {
    collection = [];
    
    this.print = function(){
        console.log(collection)
    }
    this.add = function (item){
        return collection.push(item)
    }
    this.remove = function () {
       return collection.shift()
    }
    this.front = function (){
        return collection[0]
    }
    this.size=function(){
        return collection.length
    }
    this.isEmpty = function (){
        return (collection.length === 0)
    }
}


// best shown on an array
