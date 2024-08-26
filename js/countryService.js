'use strict'

function getCountryByName(code, cb) {
    const cacheKey = 'countryCache'
    const cache = JSON.parse(localStorage.getItem(cacheKey)) || {}

    if (cache[code]) {
        console.log('Returning data from cache')
        cb(cache[code])
    } else {
        $.ajax({
            url: `https://restcountries.com/v3.1/name/${code}`,
            method: 'GET',
            success: function (data) {
                cache[name] = data[0]
                localStorage.setItem(cacheKey, JSON.stringify(cache))
                cb(data[0])
            },
            error: function () {
                cb(null)
            }
        })
    }
}

function clearCache() {
    localStorage.removeItem('countryCache')
    alert('Cache cleared')
}