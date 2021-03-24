document.addEventListener('DOMContentLoaded', function() {

var gallery = document.getElementById('gallery');

fetch("/js/gallery.json")


.then(function(res) {
  res.json().then(function(json) {
    json.forEach(function(el) {
      var galleryItem = document.createElement('a');
      galleryItem.setAttribute('class', 'gallery-item');
      galleryItem.setAttribute('src', el.location);
      galleryItem.setAttribute('target', '_blank');
      var image = document.createElement('img');
      image.setAttribute('src', el.location);
      image.setAttribute('title', el.caption);  

      var caption = document.createElement('caption');
      
      caption.innerText = el.caption;

      galleryItem.appendChild(image);
      galleryItem.appendChild(caption);
      

      gallery.appendChild(galleryItem);
    });
  });
});

});