import './styles.css';

const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__button');
const reloadButton = document.querySelector('.reload-button');

const url = new URL(window.location.href);
const currentId = url.searchParams.get('id');
console.log(currentId);

let searchId;
searchInput.oninput = () => {
  searchId = searchInput.value;
}
searchButton.onclick = () => {
  console.log(searchId);
}

reloadButton.onclick = () => {
  window.location.reload();
}

