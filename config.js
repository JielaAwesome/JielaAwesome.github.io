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
    footer: "<a href='https://yinzhaojiela.github.io/cyty/' target='_blank' style='font-size:14px;'>杰啦@copyright</a> ",
    chapters: [
        {
            id: 'shop0',
            alignment: 'left',
            hidden: false,
            title: '松榆东里',
            image: '',
            description:'<b>\
            <p>第一份工作，几乎没有面试，打了个电话直接就来了。</p>\
           <p>月薪--内业奇低，外业出差的话就会比较高。</p>\
           <p>公司管住，那就住。</p>\
           <p>两室一厅住10个小伙子，上下铺的。</p>\
           <p>当时的娱乐活动就是大家一起去隔壁的工业大学打篮球。</p>\
           <p>住了不到2个月就被中介通知要搬走，可能人住太多扰民被投诉了。</p>\
           <p>但是帮我们租房的HR姐姐说，押金和剩余房费都没退，可能就是传说中的黑中介吧。</p>\
           <p>某天置地，祝他们生意兴隆。</p>\
           <\b>',
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
            description: '<br>我的地图</br> ',
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
            description: '<br>我的地图 </br> ',
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
            description: '<br>我的地图 </br> ',
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
            description: '<br>我的地图 </br> ',
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
            description: '<br>我的地图 </br> ',
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
            description: '<br>我的地图 </br> ',
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
            description: '<br>我的地图 </br> ',
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
            description: '<br>我的地图 </br> ',
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
            description: '<br>我的地图 </br> ',
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
            description: '<br>我的地图 </br> ',
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
