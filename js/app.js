var status = [];
var allShops = [];
var containor = document.getElementById('shops');
var tableEl = document.createElement('table');
containor.appendChild(tableEl);
// var tr = document.createElement('tr')
// tableEl.appendChild(tr)
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function Shop(site, min, max, avgCoocki) {
    this.site = site;
    this.min = min;
    this.max = max;
    this.avgCoocki = avgCoocki;
    this.salesPerHour = [];
    this.total = 0;
    allShops.push(this);
    this.cookiePerHour();
};

Shop.prototype.cookiePerHour = function () {
    for (var i = 0; i < hours.length; i++) {
        random = (Math.random() *( this.max - this.min + 1) + this.min) * this.avgCoocki;
        this.salesPerHour.push(Math.ceil(random));
        this.total += this.salesPerHour[i];
        // console.log(this.salesPerHour)
    }
};
 
Shop.prototype.render = function () {
    //  var tr = document.createElement('tr')
    //  tableEl.appendChild(tr);
    var tRowEl = document.createElement('tr');
    tableEl.appendChild(tRowEl);
    var tDataEl = document.createElement('td');
    tRowEl.appendChild(tDataEl);
    tDataEl.textContent = this.site;

    for (var i = 0; i < this.salesPerHour.length; i++) {
        var tDataEl = document.createElement('td');
        tDataEl.textContent = this.salesPerHour[i]
        tRowEl.appendChild(tDataEl);
    }
    
            var totalTdEl = document.createElement('td');
            tRowEl.appendChild(totalTdEl);
            totalTdEl.textContent = this.total;
};

new Shop('seattle', 23, 65, 6.3);
new Shop('Tokyo', 3, 24, 1.2);
new Shop('paris', 11, 28, 3.7);
new Shop('Paris', 20, 38, 2.3);
new Shop('lima', 2, 16, 4.6);

// header function 
function renderHeader() {
    var tRowEl = document.createElement('tr');
    tableEl.appendChild(tRowEl);
    var tHeadEl = document.createElement('th');
    tRowEl.appendChild(tHeadEl);
    tHeadEl.textContent = '';
    for (var i = 0; i < hours.length; i++) {
        var tHeadEl = document.createElement('th');
        tRowEl.appendChild(tHeadEl);
        tHeadEl.textContent = hours[i];
    }
    var tHeadEl = document.createElement('th');
    tRowEl.appendChild(tHeadEl);
    tHeadEl.textContent = 'Daily Location Total';
}
function renderfooter() {
    var tRowEl = document.createElement('tr');
    tableEl.appendChild(tRowEl);
    var tDataEl = document.createElement('td');
    tRowEl.appendChild(tDataEl);
    tDataEl.textContent = 'total';
    var totalOfTotal = 0;
    for (var i = 0; i < hours.length; i++) {
        var sum = 0;
        for (var j = 0; j < allShops.length; j++) {
            sum += allShops[j].salesPerHour[i];
            
        }
        totalOfTotal += sum;
        var tDataEl = document.createElement('td');
        tRowEl.appendChild(tDataEl);
        tDataEl.textContent = sum;
    }
    var tDataEl = document.createElement('td');
    tRowEl.appendChild(tDataEl);
    tDataEl.textContent = totalOfTotal;
}

renderHeader();
for (var i = 0; i < allShops.length; i++) {
    allShops[i].render();
}
renderfooter();





// var seattle = {
    //     max : 65,
    //     min : 23,
    //     avgCoocki : 6.3,
    //     site : 'seattle', 

    //     // randomCostmers:function() {
        //     //     return 
//     // },
//     cookiePerHour : function (){
//         var total = 0
//         for (var i=0;i<(hours.length -1 ); i++ ) {
//             var product = Math.floor(Math.floor(Math.random() * (this.max - this.min) + 1 + this.min)/14 * this.avgCoocki) ;
//             total = total + product ;
//             status.push(product);
//         }
//         status.push(total);
//     },
//     render : function(){
//         var containor = document.getElementById("shops")
//         var pEl = document.createElement('p');
//         containor.appendChild(pEl);
//         pEl.textContent = this.site ;
//         var ulEl = document.createElement('ul');
//         var ulEi = document.getElementById('shops').appendChild(ulEl);
//         for (var i=0;i<hours.length;i++){
//             var createLiEl = document.createElement('li');
//             ulEi.appendChild(createLiEl) ;
//             createLiEl.textContent = hours[i] +' : '+ `${status[i]}`+'cookies';
//         }
//     }
// };


// // var Tokyo = {
// //     max : 24,
// //     min : 3,
// //     avgCoocki : 1.2,
// //     status : [],
// //     site : 'Tokyo', 
// //     hours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','total'],
// //     randomCostmers:function() {
// //         // return Math.floor(Math.random() * (this.max - this.min) ) + this.min;
// //         return Math.floor(Math.random() * (this.max - this.min) + 1 + this.min);
// //     },
// //     cookiePerHour : function (){
// //         var total = 0
// //         for (var i=0;i<(hours.length-1);i++){
// //             var product = Math.floor(this.randomCostmers()* this.avgCoocki) ;
// //             total = total + product ;
// //             status.push(product);
// //         }
// //         status.push(total);
// //     },
// //     render : function(){
// //         var containor = document.getElementById("shops")
// //         var pEl = document.createElement('p');
// //         containor.appendChild(pEl);
// //         pEl.textContent = this.site ;
// //         var ulEl = document.createElement('ul');
// //         var ulEi = document.getElementById('shops').appendChild(ulEl);
// //         for (var i=0;i<hours.length;i++){
// //             var createLiEl = document.createElement('li');
// //             ulEi.appendChild(createLiEl) ;
// //             createLiEl.textContent = hours[i] +' : '+ `${status[i]}`+'cookies';
// //         }
// //     }
// // };

// // var Dubai = {
// //     max : 38,
// //     min : 11,
// //     avg : 3.7,
// //     status : [],
// //     site : 'Dubai', 
// //     hours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','total'],
// //     randomCostmers:function() {
// //         // return Math.floor(Math.random() * (this.max - this.min) ) + this.min;
// //         return Math.floor(Math.random() * (this.max - this.min) + 1 + this.min);
// //     },
// //     cookiePerHour : function (){
// //         var total = 0
// //         for (var i=0;i<(hours.length-1);i++){
// //             var product = Math.floor(this.randomCostmers()* this.avg) ;
// //             total = total + product ;
// //             status.push(product);
// //         }
// //         status.push(total);
// //     },
// //     render : function(){
// //         var containor = document.getElementById('shops')
// //         var pEl = document.createElement('p');
// //         containor.appendChild(pEl);
// //         pEl.textContent = this.site ;
// //         var ulEl = document.createElement('ul');
// //         var ulEi = document.getElementById('shops').appendChild(ulEl);
// //         for (var i=0;i<hours.length;i++){
// //             var createLiEl = document.createElement('li');
// //             ulEi.appendChild(createLiEl) ;
// //             createLiEl.textContent = hours[i] +' : '+ `${status[i]}`+'cookies';
// //         }
// //     }
// // };

// // var Paris = {
// //     max : 38,
// //     min : 20,
// //     avg : 2.3,
// //     status : [],
// //     site : 'Paris', 
// //     hours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','total'],
// //     randomCostmers:function() {
// //         // return Math.floor(Math.random() * (this.max - this.min) ) + this.min;
// //         return Math.floor(Math.random() * (this.max - this.min) + 1 + this.min);
// //     },
// //     cookiePerHour : function (){
// //         var total = 0
// //         for (var i=0;i<(hours.length-1);i++){
// //             var multiplication = Math.floor(this.randomCostmers()* this.avg) ;
// //             total = total + multiplication ;
// //             status.push(multiplication);
// //         }
// //         status.push(total);
// //     },
// //     render : function(){
// //         var containor = document.getElementById("shops")
// //         var pEl = document.createElement('p');
// //         containor.appendChild(pEl);
// //         pEl.textContent = this.site ;
// //         var ulEl = document.createElement('ul');
// //         var ulEi = document.getElementById('shops').appendChild(ulEl);
// //         for (var i=0;i<hours.length;i++){
// //             var createLiEl = document.createElement('li');
// //             ulEi.appendChild(createLiEl) ;
// //             createLiEl.textContent = hours[i] +' : '+ `${status[i]}`+'cookies';
// //         }
// //     }
// // };

// // var lima = {
// //     max : 16,
// //     min : 2,
// //     avg : 4.6,
// //     status : [],
// //     site : 'Lima', 
// //     hours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','total'],
// //     randomCostmers:function() {
// //         // return Math.floor(Math.random() * (this.max - this.min) ) + this.min;
// //         return Math.floor(Math.random() * (this.max - this.min) + 1 + this.min);
// //     },
// //     cookiePerHour : function (){
// //         var total = 0
// //         for (var i=0;i<(hours.length-1);i++){
// //             var multiplication = Math.floor(this.randomCostmers()* this.avg) ;
// //             total = total + multiplication ;
// //             status.push(multiplication);
// //         }
// //         status.push(total);
// //     },
// //     render : function(){
// //         var containor = document.getElementById("shops")
// //         var pEl = document.createElement('p');
// //         containor.appendChild(pEl);
// //         pEl.textContent = this.site ;
// //         var ulEl = document.createElement('ul');
// //         var ulEi = document.getElementById('shops').appendChild(ulEl);
// //         for (var i=0;i<hours.length;i++){
// //             var createLiEl = document.createElement('li');
// //             ulEi.appendChild(createLiEl) ;
// //             createLiEl.textContent = hours[i] +' : '+ `${status[i]}`+'cookies';
// //         }
// //     }
// // };
//  var site = [seattle,Tokyo,Dubai,Paris,lima];
// // for (var i =0;i<site.length;i++){
// //     site[i].cookiePerHour();
// //     site[i].render();    
// // }