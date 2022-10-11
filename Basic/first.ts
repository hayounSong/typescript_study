const a = '5';
const b:number=5;
const c:boolean=true;
const d:undefined=undefined;
const e:null=null;
const f:any= '123'; 
// any는 모든타입이 다되는것, ts에선 사용을 자제하자.

const t:5=5; 
//값 고정

const js=()=>{}


function add_simple(x:number,y:number){return x+y};
const result=add_simple(1,2);
//이러한 경우에도 정상적으로 인식한다. 타입이 any로 나오면 수정하는 과정을 거치도록 하자.

// function add(x: number, y: number): number { return x + y }
// const add: (x: number, y: number) => number = (x, y) => x + y;

type Add=(x: number, y: number) => number;
// type alias 를 통해 type 으로 타입 선언도 가능
const add:Add = (x, y) => x + y;

const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };
const arr:string[]=['123','456']
const arr2:Array<string>=['123','456'] 
//generic식 선언 방법
const tuple:[number,number,string]=[123,456,'helo'];


type Add3= ()=> number;
interface Mins{}
Array<string>

let aa=123;

aa='helo' as unknown as number;

//앞의 타입을 강제로 바꿔주는 as