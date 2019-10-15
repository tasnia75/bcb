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

  function createtable()
  {
      var table=document.getElementById("table_body");

      var ref=firebase.database().ref("messages");

      ref.on("value",data=>{
          var alldata=data.val();
          var keys=Object.keys(alldata);
          for(var i=0;i<keys.length;i++)
          {
              var index=keys[i];

              var row=table.insertRow();
              var cell1=row.insertCell(0);
              var cell2=row.insertCell(1);
			        var cell3=row.insertCell(2);



              cell1.innerHTML=alldata[index].name;

			  cell2.innerHTML=alldata[index].email;

              cell3.innerHTML=alldata[index].message;
          }


      },errorfunc);
  }

  function errorfunc(err)
  {
    console.log("Error!! id: ");
    console.log(err);
  }

  createtable();
