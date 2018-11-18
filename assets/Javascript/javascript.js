// ----------initialize Firebase-----------
var config = {
  apiKey: "AIzaSyA_Ukv56F7t7AkueDDLHXRXfzq3OXfsP6s",
  authDomain: "trainscheduler-d5a52.firebaseapp.com",
  databaseURL: "https://trainscheduler-d5a52.firebaseio.com",
  storageBucket: "trainscheduler-d5a52.appspot.com",
  messagingSenderId: "456247611521"
};
firebase.initializeApp(config);
var database = firebase.database();

$("#add-train").on("click", function(event) {
  // prevent form trying to submit/refresh the page
  event.preventDefault();
  // Capture User Inputs and store them into variables
  var name = $("#name-input")
    .val()
    .trim();

  var destination = $("#text-input")
    .val()
    .trim();
  var time = $("#time-input")
    .val()
    .trim();
  var minutes = $("#minutes-input")
    .val()
    .trim();
  // Console log each of the user inputs to confirm we are receiving them
  console.log(name);
  console.log(destination);
  console.log(time);
  console.log(minutes);

  //$("#name-display").text(name);
  //$("#text-display").text(destination);
  //$("#time-display").text(time);
  //$("#minutes-display").text(minutes);

  // Target Tbody
  var tableBody = $("#newTrains");

  // Create a new row
  var newRow = $("<tr>");

  // Create a new column for each data
  var nameCol = $("<td>").text(name);
  var destCol = $("<td>").text(destination);
  var timeCol = $("<td>").text(time);
  var minCol = $("<td>").text(minutes);

  // Append or AddChild
  newRow.append(nameCol, destCol, timeCol, minCol);
  tableBody.append(newRow);

  // return false;
});
// database.ref().on("child_added", function(childSnaphot, prevChildKey) {
//   var tname = childSnaphot.val().name;
//   var tdestination = childSnaphot.val().destination;
//   var ttime = childSnaphot.val().time;
//   var tminutes = childSnaphot.val().minutes;

//   var differenceInTime = moment().diff(moment.unix(tminutes), "minutes");
//   var tRemainder = moment().diff(moment.unix(tminutes), "minutes") % ttime;
//   var ttiming = ttime - tRemainder;

//   var tArrival = moment()
//     .add(ttiming, "m")
//     .format("hh:mm A");

//   $("#newTrains > tbody").append(
//     "<tr><td>" +
//       tname +
//       "</td><td>" +
//       tdestination +
//       "</td><td>" +
//       ttime +
//       " min</td><td>" +
//       tArrival +
//       "</td><td>" +
//       ttiming +
//       "</td></tr>"
//   );
// });

//   //ensures that each input has a value
//   if (name == "") {
//     alert("Enter a train name.");
//     return false;
//   }
//   if (destination == "") {
//     alert("Enter a destination.");
//     return false;
//   }
//   if (time == "") {
//     alert("Enter a first train time.");
//     return false;
//   }
//   if (minutes == "") {
//     alert("Enter a frequency");
//     return false;
//   }

//   // Output all of the new information into the relevant HTML sections
//   $("#name-display").text(name);
//   $("#text-display").text(destination);
//   $("#time-display").text(time);
//   $("#minutes-display").text(minutes);
// });

// var clickCounter = 0;
// $("#add-train").on("click", function() {
//   clickCounter++;
//   database.ref().set({
//     clickCount: clickCounter
//   });
// });
// var currentTime = moment();
// database.ref().on("child_added", function(childSnap) {
//   var name = childSnap.val().destination;
//   var firstTrain = childSnap.val().firstTrain;
//   var frequency = childSnap.val().frequency;
//   var min = childSnap.val().min;
//   var next = childSnap.val().next;
//   $("#trainTable>tbody").append(
//     "<tr><td>" +
//       name +
//       "</td><td>" +
//       destination +
//       "</td><td>" +
//       frequency +
//       "</td><td>" +
//       next +
//       "</td><td>" +
//       min +
//       "</td></tr>"
//   );
// });
// database.ref().on("value", function(snapshot) {});

// // math calculations
// //subtracts the first train time back a year to ensure it's before current time
// var timeAdded = moment(time, "hh:mm").substract("1,years");
// // the time difference between current time and the first train
// var difference = currentTime.diff(moment(timeAdded), "minutes");
// var remainder = difference % minutes;
// var minBeforeTrain = minutes - remainder;
// var nextTrain = moment()
//   .add(minBeforeTrain, "minutes")
//   .format("hh:mm a");

// var newTrain = {
//   name: name,
//   destination: destination,
//   time: time,
//   frequency: minutes,
//   min: minBeforeTrain,
//   next: nextTrain
// };

// console.log(newTrain);
// database.ref().push(newTrain);

// $("#name-display").val("");
// $("#text-display").val("");
// $("#time-display").val("");
// $("#minutes-display").val("");

// return false;

const momenttd = document.getElementById("momenttd");
setInterval(() => {
  const now = moment();
  const humanReadable = now.format("MMMM Do YYYY, h:mm:ss a");
  console.log("humanReadable");
  momenttd.textContent = humanReadable;
}, 1000);
