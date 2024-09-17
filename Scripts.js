let problem = false;

function calculateResults() {
    let rate = document.getElementById("rate").value;
    let term = document.getElementById("term").value;
    let mortgage = document.getElementById("amount").value;
    formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

    if (rate=="") {
        hideRate();
        problem = true; 
    }
    if (term=="") {
        hideTerm();
        problem = true;
    }
    if (mortgage=="") {
        hideMortgage();
        problem = true;
    } 

    if (problem == true) {
        return;
    }

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

function hideMortgage() {
    document.getElementById("errorMorg").innerHTML = "This field is required";
    document.getElementById("morg").style.display = "none";
    document.getElementById("hiddenMorg").style.display = "flex";
    document.getElementById("amount").style.display = "none";
    document.getElementById("amount1").style.display = "flex";
    document.getElementById("dollarSign").style.display = "none";
    document.getElementById("dollarSign1").style.display = "inline-block";
}

function hideRate() {
    document.getElementById("errorRate").innerHTML = "This field is required";
    document.getElementById("rateDiv").style.display = "none";
    document.getElementById("hiddenRate").style.display = "inline-block";
    document.getElementById("percent").style.display = "inline-block";
    document.getElementById("rate1").style.display = "inline-block";
}

function hideTerm() {
    document.getElementById("errorTerm").innerHTML = "This field is required";
    document.getElementById("termDiv").style.display = "none";
    document.getElementById("hiddenTerm").style.display = "inline-block";
    document.getElementById("yearText").style.display = "inline-block";
    document.getElementById("term1").style.display = "inline-block";
}

function removeWarnings() {
    if (problem == true) {
        // remove term warnings
        document.getElementById("errorTerm").innerHTML = "";
        document.getElementById("termDiv").style.display = "";
        document.getElementById("hiddenTerm").style.display = "none";
        document.getElementById("yearText").style.display = "none";
        document.getElementById("term1").style.display = "none";
        // remove rate warnings
        document.getElementById("errorRate").innerHTML = "";
        document.getElementById("rateDiv").style.display = "";
        document.getElementById("hiddenRate").style.display = "none";
        document.getElementById("percent").style.display = "none";
        document.getElementById("rate1").style.display = "none";
        // remove mortgage warnings
        document.getElementById("errorMorg").innerHTML = "";
        document.getElementById("morg").style.display = "";
        document.getElementById("hiddenMorg").style.display = "none";
        document.getElementById("amount").style.display = "";
        document.getElementById("amount1").style.display = "none";
        document.getElementById("dollarSign").style.display = "";
        document.getElementById("dollarSign1").style.display = "none";
        problem = false;
    }
}