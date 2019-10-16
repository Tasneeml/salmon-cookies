var hours = [' 6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var location = [];//eslint-disable-line
var salesTable = document.getElementById("salmons-Table");
function HeaderRow() { //eslint-disable-line
    var tableRow = document.createElement('tr');
    for (var i = 0; i <= hours.length; i++) {
        var thElement = document.createElement('th');
        thElement.textContent = hours[i - 1];
        tableRow.appendChild(thElement);
    }
    thElement = document.createElement('th');
    thElement.textContent = '          Total';
    tableRow.appendChild(thElement);
    //  console.log(salesTable);
    salesTable.appendChild(tableRow);
};
function Store(name, miniCust, maxaCust, averag) {
    this.name = name;
    this.miniCust = miniCust;
    this.maxaCust = maxaCust;
    this.averag = averag;
    this.avgCustArray = [];
    this.cookiesEachHourArray = [];
    this.totalCookies = 0;
    location.push(this);
}
Store.prototype.numCustHourly = function () {
    for (var i = 0; i <= hours.length; i++) {
        var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
        this.avgCustArray.push(singleHourCust);
    }
};
Store.prototype.cookiesPerCustomer = function () {
    this.numCustHourly();
    for (var i = 0; i < hours.length; i++) {
        var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
        this.cookiesEachHourArray.push(singleHourCookies);
        this.totalCookies += singleHourCookies;
    }
};
Store.prototype.render = function () {
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
var Store = [];
Store.push(new Store('seattle', 23, 65, 6.3));
Store.push(new Store('tokyo', 3, 24, 1.2));
Store.push(new Store('dubai', 11, 38, 3.7));
Store.push(new Store('paris', 20, 38, 2.3));
Store.push(new Store('lima', 2, 16, 4.6));
function renderAllStores() {
    for (var i = 0; i < location.length; i++) {
        location[i].render();
    }
};
function makeFooterRow() { //eslint-disable-line
    var tableRow = document.createElement('tr');
    tableRow.textContent = 'Totals';
    salesTable.appendChild(tableRow);
    var bigStupidTotal = 0;
    for (var i = 0; i < hours.length; i++) {
        var hourlyTotal = 0;
        for (var j = 0; j < location.length; j++) {
            hourlyTotal = hourlyTotal + location[j].cookiesEachHourArray[i];
            bigStupidTotal += location[j].cookiesEachHourArray[i];
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


HeaderRow();

for (var i = 0; i < Store.length; i++) {
    var currentStore = Store[i];
    currentStore.renderRow(table);
}

createFooterRow();

function submitHandler(event) {
    event.preventDefault();

    var locationName = event.target.location.value;
    var min = parseInt(event.target.min.value);
    var max = parseInt(event.target.max.value);
    var avgSales = parseFloat(event.target.avgSales.value);

    var newStore = new Store(locationName, min, max, avgSales);

    Store.push(newStore);

    table.removeChild(footerRow);

    newStore.renderRow(table);
    createFooterRow();
}
var form = document.getElementById('addShopForm');
form.addEventListener('submit', submitHandler);
