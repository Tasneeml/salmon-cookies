// // 'use strict';
// // var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
// // // var Seattle={
// // //     location :'Seattle',
// // //     minimum: 23,
// // //     maximum: 65,
// // //     average: 6.3,
// // //     averagecustomer: function(){
// // //         var range = this.maximum-this.minimum
// // //          var rand= Math.random()*range+this.minimum;
// // //          return Math.ceil(rand);    
// // //     }

// // // };
// // // var Tokyo={
// // //         location :'Tokyo',
// // //         minimum: 3,
// // //         maximum: 24,
// // //         average: 1.2,
// // //         averagecustomer: function(){
// // //             var range = this.maximum-this.minimum
// // //              var rand= Math.random()*range+this.minimum;
// // //              return Math.ceil(rand);

// // //         } 
// // //     }; 
// // //     var Dubai={ط
// // //             location :'Dubai',
// // //             minimum: 11,
// // //             maximum: 38,
// // //             average: 3.7,
// // //             averagecustomer: function(){
// // //                 var range = this.maximum-this.minimum
// // //                  var rand= Math.random()*range+this.minimum;
// // //                  return Math.ceil(rand);
// // //                 }
// // //             };


// // //             var Paris={
// // //                 location :'Paris',
// // //                 minimum: 20,
// // //                 maximum: 38,
// // //                 average: 2.3,
// // //                 averagecustomer: function(){
// // //                     var range = this.maximum-this.minimum
// // //                      var rand= Math.random()*range+this.minimum;
// // //                      return Math.ceil(rand);
// // //                 }
// // //                 } ;
// // //                 var Lima={
// // //                     location :'Lima',
// // //                     minimum: 2,
// // //                     maximum: 16,
// // //                     average: 4.6,
// // //                     averagecustomer: function(){
// // //                         var range = this.maximum-this.minimum
// // //                          var rand= Math.random()*range+this.minimum;
// // //                          return Math.ceil(rand);
// // //                     }
// // //                     } ;

// // // // for (var i=0; i<hours.length;i++) {
// // // // var cookiesPerHour = Math.ceil(this.random* this.avgCookies);
// // // // console.log(cookiesPerHour);

// // // // this.random.push(average[i].cookiesPerHour);
// // // // this.totalCookiesPreDay+=cookiesPerHour;
// // // // }
// // // var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
// // // var object = ['Seattel' ,'Tokyo' , 'Dubai' ,'Paris' , 'Lima' ];
// // // var cookiesNumber=[];

// // // for (var j=0; j<object.length ;j++){

// // //     for (var i=0; i< hours.length ;i++){
// // //         cookiesNumber[i]=Math.ceil(object[i].averagecustomer()*object[i].averagecustomer);
// // //         object[i].cookiesNumberArr=cookiesNumber[i];
// // //     }
// // // }
// // // console.log(cookiesNumber);
// // // console.log(object[0].averagecustomer());

// // var Seattle = {
// //     'min': 23,
// //     'max': 65,
// //     'Avg': 6.3,
// //     hourlySales: [],
// //     dailySales:0 ,
// //     location: 'Seattle',

// //     getRandomCustomerCount: function () {
// //         var range = this.max - this.min;
// //         var randomcount = Math.random() * range + this.min;
// //         return Math.ceil(randomcount);

// //     },
// //     generatHourlySales: function () {
// //         for (var i = 0; i < hours.length; i++) {
// //             var cookiesSoldThisHours = Math.ceil(this.getRandomCustomerCount() * this.Avg);
// //             this.hourlySales.push(cookiesSoldThisHours);
// //             this.dailySales += cookiesSoldThisHours;
// //         }
// //     },
// //     render: function () {
// //         var container = document.getElementById('content-area');
// //         var h2 = document.createElement('h2');
// //         container.appendChild(h2);
// //         h2.textContent = 'Seattle';
// //         var ul = document.createElement('ul');
// //         container.appendChild(ul);

// //         var li = document.createElement('li');
// //         ul.appendChild(li);
// //         li.textContent = '6am:16 cookies';
// //         for (var i = 0; i < hours.length; i++) {
// //             var li = document.createElement('li');
// //             ul.appendChild(li);
// //             // li.textContent='6am:16 cookies';
// //             li.textContent = hours[i] + ':' + Seattle.hourlySales[i]; +'cookies';

// //         }
// // var total = document.createElement('li');
// //       total.textContent  ='Total: '+this.dailySales+' cookies';
// //       li.appendChild(total);
       
// //     }}
// //         // var li = document.createElement('li');
// //         // ul.appendChild(li);
// //         // var total = document.createElement('li');
// //         // total.textContent  ='Total: '+this.dailySales+' cookies';
// //         // li.appendChild(total);
// //         // // // li.textContent = hours[i] + ':' + Seattle.dailySales[i]; +'cookies';
// //         // // // var salesInfo = `${hours[i]}:(Seattle.dailySales) cookies`;
    
// // Seattle.generatHourlySales();
// // Seattle.render();


// // var Tokyo = {
// //     'min': 3,
// //     'max': 24,
// //     'Avg': 1.2,
// //     hourlySales: [],
// //     dailySales:0 ,
// //     location: 'Tokyo',

// //     getRandomCustomerCount: function () {
// //         var range = this.max - this.min;
// //         var randomcount = Math.random() * range + this.min;
// //         return Math.ceil(randomcount);

// //     },
// //     generatHourlySales: function () {
// //         for (var i = 0; i < hours.length; i++) {
// //             var cookiesSoldThisHours = Math.ceil(this.getRandomCustomerCount() * this.Avg);
// //             this.hourlySales.push(cookiesSoldThisHours);
// //             this.dailySales += cookiesSoldThisHours;
// //         }
// //     },
// //     render: function () {
// //         var container = document.getElementById('content-area');
// //         var h2 = document.createElement('h2');
// //         container.appendChild(h2);
// //         h2.textContent = 'Tokyo';
// //         var ul = document.createElement('ul');
// //         container.appendChild(ul);

// //         var li = document.createElement('li');
// //         ul.appendChild(li);
// //         li.textContent = '6am:16 cookies';
// //         for (var i = 0; i < hours.length; i++) {
// //             var li = document.createElement('li');
// //             ul.appendChild(li);
// //             // li.textContent='6am:16 cookies';
// //             li.textContent = hours[i] + ':' + Tokyo.hourlySales[i]; +'cookies';

// //         }
// // var total = document.createElement('li');
// //       total.textContent  ='Total: '+this.dailySales+' cookies';
// //       li.appendChild(total);
       
// //     }}
       
// // Tokyo.generatHourlySales();
// // Tokyo.render();


// // var Dubai = {
// //     'min': 11,
// //     'max': 38,
// //     'Avg': 3.7,
// //     hourlySales: [],
// //     dailySales:0 ,
// //     location: 'Dubai',

// //     getRandomCustomerCount: function () {
// //         var range = this.max - this.min;
// //         var randomcount = Math.random() * range + this.min;
// //         return Math.ceil(randomcount);

// //     },
// //     generatHourlySales: function () {
// //         for (var i = 0; i < hours.length; i++) {
// //             var cookiesSoldThisHours = Math.ceil(this.getRandomCustomerCount() * this.Avg);
// //             this.hourlySales.push(cookiesSoldThisHours);
// //             this.dailySales += cookiesSoldThisHours;
// //         }
// //     },
// //     render: function () {
// //         var container = document.getElementById('content-area');
// //         var h2 = document.createElement('h2');
// //         container.appendChild(h2);
// //         h2.textContent = 'Dubai';
// //         var ul = document.createElement('ul');
// //         container.appendChild(ul);

// //         var li = document.createElement('li');
// //         ul.appendChild(li);
// //         li.textContent = '6am:16 cookies';
// //         for (var i = 0; i < hours.length; i++) {
// //             var li = document.createElement('li');
// //             ul.appendChild(li);
// //             // li.textContent='6am:16 cookies';
// //             li.textContent = hours[i] + ':' + Dubai.hourlySales[i]; +'cookies';

// //         }
// // var total = document.createElement('li');
// //       total.textContent  ='Total: '+this.dailySales+' cookies';
// //       li.appendChild(total);
       
// //     }}
       
// // Dubai.generatHourlySales();
// // Dubai.render();


// // var Paris = {
// //     'min': 20,
// //     'max': 38,
// //     'Avg': 2.3,
// //     hourlySales: [],
// //     dailySales:0 ,
// //     location: 'Paris',

// //     getRandomCustomerCount: function () {
// //         var range = this.max - this.min;
// //         var randomcount = Math.random() * range + this.min;
// //         return Math.ceil(randomcount);

// //     },
// //     generatHourlySales: function () {
// //         for (var i = 0; i < hours.length; i++) {
// //             var cookiesSoldThisHours = Math.ceil(this.getRandomCustomerCount() * this.Avg);
// //             this.hourlySales.push(cookiesSoldThisHours);
// //             this.dailySales += cookiesSoldThisHours;
// //         }
// //     },
// //     render: function () {
// //         var container = document.getElementById('content-area');
// //         var h2 = document.createElement('h2');
// //         container.appendChild(h2);
// //         h2.textContent = 'Paris';
// //         var ul = document.createElement('ul');
// //         container.appendChild(ul);

// //         var li = document.createElement('li');
// //         ul.appendChild(li);
// //         li.textContent = '6am:16 cookies';
// //         for (var i = 0; i < hours.length; i++) {
// //             var li = document.createElement('li');
// //             ul.appendChild(li);
// //             // li.textContent='6am:16 cookies';
// //             li.textContent = hours[i] + ':' + Paris.hourlySales[i]; +'cookies';

// //         }
// // var total = document.createElement('li');
// //       total.textContent  ='Total: '+this.dailySales+' cookies';
// //       li.appendChild(total);
       
// //     }}
       
// // Paris.generatHourlySales();
// // Paris.render();
        

// // var Lima = {
// //     'min': 2,
// //     'max': 16,
// //     'Avg': 4.6,
// //     hourlySales: [],
// //     dailySales:0 ,
// //     location: 'Lima',

// //     getRandomCustomerCount: function () {
// //         var range = this.max - this.min;
// //         var randomcount = Math.random() * range + this.min;
// //         return Math.ceil(randomcount);

// //     },
// //     generatHourlySales: function () {
// //         for (var i = 0; i < hours.length; i++) {
// //             var cookiesSoldThisHours = Math.ceil(this.getRandomCustomerCount() * this.Avg);
// //             this.hourlySales.push(cookiesSoldThisHours);
// //             this.dailySales += cookiesSoldThisHours;
// //         }
// //     },
// //     render: function () {
// //         var container = document.getElementById('content-area');
// //         var h2 = document.createElement('h2');
// //         container.appendChild(h2);
// //         h2.textContent = 'Lima';
// //         var ul = document.createElement('ul');
// //         container.appendChild(ul);

// //         var li = document.createElement('li');
// //         ul.appendChild(li);
// //         li.textContent = '6am:16 cookies';
// //         for (var i = 0; i < hours.length; i++) {
// //             var li = document.createElement('li');
// //             ul.appendChild(li);
// //             // li.textContent='6am:16 cookies';
// //             li.textContent = hours[i] + ':' + Lima.hourlySales[i]; +'cookies';

// //         }
// // var total = document.createElement('li');
// //       total.textContent  ='Total: '+this.dailySales+' cookies';
// //       li.appendChild(total);
       
// //     }}
       
// // Lima.generatHourlySales();
// // Lima.render();

// 'use strict';
// var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
// var locations = [];
// var salmonTable = document.getElementById('salmonTable');
// var salesInput = document.getElementById('salesInput');
// function Store(name, Min, Max, Avg) {
//   this.name = name;
//   this.Min = Min;
//   this.Max = Max;
//   this.Avg = Avg;
//   this.averageCustomersPerHour = [];
//   this.averagePerHour = [];
//   this.totalPerDay = 0;
//   this.numOfCustomersPerHour();
//   this.cookiesPerCustomer();
//   locations.push(this);
// }
// Store.prototype.render = function() {
//   var tr = document.createElement('tr');
//   var td = document.createElement('td');
//   td.textContent = this.name;
//   tr.appendChild(td);
//   for (var i = 0; i < this.averagePerHour.length; i++) {
//     var tdCell = document.createElement('td');
//     tdCell.textContent = this.averagePerHour[i];
//     tr.appendChild(tdCell);
//   };
//   var tdTotal = document.createElement('td');
//   tdTotal.textContent = this.totalPerDay;
//   tr.appendChild(tdTotal);
//   salmonTable.appendChild(tr);
// };
// Store.prototype.numOfCustomersPerHour = function() {
//   for (var i = 0; i < hours.length; i++) {
//     var singleHourCustomers = Math.floor(Math.random() * (this.Max - this.Min + 1)) + this.Min;
//     this.averageCustomersPerHour.push(singleHourCustomers);
//   }
// };
// Store.prototype.cookiesPerCustomer = function() {
//   for (var i = 0; i < hours.length; i++) {
//     var singleHourCookies = Math.ceil(this.averageCustomersPerHour[i] * this.Avg);
//     this.averagePerHour.push(singleHourCookies);
//     this.totalPerDay += singleHourCookies;
//   }
// }; 
// function makeHeaderRow() { 
//   var tableRow = document.createElement('tr');
//   var th = document.createElement('th');
//   th.textContent = null;
//   salmonTable.appendChild(tableRow);
//   tableRow.appendChild(th);
//   for (var i = 0; i < hours.length; i++) {
//     th = document.createElement('th');
//     th.textContent = hours[i];
//     tableRow.appendChild(th);
    
//   }
//   th = document.createElement('th');
//   th.textContent = 'Location Total';
//   tableRow.appendChild(th);
//   console.log(salmonTable);
//   salmonTable.appendChild(tableRow);
// };
// function renderAllStores() {
//   for (var i = 0; i < locations.length; i++) {
//     locations[i].render();
//   }
// };
// function makeFooterRow() { 
//   var row1 = document.createElement('tr');
//   row1.textContent = 'Totals';
//   salmonTable.appendChild(row1);
//   var bigStupidTotal = 0;
//   for (var i = 0; i < hours.length; i++) {
//     var hourlyTotal = 0;
//     for (var j = 0; j < locations.length; j++) {
//       hourlyTotal = hourlyTotal + locations[j].averageCookiesPerHour[i];
//       bigStupidTotal += locations[j].averageCookiesPerHour[i];
//     }
//     var td = document.createElement('td');
//     td.textContent = hourlyTotal;
//     row1.appendChild(td);
//   }
//   td = document.createElement('td');
//   td.textContent = bigStupidTotal;
//   row1.appendChild(td);
// }
// new Store('Settle', 23, 65, 6.3);
// new Store('Tokyo', 11, 38, 3.7); 
// new Store('Dubai', 3, 24, 1.2); 
// new Store('Paris', 20, 38, 2.3); 
// new Store('Lima', 2, 16, 4.6); 
// function dataInput(event) {
//   event.preventDefault();
//   console.log('Submit button was clicked');
//   if (!event.target.name.value || !event.target.Min.value || !event.target.Max.value || !event.target.Avg.value) {
//     return alert('Fields cannot be empty!');
//   }
//   var name = event.target.name.value;
//   var Min = parseInt(event.target.Min.value);
//   var Max = parseInt(event.target.Max.value);
//   var Avg = parseFloat(event.target.Avg.value);
//     salmonTable.textContent = null;
//   var storeExist = doesStoreExist(locations, name);
//   var index;
//   function doesStoreExist(x,y) {
//     for (var i = 0; i < x.length; i++) {
//       if (x[i].name === y) {
//         index = i;
//         return true;
//       }
//     }
//     return false;
//   }
//   doesStoreExist(locations, name);
//   console.log(doesStoreExist(locations, name));
//   if (storeExist === true) {
//     console.log('did find name');
//     locations[index].Min = parseInt(Min);
//     locations[index].Max = parseInt(Max);
//     locations[index].Avg = parseFloat(Avg);
//     locations[index].averageCustomersPerHour = [];
//     locations[index].averageCookiesPerHour = [];
//     locations[index].totalCookiesPerDay = 0;
//     locations[index].numOfCustomersPerHour();
//     locations[index].cookiesPerCustomer();
//   }
//   if (storeExist === false) {
//     var newStore = new Store(name, Min, Max, Avg);
//   }
//   makeHeaderRow();
//   renderAllStores();
//   makeFooterRow();
// }
// makeHeaderRow();
// renderAllStores();
// makeFooterRow();
// salesInput.addEventListener('submit', dataInput);




'use strict';
var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
var locations = [];

// var container = document.getElementById('content-area');

var salmonTable = document.getElementById('salmonTable');
console.log("salmonTable",salmonTable);
// container.appendChild(salmonTable);
var salesInput = document.getElementById('salesInput');
function Store(name, Min, Max, Avg) {
  this.name = name;
  this.Min = Min;
  this.Max = Max;
  this.Avg = Avg;
  this.averageCustomersPerHour = [];
  this.averagePerHour = [];
  this.totalPerDay = 0;
  this.numOfCustomersPerHour();
  this.cookiesPerCustomer();
  locations.push(this);
}
Store.prototype.render = function() {
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);
  for (var i = 0; i < this.averagePerHour.length; i++) {
    var tdCell = document.createElement('td');
    tdCell.textContent = this.averagePerHour[i];
    tr.appendChild(tdCell);
  };
  var tdTotal = document.createElement('td');
  tdTotal.textContent = this.totalPerDay;
  tr.appendChild(tdTotal);
  salmonTable.appendChild(tr);
};
Store.prototype.numOfCustomersPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var singleHourCustomers = Math.floor(Math.random() * (this.Max - this.Min + 1)) + this.Min;
    this.averageCustomersPerHour.push(singleHourCustomers);
  }
};
Store.prototype.cookiesPerCustomer = function() {
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.averageCustomersPerHour[i] * this.Avg);
    this.averagePerHour.push(singleHourCookies);
    this.totalPerDay += singleHourCookies;
  }
}; 
function makeHeaderRow() { 
  var tableRow = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = null;
  //Uncaught TypeError: Cannot read property 'appendChild' of null
  salmonTable.appendChild(tableRow);
  tableRow.appendChild(th);
  for (var i = 0; i < hours.length; i++) {
    th = document.createElement('th');
    th.textContent = hours[i];
    tableRow.appendChild(th);
    
  }
  th = document.createElement('th');
  th.textContent = 'Location Total';
  tableRow.appendChild(th);
  console.log(salmonTable);
  salmonTable.appendChild(tableRow);
};
function renderAllStores() {
  for (var i = 0; i < locations.length; i++) {
    locations[i].render();
  }
};
function makeFooterRow() { 
  var row1 = document.createElement('tr');
  row1.textContent = 'Totals';
  salmonTable.appendChild(row1);
  var bigStupidTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    var hourlyTotal = 0;
    for (var j = 0; j < locations.length; j++) {
      // console.log('locations',locations[j].averagePerHour);
      hourlyTotal = hourlyTotal + locations[j].averagePerHour[i];
      bigStupidTotal +=  hourlyTotal;                   /*locations[j].averagePerHour[j];*/
    }
    var td = document.createElement('td');
    td.textContent = hourlyTotal;
    row1.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = bigStupidTotal;
  row1.appendChild(td);
}
new Store('Settle', 23, 65, 6.3);
new Store('Tokyo', 11, 38, 3.7); 
new Store('Dubai', 3, 24, 1.2); 
new Store('Paris', 20, 38, 2.3); 
new Store('Lima', 2, 16, 4.6); 
function dataInput(event) {
  event.preventDefault();
  console.log('Submit button was clicked');
  if (!event.target.name.value || !event.target.Min.value || !event.target.Max.value || !event.target.Avg.value) {
    return alert('Fields cannot be empty!');
  }
  var name = event.target.name.value;
  var Min = parseInt(event.target.Min.value);
  var Max = parseInt(event.target.Max.value);
  var Avg = parseFloat(event.target.Avg.value);
    salmonTable.textContent = null;
  var storeExist = doesStoreExist(locations, name);
  var index;
  function doesStoreExist(x,y) {
    for (var i = 0; i < x.length; i++) {
      if (x[i].name === y) {
        index = i;
        return true;
      }
    }
    return false;
  }
  doesStoreExist(locations, name);
  console.log(doesStoreExist(locations, name));
  if (storeExist === true) {
    console.log('did find name');
    locations[index].Min = parseInt(Min);
    locations[index].Max = parseInt(Max);
    locations[index].Avg = parseFloat(Avg);
    locations[index].averageCustomersPerHour = [];
    locations[index].averagePerHour = [];
    locations[index].totalPerDay = 0;
    locations[index].numOfCustomersPerHour();
    locations[index].cookiesPerCustomer();
  }
  if (storeExist === false) {
    var newStore = new Store(name, Min, Max, Avg);
  }
  makeHeaderRow();
  renderAllStores();
  makeFooterRow();
}
makeHeaderRow();
renderAllStores();
makeFooterRow();
salesInput.addEventListener('submit', dataInput);



