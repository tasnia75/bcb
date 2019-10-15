var messagesRef = firebase.database().ref().child("messages");
	messagesRef.on("child_added", snap=> {
		///alert(snap.val());
		var name=snap.child("name").val();
		var email=snap.child("email").val();
		var phone=snap.child("phone").val();
		var company=snap.child("company").val();
		var message=snap.child("message").val();


		$("#table_body").append("<tr><td>" + name + "</td><td>" + email+"</td><td>"+phone+"</td><td>"+company+"</td><td>"+message+"</td></tr>");
	});
