// 类class
class Dog {
  public name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  Bark() {
    console.log(`${this.name} is barking!!!`);
  }

  showAge() {
    return this.age;
  }
}

let wangcai: Dog = new Dog("wangcai", 5);
wangcai.Bark();
console.log(`${wangcai.name}的年龄是${wangcai.showAge()}`);

class Son_Dog extends Dog {
  //   readonly favourite: string;
  color: string;
  constructor(name: string, age: number, color: string, fav?: string) {
    super(name, age);
    this.color = color;
    // this.favourite = fav;
  }
  tryFav(fav: string) {
    // this.favourite = fav;
  }
}
type Person = { name: string };

const people = ["alice", "bob", "jan"].map((name): Person => ({ name }));
console.log(people);

export {};
