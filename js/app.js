var status = [];
var allShops = [];
var containor = document.getElementById('shops');
var tableEl = document.createElement('table');
containor.appendChild(tableEl);

var form = document.getElementById('newShopForm')
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

form.addEventListener("submit", function(event) {
event.preventDefault();

var site = event.target.name.value;
var min = event.target.min.value;
var max = event.target.max.value;
var avgCoocki = event.target.avgCoockei.value;
var newShop = new Shop(site, min, max, avgCoocki);
allShops.push(newShop);
var rowNum = tableEl.rows.length;
tableEl.deleteRow(rowNum -1);
newShop.render();
renderfooter();
});

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


