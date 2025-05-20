document.addEventListener("DOMContentLoaded", function () {
  // Startscreen → zeigt das Kamera-Popup
  const startButton = document.getElementById("start-button");
  if (startButton) {
    startButton.addEventListener("click", function () {
      document.getElementById("cameraPopup").style.display = "flex";
    });
  }

  // Kamera-Zugriffs-Buttons
  const allowBtn = document.getElementById("allowBtn");
  const cancelBtn = document.getElementById("cancelBtn");

  if (allowBtn) {
    allowBtn.addEventListener("click", function () {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          window.location.href = "ar-erlebnis.html";
        })
        .catch(function (err) {
          alert("Zugriff verweigert oder Fehler: " + err);
        });

      document.getElementById("cameraPopup").style.display = "none";
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", function () {
      document.getElementById("cameraPopup").style.display = "none";
    });
  }

  // AR-Seite: Wechsel von Startscreen zu Scan 
  const scanScreen = document.getElementById('scanScreen');
  const startScreen = document.getElementById('startScreen');

  function showScan() {
    if (startScreen && scanScreen) {
      startScreen.classList.add('hidden');
      scanScreen.classList.remove('hidden');
    }
  }

  // Global verfügbar machen
  window.showScan = showScan;

  // Zurück-Button auf AR-Seite
  const backButton = document.getElementById("back-button");
  if (backButton) {
    backButton.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  // Info-Popup öffnen & schließen
  const infoButton = document.getElementById('info-button');
  const closeInfoButton = document.getElementById('close-info-popup');

  if (infoButton && closeInfoButton) {
    infoButton.addEventListener('click', function () {
      document.getElementById('info-popup').classList.remove('hidden');
    });

    closeInfoButton.addEventListener('click', function () {
      document.getElementById('info-popup').classList.add('hidden');
    });
  }

  // Kameraanfragefunktion (optional, z. B. für spätere Erweiterung)
  function requestCamera() {
    alert('Hier würdest du die Kameraberechtigung anfragen und den Scanner starten.');
  }

  window.addEventListener('gps-camera-update-position', (e) => {
    console.log('Position:', e.detail.position);
  });

  window.requestCamera = requestCamera;
});


/* QR-Code Scanner (optional)
const scanButton = document.getElementById("scan-button");
      const popup = document.getElementById("cameraPopup");
      const cancelBtn = document.getElementById("cancelBtn");
      const allowBtn = document.getElementById("allowBtn");
      const cameraFeed = document.getElementById("cameraFeed");

      scanButton.addEventListener("click", () => {
        popup.style.display = "flex";
      });

      cancelBtn.addEventListener("click", () => {
        popup.style.display = "none";
      });

      allowBtn.addEventListener("click", () => {
        popup.style.display = "none";
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(stream => {
            cameraFeed.style.display = "block";
            cameraFeed.srcObject = stream;
            cameraFeed.play();
          })
          .catch(err => {
            alert("Zugriff verweigert oder Fehler: " + err);
          });
      });

      */

      window.addEventListener('gps-camera-update-position', (e) => {
  const coords = e.detail.position;
  console.log("Aktuelle Koordinaten:", coords);

  const plane = document.createElement('a-plane');
  plane.setAttribute('gps-new-entity-place', `latitude: ${coords.latitude}; longitude: ${coords.longitude}`);
  plane.setAttribute('height', '3');
  plane.setAttribute('width', '3');
  plane.setAttribute('color', 'blue');
  plane.setAttribute('look-at', '[gps-camera]');
  document.querySelector('a-scene').appendChild(plane);
});