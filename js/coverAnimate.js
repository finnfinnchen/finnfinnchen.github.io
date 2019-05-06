
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

preloadImage(["sprites.png"], function() {
    document.getElementById('gka').className += " animation"
}, "img/")
