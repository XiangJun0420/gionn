var header = new Vue({
    el: '#header',
    data: {
        title: '見積書',
        subTitle: 'ESTIMATE',
        small: '2014/12/31　見積番号：0000000-000'
    }
});

var content = new Vue({
    el: '#content',
    data: {
        trIndex: 0,
        company: "株式会社○○",
        user: "サンプル太郎 様",
        thContent: {
            th1: '品番•品名',
            th2: '数量',
            th3: '単価',
            th4: '金額'
        },
        tdContentData: [
            {td1: "", td2: "", td3: "", td4: ""},
            {td1: "", td2: "", td3: "", td4: ""},
            {td1: "", td2: "", td3: "", td4: ""},
            {td1: "", td2: "", td3: "", td4: ""},
            {td1: "", td2: "", td3: "", td4: ""},
            {td1: "", td2: "", td3: "", td4: ""},
            {td1: "", td2: "", td3: "", td4: ""},
            {td1: "", td2: "", td3: "", td4: ""},
        ],
        sign: "",
        sel1: "0",
        sel2: "0",
        sel3: "0",
        selContent1: [
            {
                key: "0",
                value: " "
            },
            {
                key: "1",
                value: "食物"
            },
            {
                key: "2",
                value: "用品"
            },
        ],
        selContent2: {
            "0": [],
            "1": [
                {
                    key: "0",
                    value:  " "
                },
                {
                    key: "1",
                    value:  "水果"
                },
                {
                    key: "2",
                    value: "蔬菜"
                }
            ],
            "2": [
                {
                    key: "0",
                    value:  " "
                },
                {
                    key: "1",
                    value: "厨具"
                },
                {
                    key: "2",
                    value: "棋牌"
                }
            ]
        },
        selContent3: {
            "0": {},
            "1": {
                "0": [],
                "1": [
                    { key: "0", value:  " " },
                    { key: "1", value: "哈密瓜" },
                    { key: "2", value: "西瓜" },
                    { key: "3", value: "甜瓜" }
                ],
                "2":[
                    { key: "0", value:  " " },
                    { key: "1", value: "南瓜" },
                    { key: "2", value: "冬瓜" },
                    { kye: "3", value: "黄瓜" }
                ]
            },
            "2": {
                "1":[
                    { key: "0", value:  " " },
                    { key: "1", value: "菜刀" },
                    { key: "2", value: "剁刀" },
                    { key: "3", value: "打蛋器" }
                ],
                "2":[
                    { key: "0", value:  " " },
                    { key: "1", value: "麻将" },
                    { key: "2", value: "扑克" },
                    { key: "3", value: "牌九" },
                    { key: "3", value: "色子" }
                ]
            }
        }
    },
    computed: {
        memoContent: function(){
            return "使用者：" + this.sign;
        },
        tdContent: function(){
            return this.tdContentData;
        },
    },
    methods: {
        pop: function(index){
            layer.open({
                type: 1,
                title: "",
                //skin: 'layui-layer-rim', //加上边框
                area: ['40vw', '50vh'], //宽高
                content: $("#popContainer")
            });
            this.trIndex = index;
        },
        ok: function() {
            if (this.tdContentData[this.trIndex].td1) {
                this.tdContentData[this.trIndex].td1 = this.getValue(this.sel3, this.selContent3[this.sel1][this.sel2]);
            } else {
                this.tdContentData[this.trIndex] = {td1: this.getValue(this.sel3, this.selContent3[this.sel1][this.sel2]), td2: 0, td3: 0, td4: 0,};
            }
            if (this.tdContentData.length - 1 === this.trIndex) {
                this.tdContentData.push({td1: "", td2: "", td3: "", td4: ""});
            } 
            this.sign = this.sign + " ";
            layer.closeAll();
        },
        initSel1: function() {
            this.sel2 = "0";
            this.sel3 = "0";
        },
        initSel2: function() {
            this.sel3 = "0";
        },
        getValue: function(key ,arr) {
            var ret = "";
            if(arr)
            for(var i =0;i < arr.length;i++){
                if(key === arr[i].key) {
                    ret = arr[i].value;
                    break;
                }
            }
            return ret;
        }
    }
});