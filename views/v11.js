
Q('view',{
    id:'v11',
    background:'#fefefe',
    items:[
    {
        xtype:'image',
        image:Q.R('bg0501'),
        id:'bg0501',
        // visible:false,
        w: '100w',
        h: '100h',
        listener:{
            move:function(){
          if(Q.event.dy>5){
            Q.go('v10',null,Q.trn.smalldown);
          }else if(Q.event.dy<-5){
            Q.go('v12',null,Q.trn.xg5);
          }
        }
        }
    },

    {
      xtype:'image',
      image:Q.R('cona0501'),
      id:'cona0501',
      auto:{w:'80w'},
      position:{v:{center:'-49w'}, h:{left:'10w'}},
      opacity: 0
    },

    {
      xtype:'image',
      image:Q.R('conb0501'),
      id:'conb0501',
      auto:{w:'80w'},
      position:{v:{center:'-10w'}, h:{left:'10w'}},
      opacity: 0
    },

    {
      xtype:'image',
      image:Q.R('conc0501'),
      id:'conc0501',
      auto:{w:'80w'},
      position:{v:{center:'20w'}, h:{left:'10w'}},
      opacity: 0
    },

    {
      xtype:'image',
      image:Q.R('cond0501'),
      id:'cond0501',
      auto:{w:'80w'},
      position:{v:{center:'50w'}, h:{left:'10w'}},
      opacity: 0
    },
    

    ],
    listener:{
        toggle:function() {

           var time = 600;

        function ani(n,m){

          var d = Q('con'+n+'0501');
          d.animate({
                tos: {
                   opacity: 1,
                  y: d.tager.y,
                  rotation:0
                },
            ease: Q.ease.quartOut,
            time: 1000,
            delay: 200*m
          
          });

        };

        ani('a',1);
        ani('b',2);
        ani('c',3);
        ani('d',4);
          
        },
        unload:function(){

        },
        init:function(){

          var _y = Q.app.w*.3;

          var q1 = Q('cona0501')
          q1.tager = { y:q1.y   };
          q1.y = q1.y - _y;


           var q2 = Q('conb0501')
          q2.tager = { y:q2.y   };
          q2.y = q2.y - _y;

           var q3 = Q('conc0501')
          q3.tager = { y:q3.y   };
          q3.y = q3.y - _y;

           var q4 = Q('cond0501')
          q4.tager = { y:q4.y   };
          q4.y = q4.y - _y;

          q1.rotation =
          q2.rotation =
          q3.rotation =
          q4.rotation = -180;
            

        }
    }
})