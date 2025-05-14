document.addEventListener("DOMContentLoaded", function () {
    // Jetzt ist das DOM geladen, du kannst sicher auf IDs zugreifen
    function showScan() {
        document.getElementById('startScreen').classList.add('hidden');
        document.getElementById('scanScreen').classList.remove('hidden');
    }

    const backButton = document.getElementById("back-button");

    backButton.addEventListener("click", () => {
        window.location.href = "index.html"; // Leitet explizit zur index.html weiter
    });

    function requestCamera() {
        alert('Hier würdest du die Kameraberechtigung anfragen und den Scanner starten.');
    }

    // Optional: Wenn du die Funktionen global brauchst
    window.showScan = showScan;
    window.requestCamera = requestCamera;
});
