const allPictures = [
  { id: 1, favorite: false, name: "Ivi im Bach", link: "./assets/img/photobook/ivi-bach.jpeg", alt: "ivi im bach" },
  { id: 1, favorite: false, name: "Nachtausflug", link: "./assets/img/photobook/ivi-night.jpeg", alt: "ivi sitzend nach dem laufen" },
  { id: 1, favorite: false, name: "My Princess", link: "./assets/img/photobook/ivi-posing.jpeg", alt: "ivi posing in the sun" },
  { id: 1, favorite: false, name: "Welpe Schwarz Weiß", link: "./assets/img/photobook/ivi-welpe-bw.jpeg", alt: "ivi als welpe" },
  { id: 1, favorite: false, name: "Aktuelles Bild von mir", link: "./assets/img/photobook/max-aktuel.jpeg", alt: "aktuelles bild von mir" },
  { id: 1, favorite: false, name: "Gemeinsamer Lauf", link: "./assets/img/photobook/max-ivi-running.jpeg", alt: "ivi und ich beim laufen" },
  { id: 1, favorite: false, name: "Um etwas ausgleich zu finden", link: "./assets/img/photobook/max-steinturm.jpeg", alt: "ich beim steinturm bauen in einer klamm" },
  { id: 1, favorite: false, name: "Ich bin müde", link: "./assets/img/photobook/ivi-down.jpeg", alt: "ivi liegend in der einfahrt" },
  { id: 1, favorite: false, name: "Spazieren und spielen", link: "./assets/img/photobook/ivi-parkbank.jpeg", alt: "ivi sitzt auf einer holzbank" },
  { id: 1, favorite: false, name: "Porträt seitlich", link: "./assets/img/photobook/ivi-seitlich-port.jpeg", alt: "ivi seitliche porträt" },
  { id: 1, favorite: false, name: "1 Tag eingezogen", link: "./assets/img/photobook/ivi-welpe-decke.jpeg", alt: "ivi's erster tag bei uns" },
  { id: 1, favorite: false, name: "Endlich in das richtige Haus", link: "./assets/img/photobook/max-harrypotter.jpeg", alt: "max halten die slytherin fahne" },
  { id: 1, favorite: false, name: "Wir sind ein gutes Team", link: "./assets/img/photobook/max-ivi.jpeg", alt: "ivi und ich" },
  { id: 1, favorite: false, name: "Sag mir das ich hübsch bin ohne es mir zu sagen.", link: "./assets/img/photobook/ivi-grass.jpeg", alt: "ivi sitzt im gras" },
  { id: 1, favorite: false, name: "Portrait front", link: "./assets/img/photobook/ivi-port.jpeg", alt: "ivi porträt von vorne" },
  { id: 1, favorite: false, name: "Mutter und Tochter", link: "./assets/img/photobook/ivi-tinka.jpeg", alt: "ivi und tinka" },
  { id: 1, favorite: false, name: "So klein war ich mal", link: "./assets/img/photobook/ivi-welpe.jpeg", alt: "ivi als welpe" },
  { id: 1, favorite: false, name: "Ich bin froh das ich dich habe", link: "./assets/img/photobook/max-ivi-port.jpeg", alt: "ivi und ich als porträt" },
  { id: 1, favorite: false, name: "Running Buddys", link: "./assets/img/photobook/max-simon-wings.jpeg", alt: "simon und ich beim wings4life run" },
  { id: 1, favorite: false, name: "Lafurunde im Sommer", link: "./assets/img/photobook/max-running", alt: "ich bei einer laufeinheit" },
  { id: 1, favorite: false, name: "Die Jacke hat mir nur eine halbe Niere gekostet 😂", link: "./assets/img/photobook/max-rennrad", alt: "selfi beim rennradfahren" },
];
let photoDialogRef = document.getElementById("dialog_photo");
let photoGallery = document.getElementById("photo_gallery");

function init() {
  renderPhotos();
}

function renderPhotos() {
  photoGallery.innerHTML += photoTemplet();
}

function photoTemplet() {
  return `<section class="photo">
        <figure>
            <img src="###" alt="Ivi und Tinka" class="photo-short" onclick="openDialog(####)" />
            <figcaption></figcaption>
        </figure>
    </section>`;
}

function dialogTemplet(){
  
}
function openDialog(parameter) {
  photoDialogRef.showModal();
}
function closeDialog() {
  photoDialogRef.close();
}
