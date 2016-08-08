
Q('view',{
    id:'v5',
    background:'#fff',
    items:[
    {
        xtype:'image',
        image:Q.R('bg03'),
        id:'bg03',
        // visible:false,
        // auto:{w:'100h'},
        w: '100w',
        h: '100h',
        listener:{
            move:function(){
              if(Q.event.dy>5){
                Q.go('v4',null,Q.trn.smalldown);
              }else if(Q.event.dy<-5){
                Q.go('v6',null,Q.trn.xg12);
              }
            }
        }
    },
    
    {
        xtype:'image',
        image:Q.R('conTopTest03'),
        id:'conTopTest03',
        auto:{w:'70w'},
        position: {v: {center: '-90w'}, h: {center: '15w'}},
    },

    {
        xtype:'image',
        image:Q.R('con03Middle'),
        id:'con03Middle',
        auto:{h:'100h'},
        x: '0',
        y: '0',
    },

    {
        xtype:'image',
        image:Q.R('conMiddleTest03'),
        id:'conMiddleTest03',
        auto:{w:'60w'},
        x: '100w',
        y: '33h',
    },
    

    {
        xtype:'image',
        image:Q.R('conBotTest03'),
        id:'conBotTest03',
        auto:{w:'50w'},
        position: {v: {center: '45w'}, h: {center: '0w'}},
        opacity: 0
    },

    {
        xtype:'image',
        image:Q.R('conBot03'),
        id:'conBot03',
        auto:{w:'65w'},
        position: {v: {center: '65w'}, h: {center: '34w'}},
        anchorX: 0.5,
        anchorY: 0.5
    },
    ],
    listener:{
        toggle:function() {

             var time = 800;
            Q('conMiddleTest03').animate({
                tos: {
                  x: '34w',
                },
            ease: Q.ease.quartOut,
            time: time,
            delay: 600
          });

            Q('conTopTest03').animate({
                tos: {
                  y: '18w',
                },
            ease: Q.ease.quartOut,
            time: time
          });

            Q('conBotTest03').animate({
                tos: {
                  opacity: 1,
                },
            ease: Q.ease.quartOut,
            time: time,
            delay: 1000

          });

            Q('conBot03').animate({
                tos: {
                  y: Q('conBot03').target.y,
                  rotation: 720,
                },
            ease: Q.ease.quartOut,
            time: time,
            delay: 1400,
            cak:function(){
                Q('conBot03').animate({
                    tos:{
                        opacity: 0.4,
                    },
                    count:2,
                    time:200,
                    cak:function() {
                        Q('conBot03').animate({
                            tos:{
                                opacity: 1
                            },
                            time:100
                        })
                    }
                });
            }

          });
          


        },
        unload:function(){

        },
        init:function(){
            var _x = Q.app.w;
            var _y = Q.app.h;

            var q1 = Q('conBot03');
            q1.target = {y: q1.y};
            q1.y = q1.y + _y * 0.2;
        }
    }
})