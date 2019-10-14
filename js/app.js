'use strict';
var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
// var Seattle={
//     location :'Seattle',
//     minimum: 23,
//     maximum: 65,
//     average: 6.3,
//     averagecustomer: function(){
//         var range = this.maximum-this.minimum
//          var rand= Math.random()*range+this.minimum;
//          return Math.ceil(rand);    
//     }

// };
// var Tokyo={
//         location :'Tokyo',
//         minimum: 3,
//         maximum: 24,
//         average: 1.2,
//         averagecustomer: function(){
//             var range = this.maximum-this.minimum
//              var rand= Math.random()*range+this.minimum;
//              return Math.ceil(rand);

//         } 
//     }; 
//     var Dubai={ط
//             location :'Dubai',
//             minimum: 11,
//             maximum: 38,
//             average: 3.7,
//             averagecustomer: function(){
//                 var range = this.maximum-this.minimum
//                  var rand= Math.random()*range+this.minimum;
//                  return Math.ceil(rand);
//                 }
//             };


//             var Paris={
//                 location :'Paris',
//                 minimum: 20,
//                 maximum: 38,
//                 average: 2.3,
//                 averagecustomer: function(){
//                     var range = this.maximum-this.minimum
//                      var rand= Math.random()*range+this.minimum;
//                      return Math.ceil(rand);
//                 }
//                 } ;
//                 var Lima={
//                     location :'Lima',
//                     minimum: 2,
//                     maximum: 16,
//                     average: 4.6,
//                     averagecustomer: function(){
//                         var range = this.maximum-this.minimum
//                          var rand= Math.random()*range+this.minimum;
//                          return Math.ceil(rand);
//                     }
//                     } ;

// // for (var i=0; i<hours.length;i++) {
// // var cookiesPerHour = Math.ceil(this.random* this.avgCookies);
// // console.log(cookiesPerHour);

// // this.random.push(average[i].cookiesPerHour);
// // this.totalCookiesPreDay+=cookiesPerHour;
// // }
// var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
// var object = ['Seattel' ,'Tokyo' , 'Dubai' ,'Paris' , 'Lima' ];
// var cookiesNumber=[];

// for (var j=0; j<object.length ;j++){

//     for (var i=0; i< hours.length ;i++){
//         cookiesNumber[i]=Math.ceil(object[i].averagecustomer()*object[i].averagecustomer);
//         object[i].cookiesNumberArr=cookiesNumber[i];
//     }
// }
// console.log(cookiesNumber);
// console.log(object[0].averagecustomer());

var Seattle = {
    'min': 23,
    'max': 65,
    'Avg': 6.3,
    hourlySales: [],
    dailySales:0 ,
    location: 'Seattle',

    getRandomCustomerCount: function () {
        var range = this.max - this.min;
        var randomcount = Math.random() * range + this.min;
        return Math.ceil(randomcount);

    },
    generatHourlySales: function () {
        for (var i = 0; i < hours.length; i++) {
            var cookiesSoldThisHours = Math.ceil(this.getRandomCustomerCount() * this.Avg);
            this.hourlySales.push(cookiesSoldThisHours);
            this.dailySales += cookiesSoldThisHours;
        }
    },
    render: function () {
        var container = document.getElementById('content-area');
        var h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = 'Seattle';
        var ul = document.createElement('ul');
        container.appendChild(ul);

        var li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = '6am:16 cookies';
        for (var i = 0; i < hours.length; i++) {
            var li = document.createElement('li');
            ul.appendChild(li);
            // li.textContent='6am:16 cookies';
            li.textContent = hours[i] + ':' + Seattle.hourlySales[i]; +'cookies';

        }
var total = document.createElement('li');
      total.textContent  ='Total: '+this.dailySales+' cookies';
      li.appendChild(total);
       
    }}
        // var li = document.createElement('li');
        // ul.appendChild(li);
        // var total = document.createElement('li');
        // total.textContent  ='Total: '+this.dailySales+' cookies';
        // li.appendChild(total);
        // // // li.textContent = hours[i] + ':' + Seattle.dailySales[i]; +'cookies';
        // // // var salesInfo = `${hours[i]}:(Seattle.dailySales) cookies`;
    
Seattle.generatHourlySales();
Seattle.render();


var Tokyo = {
    'min': 3,
    'max': 24,
    'Avg': 1.2,
    hourlySales: [],
    dailySales:0 ,
    location: 'Tokyo',

    getRandomCustomerCount: function () {
        var range = this.max - this.min;
        var randomcount = Math.random() * range + this.min;
        return Math.ceil(randomcount);

    },
    generatHourlySales: function () {
        for (var i = 0; i < hours.length; i++) {
            var cookiesSoldThisHours = Math.ceil(this.getRandomCustomerCount() * this.Avg);
            this.hourlySales.push(cookiesSoldThisHours);
            this.dailySales += cookiesSoldThisHours;
        }
    },
    render: function () {
        var container = document.getElementById('content-area');
        var h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = 'Tokyo';
        var ul = document.createElement('ul');
        container.appendChild(ul);

        var li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = '6am:16 cookies';
        for (var i = 0; i < hours.length; i++) {
            var li = document.createElement('li');
            ul.appendChild(li);
            // li.textContent='6am:16 cookies';
            li.textContent = hours[i] + ':' + Tokyo.hourlySales[i]; +'cookies';

        }
var total = document.createElement('li');
      total.textContent  ='Total: '+this.dailySales+' cookies';
      li.appendChild(total);
       
    }}
       
Tokyo.generatHourlySales();
Tokyo.render();


var Dubai = {
    'min': 11,
    'max': 38,
    'Avg': 3.7,
    hourlySales: [],
    dailySales:0 ,
    location: 'Dubai',

    getRandomCustomerCount: function () {
        var range = this.max - this.min;
        var randomcount = Math.random() * range + this.min;
        return Math.ceil(randomcount);

    },
    generatHourlySales: function () {
        for (var i = 0; i < hours.length; i++) {
            var cookiesSoldThisHours = Math.ceil(this.getRandomCustomerCount() * this.Avg);
            this.hourlySales.push(cookiesSoldThisHours);
            this.dailySales += cookiesSoldThisHours;
        }
    },
    render: function () {
        var container = document.getElementById('content-area');
        var h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = 'Dubai';
        var ul = document.createElement('ul');
        container.appendChild(ul);

        var li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = '6am:16 cookies';
        for (var i = 0; i < hours.length; i++) {
            var li = document.createElement('li');
            ul.appendChild(li);
            // li.textContent='6am:16 cookies';
            li.textContent = hours[i] + ':' + Dubai.hourlySales[i]; +'cookies';

        }
var total = document.createElement('li');
      total.textContent  ='Total: '+this.dailySales+' cookies';
      li.appendChild(total);
       
    }}
       
Dubai.generatHourlySales();
Dubai.render();


var Paris = {
    'min': 20,
    'max': 38,
    'Avg': 2.3,
    hourlySales: [],
    dailySales:0 ,
    location: 'Paris',

    getRandomCustomerCount: function () {
        var range = this.max - this.min;
        var randomcount = Math.random() * range + this.min;
        return Math.ceil(randomcount);

    },
    generatHourlySales: function () {
        for (var i = 0; i < hours.length; i++) {
            var cookiesSoldThisHours = Math.ceil(this.getRandomCustomerCount() * this.Avg);
            this.hourlySales.push(cookiesSoldThisHours);
            this.dailySales += cookiesSoldThisHours;
        }
    },
    render: function () {
        var container = document.getElementById('content-area');
        var h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = 'Paris';
        var ul = document.createElement('ul');
        container.appendChild(ul);

        var li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = '6am:16 cookies';
        for (var i = 0; i < hours.length; i++) {
            var li = document.createElement('li');
            ul.appendChild(li);
            // li.textContent='6am:16 cookies';
            li.textContent = hours[i] + ':' + Paris.hourlySales[i]; +'cookies';

        }
var total = document.createElement('li');
      total.textContent  ='Total: '+this.dailySales+' cookies';
      li.appendChild(total);
       
    }}
       
Paris.generatHourlySales();
Paris.render();
        

var Lima = {
    'min': 2,
    'max': 16,
    'Avg': 4.6,
    hourlySales: [],
    dailySales:0 ,
    location: 'Lima',

    getRandomCustomerCount: function () {
        var range = this.max - this.min;
        var randomcount = Math.random() * range + this.min;
        return Math.ceil(randomcount);

    },
    generatHourlySales: function () {
        for (var i = 0; i < hours.length; i++) {
            var cookiesSoldThisHours = Math.ceil(this.getRandomCustomerCount() * this.Avg);
            this.hourlySales.push(cookiesSoldThisHours);
            this.dailySales += cookiesSoldThisHours;
        }
    },
    render: function () {
        var container = document.getElementById('content-area');
        var h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = 'Lima';
        var ul = document.createElement('ul');
        container.appendChild(ul);

        var li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = '6am:16 cookies';
        for (var i = 0; i < hours.length; i++) {
            var li = document.createElement('li');
            ul.appendChild(li);
            // li.textContent='6am:16 cookies';
            li.textContent = hours[i] + ':' + Lima.hourlySales[i]; +'cookies';

        }
var total = document.createElement('li');
      total.textContent  ='Total: '+this.dailySales+' cookies';
      li.appendChild(total);
       
    }}
       
Lima.generatHourlySales();
Lima.render();
        