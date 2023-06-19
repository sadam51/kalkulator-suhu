document.addEventListener('DOMContentLoaded', function () {
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit');
    const convertButton = document.getElementById('convert-button');
    const resetButton = document.getElementById('reset-button');
    const resultDiv = document.getElementById('result');
    const explanationDiv = document.getElementById('explanation');

    convertButton.addEventListener('click', function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;

        if (unit === 'celsius') {
            const convertedTemperature = (temperature * 9/5) + 32;
            resultDiv.textContent = `${temperature} derajat Celcius = ${convertedTemperature} derajat Fahrenheit.`;
            explanationDiv.innerHTML = `
                <strong>Penjelasan :</strong>
                <p>Untuk mengonversi suhu dari Celcius ke Fahrenheit, kita harus mengalikan suhu dalam Celcius dengan 9/5, kemudian tambahkan 32.</p>
                <p>Rumus : (suhu * 9/5) + 32</p>
            `;
        } else if (unit === 'fahrenheit') {
            const convertedTemperature = (temperature - 32) * 5/9;
            resultDiv.textContent = `${temperature} derajat Fahrenheit = ${convertedTemperature} derajat Celcius.`;
            explanationDiv.innerHTML = `
                <strong>Penjelasan :</strong>
                <p>Untuk mengonversi suhu dari Fahrenheit ke Celcius, kita harus mengurangi suhu dalam Fahrenheit dengan 32, kemudian kalikan dengan 5/9.</p>
                <p>Rumus : (suhu - 32) * 5/9</p>
            `;
        }

        temperatureInput.value = '';
    });

    resetButton.addEventListener('click', function () {
        temperatureInput.value = '';
        unitSelect.value = 'celsius';
        resultDiv.textContent = '';
        explanationDiv.innerHTML = '';
    });
});
