const workerForm = document.getElementById('workerForm');
const workersList = document.getElementById('workersList');
const summary = document.getElementById('summary');
const departments = {
  IT: 0,
  Marketing: 0,
  Ventas: 0,
  Administración: 0
};

workerForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const correo = document.getElementById('correo').value;
  const departamento = document.getElementById('departamento').value;

  const worker = { nombre, apellido, correo, departamento };
  const listItem = document.createElement('li');
  listItem.classList.add('list-group-item');
  listItem.textContent = `${nombre} ${apellido}`;

  workersList.appendChild(listItem);

  departments[departamento]++;

  updateSummary();

  workerForm.reset();
});

function updateSummary() {
  let summaryText = '';
  for (const dept in departments) {
    summaryText += `${dept}: ${departments[dept]} `;
  }
  summary.textContent = summaryText;
}
