export function headerDropdownOpen() {
    const openDropdown = document.getElementById('product');
    const dropdownlist = document.getElementById('header-dropdown');

    openDropdown.addEventListener('click', (event) => {
        event.stopPropagation(); 
        if (dropdownlist.style.display === 'block') {
            dropdownlist.style.display = 'none'; 
        } else {
            dropdownlist.style.display = 'block'; 
        }
    });

    document.addEventListener('click', () => {
        dropdownlist.style.display = 'none'; 
    });
}