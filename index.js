const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, value) {
        let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

        for (let i = 0; i < newCollection.length; i++){
          value(newCollection[i])
        }

        return collection
    },

    map: function(collection,callback) {

      let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      let newArr = newCollection.map(value => callback(value))
      return newArr

    },

    reduce: function(col = [], callback = () => {}, acc = 0) {
          let array  = col.slice(0)

          if(!acc){
            acc = array[0]
            array = array.slice(1)
          }

          let size = array.length;

          for(let i = 0; i < size; i++){
            acc = callback(acc, array[i], array)
          }

          return acc;
      


    },

    find: function(array,predicate) {
        if(!(array instanceof Array))
          array = Object.values(array)

        for(let i = 0 ; i < array.length; i++){
          if(predicate(array[i])){
            return array[i]
          }
        }

        return undefined

    },

    filter: function(array,value){
      if(!(array instanceof Array))
          array = Object.values(array)

      const newArray = []

      for (let i = 0; i < array.length; i++){
        if (value(array[i])){
          newArray.push(array[i])
        }
      }

      return newArray


  },

  size: function(col){
     return (col instanceof Array ) ? col.length : Object.keys(col).length
  },

  first: function(array,n = false){
    if(!(array instanceof Array))
          array = Object.values(array)
    let firstVal = array[0]
    if(n)
      return array.slice(0,n)
    else
      return firstVal
    
  },

  last: function(array,n = false){
    if(!(array instanceof Array))
          array = Object.values(array)
    let lastVal = array[array.length-1]
    if(n)
      return array.slice(array.length-n, array.length)
    else
      return lastVal
    
  },
  compact: function(array){
    let newArray = []
    array.map(value => {
      value ? newArray.push(value) : undefined
    })

    return newArray
  },
  sortBy: function(col,callback){
    return Array.prototype.slice.call(col,0).sort((a,b)=>{
      var val1 = callback(a);
      var val2 = callback(b);
      return val1 < val2 ? -1 : val1 > val2 ? 1 : 0;
    })
  }, 
  unpack: function(receiver, arr) {
    for (let val of arr)
      receiver.push(val)
  },
  flatten: function(collection, shallow, newArr=[]) {
    if (!Array.isArray(collection)) return newArr.push(collection)
    if (shallow) {
      for (let val of collection)
        Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
    } else {
      for (let val of collection) {
        this.flatten(val, false, newArr)
      }
    }
    return newArr
  },

  uniqSorted: function(collection, iteratee) {
    const sorted = [collection[0]]
    for (let idx = 1; idx < collection.length; idx++) {
      if (sorted[idx-1] !== collection[idx])
        sorted.push(collection[idx])
    }
    return sorted
  },

  uniq: function(collection, sorted=false, iteratee=false) {
    if (sorted) {
      return fi.uniqSorted(collection, iteratee)
    } else if (!iteratee) {
      return Array.from(new Set(collection))
    } else {
      const modifiedVals = new Set()
      const uniqVals = new Set()
      for (let val of collection) {
        const moddedVal = iteratee(val)
        if (!modifiedVals.has(moddedVal)) {
          modifiedVals.add(moddedVal)
          uniqVals.add(val)
        }
      }
      return Array.from(uniqVals)
    }
  },

  keys: function(obj) {
    // Using for loop
    const keys = []
    for (let key in obj){
      keys.push(key)
    }
    return keys
  },

  values: function(obj) {
    // Using for loop
    const values = []
    for (let key in obj){
      values.push(obj[key])
    }
    return values

    // Using the custom 'map' method from above
    // return this.map(obj, (value) => value)

  },

  functions: function(obj) {
    const functionNames = []

    for (let key in obj) {
      if (typeof obj[key] === "function"){
        functionNames.push(key)
      }
    }

    return functionNames.sort()
  },


  }
})()

fi.libraryMethod()
