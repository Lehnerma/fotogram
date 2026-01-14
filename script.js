const ALL_PHOTOS = [
  { id: 1, favorite: true, name: "So klein war ich mal", link: "./assets/img/photobook/ivi-welpe.jpeg", alt: "ivi als welpe" },
  { id: 2, favorite: true, name: "Welpe Schwarz Weiß", link: "./assets/img/photobook/ivi-welpe-bw.jpeg", alt: "ivi foto bearbeitet" },
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
let PHOTO_GALLERY = document.getElementById("photo_gallery");
let PHOTO_DIALOG = document.getElementById("photo_dialog");
let DIALOG_REF = document.getElementById("fullPhoto");
let DIALOG_ID = 0;
let DIALOG_INDEX = 0;
let DIALOG_TITEL = document.getElementById("dialog_title");
let DIALOG_PHOTO = document.getElementById("dialog_photo");
let DIALOG_PAGE_NUM = document.getElementById("dialog_pageNumber");
let DIALOG_FAV_ICON = document.getElementById("fav_icon_dialog");
let CLOSEX = document.getElementById("closingX");
let CLOSINGX = document.getElementById("closeDialogX");
let DIALOG_ARROW_RIGHT =document.getElementById("goRight");
let DIALOG_ARROW_LEFT =document.getElementById("goLeft");
function initGallery() {
  PHOTO_GALLERY.innerHTML = "";
  for (let index = 0; index < ALL_PHOTOS.length; index++) {
    PHOTO_GALLERY.innerHTML += photoTemplet(index);
  }
}

function photoTemplet(index) {
  return `<section>
    <div class="fav-icon ${setFavGallery(ALL_PHOTOS[index].favorite)}" role="img" aria-roledescription="Stern Icon zum hervorheben der favorisierten Bilder" title="favorit stern">
    </div>
    <button onclick="initDialog(${ALL_PHOTOS[index].id})" aria-haspopup="dialog" >
    <img src="${ALL_PHOTOS[index].link}" alt="${ALL_PHOTOS[index].alt}" class="photo-short"/>
    </button>
  </section>`;
}

function setFavGallery(bool) {
  if (bool) {
    return "fav-unfill";
  }
}

function initDialog(photoId) {
  renderDialog(photoId);
  openDialog();
}

function renderDialog(photoID) {
  for (let index = 0; index < ALL_PHOTOS.length; index++) {
    if (photoID == ALL_PHOTOS[index].id) {
      fillDialog(index);
      setFavDialog(ALL_PHOTOS[index].favorite);
      DIALOG_INDEX = index;
      DIALOG_ID = ALL_PHOTOS[index].id;
    }
  }
}

function fillDialog(index) {
  DIALOG_TITEL.innerHTML = ALL_PHOTOS[index].name;
  DIALOG_PHOTO.src = ALL_PHOTOS[index].link;
  DIALOG_PHOTO.alt = ALL_PHOTOS[index].alt;
  DIALOG_PAGE_NUM.innerHTML = ALL_PHOTOS[index].id + " / " + ALL_PHOTOS.length;
}

function openDialog() {
  DIALOG_REF.showModal();
}

DIALOG_REF.addEventListener("click", (event) => {
  if (event.target == DIALOG_REF || event.target == CLOSEX || event.target == CLOSINGX) {
    DIALOG_REF.close();
    initGallery();
  }

  if ( event.target == DIALOG_ARROW_LEFT) {
    DIALOG_ID--;
    if (DIALOG_ID < 1) {
      DIALOG_ID = ALL_PHOTOS.length;
    }
    renderDialog(DIALOG_ID);
  } else if (event.target == DIALOG_ARROW_RIGHT) {
    DIALOG_ID++;
    if (DIALOG_ID > ALL_PHOTOS.length) {
      DIALOG_ID = 1;
    }
    renderDialog(DIALOG_ID);
  }
});

DIALOG_REF.addEventListener("keydown", (event) => {
  if (event.key == "ArrowLeft") {
    DIALOG_ID--;
    if (DIALOG_ID < 1) {
      DIALOG_ID = ALL_PHOTOS.length;
    }
  } else if (event.key == "ArrowRight") {
    DIALOG_ID++;
    if (DIALOG_ID > ALL_PHOTOS.length) {
      DIALOG_ID = 1;
    }
  }
  renderDialog(DIALOG_ID);
});

function toggleFav(index = DIALOG_INDEX) {
  ALL_PHOTOS[index].favorite = !ALL_PHOTOS[index].favorite;
  setFavDialog(ALL_PHOTOS[index].favorite);
}

function setFavDialog(photoBOOL) {
  if (photoBOOL) {
    DIALOG_FAV_ICON.classList.add("fav-fill");
    DIALOG_FAV_ICON.classList.remove("fav-unfill");
  } else {
    DIALOG_FAV_ICON.classList.add("fav-unfill");
    DIALOG_FAV_ICON.classList.remove("fav-fill");
  }
}