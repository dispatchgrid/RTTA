const supabaseUrl = 'https://pgvllzvrngxokdxqyiwv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBndmxsenZybmd4b2tkeHF5aXd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1ODU4NjMsImV4cCI6MjA3MzE2MTg2M30.LKIOzN_8rFQKU-P0CaQMNftx3dTwSJc23AkiRROKdS4';



const textarea = document.querySelector('textarea');

const observer = new MutationObserver(() => {
    textarea.scrollTop = textarea.scrollHeight;
});

observer.observe(textarea, { childList: true, subtree: true, characterData: true });

textarea.addEventListener('input', () => {
    textarea.scrollTop = textarea.scrollHeight;
});




document.addEventListener("DOMContentLoaded", function () {
    const particleContainer = document.createElement("div");
    particleContainer.classList.add("particles-container");
    document.body.appendChild(particleContainer);

    for (let i = 0; i < 20; i++) {
        let particle = document.createElement("div");
        particle.classList.add("particle");

        let size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 1 + 1}s`;

        particleContainer.appendChild(particle);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    let toRestore = [];

    function disableAllElements() {
        const allElements = document.querySelectorAll('*');
        toRestore = [];
        allElements.forEach(el => {
            if (!el.hasAttribute('data-temp-disabled')) {
                toRestore.push({
                    el: el,
                    pointerEvents: el.style.pointerEvents || '',
                    color: el.style.color || ''
                });
                el.style.pointerEvents = 'none';
                el.style.color = '#ffffff';
                el.setAttribute('data-temp-disabled', 'true');
            }
        });
    }

    function enableAllElements() {
        toRestore.forEach(item => {
            item.el.style.pointerEvents = item.pointerEvents;
            item.el.style.color = item.color;
            item.el.removeAttribute('data-temp-disabled');
        });
        toRestore = [];
    }

    const originalFetch = window.fetch;
    window.fetch = function(...args) {
        disableAllElements();
        return originalFetch(...args)
            .then(response => {
                enableAllElements();
                return response;
            })
            .catch(error => {
                enableAllElements();
                throw error;
            });
    };
});






document.head.innerHTML +="<link rel='icon' href='https://cdn.glitch.global/ce780abf-a1fe-4121-8751-a8a65995005d/favicon.ico?v=1740926118094' />";