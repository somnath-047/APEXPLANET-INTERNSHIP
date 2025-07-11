const toggleBtn = document.createElement('button');
toggleBtn.textContent = "Toggle Dark Mode";
// Styling the button
toggleBtn.style.cssText = "...";

document.body.appendChild(toggleBtn);

let darkMode = false;

toggleBtn.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.style.backgroundColor = darkMode ? "#121212" : "#e6f2ff";
    document.body.style.color = darkMode ? "#ffffff" : "#2c3e50";
    toggleBtn.style.backgroundColor = darkMode ? "#444" : "#007bff";
});
