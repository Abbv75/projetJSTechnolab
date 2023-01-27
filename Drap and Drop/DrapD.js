/* on cree d'abord des varriables*/
const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')
/* Nous allons donnes  une action a l'intervale de chaque fonction */
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)
/* ont lance une boucle le role de cette boucle serait de calcule le drop de l'image a chaque intervale des fonctions*/
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}
    /* on a cree des fonction pour les differente taches au click*/
function dragStart() {
                /* cella s'applique au champ de l'image ou qui contient l'image*/
    /* rendre flexibe l'image partous dans la page*/
    this.className += ' hold' 
    /* si l'image est deplace se code permetera de fair disparaitre l'image dans le champ precedent*/
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    /* le retoure de l'image au champ precedent meme si deplace*/
    this.className = 'fill'
}

function dragOver(e) {
    /* force l'image a se pose dans une autre champ*/
    e.preventDefault()
}

function dragEnter(e) {
    /* cella va applique la propriete hovered css au cham selection*/
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    /* il va applique le hovered css au champ dons l'image vas se pose*/
    this.className = 'empty'
}

function dragDrop() {
    /* retourne l'image s'ils n'est pas bien positionne dans autres champ*/
    this.className = 'empty'
    this.append(fill)
}