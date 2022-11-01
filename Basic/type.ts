const array=[];

// never라는 타입이 오게되면, 어떠한 값도 들어갈 수 없다. 따라서 빈배열 선언할때는 타입 선언해주기

const head:Element= document.querySelector('body')!;
const head2= document.querySelector('body');


// head는 무조건 있다! 이 엘리멘트는 무조건 있다라고 자신할 수 있을때 마지막에 느낌표를 붙여준다.
// 이 경우 타입의 null이 사라짐., 단 비추하는 코드.


type World="world";

const a1: World='world';

// 이런식으로, 직접 사용자가 type을 선언해줄 수 도 있다.

type Greeting=`hello ${World}`;
const c1:Greeting='hello world';
const c4:Greeting='hello world'

//이런식으로도 사용가능! Greeting이란 type은 이 경우, hello World가 된다!
//자동완성 기능 역시 에디터 사용시 제공한다.

let arr3: string[] = [];
let arr4: Array<string> = [];
function rest(...args: string[]):string{return args[0]}
rest('1','2','3');

//이런식으로 Rest 문 역시 사용 가능하다.(타입 선언만 통해서)

const tuple1: [string, number] = ['1', 1];
// tuple1[2] = 'hello'; 에러가 난다.

tuple1.push('hello');
//단, Tuple 인데 이건 정상적으로 동작하는데, 타입스크립트의 어느정도 한계다.


const enum EDirection{
    Up='123',
    Down='hello',
    Left='2ww',
    Right='22'
}
//enum은 위에서 1,2,3,4 값이 선언된다

const aup= EDirection.Up;

//약간 객체랑 비슷하다고 생각하자
//단, JS로 변환시 사라진다.

const ODirection={

    Up:0,
    Down:1,
    Left:2,
    Right:3,
} as const;

//이런식으로는 안사라진다.

type Direction=typeof ODirection[keyof typeof ODirection];
function run(dir: Direction){}

