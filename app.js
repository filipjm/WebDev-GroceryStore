const sections=document.querySelectorAll('section');
const scroll = document.querySelector('.scroll');
const gradients = ['linear-gradient(to right top, #f46b45,#eea849)',
                'linear-gradient(to right top, #005c97,#363795)',
                'linear-gradient(to right top, #e53935,#e35d5b)',
                'linear-gradient(to right top, #84dbeb,#0bafe0)'];

const options={
    threshold: 0.5
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry=>{
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if(entry.isIntersecting){
            scroll.style.setProperty('left',`${directions.left}px`);
            scroll.style.setProperty('top',`${directions.top}px`);
            scroll.style.setProperty('width',`${directions.width}px`);
            scroll.style.setProperty('height',`${directions.height}px`);
            scroll.style.background = gradients[gradientIndex];
        }
    });
}

sections.forEach(section => {
    observer.observe(section)
});