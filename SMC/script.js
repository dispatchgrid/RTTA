

    // Create the footer element
    const footer = document.createElement('div');
    footer.className = 'footer-note';
    footer.innerHTML = 'Software Donated By K.A.N.N.Sooriyabandara';

    // Append it to the body
    document.body.appendChild(footer);

    // Create and inject the style
    const style = document.createElement('style');
    style.innerHTML = `
    .footer-note {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 1rem;
    color: #ccc;
    background: #2a2a2a;
    width: 100%;
    padding: 10px;
}
    `;
    document.head.appendChild(style);



document.head.innerHTML +="<link rel='icon' href='https://cdn.glitch.global/ce780abf-a1fe-4121-8751-a8a65995005d/favicon.ico?v=1740926118094' />";