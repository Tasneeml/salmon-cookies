
'use strict';
var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
var locations = [];
var salmonTable = document.getElementById('salmonTable');
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
      hourlyTotal = hourlyTotal + locations[j].averageCookiesPerHour[i];
      bigStupidTotal += locations[j].averageCookiesPerHour[i];
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
    locations[index].averageCookiesPerHour = [];
    locations[index].totalCookiesPerDay = 0;
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



