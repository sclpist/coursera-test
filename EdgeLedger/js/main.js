function initMap() {
    const loc = {lat: 33.892166, lng: 9.561555499999997};
    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom:14,
        center: loc
    });
    const marker = new google.maps.Marker({ position: loc,map:map});
}
$('#navbar a, .btn').on('click',function(event){
    if (this.hash !=='') {
        event.preventDefault();
        const hash = this.hash;
        $('html,body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});