document.addEventListener('DOMContentLoaded', () => {
    const shopSelection = document.querySelector('.shop__selection');
    const shopSelectionButton = document.querySelector('.shop__selection__button');
    shopSelectionButton.addEventListener('click', () => {
        if(shopSelection.classList.contains('active')){
            shopSelection.classList.remove('active');
            shopSelectionButton.classList.remove('active');
        }else{
            shopSelection.classList.add('active');
            shopSelectionButton.classList.add('active');
        }
    });
})