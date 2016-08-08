
Q('view',{
    id:'v10',
    background:'#fefefe',
    items:[
    {
        xtype:'image',
        image:Q.R('conMiddle05'),
        id:'conMiddle05',
        // visible:false,
        w: '100w',
        h: '100h',
        listener:{
            move:function(){
          if(Q.event.dy>5){
            Q.go('v9',null,Q.trn.smalldown);
          }else if(Q.event.dy<-5){
            Q.go('v11',null,Q.trn.xg10);
          }
        }
        }
    },
    
    {
      xtype:'image',
      image:Q.R('conBot05'),
      id:'conBot05',
      auto:{w:'100w'},
      position:{v:{bottom:'0h'}, h:{left:'0w'}}
    },

    {
      xtype:'image',
      image:Q.R('conBotTextBg05'),
      id:'conBotTextBg05',
      auto:{w:'100w'},
      position:{v:{bottom:'9h'}, h:{left:'0w'}}
    },

    {
      xtype:'image',
      image:Q.R('conBotText05'),
      id:'conBotText05',
      auto:{w:'64w'},
      position:{v:{bottom:'38w'}, h:{left:'120w'}}
    },

    {
      xtype:'image',
      image:Q.R('conMiddleText05'),
      id:'conMiddleText05',
      auto:{w:'68w'},
      position:{v:{center:'12w'}, h:{center:'42w'}},
      scaleX: 6,
      scaleY: 6,
      anchorX: 0.5,
      anchorY: 0.5,
      opacity: .2
    },


    ],
    listener:{
        toggle:function() {

            var time = 600;
            Q('conMiddleText05').animate({
                tos: {
                  opacity: 1,
                  scaleX: .9,
                  scaleY: .9,
                },
            ease: Q.ease.quartOut,
            time: time,
            cak:function(){
              Q('conMiddleText05').animate({
                tos:{
                  scaleX: 1,
                  scaleY: 1,
                },
                time:100,
                
              });
            }
            
          });

             Q('conBotText05').animate({
                tos: {
                  x: '17w'
                },
            ease: Q.ease.quartOut,
            time: time,
            delay: 600,
            cak:function(){
              Q('conBotText05').animate({
                tos:{
                  x: '19w'
                },
                ease: Q.ease.quartOut,
                time:100,
              });
            }
          });
          
        },
        unload:function(){

        },
        init:function(){
            

        }
    }
})