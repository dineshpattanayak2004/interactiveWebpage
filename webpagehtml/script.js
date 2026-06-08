// Wrap EVERYTHING inside this listener to prevent silent script crashes
document.addEventListener("DOMContentLoaded", function() {

    // 1. Mobile Menu Logic (Only runs if the button exists)
    const menuBtn = document.getElementById("menu-btn");
    const navlinks = document.getElementById("nav-links");
    
    if (menuBtn && navlinks) {
        menuBtn.addEventListener("click", function() {
            navlinks.classList.toggle("show");
        });
    }

    // 2. Generic Click Button Logic (Only runs if the button exists)
    const btn = document.getElementById("btn");
    if (btn) {
        btn.addEventListener("click", function() {
            alert("Button clicked!");
        });
    }

    // 3. Contact Form Logic (Guaranteed to run safely now)
    const contactform = document.getElementById("contactform");
    const successMessage = document.getElementById("successMessage");

    if (contactform && successMessage) {
        contactform.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent page refresh
            
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            
            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }
            
            // Inject text safely using template literals
            successMessage.textContent = `Thank you ${name}! We will contact you soon.`;
            
            // Optional: Give it a color via JS so you can see it clearly on your dark theme
            successMessage.style.color = "#06b6d4"; 
            successMessage.style.marginTop = "15px";
            
            contactform.reset();
        });
    }
});