



// [1,2,3].forEach(item => {
//     console.log(item);
    
// });
// // 1,2,3 item은 number로 잘 추론

// ['1','2','3'].forEach(item => {
//     console.log(item);
    
// });
// // string으로 추론한다

// ['123',123,true].forEach(item => {
//     console.log(item);
    
// });
// // 여기선 number or boolean


// aaa.forEach((value)=>{console.log(value)});


// function add1<T>(x:T,y:T){
//     return x;
// }

// add1(1,'2') // 안됨, generic으로 타입이 같을때만 실행되게 했기 때문!
// add1('1','2') // 됨


// add1<number>(1,2); // type parameter를 이용해서도 가능하다


interface Array1<T> {
    forEach(callbakfn: (value:T,index:number,array:T[])=>void,thisArg?: any):void;
    map<U>(callbackfn:(value:T,index:number,array:T[])=>U,thisArg?:any):U[];
}
//선언할때, 뒤에 generic을 붙여준다!
const aaa:Array1<number>=[1,2,3];

const strings=[1,2,3].map((item=>item.toString));

//item 을 number로 잘받게된다!

const strings2=[1,2,3].map((item=>item+1));

//이경우 string2는 number로 성공적으로 타입추론을 하게 된다.

const filterd=[1,2,'3',4,5].filter((value)=>typeof value==='string');

//따라서, generic 하면서 커스텀 타입 설정이 필요하다!