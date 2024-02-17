document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('.navbar__link__dropdown');
    const navbarDropDowns = document.querySelectorAll('.navbar__dropdown');
    let timeoutId;

    const navbarSearchButton = document.querySelector('.navbar__search__link');
    const navbarCartButton = document.querySelector('.navbar__cart__link');
    const navbarSidebarButton = document.querySelector('.navbar__sidebar__link');

    const navbarSearch = document.querySelector('.navbar__search');
    const navbarCart = document.querySelector('.navbar__cart');
    const navbarSidebar = document.querySelector('.navbar__sidebar');
    const navbarSidebarX = document.querySelector('.navbar__sidebar__x');

    const navbarHamburgerButton = document.querySelector('.navbar__hamburger__button');
    const navbarLinksWrapper = document.querySelector('.navbar__links__wrapper');

    const navbarDropdownButtons = document.querySelectorAll('.navbar__dropdown__button');

    function mouseEnterHandler() {
        navbarDropDowns.forEach(dropdown => {
            if(dropdown.classList.contains('active')){
                dropdown.classList.remove('active');
            }
        });
        const dropdown = this.parentElement.querySelector('.navbar__dropdown');
        if (dropdown) {
            clearTimeout(timeoutId); 
            dropdown.classList.add('active');
        }
    }

    function mouseLeaveHandler() {
        const dropdown = this.parentElement.querySelector('.navbar__dropdown');
        if (dropdown) {
            timeoutId = setTimeout(() => {
                dropdown.classList.remove('active');
            }, 200);
        }
    }

    function setupHoverEffect() {
        navbarLinks.forEach(function(link) {
            link.addEventListener('mouseenter', mouseEnterHandler);
            link.addEventListener('mouseleave', mouseLeaveHandler);
        });
    }

    function removeHoverEffect() {
        navbarLinks.forEach(function(link) {
            link.removeEventListener('mouseenter', mouseEnterHandler);
            link.removeEventListener('mouseleave', mouseLeaveHandler);
        });

        if(navbarSearch.classList.contains('active')){
            navbarSearch.classList.remove('active');
        }

        if(navbarCart.classList.contains('active')){
            navbarCart.classList.remove('active');
        }

        if(navbarSidebar.classList.contains('active')){
            navbarSidebar.classList.remove('active');
        }
    }

    function handleWindowResize() {
        if (window.innerWidth > 990) {
            setupHoverEffect();
        } else if (window.innerWidth <= 990) {
            removeHoverEffect();
        }
    }

    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    navbarCartButton.addEventListener('click', () => {
        if(navbarCart.classList.contains('active')){
            navbarCart.classList.remove('active');
        }else{
            navbarCart.classList.add('active');
        }
    });

    navbarSearch.addEventListener('click', (e) => {
        if(e.target == navbarSearch){
            navbarSearch.classList.remove('active');
        }
    });

    navbarSearchButton.addEventListener('click', () => {
        if(navbarSearch.classList.contains('active')){
            navbarSearch.classList.remove('active');
        }else{
            navbarSearch.classList.add('active');
        }
    });

    navbarSidebarButton.addEventListener('click', () => {
        if(navbarSidebar.classList.contains('active')){
            navbarSidebar.classList.remove('active');
        }else{
            navbarSidebar.classList.add('active');
        }
    });

    navbarSidebarX.addEventListener('click', () => {
        navbarSidebar.classList.remove('active');
    });

    navbarHamburgerButton.addEventListener('click', () => {
        if(navbarLinksWrapper.classList.contains('active')){
            navbarLinksWrapper.classList.remove('active');
        }else{
            navbarLinksWrapper.classList.add('active');
        }
    })

    navbarDropdownButtons.forEach(function(dropdownButton) {
        const dropdown = dropdownButton.parentElement.querySelector('.navbar__dropdown');
        dropdownButton.addEventListener('click', () => {
            if(dropdown.classList.contains('active')){
                dropdown.classList.remove('active');
                dropdownButton.classList.remove('active');
            }else{
                dropdown.classList.add('active');
                dropdownButton.classList.add('active');
            }
        });
    });
});
