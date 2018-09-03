 // Initialize Firebase
   var config = {
        apiKey: "AIzaSyDfBflmUlCb5r_4bRCQ4uk_Ygpqmy7YKak",
        authDomain: "sportoodiet.firebaseapp.com",
        databaseURL: "https://sportoodiet.firebaseio.com",
        projectId: "sportoodiet",
        storageBucket: "sportoodiet.appspot.com",
        messagingSenderId: "1081581417841"
      };
      firebase.initializeApp(config);

var auth = firebase.auth();



var formulaire = document.getElementById('authForm');

var alert = document.getElementById('alert-box');



var email = document.getElementById('email');

var pass = document.getElementById('password');



var SignIn = document.getElementById('inBtn');

var SignUp = document.getElementById('upBtn');

var logOut = document.getElementById('outBtn');





SignIn.addEventListener('click', e => {e.preventDefault();

    

    //alert.style.display = "none";

    var promise = auth.signInWithEmailAndPassword(email.value, pass.value);

    //onsole.log(e.message)

    promise.then(e => {

        window.location.href = "file:///C:/Users/SPX/Desktop/PROJECTDEMOday/acueil/accueil.html";

        //showAlert('you are in');

    }).catch(e => 
        console.log(e.message),
        showAlert(e.message + ' Sign up please '),
        formulaire.reset());

    })

    SignUp.addEventListener('click', e => {e.preventDefault();



        alert.style.display = "none";
    
        // TODO:CHECK THE EMAIL IS VALID
    
        var promise = auth.createUserWithEmailAndPassword(email.value, pass.value);
    
        promise.catch(e => {
    
            showAlert(e.message);
    
            formulaire.reset();
    
        })
    
        showAlert('you just signed up ! you can sign in now')
    
        auth.signOut();
    
        formulaire.reset();
    
    });









// logOut.addEventListener('click', e => {

//     auth.signOut();

//     alert.style.display = "none";

// })

// auth.onAuthStateChanged(firebaseUser => {

//     if (firebaseUser) { logOut.classList.remove('hide'); }

//     else { logOut.classList.add('hide') }

// })



function showAlert(message) {

    alert.style.display = "inline-block";

    alert.innerHTML = message;

}