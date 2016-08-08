
Q('view',{
    id:'v12',
    background:'#212121',
    items:[
    {
        xtype:'image',
        // visible:false,
        w: '100w',
        h: '100h',
        listener:{
            move:function(){
            if(Q.event.dy>5){
              Q.go('v11',null,Q.trn.smalldown);
            }
          }
        }
    },

    {
      xtype:'image',
      image:Q.R('conTopBut0503'),
      id:'conTopBut0503',
      auto:{w:'70w'},
      position:{v:{center:'-68w'}, h:{left:'10w'}}
    },

    {
      xtype:'image',
      image:Q.R('address0503'),
      id:'address0503',
      auto:{w:'80w'},
      position:{v:{center:'44w'}, h:{left:'10w'}}
    },

    {
      xtype:'image',
      image:Q.R('context0503'),
      id:'context0503',
      auto:{w:'55w'},
      position:{v:{center:'64w'}, h:{left:'10w'}}
    },

    {
      xtype:'image',
      image:Q.R('map'),
      id:'map',
      auto:{w:'80w'},
      position:{v:{center:'-13w'}, h:{left:'10w'}}
    },
    

    ],
    listener:{
        toggle:function() {

            var time = 600;
 
          
        },
        unload:function(){

        },
        init:function(){
            

        }
    }
})