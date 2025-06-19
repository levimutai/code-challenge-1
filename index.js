const guestForm = document.getElementById('guest-form');
const guestInput = document.getElementById('guest-name');
const guestList = document.getElementById('guest-list');
const alertDiv = document.getElementById('alert');
let guests = [];

guestForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const guestName = guestInput.value.trim();
    if (!guestName) return;

    if (guests.length >= 10) {
        alertDiv.textContent = "Guest list is full! (max 10)";
        return;
    } else {
        alertDiv.textContent = "";
    }

    guests.push({ name: guestName, attending: false });
    updateGuestList();
    guestInput.value = '';
});

function updateGuestList() {
    guestList.innerHTML = '';
    guests.forEach(function(guest, index) {
        const li = document.createElement('li');
        li.textContent = guest.name + ' ';

        // RSVP toggle button
        const rsvpBtn = document.createElement('button');
        rsvpBtn.textContent = guest.attending ? 'Attending' : 'Not Attending';
        rsvpBtn.style.marginRight = '8px';
        rsvpBtn.addEventListener('click', function() {
            guests[index].attending = !guests[index].attending;
            updateGuestList();
        });

        // Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove';
        removeBtn.addEventListener('click', function() {
            guests.splice(index, 1);
            updateGuestList();
            alertDiv.textContent = "";
        });

        li.appendChild(rsvpBtn);
        li.appendChild(removeBtn);
        guestList.appendChild(li);
    });
}