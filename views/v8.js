
Q('view',{
    id:'v8',
    background:'#faf1e4',
    items:[
    {
        xtype:'image',
        image:Q.R('bg0401'),
        id:'bg0403',
        // visible:false,
        w: '100w',
        h: '100h',
        listener:{
            move:function(){
          if(Q.event.dy>5){
            Q.go('v7',null,Q.trn.smalldown);
          }else if(Q.event.dy<-5){
            Q.go('v9',null,Q.trn.xg12);
          }
        }
        }
    },
    
   {
        xtype:'image',
        image:Q.R('top0402'),
        id:'top0403',
        auto:{w:'100w'},
        position:{v:{center:'-70w'},h:{left:'0w'}},
    },

    {
        xtype:'image',
        image:Q.R('conTop0403'),
        id:'conTop0403',
        auto:{w:'32w'},
        position:{v:{center:'-68w'},h:{center:'0w'}}
    },

    {
        xtype:'image',
        image:Q.R('con1_0403'),
        id:'con1_0403',
        auto:{w:'28w'},
        x: '6w',
        y: '24h',
        position: {v:{center:'-32w'}, h:{center:'-32w'}},
        opacity: 1
    },

    {
        xtype:'image',
        image:Q.R('con2_0403'),
        id:'con2_0403',
        auto:{w:'28w'},
        position: {v:{center:'-32w'}, h:{center:'0w'}},
        opacity: 1
    },

    {
        xtype:'image',
        image:Q.R('con3_0403'),
        id:'con3_0403',
        auto:{w:'28w'},
        position: {v:{center:'5w'}, h:{center:'0w'}},
        opacity: 1
    },

    {
        xtype:'image',
        image:Q.R('con4_0403'),
        id:'con4_0403',
        auto:{w:'28w'},
        position: {v:{center:'5w'}, h:{center:'32w'}},
        opacity: 1
    },

    {
        xtype:'image',
        image:Q.R('conText0403'),
        id:'conText0403',
        w: '100w',
        h: '28w',
        position: {v:{center:'40w'}, h:{left:'0w'}},
        opacity: 0
    },

    {
        xtype:'image',
        image:Q.R('conBotTest0401'),
        id:'conBotTest0403',
        auto:{w:'70w'},
        position: {v:{center:'66w'}, h:{center:'0w'}},
    },

    ],
    listener:{
        toggle:function() {

            var time = 600;


            Q('conTop0403').animate({
                tos: {
                  y: Q('conTop0403').tager.y
                },
            ease: Q.ease.quartOut,
            time: time
          });

            Q('conText0403').animate({
                tos: {
                  opacity: 1
                },
            time: time,
            delay: 600
          });

             Q('conBotTest0403').animate({
                tos: {
                  y: Q('conBotTest0403').tager.y
                },
            time: time,
            ease: Q.ease.quartOut,
            delay: 1000
          });
            
            function ani(obj, num) {
                Q(obj).animate({
                    tos: {
                      x: Q(obj).tager.x
                    },
                ease: Q.ease.quartOut,
                time: time,
                delay: 1600 + 400 * num
              });
            };

            ani('con1_0403', 0);
            ani('con2_0403', 1);
            ani('con3_0403', 2);
            ani('con4_0403', 3);

        },
        unload:function(){

        },
        init:function(){
            var _x = Q.app.w;
            var _y = Q.app.h;

          var q1 = Q('con1_0403')
          q1.tager = { x:q1.x   };
          q1.x = q1.x + _x;

          var q2 = Q('con2_0403')
          q2.tager = { x:q2.x   };
          q2.x = q2.x + _x;

           var q3 = Q('con3_0403')
          q3.tager = { x:q3.x   };
          q3.x = q3.x + _x;

          var q4 = Q('con4_0403')
          q4.tager = { x:q4.x   };
          q4.x = q4.x + _x;

          var q5 = Q('conBotTest0403')
          q5.tager = { y:q5.y   };
          q5.y = q5.y + _y * 0.2;

          var q6 = Q('conTop0403')
          q6.tager = { y:q6.y   };
          q6.y = - q6.x + _x * 0.2;

        }
    }
})