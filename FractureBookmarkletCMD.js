// Create the menu container
var menuContainer = document.createElement("div");
menuContainer.id = "CMD.Menu";
menuContainer.style.width = "300px";
menuContainer.style.height = "500px";
menuContainer.style.backgroundColor = "black";
menuContainer.style.border = "1px solid black";
menuContainer.style.position = "fixed";
menuContainer.style.top = "50%";
menuContainer.style.left = "50%";
menuContainer.style.transform = "translate(-50%, -50%)";

// Create the input bar
var inputBar = document.createElement("input");
inputBar.type = "text";
inputBar.style.width = "100%";
inputBar.style.height = "40px";
inputBar.style.backgroundColor = "white";
inputBar.style.border = "1px solid red";
inputBar.style.position = "absolute";
inputBar.style.bottom = "0";
inputBar.style.padding = "10px";
inputBar.style.fontFamily = "Lexend, sans-serif"; // Set font family
inputBar.style.fontWeight = "600"; // Set font weight to bold

// Add the input bar to the menu container
menuContainer.appendChild(inputBar);

// Create the output container
var outputContainer = document.createElement("div");
outputContainer.style.width = "100%";
outputContainer.style.height = "460px";
outputContainer.style.overflowY = "auto";
outputContainer.style.padding = "10px";

// Add the output container to the menu container
menuContainer.appendChild(outputContainer);

// Add an event listener to the input bar
inputBar.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    var commands = inputBar.value.split(';'); // split input into multiple commands
    commands.forEach(function(command) { // iterate over each command
      var output = document.createElement("div");
      output.textContent = "> " + command;
      output.style.color = "red";
	  inputBar.value = "[ - Running Command - ]";
      output.style.transition = "color 0.5s ease";
      output.style.fontFamily = "Lexend, sans-serif"; // Set font family
      output.style.fontWeight = "600"; // Set font weight to bold
      setTimeout(function() {
        output.style.color = "white";
      }, 500);
      outputContainer.appendChild(output);
	  inputBar.value = "";
      outputContainer.scrollTop = outputContainer.scrollHeight;
      if (outputContainer.children.length > 25) {
        outputContainer.removeChild(outputContainer.children[0]);
      }


      if (command.trim() === "run") {
        setTimeout(function() {
          // Add response to output
          var response = document.createElement("div");
          response.textContent = "Script executed.";
          response.style.color = "green";
          response.style.transition = "color 0.5s ease";
          response.style.fontFamily = "Lexend, sans-serif"; // Set font family
          response.style.fontWeight = "600"; // Set font weight to bold
          setTimeout(function() {
            response.style.color = "white";
          }, 500);
          outputContainer.appendChild(response);
          outputContainer.scrollTop = outputContainer.scrollHeight;
          if (outputContainer.children.length > 25) {
            outputContainer.removeChild(outputContainer.children[0]);
          }
          // Execute script here
		  
          console.log("Script executed.");
        }, 850); // 1 second delay
      }
	  if (command.trim() === "help") {
        setTimeout(function() {
          // Add response to output
          var response = document.createElement("div");
          response.textContent = "Commands: help,";
          response.style.color = "green";
          response.style.transition = "color 0.5s ease";
          response.style.fontFamily = "Lexend, sans-serif"; // Set font family
          response.style.fontWeight = "600"; // Set font weight to bold
          setTimeout(function() {
            response.style.color = "white";
          }, 500);
          outputContainer.appendChild(response);
          outputContainer.scrollTop = outputContainer.scrollHeight;
          if (outputContainer.children.length > 25) {
            outputContainer.removeChild(outputContainer.children[0]);
          }
         
          console.log("Script executed.");
        }, 850); // 1 second delay
      }
	  
	  
	  
	  
	  
    });
  }
});

// Function to add a response to the output container
function addResponse(command, response, delay) {
  setTimeout(function() {
    var commandArr = command.split("|"); // Split commands by "|"
    var responseArr = response.split("|"); // Split responses by "|"
    for (var i = 0; i < commandArr.length; i++) {
      if (input.toLowerCase() === commandArr[i].toLowerCase().trim()) {
        var output = document.createElement("div");
        output.textContent = command + " " + responseArr[i].trim(); // Add the response after the command
        output.style.color = "red";
        output.style.transition = "color 0.5s ease";
        output.style.fontFamily = "Lexend, sans-serif"; // Set font family
        output.style.fontWeight = "600"; // Set font weight to bold
        setTimeout(function() {
          output.style.color = "white";
        }, 500);
        outputContainer.appendChild(output);
        outputContainer.scrollTop = outputContainer.scrollHeight;
        if (outputContainer.children.length > 25) {
          outputContainer.removeChild(outputContainer.children[0]);
        }
      }
    }
  }, delay);
}

// Create the body element with the ID "MenuStorage.Fracture.Chrome-FractureCMD"
var body = document.createElement("body");
body.id = "MenuStorage.Fracture.Chrome-FractureCMD";
body.style.margin = "0";  // Remove default margin
body.appendChild(menuContainer);

// Append the body to the HTML document
document.documentElement.appendChild(body);
