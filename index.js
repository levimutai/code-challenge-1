const guestForm = document.getElementById('guest-form');
const guestInput = document.getElementById('guest-name');
const guestList = document.getElementById('guest-list');
let guests = [];

guestForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page
    const guestName = guestInput.value.trim();
    if (guestName) {
        guests.push(guestName);
        updateGuestList();
        guestInput.value = '';
    }
});

function updateGuestList() {
    guestList.innerHTML = '';
    guests.forEach(function(guest) {
        const li = document.createElement('li');
        li.textContent = guest;
        guestList.appendChild(li);
    });
}