document.getElementById('ticket-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('passenger-name').value;
  const km = parseInt(document.getElementById('kilometers').value, 10);
  const ageGroup = document.getElementById('age-group').value;

  // Base price per km
  const pricePerKm = 0.21;
  let discountType = 'Standard';
  let discount = 0;

  if (ageGroup === 'minor') {
    discount = 0.2;
    discountType = 'Minor';
  } else if (ageGroup === 'senior') {
    discount = 0.4;
    discountType = 'Senior';
  }

  let fullPrice = km * pricePerKm;
  fullPrice = fullPrice - (fullPrice * discount);

  // Random wagon (1-10)
  const wagon = Math.floor(Math.random() * 10) + 1;
  // Random cp_code (90000-99000)
  const cpCode = Math.floor(Math.random() * (99000 - 90000 + 1)) + 90000;

  // Update ticket card
  document.getElementById('card-passenger-name').textContent = name;
  document.getElementById('card-full-price').textContent = fullPrice.toFixed(2) + ' €';
  document.getElementById('card-wagon').textContent = wagon;
  document.getElementById('card-cp-code').textContent = cpCode;
  document.getElementById('card-discount-type').textContent = discountType;

  document.getElementById('ticket-card').classList.remove('hidden');
});

document.getElementById('reset-btn').addEventListener('click', function () {
  // Reset form fields
  document.getElementById('ticket-form').reset();

  // Clear ticket card values
  document.getElementById('card-passenger-name').textContent = '';
  document.getElementById('card-full-price').textContent = '';
  document.getElementById('card-wagon').textContent = '';
  document.getElementById('card-cp-code').textContent = '';
  document.getElementById('card-discount-type').textContent = '';

  // Hide ticket card
  document.getElementById('ticket-card').classList.add('hidden');
});