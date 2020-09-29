const goggle = document.getElementById('toggle');

toggle.addEventListener('change', (e) => {
    document.body.classList.toggle("dark", e.target.checked);
});