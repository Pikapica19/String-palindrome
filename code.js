const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome(){
  let word = document.querySelector(".input-text").value;
  let flip = word.split("").reverse().join("");

  if(word == flip){
    result.innerHTML = `${word.toUpperCase()} is a Palindrome`
  }
  else{
    result.innerHTML = `${word.toUpperCase()} is NOT a Palindrome`
  }
}