//可选参数后不可跟默认参数，即可选参数一定在最后
//可以使用x： number = 10 设定默认值

//方法1
// function add(x: number, y: number, z?: number): number{
//     if(typeof z === 'number'){
//         return x + y + z;
//     }else{
//         return x + y;
//     }
    
// }

//let result = add(2, 3)

//方法2
const add = function(x: number, y: number, z?: number): number{
    if(typeof z === 'number'){
        return x + y + z;
    }else{
        return x + y;
    }
    
}

const add2: (x: number, y: number, z?: number) => number =  add
//类型推断功能
