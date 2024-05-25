document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('apiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
  });
});
