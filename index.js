const fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function (coll, cBack) {
      if (Array.isArray(coll)) {
        for (let a of coll) {
          cBack(a);
        }
        coll;
      } else {
        for (let a in coll) {
          cBack(coll[a]);
        }
        coll;
      }
      return coll;
    },

    map: function (coll, cBack) {
      let newArray = [];
      if (Array.isArray(coll)) {
        for (let a of coll) {
          newArray.push(cBack(a));
        }
      } else {
        for (let key in coll) {
          newArray.push(cBack(coll[key]));
        }
      }
      return newArray;
    },

    reduce: function (c, cBack, acc) {
      if (!acc) {
        acc = c[0];
        c = c.slice(1);
      }

      for (let i = 0; i < c.length; i++) {
        acc = cBack(acc, c[i], c);
      }
      return acc;
    },

    find: function (coll, predicate) {
      if (Array.isArray(coll)) {
        for (let x of coll) {
          if (predicate(x)) return x;
        }
      } else {
        for (let y in coll) {
          if (predicate(y)) return y;
        }
      }
      return undefined;
    },

    filter: function (coll, predicate) {
      let newArray = [];
      if (Array.isArray(coll)) {
        for (let x of coll) {
          if (predicate(x)) newArray.push(x);
        }
      } else {
        for (let y in coll) {
          if (predicate(y)) newArray.push(y);
        }
      }
      return newArray;
    },

    size: function (coll) {
      if (Array.isArray(coll)) {
        return coll.length;
      } else {
        return Array.from(Object.values(coll)).length;
      }
    },

    first: function (array, n) {
      let newArray = [];
      if (!n) {
        return array[0];
      } else {
        return (newArray = array.slice(0, n));
      }
    },

    last: function (array, n) {
      let newArray = [];
      if (!n) {
        return array[array.length - 1];
      } else {
        return (newArray = array.slice(-n));
      }
    },

    compact: function (array) {
      let newArray = [];
      for (let x of array) {
        if (!!x == true) {
          newArray.push(x);
        }
      }
      return newArray;
    },

    sortBy: function (arr, cBack) {
      const newArr = Array.from(arr)
      return newArr.sort(function(a, b) {
        return cBack(a) - cBack(b)
      })
    },

    flatten: function (arr,shallow){
      return shallow ? arr.flat() : arr.flat(3)
    },

    uniq: function (arr, isSorted, cBack){
      if (cBack){
        let newArr = []
        return [...new Set(
        arr.filter(function (x){
        let newVal = cBack(x)
        if (!newArr.includes(newVal)) {
               newArr.push(newVal)
               return x
             }
        }))]
        }else {
        return [...new Set(arr)]
        }
    },

    keys: function(obj){
      return [...new Set(Object.keys(obj))]
    },

    values: function(obj){
      return [...new Set(Object.values(obj))]
    },

    functions: function (obj) {
      let newArr = new Set()

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          newArr.add(key)
        }
      }

      return Array.from(newArr).sort()

    },
  };
})();

fi.libraryMethod();
