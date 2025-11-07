document.getElementById("calculate").onclick = displayTip;

function displayTip() {
    let BillAmount = Number(document.getElementById("bill").value);
    let TipPercentage = Number(document.getElementById("tip").value);
    let TotalTip = (BillAmount/100) * TipPercentage;
    document.getElementById("tip-amount").innerText = `${TotalTip.toFixed(2)}`;
}