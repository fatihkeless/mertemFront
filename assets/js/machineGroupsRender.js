// Render machine groups into the homepage section
(function renderMachineGroups() {
  var grid = document.getElementById('machineGroupsGrid');
  if (!grid || !Array.isArray(window.MACHINE_GROUPS)) return;

  var fragment = document.createDocumentFragment();

  window.MACHINE_GROUPS.forEach(function (group) {
    var card = document.createElement('div');
    card.className = 'service-card';

    var icon = document.createElement('div');
    icon.className = 'service-icon';
    icon.innerHTML = '<i class="fas fa-cog"></i>';

    var title = document.createElement('h4');
    title.textContent = group.title;

    card.appendChild(icon);
    card.appendChild(title);

    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
})();

