const button = document.getElementById("myButton");
const text = document.getElementById("parId");
let theme = localStorage.getItem("theme") || "light";
let time = new Date(localStorage.getItem("time")) ?? new Date()

applyTheme();

button.addEventListener('click', switchTheme);

function applyTheme() {
    let body = document.body;

    if (theme === "dark") {
        button.classList.add("dark-background");
        body.classList.add("dark-background");
        button.textContent = "Turn off";
        text.textContent = `Last on time: ${formatDate(time)}`;
    } else {
        button.classList.remove("dark-background");
        body.classList.remove("dark-background");
        button.textContent = "Turn on";
        text.textContent = `Last off time: ${formatDate(time)}`;
    }
}

function switchTheme() {
    if (theme === "dark") {
        theme = "light";
        setTheme({
            theme: "light",
            time: new Date()
        });
    } else {
        theme = "dark";
        setTheme({
            theme: "dark",
            time: new Date()
        });
    }
    applyTheme();
}

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}



function setTheme(currentState) {
    localStorage.setItem("theme", currentState.theme);
    localStorage.setItem("time", currentState.time);
    time = currentState.time;
}


