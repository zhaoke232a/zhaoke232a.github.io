$(".nav li").click(function(){
			var ind =$(this).index();
			$(".box div").eq(ind)
					.css("display","block")
					.siblings()
					.css("display","none");
		})
