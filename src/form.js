export const BASE_PRICE = 30;

export const getPrice = (params = {}) => {
    let price = BASE_PRICE;
    if (params.breakfast) {
        price += 40;
    }
    if (params.lunch) {
        price += 80;
    }
    return price;
}

const onCheckboxToggle = checkbox => {
    const form = checkbox.closest('.form');
    const priceElement = form.querySelector('.form__price');
    const lunch = form.elements.lunch.checked;
    const breakfast = form.elements.breakfast.checked;

    const data = {
        lunch,
        breakfast
    }
    
    const price = getPrice(data);

    priceElement.textContent = price;
}

export const initForm = () => {
    document.addEventListener('click', e => {
        const checkbox = e.target.closest('.checkbox__input');

        if (checkbox) {
            onCheckboxToggle(checkbox);
        }
    });
};