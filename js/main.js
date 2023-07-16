function devShow() {
    obj = document.querySelector('.portfolio__dev');
    add = document.querySelector('.portfolio__dev-box');
    sec = document.querySelector('.portfolio__design');
    rep = document.querySelector('.portfolio__design-box');

    if(obj) {
        if(sec.style.opacity == '1') {
            sec.style.opacity = '0';
            sec.style.height = '0';
            sec.style.transitionDuration = 'top 1s, ease-out 1s;';
            rep.style.display = 'none';            
        }
        if(obj.style.opacity == '0') {
            obj.style.opacity = '1';
            obj.style.height = 'auto';
            obj.style.transitionDuration = 'top 1s, ease-out 1s;';
            add.style.display = '';
        } 
        else {
            obj.style.opacity = '0';
            obj.style.height = '0';
            obj.style.transitionDuration = 'top 1s, ease-out 1s;';
            add.style.display = 'none';
        }
    }
}

function desShow() {
    obj = document.querySelector('.portfolio__design');
    add = document.querySelector('.portfolio__design-box');
    sec = document.querySelector('.portfolio__dev');
    rep = document.querySelector('.portfolio__dev-box');

    if(obj) {
        if(sec.style.opacity == '1') {
            sec.style.opacity = '0';
            sec.style.height = '0';
            sec.style.transitionDuration = 'top 1s, ease-out 1s;';
            rep.style.display = 'none';            
        }
        if(obj.style.opacity == '0') {
            obj.style.opacity = '1';
            obj.style.height = 'auto';
            obj.style.transitionDuration = 'top 1s, ease-out 1s;';
            add.style.display = '';
        } 
        else {
            obj.style.opacity = '0';
            obj.style.height = '0';
            obj.style.transitionDuration = 'top 1s, ease-out 1s;';
            add.style.display = 'none';
        }
    }
}