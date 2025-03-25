const elementsOpenDropdown = document.getElementById('el-product');
const elementsDropdownlist = document.getElementById('el-header-dropdown');

elementsOpenDropdown.addEventListener('click', (event) => {
    event.stopPropagation(); 
    if (elementsDropdownlist.style.display === 'block') {
        elementsDropdownlist.style.display = 'none'; 
    } else {
        elementsDropdownlist.style.display = 'block'; 
    }
});

document.addEventListener('click', () => {
    elementsDropdownlist.style.display = 'none'; 
});