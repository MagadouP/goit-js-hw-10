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
}