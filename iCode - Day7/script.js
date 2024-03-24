function copyToClipboard() {
    /* Get the text you want to copy */
    var textToCopy = document.getElementById("message").innerText;
    
    /* Create a temporary textarea element */
    var tempTextArea = document.createElement("textarea");
    
    /* Set the value of the textarea to the text you want to copy */
    tempTextArea.value = textToCopy;
    
    /* Append the textarea to the DOM */
    document.body.appendChild(tempTextArea);
    
    /* Select the text within the textarea */
    tempTextArea.select();
    
    /* Copy the selected text */
    document.execCommand("copy");
    
    /* Remove the temporary textarea */
    document.body.removeChild(tempTextArea);
    
    /* Show toast message */
    var toastMessage = document.getElementById("toast-message");
    toastMessage.style.display = "block";
    setTimeout(function() {
      toastMessage.style.display = "none";
    }, 2000); // Hide toast after 2 seconds
  }
  