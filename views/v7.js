
Q('view',{
    id:'v7',
    background:'#faf1e4',
    items:[
    {
        xtype:'image',
        image:Q.R('bg0401'),
        id:'bg0402',
        // visible:false,
        w: '100w',
        h: '100h',
        listener:{
            move:function(){
          if(Q.event.dy>5){
            Q.go('v6',null,Q.trn.smalldown);
          }else if(Q.event.dy<-5){
            Q.go('v8',null,Q.trn.xg12);
          }
        }
        }
    },
    
    {
        xtype:'image',
        image:Q.R('top0402'),
        id:'top0402',
        auto:{w:'100w'},
        position:{v:{center:'-70w'},h:{left:'0w'}},
    },

    {
        xtype:'image',
        image:Q.R('topText0402'),
        id:'topText0402',
        auto:{w:'32w'},
        position:{v:{center:'-68w'},h:{center:'0w'}}
    },

    {
        xtype:'image',
        image:Q.R('conMiddle1_0402'),
        id:'conMiddle1_0402',
        auto:{w:'28w'},
        position: {v:{center:'-32w'}, h:{center:'-32w'}},
        opacity: 1
    },

    {
        xtype:'image',
        image:Q.R('conMiddle2_0402'),
        id:'conMiddle2_0402',
        auto:{w:'28w'},
        position: {v:{center:'-32w'}, h:{center:'0w'}},
        opacity: 1
    },

    {
        xtype:'image',
        image:Q.R('conMiddle3_0402'),
        id:'conMiddle3_0402',
        auto:{w:'28w'},
        position: {v:{center:'-32w'}, h:{center:'32w'}},
        opacity: 1
    },

    {
        xtype:'image',
        image:Q.R('conMiddle4_0402'),
        id:'conMiddle4_0402',
        auto:{w:'28w'},
        position: {v:{center:'5w'}, h:{center:'-16w'}},
        opacity: 1
    },

    {
        xtype:'image',
        image:Q.R('conMiddle5_0402'),
        id:'conMiddle5_0402',
        auto:{w:'28w'},
        position: {v:{center:'5w'}, h:{center:'16w'}},
        opacity: 1
    },

    {
        xtype:'image',
        image:Q.R('conText0402'),
        id:'conText0402',
        w: '100w',
        h: '28w',
        position: {v:{center:'40w'}, h:{left:'0w'}},
        opacity: 0
    },

    {
        xtype:'image',
        image:Q.R('conBotTest0401'),
        id:'conBotTest0402',
        auto:{w:'70w'},
        position: {v:{center:'66w'}, h:{center:'0w'}},
    },
    ],
    listener:{
        toggle:function() {

            var time = 600;

            Q('topText0402').animate({
                tos: {
                  y: Q('topText0402').tager.y
                },
            ease: Q.ease.quartOut,
            time: time
          });

             Q('conText0402').animate({
                tos: {
                  opacity: 1
                },
            time: time,
            delay: 600
          });

             Q('conBotTest0402').animate({
                tos: {
                  y: Q('conBotTest0402').tager.y
                },
            ease: Q.ease.quartOut,
            time: time,
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

            ani('conMiddle1_0402', 0);
            ani('conMiddle2_0402', 1);
            ani('conMiddle3_0402', 2);
            ani('conMiddle4_0402', 3);
            ani('conMiddle5_0402', 4);
            
          
        },
        unload:function(){

        },
        init:function(){
          var _x = Q.app.w;
          var _y = Q.app.h;

          var q1 = Q('conMiddle1_0402')
          q1.tager = { x:q1.x   };
          q1.x = q1.x + _x;

          var q2 = Q('conMiddle2_0402')
          q2.tager = { x:q2.x   };
          q2.x = q2.x + _x;

           var q3 = Q('conMiddle3_0402')
          q3.tager = { x:q3.x   };
          q3.x = q3.x + _x;

          var q4 = Q('conMiddle4_0402')
          q4.tager = { x:q4.x   };
          q4.x = q4.x + _x;

          var q5 = Q('conMiddle5_0402')
          q5.tager = { x:q5.x   };
          q5.x = q5.x + _x;

          var q6 = Q('conBotTest0402')
          q6.tager = { y:q6.y   };
          q6.y = q6.y + _y * 0.2;

          var q7 = Q('topText0402')
          q7.tager = { y:q7.y   };
          q7.y = - q7.x + _x * 0.2;

        }
    }
})