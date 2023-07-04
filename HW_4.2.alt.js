const button = document.getElementById("myButton");
const text = document.getElementById("parId");
const state = localStorage.getItem("state") || "light";
const time = new Date(localStorage.getItem("time")) ?? new Date()

function switchTo() {
    //const { time } = getState();
    let body = document.body;

    button.classList.toggle("dark-background");
    body.classList.toggle("dark-background");

    if (button.textContent === "Turn on") {
        button.textContent = "Turn off";
        text.textContent = `Last on time: ${formatDate(time)}`;
        setState({
            state: "light",
            time: new Date()
        });
    } else {
        button.textContent = "Turn on";
        text.textContent = `Last off time: ${formatDate(time)}`;
        setState({
            state: "dark",
            time: new Date()
        });
    }
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

function getState() {
    return {
        state: localStorage.getItem("state"),
        time: new Date(localStorage.getItem("time")) ?? new Date()
    }
}

function setState(state) {
    localStorage.setItem("state", state.state);
    localStorage.setItem("time", state.time);
}

function initState() {
    if (state === "dark") {
        switchTo();
    }
}
