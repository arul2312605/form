function validateForm() {
    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    //  name
    if (name.trim() === "") {
      alert("Name is required.");
      return false;
    }

    //  mobile number
    
    if (!mobilePattern.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number starting with 6-9.");
      return false;
    }

    //  email
    
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    //  password
    if (password.length < 3) {
      alert("Password must be at least 3 characters long.");
      return false;
    }

    //  confirm password
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
    

    alert("Form submitted successfully!");
    return true;
  }