import {fetchCountries} from './fetchCountries';
import debounce from 'loadash.debounce';
import Notiflix from 'notiflix';

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('#country-list');
const countryInfo = document.querySelector('#country-info');
const container = document.querySelector('.container');


