require([
	'jquery',
	'Vue',
	'vendor/common.js',
	'plugins/layer/layer.js',
	'lib/jquery.lazyload.js',
], function($, Vue, common, layer, lazyload) {
    var type = common.getUrlData('type');
	if (type == 0) {
		$('#order-list-nav ul li:nth-child(1)').addClass('on');
		$('#order-list-nav ul li:nth-child(1) a').attr('href', 'javascript:;');
	}else if (type == 1) {
		$('#order-list-nav ul li:nth-child(2)').addClass('on');
		$('#order-list-nav ul li:nth-child(2) a').attr('href', 'javascript:;');
	}else if (type == 2) {
		$('#order-list-nav ul li:nth-child(3)').addClass('on');
		$('#order-list-nav ul li:nth-child(3) a').attr('href', 'javascript:;');
	}else if (type == 3) {
		$('#order-list-nav ul li:nth-child(4)').addClass('on');
		$('#order-list-nav ul li:nth-child(4) a').attr('href', 'javascript:;');
	}
	var list_data = [];
	var new_data,data_new = [];
	var nextPage = 1;
    var flag = 2;
	function getMoreRecru(flag) {
    	common.globalAjax({
			action: 'Order.GetOrderListData',
			data: {
				type: type,
				p: flag
			},
			done: function(res) {
				new_data = res.data.info;
				var list_length = new_data.length;
				var data_new = list_data.concat(new_data);
				list_data = data_new;
				//获取数据显示
				$('#masker').hide();
				$('.root').show();
				if(common.checkAPP == 'miyan'){
	                window.location.href = "callApp://truth_complete";
	            }
                //加载更多
                $('.gengduo-ajax').show();
                order_list.$set('info', data_new);
				if (list_length>0) {
					nextPage += 1;
					if(list_length<1){
						$(".gengduo-ajax i").hide();
                        $('#loading').html('没有更多内容了...');
                        nextPage +=1;
                    }else{
                        $("#loading").text('上拉加载更多...');
                    };
				}else{
					$(".gengduo-ajax i").hide();
                    $('#loading').html('没有更多内容了...');
                    nextPage +=2;
				}
			},
			fail: function(res){
				//404显示
				if(res.ret == 200){
					if(res.data.code == 1){
						$('#masker').hide();
						$('.root,.order-no-list').show();
						$("html,body").css('height', '100%');
						$("body").css({
		                    background: '#f5f5f5'
		                });
					}
				}else{
					var html_404 = '<p class="tipinfo"><img src="/dist/images/indexImg/404_03.jpg" alt="404"><span>无法打开页面!</span></p>';
					$('#masker').hide();
					$('body').append(html_404);
					$("html,body").css('height', '100%');
	                $("body").css({
	                    display: 'table',
	                    width: '100%',
	                    background: '#f5f5f5'
	                });
	                $(".tipinfo").css('display', 'table-cell');
				}
			}
		})
    }

    var click_num = 1;
	var order_list = new Vue({
		el: '#order-list',
		data: {
			info: []
		},
		ready: function() {
			getMoreRecru(1);
		},
		watch: {
			'info': function(val){
				this.$nextTick(function(){
					$('img.lz').lazyload();
				})
				$(window).scroll(function() {
		            var scrollTop = $(this).scrollTop();//获取滚动条高度
		            var scrollHeight = $(document).height();//获取内容高度
		            var windowHeight = $(this).height();//获取窗口高度
		            var scrollBot = scrollHeight - scrollTop - windowHeight;//滚动条距离底部的高度
		            if (scrollBot<5) {
		                if(flag==nextPage){
		                    flag++;
		                    $("#loading").html('正在加载中...');
		                    $(".gengduo-ajax").show();
		                    $(".gengduo-ajax i").css('display', 'inline');
		                    getMoreRecru(nextPage);

		                }
		            }
		        });
			}
		},
		methods: {
			surePay: function(id,$index) {
				event.preventDefault();
				layer.open({
                    content: '确认要收货吗？',
                    btn: ['确认', '取消'],
                    no: function(index){
                        layer.close(index);
                    },
                    yes: function(index){
                    	common.globalAjax({
							action: 'Order.DeliveryConfirm',
							data: {
								oid: id
							},
							done: function(res) {
								layer.open({
									content: '确认收货成功！',
									skin: 'msg',
    								time: 1.5
								});
								click_num += 1;
								if(type == 0){
									$('.order-lists:nth-child('+$index+') .order-list-header .left').text('交易完成');
									$('.order-lists:nth-child('+$index+') .order-list-cont-button').remove();
								}else{
									$('.order-lists:nth-child('+$index+')').hide();
								}
							},
							fail: function(res){
								layer.open({
									content: '确认收货失败！',
									skin: 'msg',
    								time: 1.5
								})
							}
						})
                    }
                });
			}
		}
	})

})