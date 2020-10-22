const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callBack) {
      let keysArray = Object.keys(collection); // works with Objects and Arrays (which are also objects in JavaScript)
      for (const key of keysArray) { callBack(collection[key]) }
      return collection;
    },

    map: function(collection, callBack) { 
      let keysArray = Object.keys(collection); let newArray = [];
      for (const key of keysArray) { newArray.push(callBack(collection[key])) }
      return newArray;
    },

    reduce: function(collection, callBack, init) {
      let newCollection = Object.assign([], collection);
      let runningTotal = init || newCollection.shift();
      for (const eachElement of newCollection) { runningTotal = callBack(runningTotal, eachElement) }
      return runningTotal;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
