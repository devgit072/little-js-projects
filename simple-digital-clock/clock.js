const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();

    const h = now.getHours();
    if (h < 10) {
        h = '0' + h
    }
    let m = now.getMinutes();
    if (m < 10) {
        m = '0' + m
    }
    let s = now.getSeconds();
    if (s < 10) {
        s = '0' + s
    }

    const timeValue = `
    <span>${h}</span> : 
    <span>${m}</span> :
    <span>${s}</span>
    `;

    clock.innerHTML = timeValue;
};

// This is inbuilt function which will execute the function 
// based on interval provided.
// setInterval() is function provided by Window object. 
// It accepts functions and milliseconds as interval
setInterval(tick, 1000);