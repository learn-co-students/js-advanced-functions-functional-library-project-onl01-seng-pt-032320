const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, func) {
      let x = Array.isArray(collection) ? collection.slice() : Object.values(collection)
      for (let i = 0; i < x.length; i++) {
        func(x[i])
      }
      return collection
    },

    map: function(collection, func) {
      let x = Array.isArray(collection) ? collection.slice() : Object.values(collection)
      let newArray = []
      for (let i = 0; i < x.length; i++) {
        newArray.push(func(x[i]))
      }
      return newArray
    },

    reduce: function(collection, func, acc) {
      let i;
      if (acc) {
        i = 0
      } else {
        i = 1
        acc = collection[0]
      }
      for (i; i < collection.length; i++) {
        acc = func(acc, collection[i]);
      }
      return acc
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    },

    filter: function(collection, predicate) {
      let newArray = []
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          newArray.push(collection[i]);
        }
      }
      return newArray
    },

    size: function(collection) {
      let x = Array.isArray(collection) ? collection.slice() : Object.keys(collection)
      return x.length;
    },

    first: function(array, n) {
      let x = (n) ? array.slice(0, n) : array[0]
      return x;
    },

    last: function(array, n) {
      let x = (n) ? array.slice(-n) : array[array.length -1];
      return x;
    },

    compact: function(array) {
      let newArray = [] 
      for (let i = 0; i < array.length; i++) {
        if (!!array[i] === true) {
          newArray.push(array[i]);
        } 
      }
        return newArray; 
    },

    sortBy: function(array, func) {
      let newArray = array.slice();
      newArray.sort((x,y) => func(x) - func(y));
      return newArray;
    },

    flatten: function(array, shallow) {
        let flatArray = (shallow) ? array.flat(1) : array.flat(Infinity);
        return flatArray;
    },

    uniq: function(array, isSorted = false, callback) { 
      let arrayFn = [];
      let newArray = []; 
      if (isSorted === false) {
        array.sort((a,b) => a*1 - b*1)
      } 
      if (callback) {
          let obj = {};
          array.map((e) => {
            obj[e] = callback(e)
          })
          let results = []; 
          for (const key in obj) {
            if (!results.includes(obj[key])) {
              results.push(obj[key]);
              arrayFn.push(parseInt(key));
            }
         } 
        return arrayFn;  
      } else {
        newArray = [...new Set(array)]
      }
      return newArray;
    },

    keys: function(object) {
      let keys = [];
      for (const k in object) keys.push(k);
      return keys
    },

    values: function(object) {
      let values = [];
      for (const k in object) values.push(object[k]);
      return values
    },

    functions: function(object) {
      let funcArray = []
      for (const k in object) {
        if (typeof object[k] === "function") {
          funcArray.push(k)
        }
      }
      funcArray.sort((x,y) => x - y)
      return funcArray;
    },


  }
})()

fi.libraryMethod()
