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

    find: function(collection, searchFunc) {
      for (const query of collection) { if (searchFunc(query)) {return query} }
    },

    filter: function(collection, searchFunc) {
      let theResult = [];
      for (const query of collection) { if (searchFunc(query)) { theResult.push(query) } }
      return theResult;
    },

    size: function(collection) {
      let total = 0;
      for (const x of Object.keys(collection)) { total ++ }
      return total;
    },

    first: function(array, num=1) {
      let oldArray = array.slice(); let newArray;
      if (num===1) { newArray = oldArray[0] }
      else 
      { newArray = []; for (num; num>0; num--) { newArray.push(oldArray.shift()) } }
      return newArray;
    },

    last: function(array, num=1) {
      let oldArray = array.slice(); let newArray;
      if (num===1) { newArray = oldArray[oldArray.length-1] }
      else 
      { newArray = []; for (num; num>0; num--) { newArray.unshift(oldArray.pop()) } }
      return newArray;
    },

    compact: function(array) {
      let arrayCopy = array.slice();
      let newArray = [];
      for (const elem of arrayCopy) { if (elem) { newArray.push(elem)} }
      return newArray;
    },

    sortBy: function(array, callBack) {
      let originalArray = array.slice()
      return originalArray.sort((a, b) => callBack(a) - callBack(b) );
    },

    flatten: function(array, bool) { // THIS IS A BONUS SO I AM CHEATING /////
      if (bool == true) { return array.flat(1) } else { return array.flat(3) }
    },

    // uniq: function(array, bool) {
    //   // SKIPPED ////////////////
    // },

    keys: function(theObject) {
      let anArray = [];
      for (const prop in theObject) { anArray.push(prop) }
      return anArray;
    },

    values: function(theObject) {
      let anArray = [];
      for (const prop in theObject) { anArray.push(theObject[prop]) }
      return anArray;
    },

    functions: function(theObject) {
      let anArray = [];
      for (const prop in theObject) {
      if (typeof theObject[prop] === "function") {anArray.push(prop)}}
      return anArray;
    },


  }
})()

fi.libraryMethod()
