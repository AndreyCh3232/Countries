'use strict'

function onGetCountryInfo(event) {
    event.preventDefault()
    const countryName = $('#country-input').val().trim()

    if (countryName) {
        $('#loader').show()
        getCountryByName(countryName, function (country) {
            $('#loader').hide()
            if (country) {
                renderInfo(country)
            } else {
                $('#country-info').text('Country not found.')
            }
        })
    } else {
        alert('Please enter a country name.')
    }
}

function renderInfo(country) {
    $('#country-name').text(`Name: ${country.name.common}`)
    $('#country-flag').attr('src', country.flags.png).show()
    $('#country-population').text(`Population: ${country.population.toLocaleString()}`)
    $('#country-area').text(`Area: ${country.area.toLocaleString()} km²`)

    const latlng = country.latlng
    const mapUrl = `https://www.google.com/maps?q=${latlng[0]},${latlng[1]}`
    $('#country-map-link').attr('href', mapUrl).show()
}

$(document).ready(function () {
    $('#country-form').on('submit', onGetCountryInfo)
    $('#clear-cache-button').on('click', clearCache)
})
