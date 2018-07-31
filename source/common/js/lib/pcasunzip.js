
/* PCAS (Province City Area Selector 省、市、地区联动选择JS封装类) Ver 2.02 完整版 *\

　制作时间:2005-12-30
　更新时间:2006-01-24
　数据修正:2016-07-25（截止2016年07月26日）---修正人：王立峰

　演示地址:http://www.popub.net/script/pcasunzip.html
　下载地址:http://www.popub.net/script/pcasunzip.js
　应用说明:页面包含<script type="text/javascript" src="pcasunzip.js" charset="gb2312"></script>
	省市联动
		new PCAS("Province","City")
		new PCAS("Province","City","吉林省")
		new PCAS("Province","City","吉林省","吉林市")
	省市地区联动
		new PCAS("Province","City","Area")
		new PCAS("Province","City","Area","吉林省")
		new PCAS("Province","City","Area","吉林省","松原市")
		new PCAS("Province","City","Area","吉林省","松原市","宁江区")
	省、市、地区对象取得的值均为实际值。
	注：省、市、地区提示信息选项的值为""(空字符串)

\*** 程序制作/版权所有:崔永祥(333) E-Mail:zhadan007@21cn.com 网址:http://www.popub.net ***/


SPT="--请选择省份--";
SCT="--请选择城市--";
SAT="--请选择地区--";
ShowT=1;		//提示文字 0:不显示 1:显示
PCAD="上海市$上海市,黄浦区,徐汇区,长宁区,静安区,闸北区,虹口区,杨浦区,宝山区,闵行区,嘉定区,浦东新区,青浦区,松江区,金山区,奉贤区,普陀区,崇明县#云南省$昆明市,东川区,安宁市,富民县,嵩明县,晋宁县,宜良县,禄劝彝族苗族自治县,石林彝族自治县,寻甸回族彝族自治县,盘龙区,五华区,官渡区,西山区,呈贡区|曲靖市,马龙县,宣威市,富源县,会泽县,陆良县,师宗县,罗平县,沾益县,麒麟区|玉溪市,红塔区,华宁县,澄江县,易门县,通海县,江川县,元江哈尼族彝族傣族自治县,新平彝族傣族自治县,峨山彝族自治县|昭通市,昭阳区,镇雄县,永善县,大关县,盐津县,彝良县,水富县,巧家县,威信县,鲁甸县,绥江县|普洱市,思茅区,宁洱哈尼族彝族自治县,景东彝族自治县,镇沅彝族哈尼族拉祜族自治县,景谷傣族彝族自治县,墨江哈尼族自治县,澜沧拉祜族自治县,西盟佤族自治县,江城哈尼族彝族自治县,孟连傣族拉祜族佤族自治县|临沧市,临翔区,镇康县,凤庆县,云县,永德县,耿马傣族佤族自治县,双江拉祜族佤族布朗族傣族自治县,沧源佤族自治县|保山市,隆阳区,施甸县,昌宁县,龙陵县,腾冲县|丽江市,玉龙纳西族自治县,华坪县,永胜县,古城区|文山壮族苗族自治州,文山市,麻栗坡县,砚山县,广南县,马关县,富宁县,西畴县,丘北县|红河哈尼族彝族自治州,个旧市,开远市,弥勒市,红河县,绿春县,蒙自市,泸西县,建水县,元阳县,石屏县,金平苗族瑶族傣族自治县,屏边苗族自治县,河口瑶族自治县|西双版纳傣族自治州,景洪市,勐海县,勐腊县|楚雄彝族自治州,元谋县,南华县,牟定县,武定县,大姚县,双柏县,禄丰县,永仁县,姚安县,楚雄市|大理白族自治州,剑川县,弥渡县,云龙县,洱源县,鹤庆县,宾川县,祥云县,永平县,巍山彝族回族自治县,漾濞彝族自治县,南涧彝族自治县,大理市|德宏傣族景颇族自治州,芒市,瑞丽市,盈江县,梁河县,陇川县|怒江傈僳族自治州,泸水县,福贡县,兰坪白族普米族自治县,贡山独龙族怒族自治县|迪庆藏族自治州,香格里拉市,德钦县,维西傈僳族自治县#内蒙古自治区$呼和浩特市,土默特左旗,和林格尔县,武川县,托克托县,清水河县,玉泉区,赛罕区,回民区,新城区|包头市,固阳县,土默特右旗,达茂联合旗,石拐区,白云矿区,东河区,九原区,青山区,昆都仑区|乌海市,海勃湾区,海南区,乌达区|赤峰市,宁城县,敖汉旗,喀喇沁旗,翁牛特旗,巴林右旗,林西县,克什克腾旗,巴林左旗,阿鲁科尔沁旗,元宝山区,松山区,红山区|乌兰察布市,集宁区,丰镇市,兴和县,卓资县,商都县,凉城县,化德县,察哈尔右翼前旗,察哈尔右翼中旗,察哈尔右翼后旗,四子王旗|锡林郭勒盟,锡林浩特市,二连浩特市,多伦县,阿巴嘎旗,西乌珠穆沁旗,东乌珠穆沁旗,苏尼特右旗,苏尼特左旗,太仆寺旗,正镶白旗,正蓝旗,镶黄旗|呼伦贝尔市,海拉尔区,满洲里市,牙克石市,扎兰屯市,根河市,额尔古纳市,陈巴尔虎旗,阿荣旗,新巴尔虎左旗,新巴尔虎右旗,鄂伦春旗,莫力达瓦旗,鄂温克族旗|鄂尔多斯市,东胜区,准格尔旗,伊金霍洛旗,乌审旗,杭锦旗,鄂托克旗,鄂托克前旗,达拉特旗,康巴什新区|巴彦淖尔市,临河区,五原县,磴口县,杭锦后旗,乌拉特中旗,乌拉特后旗 ,乌拉特前旗|阿拉善盟,阿拉善右旗,阿拉善左旗,额济纳旗|兴安盟,乌兰浩特市,阿尔山市,突泉县,扎赉特旗,科尔沁右翼前旗,科尔沁右翼中旗|通辽市,霍林郭勒市,开鲁县,库伦旗,奈曼旗,扎鲁特旗,科尔沁左翼中旗,科尔沁左翼后旗,科尔沁区#北京市$北京市,朝阳区,海淀区,西城区,东城区,崇文区,宣武区,丰台区,石景山区,门头沟,房山区,通州区,大兴区,顺义区,怀柔区,密云区,昌平区,平谷区,延庆县#吉林省$长春市,榆树市,九台市,农安县,德惠市,双阳区,朝阳区,南关区,宽城区,二道区,绿园区,净月区,汽车产业开发区,高新技术开发区,经济技术开发区|吉林市,舒兰市,桦甸市,蛟河市,磐石市,永吉县,昌邑区,龙潭区,船营区,丰满区|四平市,公主岭市,双辽市,梨树县,伊通县,铁东区,铁西区|通化市,梅河口市,集安市,通化县,辉南县,柳河县,二道江区,东昌区|白山市,临江市,江源区,靖宇县,抚松县,长白县,浑江区|松原市,乾安县,长岭县,扶余县,宁江区,前郭县|白城市,大安市,洮南市,通榆县,镇赉县,洮北区|延边朝鲜族自治州,图们市,敦化市,珲春市,龙井市,和龙市,汪清县,安图县,延吉市|辽源市,龙山区,西安区,东丰县,东辽县#四川省$成都市,高新西区,新都区,温江区,龙泉驿区,青白江区,彭州市,崇州市,邛崃市,都江堰市,郫县,新津县,双流县,大邑县,蒲江县,金堂县,青羊区,锦江区,金牛区,武侯区,成华区,高新区|自贡市,荣县,富顺县,自流井区,沿滩区,大安区,贡井区|攀枝花市,米易县,盐边县,仁和区,西区,东区|泸州市,泸县,合江县,叙永县,古蔺县,纳溪区,江阳区,龙马潭区|绵阳市,盐亭县,三台县,平武县,北川羌族自治县,安县,梓潼县,江油市,涪城区,游仙区,高新区,经开区|德阳市,罗江县,中江县,广汉市,什邡市,旌阳区,绵竹市|广元市,青川县,旺苍县,剑阁县,苍溪县,昭化区,朝天区,利州区|遂宁市,射洪县,蓬溪县,大英县,安居区,船山区|内江市,资中县,隆昌县,威远县,市中区,东兴区|乐山市,五通桥区,沙湾区,金口河区,夹江县,井研县,犍为县,沐川县,峨边彝族自治县,马边彝族自治县,市中区,峨眉山市|宜宾市,宜宾县,南溪区,江安县,长宁县,兴文县,珙县,高县,屏山县,筠连县,翠屏区|广安市,岳池县,武胜县,邻水县,广安区,华蓥市,前锋区|南充市,仪陇县,蓬安县,营山县,南部县,顺庆区,高坪区,嘉陵区,西充县,阆中市|达州市,通川区,达县,大竹县,渠县,万源市,宣汉县,开江县|巴中市,南江县,平昌县,通江县,巴州区,恩阳区|雅安市,芦山县,石棉县,名山区,天全县,荥经县,汉源县,宝兴县,雨城区|眉山市,仁寿县,彭山县,洪雅县,丹棱县,青神县,东坡区|资阳市,安岳县,乐至县,雁江区,简阳市|阿坝藏族羌族自治州,马尔康县,九寨沟县,红原县,阿坝县,理县,若尔盖县,金川县,小金县,黑水县,松潘县,壤塘县,茂县,汶川县|甘孜藏族自治州,康定县,泸定县,九龙县,丹巴县,道孚县,炉霍县,色达县,甘孜县,新龙县,白玉县,德格县,石渠县,雅江县,理塘县,巴塘县,稻城县,乡城县,得荣县|凉山彝族自治州,美姑县,昭觉县,会理县,会东县,普格县,宁南县,德昌县,冕宁县,盐源县,金阳县,布拖县,雷波县,越西县,喜德县,甘洛县,木里藏族自治县,西昌市#天津市$天津市,东丽区,和平区,河北区,河东区,河西区,红桥区,蓟县,静海县,南开区,塘沽区,西青区,武清区,津南区,汉沽区,大港区,北辰区,宝坻区,宁河县#宁夏回族自治区$银川市,灵武市,永宁县,贺兰县,兴庆区,金凤区,西夏区|石嘴山市,平罗县,惠农区,大武口区|吴忠市,青铜峡市,同心县,盐池县,红寺堡区,利通区|固原市,西吉县,隆德县,泾源县,彭阳县,原州区|中卫市,中宁县,海原县,沙坡头区#安徽省$铜陵市,铜官山区,郊区,狮子山区,铜陵县|合肥市,肥东县,庐江县,包河区,蜀山区,瑶海区,庐阳区,经济技术开发区,高新技术开发区,北城新区,滨湖新区,政务文化新区,新站综合开发试验区,肥西县,巢湖市,长丰县|淮南市,凤台县,田家庵区,大通区,谢家集区,八公山区,潘集区,淮南高新技术开发区|淮北市,杜集区,烈山区,濉溪县,相山区|芜湖市,芜湖县,繁昌县,南陵县,无为县,镜湖区,弋江区,鸠江区,三山区|蚌埠市,怀远县,固镇县,五河县,蚌山区,淮上区,龙子湖区,禹会区|马鞍山市,当涂县,含山县,和县,博望区,花山区,雨山区|安庆市,桐城市,宿松县,枞阳县,太湖县,怀宁县,岳西县,望江县,潜山县,开发区,大观区,宜秀区,迎江区|黄山市,休宁县,歙县,黟县,祁门县,黄山区,徽州区,屯溪区|滁州市,明光市,全椒县,来安县,定远县,凤阳县,南谯区,琅琊区,天长市|阜阳市,界首市,太和县,阜南县,颍上县,临泉县,经济开发区,颍泉区,颍州区,颍东区|亳州市,利辛县,蒙城县,涡阳县,谯城区|宿州市,灵璧县,泗县,萧县,砀山县,经济开发区,埇桥区|池州市,东至县,石台县,青阳县,贵池区|六安市,寿县,霍山县,金寨县,霍邱县,舒城县,金安区,裕安区|宣城市,泾县,旌德县,宁国市,郎溪县,广德县,绩溪县,宣州区#山东省$济南市,长清区,平阴县,济阳县,商河县,高新区,历城区,天桥区,槐荫区,历下区,市中区,章丘市|青岛市,莱西市,四方区,市北区,市南区,李沧区,黄岛区,即墨市,城阳区,崂山区,胶州市,平度市|淄博市,高青县,沂源县,桓台县,周村区,淄川区,博山区,临淄区,张店区|枣庄市,山亭区,台儿庄区,峄城区,薛城区,市中区,滕州市|东营市,河口区,广饶县,利津县,垦利县,东营区|潍坊市,青州市,诸城市,安丘市,高密市,昌邑市,昌乐县,临朐县,坊子区,潍城区,奎文区,高新区,寒亭区,寿光市|烟台市,莱阳市,招远市,蓬莱市,栖霞市,海阳市,长岛县,芝罘区,莱山区,福山区,牟平区,龙口市,莱州市,开发区|威海市,乳山市,环翠区,荣成市,文登市|莱芜市,莱城区,钢城区|德州市,乐陵市,禹城市,陵县,宁津县,武城县,庆云县,平原县,临邑县,夏津县,德城区,齐河县|临沂市,沂南县,沂水县,费县,平邑县,蒙阴县,临沭县,莒南县,郯城县,罗庄区,兰山区,河东区,兰陵县|聊城市,临清市,阳谷县,茌平县,莘县,东阿县,冠县,高唐县,东昌府区|滨州市,邹平县,沾化县,惠民县,博兴县,阳信县,无棣县,北海新区,滨城区|菏泽市,单县,曹县,定陶县,巨野县,成武县,东明县,郓城县,鄄城县,牡丹区|日照市,五莲县,莒县,岚山区,新市区,东港区|泰安市,东平县,宁阳县,岱岳区,泰山区,肥城市,新泰市|济宁市,梁山县,兖州市,微山县,汶上县,泗水县,嘉祥县,鱼台县,金乡县,任城区,邹城市,市中区,曲阜市,高新区#山西省$太原市,阳曲县,古交市,娄烦县,清徐县,小店区,迎泽区,晋源区,万柏林区,尖草坪区,杏花岭区|大同市,大同县,天镇县,灵丘县,阳高县,左云县,浑源县,广灵县,新荣区,南郊区,矿区,城区|阳泉市,盂县,平定县,郊区,矿区,城区|晋城市,高平市,阳城县,沁水县,陵川县,泽州县,城区|朔州市,山阴县,右玉县,应县,怀仁县,朔城区,平鲁区|晋中市,介休市,昔阳县,祁县,左权县,寿阳县,太谷县,和顺县,灵石县,平遥县,榆社县,榆次区|忻州市,原平市,代县,神池县,五寨县,五台县,偏关县,宁武县,静乐县,繁峙县,河曲县,保德县,定襄县,忻府区,岢岚县|吕梁市,离石区,孝义市,汾阳市,文水县,中阳县,兴县,临县,方山县,柳林县,岚县,交口县,交城县,石楼县|临汾市,侯马市,霍州市,汾西县,吉县,安泽县,浮山县,大宁县,古县,隰县,襄汾县,翼城县,永和县,乡宁县,洪洞县,蒲县,曲沃县,尧都区|运城市,河津市,永济市,新绛县,平陆县,垣曲县,绛县,稷山县,芮城县,夏县,临猗县,万荣县,闻喜县,盐湖区|长治市,长治县,潞城市,郊区,襄垣县,屯留县,平顺县,黎城县,壶关县,长子县,武乡县,沁县,沁源县,城区#广东省$广州市,天河区,海珠区,荔湾区,越秀区,番禺区,花都区,萝岗区,白云区,南沙区,黄埔区,增城市,从化市|深圳市,南山区,罗湖区,福田区,宝安区,光明新区,坪山新区,大鹏新区,龙岗区,盐田区,龙华新区|珠海市,斗门区,金湾区,香洲区|汕头市,南澳县,龙湖区,金平区,澄海区,潮阳区,潮南区,濠江区|韶关市,南雄市,乐昌市,仁化县,始兴县,翁源县,新丰县,乳源瑶族自治县,曲江区,武江区,浈江区|河源市,和平县,龙川县,紫金县,连平县,源城区,东源县|梅州市,兴宁市,梅县,蕉岭县,大埔县,丰顺县,五华县,平远县,梅江区|惠州市,龙门县,惠阳区,大亚湾区,惠城区,惠东县,博罗县|汕尾市,陆河县,海丰县,城区,陆丰市|东莞市,中堂镇,东坑镇,道滘镇,沙田镇,高埗镇,石龙镇,石排镇,企石镇,石碣镇,洪梅镇,麻涌镇,桥头镇,望牛墩镇,茶山镇,谢岗镇,松山湖,莞城区,南城街道,长安镇,寮步镇,大岭山镇,常平镇,厚街镇,万江区,樟木头镇,大朗镇,塘厦镇,凤岗镇,清溪镇,横沥镇,东城区,黄江镇,虎门镇|中山市,南朗镇,小榄镇,古镇,坦洲镇,黄圃镇,三乡镇,东凤镇,横栏镇,三角镇,南头镇,沙溪镇,五桂山镇,阜沙镇,东升镇,板芙镇,神湾镇,港口镇,大涌镇,火炬开发区,民众镇,沙朗镇,城区|江门市,台山市,新会区,鹤山市,江海区,蓬江区,开平市,恩平市|佛山市,顺德区,禅城区,高明区,三水区,南海区|阳江市,阳春市,阳西县,江城区,阳东县|湛江市,雷州市,吴川市,徐闻县,坡头区,赤坎区,霞山区,经济技术开发区,麻章区,遂溪县,廉江市|茂名市,信宜市,茂南区,电白县,高州市,化州市,茂港区|肇庆市,广宁县,德庆县,怀集县,封开县,鼎湖区,端州区,四会市,高要市|云浮市,云安区,新兴县,郁南县,云城区,罗定市|清远市,连州市,佛冈县,阳山县,清新区,连山县,连南瑶族自治县,清城区,英德市|潮州市,饶平县,枫溪区,湘桥区,潮安区|揭阳市,揭西县,惠来县,东山区,普宁市,榕城区,揭东县#广西壮族自治区$南宁市,武鸣县,邕宁区,宾阳县,横县,上林县,隆安县,马山县,良庆区,江南区,兴宁区,青秀区,西乡塘区|柳州市,柳江县,柳城县,鹿寨县,融安县,三江侗族自治县,融水苗族自治县,鱼峰区,城中区,柳南区,柳北区|桂林市,阳朔县,临桂,灵川县,全州县,平乐县,兴安县,灌阳县,荔浦县,资源县,永福县,龙胜各族自治县,恭城瑶族自治县,象山区,雁山区,秀峰区,叠彩区,七星区|梧州市,岑溪市,苍梧县,藤县,蒙山县,龙圩区,万秀区,蝶山区,长洲区|北海市,合浦县,铁山港区,海城区,银海区|防城港市,东兴市,上思县,防城区,港口区|钦州市,浦北县,灵山县,钦北区,钦南区|贵港市,桂平市,平南县,覃塘区,港南区,港北区|玉林市,北流市,容县,博白县,陆川县,兴业县,玉州区|贺州市,钟山县,昭平县,富川瑶族自治县,平桂管理区,八步区|百色市,右江区,平果县,乐业县,田阳县,西林县,田林县,德保县,靖西县,田东县,那坡县,隆林各族自治县,凌云县|河池市,宜州市,天峨县,凤山县,南丹县,东兰县,巴马瑶族自治县,环江毛南族自治县,罗城仫佬族自治县,大化瑶族自治县,都安瑶族自治县,金城江区|来宾市,兴宾区,合山市,忻城县,武宣县,象州县,金秀瑶族自治县|崇左市,江州区,凭祥市,扶绥县,大新县,天等县,宁明县,龙州县#新疆维吾尔自治区$乌鲁木齐市,乌鲁木齐县,头屯河区,东山区,达坂城区,米东区,天山区,新市区,沙依巴克区,水磨沟区|克拉玛依市,克拉玛依区,独山子区,白碱滩区,乌尔禾区|石河子市,石河子市|吐鲁番地区,吐鲁番市,托克逊县,鄯善县|哈密地区,哈密市,巴里坤哈萨克自治县,伊吾县|和田地区,和田市,墨玉县,洛浦县,策勒县,于田县,民丰县,皮山县|阿克苏地区,阿克苏市,温宿县,沙雅县,拜城县,阿瓦提县,库车县,柯坪县,新和县,乌什县|喀什地区,喀什市,巴楚县,泽普县,伽师县,叶城县,岳普湖县,疏附县,疏勒县,英吉沙县,麦盖提县,莎车县,塔什库尔干塔吉克自治县|克孜勒苏柯尔克孜自治州,阿图什市,阿合奇县,乌恰县,阿克陶县|巴音郭楞蒙古自治州,库尔勒市,尉犁县,和静县,博湖县,和硕县,轮台县,若羌县,且末县,焉耆回族自治县|昌吉回族自治州,昌吉市,阜康市,奇台县,玛纳斯县,吉木萨尔县,呼图壁县,木垒哈萨克自治县|博尔塔拉蒙古自治州,博乐市,精河县,温泉县|伊犁哈萨克自治州,伊宁市,特克斯县,尼勒克县,昭苏县,新源县,霍城县,察布查尔锡伯自治县,巩留县,奎屯市,伊宁县|塔城地区,塔城市,乌苏市,额敏县,裕民县,沙湾县,托里县,和布克赛尔蒙古自治县|阿勒泰地区,阿勒泰市,富蕴县,青河县,吉木乃县,布尔津县,福海县,哈巴河县,北屯市|五家渠市,五家渠市|阿拉尔市,阿拉尔市|图木舒克市,图木舒克市#江苏省$南京市,江宁区,高淳区,六合区,溧水区,玄武区,秦淮区,建邺区,鼓楼区,栖霞区,雨花台区,浦口区|徐州市,铜山区,睢宁县,沛县,丰县,贾汪区,金山桥开发区,铜山经济技术开发区,八段工业园区,鼓楼区,邳州市,泉山区,新沂市,云龙区|连云港市,赣榆县,灌云县,东海县,灌南县,连云区,海州区,新浦区|淮安市,楚州区,洪泽县,金湖县,盱眙县,经济开发区,清河区,淮阴区,清浦区,涟水县|宿迁市,宿豫区,泗洪县,宿城区,沭阳县,泗阳县,宿迁经济开发区|盐城市,东台市,大丰市,建湖县,响水县,阜宁县,滨海县,射阳县,亭湖区,盐都区|扬州市,广陵区,邗江区,宝应县,仪征市,高邮市,江都区|泰州市,泰兴市,靖江市,兴化市,高港区,海陵区,姜堰市|南通市,通州区,如东县,海安县,港闸区,崇川区,南通经济技术开发区,如皋市,海门市,启东市|镇江市,扬中市,丹徒区,润州区,京口区,镇江新区,丹阳市,句容市,丹徒新区|常州市,金坛市,溧阳市,新北区,戚墅堰区,钟楼区,天宁区,武进区|无锡市,崇安区,南长区,北塘区,锡山区,惠山区,新区,江阴市,宜兴市,滨湖区|苏州市,常熟市,张家港市,相城区,金阊区,虎丘区,平江区,沧浪区,工业园区,高新区,太仓市,吴江区,吴中区,昆山市#江西省$南昌市,南昌县,进贤县,安义县,新建县,湾里区,青云谱区,西湖区,东湖区,高新区,昌北区,青山湖区,红谷滩新区|景德镇市,乐平市,浮梁县,珠山区,昌江区|萍乡市,湘东区,莲花县,上栗县,芦溪县,安源区|新余市,分宜县,渝水区|九江市,九江县,瑞昌市,星子县,武宁县,彭泽县,永修县,修水县,湖口县,德安县,都昌县,共青城市,经济技术开发区,八里湖新区,庐山区,浔阳区|鹰潭市,余江县,月湖区,贵溪市|上饶市,德兴市,广丰县,鄱阳县,婺源县,余干县,横峰县,弋阳县,铅山县,玉山县,万年县,信州区,上饶县|宜春市,丰城市,樟树市,高安市,铜鼓县,靖安县,宜丰县,奉新县,万载县,上高县,袁州区|抚州市,南丰县,乐安县,金溪县,南城县,东乡县,资溪县,宜黄县,崇仁县,黎川县,广昌县,临川区|吉安市,井冈山市,吉安县,永丰县,永新县,新干县,泰和县,峡江县,遂川县,安福县,吉水县,万安县,青原区,吉州区|赣州市,南康市,瑞金市,石城县,安远县,赣县,宁都县,寻乌县,兴国县,定南县,上犹县,于都县,龙南县,崇义县,大余县,信丰县,全南县,会昌县,章贡区#河北省$石家庄市,辛集市,晋州市,新乐市,井陉县,栾城县,行唐县,灵寿县,高邑县,赵县,赞皇县,深泽县,无极县,元氏县,井陉矿区,平山县,藁城市,鹿泉市,正定县,新华区,桥西区,桥东区,裕华区,长安区|邯郸市,邯郸县,峰峰矿区,曲周县,馆陶县,魏县,成安县,大名县,涉县,鸡泽县,邱县,广平县,肥乡县,磁县,临漳县,永年县,丛台区,邯山区,复兴区,武安市|邢台市,邢台县,南宫市,沙河市,柏乡县,任县,清河县,隆尧县,临城县,广宗县,临西县,内丘县,平乡县,巨鹿县,新河县,南和县,宁晋县,威县,桥西区,桥东区|保定市,安国市,满城县,清苑县,涞水县,阜平县,定兴县,唐县,高阳县,容城县,涞源县,望都县,易县,曲阳县,蠡县,顺平县,博野县,雄县,新市区,北市区,南市区,安新县,涿州市,定州市,徐水县,高碑店市|张家口市,宣化县,康保县,张北县,阳原县,赤城县,怀安县,怀来县,崇礼县,尚义县,蔚县,涿鹿县,万全县,下花园区,沽源县,宣化区,桥西区,桥东区|承德市,兴隆县,平泉县,滦平县,丰宁满族自治县,围场满族蒙古族自治县,宽城满族自治县,隆化县,承德县,双滦区,鹰手营子矿区,双桥区|秦皇岛市,卢龙县,青龙满族自治县,昌黎县,北戴河区,抚宁县,海港区,山海关区|唐山市,遵化市,丰南区,迁西县,滦南县,玉田县,曹妃甸区,乐亭县,滦县,古冶区,开平区,路北区,路南区,迁安市,丰润区|沧州市,沧县,泊头市,河间市,献县,肃宁县,青县,东光县,吴桥县,南皮县,盐山县,海兴县,孟村回族自治县,运河区,新华区,任丘市,黄骅市|廊坊市,固安县,永清县,香河县,大城县,文安县,大厂回族自治县,安次区,广阳区,开发区,三河市,霸州市|衡水市,冀州市,深州市,饶阳县,枣强县,故城县,阜城县,安平县,武邑县,景县,武强县,桃城区#河南省$郑州市,新密市,登封市,上街区,惠济区,金水区,管城区,二七区,中原区,郑东新区,新郑市,巩义市,荥阳市,中牟县,经济开发区,高新技术开发区|开封市,开封县,杞县,兰考县,尉氏县,通许县,金明区,龙亭区,顺河回族区,鼓楼区,禹王台区|洛阳市,偃师市,孟津县,汝阳县,伊川县,洛宁县,宜阳县,栾川县,新安县,吉利区,涧西区,瀍河回族区,老城区,西工区,嵩县,伊滨区,洛龙区|平顶山市,汝州市,舞钢市,郏县,叶县,鲁山县,宝丰县,石龙区,湛河区,卫东区,新华区|焦作市,沁阳市,孟州市,修武县,温县,武陟县,博爱县,山阳区,解放区,马村区,中站区|鹤壁市,浚县,淇县,鹤山区,山城区,淇滨区|新乡市,卫辉市,辉县市,新乡县,获嘉县,原阳县,长垣县,延津县,封丘县,凤泉区,牧野区,红旗区,卫滨区|安阳市,林州市,安阳县,滑县,汤阴县,内黄县,龙安区,殷都区,文峰区,开发区,北关区|濮阳市,濮阳县,南乐县,台前县,清丰县,范县,华龙区|许昌市,禹州市,长葛市,许昌县,鄢陵县,襄城县,魏都区|漯河市,郾城区,临颍县,召陵区,舞阳县,源汇区|三门峡市,义马市,灵宝市,陕州区,卢氏县,渑池县,湖滨区|南阳市,邓州市,桐柏县,方城县,淅川县,镇平县,唐河县,南召县,内乡县,新野县,社旗县,西峡县,卧龙区,宛城区|商丘市,永城市,宁陵县,虞城县,民权县,夏邑县,柘城县,睢县,睢阳区,梁园区|周口市,项城市,商水县,淮阳县,太康县,鹿邑县,西华县,扶沟县,沈丘县,郸城县,东新区,经济开发区,川汇区|驻马店市,确山县,新蔡县,上蔡县,泌阳县,西平县,遂平县,汝南县,平舆县,正阳县,驿城区|信阳市,潢川县,淮滨县,息县,新县,固始县,罗山县,光山县,商城县,平桥区,浉河区|济源市,五龙口镇,下冶镇,轵城镇,王屋镇,思礼镇,邵原镇,坡头镇,梨林镇,克井镇,大峪镇,承留镇,城区#浙江省$宁波市,慈溪市,奉化市,宁海县,象山县,海曙区,江东区,高新科技开发区,北仑区,镇海区,鄞州区,江北区,余姚市|杭州市,余杭区,萧山区,富阳市,桐庐县,建德市,淳安县,江干区,滨江区,上城区,下城区,拱墅区,西湖区,下沙区,临安市|温州市,文成县,平阳县,泰顺县,洞头县,苍南县,龙湾区,茶山高教园区,瑞安市,乐清市,鹿城区,瓯海区,永嘉县|嘉兴市,海宁市,海盐县,南湖区,秀洲区,桐乡市,平湖市,嘉善县|湖州市,长兴县,德清县,安吉县,南浔区,吴兴区|绍兴市,诸暨市,上虞区,嵊州市,新昌县,柯桥区,越城区|金华市,金东区,兰溪市,婺城区,义乌市,东阳市,永康市,武义县,浦江县,磐安县|衢州市,江山市,常山县,开化县,龙游县,柯城区,衢江区|丽水市,龙泉市,缙云县,遂昌县,松阳县,景宁县,云和县,青田县,庆元县,莲都区|台州市,临海市,三门县,天台县,仙居县,黄岩区,椒江区,路桥区,温岭市,玉环县|舟山市,岱山县,嵊泗县,普陀区,定海区#海南省$海口市,秀英区,龙华区,琼山区,美兰区|儋州市,那大镇,和庆镇,南丰镇,大成镇,雅星镇,兰洋镇,光村镇,木棠镇,海头镇,峨蔓镇,三都镇,王五镇,白马井镇,中和镇,排浦镇,东成镇,新州镇,洋浦经济开发区,富克镇,西培农场,西联农场,蓝洋农场,八一农场,西华农场,西庆农场,西流农场,新盈农场,龙山农场,红岭农场,热作学院|琼海市,嘉积镇,万泉镇,石壁镇,中原镇,博鳌镇,阳江镇,龙江镇,潭门镇,塔洋镇,长坡镇,大路镇,会山镇,彬村山华侨农场,东太农场,东红农场,东升农场,南俸农场|万宁市,万城镇,龙滚镇,和乐镇,后安镇,大茂镇,东澳镇,礼纪镇,长丰镇,山根镇,北大镇,南桥镇,三更罗镇,六连林场,东兴农场,东和农场,新中农场,兴隆华侨农场|东方市,八所镇,东河镇,大田镇,感城镇,板桥镇,三家镇,四更镇,新龙镇,天安乡,江边乡,广坝农场,东方华侨农场|三亚市,海棠湾镇,吉阳镇,凤凰镇,天涯镇,育才镇,崖城镇,河西区,河东区,南田农场,南新农场,南岛农场,立才农场,南滨农场|文昌市,文城镇,重兴镇,蓬莱镇,会文镇,东路镇,潭牛镇,东阁镇,文教镇,东郊镇,龙楼镇,昌洒镇,翁田镇,抱罗镇,冯坡镇,锦山镇,铺前镇,公坡镇,迈号镇,清谰镇,南阳镇,新桥镇,头苑镇,宝芳乡,龙马乡,湖山乡,东路农场,南阳农场,罗豆农场,橡胶研究所|五指山市,通什镇,南圣镇,毛阳镇,番阳镇,畅好乡,毛道乡,水满乡,畅好农场|临高县,临城镇,波莲镇,东英镇,博厚镇,皇桐镇,多文镇,和舍镇,南宝镇,新盈镇,调楼镇,加来镇,红华农场,加来农场,城区|澄迈县,金江镇,老城镇,瑞溪镇,永发镇,加乐镇,文儒镇,中兴镇,仁兴镇,福山镇,桥头镇,大丰镇,红光农场,西达农场,金安农场,城区|定安县,定城镇,新竹镇,龙湖镇,雷鸣镇,龙门镇,龙河镇,岭口镇,翰林镇,富文镇,黄竹镇,金鸡岭农场,中瑞农场,南海农场,城区|屯昌县,屯城镇,新兴镇,枫木镇,乌坡镇,南吕镇,南坤镇,坡心镇,西昌镇,中建农场,中坤农场,县城内|昌江黎族自治县,石碌镇,叉河镇,十月田镇,乌烈镇,昌化镇,海尾镇,七叉镇,王下乡,海南矿业公司,霸王岭林场,红林农场,城区|白沙黎族自治县,牙叉镇,七坊镇,邦溪镇,打安镇,细水乡,元门乡,南开乡,阜龙乡,青松乡,金波乡,荣邦乡,白沙农场,龙江农场,邦溪农场,城区|琼中黎族苗族自治县,营根镇,湾岭镇,黎母山镇,和平镇,长征镇,红毛镇,中平镇,上安乡,什运乡,吊罗山乡,黎母山林业公司,阳江农场,乌石农场,加钗农场,长征农场,城区|陵水黎族自治县,椰林镇,光坡镇,三才镇,英州镇,隆广镇,文罗镇,本号镇,新村镇,黎安镇,提蒙乡,群英乡,吊罗山林业公司,岭门农场,南平农场,城区|保亭黎族苗族自治县,保城镇,什玲镇,加茂镇,响水镇,新政镇,三道镇,六弓乡,南林乡,毛感乡,保亭研究所,新星农场,金江农场,三道农场|乐东黎族自治县,抱由镇,万冲镇,大安镇,志仲镇,千家镇,九所镇,利国镇,黄流镇,佛罗镇,尖峰镇,莺歌海镇,尖峰岭林业公司,莺歌海盐场,山荣农场,乐光农场,保国农场,城区|三沙市,西沙群岛,南沙群岛,中沙群岛#湖北省$武汉市,江岸区,武昌区,江汉区,硚口区,武汉经济技术开发区,蔡甸区,江夏区,新洲区,黄陂区,汉阳区,青山区,洪山区,汉南区,东西湖区|黄石市,黄石港区,铁山区,大冶市,阳新县,下陆区,西塞山区,经济技术开发区|襄阳市,老河口市,枣阳市,宜城市,南漳县,保康县,谷城县,樊城区,襄城区,襄州区|十堰市,丹江口市,房县,竹山县,竹溪县,郧县,郧西县,茅箭区,张湾区|荆州市,江陵县,洪湖市,石首市,松滋市,监利县,公安县,沙市区,荆州区|宜昌市,当阳市,枝江市,夷陵区,秭归县,兴山县,远安县,五峰土家族自治县,长阳土家族自治县,宜都市,猇亭区,点军区,伍家岗区,西陵区|孝感市,汉川市,云梦县,大悟县,孝昌县,孝南区,应城市,安陆市|黄冈市,红安县,罗田县,黄梅县,英山县,团风县,黄州区,蕲春县,麻城市,武穴市,浠水县|咸宁市,嘉鱼县,通山县,崇阳县,通城县,咸安区,赤壁市|恩施土家族苗族自治州,恩施市,利川市,建始县,来凤县,巴东县,鹤峰县,宣恩县,咸丰县|鄂州市,梁子湖区,华容区,鄂城区|荆门市,京山县,钟祥市,沙洋县,掇刀区,东宝区|随州市,广水市,曾都区,随县|潜江市,园林,杨市,周矶,广华,泰丰,竹根滩镇,高石碑镇,积玉口镇,渔洋镇,王场镇,熊口镇,老新镇,浩口镇,张金镇,龙湾镇,江汉石油管理局,潜江经济开发区,西大垸管理区,运粮湖管理区,周矶管理区,后湖管理区,熊口管理区,总口管理区,高场原种场,浩口原种场|天门市,侨乡街道开发区,竟陵街道,杨林街道,佛子山镇,多宝镇,拖市镇,张港镇,蒋场镇,汪场镇,渔薪镇,黄潭镇,岳口镇,横林镇,彭市镇,麻洋镇,多祥镇,干驿镇,马湾镇,卢市镇,小板镇,九真镇,皂市镇,胡市镇,石河镇,净潭乡,蒋湖农场,白茅湖农场,沉湖管委会|仙桃市,郑场镇,毛嘴镇,豆河镇,三伏潭镇,胡场镇,长埫口镇,西流河镇,沙湖镇,杨林尾镇,彭场镇,张沟镇,郭河镇,沔城镇,通海口镇,陈场镇,工业园区,九合垸原种场,沙湖原种场,排湖渔场,五湖渔场,赵西垸林场,刘家垸林场,畜禽良种场,城区|神农架林区,松柏镇,阳日镇,木鱼镇,红坪镇,新华镇,宋洛乡,九湖乡,下谷坪乡#湖南省$长沙市,望城区,芙蓉区,岳麓区,雨花区,开福区,天心区,浏阳市,长沙县,宁乡县|株洲市,醴陵市,株洲县,攸县,茶陵县,炎陵县,天元区,石峰区,芦淞区,荷塘区|湘潭市,湘乡市,湘潭县,韶山市,雨湖区,岳塘区|衡阳市,常宁市,衡阳县,耒阳市,衡东县,衡南县,衡山县,祁东县,南岳区,蒸湘区,石鼓区,珠晖区,雁峰区|邵阳市,武冈市,邵东县,洞口县,新邵县,绥宁县,新宁县,邵阳县,隆回县,城步苗族自治县,大祥区,双清区,北塔区|岳阳市,临湘市,汨罗市,岳阳县,湘阴县,华容县,平江县,君山区,云溪区,岳阳楼区|常德市,津市市,澧县,临澧县,桃源县,汉寿县,石门县,安乡县,鼎城区,武陵区|张家界市,慈利县,桑植县,武陵源区,永定区|郴州市,资兴市,宜章县,安仁县,汝城县,嘉禾县,临武县,桂东县,永兴县,桂阳县,北湖区,苏仙区|益阳市,南县,桃江县,安化县,沅江市,赫山区,资阳区|永州市,祁阳县,双牌县,道县,江永县,江华瑶族自治县,宁远县,新田县,蓝山县,东安县,零陵区,冷水滩区|怀化市,洪江市,会同县,溆浦县,辰溪县,靖州苗族侗族自治县,通道侗族自治县,芷江侗族自治县,新晃侗族自治县,麻阳苗族自治县,沅陵县,中方县,鹤城区|娄底市,冷水江市,涟源市,新化县,双峰县,娄星区|湘西土家族苗族自治州,吉首市,古丈县,龙山县,永顺县,泸溪县,凤凰县,花垣县,保靖县#甘肃省$兰州市,永登县,榆中县,皋兰县,西固区,红古区,七里河区,安宁区,城关区|金昌市,永昌县,金川区|白银市,白银区,平川区,靖远县,景泰县,会宁县|天水市,甘谷县,武山县,清水县,秦安县,张家川回族自治县,麦积区,秦州区|嘉峪关市,雄关区,长城区,镜铁区|平凉市,华亭县,崇信县,泾川县,灵台县,庄浪县,崆峒区,静宁县|庆阳市,西峰区,镇原县,合水县,华池县,环县,宁县,正宁县,庆城县|陇南市,成县,礼县,康县,武都区,文县,两当县,徽县,宕昌县,西和县|武威市,凉州区,古浪县,天祝藏族自治县,民勤县|张掖市,甘州区,山丹县,临泽县,高台县,肃南裕固族自治县,民乐县|酒泉市,玉门市,敦煌市,金塔县,阿克塞哈萨克族自治县,肃北蒙古族自治县,瓜州县,肃州区|甘南藏族自治州,合作市,夏河县,碌曲县,舟曲县,玛曲县,迭部县,临潭县,卓尼县|临夏回族自治州,临夏县,康乐县,永靖县,和政县,东乡族自治县,积石山保安族东乡族撒拉族自治县,临夏市,广河县|定西市,岷县,安定区,通渭县,临洮县,漳县,渭源县,陇西县#福建省$福州市,长乐市,平潭县,连江县,罗源县,永泰县,闽清县,台江区,鼓楼区,晋安区,仓山区,马尾区,福清市,闽侯县|厦门市,思明区,湖里区,翔安区,海沧区,集美区,同安区|三明市,永安市,明溪县,将乐县,大田县,宁化县,建宁县,沙县,尤溪县,清流县,泰宁县,梅列区,三元区|莆田市,仙游县,涵江区,秀屿区,城厢区,荔城区|泉州市,石狮市,南安市,惠安县,安溪县,德化县,永春县,泉港区,金门县,洛江区,鲤城区,丰泽区,晋江市|漳州市,龙海市,平和县,南靖县,诏安县,漳浦县,华安县,云霄县,东山县,长泰县,芗城区,龙文区|南平市,建瓯市,邵武市,武夷山市,建阳市,松溪县,顺昌县,浦城县,政和县,光泽县,延平区|龙岩市,漳平市,长汀县,武平县,永定县,上杭县,连城县,新罗区|宁德市,福安市,福鼎市,寿宁县,霞浦县,柘荣县,屏南县,古田县,周宁县,蕉城区,东侨开发区#西藏自治区$拉萨市,城关区,林周县,当雄县,尼木县,曲水县,堆龙德庆县,达孜县,墨竹工卡县|那曲地区,索县,那曲县,嘉黎县,比如县,聂荣县,安多县,申扎县,班戈县,巴青县,尼玛县|山南地区,贡嘎县,扎囊县,乃东县,桑日县,琼结县,曲松县,措美县,洛扎县,加查县,隆子县,错那县,浪卡子县|昌都地区,昌都县,江达县,贡觉县,类乌齐县,丁青县,察雅县,八宿县,左贡县,芒康县,洛隆县,边坝县|日喀则市,聂拉木县,昂仁县,桑珠孜区,南木林县,江孜县,定日县,萨迦县,拉孜县,谢通门县,白朗县,仁布县,康马县,定结县,仲巴县,亚东县,吉隆县,萨嘎县,岗巴县|阿里地区,噶尔县,普兰县,札达县,日土县,革吉县,改则县,措勤县|林芝地区,林芝县,工布江达县,米林县,墨脱县,波密县,察隅县,朗县#贵州省$贵阳市,清镇市,开阳县,修文县,息烽县,乌当区,南明区,白云区,云岩区,花溪区,小河区,观山湖区|六盘水市,盘县,六枝特区,水城县,钟山区|遵义市,赤水市,仁怀市,遵义县,桐梓县,绥阳县,习水县,凤冈县,正安县,湄潭县,余庆县,道真仡佬族苗族自治县,务川仡佬族苗族自治县,红花岗区,汇川区|铜仁市,碧江区,德江县,江口县,思南县,万山区,石阡县,玉屏侗族自治县,松桃苗族自治县,印江土家族苗族自治县,沿河土家族自治县|毕节市,黔西县,大方县,织金县,金沙县,赫章县,纳雍县,威宁彝族回族苗族自治县,七星关区|安顺市,西秀区,普定县,平坝县,镇宁布依族苗族自治县,关岭布依族苗族自治县,紫云苗族布依族自治县|黔西南布依族苗族自治州,兴义市,望谟县,兴仁县,普安县,册亨县,晴隆县,贞丰县,安龙县|黔东南苗族侗族自治州,凯里市,施秉县,从江县,锦屏县,镇远县,麻江县,台江县,天柱县,黄平县,榕江县,剑河县,三穗县,雷山县,黎平县,岑巩县,丹寨县|黔南布依族苗族自治州,都匀市,福泉市,贵定县,惠水县,罗甸县,瓮安县,荔波县,龙里县,平塘县,长顺县,独山县,三都水族自治县#辽宁省$沈阳市,苏家屯区,新民市,法库县,辽中县,康平县,皇姑区,铁西区,大东区,沈河区,东陵区,于洪区,和平区,浑南新区,沈北新区|大连市,普兰店市,瓦房店市,庄河市,长海县,沙河口区,西岗区,中山区,甘井子区,高新园区,大连开发区,金州区,旅顺口区|鞍山市,台安县,海城市,岫岩县,铁东区,立山区,铁西区,千山区|抚顺市,抚顺县,新宾县,清原县,望花区,东洲区,新抚区,顺城区|本溪市,桓仁县,南芬区,本溪县,平山区,溪湖区,明山区|丹东市,宽甸县,元宝区,振兴区,振安区,东港市,凤城市|锦州市,义县,凌海市,北镇市,黑山县,古塔区,凌河区,太和区,经济技术开发区|葫芦岛市,绥中县,建昌县,南票区,龙港区,连山区,兴城市|营口市,大石桥市,盖州市,老边区,西市区,站前区,鲅鱼圈区|盘锦市,盘山县,大洼县,兴隆台区,双台子区|阜新市,阜新县,彰武县,清河门区,新邱区,海州区,太平区,细河区|辽阳市,辽阳县,太子河区,弓长岭区,宏伟区,白塔区,文圣区,灯塔市|朝阳市,凌源市,北票市,喀喇沁左翼县,朝阳县,建平县,龙城区,双塔区|铁岭市,银州区,清河区,开原市,铁岭县,西丰县,昌图县,调兵山市#重庆市$重庆市,万州区,涪陵区,梁平县,南川区,潼南县,大足区,黔江区,武隆县,丰都县,奉节县,开县,云阳县,忠县,巫溪县,巫山县,石柱县,彭水县,垫江县,酉阳县,秀山县,城口县,璧山县,荣昌县,铜梁县,合川区,巴南区,北碚区,江津区,渝北区,长寿区,永川区,江北区,南岸区,九龙坡区,沙坪坝区,大渡口区,綦江区,渝中区,高新区,北部新区#陕西省$西安市,高陵县,蓝田县,户县,周至县,雁塔区,长安区,灞桥区,碑林区,莲湖区,临潼区,阎良区,杨凌农业示范区,新城区,未央区|铜川市,印台区,宜君县,王益区,耀州区|宝鸡市,岐山县,太白县,凤翔县,陇县,麟游县,千阳县,扶风县,凤县,眉县,渭滨区,金台区,陈仓区|咸阳市,兴平市,礼泉县,泾阳县,永寿县,三原县,彬县,旬邑县,长武县,乾县,武功县,淳化县,秦都区,渭城区,杨陵区|渭南市,韩城市,华阴市,蒲城县,华县,潼关县,大荔县,澄城县,合阳县,白水县,富平县,临渭区|延安市,安塞县,洛川县,子长县,黄陵县,延长县,宜川县,延川县,甘泉县,富县,志丹县,黄龙县,吴起县,宝塔区|汉中市,南郑县,城固县,洋县,佛坪县,留坝县,镇巴县,西乡县,勉县,略阳县,宁强县,汉台区|榆林市,清涧县,绥德县,佳县,神木县,府谷县,子洲县,横山县,米脂县,吴堡县,定边县,靖边县,榆阳区|商洛市,商州区,镇安县,山阳县,洛南县,商南县,丹凤县,柞水县|安康市,紫阳县,岚皋县,旬阳县,镇坪县,平利县,宁陕县,汉阴县,石泉县,白河县,汉滨区#青海省$西宁市,湟中县,湟源县,大通县,城中区,城东区,城西区,城北区|海东市,平安县,乐都区,民和回族土族自治县,互助土族自治县,化隆回族自治县,循化撒拉族自治县|海北藏族自治州,海晏县,祁连县,刚察县,门源回族自治县|黄南藏族自治州,尖扎县,同仁县,泽库县,河南蒙古族自治县|海南藏族自治州,共和县,同德县,贵德县,兴海县,贵南县|果洛藏族自治州,玛沁县,甘德县,达日县,班玛县,久治县,玛多县|玉树藏族自治州,玉树市,称多县,囊谦县,杂多县,治多县,曲麻莱县|海西蒙古族藏族自治州,德令哈市,乌兰县,天峻县,都兰县,大柴旦行委,冷湖行委,茫崖行委,格尔木市#黑龙江省$哈尔滨市,阿城区,尚志市,双城市,五常市,方正县,宾县,依兰县,巴彦县,通河县,木兰县,延寿县,呼兰区,松北区,道里区,南岗区,道外区,香坊区,平房区|齐齐哈尔市,梅里斯区,昂昂溪区,富拉尔基区,碾子山区,讷河市,富裕县,拜泉县,甘南县,依安县,克山县,龙江县,克东县,泰来县,建华区,龙沙区,铁锋区|鹤岗市,萝北县,绥滨县,兴山区,向阳区,工农区,南山区,兴安区,东山区|双鸭山市,集贤县,宝清县,友谊县,饶河县,尖山区,岭东区,四方台区,宝山区|鸡西市,密山市,虎林市,鸡东县,恒山区,滴道区,梨树区,城子河区,麻山区,鸡冠区|大庆市,萨尔图区,龙凤区,让胡路区,红岗区,大同区,林甸县,肇州县,肇源县,杜尔伯特县|伊春市,铁力市,嘉荫县,伊春区,南岔区,友好区,西林区,翠峦区,新青区,美溪区,金山屯区,五营区,乌马河区,汤旺河区,带岭区,乌伊岭区,红星区,上甘岭区|牡丹江市,海林市,宁安市,穆棱市,林口县,东宁县,爱民区,东安区,阳明区,西安区,绥芬河市|佳木斯市,同江市,富锦市,桦川县,抚远县,桦南县,汤原县,前进区,向阳区,东风区,郊区|七台河市,勃利县,桃山区,新兴区,茄子河区|黑河市,北安市,五大连池市,逊克县,孙吴县,嫩江县,爱辉区|绥化市,安达市,肇东市,海伦市,绥棱县,兰西县,明水县,青冈县,庆安县,望奎县,北林区|大兴安岭地区,呼玛县,塔河县,漠河县,加格达奇区,松岭区,呼中区,新林区";if(ShowT)PCAD=SPT+"$"+SCT+","+SAT+"#"+PCAD;PCAArea=[];PCAP=[];PCAC=[];PCAA=[];PCAN=PCAD.split("#");for(i=0;i<PCAN.length;i++){PCAA[i]=[];TArea=PCAN[i].split("$")[1].split("|");for(j=0;j<TArea.length;j++){PCAA[i][j]=TArea[j].split(",");if(PCAA[i][j].length==1)PCAA[i][j][1]=SAT;TArea[j]=TArea[j].split(",")[0]}PCAArea[i]=PCAN[i].split("$")[0]+","+TArea.join(",");PCAP[i]=PCAArea[i].split(",")[0];PCAC[i]=PCAArea[i].split(',')}function PCAS(){this.SelP=document.getElementsByName(arguments[0])[0];this.SelC=document.getElementsByName(arguments[1])[0];this.SelA=document.getElementsByName(arguments[2])[0];this.DefP=this.SelA?arguments[3]:arguments[2];this.DefC=this.SelA?arguments[4]:arguments[3];this.DefA=this.SelA?arguments[5]:arguments[4];this.SelP.PCA=this;this.SelC.PCA=this;this.SelP.onchange=function(){PCAS.SetC(this.PCA)};if(this.SelA)this.SelC.onchange=function(){PCAS.SetA(this.PCA)};PCAS.SetP(this)};PCAS.SetP=function(PCA){for(i=0;i<PCAP.length;i++){PCAPT=PCAPV=PCAP[i];if(PCAPT==SPT)PCAPV="";PCA.SelP.options.add(new Option(PCAPT,PCAPV));if(PCA.DefP==PCAPV)PCA.SelP[i].selected=true}PCAS.SetC(PCA)};PCAS.SetC=function(PCA){PI=PCA.SelP.selectedIndex;PCA.SelC.length=0;for(i=1;i<PCAC[PI].length;i++){PCACT=PCACV=PCAC[PI][i];if(PCACT==SCT)PCACV="";PCA.SelC.options.add(new Option(PCACT,PCACV));if(PCA.DefC==PCACV)PCA.SelC[i-1].selected=true}if(PCA.SelA)PCAS.SetA(PCA)};PCAS.SetA=function(PCA){PI=PCA.SelP.selectedIndex;CI=PCA.SelC.selectedIndex;PCA.SelA.length=0;for(i=1;i<PCAA[PI][CI].length;i++){PCAAT=PCAAV=PCAA[PI][CI][i];if(PCAAT==SAT)PCAAV="";PCA.SelA.options.add(new Option(PCAAT,PCAAV));if(PCA.DefA==PCAAV)PCA.SelA[i-1].selected=true}}
//-->