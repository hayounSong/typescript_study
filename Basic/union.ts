type A= {a3:string};
const a3:A={a3:'hello'};

// 변수 인라인하듯이 타입 선언, 간단하다.

interface B {a3:string};
const b3:B={a3:'hello'};

// 자바의 객체 지향 영역들이 포함됨, 객체 지향 프로그래밍이 가능하다.


function add_u(x:string | number,y:string |number):string|number{return x+y}

//union, 위 코드는 잘못된 코드이다. return값이 number인데도 스프링이 될 수도 있따/


add_u(1,2);
add_u('1','2')
add_u(1,'2')

//모든 경우의 수를 고려하는 union


type Au={hello:'world'}&{zero:'cho'};
const at:Au={hello:'world',zero:'cho'};