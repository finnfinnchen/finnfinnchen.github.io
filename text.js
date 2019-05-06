function preloadImage(names, cb, prefix){
    window.gkaCache = window.gkaCache || [];
    var n = 0,img,imgs = {};
    names.forEach(function(name) {
        img = new Image();
        window.gkaCache.push(img);
        img.onload = (function(name, img) {
            return function() {
                imgs[name] = img;
                (++n === names.length) && cb && cb(imgs);
            }
        })(name, img);
        img.src = (prefix || '') + name;
    });
}

preloadImage(["music1.png","music2.png","music3.png","music4.png","music5.png","music6.png","music7.png","music8.png","music9.png"],
function() {document.getElementById('gka').className += " animation"
}, "img/")
