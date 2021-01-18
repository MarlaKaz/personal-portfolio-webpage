function myFunction() {
    var x = document.getElementById("myTextArea").value;
    var str1 = x.replace(/[^0-9a-z]/gi, '').toLowerCase();
    var str2 = str1.split("").reverse().join("");
    if (str1 === str2) {
      document.getElementById("demo").innerHTML = "It's a Palindrome!";
    } else {
      document.getElementById("demo").innerHTML = "It's not a Palindrome..";
    }
  }