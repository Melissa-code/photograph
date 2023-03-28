
const weddingList = document.getElementById('wedding-list'); 
const pregnantList = document.getElementById('pregnant-list'); 

const weddingPhotos = document.querySelectorAll('.img-wedding');
const pregnantPhotos = document.querySelectorAll('.img-pregnant');
const babyPhotos = document.querySelectorAll('.img-baby');
const couplePhotos = document.querySelectorAll('.img-couple');
const baptismPhotos = document.querySelectorAll('.img-baptism');
const familyPhotos = document.querySelectorAll('.img-family ');
const portraitPhotos = document.querySelectorAll('.img-portrait');

const notWeddingPhotos = [pregnantPhotos, babyPhotos, couplePhotos, baptismPhotos, familyPhotos, portraitPhotos]; 
const notPregnantPhotos = [weddingPhotos, babyPhotos, couplePhotos, baptismPhotos, familyPhotos, portraitPhotos]; 
const notBabyPhotos = [pregnantPhotos, weddingPhotos, couplePhotos, baptismPhotos, familyPhotos, portraitPhotos]; 
const notCouplePhotos = [pregnantPhotos, babyPhotos, weddingPhotos, baptismPhotos, familyPhotos, portraitPhotos]; 
const notBaptismPhotos = [pregnantPhotos, babyPhotos, couplePhotos, weddingPhotos, familyPhotos, portraitPhotos]; 
const notFamilyPhotos = [pregnantPhotos, babyPhotos, couplePhotos, baptismPhotos, weddingPhotos, portraitPhotos]; 
const notPortraitPhotos = [pregnantPhotos, babyPhotos, couplePhotos, baptismPhotos, familyPhotos, weddingPhotos]; 

/**
 * Display the images of a category only
 */
function showWedding(elements, othersElements) {
    let othersPhotos = [pregnantPhotos, babyPhotos, couplePhotos]; 
    for(let i = 0; i < elements.length; i++) {
        // Display the photos of a category 
        weddingList.insertBefore(elements[i], weddingList.firstElementChild); 
        elements[i].style.display = "inline-block"; 

        // Not display the photos of the others categories 
        for(let i = 0; i < othersElements.length; i++) {
            for(let j = 0; j < pregnantPhotos.length; j++) {
                pregnantPhotos[j].style.display = "none"; 
            }
            for(let j = 0; j < pregnantPhotos.length; j++) {
                babyPhotos[j].style.display = "none"; 
            }
            for(let j = 0; j < pregnantPhotos.length; j++) {
                couplePhotos[j].style.display = "none"; 
            }
            for(let j = 0; j < pregnantPhotos.length; j++) {
                baptismPhotos[j].style.display = "none"; 
            }
            for(let j = 0; j < pregnantPhotos.length; j++) {
                familyPhotos[j].style.display = "none"; 
            }
            for(let j = 0; j < pregnantPhotos.length; j++) {
                portraitPhotos[j].style.display = "none"; 
            }
        }
    }
}

/**
 * Click events listeners 
 */
function setPhotosInPage() {
    // Click on the wedding button 
    document.querySelector('#wedding').addEventListener('click', (e) => {
        e.preventDefault();
        showWedding(weddingPhotos, notWeddingPhotos);
        //console.log('test: ça marche!'); 
    })
}

/**
 * Fetch request 
 * 
 */
function getPhotos() {
    let currentUrl = document.location.href; 
    //console.log(currentUrl); 

    if(currentUrl === '') {
        fetch('')
            //.then(res => console.log(res))
            //.then(setPhotosInPage())
    } else {
        fetch('http://127.0.0.1:5500/gallery.html')
            .then(res => console.log(res))
            .then(setPhotosInPage())
    }
}

/**
 * Browser loads the HTML content (page & photos) event listener
 * 
 */
window.addEventListener("DOMContentLoaded", ()=> {
    getPhotos();
})