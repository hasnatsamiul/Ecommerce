const header2 = document.getElementsByClassName('header-class2');

for (const header of header2) {
    header.style.color = 'red';

}

const backpacks = document.getElementById('Backpack');
backpacks.style.backgroundColor = 'tomato';


const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}



const deleteButton = document.getElementsByClassName('m-3');
for (const m3 of deleteButton) {
    m3.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);

    })

}

