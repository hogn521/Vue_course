function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirst<number>([1, 2, 3]);
const str = getFirst<string>(["a", "asd", "michale"]);
console.log(num);
console.log(str);

function getLength<T extends { length: number }>(arr: T) {
  return arr.length;
}
let arr1: number[] = [1, 4, 2, 1, 4];
console.log(getLength(arr1));
