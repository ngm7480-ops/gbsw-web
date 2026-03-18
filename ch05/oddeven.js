const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("정수를 입력하세요. : ", function(num) {
    // 홀수/짝수 판별법 - 2로 나머지 연산 후 나머지가 0이면 짝수
    // 나머지 연산 후 나머지가 1인 홀수
    if (num % 2 === 0) {
        console.log("짝수");
    } else {
        console.log("홀수");
    }
    rl.close();
});