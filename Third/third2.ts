
interface Arr<T>{
    forEach(callback: (item:T)=>void):void;
    map<S>(callback:(v:T)=>S):S[];
}


const a4: Arr<number>=[1,2,3];

// [1,2,3].forEach((item)=>{
//     console.log(item);
// })

// a4.forEach((item)=>{
//     console.log(item);
//     return 3;
// })


const b4=a4.map((v)=>v+1);
const c5=a.localeCompare((v)=>v.toString());