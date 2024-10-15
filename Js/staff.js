// Animated Counters for Dashboard Cards
function animateCounter(id, start, end, duration) {
    let element = document.getElementById(id);
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let timer = setInterval(() => {
        current += increment;
        element.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Run counters
window.onload = () => {
    animateCounter("totalClientCounter", 0, 1, 1500);
    animateCounter("roomsCounter", 0, 1, 1200);
    animateCounter("occupiedCounter", 0, 1, 1400);
    animateCounter("reservationsCounter", 0, 8, 800);
};
// JavaScript to handle save changes
document.querySelector('.btn-primary').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Simulate saving the data (replace this with actual logic)
    //  alert(`Profile Updated:\nUsername: ${username}\nEmail: ${email}\nRole: ${role}`);

    // Close the modal (optional)
    $('#editProfileModal').modal('hide');
});
