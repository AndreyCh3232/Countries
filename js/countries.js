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
    const country = data[0]
    const countryInfo = `
        Name: ${country.name.common}
        Capital: ${country.capital}
        Region: ${country.region}
        Population: ${country.population.toLocaleString()}
        Area: ${country.area.toLocaleString()} km²
    `
    $('#country-info').text(countryInfo)
}

$(document).ready(function () {
    $('#get-info-button').on('click', onGetCountryInfo)
})
