function solution(numbers) {
    var sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]
    }
    
    return sum / numbers.length
}