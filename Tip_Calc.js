function tipCalc(amt) {
    return (amt * 1.2).toFixed(2);
}


bill_amt = Number(prompt("What is the bill amount?"));

total_amt = tipCalc(bill_amt)
document.getElementById("text").innerHTML = "Your total including tip is $" + total_amt;

console.log("Your total including tip is $" + total_amt);
