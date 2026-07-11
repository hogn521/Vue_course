interface Person {
  name: string;
  age: number;
  fav?: string;
  eat?(food: string): void;
}

const p: Person = {
  name: "michale",
  age: 19,
};
const me: Person = {
  name: "me",
  age: 19,
  fav: "chifan ",
  eat(food: string): void {
    console.log(`${this.name}再吃这个${food}`);
  },
};
console.log(p);
console.log(me);
if(me.eat){
    me.eat("hambug")
}
