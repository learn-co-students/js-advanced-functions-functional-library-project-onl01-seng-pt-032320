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

    reduce: function(col = [], callback = () => {}, acc =0) {

      let sum = collection.reduce(())


    },

    find: function() {

    },


  }
})()

fi.libraryMethod()
