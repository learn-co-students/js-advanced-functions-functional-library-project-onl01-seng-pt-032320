const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, fn) {
      let x = Array.isArray(collection) ? collection.slice() : Object.values(collection)
      for (let i = 0; i < x.length; i++) {
        fn(x[i]);
      }
      return collection;
    },

    map: function(collection, fn) {
      let x = Array.isArray(collection) ? collection.slice() : Object.values(collection)
      let newArray = []; 
      for (let i = 0; i < x.length; i++) {
        newArray.push(fn(x[i]));
      }
      return newArray;
    },

    reduce: function(collection, fn, acc) { 
      let i;
      if (acc) {
        i = 0 
      } else {
        i = 1 
        acc = collection[0]
      }
      for (i; i < collection.length; i++) {
        acc = fn(acc, collection[i]); 
      }
      return acc; 
    },


    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (!!predicate(collection[i])) {
          return collection[i];
        } 
      }
    },

    filter: function(collection, predicate) {
        let newArray = [] 
        for (let i = 0; i < collection.length; i++) {
          if (!!predicate(collection[i])) {
            newArray.push(collection[i]);
          } 
        }
        return newArray;
    },

    size: function(collection) {
      let x = Array.isArray(collection) ? collection.slice() : Object.keys(collection)
      return x.length;
    }
    ,


    first: function(array, n) {
      let result = (n) ? array.slice(0, n) : array[0];
      return result;
    },


   last: function(array, n) {
      let result = (n) ? array.slice(-n) : array[array.length - 1];
      return result;
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

    sortBy: function(array, fn) {
      let newArray = array.slice();
      newArray.sort((a,b) => fn(a) - fn(b));
      return newArray;
    },

    flatten: function(array, shallow) {
        let flattened = (shallow) ? array.flat(1) : array.flat(Infinity);
        return flattened;
    },

//  
    uniq: function(array, isSorted = false, callback) {
      if (callback) {
        return fi.filter(array, callback)
      }
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
        let functions = [];
        for (const k in object) {
          if (typeof object[k] === "function") {
            functions.push(k)
          }
        }
        functions.sort((a,b) => a - b)
        return functions;
    },

  }
})()

fi.libraryMethod()


