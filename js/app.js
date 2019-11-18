var status = [];
var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var table = document.getElementById("shops");
var location = [];
function Shop(max, min, avgCoocki, site)
{
    this.max = max;
    this.min = min;
    this.avgCoocki = avgCoocki;
    this.site = site;    
};
Shop.prototype.cookiePerHour = function(){
};
 Shop.prototype.render = function(){
     var tRowEl =document.createElement ('tr');
     var tHeaderEl = document.createElement('th');
     tHeaderEl.textContent = this.site ;
     tRowEl.appendChild(tHeaderEl);
    
     var soldCoocki = 0; 
     var totalSoldCoocki = 0; 

     for ( var i=0; i< hours.length; i++){
         soldCoocki = this.cookiePerHour();

         var tDataEl = document.createElement('td');
         tDataEl.textContent = soldCoocki;
         tRowEl.appendChild(tDataEl);

         this.cookiePerHour.push(soldCoocki);
        totalSoldCoocki += soldCoocki;   
        }
        tDataEl = document.createElement('td');
        tDataEl.textContent = totalSoldCoocki;
        tRowEl.appendChild(tDataEl);
        table.appendChild(tRowEl);
 };

 // header function 
   function headerRow() {
       var headerEl = document.createElement('thead');
       var tRowEl = document.createElement('tr');
       var tHeadEl = document.createElement('th');
       tHeadEl.textContent = '';
       tRowEl.appendChild(tHeadEl);

       for (var i =0 ; i <hours.length;i++ ){
           tHeadEl = document.createElement('th');
           tHeadEl.textContent = hours[i]; 
           tRowEl.appendChild(tHeadEl);
       }
       tHeadEl = document.createElement('th');
       tHeadEl.textContent = 'Daily Location Total';
       tRowEl.appendChild(tHeadEl);
       tHeadEl.appendChild(tRowEl);

       table.appendChild(headerEl);

   }

   // table footer the totals

   function totalCoockiPerHour() {
       var tRowEl = document.createElement('tr');
       var tHeadEl = document.createElement('th');
       tHeadEl.textContent = 'totals';
       tRowEl.appendChild(tHeadEl);

       var totalOfTotals = 0; 

       for (var i=0; i < hours.length; i++){
           var totalCoocki = 0;
           for (var j=0; j < location.length; i++ ){
               totalCoocki +=location[j].cookiePerHour[i];         
          }
          var tDataEl = document.createElement('td');
          tDataEl.textContent = totalCoocki;
          tRowEl.appendChild(tDataEl);
       }
       tDataEl = document.createElement('td');
       tDataEl.textContent= totalOfTotals;
       tRowEl.appendChild(tDataEl);
       table.appendChild(tRowEl);
   }
   
   new Shop (65, 23, 6.3, 'seattle');
   new Shop (24, 3, 1.2, 'tokyo');
   new Shop (28, 11, 3.7, 'dubai');
   new Shop (38, 20, 2.3, 'dubai');
   new Shop (16, 2, 4.6, 'lima');

   function render(){
       for (var i =0; i < location.length; i++){
           location[i].render;
       }
   }





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