require([
	'jquery',
	'Vue',
	'vendor/common.js',
	'plugins/layer/layer.js',
], function($, Vue, common, layer) {

	var article_id = common.getUrlData('article_id');
	var reward_no = new Vue({
		el: '#user-reward-no',
		data: {
			info: {},
			article_id: article_id
		},
		ready: function() {
			common.globalAjax({
				action: 'Incentive.GetExcludeDatas',
				done: function(res) {
					//获取数据
					reward_no.$set('info', res.data.info);
					$('.root').show();
				},
				fail: function(res){
					//404显示
					var html_404 = '<p class="tipinfo"><img src="/dist/images/indexImg/404_03.jpg" alt="404"><span>无法打开页面~</span></p>';
					$('#user-reward-no').hide();
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
		}
	})

})