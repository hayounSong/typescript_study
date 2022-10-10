const a: number = 5;
const b:number=5;
const c:boolean=true;
const d:undefined=undefined;
const e:null=null;
const f:any= '123'; 
// any는 모든타입이 다되는것, ts에선 사용을 자제하자.

const js=()=>{}

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
