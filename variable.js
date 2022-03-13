// 변수에 대해 알아봅시다!
// https://www.youtube.com/watch?v=KF6t61yuPCY

name = "Mike"; //문자는 항상 '' / "" 둘 중 하나로 감싸야 한다
age = 30;

alert(name);
console.log(age);

// 만약 변수가 앞에 이미 존재한다면, let을 통해서 한참 후에 같은 이름의 변수를 실수로 설정해도 방지할 수 있다. 
// 아래의 예제를 보자

let goddamnvar = 3;

// 이 코드 이후에 let goddamnvar라고 작성하게 된다면, 구문 오류가 발생한다.
// 그렇다고 수정 못하는 것은 아니고, 그냥 let을 빼고 사용하면 된다.

goddamnvar = 5;

// 이 방법 말고도 다른 방법이 존재하는데, 그것이 const다.
// 하지만 final이랑 같은 것이기 때문에, 다시는 바꿀 수 없는 상수이다.
// 대문자로 선언함으로써 다른 개발자들에게 이것이 상수란 것을 어필하자.

const PI = 3.141952;

// 참고로 JS에서는 변수명에 $ 혹은 _ (언더바) 를 사용할 수 있다.

// string 
text1 = "Sans"
text2 = "I\'m Garlic";
text3 = `My name is ${text1}`; // == 'My name is Sans'

console.log(text3);
console.log(`My name is ${text1}`);
console.log(`I'm ${age + 3} years old`);// == 'I'm 33 years old'

// int, float
const num1 = 30;
const num2 = 3.14;

const divbyzero = 1/0; // ???
console.log(divbyzero) // => Infinity = 무한대가 출력됨

const stringdiv = name/2;
console.log(stringdiv) // => Nan (Not A Number) 이 출력됨

// boolean

const iscorrect = true;
const asdf = 1;
console.log(asdf == 1);

// null & undefined

let user = null; // 그냥 존재하지 않는다는 의미로 받아들이는 것이 낫다.

// typeof 연산자

const whattype = "String";
console.log(typeof 3);
console.log(typeof whattype);
console.log(typeof true);
console.log(typeof "xyz");
console.log(typeof null); // null은 object, 그러니까 객체형이 반환된다.
// 근데 null은 객체가 아니다??
console.log(typeof undefined);

const fus1 = "My age";
const fus2 = " is ";
const fus3 = 30; //number
console.log(fus1 + fus2 + fus3); 

