const form = document.querySelector('#myForm');
const table = document.querySelector('#myTable');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  table.innerHTML = '';
  for (let [key, value] of formData.entries()) {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.innerText = key;
    cell2.innerText = value;
  }
  table.style.display = 'flex';
  table.style.border = 'none';
});