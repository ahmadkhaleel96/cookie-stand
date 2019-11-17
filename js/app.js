'use strict'
var hours=["6am:", "7am:" , "8am:", "9am:", "10am:", "11am:", "12Pm:", "1pm:", "2pm:", "3Pm", "4pm:","5pm","6pm","7pm:","8pm:","total"],

var seattle = {
    name: "seattle",
    min: 23,
    total: 0,
    max: 65,
    avgCookie: 6.3,
    status : [], 
randomCustomers: function() {
   return Math.floor((Math.random() * (this.max - this.min) + 1) + this.min);
 //The maximum is inclusive and the minimum is inclusive 

}, 

cookiePerHours: function() {
    var cookiePerHour;
    var total = 0
    for (var i=0; i< hours.length -1 ; i++){
        cookiePerHour = Math.floor(this.randomCustomers()* this.avgCookie);
        total = total + cookiePerHour;
        // this.total = this.total + this.cookiePerHour;
        this.status.push(cookiePerHour)
        console.log(cookiePerHour, this.total);
}  
this.status.push(cookiePerHour)   

//   return cookiePerHour;
    // this.cookiePerHour= randomCustomers* avgCookie;
    // console.log(this.cookiePerHour);
    // return this.cookiePerHour
    
}, 
render: function(){ 
    //alert('hi');
var container = document.getElementById('shops');
//console.log(container);
var articleEl = document.createElement('article');
var h2El = document.createElement('h2');
h2El.textContent = seattle.name;
articleEl.appendChild(h2El);
container.appendChild(articleEl);
var ulEl = document.createElement('ul');
articleEl.appendChild(ulEl);
for (var i = 0; i < hours.length; i++) {
var liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent= (`${hours[i]} ${this.cookiePerHours()} cookie`);
}
var liEl = document.createElement('li');
ulEl.appendChild(liEl);
liEl.textContent = (` Total: ${this.total} cookie`);
    // for (var i=0; i < hours.length ; i++){
    // this.total = this.total + this.cookiePerHours();
    // }
    // if (i = hours.length){
    //     liEl.textContent = (`Total: ${this.total} cookie`);
}

}
;
seattle.randomCustomers();
seattle.cookiePerHours();
seattle.render();
