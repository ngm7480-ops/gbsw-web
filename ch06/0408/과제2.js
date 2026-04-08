// 반복문 / 조건문 / 배열 원소 삭제

function solution(arr, delete_list) {
    var answer = [];
    for (let i = 0; i < arr.legnth; i++) {
        let flag = true;
        for (let j = 0; j < delete_list.length; j++) {
            if (arr[i] === delete_list[j]) {
                flag = false;
            }
        }
        if (flag) {
            answer.push(arr[i]);
        }
    }
    return answer;
}