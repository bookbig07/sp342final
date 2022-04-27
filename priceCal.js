const  InDexValuex = [ 91.25 , 79.88, 83.12, 100 ]

function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
  let Mathx = ( InDexValuex[eventId] * ticknum )
  return Mathx;
}


