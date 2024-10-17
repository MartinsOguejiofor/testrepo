function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = principal * years * rate/100;
    amount = parseInt(principal) + parseFloat(interest);
    result = document.getElementById("result");

    var year = new Date().getFullYear() + parseInt(years);

    if (principal <= 0)
    {
        alert("Please enter a positive number!");
        document.getElementById("principal").focus();
    }
    else 
    {
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\>" + 
        "at an interest rate of " + "<mark>" + rate + "</mark>" + "%.\<br\>" +
        "You will receive an amount of " + "<mark>" + amount + "</mark>" + ",\<br\>" +
        "in the year " + "<mark>" + year + "</mark>" + " \<br\>"

        //changing the inner html property of the result span to the above message
        //result.innerHTML = message;
    }
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        