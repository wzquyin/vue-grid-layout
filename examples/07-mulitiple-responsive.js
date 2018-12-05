var lg = [{
        "x": 0,
        "y": 0,
        "w": 9,
        "h": 10,
        "i": "币种表"
    },
    {
        "x": 9,
        "y": 0,
        "w": 30,
        "h": 1,
        "i": "bar"
    },

    {
        "x": 9,
        "y": 1,
        "w": 30,
        "h": 9,
        "i": "kline"
    },

    {
        "x": 0,
        "y": 10,
        "w": 9,
        "h": 14,
        "i": "最新成交"
    },
    {
        "x": 9,
        "y": 10,
        "w": 20,
        "h": 8,
        "i": "深度图"
    },
    {
        "x": 29,
        "y": 10,
        "w": 19,
        "h": 8,
        "i": "买卖框"
    },

    {
        "x": 9,
        "y": 18,
        "w": 39,
        "h": 6,
        "i": "委托框"
    },
    {
        "x": 39,
        "y": 0,
        "w": 9,
        "h": 10,
        "i": "委托表"
    },
];
var md = [{
        "x": 0,
        "y": 0,
        "w": 7,
        "h": 10,
        "i": "币种表"
    },
    {
        "x": 7,
        "y": 0,
        "w": 17,
        "h": 1,
        "i": "bar"
    },

    {
        "x": 7,
        "y": 1,
        "w": 17,
        "h": 9,
        "i": "kline"
    },
    {
        "x": 0,
        "y": 10,
        "w": 7,
        "h": 10,
        "i": "委托表"
    },
    {
        "x": 7,
        "y": 10,
        "w": 17,
        "h": 7,
        "i": "买卖框"
    },

    {
        "x": 7,
        "y": 17,
        "w": 17,
        "h": 3,
        "i": "委托框"
    },
    {
        "x": 0,
        "y": 20,
        "w": 7,
        "h": 9,
        "i": "最新成交"
    },
    {
        "x": 7,
        "y": 20,
        "w": 17,
        "h": 9,
        "i": "深度图"
    },


];

var sm = [{
        "x": 0,
        "y": 0,
        "w": 9,
        "h": 10,
        "i": "币种表"
    },
    {
        "x": 9,
        "y": 0,
        "w": 17,
        "h": 1,
        "i": "bar"
    },

    {
        "x": 9,
        "y": 1,
        "w": 17,
        "h": 9,
        "i": "kline"
    },

    {
        "x": 0,
        "y": 10,
        "w": 9,
        "h": 10,
        "i": "委托表"
    },
    {
        "x": 9,
        "y": 10,
        "w": 17,
        "h": 7,
        "i": "买卖框"
    },
    {
        "x": 9,
        "y": 17,
        "w": 17,
        "h": 3,
        "i": "委托框"
    },
    {
        "x": 0,
        "y": 20,
        "w": 9,
        "h": 9,
        "i": "最新成交"
    },
    {
        "x": 9,
        "y": 20,
        "w": 17,
        "h": 9,
        "i": "深度图"
    },



];


var xs = [{
        "x": 0,
        "y": 0,
        "w": 18,
        "h": 1,
        "i": "bar"
    },

    {
        "x": 0,
        "y": 1,
        "w": 18,
        "h": 9,
        "i": "kline"
    },
    {
        "x": 0,
        "y": 10,
        "w": 18,
        "h": 7,
        "i": "买卖框"
    },
    {
        "x": 0,
        "y": 17,
        "w": 18,
        "h": 3,
        "i": "委托框"
    },


    {
        "x": 0,
        "y": 20,
        "w": 9,
        "h": 9,
        "i": "最新成交"
    },

    {
        "x": 9,
        "y": 20,
        "w": 9,
        "h": 9,
        "i": "委托表"
    },



];


var xxs = [{
        "x": 0,
        "y": 0,
        "w": 4,
        "h": 1,
        "i": "bar"
    },

    {
        "x": 0,
        "y": 1,
        "w": 4,
        "h": 9,
        "i": "kline"
    },


    {
        "x": 0,
        "y": 10,
        "w": 4,
        "h": 7,
        "i": "买卖框"
    },

    {
        "x": 0,
        "y": 17,
        "w": 4,
        "h": 3,
        "i": "委托框"
    },
    {
        "x": 0,
        "y": 20,
        "w": 4,
        "h": 10,
        "i": "委托表"
    },
];
// var GridLayout = VueGridLayout.GridLayout;
// var GridItem = VueGridLayout.GridItem;

new Vue({
    el: '#app',
    // components: {
    //     "GridLayout": GridLayout,
    //     "GridItem": GridItem
    // },
    data: {
        layout: lg,
        layouts: {
            lg: lg,
            md: md,
            sm: sm,
            xs: xs,
            xxs: xxs
        },
        index: 0,
        colNum: 48,
        rowHeight: 45,
        maxRows: 50000,
        margin: [5, 5],
        isDraggable: true,
        isResizable: true,
        isMirrored: false,
        autoSize: true,
        verticalCompact: true,
        useCssTransforms: true,
        responsive: true,
        //  { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }

        breakpoints: {
            lg: 1919,
            md: 1200 - 1,
            sm: 1024 - 1,
            xs: 768 - 1,
            xxs: 0
        },
        cols: {
            lg: 48,
            md: 24,
            sm: 26,
            xs: 18,
            xxs: 4

        }
    },
    /*
        mounted: function () {
            this.index = this.layout.length;
        },
        methods: {
            increaseWidth: function(item) {
                var width = document.getElementById("content").offsetWidth;
                width += 20;
                document.getElementById("content").style.width = width+"px";
            },
            decreaseWidth: function(item) {

                var width = document.getElementById("content").offsetWidth;
                width -= 20;
                document.getElementById("content").style.width = width+"px";
            },
            removeItem: function(item) {
                //console.log("### REMOVE " + item.i);
                this.layout.splice(this.layout.indexOf(item), 1);
            },
            addItem: function() {
                var self = this;
                //console.log("### LENGTH: " + this.layout.length);
                var item = {"x":0,"y":0,"w":2,"h":2,"i":this.index+"", whatever: "bbb"};
                this.index++;
                this.layout.push(item);
            }
        }
    */
});

/*
function generateLayout() {
    return _.map(_.range(0, 25), function (item, i) {
        var y = Math.ceil(Math.random() * 4) + 1;
        return {
            x: _.random(0, 5) * 2 % 12,
            y: Math.floor(i / 6) * y,
            w: 2,
            h: y,
            i: i.toString(),
            static: Math.random() < 0.05
        };
    });
}*/