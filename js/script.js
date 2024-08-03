function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(inputValue)) {
        alert('Please enter a valid number.');
        return;
    }

    // Conversion rates relative to pixels (assuming base font size of 16px for em and rem)
    const conversionRates = {
        px: 1,
        em: 16,
        rem: 16,
        vw: window.innerWidth / 100,
        vh: window.innerHeight / 100,
        percent: 1 // Percentage doesn't have a direct conversion without context, handled separately
    };

    let valueInPx;
    if (inputUnit === 'percent') {
        valueInPx = inputValue;
    } else {
        valueInPx = inputValue * conversionRates[inputUnit];
    }

    let convertedValue;
    if (outputUnit === 'percent') {
        convertedValue = valueInPx;
    } else {
        convertedValue = valueInPx / conversionRates[outputUnit];
    }

    document.getElementById('result').textContent = `${inputValue}${inputUnit} = ${convertedValue}${outputUnit}`;
}

function resetFields() {
    document.getElementById('inputValue').value = '';
    document.getElementById('inputUnit').selectedIndex = 0;
    document.getElementById('outputUnit').selectedIndex = 0;
    document.getElementById('result').textContent = '';
}
