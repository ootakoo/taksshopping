/* jquery.tabs.js - jQuery 탭 플러그인, 2012 © yamoo9.com

	옵션
	start_index: 시작 인덱스 설정,
	random: 랜덤 인덱스 설정,
	transition_time: 장면 전환 시간 설정 (밀리초, 1/1000초)
---------------------------------------------------------------- */
var socket = io.socket();
jQuery(function($) {
	$('#item_detail').hide();
	$('.item_list li').click(function(){
		$('#item_detail').show();
		
		return false;
	});

	$('#close_btn').click(function(){
		$('#item_detail').hide();
		$('body').css({'overflow-y':'scroll'});

		return false;
	});
	$('.btn').click(function(){
		$('#item_detail').hide();
		$('body').css({'overflow-y':'scroll'});
		return false;
	});



	$('#tab_design').menu({
		start_index: 2,
		random: true,
		transition_time: 200
	});
	
	$('#tab_wrap').tabs({
		start_index: 2,
		random: true,
		transition_time: 200
	});
	
	/* ///////////////////////////////////////////////////
		IE 9 이하 브라우저를 위한 PIE 라이브러리 활용.
		border-radius | box-shadow | linear-gradient
	/////////////////////////////////////////////////// */			
	if($.browser.msie && $.browser.version < 10) {
		$.getScript('include/js/libs/PIE.min.js', function() {
			var target = $.browser.version <= 6 ? '.tab_contents' : '.tab_menu a, .tab_contents';
			$(target).each(function() { PIE.attach(this); });
		});
	};
	
});


;(function($) { 
	$.fn.menu = function(options) {
		
		// 옵션 설정.
		options = $.extend({
			start_index: 1,
			random: false,
			transitions_time: 400
		}, options);
		
		// jQuery 체인.
		return this.each(function() {
			
			// 대상 참조.
			var $this = $(this),
				$left_menu = $this.find('.left_menu'),
				$left_menu_li = $left_menu.find('li'),
				$left_menu_a = $left_menu_li.find('a'),
				$contents = $this.find('.tab_contents');
				
				
			// 처음 보여질 탭 설정.
			$left_menu.add($contents)
				.find('li:nth-child(1)').addClass('active');
			
			
		
			
			// opacity 미지원 브라우저에 적용.
			
			
			// $menu 내부의 a 클릭 시 이벤트 핸들링
			$left_menu_a.click(function(e) {
			
				// 대상 참조.
				var $this = $(this),
					target = $this.attr('href');
					
					
				// 활성화된 a 클릭 시, 작동하지 않도록 설정.
	 			if($this.parent().hasClass('active')) return;
	 			
	 			// $menu_link에서 active 클래스 제거
				$left_menu_li.removeClass('active');
				
				// 클릭한 a의 부모 li에 active 클래스 추가
				$this.parent().addClass('active');
				
				// opacity 미지원 브라우저에 적용.	
			
				// 부드러운 장면전환.
				$contents.find('li')
					.fadeTo(options.transition_time, 0, function() {
						$(this).removeClass('active')
							.filter(target).addClass('active').fadeTo(options.transition_time, 1);
				});
			
				// 브라우저 링크 기본 동작 차단
				e.preventDefault();
			});
			
		}); // end: return
	
		
		
	}; //end: plug-in
})(jQuery);


;(function($) { 
	$.fn.tabs = function(options) {
		
		// 옵션 설정.
		options = $.extend({
			start_index: 1,
			random: false,
			transitions_time: 400
		}, options);
		
		// jQuery 체인.
		return this.each(function() {
			
			// 대상 참조.
			var $this = $(this),
			$tab_nav= $this.find('#tab_nav'),
			$tab_nav_li= $this.find('li'),
			$tab_nav_a= $this.find('a');
			
			$tab_contents=$this.parent().find('.tab_contents');
			
			$tab_nav.find('li:nth-child(1)').addClass('active');
			$tab_contents.find('.item_list').addClass('active');
			
			// opacity 미지원 브라우저에 적용.
		
			$tab_nav_a.click(function(e){
				var $this = $(this);
				target = $this.attr('href');
				
				
			// 활성화된 a 클릭 시, 작동하지 않도록 설정.
 			if($this.parent().hasClass('active')) return;
 			
 			// $menu_link에서 active 클래스 제거
 			$tab_nav_li.removeClass('active');
			$tab_contents.find('li').removeClass('active');
			 
			// 클릭한 a의 부모 li에 active 클래스 추가
			$this.parent().addClass('active');
			if($this.parent().hasClass("item")){
				$tab_contents.find(".item_list").addClass('active');
			}
			else if($this.parent().hasClass("login")){
				$tab_contents.find(".login").addClass('active');
			}
			else {
				$tab_contents.find(".shoppingCart").addClass('active');
			}
			
			
				
			// 활성화된 a 클릭 시, 작동하지 않도록 설정.
			
			e.preventDefault();
			});
			
		}); // end: return
	}; //end: plug-in
})(jQuery);







