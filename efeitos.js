$(document).ready(function(){

	$("#logotipo").on("mouseover",function(){

		$("#banner h1").addClass("efeito");
				
	}).on("mouseout", function(){

		$("#banner h1").removeClass("efeito");

	});

	$(".thumbnails").owlCarousel({
		loop:true,
		margin:10,
		//nav:true,
		//navText: ["Anterior","Próximo"],
		responsiveClass:true,
		responsive :{
		0 :{	
		item:1,
		nav:true
		},
		480 :{
		item:3,
		nav:true
		},
		1000 :{
		item:4,
		nav:true
		}
		}
	});	


});
