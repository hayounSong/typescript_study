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
// type Au={hello:'world'}|{zero:'cho'};
// and일때와 or일떄 주의하기, and 일때는 모든 속성이 다 있어야 한다.
const at:Au={hello:'world',zero:'cho'};


type Animal={breath:true};
type Poyoryu=Animal&{breed:true};
type Human=Poyoryu&{think:true};
//이런식으로 타입을 상속의 개념으로도 사용이 가능하다.

const zerocho:Human={breath:true,breed:true,think:true};


interface A3{
    breath:true
}

interface B extends A3{
    breed:true
}
// 이렇게 interface에서도 상속 가능. 보통 간단하게 사용할때 타입을 사용하고,
// 명확한 코딩을 위해서는 인터페이스를 사용한다.


// 단, 명확하게 둘이 구분되어 있는것은 아니다. 


// 또한, Interface는 중복된 여러개의 선언이 가능하다.