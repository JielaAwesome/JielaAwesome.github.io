function inandout(i,j){
	var layer=[
				{
                    layer: 'xq_songyudongli',
                    opacity: 0,
                    duration: 50
                },{
                    layer: 'xq_nanxinyuan',
                    opacity: 0,
                    duration: 50
                },{
                    layer: 'xq_tiananhuayuan',
                    opacity: 0.0,
                    duration: 50
                },{
                    layer: 'xq_baona',
                    opacity: 0.0,
                    duration: 50
                },{
                    layer: 'xq_lanxiang',
                    opacity: 0.0,
                    duration: 50
                },{
                    layer: 'xq_qingyouyuan',
                    opacity: 0.0,
                    duration: 50
                },{
                    layer: 'xq_beiyaodi',
                    opacity: 0.0,
                    duration: 50
                },{
                    layer: 'xq_changyiyuan',
                    opacity: 0.0,
                    duration: 50
                },{
                    layer: 'xq_taihua',
                    opacity: 0.0,
                    duration: 50
                },{
                    layer: 'xq_aidicheng',
                    opacity: 0.0,
                    duration: 50
                },{
                    layer: 'xq_panjiayuan',
                    opacity: 0.0,
                    duration: 50
                }
            ]
	layer[i].opacity=0.6
	layer[j].opacity=0.2
	return layer
}
var config = {
    style: 'mapbox://styles/yinzhaojie/ckolgwk82746918muxf058gc1',
    accessToken: 'pk.eyJ1IjoieWluemhhb2ppZSIsImEiOiJjazlkejFpd2kwMGo2M2VxaWNhMDB6NWdjIn0.ND7NCy1HYJn5ytNz-7mzqw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: "",
    subtitle: '',
    byline: '',
    footer: "<a href='https://jielaawesome.github.io' target='_blank' style='font-size:14px;'>杰啦@copyright</a> ",
    chapters: [
        {
            id: 'shop0',
            alignment: 'left',
            hidden: false,
            title: '松榆东里',
            image: '',
            description:'<div>\
			<p id="u8aa42961" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">时间：2015.6-2015.10</span></p>\
			<p id="ud58c8127" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">地点：北京 | 北京工业大学 </span></p>\
			<p id="uc392ff97" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">房租：0 （公司宿舍）</span></p>\
			<p id="ubb32b8ea" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">中介：某天置地</span></p>\
			<p id="uacdd1a76" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">月薪：内业奇低，外业出差的话就会比较高。</span></p>\
			<p id="u8cc0db74" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">距单位距离：1.8 km</span></p>\
			<p id="u58c53696" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><br /></p>\
			<p id="u51b56deb" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">第一份工作的宿舍房，也是继初中十人宿舍、高中10人宿舍、大学8-2人宿舍后，又一个10人宿舍。</span></strong></p>\
			<p id="uf706ee86" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">两室一厅住10个小伙子，也是上下铺的。</span></strong></p>\
			<p id="u3c94cfaf" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">当时的娱乐活动就是大家一起去隔壁的工业大学打篮球。</span></strong></p>\
			<p id="u003f8d0c" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">住了不到2个月就被中介通知要搬走，可能人住太多扰民被投诉了。</span></strong></p>\
			<p id="u4d978861" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">但是帮我们租房的HR姐姐说，押金和剩余房费都没退，可能就是传说中的黑中介吧。</span></strong></p>\
			<p id="u867c8e86" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">某天置地，祝他们生意兴隆。</span></strong></p>\
			</div><p style="text-align: center; "><br /></p>',
            location: {
                center: [116.46863587530319,39.87183181279227],
                zoom: 15,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: inandout(0,1),
            onChapterExit: inandout(1,0)
        },
        {
            id: 'shop1',
            alignment: 'right',
            hidden: false,
            title: '南新园   ',
            image: '',
            description: '<div class="lake-content" typography="classic">\
				<p id="u117fbc04" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">时间：2015.10-2016.04</span></p>\
				<p id="u1b09e80b" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;">\
				<span class="ne-text">地点：北京 | 北京工业大学-斜对面</span></p>\
				<p id="u74d4c073" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">房租：0 （公司宿舍）</span></p>\
				<p id="u5233f82a" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">中介：不知道</span></p>\
				<p id="ua85a4ede" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">月薪：--</span></p>\
				<p id="uff500b39" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">距单位距离：1.7 km</span></p>\
				<p id="ubb428c9c" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong>\
				<span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);"></span></strong><br /></p>\
				<p id="u650bc799" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong>\
				<span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">松榆窝点被捣毁之后，便来到对面的南新园，几个开发的小哥哥薪资渐长，主动在外自己租房了，我们4个收入微薄的内业人员，搬了进来。</span></strong></p>\
				<p id="u29d03987" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong>\
				<span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">一室一厅，住4个人，研究生住带阳台的卧室，我和大哥住客厅。</span></strong></p>\
				<p id="u4b15918e" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;">\
				<strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">当时的娱乐活动就是大家一起灭蟑螂：各种蟑螂屋、蟑螂药一起聊，和偶尔的马桶疏通大战。</span></strong></p>\
				</div>',
            location: {
                center: [116.46839954158605,39.86789237320791],
                zoom: 15,
                pitch: 30,
                bearing: 5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: inandout(1,2),
            onChapterExit: inandout(2,3)
        },
        {
            id: 'shop2',
            alignment: 'right',
            hidden: false,
            title: '天安花园            ',
            image: '',
            description: '<div class="lake-content" typography="classic">\
				<p id="ud856192e" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;">\
				<span class="ne-text">时间：2016.07-2016.09</span></p>\
				<p id="u78033def" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;">\
				<span class="ne-text">地点：江苏-常州 | 新北区晋陵北路298号</span></p>\
				<p id="u69be89d5" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;">\
				<span class="ne-text">房租：0 （公司宿舍兼办公室）</span></p>\
				<p id="uca76f6ee" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">中介：房东直租</span></p>\
				<p id="u6ee198c0" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">月薪：翻倍 </span></p>\
				<p id="u5f553a1c" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">距单位距离：0 km</span></p>\
				<p id="ue8c43bf7" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><br /></p>\
				<p id="ue49ebac2" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong>\
				<span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">一腔热血（无可奈何），去创业（公司）了。</span></strong></p>\
				<p id="u3af52fb1" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;">\
				<strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">北京的研发，常州的试点，我是试点。</span></strong></p>\
				<p id="u6cc0ab4f" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;">\
				<strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">996算啥？6-12-7的工作节奏见过没？以后再也不要找管住宿的公司，躲无可躲。</span></strong></p>\
				<p id="uc5ee03ac" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;">\
				<strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">后来业务慢慢开始扩张，分店1、分店2、分店3陆续开起来，宿舍要迁移了。</span></strong></p>\
				<p id="u0e476a03" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;">\
				<strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">至于宿舍闹鬼、有不干净的东西的传说，我也不太在意，恐怖是他们的，我没啥感觉。</span></strong></p>\
				<p id="u445924fb" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;">\
				<strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">一帮以部落文化为昵称素材的人也开始了起昵称之旅，于是就有：酋长、大树、大象、小草、大锣、大地等，我也有了一个很重要的花名。</span></strong></p>\
				</div>\
				<p><br /></p>',
            location: {
                center: [119.97985477538408,31.827866229892557],
                zoom: 15,
                pitch: 30,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true, 
            callback: '',
            onChapterEnter: inandout(2,3),
            onChapterExit: inandout(3,2)
        } ,
        {
            id: 'shop3',
            alignment: 'right',
            hidden: false,
            title: '保纳商业广场            ',
            image: '',
            description: '<div class="lake-content" typography="classic">\
				<h3 id="SlARI" style="line-height: 28px; margin: 16px 0px 5px;"><span style="font-size: 14.4px;">时间：2016.10-2017.06</span><br /></h3>\
				<p id="ud95b0a70" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;">\
				<span class="ne-text">地点：江苏-常州 | 新北区晋陵北路511号</span></p>\
				<p id="u2c03b527" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;">\
				<span class="ne-text">房租：0 （公司宿舍兼办公室）</span></p>\
				<p id="u0388a67d" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">中介：房东直租</span></p>\
				<p id="ucb8e0cd6" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">月薪：--</span></p>\
				<p id="u4eb8c1ad" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">距单位距离：1.3 km</span></p>\
				<p id="u577ddf93" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text"></span><br /></p>\
				<p id="u49f5c58a" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong>\
				<span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">是个Loft，我住在二层一个无窗的小卧室里，隔音效果奇差。</span></strong></p>\
				<p id="u2c3fbf6d" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong>\
				<span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">每到晚上11:00忙碌了一天的打工仔回来，还要和创始人一起吞云吐雾，聊聊梦想。</span></strong></p>\
				<p id="ua8589297" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">我的梦想就是多睡会儿……</span></strong></p>\
				<p id="ue16d5d48" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong>\
				<span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">在他们聊贾跃亭的那些日子，我在小盒子间看完了《三体》，完成了门店商城、价格策略、员工管理手册等可有可无的材料，同时捡起差点废弃的GIS技能。</span></strong></p>\
				</div>',
            location: {
                center: [119.98359254969773 ,31.835124459309903],
                zoom: 15,
                pitch: 30,
                bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true, 
            callback: '',
            onChapterEnter: inandout(3,4),
            onChapterExit: inandout(4,3)
        },
        {
            id: 'shop4',
            alignment: 'left',
            hidden: false,
            title: '兰翔新村            ',
            image: '',
            description: '<div class="lake-content" typography="classic">\
				<p id="ue5894998" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">时间：2017.02-2017.04</span></p>\
				<p id="uc99a1d5c" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">地点：江苏-常州 | </span><span class="ne-text" style="color: rgb(51, 51, 51);">常州市新北区河海东路</span></p>\
				<p id="u2cd87b38" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">房租：2000元</span></p>\
				<p id="uc939abf8" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">服务费：1000元</span></p>\
				<p id="u88461280" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">中介：游击中介</span></p>\
				<p id="u962d1e37" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">月薪：--</span></p>\
				<p id="u62fa87aa" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">距单位距离：1.1 km</span></p>\
				<p id="uc34b268c" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text"></span><br /></p>\
				<p id="u8cf0a63d" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">是一场逃亡，也是第一次自己正式租房。</span></strong></p>\
				<p id="u63af90cd" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">受够了为梦想窒息的人，打算自己搬出来，然后就搬出来了（两个月）。</span></strong></p>\
				<p id="u8a2f5ba3" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);"> 一个人住了个两居室，屋子里弥漫着老式樟木家具散发的古老的味道，免费的阳光肆意照进室内，我恍然发现阳光是多么珍贵，于是打算种植物、打算让一切都充满生机。</span></strong></p>\
				<p id="u8ecb8ed1" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">上下班的路上，帮大树找到了他家发情的泰迪在他感谢完收留狗狗的店家后，我也搬回保纳住了。</span></strong></p>\
				</div>',
            location: {
                center: [119.97654949226292 ,31.82316805362112],
                zoom: 15,
                pitch: 30,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true, 
            callback: '',
            onChapterEnter: inandout(4,5),
            onChapterExit: inandout(5,4)
        },
        {
            id: 'shop5',
            alignment: 'left',
            hidden: false,
            title: '清友园            ',
            image: '',
            description: '<div class="lake-content" typography="classic">\
				<p id="u163958ab" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">时间：2017.07-2017.08</span></p>\
				<p id="uf50154b2" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">地点：北京 | </span><span class="ne-text" style="color: rgb(51, 51, 51);">北苑</span></p>\
				<p id="u27339574" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">房租：1800元</span></p>\
				<p id="uf0f17cd4" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">服务费：1800元</span></p>\
				<p id="u088a1bb0" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">中介：我爱我家</span></p>\
				<p id="uae3a4e47" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">月薪：0</span></p>\
				<p id="u9c5f3002" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">距单位距离：--</span></p>\
				<p id="u116ca555" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text"></span><br /></p>\
				<p id="ucc1cb0b3" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">回北京了，接着找工作。和北苑的缘分就这不到一个月。20多天的日子，从一个VBer 成长为一个Pyer，刚好有一家单位打电话让我去面试，于是去面了，于是就定了，于是就搬了。开始了某点有数长达四年的身在福中也知福的工作。</span></strong></p>\
				</div>',
            location: {
                center: [116.42175674333811 ,40.03789583388561],
                zoom: 15,
                pitch: 30,
                bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true, 
            callback: '',
            onChapterEnter: inandout(5,6),
            onChapterExit: inandout(6,5)
        },
        {
            id: 'shop6',
            alignment: 'right',
            hidden: false,
            title: '北窑地',
            image: '',
            description: '<div class="lake-content" typography="classic">\
				<p id="u81d3909b" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">时间：2017.08-2019.01</span></p>\
				<p id="u7d5a6587" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">地点：北京 | </span><span class="ne-text" style="color: rgb(51, 51, 51);">798艺术区</span></p>\
				<p id="u1b06c833" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">房租：2500元</span></p>\
				<p id="uaf48ecb3" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">服务费：2500元</span></p>\
				<p id="ue627e56c" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">中介：豆瓣租房/我爱我家</span></p>\
				<p id="u7308fe95" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">月薪：没变</span></p>\
				<p id="u2476933f" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">距单位距离：2.4km</span></p>\
				<p id="ub4884aa5" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text"></span><br /></p>\
				<p id="u9ef1e455" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">两室一厅，室友从360程序员，到空置，到一个奇奇怪怪东北姐姐。老小区就是安静，去798也很方便。大锣的那个在艺术区酒吧或咖啡馆打零工的梦想，我算是帮他完成了一半-我在里面写代码。</span></strong></p>\
				<p id="u3ac2920f" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">不被报期望的岗位，薪资容易翻倍。于是翻倍，于是努力。</span></strong></p>\
				</div>',
            location: {
                center: [116.4962799523329 ,39.988165180958376],
                zoom: 15,
                pitch: 30,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true, 
            callback: '',
            onChapterEnter: inandout(6,7),
            onChapterExit: inandout(7,6)
        },
        {
            id: 'shop7',
            alignment: 'right',
            hidden: false,
            title: '首开畅颐园',
            image: '',
            description: '<div class="lake-content" typography="classic">\
				<p id="ue0cb427f" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">时间：2019.01-2020.08</span></p>\
				<p id="u4e725aeb" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">地点：北京 | </span><span class="ne-text" style="color: rgb(51, 51, 51);">东坝 </span></p>\
				<p id="ueda29db0" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">房租：6200元</span></p>\
				<p id="u7660dd9d" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">服务费：6200元</span></p>\
				<p id="ubdc131b1" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">中介：自如</span></p>\
				<p id="ud0ef229d" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">月薪：略涨</span></p>\
				<p id="ub7c71ad5" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">距单位距离：5km</span></p>\
				<p id="u923ce0fa" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text"></span><br /></p>\
				<p id="u62a76547" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">两个人的日子总是计较，总是快乐或争吵，于是感慨，于是分开。</span></strong></p>\
				</div>',
            location: {
                center: [116.52487168295457,39.962893543585984],
                zoom: 15,
                pitch: 30,
                bearing: 5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true, 
            callback: '',
            onChapterEnter: inandout(7,8),
            onChapterExit: inandout(8,7)
        },
        {
            id: 'shop8',
            alignment: 'right',
            hidden: false,
            title: '泰华滨河苑',
            image: '',
            description: '<div class="lake-content" typography="classic">\
				<p id="ud22da2a6" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">时间：2020.08-2021.02</span></p>\
				<p id="u9cfe70dc" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">地点：北京 | </span><span class="ne-text" style="color: rgb(51, 51, 51);">东风北桥</span></p>\
				<p id="ud17f9ff1" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">房租：3000元</span></p>\
				<p id="uf87b4114" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">服务费：3000元</span></p>\
				<p id="u22185143" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">中介：自如</span></p>\
				<p id="u3c96e1f4" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">月薪：没变</span></p>\
				<p id="u330fee16" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">距单位距离：2.7km</span></p>\
				<p id="u1fd4e33a" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text"></span><br /></p>\
				<p id="uad7bc1db" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">努力工作，于是公司业务成长。</span></strong></p>\
				</div>',
            location: {
                center: [116.49093740617961,39.95806744586193],
                zoom: 15,
                pitch: 30,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true, 
            callback: '',
            onChapterEnter: inandout(8,9),
            onChapterExit: inandout(9,8)
        },
        {
            id: 'shop9',
            alignment: 'right',
            hidden: false,
            title: '艾迪城',
            image: '',
            description: '<div class="lake-content" typography="classic">\
				<p id="u268c9e89" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">时间：2020.02-2021.04</span></p>\
				<p id="u686bd982" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">地点：北京 | </span><span class="ne-text" style="color: rgb(51, 51, 51);">东风北桥</span></p>\
				<p id="u6d2c9f86" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">房租：3500元</span></p>\
				<p id="ud2452a22" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">服务费：3500元</span></p>\
				<p id="u70dc9f69" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">中介：豆瓣租房</span></p>\
				<p id="udd9885eb" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">月薪：略涨</span></p>\
				<p id="ue9fbad9b" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">距单位距离：15.8km</span></p>\
				<p id="u732d2b2b" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text"></span><br /></p>\
				<p id="u206caefd" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">是个Loft，我住楼下。疫情封城的日子，和室友一起过年，于是被邀请创业、于是打算走了。</span></strong></p>\
				</div>',
            location: {
                center: [116.5365861799792,40.08606401253907],
                zoom: 15,
                pitch: 30,
                bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true, 
            callback: '',
            onChapterEnter: inandout(9,10),
            onChapterExit: inandout(10,9)
        },
        {
            id: 'shop10',
            alignment: 'right',
            hidden: false,
            title: '潘家园商圈',
            image: '',
            description: '<div class="lake-content" typography="classic">\
				<p id="u9b2c2d57" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">时间：2020.05-至今</span></p>\
				<p id="u6a116929" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">地点：北京 | </span><span class="ne-text" style="color: rgb(51, 51, 51);">潘家园</span></p>\
				<p id="uce95fc26" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">房租：3460元</span></p>\
				<p id="u4dec8204" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">服务费：3460元</span></p>\
				<p id="u2dd5a030" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">中介：自如</span></p>\
				<p id="u0fd38aba" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">月薪：--</span></p>\
				<p id="ud3895dd5" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text">距单位距离：12.9km |  27.9km</span></p>\
				<p id="u39123e1d" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><span class="ne-text"></span><br /></p>\
				<p id="u61641263" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">公司业务成长，于是想上市，于是有空降领导想卷你，于是驳他，于是被告黑状，于是离开。上三休四的日子一去不复返。</span></strong></p>\
				<p id="u9fcd3b50" class="ne-p" style="margin: 0px; padding: 0px; min-height: 24px;"><strong><span class="ne-text" style="font-size: 13px; color: rgb(68, 68, 68);">养了三年的植物依然健壮，从种子变成小树的樱桃和龙眼生机盎然，于是满足，于是不想搬走，于是辞掉遥远的梦想，于是逍遥游。</span></strong></p>\
				</div>',
            location: {
                center: [116.45339679774543,39.88574738707911],
                zoom: 13,
                pitch: 30,
                bearing: -10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true, 
            callback: '',
            onChapterEnter: inandout(10,9),
            onChapterExit: inandout(9,10)
        }           
    ]
};
