
'use strict';
var hours = [ ' 6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeLocations = [];//eslint-disable-line
var salesTable = document.getElementById('salmonTable');
function HeaderRow() { //eslint-disable-line
var tableRow = document.createElement('tr');
for (var i = 0; i <= hours.length; i++) {
var thElement = document.createElement('th');
thElement.textContent = hours[i-1];
tableRow.appendChild(thElement);
}
thElement = document.createElement('th');
thElement.textContent = '          Total';
tableRow.appendChild(thElement);
//  console.log(salesTable);
salesTable.appendChild(tableRow);
};
function Store(name, minCust, maximumCust, avarageCookies) {
this.name = name;
this.minCust = minCust;
this.maxCust = maximumCust;
this.avgCookie = avarageCookies;
this.avgCustArray = [];
this.cookiesEachHourArray = [];
this.totalCookies = 0;
storeLocations.push(this);
}
Store.prototype.numCustHourly = function() {
for (var i = 0; i <= hours.length; i++) {
var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
this.avgCustArray.push(singleHourCust);
}
};
Store.prototype.cookiesPerCustomer = function() {
this.numCustHourly();
for (var i = 0; i < hours.length; i++) {
var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
this.cookiesEachHourArray.push(singleHourCookies);
this.totalCookies += singleHourCookies;
}
};
Store.prototype.render = function() {
this.cookiesPerCustomer();
var trRowName = document.createElement('tr');
var tdStore = document.createElement('td');
tdStore.textContent = this.name;
trRowName.appendChild(tdStore);
for (var i = 0; i < this.cookiesEachHourArray.length; i++) {
var tdCell = document.createElement('td');
tdCell.textContent = this.cookiesEachHourArray[i];
trRowName.appendChild(tdCell);
};
var tdTotal = document.createElement('td');
tdTotal.textContent = this.totalCookies;
trRowName.appendChild(tdTotal);
salesTable.appendChild(trRowName);
};
var Seattle = new Store('Seattle', 2, 16, 4.6);
var Tokyo = new Store('Tokyo', 3, 24, 1.2);
var Dubai = new Store('Dubai' , 11, 38, 3.7);
var Paris = new Store('Paris', 20, 38, 2.3);
var Lima = new Store('Lima', 23, 65, 6.3);
function renderAllStores() {
for (var i = 0; i < storeLocations.length; i++) {
storeLocations[i].render();
}
};
function makeFooterRow() { //eslint-disable-line
var tableRow = document.createElement('tr');
tableRow.textContent = 'Totals';
salesTable.appendChild(tableRow);
var bigStupidTotal = 0;
for (var i = 0; i < hours.length; i++) {
var hourlyTotal = 0;
for (var j = 0; j < storeLocations.length; j++) {
  hourlyTotal = hourlyTotal + storeLocations[j].cookiesEachHourArray[i];
  bigStupidTotal += storeLocations[j].cookiesEachHourArray[i];
  console.log(bigStupidTotal);
}
var tdElement = document.createElement('td');
tdElement.textContent = hourlyTotal;
tableRow.appendChild(tdElement);
}
tdElement = document.createElement('td');
tdElement.textContent = bigStupidTotal;
tableRow.appendChild(tdElement);
};
HeaderRow();
renderAllStores();
makeFooterRow();
// 'use strict';
// var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
// function shops(location, mincustomer, maxcustomer, average) {
//     this.location = location;
//     this.mincustomer = mincustomer;
//     this.maxcustomer = maxcustomer;
//     this.average = average;
//     this.dailySales = 0;
//     this.hourlySales = [];
//     this.random();
//     this.generateHourlySale();
// }
// shops.prototype.random = function () {
//     var range = this.maxcustomer - this.mincustomer;
//     var randomcount = Math.random() * range + this.mincustomer;
//     return Math.ceil(randomcount);
// }
// shops.prototype.generateHourlySale = function () {
//     for (var i = 0; i < hours.length; i++) {
//         var cookiesSoldThisHours = Math.ceil(this.random() * this.average);
//         this.hourlySales.push(cookiesSoldThisHours);
//         this.dailySales += cookiesSoldThisHours;
//     }
// }
// var Seattle = new shops('Seattle', 23, 65, 6.3)
// var Tokyo = new shops('Tokyo', 3, 24, 1.2)
// var Dubai = new shops('Dubai', 11, 38, 3.7)
// var Paris = new shops('Paris', 20, 38, 2.3)
// var Lima = new shops('Lima', 2, 16, 4.6)
// console.log(Seattle, 'Seattle');
// console.log(Tokyo, 'Tokyo');
// console.log(Dubai, 'Dubai');
// console.log(Paris, 'Paris');
// console.log(Lima, 'Lima');
// //
// var shopeslist = [Seattel, Tokyo, Dubai, Paris, Lima];
// //table
// var container = document.getElementById('shopes-for-cookies');
// var table = document.createElement('table');
// container.appendChild(table);
// //header roww
// var headerRaw = document.createElement('tr');
// taple.appendChild(headRaw);
// var th = document.createElement('th');
// th.textContent='x';
// for (var i = 0; i < hours.length; i++) {
//     var th = document.createElement('th');
//     headraw.appendChild(th);
//     th.textContent = hours[i];
// }
// // data raw 

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
