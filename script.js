$('.js-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding:7,
    margin:20,
    animateOut:'fadeOut',
    animateIn:'fadeIn',
    autoplayHoverPause:true,
    items:4,
})

function changeBorder(){
    document.getElementById("navbar").style.borderRadius = "0px";
}

function membersUpdate(val){
    // alert(val)
    document.getElementById('members').value = val; 
}

function comingSoon(){
    $('#exampleModalCenter').modal('show');
}