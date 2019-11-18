var seattle = {
    max : 65,
    min : 23,
    avgCoocki : 6.3,
    site : 'seattle', 
    status : [],
    hours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','total'],
    
    randomCostmers:function() {
        return Math.floor(Math.random() * (this.max - this.min) + 1 + this.min)/14;
    },
    cookiePerHour : function (){
        var total = 0
        for (var i=0;i<(this.hours.length -1 ); i++ ) {
            var product = Math.floor(this.randomCostmers()* this.avgCoocki) ;
            total = total + product ;
            this.status.push(product);
        }
        this.status.push(total);
    },
    render : function(){
        var containor = document.getElementById("shops")
        var pEl = document.createElement('p');
        containor.appendChild(pEl);
        pEl.textContent = this.site ;
        var ulEl = document.createElement('ul');
        var ulEi = document.getElementById('shops').appendChild(ulEl);
        for (var i=0;i<this.hours.length;i++){
            var createLiEl = document.createElement('li');
            ulEi.appendChild(createLiEl) ;
            createLiEl.textContent = this.hours[i] +' : '+ `${this.status[i]}`+'cookies';
        }
    }
};


var Tokyo = {
    max : 24,
    min : 3,
    avgCoocki : 1.2,
    status : [],
    site : 'Tokyo', 
    hours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','total'],
    randomCostmers:function() {
        // return Math.floor(Math.random() * (this.max - this.min) ) + this.min;
        return Math.floor(Math.random() * (this.max - this.min) + 1 + this.min);
    },
    cookiePerHour : function (){
        var total = 0
        for (var i=0;i<(this.hours.length-1);i++){
            var product = Math.floor(this.randomCostmers()* this.avgCoocki) ;
            total = total + product ;
            this.status.push(product);
        }
        this.status.push(total);
    },
    render : function(){
        var containor = document.getElementById("shops")
        var pEl = document.createElement('p');
        containor.appendChild(pEl);
        pEl.textContent = this.site ;
        var ulEl = document.createElement('ul');
        var ulEi = document.getElementById('shops').appendChild(ulEl);
        for (var i=0;i<this.hours.length;i++){
            var createLiEl = document.createElement('li');
            ulEi.appendChild(createLiEl) ;
            createLiEl.textContent = this.hours[i] +' : '+ `${this.status[i]}`+'cookies';
        }
    }
};

var Dubai = {
    max : 38,
    min : 11,
    avg : 3.7,
    status : [],
    site : 'Dubai', 
    hours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','total'],
    randomCostmers:function() {
        // return Math.floor(Math.random() * (this.max - this.min) ) + this.min;
        return Math.floor(Math.random() * (this.max - this.min) + 1 + this.min);
    },
    cookiePerHour : function (){
        var total = 0
        for (var i=0;i<(this.hours.length-1);i++){
            var product = Math.floor(this.randomCostmers()* this.avg) ;
            total = total + product ;
            this.status.push(product);
        }
        this.status.push(total);
    },
    render : function(){
        var containor = document.getElementById('shops')
        var pEl = document.createElement('p');
        containor.appendChild(pEl);
        pEl.textContent = this.site ;
        var ulEl = document.createElement('ul');
        var ulEi = document.getElementById('shops').appendChild(ulEl);
        for (var i=0;i<this.hours.length;i++){
            var createLiEl = document.createElement('li');
            ulEi.appendChild(createLiEl) ;
            createLiEl.textContent = this.hours[i] +' : '+ `${this.status[i]}`+'cookies';
        }
    }
};

var Paris = {
    max : 38,
    min : 20,
    avg : 2.3,
    status : [],
    site : 'Paris', 
    hours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','total'],
    randomCostmers:function() {
        // return Math.floor(Math.random() * (this.max - this.min) ) + this.min;
        return Math.floor(Math.random() * (this.max - this.min) + 1 + this.min);
    },
    cookiePerHour : function (){
        var total = 0
        for (var i=0;i<(this.hours.length-1);i++){
            var multiplication = Math.floor(this.randomCostmers()* this.avg) ;
            total = total + multiplication ;
            this.status.push(multiplication);
        }
        this.status.push(total);
    },
    render : function(){
        var containor = document.getElementById("shops")
        var pEl = document.createElement('p');
        containor.appendChild(pEl);
        pEl.textContent = this.site ;
        var ulEl = document.createElement('ul');
        var ulEi = document.getElementById('shops').appendChild(ulEl);
        for (var i=0;i<this.hours.length;i++){
            var createLiEl = document.createElement('li');
            ulEi.appendChild(createLiEl) ;
            createLiEl.textContent = this.hours[i] +' : '+ `${this.status[i]}`+'cookies';
        }
    }
};

var lima = {
    max : 16,
    min : 2,
    avg : 4.6,
    status : [],
    site : 'Lima', 
    hours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','total'],
    randomCostmers:function() {
        // return Math.floor(Math.random() * (this.max - this.min) ) + this.min;
        return Math.floor(Math.random() * (this.max - this.min) + 1 + this.min);
    },
    cookiePerHour : function (){
        var total = 0
        for (var i=0;i<(this.hours.length-1);i++){
            var multiplication = Math.floor(this.randomCostmers()* this.avg) ;
            total = total + multiplication ;
            this.status.push(multiplication);
        }
        this.status.push(total);
    },
    render : function(){
        var containor = document.getElementById("shops")
        var pEl = document.createElement('p');
        containor.appendChild(pEl);
        pEl.textContent = this.site ;
        var ulEl = document.createElement('ul');
        var ulEi = document.getElementById('shops').appendChild(ulEl);
        for (var i=0;i<this.hours.length;i++){
            var createLiEl = document.createElement('li');
            ulEi.appendChild(createLiEl) ;
            createLiEl.textContent = this.hours[i] +' : '+ `${this.status[i]}`+'cookies';
        }
    }
};

var site = [seattle,Tokyo,Dubai,Paris,lima];
for (var i =0;i<site.length;i++){
    site[i].cookiePerHour();
    site[i].render();    
}