import '@/sass/app.scss'

import $ from 'jquery';
import initMenuFunctions from "./menus";
import initSliders from './sliders';
import initUtilities from './utils';
import initAnimations from './animation';
import initBestsellers from './bestsellers';
import initSuggestions from './suggestions';
import initHeader from './headers';
import initFilter from './filters';
import initSticky from './sticky';
import vueApp from './vueApp';

$(document).ready(function () {

    // initialize menu functions
    initMenuFunctions();

    // initialize slider carousels
    initSliders();

    // initialize the utility functions
    initUtilities();

    // initialize the animation functions
    initAnimations();

    // initialize the bestsellers
    initBestsellers()

    // initialize the suggestions
    initSuggestions()

    // initialize the header
    initHeader()

    // initialize the filter
    initFilter()

    // initialize the vue app
    vueApp()

    // initialize sticky sidebar
    initSticky()
})