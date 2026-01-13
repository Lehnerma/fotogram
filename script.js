let ALL_PHOTOS = [
  { id: 1, favorite: true, name: "So klein war ich mal", link: "./assets/img/photobook/ivi-welpe.jpeg", alt: "ivi als welpe" },
  { id: 2, favorite: true, name: "Welpe Schwarz Weiß", link: "./assets/img/photobook/ivi-welpe-bw.jpeg", alt: "ivi als welpe" },
  { id: 3, favorite: false, name: "Nachtausflug", link: "./assets/img/photobook/ivi-night.jpeg", alt: "ivi sitzend nach dem laufen" },
  { id: 4, favorite: false, name: "My Princess", link: "./assets/img/photobook/ivi-posing.jpeg", alt: "ivi posing in the sun" },
  { id: 5, favorite: false, name: "Aktuelles Bild von mir", link: "./assets/img/photobook/max-aktuel.jpeg", alt: "aktuelles bild von mir" },
  { id: 6, favorite: false, name: "Gemeinsamer Lauf", link: "./assets/img/photobook/max-ivi-running.jpeg", alt: "ivi und ich beim laufen" },
  { id: 7, favorite: false, name: "Um etwas ausgleich zu finden", link: "./assets/img/photobook/max-steinturm.jpeg", alt: "ich beim steinturm bauen in einer klamm" },
  { id: 8, favorite: false, name: "Endlich in das richtige Zuhause", link: "./assets/img/photobook/max-harrypotter.jpeg", alt: "max halten die slytherin fahne" },
  { id: 9, favorite: true, name: "Spazieren und spielen", link: "./assets/img/photobook/ivi-parkbank.jpeg", alt: "ivi sitzt auf einer holzbank" },
  { id: 10, favorite: true, name: "Sag mir das ich hübsch bin ohne es mir zu sagen.", link: "./assets/img/photobook/ivi-grass.jpeg", alt: "ivi sitzt im gras" },
  { id: 11, favorite: false, name: "1 Tag eingezogen", link: "./assets/img/photobook/ivi-welpe-decke.jpeg", alt: "ivi's erster tag bei uns" },
  { id: 12, favorite: false, name: "Ich bin müde", link: "./assets/img/photobook/ivi-down.jpeg", alt: "ivi liegend in der einfahrt" },
  { id: 13, favorite: false, name: "Wir sind ein gutes Team", link: "./assets/img/photobook/max-ivi.jpeg", alt: "ivi und ich" },
  { id: 14, favorite: false, name: "Porträt seitlich", link: "./assets/img/photobook/ivi-seitlich-port.jpeg", alt: "ivi seitliche porträt" },
  { id: 15, favorite: false, name: "Portrait front", link: "./assets/img/photobook/ivi-port.jpeg", alt: "ivi porträt von vorne" },
  { id: 16, favorite: false, name: "Mutter und Tochter", link: "./assets/img/photobook/ivi-tinka.jpeg", alt: "ivi und tinka" },
  { id: 17, favorite: false, name: "Ivi im Bach", link: "./assets/img/photobook/ivi-bach.jpeg", alt: "ivi im bach" },
  { id: 18, favorite: false, name: "Ich bin froh das ich dich habe", link: "./assets/img/photobook/max-ivi-port.jpeg", alt: "ivi und ich als porträt" },
  { id: 19, favorite: true, name: "Running Buddys", link: "./assets/img/photobook/max-simon-wings.jpeg", alt: "simon und ich beim wings4life run" },
  { id: 20, favorite: false, name: "Die Jacke hat mir nur eine halbe Niere gekostet 😂", link: "./assets/img/photobook/max-rennrad.jpeg", alt: "selfi beim rennradfahren" },
];
let PHOTO_DIALOG = document.getElementById("photo_dialog");
let PHOTO_GALLERY = document.getElementById("photo_gallery");

function init() {
  renderPhotos(ALL_PHOTOS);
}
//Gallery
function renderPhotos(photos) {
  PHOTO_GALLERY.innerHTML = "";
  for (let index = 0; index < photos.length; index++) {
    PHOTO_GALLERY.innerHTML += photoTemplet(photos, index);
  }
  
}

function photoTemplet(photos, index) {
  return `<section>
  <div class="fav-icon ${setFavGallery(photos[index].favorite)}" id="fav_icon" aria-label="Stern Icon zum hervorheben der favorisierten Bilder"></div>
  <img src="${photos[index].link}" alt="${photos[index].alt}" class="photo-short" id="photo_small" onclick="initDialog(${photos[index].id})" aria-haspopup="dialog" aria-controls="fullPhoto" tabindex="0"/>
  </section>`;
}

function setFavGallery(bool) {
  if (bool){
    return 'fav-unfill';
  }
}

// Dialog
function initDialog(photoId, photos = ALL_PHOTOS) {
  renderDialog(photoId, photos);
  openDialog();
}

function renderDialog(photoID, photos) {
  for (let index = 0; index < photos.length; index++) {
    if (photoID == photos[index].id) {
      PHOTO_DIALOG.innerHTML = dialogTemplet(index, photos);
      setFavDialog(photos[index].favorite)
    }
  }
}

function dialogTemplet(index, photos) {
  return `<dialog id="fullPhoto" class="photo-dialog" aria-labelledby="photo_title">
    <header>
      <button onclick="toggleFav(${index})">
        <div class="fav-icon" id="fav_icon_dialog" aria-label="Stern-Icon zum favorisieren"></div>
      </button>
      <h4 class="body-sm" id="photo_title">${photos[index].name}</h4>
      <button aria-label="schließen"><img src="./assets/img/icons/close.svg" alt="x" id="closeDialogX"/></button>
    </header>
    <main>
      <img src="${photos[index].link}" alt="${photos[index].alt}" />
    </main>
    <footer>          
      <button aria-label="Foto nach links" id="goLeft" onclick="navigationDialog(${photos[index].id}, '-')">
      <img src="./assets/img/icons/arrow_left.svg" alt="pfeil links" /></button>
      <h4 class="body-sm">${photos[index].id}/${photos.length}</h4>
      <button aria-label="Foto nach rechts" id="goRight" onclick="navigationDialog(${photos[index].id}, '+')">
      <img src="./assets/img/icons/arrow_right.svg" alt="pfeil rechts"/></button>
    </footer>
  </dialog>`;
}

function openDialog() {
  let DIALOG_REF = document.getElementById("fullPhoto");
  DIALOG_REF.showModal();
}

function navigationDialog(index, direction) {
  if (direction == "+") {
    index++;
    if (index > ALL_PHOTOS.length) {
      index = 1;
    }
  } else if (direction == "-") {
    index--;
    if (index < 1) {
      index = ALL_PHOTOS.length;
    }
  }
  initDialog(index);
}

PHOTO_DIALOG.addEventListener("click", (event) => {
  let dialogRef = document.getElementById("fullPhoto");
  let closeX = document.getElementById("closeDialogX");
  if (event.target == dialogRef || event.target == closeX) {
    dialogRef.close();
    renderPhotos(ALL_PHOTOS)
  }
  console.log(event.target);
});

function setFavDialog(photoID) {
  let ref = document.getElementById("fav_icon_dialog");
  if (photoID) {
    ref.classList.add("fav-fill");
    ref.classList.remove("fav-unfill");
  } else {
    ref.classList.add("fav-unfill");
    ref.classList.remove("fav-fill");
  }
}

function toggleFav(index) {
    ALL_PHOTOS[index].favorite = !ALL_PHOTOS[index].favorite;
    console.log(index); 
    setFavDialog(ALL_PHOTOS[index].favorite)
}

