const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

// form event listener
searchForm.addEventListener('submit', e => {
    // get search term
    const searchTerm = searchInput.value;
    // get sort
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    // get limit
    const searchLimit = document.getElementById('limit').value;

    // check input
    if (searchTerm === '') {
        showMessage('Please add a search term', 'alert-danger');
    }

    e.preventDefault();
});

