class Animal {
    readonly name: string;   
    static categoies: string[] = ['mammal','bird']          //改成private?   protected子类可访问  readonly
    static isAnamal(a){
        return a instanceof Animal
    }
    constructor(name: string){
        this.name = name
    }
    run() {
        return `${this.name} is running`
    }
}

console.log(Animal.categoies)
const snake = new Animal('lily')
console.log(snake.run())
// snake.name = 'lucy'
// console.log(snake.name)

class Dog extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}
const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run())
console.log(xiaobao.bark())

class Cat extends Animal{
    constructor(name: string) {
        super(name)
        console.log(this.name)
    }
    run() {
        return "Meow, " + super.run()
    }
}

const maomao = new Cat('maomao')
console.log(maomao.run())


interface Radio {
    switchRadio(): void;
}

interface Battery {
    checkBatteryStatus();
}
interface RadioWithBattery extends Radio {
    checkBatteryStatus();
}
//car和cellphone都有switchRadio功能 但却不易于找到共有的父类
class Car implements Radio{
    switchRadio(){

    }
}

class Cellphone implements Radio, Battery{
    switchRadio(){
    }
    checkBatteryStatus() {

    }
    
}
class Cellphone2 implements RadioWithBattery{
    switchRadio(){
    }
    checkBatteryStatus() {

    }
}