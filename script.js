const carteGage = document.getElementById("carteGage");
const tirerBtn = document.getElementById("tirerBtn");
const sonTirage = document.getElementById("sonTirage");

const cartes = [];

for (let i = 1; i <= 50; i++) {
    cartes.push("gages/" + i + ".png");
}

tirerBtn.addEventListener("click", function () {
    tirerBtn.disabled = true;

    sonTirage.currentTime = 0;
    sonTirage.play();

    let vitesse = 50;
    let tours = 0;
    let maxTours = 30;

    function animationTirage() {
        const carteAleatoire = Math.floor(Math.random() * cartes.length);
        carteGage.src = cartes[carteAleatoire];

        carteGage.classList.add("animation");

        setTimeout(function () {
            carteGage.classList.remove("animation");
        }, 100);

        tours++;
        vitesse += 15;

        if (tours < maxTours) {
            setTimeout(animationTirage, vitesse);
        } else {
            const resultat = Math.floor(Math.random() * cartes.length);
            carteGage.src = cartes[resultat];

            tirerBtn.disabled = false;
        }
    }

    animationTirage();
});