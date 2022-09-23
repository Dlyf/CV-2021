// Créer un document html contenant:
// - 1 input de type texte permattent de saisir un caractère
// - 1 menu de sélection, permettant de sélectionner une des options suivantes: 10,50,100,200,500,10000
// - 1 bouton
// - 1 div vide

// Au clic sur le bouton, la valeur saisie dans l'input texte sera reproduite dans le div autant de fois que la valeur sélectionnée dans le
// champ de sélection
 // DOM targetting
// let inputText        = document.querySelector('#inputText');
//  let selectNum       = document.querySelector('#selectNum');
//  let btnOk           = document.querySelector('#btnOk');
//  let divResultat     = document.querySelector('#divResultat');


//  // Events
//  function SelectNombreText() {
//     divResultat.innerText = ''; // clear input
//     let concat = '';
//     let nb = parseInt(selectNum.value.trim());
//     for (i = 1; i <= nb; i++) {
//         concat += i+"." + inputText.value + '\n';
//     }
//      divResultat.innerText = concat;
//  }

//  btnOk.addEventListener('click', SelectNombreText);

const ajoutElement = document.querySelector('#boutonAjouter');
const h1Element = document.querySelector('#headOne');
// const liElement = document.querySelector('#list');

// h1Element.contentEditable = ""
if (h1Element != h1Element.contentEditable) {

    h1Element.innerText="Bonjour";
} else {
    h1Element.innerText="test";
}

// let testCss = liElement.style.textDecorationLine ="line-through";


function liElement() {
    const li = document.createElement("li");
    li.textContent = "Nouvel élément li";
    liElement.append(li);
}

ajoutElement.addEventListener('click', liElement);