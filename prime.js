function check_prime(num){
    let count=0;
    for(let i=0;i<=num;i++){
        if(num%i){
            return true;
        }else{
            return false;
        }
    }
}
let ans=check_prime(17);
ans==true?console.log("Palindrome"):console.log("NA");