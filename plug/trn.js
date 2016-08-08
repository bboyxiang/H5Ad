!function(trn){
	trn.xg1=function(m){
		//斜线刷屏
		var an=[];
		var anX=6;
		var anY=12;
		var antime=500;
		for(var i=0;i<anX;i++){
			var _an=[];
			for(var j=0;j<anY;j++){
				_an.push(Q('image',{
					anchorX:.5,
					anchorY:.5,
					x:(i/anX)*Q.app.w+Q.app.w*.5/anX,
					y:(j/anY)*Q.app.h+Q.app.h*.5/anY,
					w:Q.app.w/anX,
					h:Q.app.h/anY,
					image:m.b.cas,
					cover:{
						cj:{
						x:m.a.cas.width/anX*i,
						y:m.a.cas.height/anY*j,
						w:m.a.cas.width/anX,
						h:m.a.cas.height/anY
						},
						draw:function(ct){
						var ts = this;
						ct.save();
						ct.globalAlpha = ts.opacity;
						ct.translate(ts.x,ts.y);
						ct.scale(ts.scaleX,ts.scaleY);
						ts.rotation&&ct.rotate(ts.rotation*Math.PI/180);
						ct.drawImage(this.image,
							ts.cj.x,ts.cj.y,ts.cj.w,ts.cj.h,
							-ts.anchorX*ts.w,-ts.anchorY*ts.h,ts.w,ts.h);
						ct.restore();
					}
					}
					
				}));
				_an[j].set({
					// x:_an[j].x+_an[j].w,
					// y:_an[j].y+_an[j].h,
					opacity:0,
					animate:{
						tos:{
							opacity:1
							// x:_an[j].x,
							// y:_an[j].y
						},
						time:antime,
						delay:(i*anX+j*anY)*5,
						cak:(i+j)==anX+anY-2?m.cak:null
					}
				});
			}
			an.push(_an);
		}
		m.draw=function(ct){
			m.a.draw(ct);
			an.forEach(function(_m){
				_m.forEach(function(__m){__m.draw(ct)})
			})
		}
	}
	trn.xg2 = function(m){
		//随机位置拼图
		var an=[];
		var anX=6;
		var anY=12;
		var antime=500;
		for(var i=0;i<anY;i++){
			var _an=[];
			for(var j =0;j<anX;j++){
				_an.push(Q('image',{
					anchorX:.5,
					anchorY:.5,
					w:Q.app.w/anX,
					h:Q.app.h/anY,

					x:j*Q.app.w/anX+.5*Q.app.w/anX,
					y:i*Q.app.h/anY+.5*Q.app.h/anY,

					image:m.b.cas,
					cover:{
						cj:{
							x:j*m.a.cas.width/anX,
							y:i*m.a.cas.height/anY,
							w:m.a.cas.width/anX,
							h:m.a.cas.height/anY
						},
						draw:function(ct){

							var ts = this;

								ct.save();
								ct.globalAlpha = ts.opacity;
								ct.translate(ts.x,ts.y);
								ct.scale(ts.scaleX,ts.scaleY);
								ts.rotation&&ct.rotate(ts.rotation*Math.PI/180);
								ct.drawImage(this.image,
									ts.cj.x,ts.cj.y,ts.cj.w,ts.cj.h,
									-ts.anchorX*ts.w,-ts.anchorY*ts.h,ts.w,ts.h);
								ct.restore();

						}
					}
				}));

				_an[j].set({
						x:_an[j].x-_an[j].w*(Q.rm(20)-10),
						y:_an[j].y-_an[j].h*(Q.rm(20)-10),
						opacity:0,
						//scaleY:1,
						animate:{
							tos:{
								//x:Q.app.w*.5,
								opacity:1,
								x:_an[j].x,
								y:_an[j].y
							},
							time:antime,
							delay:(i*anX+j*anY)*10,
							cak:(i+j)==anX+anY-2?m.cak:null
						}
				});
				
			}
			an.push(_an);
		}


		      m.draw = function(ct){

		       m.a.draw(ct);

		       an.forEach(function(_m){

		       	_m.forEach(function(__m){__m.draw(ct)});

		       })
		    }     
		}
		trn.xg3=function(m){
			//内到外显示
		var an=[];
		var anX=6;
		var anY=12;
		var antime=500;
		for(var i=0;i<anX;i++){
			var _an=[];
			for(var j=0;j<anY;j++){
				_an.push(Q('image',{
					anchorX:.5,
					anchorY:.5,
					x:(i/anX)*Q.app.w+Q.app.w*.5/anX,
					y:(j/anY)*Q.app.h+Q.app.h*.5/anY,
					w:Q.app.w/anX,
					h:Q.app.h/anY,
					image:m.b.cas,
					cover:{
						cj:{
						x:m.a.cas.width/anX*i,
						y:m.a.cas.height/anY*j,
						w:m.a.cas.width/anX,
						h:m.a.cas.height/anY
						},
						draw:function(ct){
						var ts = this;
						ct.save();
						ct.globalAlpha = ts.opacity;
						ct.translate(ts.x,ts.y);
						ct.scale(ts.scaleX,ts.scaleY);
						ts.rotation&&ct.rotate(ts.rotation*Math.PI/180);
						ct.drawImage(this.image,
							ts.cj.x,ts.cj.y,ts.cj.w,ts.cj.h,
							-ts.anchorX*ts.w,-ts.anchorY*ts.h,ts.w,ts.h);
						ct.restore();
					}
					}
					
				}));
				_an[j].set({
					// x:_an[j].x+_an[j].w,
					// y:_an[j].y+_an[j].h,
					opacity:0,
					animate:{
						tos:{
							opacity:1,
							// x:_an[j].x,
							// y:_an[j].y
						},
						time:antime,
						delay:((i<anX/2?-(i-anX/2):i-anX/2)+(j<anY/2?-(j-anY/2):j-anY/2))*50,
						cak:(i+j)==anX+anY-2?m.cak:null
					}
				});
			}
			an.push(_an);
		}
		m.draw=function(ct){
			m.a.draw(ct);
			an.forEach(function(_m){
				_m.forEach(function(__m){__m.draw(ct)})
			})
		}
	}
	trn.xg4=function(m){
			//外到内显示
		var an=[];
		var anX=6;
		var anY=12;
		var antime=500;
		for(var i=0;i<anX;i++){
			var _an=[];
			for(var j=0;j<anY;j++){
				_an.push(Q('image',{
					anchorX:.5,
					anchorY:.5,
					x:(i/anX)*Q.app.w+Q.app.w*.5/anX,
					y:(j/anY)*Q.app.h+Q.app.h*.5/anY,
					w:Q.app.w/anX,
					h:Q.app.h/anY,
					image:m.b.cas,
					cover:{
						cj:{
						x:m.a.cas.width/anX*i,
						y:m.a.cas.height/anY*j,
						w:m.a.cas.width/anX,
						h:m.a.cas.height/anY
						},
						draw:function(ct){
						var ts = this;
						ct.save();
						ct.globalAlpha = ts.opacity;
						ct.translate(ts.x,ts.y);
						ct.scale(ts.scaleX,ts.scaleY);
						ts.rotation&&ct.rotate(ts.rotation*Math.PI/180);
						ct.drawImage(this.image,
							ts.cj.x,ts.cj.y,ts.cj.w,ts.cj.h,
							-ts.anchorX*ts.w,-ts.anchorY*ts.h,ts.w,ts.h);
						ct.restore();
					}
					}
					
				}));
				_an[j].set({
					// x:_an[j].x+_an[j].w,
					// y:_an[j].y+_an[j].h,
					opacity:0,
					animate:{
						tos:{
							opacity:1,
							// x:_an[j].x,
							// y:_an[j].y
						},
						time:antime,
						delay:((i<anX/2?i:anX-i)+(j<anY/2?j:anY-j))*50,
						cak:i+1==anX/2&&j+1==anY/2?m.cak:null
					}
				});
			}
			an.push(_an);
		}
		m.draw=function(ct){
			m.a.draw(ct);
			an.forEach(function(_m){
				_m.forEach(function(__m){__m.draw(ct)})
			})
		}
	}
	trn.xg5=function(m){
			//外到内缩放
		var an=[];
		var anX=12;
		var anY=18;
		var antime=500;
		for(var i=0;i<anX;i++){
			var _an=[];
			for(var j=0;j<anY;j++){
				_an.push(Q('image',{
					anchorX:.5,
					anchorY:.5,
					x:(i/anX)*Q.app.w+Q.app.w*.5/anX,
					y:(j/anY)*Q.app.h+Q.app.h*.5/anY,
					w:Q.app.w/anX,
					h:Q.app.h/anY,
					image:m.b.cas,
					cover:{
						cj:{
						x:m.a.cas.width/anX*i,
						y:m.a.cas.height/anY*j,
						w:m.a.cas.width/anX,
						h:m.a.cas.height/anY
						},
						draw:function(ct){
						var ts = this;
						ct.save();
						ct.globalAlpha = ts.opacity;
						ct.translate(ts.x,ts.y);
						ct.scale(ts.scaleX,ts.scaleY);
						ts.rotation&&ct.rotate(ts.rotation*Math.PI/180);
						ct.drawImage(this.image,
							ts.cj.x,ts.cj.y,ts.cj.w,ts.cj.h,
							-ts.anchorX*ts.w,-ts.anchorY*ts.h,ts.w,ts.h);
						ct.restore();
					}
					}
					
				}));
				_an[j].set({
					// x:_an[j].x+_an[j].w,
					// y:_an[j].y+_an[j].h,
					opacity:0,
					scaleX:0,
					scaleY:0,
					// rotation:-360,
					animate:{
						tos:{
							scaleX:1,
							scaleY:1,
							// rotation:0,
							opacity:1
							// x:_an[j].x,
							// y:_an[j].y
						},
						time:antime,
						delay:((i<anX/2?i:anX-i)+(j<anY/2?j:anY-j))*50,
						cak:i+1==anX/2&&j+1==anY/2?m.cak:null
					}
				});
			}
			an.push(_an);
		}
		m.draw=function(ct){
			m.a.draw(ct);
			an.forEach(function(_m){
				_m.forEach(function(__m){__m.draw(ct)})
			})
		}
	}
	trn.xg6=function(m){
			//内到外缩放效果
		var an=[];
		var anX=7;
		var anY=11;
		var antime=500;
		for(var i=0;i<anX;i++){
			var _an=[];
			for(var j=0;j<anY;j++){
				_an.push(Q('image',{
					anchorX:.5,
					anchorY:.5,
					x:(i/anX)*Q.app.w+Q.app.w*.5/anX,
					y:(j/anY)*Q.app.h+Q.app.h*.5/anY,
					w:Q.app.w/anX,
					h:Q.app.h/anY,
					image:m.b.cas,
					cover:{
						cj:{
						x:m.a.cas.width/anX*i,
						y:m.a.cas.height/anY*j,
						w:m.a.cas.width/anX,
						h:m.a.cas.height/anY
						},
						draw:function(ct){
						var ts = this;
						ct.save();
						ct.globalAlpha = ts.opacity;
						ct.translate(ts.x,ts.y);
						ct.scale(ts.scaleX,ts.scaleY);
						ts.rotation&&ct.rotate(ts.rotation*Math.PI/180);
						ct.drawImage(this.image,
							ts.cj.x,ts.cj.y,ts.cj.w,ts.cj.h,
							-ts.anchorX*ts.w,-ts.anchorY*ts.h,ts.w,ts.h);
						ct.restore();
					}
					}
					
				}));
				_an[j].set({
					// x:_an[j].x+_an[j].w,
					// y:_an[j].y+_an[j].h,
					opacity:0,
					scaleX:0,
					scaleY:0,
					// rotation:-360,
					animate:{
						tos:{
							scaleX:1,
							scaleY:1,
							// rotation:0,
							opacity:1
							// x:_an[j].x,
							// y:_an[j].y
						},
						time:antime,
						delay:((i<anX/2?-(i-anX/2):i-anX/2)+(j<anY/2?-(j-anY/2):j-anY/2))*100,
						cak:(i+j)==anX+anY-2?m.cak:null
					}
				});
			}
			an.push(_an);
		}
		m.draw=function(ct){
			m.a.draw(ct);
			an.forEach(function(_m){
				_m.forEach(function(__m){__m.draw(ct)})
			})
		}
	}
	trn.xg7=function(m){
			//纵百叶
		var an=[];
		var anX=8;
		var antime=500;
		for(var i=0;i<anX;i++){
			an.push(Q('image',{
				anchorX:.5,
				anchorY:.5,
				x:(i/anX)*Q.app.w+Q.app.w*.5/anX,
				y:Q.app.h*.5,
				w:Q.app.w/anX,
				h:Q.app.h,
				image:m.b.cas,
				cover:{
					cj:{
						x:m.a.cas.width/anX*i,
						y:0,
						w:m.a.cas.width/anX,
						h:m.a.cas.height
					},
					draw:function(ct){
						var ts = this;
						ct.save();
						ct.globalAlpha = ts.opacity;
						ct.translate(ts.x,ts.y);
						ct.scale(ts.scaleX,ts.scaleY);
						ts.rotation&&ct.rotate(ts.rotation*Math.PI/180);
						ct.drawImage(this.image,
							ts.cj.x,ts.cj.y,ts.cj.w,ts.cj.h,
							-ts.anchorX*ts.w,-ts.anchorY*ts.h,ts.w,ts.h);
						ct.restore();
					}
				}		
			}));
			an[i].set({
				y:an[i].y+Q.app.h,
				animate:{
					tos:{
						y:an[i].y
					},
					time:antime,
					delay:i*50,
					cak:i==anX-1?m.cak:null
				}
			});
		}
		m.draw=function(ct){
			m.a.draw(ct);
			// console.log('b')
			for(var j=0;j<anX;j++){
				// console.log('a')
				an[j].draw(ct)
			}
		}
		console.log(an)
	}
	trn.xg8=function(m){
			//横百叶
		var an=[];
		var anY=12;
		var antime=500;
		for(var i=0;i<anY;i++){
			an.push(Q('image',{
				anchorX:.5,
				anchorY:.5,
				x:Q.app.w*.5,
				y:(i/anY)*Q.app.h+Q.app.h*.5/anY,
				w:Q.app.w,
				h:Q.app.h/anY,
				image:m.b.cas,
				cover:{
					cj:{
						x:0,
						y:m.a.cas.height/anY*i,
						w:m.a.cas.width,
						h:m.a.cas.height/anY
					},
					draw:function(ct){
						var ts = this;
						ct.save();
						ct.globalAlpha = ts.opacity;
						ct.translate(ts.x,ts.y);
						ct.scale(ts.scaleX,ts.scaleY);
						ts.rotation&&ct.rotate(ts.rotation*Math.PI/180);
						ct.drawImage(this.image,
							ts.cj.x,ts.cj.y,ts.cj.w,ts.cj.h,
							-ts.anchorX*ts.w,-ts.anchorY*ts.h,ts.w,ts.h);
						ct.restore();
					}
				}	
			}));
			an[i].set({
				x:an[i].x+Q.app.w,
				animate:{
					tos:{
						x:an[i].x
						// y:_an[j].y
					},
					time:antime,
					delay:i*50,
					cak:i==anY-1?m.cak:null
				}
			});
		}
		m.draw=function(ct){
			m.a.draw(ct);
			an.forEach(function(_m){
				_m.draw(ct)
			})
		}
	}
	trn.xg9 = function(m){
		//随机位置散开
		var an=[];
		var anX=9;
		var anY=16;
		var antime=500;
		for(var i=0;i<anY;i++){
			var _an=[];
			for(var j =0;j<anX;j++){
				_an.push(Q('image',{
					anchorX:.5,
					anchorY:.5,
					w:Q.app.w/anX,
					h:Q.app.h/anY,

					x:j*Q.app.w/anX+.5*Q.app.w/anX,
					y:i*Q.app.h/anY+.5*Q.app.h/anY,

					image:m.a.cas,
					cover:{
						cj:{
							x:j*m.b.cas.width/anX,
							y:i*m.b.cas.height/anY,
							w:m.b.cas.width/anX,
							h:m.b.cas.height/anY
						},
						draw:function(ct){

							var ts = this;

								ct.save();
								ct.globalAlpha = ts.opacity;
								ct.translate(ts.x,ts.y);
								ct.scale(ts.scaleX,ts.scaleY);
								ts.rotation&&ct.rotate(ts.rotation*Math.PI/180);
								ct.drawImage(this.image,
									ts.cj.x,ts.cj.y,ts.cj.w,ts.cj.h,
									-ts.anchorX*ts.w,-ts.anchorY*ts.h,ts.w,ts.h);
								ct.restore();

						}
					}
				}));

				_an[j].set({
						rotation:0,
						scaleX:1,
						scaleY:1,
						animate:{
							tos:{
								opacity:0,
								scaleX:0,
								scaleY:0,
								rotation:Q.rm(180),
								x:_an[j].x-_an[j].w*(Q.rm(20)-10),
								y:_an[j].y-_an[j].h*(Q.rm(20)-10)
							},
							time:antime,
							cak:j==0&&i==anY-1?m.cak:null
						}
				});
				
			}
			an.push(_an);
		}


		      m.draw = function(ct){

		       m.b.draw(ct);

		       an.forEach(function(_m){

		       	_m.forEach(function(__m){__m.draw(ct)});

		       })
		    }     
		}
		trn.xg10 = function(m){
		//分解旋转聚集
		var an=[];
		var anX=9;
		var anY=16;
		var antime=500;
		for(var i=0;i<anY;i++){
			var _an=[];
			for(var j =0;j<anX;j++){
				_an.push(Q('image',{
					anchorX:.5,
					anchorY:.5,
					w:Q.app.w/anX,
					h:Q.app.h/anY,

					x:j*Q.app.w/anX+.5*Q.app.w/anX,
					y:i*Q.app.h/anY+.5*Q.app.h/anY,

					image:m.a.cas,
					cover:{
						cj:{
							x:j*m.b.cas.width/anX,
							y:i*m.b.cas.height/anY,
							w:m.b.cas.width/anX,
							h:m.b.cas.height/anY
						},
						draw:function(ct){

							var ts = this;

								ct.save();
								ct.globalAlpha = ts.opacity;
								ct.translate(ts.x,ts.y);
								ct.scale(ts.scaleX,ts.scaleY);
								ts.rotation&&ct.rotate(ts.rotation*Math.PI/180);
								ct.drawImage(this.image,
									ts.cj.x,ts.cj.y,ts.cj.w,ts.cj.h,
									-ts.anchorX*ts.w,-ts.anchorY*ts.h,ts.w,ts.h);
								ct.restore();

						}
					}
				}));

				_an[j].set({
						// rotation:0,
						scaleX:1,
						scaleY:1,
						animate:{
							tos:{
								opacity:0,
								scaleX:0.1,
								scaleY:0.1,
								// rotation:Q.rm(180),
								x:Q.app.w*.5,
								y:Q.app.h*.5
							},
							time:antime,
							delay:((i<anX/2?-(i-anX/2):i-anX/2)+(j<anY/2?-(j-anY/2):j-anY/2))*100,
							cak:j==0&&i==anY-1?m.cak:null
						}
				});
				
			}
			an.push(_an);
		}


		      m.draw = function(ct){

		       m.b.draw(ct);

		       an.forEach(function(_m){

		       	_m.forEach(function(__m){__m.draw(ct)});

		       })
		    }     
		}
		trn.xg11 = function(m){
		//上下拼接
		var an=[];
		var anY=7;
		var antime=500;
		for(var i=0;i<anY;i++){
			an.push(Q('image',{
				anchorX:.5,
				anchorY:.5,
				w:Q.app.w/anY,
				h:Q.app.h,
				x:i*Q.app.w/anY+.5*Q.app.w/anY,
				y:Q.app.h*.5,
				image:m.b.cas,
				cover:{
					cj:{
						x:i*m.b.cas.width/anY,
						y:0,
						w:m.b.cas.width/anY,
						h:m.b.cas.height
						},
						draw:function(ct){
							var ts = this;
							ct.save();
							ct.globalAlpha = ts.opacity;
							ct.translate(ts.x,ts.y);
							ct.scale(ts.scaleX,ts.scaleY);
							ts.rotation&&ct.rotate(ts.rotation*Math.PI/180);
							ct.drawImage(this.image,
								ts.cj.x,ts.cj.y,ts.cj.w,ts.cj.h,
								-ts.anchorX*ts.w,-ts.anchorY*ts.h,ts.w,ts.h);
							ct.restore();
						}
					}
				}));

				an[i].set({
						y:an[i].y+(i%2==0?Q.app.h:-Q.app.h),
						animate:{
							tos:{
								y:Q.app.h*.5
							},
							delay:i*50,
							time:antime,
							cak:i==anY-1?m.cak:null
						}
				});

		}


		      m.draw = function(ct){

		       m.a.draw(ct);

		       an.forEach(function(_m){

		       	_m.draw(ct)

		       })
		    }     
		}
		trn.xg12=function(m){
			//横百叶拼接
		var an=[];
		var anY=12;
		var antime=500;
		for(var i=0;i<anY;i++){
			an.push(Q('image',{
				anchorX:.5,
				anchorY:.5,
				x:Q.app.w*.5,
				y:(i/anY)*Q.app.h+Q.app.h*.5/anY,
				w:Q.app.w,
				h:Q.app.h/anY,
				image:m.b.cas,
				cover:{
					cj:{
						x:0,
						y:m.a.cas.height/anY*i,
						w:m.a.cas.width,
						h:m.a.cas.height/anY
					},
					draw:function(ct){
						var ts = this;
						ct.save();
						ct.globalAlpha = ts.opacity;
						ct.translate(ts.x,ts.y);
						ct.scale(ts.scaleX,ts.scaleY);
						ts.rotation&&ct.rotate(ts.rotation*Math.PI/180);
						ct.drawImage(this.image,
							ts.cj.x,ts.cj.y,ts.cj.w,ts.cj.h,
							-ts.anchorX*ts.w,-ts.anchorY*ts.h,ts.w,ts.h);
						ct.restore();
					}
				}	
			}));
			an[i].set({
				x:an[i].x+(i%2==0?Q.app.w:-Q.app.w),
				animate:{
					tos:{
						x:an[i].x
						// y:_an[j].y
					},
					time:antime,
					delay:i*50,
					cak:i==anY-1?m.cak:null
				}
			});
		}
		m.draw=function(ct){
			m.a.draw(ct);
			an.forEach(function(_m){
				_m.draw(ct)
			})
		}
	}
	trn.xg13=function(m){
			//掉落1
		var an=[];
		var anY=12;
		var antime=500;
		for(var i=0;i<anY;i++){
			an.push(Q('image',{
				anchorX:.5,
				anchorY:.5,
				x:Q.app.w*.5,
				y:(i/anY)*Q.app.h+Q.app.h*.5/anY,
				w:Q.app.w,
				h:Q.app.h/anY,
				image:m.b.cas,
				cover:{
					cj:{
						x:0,
						y:m.a.cas.height/anY*i,
						w:m.a.cas.width,
						h:m.a.cas.height/anY
					},
					draw:function(ct){
						var ts = this;
						ct.save();
						ct.globalAlpha = ts.opacity;
						ct.translate(ts.x,ts.y);
						ct.scale(ts.scaleX,ts.scaleY);
						ts.rotation&&ct.rotate(ts.rotation*Math.PI/180);
						ct.drawImage(this.image,
							ts.cj.x,ts.cj.y,ts.cj.w,ts.cj.h,
							-ts.anchorX*ts.w,-ts.anchorY*ts.h,ts.w,ts.h);
						ct.restore();
					}
				}	
			}));
			an[i].set({
				y:an[i].y+(-Q.app.h),
				rotation:Q.rm(360)-180,
				animate:{
					tos:{
						rotation:0,
						y:an[i].y
						// y:_an[j].y
					},
					time:antime,
					delay:(anY-i)*100,
					cak:i==0?m.cak:null
				}
			});
		}
		m.draw=function(ct){
			m.a.draw(ct);
			an.forEach(function(_m){
				_m.draw(ct)
			})
		}
	}
	trn.xg14=function(m){
			//掉落
		var an=[];
		var anY=12;
		var antime=500;
		for(var i=0;i<anY;i++){
			an.push(Q('image',{
				anchorX:.5,
				anchorY:.5,
				x:Q.app.w*.5,
				y:(i/anY)*Q.app.h+Q.app.h*.5/anY,
				w:Q.app.w,
				h:Q.app.h/anY,
				image:m.a.cas,
				cover:{
					cj:{
						x:0,
						y:m.a.cas.height/anY*i,
						w:m.a.cas.width,
						h:m.a.cas.height/anY
					},
					draw:function(ct){
						var ts = this;
						ct.save();
						ct.globalAlpha = ts.opacity;
						ct.translate(ts.x,ts.y);
						ct.scale(ts.scaleX,ts.scaleY);
						ts.rotation&&ct.rotate(ts.rotation*Math.PI/180);
						ct.drawImage(this.image,
							ts.cj.x,ts.cj.y,ts.cj.w,ts.cj.h,
							-ts.anchorX*ts.w,-ts.anchorY*ts.h,ts.w,ts.h);
						ct.restore();
					}
				}	
			}));
			an[i].set({
				y:an[i].y,
				rotation:0,
				animate:{
					tos:{
						rotation:Q.rm(360)-180,
						y:an[i].y+Q.app.h
						// y:_an[j].y
					},
					time:antime,
					delay:(anY-i)*100,
					cak:i==0?m.cak:null
				}
			});
		}
		m.draw=function(ct){
			m.b.draw(ct);
			an.forEach(function(_m){
				_m.draw(ct)
			})
		}
	}

trn.xg15 = function(m){
	      m.a.set({
	      	scaleX:1,
	      	scaleY:1,
	      	anchorX:.5,
	      	x:m.a.w*.5,
	        animate:{
	        tos:{
	        	opacity:0,
	        	scaleX:.3,
	        	scaleY:.3
	        },
	        time:700,
	        ease:Q.ease.quintOut,
	        cak:function(){
	        	m.a.set({
	        		scaleX:1,
	      			scaleY:1
	        	});
	        
	          m.cak();
	        }
	      }});

	      m.b.set({
	        y:Q.app.h,
	        scaleX:4,
	      	scaleY:4,
	      	anchorX:.5,
			x:m.a.w*.5,
	        animate:{
	        tos:{
		        y:0,
		        scaleX:1,
		      	scaleY:1
	        },
	        time:700,
	        ease:Q.ease.quintOut
	      }});

	      m.draw = function(ct){
	      	ct.fillStyle = '#111';
			ct.fillRect(0,0,m.a.w,m.a.h);
	        m.a.draw(ct);
	        m.b.draw(ct);
	      }
	  }

	  trn.xg16 = function(m){
	      m.a.set({
	      	scaleX:1,
	      	scaleY:1,
	      	anchorX:.5,
	      	anchorY:1,
	      	y:Q.app.h,
	      	x:m.a.w*.5,
	        animate:{
	        tos:{
	        	opacity:0,
	        	scaleX:.3,
	        	scaleY:.3
	        },
	        time:700,
	        ease:Q.ease.quintOut,
	        cak:function(){
	          m.cak();
	        }
	      }});

	      m.b.set({
	        y:0,
	        scaleX:4,
	      	scaleY:4,
	      	anchorX:.5,
	      	anchorY:1,
			x:m.a.w*.5,
	        animate:{
	        tos:{
		        y:Q.app.h,
		        scaleX:1,
		      	scaleY:1
	        },
	        time:700,
	        ease:Q.ease.quintOut
	      }});

	      m.draw = function(ct){
	      	ct.fillStyle = '#111';
			ct.fillRect(0,0,m.a.w,m.a.h);
	        m.a.draw(ct);

	        m.b.draw(ct);


	      }
	  }




	  trn.xg17 = function(m){
	      m.a.set({
	        x:0,
	        animate:{
	        tos:{
	          x:Q.app.w
	        },
	        time:700,
	        ease:Q.ease.quintOut,
	        cak:function(){
	          m.cak();
	        }
	      }});

	      m.b.set({
	        x:-Q.app.w,
	        animate:{
	        tos:{
	          x:0
	        },
	        time:700,
	        ease:Q.ease.quintOut
	      }});

	      m.draw = function(ct){
	        m.b.draw(ct);
	        m.a.draw(ct);
	      }
	  }
	  trn.xg18 = function(m){
	      m.a.set({
	        x:0,
	        animate:{
	        tos:{
	          x:-Q.app.w
	        },
	        time:700,
	        ease:Q.ease.quintOut,
	        cak:function(){
	          m.cak();
	        }
	      }});

	      m.b.set({
	        x:Q.app.w,
	        animate:{
	        tos:{
	          x:0
	        },
	        time:700,
	        ease:Q.ease.quintOut
	      }});

	      m.draw = function(ct){
	        m.b.draw(ct);
	        m.a.draw(ct);
	      }
	  }
trn.xg19 = function(m){
	      m.a.set({
	        y:0,
	        animate:{
	        tos:{
	          y:Q.app.h
	        },
	        time:700,
	        ease:Q.ease.quintOut,
	        cak:function(){
	          m.cak();
	        }
	      }});

	      m.b.set({
	        y:-Q.app.h,
	        animate:{
	        tos:{
	          y:0
	        },
	        time:700,
	        ease:Q.ease.quintOut
	      }});

	      m.draw = function(ct){
	        m.b.draw(ct);
	        m.a.draw(ct);
	      }
	  }

  trn.xg20 = function(m){
      m.a.set({
        y:0,
        animate:{
        tos:{
          y:-Q.app.h
        },
        time:700,
        ease:Q.ease.quintOut,
        cak:function(){
          m.cak();
        }
      }});

      m.b.set({
        y:Q.app.h,
        animate:{
        tos:{
          y:0
        },
        time:700,
        ease:Q.ease.quintOut
      }});

      m.draw = function(ct){
        m.b.draw(ct);
        m.a.draw(ct);
      }
  }

  
}(Q.trn)