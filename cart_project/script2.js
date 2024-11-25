// console.log("Inside Script 2");
let txt="", i=0;
// console.log(localStorage.length, JSON.parse(localStorage.getItem(0)));
let total = 0;


if(localStorage.length == 0){
    document.getElementById("tbody").innerHTML = `<tr>
    <td colspan="5">No Item Selected</td>
    </tr>`;
}
else{
   while(i<localStorage.length){
    let order = JSON.parse(localStorage.getItem(i));
    txt += `<tr><td>${order.id}</td><td>${order.item}</td><td>${order.selected}</td><td>${order.price}</td><td>Rs ${order.selected * order.price}</td></tr>`;
    total += order.selected * order.price;
    i++;
   }
   document.getElementById("tbody").innerHTML = txt;
   document.getElementById("total-cost").innerHTML = `Your total order costs <u>Rs ${total}.00</u>`;
}