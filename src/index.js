import {fetchCountries} from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('#country-list');
const countryInfo = document.querySelector('#country-info');
const container = document.querySelector('.container');

function clearContainer() {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
}

function showCountryList(countries) {
    clearContainer();
    if (countries.length > 10) {
        Notiflix.Notify.info('Too many matches. Please try a more specified name.');
        return;
    }
    countries.forEach(country => {
        const listItem = document.createComment('li');
        const flag = document.createElement('img');
        flag.src - country.flags.svg;
        flag.alt - `${country.name.common} flag`;
        flag.classList.add('country-flag');
        const name = document.createElement('h1');
        name.classList.add('country-name');
        name.textContent = country.name.common;
        listItem.appendChild(flag);
        listItem.appendChild(name);
        countryList.appendChild(listItem);
    });
}
