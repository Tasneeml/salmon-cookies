'use strict';

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
    avrcustmer: function () {
        var range = this.max - this.min;
        var rand = Math.random() * range + this.min;
        return Math.ceil(rand);
    }
 };
 var Tokyo = {
    'min': 3,
    'max': 24,
    'Avg': 1.2,
    avrcustmer: function () {
        var range = this.max - this.min;
        var rand = Math.random() * range + this.min;
        return Math.ceil(rand);
    }
 };
 var Dubai = {
    'min': 11,
    'max': 38,
    'Avg': 3.7,
    avrcustmer: function () {
        var range = this.max - this.min;
        var rand = Math.random() * range + this.min;
        return Math.ceil(rand);
    }
 };
 var Paris = {
    'min': 20,
    'max': 38,
    'Avg': 3.7,
    avrcustmer: function () {
        var range = this.max - this.min;
        var rand = Math.random() * range + this.min;
        return Math.ceil(rand);
    }
 };
 var Lima = {
    'min': 2,
    'max': 16,
    'Avg': 4.6,
    avrcustmer: function () {
        var range = this.max - this.min;
        var rand = Math.random() * range + this.min;
        return Math.ceil(rand);
    }
 };
 // console.log("Seattle " + Seattle.avrcustmer());
 // console.log("Tokyo " +  Tokyo.avrcustmer());
 // console.log("Dubai " + Dubai.avrcustmer());
 // console.log("Paris " + Paris.avrcustmer());
 // console.log("Lima " + Lima.avrcustmer());
 var each = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];//14
 var obj = [Seattle, Tokyo, Dubai, Paris, Lima];
 var cookiesnum = [];
 for (var j = 0; j < obj.length; j++) {
    for (var i = 0; i < each.length; i++) {
        cookiesnum[i] = Math.ceil(obj[j].avrcustmer() * obj[j].Avg);
        //  obj[j].cookNumArr=cookiesnum[i];
    }
 }
 console.log(cookiesnum);
 console.log(obj[1].avrcustmer() * obj[1].Avg);
 