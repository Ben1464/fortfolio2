function toggleDarkMode(){
    const body = document.body;
    if(body.getAttribute('data-theme')==='dark'){
        body.removeAttribute('data-theme');
    } else {
        body.removeAttribute('data-theme','dark');
    }
}
    
