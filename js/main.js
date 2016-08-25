$(document).ready(function() {
	menu();
	web_page();
});

function menu(){
      $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: true 
    });
      $('.collapsible').collapsible();

    $("#slide-out ul li").on("click",function(){
        var setScroll = $(this).attr("data-scroll");
        $("body").animate({ scrollLeft: $("#"+setScroll).offset().left-250},2000);
    });

}
function web_page(){
    $('.carousel.carousel-slider').carousel({full_width: true});
    $("#catalogo a div").on('mouseenter', function(){
        addClass('hover-pro');
    });
    var producto1 = Vue.extend({
        template:  
        '<div id="set" class="col s12 m7 producto-detalle">'+
        '<div class="card horizontal">'+
        '<div class="card-image">'+
        '<img src="img/productos/producto-1.png" alt="">'+
        '</div>'+
        '<div class="card-stacked">'+
        '<div class="card-content">'+
        '<h5>Hyundai Tucson</h5>'+
        '<div class="divider red"></div>'+
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'+
        '</div>'+
        '<div class="card-action">'+
        '<a class="waves-effect waves-light btn red">Rentar</a>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'
    })
    var producto2 = Vue.extend({
        template:  
        '<div class="col s12 m7 producto-detalle">'+
        '<div class="card horizontal">'+
        '<div class="card-image">'+
        '<img src="img/productos/producto-1.png" alt="">'+
        '</div>'+
        '<div class="card-stacked">'+
        '<div class="card-content">'+
        '<h5>Toyota Racer</h5>'+
        '<div class="divider red"></div>'+
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'+
        '</div>'+
        '<div class="card-action">'+
        '<a class="waves-effect waves-light btn red">Rentar</a>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'
    })

    Vue.use(VueRouter)
    var router = new VueRouter({
        history: false,
        root: '/producto1'
    })
    router.map({
        '/producto1': {
            component: producto1
        }
    });
    router.map({
        '/producto2': {
            component: producto2
        }
    });
    var App = Vue.extend()
    router.start(App, '#app');
}
