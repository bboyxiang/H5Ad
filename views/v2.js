
Q('view',{
    id:'v2',
    background:'#faf1e4',
    items:[
    {
        xtype:'image',
        // visible:false,
        // auto:{w:'100h'},
        w: '100w',
        h: '100h',
        listener:{
            move:function(){
              if(Q.event.dy>5){
                Q.go('v1',null,Q.trn.smalldown);
              }else if(Q.event.dy<-5){
                Q.go('v3',null,Q.trn.xg2);
              }
            }
        }
    },
    {
        xtype:'image',
        image:Q.R('bg0202'),
        id:'bg0202',
        w: '100w',
        h: '100h',
    },

    {
        xtype:'image',
        image:Q.R('con0202'),
        id:'con0202',
        opacity: 0,
        auto:{w:'70w'},
        anchorX: 0.5,
        anchorY: 0.5,
        x:'50w',
        y:'-45h'
    },
    {
        xtype:'image',
        image:Q.R('conTest0202'),
        id:'conTest0202',
        auto:{w:'70w'},
        opacity:0,
        position:{h:{center:'0w'}},
        y: '60h'
    },
    ],
    listener:{
        toggle:function() {

            var time = 600;
            Q('con0202').animate({
                tos: {
                    y:'45h',
                  rotation: 360,
                  opacity: 1,
                },
            ease: Q.ease.quartOut,
            time: 1200
          });

            Q('conTest0202').animate({
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
            // var tes202 = Q('conTest0202');

            // tes202.tager = {
            //     x:tes202.x,
            //     y:tes202.y
            //  }

            //  tes202.x = tes202.x - Q.app.w *.3;
            

        }
    }
})