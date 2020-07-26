function CalculateBill() {
  var totalBill =  document.getElementById("TotalBill").value;
  var numOfPpl = document.getElementById("NoOfPpl").value;
  var tip = document.getElementById("Tip").value;
  tipAmount = (totalBill/numOfPpl)*(tip/100);
 
   document.getElementById("TipAmnt").innerHTML = tipAmount;
  
   document.getElementById("GrossBill").innerHTML = +totalBill +  +tipAmount;
}