function greetUser() {
    const name = document.getElementById("nameInput").value.trim();
    const output = document.getElementById("output");
  
    if (name) {
      output.innerText = `Hello, ${name}! Welcome to Azure Static Web Apps.`;
    } else {
      output.innerText = "Please enter your name!";
    }
  }
  