const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (typeof collection == 'array')
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection)
        }
      else {
        let keys = Object.keys(collection)
        for (let i = 0; i < keys.length; i++) {
          callback(collection[keys[i]], keys[i], collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      const newArray = [];
      if (typeof collection == 'array')
        for (let i = 0; i < collection.length; i++) {
          newArray[i] = callback(collection[i], i, collection)
        }
      else {
        let keys = Object.keys(collection)
        for (let i = 0; i < keys.length; i++) {
          newArray[i] = callback(collection[keys[i]], keys[i], collection)
        }
      }
      return newArray    },

    reduce: function(collection, callback, acc=null) {
    let i;
    if (acc === null) {
        i = 1;
        acc = collection[0];
      } else {
        i = 0;
      }
      for (i; i < collection.length; i++) {
        let newAcc = callback(acc, collection[i], i, collection);
        acc = newAcc;
      }  
    return acc  },

    find: function(collection, predicate) {
      let output
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          output = collection[i]
          break
        }
      }
      return output
    },

    filter: function(collection, predicate) {
      let output = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          output.push(collection[i])
        }
      }
      return output
    },

    size: function(collection) {
      let size;
      if (typeof collection == 'array') {
        size = collection.length;
      } else {
        let keys = Object.keys(collection);
        size = keys.length;
      }
      return size
    },

    first: function(collection, n=1) {
      if (n === 1) {
        return collection[0];
      } else {
        const output = [];
        for (let i = 0; i < n; i++) {
            output.push(collection[i])
        }
        return output
      }
    },

    last: function(collection, n=1) {
      const l = collection.length
      if (n === 1) {
        return collection[l-1];
      } else {
        const output = [];
        for (let i = 1; i < n + 1; i++) {
            output.unshift(collection[l-i])
        }
        return output
      }
    },

    compact: function(array) {
      const output = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          output.push(array[i])
        }
      }
      return output
    },
    
    sortBy: function(array, callback) {
      let newArray = [...array]
      newArray.sort( (a, b) => callback(a) - callback(b) )
      return newArray
    },

    flatten: function(array, shallow){
      
      const flattenOneLevel = function(){
        let newArray = [];

        for(let i=0; i<this.length; i++){
          
          let index = this[i]
          if(Array.isArray(index)){

            for(let j=0; j<index.length; j++){  
              newArray.push(index[j])
            }
          } 
          else {
            newArray.push(index)
          }
        };

        return newArray
      }

      const hasArray = function(){
        
        let has = false;
        for(var i=0; i<this.length; i++){
          if( Array.isArray(this[i]) ){
            has = true;
            break;
          }
        }
        return has;
      }

      let flatArray = [...array]

      while (hasArray.call(flatArray)){
        flatArray = flattenOneLevel.call(flatArray)
        if(shallow === true){ break; };
      }
      
      return flatArray;
    },

     uniq: function(array, isSorted, cbFunction){
      
      let transformedArray = [];

      if(cbFunction){
        for(let i=0; i<array.length; i++){
          transformedArray.push(cbFunction(array[i]))
        }
      } else {
        transformedArray = [...array]
      }

      let uniqueValues = [];
      let arrayToReturn = [];

      for(let i=0; i<transformedArray.length; i++){

        if(uniqueValues.indexOf(transformedArray[i]) === -1){
          uniqueValues.push(transformedArray[i])
          arrayToReturn.push(array[i])
        } 
      }

      if(isSorted){
        return arrayToReturn
      } else {
        return arrayToReturn.sort( (a,b) => a-b )
      }
    },

    keys: function(object){
      let allKeys = [];
      for (let key in object){
        allKeys.push(key)
      }
      return allKeys
    },

    values: function(object){
      let allValues = [];
      for(let key in object){
        allValues.push(object[key])
      }
      return allValues
    },

    functions: function(object) {
      let allFunctions = [];
      for(let key in object){
        if( typeof object[key] === 'function'){
          allFunctions.push(key)
        }
      }
      return allFunctions
    }


  }
})()

fi.libraryMethod()
