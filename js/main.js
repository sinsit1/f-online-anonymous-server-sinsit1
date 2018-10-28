'use strict';

var menuButton = document.querySelector('.nav-trigger');
var closeButton = document.querySelector('.nav-close');
var navigation = document.querySelector('.nav');

    navigation.classList.add('hidden');
    navigation.classList.remove('nav');

function openNavigation() {
        navigation.classList.remove('hidden');
        navigation.classList.add('nav');
        menuButton.classList.add('hidden');

        
}

function closeNavigation() {
    navigation.classList.add('hidden');
    navigation.classList.remove('nav');
    menuButton.classList.remove('hidden');
}

menuButton.addEventListener('click', openNavigation);
closeButton.addEventListener('click', closeNavigation);