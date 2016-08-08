
Q('view',{
    id:'v3',
    background:'#ddd',
    items:[
    {
        xtype:'image',
        image:Q.R('bg0201'),
        id:'bg0201',
        // visible:false,
        // auto:{w:'100w'},
        w:'100w',
        h:'100h',
        listener:{
            move:function(){
              if(Q.event.dy>5){
                Q.go('v2',null,Q.trn.smalldown);
              }else if(Q.event.dy<-5){
                Q.go('v4',null,Q.trn.xg2);
              }
            }
        }
    },
    {
        xtype:'image',
        image:Q.R('con0201'),
        id:'con0201',
        opacity: 0,
        auto:{w:'70w'},
        anchorX: 0.5,
        anchorY: 0.5,
        x:'50w',
        y:'-45h'
    },
    {
        xtype:'image',
        image:Q.R('conTest0201'),
        id:'conTest0201',
        auto:{w:'70w'},
        opacity:0,
        x: '15w',
        y: '60h'
    },

    ],
    listener:{

        toggle:function() {
            var time = 600;
            Q('con0201').animate({
                tos: {
                    y:'45h',
                  rotation: 360,
                  opacity: 1,
                },
            ease: Q.ease.quartOut,
            time: 1200
          });

            Q('conTest0201').animate({
                tos: {
                  opacity: 1,
                  y: '75h'
                },
            ease: Q.ease.quartOut,
            delay:800,
            time: 1500
          });

        },
        unload:function(){

        },
        init:function(){

        }
    }
})