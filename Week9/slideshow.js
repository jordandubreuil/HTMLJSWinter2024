window.onload = function(){
    document.querySelector('h1').innerHTML = "Page Loaded";
    var image = 0;
    var images = [
        "Tony_Soprano_Season_1.webp",
        "Christopher_Moltisanti.webp",
        "PaulieWalnuts.webp",
        "Silvio1.webp"
    ];
    var btn = document.querySelector('#slideshow-button');

    function changeImage(){
        btn.removeEventListener('click', changeImage);
        image++;
        document.querySelector('#site-image').src = `images/${images[image]}`;

        if(image >= images.length){
            image = 0;
            document.querySelector('#site-image').src = `images/${images[image]}`;
        }
        setTimeout(changeImage, 2000);
    }

    btn.addEventListener('click',
        changeImage
    );
}