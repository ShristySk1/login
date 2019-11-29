
		$(document).ready(function(){	

	$('.arrow-up').click(function(){
		if($('#a-up').hasClass("arrow-up") && $('#a-down').hasClass("arrow-up"))  {
		
//$(".arrow-up").toggleClass('arrow-downn');
			$(".form-bottom").css({
transform:"translate(0%,-77%)"
				});
		$(".form-top").css({
transform:"translate(0%,-85%)"
				});
				$(".google").css({
					color:"crimson",
					backgroundColor:"white",
					borderColor:"white"

				});
					$(".facebook").css({
					color:"midnightblue",
					backgroundColor:"white",
					borderColor:"white"

				});
	$("#a-up").removeClass("arrow-up").addClass("arrow-downn");
	$("#a-down").removeClass("arrow-up").addClass("arrow-downn");
		}
		else{
		

				$(".form-top").css({
transform:"translate(0%,0%)"
				});
			$(".form-bottom").css({
transform:"translate(0%,0%)"
				});
				$(".google").css({
					color:"white",
					backgroundColor:"crimson",
					borderColor:"crimson"

				});
					$(".facebook").css({
					color:"white",
					backgroundColor:"midnightblue",
					borderColor:"midnightblue"

				});
			
	$("#a-up").removeClass("arrow-down").addClass("arrow-up");
	$("#a-down").removeClass("arrow-down").addClass("arrow-up");
			
		}
	

		});
			$("#sign-up").click(function(){
		
				$(".form-bottom").css({
transform:"translate(0%,-77%)"
				});
		$(".form-top").css({
transform:"translate(0%,-85%)"
				});
				$(".google").css({
					color:"crimson",
					backgroundColor:"white",
					borderColor:"white"

				});
					$(".facebook").css({
					color:"midnightblue",
					backgroundColor:"white",
					borderColor:"white"

				});
	$("#a-up").removeClass("arrow-up").addClass("arrow-downn");
	$("#a-down").removeClass("arrow-up").addClass("arrow-downn");
			});
	
		});