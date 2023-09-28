const topButton = documnet.getElementById('backToTopBtn');
window.onscroll = fuction() {
    scrollFunction();
};
function scrollFunction(){
    if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}
topButton.addEventListener('click',function () {
window.scrollTo({top:0,behavior:'smooth'});
});
    
