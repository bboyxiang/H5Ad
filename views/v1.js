Q('view', {

  id: 'v1',
  background: '#000',
  items: [{
      xtype: 'image',
      image: Q.R('bg01'),
      id: 'bg01',
      // visible:false,
      // auto:{w:'100h'},
      w: '100w',
      h: '100h',
      listener: {
        move:function(){
          if(Q.event.dy<-5){
            Q.go('v2',null,Q.trn.xg2);
          }
        }
      }
    }, 

    {
      xtype: 'image',
      image: Q.R('text0101'),
      id: 'text0101',
      auto: { w: '64w' },
      position: {v: {center: '-42w'}, h: {center: '-10w'}},
      scaleX: 3,
      scaleY: 3,
      opacity: 0.2

    },
    {
      xtype: 'image',
      image: Q.R('text0201'),
      id: 'text0201',
      auto: { w: '78w' },
      position: {v: {center: '-52w'}, h: {center: '-50w'}},
      scaleX: 3,
      scaleY: 3,
      opacity: 0

    },
    {
      xtype: 'image',
      image: Q.R('text0301'),
      id: 'text0301',
      auto: { w: '55w' },
      x: '-18w',
      y: '40h',
      scaleX: 3,
      scaleY: 3,
      opacity: 0

    },
    {
      xtype: 'image',
      image: Q.R('text0401'),
      id: 'text0401',
      auto: { w: '40w' },
      x: '0w',
      y: '68h',
      scaleX: 3,
      scaleY: 3,
      opacity: 0

    },

  ],
  listener: {
    toggle: function() {


      var time = 800,delay = 400;

      Q('text0101').animate({
        tos: {
          scaleX: 1,
          scaleY: 1,
          x: '29w',
        },
        ease: Q.ease.quartOut,
        time: time
      });
      Q('text0101').animate({
        tos: {
          opacity: 1
        },
        time: time
      });

      Q('text0201').animate({
        tos: {
          scaleX: 1,
          scaleY: 1,
          x: '10w',
          y: '25h',
        },
        ease: Q.ease.quartOut,
        time: time,
        delay: delay
      });
      Q('text0201').animate({
        tos: {
          opacity: 1
        },
        time: time,
        delay: delay
      });

      Q('text0301').animate({
        tos: {
          scaleX: 1,
          scaleY: 1,
          x: '20w',
          y: '54h',
        },
        ease: Q.ease.quartOut,
        time: time,
        delay: delay*2
      });
      Q('text0301').animate({
        tos: {
          opacity: 1
        },
        time: time,
        delay: delay*2
      });

      Q('text0401').animate({
        tos: {
          scaleX: 1,
          scaleY: 1,
          x: '25w',
          y: '78h',
        },
        ease: Q.ease.quartOut,
        time: time,
        delay: delay*3
      });
      Q('text0401').animate({
        tos: {
          opacity: 1
        },
        time: time,
        delay: delay*3
      });



    },
    unload: function() {

    },
    init: function() {
      // Q('text0101').world = Q('text0201')

    }
  }
})
