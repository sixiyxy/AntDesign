function echo<T>(arg: T ): T {
    return arg
}

//const str: string = 'str'
const result = echo('str')

function swap<T,U>(tuple: [T,U]): [U,T] {
    return [tuple[1],tuple[0]]
}

const result2 = swap(['string',123])   //注意result2的类型


//约束泛型
function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}

interface IWithLength {
    length: number
}

function echoWithLength<T extends IWithLength>(args: T): T {
    console.log(args.length)
    return args
}

const str = echoWithLength('str')
const obj =echoWithLength({ length: 10})
const arr2 = echoWithLength([1, 2, 3])

//类和接口       问题：解决类中数据混乱问题，但简单加数据类型又要重写新类型队列
class Queue<T> {
    private data = [];
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T {
        return this.data.shift()
    }
}
const queue = new Queue<number>()
queue.push(1)
//queue.push('str')   //此处指定类型后报错

const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue2.pop)

interface KeyPair<T, U>{
    key: T;
    value: U;
}
let kp1: KeyPair<number, string> = {key : 123 , value : "str"}
let kp2: KeyPair<string, number> = {key : '123',value: 123}

let arr1: number[] = [1, 2, 3]
let arr3: Array<number> = [1, 2, 3]

interface IPlus<T> {
    (a: T, b: T) : T
}
function plus(a: number, b: number): number {
    return a + b;
}
function connect(a: string, b: string): string {
    return a + b;
}

const a: IPlus<number> = plus
const b: IPlus<string> = connect
