
function calculateTip() {
    const totalBill = parseFloat(document.getElementById('totalBill').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if (isNaN(totalBill) || isNaN(tipPercentage)) {
        document.getElementById('result').textContent = "Please enter valid numbers.";
    } else {
        const tipAmount = totalBill * (tipPercentage / 100);
        const totalAmount = totalBill + tipAmount;
        document.getElementById('result').textContent = `Tip: $${tipAmount.toFixed(2)} | Total: $${totalAmount.toFixed(2)}`;
    }
}
