var firebaseConfig = {
    apiKey: "AIzaSyDbrXUSwgY1VBogFSUaoD_okpP68pz9OUw",
    authDomain: "perfume-house.firebaseapp.com",
    databaseURL: "https://perfume-house.firebaseio.com",
    projectId: "perfume-house",
    storageBucket: "",
    messagingSenderId: "831114083169",
    appId: "1:831114083169:web:7b016691d64f5747fea320"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  var messagesRef = firebase.database().ref('orders');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form function here
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = document.getElementById('name').value; //getInputVal('name');

  var email = getInputVal('email');

  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

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
    document.location.href="./showtable.html";
  },3050);


}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}
