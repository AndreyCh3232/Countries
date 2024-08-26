'use strict'

function onGetCountryInfo() {
    const countryName = $('#country-input').val().trim()
    if (countryName) {
        $.ajax({
            url: `https://restcountries.com/v3.1/name/${countryName}`,
            method: 'GET',
            success: function (data) {
                renderInfo(data);
            },
            error: function () {
                $('#country-info').text('Country not found.')
            }
        })
    } else {
        alert('Please enter a country name.')
    }
}

function renderInfo(data) {
    console.log('Rendering...')
}