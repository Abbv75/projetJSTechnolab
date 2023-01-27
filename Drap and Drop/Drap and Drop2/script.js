// on a vas cree une variable
let itemSrc = null;
function drag(event){
    itemSrc = event.target.src; // le "src" est cellui a l'interieur de l'image
    // cella va faire apparaiter les bordures au moment du depot de l'image
    document.querySelector('.graphic').classList.add('drag');
}
function drop(event){
    // le role de cette fonction serai de depot de l'image sur le carre
    var img = document.createElement('img');
    img.src = itemSrc;
    // ce code permet au image de s'echange dans le carre
    document.querySelector('.graphic').innerHTML = '';
    // faire pose les images sur le Tsirt
    document.querySelector('.graphic').appendChild(img);
    // centre l'image a l'interieur l'interieur du carre
    document.querySelector('.graphic').classList.remove('drag');
}
// cette fonction permetra de faire difile(deplase) l'image selectionne
function allowDrop(event){
    event.preventDefault();
}