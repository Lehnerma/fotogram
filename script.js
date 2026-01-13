const allPhotos = [
  { id: 1, favorite: false, name: "So klein war ich mal", link: "./assets/img/photobook/ivi-welpe.jpeg", alt: "ivi als welpe" },
  { id: 2, favorite: false, name: "Welpe Schwarz Weiß", link: "./assets/img/photobook/ivi-welpe-bw.jpeg", alt: "ivi als welpe" },
  { id: 3, favorite: false, name: "Nachtausflug", link: "./assets/img/photobook/ivi-night.jpeg", alt: "ivi sitzend nach dem laufen" },
  { id: 4, favorite: false, name: "My Princess", link: "./assets/img/photobook/ivi-posing.jpeg", alt: "ivi posing in the sun" },
  { id: 5, favorite: false, name: "Aktuelles Bild von mir", link: "./assets/img/photobook/max-aktuel.jpeg", alt: "aktuelles bild von mir" },
  { id: 6, favorite: false, name: "Gemeinsamer Lauf", link: "./assets/img/photobook/max-ivi-running.jpeg", alt: "ivi und ich beim laufen" },
  { id: 7, favorite: false, name: "Um etwas ausgleich zu finden", link: "./assets/img/photobook/max-steinturm.jpeg", alt: "ich beim steinturm bauen in einer klamm" },
  { id: 8, favorite: false, name: "Endlich in das richtige Zuhause", link: "./assets/img/photobook/max-harrypotter.jpeg", alt: "max halten die slytherin fahne" },
  { id: 9, favorite: false, name: "Spazieren und spielen", link: "./assets/img/photobook/ivi-parkbank.jpeg", alt: "ivi sitzt auf einer holzbank" },
  { id: 10, favorite: false, name: "Sag mir das ich hübsch bin ohne es mir zu sagen.", link: "./assets/img/photobook/ivi-grass.jpeg", alt: "ivi sitzt im gras" },
  { id: 11, favorite: false, name: "1 Tag eingezogen", link: "./assets/img/photobook/ivi-welpe-decke.jpeg", alt: "ivi's erster tag bei uns" },
  { id: 12, favorite: false, name: "Ich bin müde", link: "./assets/img/photobook/ivi-down.jpeg", alt: "ivi liegend in der einfahrt" },
  { id: 13, favorite: false, name: "Wir sind ein gutes Team", link: "./assets/img/photobook/max-ivi.jpeg", alt: "ivi und ich" },
  { id: 14, favorite: false, name: "Porträt seitlich", link: "./assets/img/photobook/ivi-seitlich-port.jpeg", alt: "ivi seitliche porträt" },
  { id: 15, favorite: false, name: "Portrait front", link: "./assets/img/photobook/ivi-port.jpeg", alt: "ivi porträt von vorne" },
  { id: 16, favorite: false, name: "Mutter und Tochter", link: "./assets/img/photobook/ivi-tinka.jpeg", alt: "ivi und tinka" },
  { id: 17, favorite: false, name: "Ivi im Bach", link: "./assets/img/photobook/ivi-bach.jpeg", alt: "ivi im bach" },
  { id: 18, favorite: false, name: "Ich bin froh das ich dich habe", link: "./assets/img/photobook/max-ivi-port.jpeg", alt: "ivi und ich als porträt" },
  { id: 19, favorite: false, name: "Running Buddys", link: "./assets/img/photobook/max-simon-wings.jpeg", alt: "simon und ich beim wings4life run" },
  { id: 20, favorite: false, name: "Die Jacke hat mir nur eine halbe Niere gekostet 😂", link: "./assets/img/photobook/max-rennrad.jpeg", alt: "selfi beim rennradfahren" },
];
let photoDialog = document.getElementById("photo_dialog");
let photoGallery = document.getElementById("photo_gallery");


function init() {
  renderPhotos();
}

function renderPhotos(photos = allPhotos) {
  photoGallery.innerHTML = "";
  for (let index = 0; index < photos.length; index++) {
    photoGallery.innerHTML += photoTemplet(photos, index);
  }
}

function photoTemplet(photos, index) {
  return `<img src="${photos[index].link}" alt="${photos[index].alt}"class="photo-short fadeUp" onclick="initDialog(${photos[index].id})" aria-haspopup="dialog" aria-controls="fullPhoto"  />`;
}

//####### creating dialog section #######

function initDialog(photoId) {
  renderDialog(photoId);
  openDialog()

}

function renderDialog(photoId) {
  for (let index = 0; index < allPhotos.length; index++) {
    if (photoId == allPhotos[index].id) {
      photoDialog.innerHTML = dialogTemplet(allPhotos[index]);
    }
  }
}

function dialogTemplet(photo) {
  return `<dialog id="fullPhoto" class="photo-dialog" aria-labelledby="photo_title">
    <header>
      <button aria-label="Favorit markieren"><img src="./assets/img/icons/star.svg" alt="stern" /></button>
      <h4 class="body-sm" id="photo_title">${photo.name}</h4>
      <button aria-label="schließen"><img src="./assets/img/icons/close.svg" alt="x" onclick="closeDialog()"/></button>
    </header>
    <main>
      <img src="${photo.link}" alt="${photo.alt}" />
    </main>
    <footer>          
      <button aria-label="Foto nach links"><img src="./assets/img/icons/arrow_left.svg" alt="pfeil links" /></button>
      <h4 class="body-sm">${photo.id}/${allPhotos.length}</h4>
      <button aria-label="Foto nach rechts"><img src="./assets/img/icons/arrow_right.svg" alt="pfeil rechts" onclick="test()"/></button>
    </footer>
  </dialog>`;
}

function openDialog() {
  let dialogRef = document.getElementById("fullPhoto");
   dialogRef.showModal();
}

function closeDialog() {
  let dialogRef = document.getElementById("fullPhoto");
  dialogRef.close();
}

photoDialog.addEventListener('click', (event) => {
  let dialogRef = document.getElementById("fullPhoto");
  if (event.target == dialogRef) {
    closeDialog()
  }
  console.log(event.target);
})



function test() {
  console.log('test');
  
}