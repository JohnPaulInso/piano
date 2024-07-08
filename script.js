	document.addEventListener('DOMContentLoaded', () => {
	    const keys = document.querySelectorAll('.key');
	    keys.forEach(key => {
	        key.addEventListener('click', () => playSound(key.dataset.note));
	    });

	    document.addEventListener('keydown', (e) => {
	        const key = e.key.toUpperCase();
	        const pianoKey = document.querySelector(`.key[data-key="${key}"]`);
	        if (pianoKey) {
	            playSound(pianoKey.dataset.note);
	            pianoKey.classList.add('pressed');
	        }
	    });

	    document.addEventListener('keyup', (e) => {
	        const key = e.key.toUpperCase();
	        const pianoKey = document.querySelector(`.key[data-key="${key}"]`);
	        if (pianoKey) {
	            pianoKey.classList.remove('pressed');
	        }
	    });
	});

	function playSound(note) {
	    const audio = new Audio(`sounds/${note}.wav`);
	    audio.play();

	    const pressedKey = document.querySelector(`.key[data-note="${note}"]`);
	    if (pressedKey) {
	        pressedKey.classList.add('pressed');
	        setTimeout(() => {
	            pressedKey.classList.remove('pressed');
	        }, 200000);
	    }
	}
