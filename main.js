function impar(num) {
    let impares = [];
    for (let i = 2; i <= num; i++) {
        if (i%2!=0) {
            impares.push(i);
        }
    }
    return impares;
}

function serie1(end) {
    let res=0,numbers=[];
    numbers=impar(end);
    for (let i = 0; i < numbers.length; i++) {
        if (i==0) {
            res = 4 - (4/numbers[i]);
        }else if (numbers.length%2==0&&i==numbers.length-1) {
            res += (4/numbers[i])
        }else {
            res += ((4/numbers[i])-(4/numbers[++i]));
        }
    }
    return res;
}
console.log(`Serie 1: ${serie1(11)}`);

function factorial(n) { if (n==0) {return 1} return n * factorial(n - 1) }

function serie2(end) {
    let res=0;
    for (let i = 0; i <= end; i++) {
        if (i==0) {
            res+=1;
        }else{
            res+=1/factorial(i);
        }
    }
    return res;
}
console.log(`Serie 2: ${serie2(5)}`)