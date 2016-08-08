
Q('view',{
    id:'v6',
    background:'#fff',
    items:[
    {
        xtype:'image',
        image:Q.R('bg0401'),
        id:'bg0401',
        // visible:false,
        // auto:{w:'100h'},
        w: '100w',
        h: '100h',
        listener:{
            move:function(){
              if(Q.event.dy>5){
                Q.go('v5',null,Q.trn.smalldown);
              }else if(Q.event.dy<-5){
                Q.go('v7',null,Q.trn.xg12);
              }
            }
        }
    },

    {
        xtype:'image',
        image:Q.R('conTop0401'),
        id:'conTop0401',
        auto:{w:'66w'},
        position: {v: {top:'-50w'}, h: {center: '0w'}}
    },

    {
        xtype:'image',
        image:Q.R('conTopTest0401'),
        id:'conTopTest0401',
        auto:{w:'22w'},
        position:{v:{top:'10w'},h:{center:'0w'}},
        opacity: 0,
    },

    {
        xtype:'image',
        image:Q.R('conMiddleRight0401'),
        id:'conMiddleRight0401',
        auto:{w:'32w'},
        position: {v:{top:'33w'}, h:{left: '0w'}}
    },

    {
        xtype:'image',
        image:Q.R('conMiddleCenter0401'),
        id:'conMiddleCenter0401',
        auto:{w:'32w'},
        position: {v:{top:'33w'}, h:{center: '0w'}}
    },

    {
        xtype:'image',
        image:Q.R('conMiddleLeft0401'),
        id:'conMiddleLeft0401',
        auto:{w:'31w'},
        position: {v:{top:'33w'}, h:{right: '0w'}}
    },

    {
        xtype:'image',
        image:Q.R('conBotRight0401'),
        id:'conBotRight0401',
        auto:{w:'100w'},
        position: {v:{center:'40w'}, h:{left:'0w'}},
    },

    {
        xtype:'image',
        image:Q.R('conBotLeft0401'),
        id:'conBotLeft0401',
        auto:{w:'30w'},
        position: {v:{center:'41w'}, h:{left:'-60w'}},
    },

    {
        xtype:'image',
        image:Q.R('conBotTest0401'),
        id:'conBotTest0401',
        auto:{w:'70w'},
        position: {v:{center:'66w'}, h:{center:'0w'}},
    },
    
    ],
    listener:{
        toggle:function() {

            var time = 600;
            Q('conTop0401').animate({
                tos: {
                  y: '-3w',
                },
            ease: Q.ease.quartOut,
            time: time
          });

            Q('conTopTest0401').animate({
                tos: {
                  opacity: 1,
                  y: Q('conTopTest0401').tager.y
                },
            ease: Q.ease.quartOut,
            time: time,
            delay: 400
          });

            Q('conBotLeft0401').animate({
                tos: {
                  x: '10w'
                },
            ease: Q.ease.quartOut,
            time: time,
            delay: 1000
          });

            Q('conBotTest0401').animate({
                tos: {
                  y: Q('conBotTest0401').tager.y
                },
            ease: Q.ease.quartOut,
            time: time,
            delay: 1600
          });

            Q('conMiddleRight0401').animate({
                tos: {
                  x: Q('conMiddleRight0401').tager.x
                },
            ease: Q.ease.quartOut,
            time: 600,
            delay: 2200
          });

            Q('conMiddleCenter0401').animate({
                tos: {
                  x: Q('conMiddleCenter0401').tager.x
                },
            ease: Q.ease.quartOut,
            time: 600,
            delay: 2600
          });
            Q('conMiddleLeft0401').animate({
                tos: {
                  x: Q('conMiddleLeft0401').tager.x
                },
            ease: Q.ease.quartOut,
            time: 600,
            delay: 3000
          });


        },
        unload:function(){

        },
        init:function(){

          var _x = Q.app.w;

          var q1 = Q('conMiddleRight0401')
          q1.tager = { x:q1.x   };
          q1.x = q1.x + _x;


          var q2 = Q('conMiddleCenter0401')
          q2.tager = { x:q2.x   };
          q2.x = q2.x + _x;

           var q3 = Q('conMiddleLeft0401')
          q3.tager = { x:q3.x   };
          q3.x = q3.x + _x;

          var q4 = Q('conTopTest0401')
          q4.tager = { y:q4.y   };
          q4.y = q4.y - _x * 0.5;

          var q5 = Q('conBotTest0401')
          q5.tager = { y:q5.y   };
          q5.y = q5.y + _x * 0.5;
            

        }
    }
})