const isLogin = true;
const isAdmin = false;

console.log(isLogin && isAdmin);

console.log(true || false)
console.log(false || false)

let id = "ABCD";
let pw = "0000";
let correctId = "asdf";
let correctPw = "1234"

let result = (id === correctId && pw === correctPw) 
? "로그인되었습니다." : "아이디 또는 비밀번호가 틀렸습니다.";

console.log(result);

console.log(!true);
console.log(!null);

let email = "ABCF";

let result2 = (id !== null && id !== undefined) ? "이메일 확인" : "이메일 입력되지 않음";
let result3 = (email ?? null) ? "이메일 확인" : "이메일 입력되지 않음";

console.log(result2);
console.log(result3);
console.log(null ?? "기본값");
console.log(undefined ?? "기본값")
console.log("안녕하세요" ?? "기본값")