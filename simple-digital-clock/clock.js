const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const timeValue = `
    <span>${h}</span> : 
    <span>${m}</span> :
    <span>${s}</span>
    `;

    clock.innerHTML = timeValue;
};

// This is inbuilt function which will execute the function 
// based on interval provided.
setInterval(tick, 1000);