import app from "./Lesson4.js"
import Login from "./login.js"


class Register {
    form_register;
    txt_Email;
    txt_Name;
    txt_Password;
    txt_sdt;
    txt_confirmPass;
    error_message;
    txt_go_to_login;
    btn_Submit;

    constructor() {
        //tao form
        this.form_register = document.createElement("form")
        this.form_register.classList.add("container");
        //tao input name
        this.txt_Name = document.createElement("input");
        this.txt_Name.type = "text";
        this.txt_Name.placeholder = "Type your name...";
        this.txt_Name.classList.add("spacing");
        //tao input email
        this.txt_Email = document.createElement("input");
        this.txt_Email.type = "email";
        this.txt_Email.placeholder = "Type your email...";
        this.txt_Email.classList.add("spacing");
        //tao input sdt
        this.txt_sdt = document.createElement("input");
        this.txt_sdt.type = "number";
        this.txt_sdt.placeholder = "Type your phone number ....";
        this.txt_sdt.classList.add("spacing");
        //tao input password
        this.txt_Password = document.createElement("input");
        this.txt_Password.type = "password";
        this.txt_Password.placeholder = "Type your password...";
        this.txt_Password.classList.add("spacing");
        //tao input confirmpassword
        this.txt_confirmPass = document.createElement("input");
        this.txt_confirmPass.type = "password";
        this.txt_confirmPass.placeholder = "Confirm your password";
        //tao input error
        this.error_message = document.createElement("p");
        this.error_message.classList.add("error");

        this.txt_go_to_login = document.createElement("a");
        this.txt_go_to_login.innerHTML = "You already have an account? Login;"
        this.txt_go_to_login.classList.add("link");

        this.btn_Submit = document.createElement("button");
        this.btn_Submit.innerHTML = "Register"
        this.btn_Submit.type = "submit"

        this.txt_go_to_login.addEventListener("click", this.go_to_login)
        this.btn_Submit.addEventListener("click", this.submit)


    }
    go_to_login() {
        const login = new Login()
        app.change_active_screen(login)
    }
    initRender = (container) => {
        //tao tieu de register
        const title = document.createElement("h2")
        title.innerText = "Register";

        //Them cac the h2, input, a, button vao trong cai form
        this.form_register.appendChild(title);
        this.form_register.appendChild(this.txt_Name);
        this.form_register.appendChild(this.txt_Email);
        this.form_register.appendChild(this.txt_sdt);
        this.form_register.appendChild(this.txt_Password);
        this.form_register.appendChild(this.txt_confirmPass);
        this.form_register.appendChild(this.error_message);
        this.form_register.appendChild(this.txt_go_to_login);
        this.form_register.appendChild(this.btn_Submit);
        //Them form vao trong the root
        container.appendChild(this.form_register)
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
        const name = this.txt_Name.value;
        const sdt = this.txt_sdt.value;
        const password = this.txt_Password.value;
        const cf_pass = this.txt_confirmPass.value;
        this.setError("")
        //Thong bao loi khi khong nhap input
        if (email == "") {
            this.setError("Email cant be empty!")
            return;
        }
        if (name == "") {
            this.setError("Name cant be empty!")
            return;
        }
        if (sdt == "") {
            this.setError("Phone number cannot be empty!")
            return;
        }
        if (password == "") {
            this.setError("Password cant be empty!")
            return;
        }
        if (cf_pass == "") {
            this.setError("Confirm Password cant be empty!")
            return;
        }
        //Thong bao loi khi password < 6 ki tu
        if (password.length < 6) {
            this.setError("Password can't be less than 6 characters!");
            return;
        }

        //Thong bao khi password khac Cfpass
        if (password != cf_pass) {
            this.setError("Password is not the same as confirm password!");
            return;
        }
        //Luu tru ...
        const firebaseConfig = {
            apiKey: "AIzaSyD8GjcUwE_i_KxCT1kmmjQmKXJ_QDzqCq0",
            authDomain: "jsi-form.firebaseapp.com",
            projectId: "jsi-form",
            storageBucket: "jsi-form.appspot.com",
            messagingSenderId: "629018668389",
            appId: "1:629018668389:web:8e4879fb29d7b8a646058c"
        };
        firebase.initializeApp(firebaseConfig);

        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                firebase.auth().currentUser.updateProfile({ displayName: name })
            })
            .catch((err) => {
                console.log(err.message);
            })
        //Firestore
        const db = firebase.firestore();
        // Add a new document in collection 
        db.collection("users").doc(name).set({
            email: email,
            password: password,
            phonenumber: sdt,
        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        var docRef = db.collection("users").doc(name)

        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

    }
}
export default Register