document.addEventListener('DOMContentLoaded', () => {
    const currencySelect = document.getElementById('currency');
    const currencySymbols = document.querySelectorAll('.currency-symbol');

    currencySelect.addEventListener('change', (e) => {
        const selectedCurrency = e.target.value;
        currencySymbols.forEach(symbol => {
            symbol.textContent = selectedCurrency;
        });
    });
});
