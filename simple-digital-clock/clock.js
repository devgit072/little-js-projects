const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();
    let dateStr = now.toLocaleDateString();
    let timeStr = now.toLocaleTimeString();
    
    const timeValue = `
    <span>${dateStr}</span> </t>
    <span>${timeStr}</span>
    `;

    clock.innerHTML = timeValue;
};

// This is inbuilt function which will execute the function 
// based on interval provided.
// setInterval() is function provided by Window object. 
// It accepts functions and milliseconds as interval
setInterval(tick, 1000);