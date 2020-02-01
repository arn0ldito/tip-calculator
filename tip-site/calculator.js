function tipCalculator(x) {
    // Stores user input from 
    input = document.getElementById("userInput").value;

    //Takes user input and multiplies it by .15, .2, or .25 and rounds it to nearest hundreth
    tipAmount = (input*x).toFixed(2);

    //Checks if user input is a number
    if(!isNaN(tipAmount)){
       
        //Displays full bill amount in h2
        fullBill = Number(input) + Number(tipAmount);

        document.getElementById('full-bill').innerHTML = ("Your full bill is $" + fullBill.toFixed(2));

         //Displays tip amount in h3
         document.getElementById('tip').innerHTML = ("Your tip amount is $"+tipAmount);
    
    //If user input is not a number it will display "Please enter a number"
    } else {
        //Displays "please enter a number" in h3
        document.getElementById('tip').innerHTML = ("Please enter a number");
        document.getElementById('full-bill').innerHTML = ("");
    }
}

