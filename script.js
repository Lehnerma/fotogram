const allPictures = [
  { id: 1, favorite: false, name: "Ivi im Bach", link: "./assets/img/photobook/ivi-bach.jpeg" },
  { id: 1, favorite: false, name: "Nachtausflug", link: "./assets/img/photobook/ivi-night.jpeg" },
  { id: 1, favorite: false, name: "My Princess", link: "./assets/img/photobook/ivi-posing.jpeg" },
  { id: 1, favorite: false, name: "Welpe Schwarz Weiß", link: "./assets/img/photobook/ivi-welpe-bw.jpeg" },
  { id: 1, favorite: false, name: "Aktuelles Bild von mir", link: "./assets/img/photobook/max-aktuel.jpeg" },
  { id: 1, favorite: false, name: "Gemeinsamer Lauf", link: "./assets/img/photobook/max-ivi-running.jpeg" },
  { id: 1, favorite: false, name: "Um etwas ausgleich zu finden", link: "./assets/img/photobook/max-steinturm.jpeg" },
  { id: 1, favorite: false, name: "Ich bin müde", link: "./assets/img/photobook/ivi-down.jpeg" },
  { id: 1, favorite: false, name: "Spazieren und spielen", link: "./assets/img/photobook/ivi-parkbank.jpeg" },
  { id: 1, favorite: false, name: "Portrait seitlich", link: "./assets/img/photobook/ivi-seitlich-port.jpeg" },
  { id: 1, favorite: false, name: "1 Tag eingezogen", link: "./assets/img/photobook/ivi-welpe-decke.jpeg" },
  { id: 1, favorite: false, name: "Endlich in das richtige Haus", link: "./assets/img/photobook/max-harrypotter.jpeg" },
  { id: 1, favorite: false, name: "Wir sind ein gutes Team", link: "./assets/img/photobook/max-ivi.jpeg" },
  { id: 1, favorite: false, name: "Sag mir das ich hübsch bin ohne es mir zu sagen.", link: "./assets/img/photobook/ivi-grass.jpeg" },
  { id: 1, favorite: false, name: "Portrait front", link: "./assets/img/photobook/ivi-port.jpeg" },
  { id: 1, favorite: false, name: "Mutter und Tochter", link: "./assets/img/photobook/ivi-tinka.jpeg" },
  { id: 1, favorite: false, name: "So klein war ich mal", link: "./assets/img/photobook/ivi-welpe.jpeg" },
  { id: 1, favorite: false, name: "Ich bin froh das ich dich habe", link: "./assets/img/photobook/max-ivi-port.jpeg" },
  { id: 1, favorite: false, name: "Running Buddys", link: "./assets/img/photobook/max-simon-wings.jpeg" },
  { id: 1, favorite: false, name: "Lafurunde im Sommer", link: "./assets/img/photobook/max-running" },
  { id: 1, favorite: false, name: "Die Jacke hat mir nur eine halbe Niere gekostet 😂", link: "./assets/img/photobook/max-rennrad" },
];
let photoDialogRef = document.getElementById("dialog_photo");
let photoGallery = document.getElementById("photo_gallery");

function photoTemplet() {
  return `<section class="photo">
        <figure>
            <img src="./assets/img/photobook/ivi-posing.jpeg" alt="Ivi und Tinka" class="photo-short" onclick="openDialog()" />
            <figcaption></figcaption>
        </figure>
    </section>`;
}

function openDialog() {
  photoDialogRef.showModal();
}
function closeDialog() {
  photoDialogRef.close();
}
function rederPhoto() {
  photoGallery.innerHTML += photoTemplet();
}
