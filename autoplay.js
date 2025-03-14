document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("videoFrame");

    
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) { 
                video.src += "&autoplay=1";
                observer.disconnect(); 
            }
        });
    }, { threshold: 0.5 }); 

    observer.observe(video);
});

