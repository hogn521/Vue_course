abstract class A {
  abstract name: string;
  abstract show(): void;
}

class B extends A {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
  show() {
    console.log("展示了", this.name);
  }
}
const b = new B("Me");
b.show();
