// Sample users data with coordinates
const users = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1-555-0101",
    city: "New York",
    lat: "-37.3159",
    long: "81.1496"
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@email.com",
    phone: "+1-555-0102",
    city: "Los Angeles",
    lat: "34.0522",
    long: "-118.2437"
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.j@email.com",
    phone: "+1-555-0103",
    city: "Chicago",
    lat: "41.8781",
    long: "-87.6298"
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah.w@email.com",
    phone: "+1-555-0104",
    city: "Houston",
    lat: "29.7604",
    long: "-95.3698"
  },
  {
    id: 5,
    name: "David Brown",
    email: "david.b@email.com",
    phone: "+1-555-0105",
    city: "Phoenix",
    lat: "33.4484",
    long: "-112.0742"
  }
];

let currentMap = null;

// Populate the users table
function populateUsersTable() {
  const tableBody = document.getElementById('usersTableBody');
  tableBody.innerHTML = '';

  users.forEach(user => {
    const row = document.createElement('tr');
    row.className = 'border-b border-gray-200 hover:bg-gray-50 transition';
    
    row.innerHTML = `
      <td class="px-6 py-4 text-gray-800">${user.id}</td>
      <td class="px-6 py-4 text-gray-800">${user.name}</td>
      <td class="px-6 py-4 text-gray-800">${user.email}</td>
      <td class="px-6 py-4 text-gray-800">${user.phone}</td>
      <td class="px-6 py-4 text-gray-800">${user.city}</td>
      <td class="px-6 py-4">
        <button onclick="openLocationModal(${user.id})" class="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 transition">
          <i class="fas fa-map-marker-alt"></i>
          View Map
        </button>
      </td>
    `;
    
    tableBody.appendChild(row);
  });
}

// Open location modal and show map
function openLocationModal(userId) {
  const user = users.find(u => u.id === userId);
  
  if (!user) return;

  const modal = document.getElementById('locationModal');
  const modalTitle = document.getElementById('modalTitle');
  const coordsDisplay = document.getElementById('coordsDisplay');
  
  modalTitle.textContent = `${user.name}'s Location`;
  coordsDisplay.textContent = `Latitude: ${user.lat}, Longitude: ${user.long}`;
  
  modal.classList.remove('hidden');

  // Initialize or update map
  setTimeout(() => {
    initializeMap(user);
  }, 100);
}

// Close location modal
function closeLocationModal() {
  const modal = document.getElementById('locationModal');
  modal.classList.add('hidden');
  
  // Destroy map instance to prevent memory leak
  if (currentMap) {
    currentMap.remove();
    currentMap = null;
  }
}

// Initialize Leaflet map
function initializeMap(user) {
  const mapContainer = document.getElementById('map');
  
  // Remove existing map if it exists
  if (currentMap) {
    currentMap.remove();
  }

  const lat = parseFloat(user.lat);
  const lng = parseFloat(user.long);

  // Create new map
  currentMap = L.map(mapContainer).setView([lat, lng], 13);

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(currentMap);

  // Add marker for user's location
  L.marker([lat, lng])
    .addTo(currentMap)
    .bindPopup(`<div class="font-semibold">${user.name}</div><div class="text-sm text-gray-600">${user.city}</div>`)
    .openPopup();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  populateUsersTable();
});

// Close modal when clicking outside
document.getElementById('locationModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeLocationModal();
  }
});
