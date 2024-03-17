let phoneInput = document.querySelector('input[type="tel"]');

phoneInput.addEventListener('input', function (event) {
    let cleaned = event.target.value.replace(/\D/g, '');
    let formatted = cleaned.replace(/(\d{1})?(\d{3})?(\d{3})?(\d{2})?(\d{2})?/, '+7 ($2) $3-$4-$5');
    event.target.value = formatted;
});