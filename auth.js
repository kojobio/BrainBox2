import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from './firebase'



const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');


createUserWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		// Signed in
		const user = userCredential.user;
		console.log(user);
		// ...
	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		// ..
	});

form.addEventListener('submit', async (event) => {
	event.preventDefault();

	const userEmail = email.value;
	const userPassword = password.value;
    // console.log({userEmail, userPassword})

  // * Dont uncomment this line now...
  // Lets try to get the input values from the form inputs
	await createUserWithEmailAndPassword(userEmail, userPassword);
});