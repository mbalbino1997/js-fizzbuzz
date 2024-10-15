for(let i = 0; i<100; i++) {
    let num = i+1;
    const rest3 = num%3===0;
    const rest5 = num%5===0;
    if(rest3 && rest5) {
        console.log("FizzBuzz");
    } else if(rest3) {
        console.log("Fizz");
    } else if(rest5) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}