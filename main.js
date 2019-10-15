// Firstly, the Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDtjTkbcXGHsghWZtk0F_2SztEZgT7rGoE",
  authDomain: "bcb1-5b8f1.firebaseapp.com",
  databaseURL: "https://bcb1-5b8f1.firebaseio.com",
  projectId: "bcb1-5b8f1",
  storageBucket: "bcb1-5b8f1.appspot.com",
  messagingSenderId: "271278922863",
  appId: "1:271278922863:web:d32440b04094b07e64019a",
  measurementId: "G-2K2CSK86PF"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form function here
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name'); //getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();

  //redirect to home page

  setTimeout(function(){
    document.location.href="./index.html";
  },3050);


}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
