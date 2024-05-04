function menuop(){
    document.querySelector('.navbar_phone_right_menu').style="right:0px;"
    document.querySelector('body').style = 'overflow-y: hidden;'
}
function menucl(){
    document.querySelector('.navbar_phone_right_menu').style="right:-550px !important;"
    document.querySelector('body').style = 'overflow-y: scroll;'
}


function productdesc(){
    document.querySelector('.produce_page_description_text').style='display:flex'
    document.querySelector('.product_page_description_menu_title').style='opacity: 1;'
    document.querySelector('.product_page_description_menu_title2').style='opacity: 0.5;'
    document.querySelector('.produce_page_description_text2').style='display:none'
}
function productharakt(){
    document.querySelector('.product_page_description_menu_title2').style='opacity: 1;'
    document.querySelector('.product_page_description_menu_title').style='opacity: 0.5;'
    document.querySelector('.produce_page_description_text').style='display:none'
    document.querySelector('.produce_page_description_text2').style='display:flex'
}


function filterop(){
    document.querySelector('.filterkotalog_filter').style='top:0px'
}
function filtercl(){
    document.querySelector('.filterkotalog_filter').style='top:-675550px'
}



const sliderValue = document.querySelector('.sliderValue_span');
const inputSlide = document.querySelector('.field_inp');
inputSlide.oninput = (()=>{
    let value = inputSlide.value;
    sliderValue.textContent = value;
    sliderValue.style.left = (value/2) + '%';
    sliderValue.classList.add('show');
});
inputSlide.onblur = (()=>{
    sliderValue.classList.remove('show')
})
