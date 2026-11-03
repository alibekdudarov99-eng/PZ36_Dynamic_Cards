document.addEventListener('DOMContentLoaded', () => {
    
    const cardForm = document.querySelector('.card-form');
    const cardList = document.querySelector('.card-list');

    
    function createCard(titleText) {
        
        const li = document.createElement('li');
        li.classList.add('item-card');
        li.setAttribute('data-card', '');

        
        const span = document.createElement('span');
        span.textContent = titleText;
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn'); 
        deleteBtn.textContent = 'Удалить';
        li.appendChild(span);
        li.appendChild(deleteBtn);

        return li;
    }
    if (cardForm) {
        cardForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            const input = cardForm.querySelector('input[type="text"]');
            if (!input) return;

            const textValue = input.value.trim();

            if (textValue !== '') {
                const newCard = createCard(textValue);
                cardList.appendChild(newCard);
                input.value = '';
            }
        });
    }
    if (cardList) {
        cardList.addEventListener('click', (event) => {
            const target = event.target;
            const isDeleteButton = target.closest('.delete-btn') || target.tagName === 'BUTTON'; 
            
            if (isDeleteButton) {
                const card = target.closest('.item-card');
                if (card) {
                    card.remove(); 
                }
                return;
            }
            const card = target.closest('.item-card');
            if (card) {
                card.classList.toggle('is-active');
            }
        });
    }
    if (cardList) {
        const testCard1 = createCard('Тестовая карточка 1');
        const testCard2 = createCard('Тестовая карточка 2');
        cardList.appendChild(testCard1);
        cardList.appendChild(testCard2);
    }
});
