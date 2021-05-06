
// 소수 찾기
function isPrime(n) {
    if (n<=1) return false; // 1 false
    if (n<=3) return true; // 2,3 true

    if(n%2==0 || n%3==0) return false; // 2와 3의 배수 false

    for(var i=5; i*i<=n; i=i+6){  // n의 제곱근 까지 i를 5부터 6씩 더하면서
        if(n%i==0||n%(i+2)==0){ // 5 11 17 
            return false;
        }
    }
    return true;
}

// 소인수 분해
function primeFactors(n){
    while (n%2 == 0){
        console.log(2);
        n = n/2;
    }

    for(var i = 3; i*i <= n; i=+2){
        while (n%i==0){
            console.log(i);
            n = n/i;
        }

    }

    if (n>2){
        console.log(n);
    }
}

primeFactors(10);