
Q('view',{
    id:'v9',
    background:'#faf1e4',
    items:[
    {
        xtype:'image',
        image:Q.R('bg0401'),
        id:'bg0404',
        // visible:false,
        w: '100w',
        h: '100h',
        listener:{
            move:function(){
          if(Q.event.dy>5){
            Q.go('v8',null,Q.trn.smalldown);
          }else if(Q.event.dy<-5){
            Q.go('v10',null,Q.trn.xg9);
          }
        }
        }
    },
    
   {
        xtype:'image',
        image:Q.R('top0402'),
        id:'top0404',
        auto:{w:'100w'},
        position:{v:{center:'-70w'},h:{left:'0w'}},
    },

    {
        xtype:'image',
        image:Q.R('conTopText0404'),
        id:'conTopText0404',
        auto:{w:'24w'},
        delay: 50,
        position:{v:{center:'-68w'},h:{center:'0w'}}
    },

    {
        xtype:'image',
        image:Q.R('con1_0404'),
        id:'con1_0404',
        auto:{w:'32w'},
        position: {v:{center:'-10w'}, h:{left:'0w'}},
        opacity: 1
    },

    {
        xtype:'image',
        image:Q.R('con2_0404'),
        id:'con2_0404',
        auto:{w:'41w'},
        position: {v:{center:'-10w'}, h:{left:'29w'}},
        opacity: 1
    },

    {
        xtype:'image',
        image:Q.R('con3_0404'),
        id:'con3_0404',
        auto:{w:'33w'},
        position: {v:{center:'-10w'}, h:{left:'67w'}},
        opacity: 1
    },


    {
        xtype:'image',
        image:Q.R('conText0404'),
        id:'conText0404',
        // auto:{w:'100w'},
        w: '100w',
        h: '28w',
        position: {v:{center:'40w'}, h:{left:'0w'}},
        opacity: 0
    },

    {
        xtype:'image',
        image:Q.R('conBotTest0401'),
        id:'conBotTest0404',
        auto:{w:'70w'},
        position: {v:{center:'66w'}, h:{center:'0w'}}
    },

    ],
    listener:{
        toggle:function() {

            var time = 600;
            Q('conTopText0404').animate({
                tos: {
                  y: Q('conTopText0404').tager.y
                },
            ease: Q.ease.quartOut,
            time: time
          });

            Q('conText0404').animate({
                tos: {
                  opacity: 1
                },
            time: time,
            delay: 600
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

            ani('con1_0404', 0);
            ani('con2_0404', 1);
            ani('con3_0404', 2);

             Q('conBotTest0404').animate({
                tos: {
                  y: Q('conBotTest0404').tager.y
                },
            ease: Q.ease.quartOut,
            time: time,
            delay: 1000
          });
          


        },
        unload:function(){

        },
        init:function(){
            var _x = Q.app.w;
            var _y = Q.app.h;

          var q1 = Q('con1_0404')
          q1.tager = { x:q1.x   };
          q1.x = q1.x + _x;

          var q2 = Q('con2_0404')
          q2.tager = { x:q2.x   };
          q2.x = q2.x + _x;

           var q3 = Q('con3_0404')
          q3.tager = { x:q3.x   };
          q3.x = q3.x + _x;

          var q4 = Q('conBotTest0404')
          q4.tager = { y:q4.y   };
          q4.y = q4.y + _y * 0.5;

          var q5 = Q('conTopText0404')
          q5.tager = { y:q5.y   };
          q5.y = - q5.x + _x * 0.2;

        }
    }
})