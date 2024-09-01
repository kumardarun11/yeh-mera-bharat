function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const destination = document.getElementById('destination').value;
  const date = document.getElementById('date').value;
  if (name === "" || email === "" || destination === "" || date === "") {
    alert("Please fill in all the fields.");
    return false;
  }
  alert(`Thank you, ${name}! Your trip to ${destination} on ${date} is being planned.`);
  document.getElementById('travelForm').reset();

  return true; 
}
document.querySelector('.cta-button').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('#form-section').scrollIntoView({ behavior: 'smooth' });
});
