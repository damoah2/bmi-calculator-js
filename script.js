function bmiCalulator() {
  //Get the current value from the field
  let = feet = document.getElementById("feet").value;
  // Converting feet to inches
  feet *= 12;
  let = pounds = document.getElementById("pounds").value;

  //bmi calculation

  let bmi = (pounds / (feet * feet)) * 703;
  
  //console.log(bmi);

  // show result in paragraph element
  document.getElementById("result").innerHTML += Math.round(bmi * 100) / 100.0 + "<br/>";
}

function clearResult() {
  // clear the results in the paragraph element
  // Using jQuery to clear the results
  $( "#result" ).load(window.location.href + " #result" );
}
