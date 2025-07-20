// Seleziono elementi
const img = document.getElementById('light_off');
const button = document.querySelector('button');

console.log(img);
console.log(button);

// Stato iniziale (lampadina spenta)
let accesa = false;

button.addEventListener('click', () => {
    if (accesa) {
        // Spegni la lampadina
        img.src = './img/white_lamp.png';
        img.alt = 'lampadina spenta';
        button.textContent = 'Accendi';
        accesa = false;
    } else {
        // Accendi la lampadina
        img.src = './img/yellow_lamp.png';
        img.alt = 'lampadina accesa';
        button.textContent = 'Spegni';
        accesa = true;
    }
});

console.log(accesa);




