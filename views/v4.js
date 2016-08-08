Q('view', {
  id: 'v4',
  background: '#fff',
  items: [{
      xtype: 'image',
      w: '100w',
      h: '100h',
      listener: {
        move: function() {
          if (Q.event.dy > 5) {
            Q.go('v3', null, Q.trn.smalldown);
          } else if (Q.event.dy < -5) {
            Q.go('v5', null, Q.trn.xg4);
          }
        }
      }
    }, {
      xtype: 'image',
      image: Q.R('bg0203'),
      id: 'bg0203',
      w: '100w',
      h: '100h',
    },

    {
        xtype:'image',
        image:Q.R('con0203'),
        id:'con0203',
        opacity: 0,
        auto:{w:'70w'},
        anchorX: 0.5,
        anchorY: 0.5,
        x:'50w',
        y:'-45h'
    },
    {
        xtype:'image',
        image:Q.R('conTest0203'),
        id:'conTest0203',
        auto:{w:'70w'},
        opacity:0,
        position:{h:{center:'0w'}},
        y: '55h'
    },
  ],
  listener: {
    toggle: function() {

      var time = 600;
            Q('con0203').animate({
                tos: {
                    y:'45h',
                  rotation: 360,
                  opacity: 1,
                },
            ease: Q.ease.quartOut,
            time: 1200
          });

            Q('conTest0203').animate({
                tos: {
                  opacity: 1,
                  y: '70h'
                },
            ease: Q.ease.quartOut,
            delay:800,
            time: 1500
          });



    },
    unload: function() {

    },
    init: function() {


    }
  }
})
