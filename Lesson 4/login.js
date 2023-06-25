import Register from "./register.js";
import app from "./Lesson4.js";

class Login {
    form_register;
    txt_Email;
    txt_Name;
    txt_Password;
    error_message;
    txt_go_to_register;
    btn_Submit;
    constructor() {
        //tao form
        this.form_register = document.createElement("form")
        this.form_register.classList.add("container");
        //tao input email
        this.txt_Email = document.createElement("input");
        this.txt_Email.type = "email";
        this.txt_Email.placeholder = "Type your email...";
        this.txt_Email.classList.add("spacing")
        //tao input password
        this.txt_Password = document.createElement("input");
        this.txt_Password.type = "password";
        this.txt_Password.placeholder = "Type your password...";
        //tao input error
        this.error_message = document.createElement("p");
        this.error_message.classList.add("error");

        this.txt_go_to_register = document.createElement("a");
        this.txt_go_to_register.innerHTML = "You already have an account? Register;"
        this.txt_go_to_register.classList.add("link");

        this.btn_Submit = document.createElement("button");
        this.btn_Submit.innerHTML = "Login"
        this.btn_Submit.type = "submit"

        this.txt_go_to_register.addEventListener("click", this.go_to_register)
        this.btn_Submit.addEventListener("click", this.submit)

    }

    setError = (content) => {
        console.log(content)
        if (content == undefined) {
            this.error_message.style.display = "none"
        }
        else {
            this.error_message.innerText = content;
            this.error_message.style.display = "block"
        }


    }
    submit = (e) => {
        e.preventDefault();

        const email = this.txt_Email.value;
        const password = this.txt_Password.value;
        this.setError("");
        //Thong bao loi khi khong nhap input
        if (email == "") {
            this.setError("Email cant be empty!")
            return;
        }

        if (password == "") {
            this.setError("Password cant be empty!")
            return;
        }
        //Thong bao loi khi password < 6 ki tu
        if (password.length < 6) {
            this.setError("Password can't be less than 6 characters!");
            return;
        }
        const firebaseConfig = {
            apiKey: "AIzaSyD8GjcUwE_i_KxCT1kmmjQmKXJ_QDzqCq0",
            authDomain: "jsi-form.firebaseapp.com",
            projectId: "jsi-form",
            storageBucket: "jsi-form.appspot.com",
            messagingSenderId: "629018668389",
            appId: "1:629018668389:web:8e4879fb29d7b8a646058c"
        };

        firebase.initializeApp(firebaseConfig);
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                console.log("Login successful")
                var user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
            });


    }
    go_to_register = () => {
        const register = new Register()
        app.change_active_screen(register)
    }
    initRender = (container) => {
        //tao tieu de register
        const title = document.createElement("h2")
        title.innerText = "Login";

        //Them cac the h2, input, a, button vao trong cai form
        this.form_register.appendChild(title);
        this.form_register.appendChild(this.txt_Email);
        this.form_register.appendChild(this.txt_Password);
        this.form_register.appendChild(this.error_message);
        this.form_register.appendChild(this.txt_go_to_register);
        this.form_register.appendChild(this.btn_Submit);
        //Them form vao trong the root
        container.appendChild(this.form_register)
    }


}

export default Login;