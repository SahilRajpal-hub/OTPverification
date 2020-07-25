function getUiConfig() {
    return {
      'callbacks': {
        'signInSuccess': function(user, credential, redirectUrl) {
          handleSignedInUser(user);
          return false;
        }
      },
      'signInFlow': 'popup',
      'signInOptions': [
      
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          recaptchaParameters: {
            type: 'image', 
            size: 'invisible',
            badge: 'bottomleft' 
          },
            defaultCountry: 'IN', 
            defaultNationalNumber: '1234567890',
            loginHint: '+11234567890'
      }
          ],
      'tosUrl': 'https://www.google.com'
    };
  }


  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  
  var handleSignedInUser = function(user) {
    document.getElementById('user-signed-in').style.display = 'block';
    document.getElementById('user-signed-out').style.display = 'none';
    document.getElementById('phone').textContent = user.phoneNumber;
  };
  
  var handleSignedOutUser = function() {
    document.getElementById('user-signed-in').style.display = 'none';
    document.getElementById('user-signed-out').style.display = 'block';
    ui.start('#firebaseui-container', getUiConfig());
  };

 

  firebase.auth().onAuthStateChanged(function(user) {
    
    document.getElementById('loading').style.display = 'none';
    document.getElementById('loaded').style.display = 'block';
    user ? handleSignedInUser(user) : handleSignedOutUser();
    
  });
  
  var initApp = function() {
    document.getElementById('sign-out').addEventListener('click', function() {
      firebase.auth().signOut();
    });
    $("#btn-login").click(function(){
      var email = $("#email").val();
      var password = $("#password").val();

    //   if(email != "" && password != ""){
    //     var result = firebase.auth().signInWithEmailAndPassword(email, password);
    //     if(firebase.auth().currentUser){
    //       window.alert("Successful login");
    //     }
    //     result.catch(function(error){
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         window.alert("message : " + errorMessage);
    //     });
    // }else{
    //     window.alert("empty creditianiles");
    // }
  
      if(email != "" && password != ""){
        if(email === "test1@gmail.com" && password === "test1" ){
          window.location.href = "loginSuccessfull.html";
          window.alert("login successful");
        }else if(email === "test2@gmail.com" && password === "test2" ){
          window.location.href = "loginSuccessfull.html";
          window.alert("login successful");
        }else if(email === "test3@gmail.com" && password === "test3" ){
          window.location.href = "loginSuccessfull.html";
          window.alert("login successful");
        }else{
          window.alert("Email or password is not correct");
        }
    }else{
      window.alert("empty crediantials");
    }


  });
};
  
  window.addEventListener('load', initApp);