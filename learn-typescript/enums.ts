const enum Direction {              //常量枚举，提升性能
    //Up = 10,
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

console.log(Direction.Up)
//console.log(Direction[11])

const value = 'Up'
if(value === Direction.Up){
    console.log('go up!')
}