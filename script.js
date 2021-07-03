// OLD VERSION
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...arr) => arr.filter(num => num % 2 === 0);


const findMin = (...arr) => arr.reduce((min, currNum) => currNum < min ? currNum : min)

const mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map((num) => num * 2)]

function removeRandom(items) {
    const sliceNum = Math.floor(Math.random() * items.length)
    const itemsCopy = [...items]
    itemsCopy.splice(sliceNum, 1)
    return itemsCopy;
}

function extend(array1, array2) {
    return [...array1, ...array2];
}

function addKeyVal(obj, key, val) {
    const newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}

function removeKey(obj, key) {
    const newObj = { ...obj }
    delete newObj[key];
    return newObj;
}

function combine(obj1, obj2) {
    return { ...obj1, ...obj2 }
}

function update(obj, key, val) {
    newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}