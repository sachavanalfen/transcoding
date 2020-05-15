const leftCol = document.querySelectorAll('.scrolling-pane1')[0];

leftCol.addEventListener("scroll", function(){
    currentScrollPos = leftCol.scrollTop;
    
    // console.log(currentScrollingDiv);
    document.querySelectorAll('.scrolling-pane2')[0].scrollTop = currentScrollPos;
});

const rightCol = document.querySelectorAll('.scrolling-pane2')[0];

rightCol.addEventListener("scroll", function(){
    currentScrollPos = rightCol.scrollTop;

    // console.log(currentScrollPos);
    document.querySelectorAll('.scrolling-pane1')[0].scrollTop = currentScrollPos;
});
