// var decalarations from doc

let newTimer = document.getElementById('add-more-timers');
let timersContainer = document.getElementById('timers');
let timers = document.querySelectorAll('.timer');
let deleteTimers = document.querySelectorAll('.delete-timer');

newTimer.addEventListener('click', () => {
    let timerToAdd = document.createElement('div');
    timerToAdd.classList.add('timer-overall-container');
    timerToAdd.innerHTML = `
        <div class="timer">
            <input class="timer-title" placeholder="Subject:">
            <div class="timer-sections">
                <div class="time-containers" id="normal-time">
                    <h2 class="type-indicator">Normal Time:</h2>
                    <input class="countdown" placeholder="HH:MM:SS">
                </div>
                <h1 class="seperator">-</h1>
                <div class="time-containers" id="extra-time">
                    <h2 class="type-indicator">Extra Time:</h2>
                    <input class="countdown" placeholder="HH:MM:SS">
             </div>
            </div>
        </div>
        <button class="delete-timer">X</button>
    `;
    timersContainer.append(timerToAdd);

    const timerVals = timerToAdd.querySelectorAll('.countdown');

    timerVals.forEach(val => {
        val.style.width = (val.getAttribute('placeholder').length * 18.9) + 'px';
        val.addEventListener('input', () => {
            let value = val.value.replace(/:/g, ''); // Remove existing colons
            let formattedValue = '';
            for (let i = 0; i < value.length; i += 2) {
                formattedValue += value.slice(i, i + 2);
                if (i + 2 < value.length) {
                    formattedValue += ':';
                }
            }
            if (formattedValue.length > 8) {
                formattedValue = formattedValue.slice(0, 8); // Limit to 00:00:00
            }
            val.value = formattedValue;
        });
    });

    const deleteThisTimer = timerToAdd.querySelector('.delete-timer');
    deleteThisTimer.addEventListener('click', () => {
        let timerToDelete = deleteThisTimer.parentNode;
        timerToDelete.remove();
    });
    console.log('new timer added')
});
