function myFunction(customers) {
 
 var customerArray = customers.split(" ");
 console.log(customerArray);
 for(var i=0; i<customerArray.length;i++){
   var customer = customerArray[i].trim();
   window.open('http://' + customer + '.clickmotivefusionstage.com');
 }
}