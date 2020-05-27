"use strict";
window.addEventListener("DOMContentLoaded", function() {
//SCROLL
    function scrollToForm (anchor, form) {
        var anchors = document.querySelectorAll(anchor);
    
        for (var i = 0; i < anchors.length; i++) {
            anchors[i].addEventListener('click', function(e) {
                e.preventDefault();
                    
                document.querySelector(form).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
    }
//PACK PRICES
    function packPrice () {
        var input = document.querySelector('.order__packs'),
            priceText = document.querySelector('.prices__text');

        input.addEventListener('change', function() {
            if (this.value == '1') {
                priceText.textContent = '1 PAKOVANJE = ' + document.querySelector('.pack1').innerHTML;
            } else if (this.value == '2') {
                priceText.textContent = '2 PAKOVANJE = ' + document.querySelector('.pack2').innerHTML;
            } else if (this.value == '3') {
                priceText.textContent = '3 PAKOVANJE = ' + document.querySelector('.pack3').innerHTML;
            }
        });
    } 

    scrollToForm('a', 'form');
    packPrice();
});