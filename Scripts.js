function calculateResults() {
    let rate = document.getElementById("rate").value;
    let term = document.getElementById("term").value;
    let mortgage = document.getElementById("amount").value;
    let totalPayment = mortgage;

    for (let i=1; i<term; i++) {
        totalPayment = parseInt(totalPayment) + (parseInt(totalPayment)*(parseInt(rate)/100))
    }
    document.getElementById("totalRepay").value = "$" + totalPayment;
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