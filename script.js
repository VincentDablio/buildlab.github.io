console.log("Main menu loaded");

window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("auth-overlay");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const switchToSignup = document.getElementById("switch-to-signup");
  const switchToLogin = document.getElementById("switch-to-login");
  const authTitle = document.getElementById("auth-title");

  // Toggle between Login and Signup
  switchToSignup.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    authTitle.textContent = "Sign Up";
  });

  switchToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    authTitle.textContent = "Login";
  });

  // Temporarily simulate login/signup (to be replaced with real backend logic)
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    overlay.style.display = "none"; // Remove overlay after login
  });

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    overlay.style.display = "none"; // Remove overlay after sign up
  });

  // Show/hide password functionality
  const toggleButtons = document.querySelectorAll(".toggle-password");
  toggleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const input = document.getElementById(btn.getAttribute("data-target"));
      if (input.type === "password") {
        input.type = "text";
      } else {
        input.type = "password";
      }
    });
  });
});

  
