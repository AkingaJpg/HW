function switchToDark() {
    const { button, text } = getElements();
    const { time } = getState();
    let body = document.body;

    button.classList.add("dark-background");
    body.classList.add("dark-background");

    button.textContent = "Turn on";
    text.textContent = `Last off time: ${formatDate(time)}`;
    setState({
        state: "dark",
        time: new Date()
    });
}

function switchToLight() {
    const { button, text } = getElements();
    const { time } = getState();

    let body = document.body;

    button.classList.remove("dark-background");
    body.classList.remove("dark-background");

    button.textContent = "Turn off";
    text.textContent = `Last on time: ${formatDate(time)}`;
    setState({
        state: "light",
        time: new Date()
    });
}

function formatDate(date) {
    let day = String(date.getDate()).padStart(2, "0");
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let year = date.getFullYear();
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");

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

function getElements() {
    return {
        button: document.getElementById("myButton"),
        text: document.getElementById("parId")
    }
}

function initState() {
    const { state } = getState();
    if (state === "dark") {
        switchToDark();
    }
    else {
        switchToLight();
    }
}

function toggleButton() {
    console.log("toggle");
    const { state } = getState();
    if (state === "dark") {
        switchToLight();
    } else {
        switchToDark();
    }
}
