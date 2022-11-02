function check_prime(number){
    let factors=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            factors++ ;
        }
    }
    if(factors==2){
        return true;
    }else{
        return false;
    }
}
let ans=check_prime(17);
ans==true?console.log("Number is a Palindrome"):console.log("Number is not a Palindrome");