// Toggle Dropdown Visibility
document.querySelector('.dropdown-btn').addEventListener('click', () => {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});
