/*jshint esversion: 6 */
init();
function init() {
  //jquery materialize stuff:
  $(document).ready(function() {
      $('.slider').slider();
      $(".button-collapse").sideNav();
    });

  //function variables
  let choiceClass = document.getElementsByClassName("menuChoice");
  let orderbtn = document.getElementsByClassName("ordBtn");
  let body = document.getElementById("table");
  let totalTax = 0;
  let sum = 0;

  Array.from(choiceClass).forEach((element) => {
    element.addEventListener('click', addToTable);
  });

  Array.from(orderbtn).forEach((element) => {
    element.addEventListener('click', function(){
      location.href = "ordering.html";
    });
  });

  function addToTable() {
    let selectRow = document.createElement("tr");
    let selectItem = document.createElement("td");
    let selectPrice = document.createElement("td");
    selectPrice.className = "right-align";
    selectItem.className = "left-align";
    selectItem.innerText = this.name;
    selectPrice.innerHTML = `$ ${this.value}`;
    selectRow.appendChild(selectItem);
    selectRow.appendChild(selectPrice);
    body.appendChild(selectRow);
    adding(this.value);
  }

  function adding(value) {
    var newVal = Number(value);
    let subtotal = document.getElementById('subtotal');
    let tax = document.getElementById('tax');
    let total = document.getElementById('total');
    totalTax += (0.10 * value);
    sum += newVal;
    totalSum = sum + totalTax;
    tax.innerText = totalTax.toFixed([2]);
    subtotal.innerText = sum.toFixed([2]);
    total.innerHTML = `$ ${totalSum.toFixed([2])}`;
  }

  function validation() {
     var orderName = document.getElementById('orderName').value;
     var orderNum = document.getElementById('orderNum').value;
     var orderAddress = document.getElementById('orderAddress').value;
     if(orderName === "" || orderNum === "" || orderAddress === ""){
         alert('please fill in all fields');
         return false;
     } else {
       alert("Thanks for ordering!", 5000);
    }
  }
}
