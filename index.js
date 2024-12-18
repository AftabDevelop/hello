function timing() {
    const date1 = new Date();
    const date2 = new Date("2028-07-21");
    const date = date2 - date1;

    // Days timer
    const timer = document.getElementById('root');
    const days = Math.floor(date / (1000 * 60 * 60 * 24));
    timer.innerHTML = `<span style="color: #007bff; font-weight: bold;">${days}</span> Days`;
    timer.style.cssText = `
        font-size: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Arial', sans-serif;
        letter-spacing: 2px;
    `;

    // Hours timer
    const timer1 = document.getElementById('root1');
    const hour = Math.floor((date / (1000 * 60 * 60)) % 24);
    timer1.innerHTML = `<span style="color: #28a745; font-weight: bold;">${hour}</span> Hours`;
    timer1.style.cssText = `
        font-size: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Arial', sans-serif;
        letter-spacing: 2px;
    `;

    // Minutes timer
    const timer2 = document.getElementById('root2');
    const min = Math.floor((date / (1000 * 60)) % 60);
    timer2.innerHTML = `<span style="color: #dc3545; font-weight: bold;">${min}</span> Minutes`;
    timer2.style.cssText = `
        font-size: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Arial', sans-serif;
        letter-spacing: 2px;
    `;

    // Seconds timer
    const timer3 = document.getElementById('root3');
    const sec = Math.floor((date / 1000) % 60);
    timer3.innerHTML = `<span style="color: #ffc107; font-weight: bold;">${sec}</span> Seconds`;
    timer3.style.cssText = `
        font-size: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Arial', sans-serif;
        letter-spacing: 2px;
    `;
}

setInterval(timing, 1000);
