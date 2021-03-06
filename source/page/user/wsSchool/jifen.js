require([
	'jquery',
	'Vue',
	'vendor/common.js',
	'lib/cookie',
], function($, Vue, common, cookie) {

	var jifen = new Vue({
		el: '#js-jifen',
		data: {
			info: {}
		},
		ready: function() {
			common.globalAjax({
				action: 'Agency.ScoreLevel',
				done: function(res) {
					jifen.$set('info', res.data.info);
					$('.root').show();
					if(common.checkAPP == 'miyan'){
                        window.location.href = "callApp://truth_complete";
                    }
				},
				fail: function(res){
					//404显示
					var html_404 = '<p class="tipinfo"><img src="/dist/images/indexImg/404_03.jpg" alt="404"><span>无法打开页面!</span></p>';
					$('#js-jifen').hide();
					$('body').append(html_404);
					$("html,body").css('height', '100%');
	                $("body").css({
	                    display: 'table',
	                    width: '100%',
	                    background: '#f5f5f5'
	                });
	                $(".tipinfo").css('display', 'table-cell');
				}
			})
		},
		watch: {
			'info': function(val){
				this.$nextTick(function(){
				})
			}
		},
		methods: {
		}
	})

})