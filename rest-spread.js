const arr = [1, 2, 3, 4];

const [ first, ...rest ] = arr;

const rotated = [...rest, first];

console.log(rotated)



