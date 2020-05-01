const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, func) {
      const newArr = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let index = 0; index < newArr.length; index++) {
        func(newArr[index])
      }
      return collection
    },

    map: function(collection, func) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      let newArr = []
      for (let index = 0; index < collection.length; index++) {
        newArr.push(func(collection[index]))
      }
      return newArr
    },

    reduce: function(collection, func, start) {
      if (!start) {
        start = collection[0]
        collection = collection.slice(1)
      }
      for (let index = 0; index < collection.length; index++) {
        start = func(start, collection[index], collection)
      }
      return start
    },
    
    find: function(collection, func) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      for (let index = 0; index < collection.length; index++) {
        if (func(collection[index])) return collection[index]
      }
      return undefined
    },

    filter: function(collection, func) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      let filtered = []
      for (let index = 0; index < collection.length; index++) {
        if (func(collection[index])) filtered.push(collection[index])
      }
      return filtered
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.values(collection).length
    },

    first: function(collection, count = false) {
      return (count) ? collection.slice(0, count) : collection[0]
    },

    last: function(collection, count = false) {
      return (count) ? collection.slice(collection.length - count) : collection[collection.length - 1]
    },

    compact: function(arr) {
      let newArr = []
      for (let index = 0; index < arr.length; index++) {
        if (!!arr[index]) {
          newArr.push(arr[index])
        }
      }
      return newArr
    },

    sortBy: function(arr, func) {
      const newArr = [...arr]
      return newArr.sort(function(a, b) {
        return func(a) - func(b)
      })
    },

    uniq: function(arr, isSorted = false, func = false) {
      
    },

    keys: function(obj) {
      let keyArr = []
      for (const key in obj) {
        keyArr.push(key)
      }
      return keyArr
    },

    values: function(obj) {
      let valueArr = []
      for (const key in obj) {
        valueArr.push(obj[key])
      }
      return valueArr
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
