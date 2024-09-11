function calculateResults() {
    let rate = document.getElementById("rate").value;
    let term = document.getElementById("term").value;
    let mortgage = document.getElementById("amount").value;
    formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    
    // convert the information for the formula
    rate = rate/100;
    rate = rate/12;
    term = term * 12;

    if (document.getElementById("repayment").checked == true) {
        // mortgage formula
        let monthlyPayment = parseInt(mortgage) * ((rate*Math.pow((1+rate),term))/((Math.pow((1+rate),300))-1))
        let totalPayment = monthlyPayment * 300;

        document.getElementById("repay").value = formatter.format(monthlyPayment);
        document.getElementById("totalRepay").value = formatter.format(totalPayment);
    } else {
        let monthlyPayment = rate * mortgage;
        let totalPayment = monthlyPayment * term;
        
        document.getElementById("repay").value = formatter.format(monthlyPayment);
        document.getElementById("totalRepay").value = formatter.format(totalPayment);
    }

}

function clearAll() {
    document.getElementById("amount").value = "";
    document.getElementById("term").value = "";
    document.getElementById("rate").value = "";

    let radios = document.getElementsByTagName("input");
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].type == "radio") {
            radios[i].checked = false;
        }
    }
}