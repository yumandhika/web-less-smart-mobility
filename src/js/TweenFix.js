            var progstud=$(".page").eq(0);
			var bulet = $(".bulet");
			var buletTengah = $(".buletTengah");
            var content = $(".tabContent");
            var tab = $(".tab");
            var lok_navKonten = $(".navigasiKonten").offset().top;
            var progstud=$(".page").eq(0);
            var bidkon=$(".page").eq(1);
            var stanlus=$(".page").eq(2);
            var stat=$(".page").eq(3);
            var bidpek=$(".page").eq(4);
            var lok_navBar=$(".navBar").offset().top;
            var lok_why=$(".why").offset().top;
            var alasan = $(".alasan");
            var lok_bea=$(".bea").offset().top;
            var beasiswa = $(".beasiswa");
            var lok_konten=$(".navigasiKonten").offset().top;
            var lok_galeri=$(".galeri").offset().top;
            var lok_mengapa=$(".why").offset().top;
            var lok_kontak=$(".footer").offset().top;
            var lok_testi=$(".testimoni").offset().top;
            var lok_kontenBottom=lok_konten+$(".navigasiKonten").outerHeight();
            var lok_galeriBottom=lok_galeri+$(".galeri").outerHeight();
            var lok_kontakBottom=lok_testi+$(".footer").outerHeight()+$(".testimoni").outerHeight();
            var lok_mengapaBottom=lok_mengapa+$(".why").outerHeight()+$(".bea").outerHeight();
            var lok_testiBottom=lok_testi+$(".testimoni").outerHeight();
            var boxGaleri = $(".boxGaleri");
            var boxTesti = $(".boxTesti");
            var textNav = $(".textNav");
            var descGal = $(".descGaleri");
            var boxStan = $(".boxStandart");
            var boxStat = $(".boxStatistik");
            var boxpekr = $(".boxPekerjaan");

            function showContent(index){
                for(var i = 0; i < content.length;i++){
                    if(i == index){
                        TweenMax.to(tab.eq(index),0.25,{backgroundColor:"#bacfe2"});
                        TweenMax.to(content.eq(index),0.5,{marginTop:'4%',opacity:1,display:"block"});
                    }
                    else{
                        TweenMax.to(content.eq(i),0,{marginTop:'0%',opacity:0,display:"none"});
                        TweenMax.to(tab.eq(i),0.25,{backgroundColor:"#9db9ce"});
                    }
                }
            }
			$(document).ready(function(){
                
                boxGaleri.eq(0).click(function(){
                    TweenMax.to(".modalImage",0.5,{display:"block",opacity:1,scale:1,rotation:-360});
                    var modImage = document.getElementById("modImage");
                    modImage.src = "assets/image/backgroundLanding.jpg";
                });
                boxGaleri.eq(1).click(function(){
                    TweenMax.to(".modalImage",0.5,{display:"block",opacity:1,scale:1,rotation:-360});
                    var modImage = document.getElementById("modImage");
                    modImage.src = "assets/image/backgroundLanding.jpg";
                });
                boxGaleri.eq(2).click(function(){
                    TweenMax.to(".modalImage",0.5,{display:"block",opacity:1,scale:1,rotation:-360});
                    var modImage = document.getElementById("modImage");
                    modImage.src = "assets/image/backgroundLanding.jpg";
                });
                boxGaleri.eq(3).click(function(){
                    TweenMax.to(".modalImage",0.5,{display:"block",opacity:1,scale:1,rotation:-360});
                    var modImage = document.getElementById("modImage");
                    modImage.src = "assets/image/backgroundLanding.jpg";
                });
                boxGaleri.eq(4).click(function(){
                    TweenMax.to(".modalImage",0.5,{display:"block",opacity:1,scale:1,rotation:-360});
                    var modImage = document.getElementById("modImage");
                    modImage.src = "assets/image/backgroundLanding.jpg";
                });
                boxGaleri.eq(5).click(function(){
                    TweenMax.to(".modalImage",0.5,{display:"block",opacity:1,scale:1,rotation:-360});
                    var modImage = document.getElementById("modImage");
                    modImage.src = "assets/image/analist.png";
                });
                $(".modalImage span").click(function(){
                         TweenMax.to(".modalImage",0.5,{display:"none",opacity:0,scale:0,rotation:360});
                    });
                
                TweenMax.to(".containerLoader",0.25,{opacity:0,display:"none",delay:3});
                boxGaleri.eq(0).hover(function(){
                    TweenMax.to(descGal.eq(0),0.5,{top:"-50px"});
                    TweenMax.to(".boxgal1 img",1,{transform:"scale(1.2)"});
                });
                boxGaleri.eq(0).mouseleave(function(){
                    TweenMax.to(descGal.eq(0),0.5,{top:"50"});
                    TweenMax.to(".boxgal1 img",0.5,{transform:"scale(1)"});
                });
                boxGaleri.eq(1).hover(function(){
                    TweenMax.to(descGal.eq(1),0.5,{top:"-50px"});
                    TweenMax.to(".boxgal2 img",1,{transform:"scale(1.2)"});
                });
                boxGaleri.eq(1).mouseleave(function(){
                    TweenMax.to(descGal.eq(1),0.5,{top:"50"});
                    TweenMax.to(".boxgal2 img",0.5,{transform:"scale(1)"});
                });
                boxGaleri.eq(2).hover(function(){
                    TweenMax.to(descGal.eq(2),0.5,{top:"-50px"});
                    TweenMax.to(".boxgal3 img",1,{transform:"scale(1.2)"});
                });
                boxGaleri.eq(2).mouseleave(function(){
                    TweenMax.to(descGal.eq(2),0.5,{top:"50"});
                    TweenMax.to(".boxgal3 img",0.5,{transform:"scale(1)"});
                });
                boxGaleri.eq(3).hover(function(){
                    TweenMax.to(descGal.eq(3),0.5,{top:"-50px"});
                    TweenMax.to(".boxgal4 img",1,{transform:"scale(1.2)"});
                });
                boxGaleri.eq(3).mouseleave(function(){
                    TweenMax.to(descGal.eq(3),0.5,{top:"50"});
                    TweenMax.to(".boxgal4 img",0.5,{transform:"scale(1)"});
                });
                boxGaleri.eq(4).hover(function(){
                    TweenMax.to(descGal.eq(4),0.5,{top:"-50px"});
                    TweenMax.to(".boxgal5 img",1,{transform:"scale(1.2)"});
                });
                boxGaleri.eq(4).mouseleave(function(){
                    TweenMax.to(descGal.eq(4),0.5,{top:"50"});
                    TweenMax.to(".boxgal5 img",0.5,{transform:"scale(1)"});
                });
                boxGaleri.eq(5).hover(function(){
                    TweenMax.to(descGal.eq(5),0.5,{top:"-50px"});
                    TweenMax.to(".boxgal6 img",1,{transform:"scale(1.2)"});
                });
                boxGaleri.eq(5).mouseleave(function(){
                    TweenMax.to(descGal.eq(5),0.5,{top:"50"});
                    TweenMax.to(".boxgal6 img",0.5,{transform:"scale(1)"});
                });
                /*TweenMax.to("body",0.75,{scrollTop:0});*/
                leftSlider();
                textNav.eq(4).click(function(){
                    TweenMax.to("body",0.75,{scrollTop:0});
                });
                textNav.eq(3).click(function(){
                    TweenMax.to("body",0.75,{scrollTop:lok_konten});
                });
                textNav.eq(2).click(function(){
                    TweenMax.to("body",0.75,{scrollTop:lok_mengapa});
                });
                textNav.eq(1).click(function(){
                    TweenMax.to("body",0.75,{scrollTop:lok_galeri});
                });
                textNav.eq(0).click(function(){
                    TweenMax.to("body",0.75,{scrollTop:lok_kontak});
                });
                TweenMax.staggerTo("#awanGroup path", 25, {x:2500,repeat:-1}, 2);
                $(".containerArrow").click(function(){
                   TweenMax.to("body",0.75,{scrollTop:lok_navBar});
                });
                textNav.eq(0).hover(function(){
                            TweenMax.to(textNav.eq(0),0.1,{borderTop:"10px solid white"});
                        });
                textNav.eq(1).hover(function(){
                            TweenMax.to(textNav.eq(1),0.1,{borderTop:"10px solid white"});
                        });
                textNav.eq(2).hover(function(){
                            TweenMax.to(textNav.eq(2),0.1,{borderTop:"10px solid white"});
                        });
                textNav.eq(3).hover(function(){
                            TweenMax.to(textNav.eq(3),0.1,{borderTop:"10px solid white"});
                        });
                textNav.eq(4).hover(function(){
                            TweenMax.to(textNav.eq(4),0.1,{borderTop:"10px solid white"});
                        });
                textNav.eq(0).mouseleave(function(){
                            TweenMax.to(textNav.eq(0),0.1,{borderTop:"0"});
                        });
                textNav.eq(1).mouseleave(function(){
                            TweenMax.to(textNav.eq(1),0.1,{borderTop:"0"});
                        });
                textNav.eq(2).mouseleave(function(){
                            TweenMax.to(textNav.eq(2),0.1,{borderTop:"0"});
                        });
                textNav.eq(3).mouseleave(function(){
                            TweenMax.to(textNav.eq(3),0.1,{borderTop:"0"});
                        });
                textNav.eq(4).mouseleave(function(){
                            TweenMax.to(textNav.eq(4),0.1,{borderTop:"0"});
                        });
                $(document).scroll(function(){
                    if($(document).scrollTop() >= lok_konten && $(document).scrollTop() < lok_kontenBottom){
                        TweenMax.to(textNav.eq(3),0.25,{borderTop:"10px solid white"});
                    }
                    else{
                        TweenMax.to(textNav.eq(3),0.5,{borderTop:"0px"});
                        
                    }
                    if($(document).scrollTop() >= lok_mengapa && $(document).scrollTop() < lok_mengapaBottom){
                        TweenMax.to(textNav.eq(2),0.25,{borderTop:"10px solid white"});
                    }
                    else{
                        TweenMax.to(textNav.eq(2),0.5,{borderTop:"0px"});
                    }
                    if($(document).scrollTop() >= lok_galeri && $(document).scrollTop() < lok_galeriBottom){
                        TweenMax.to(textNav.eq(1),0.25,{borderTop:"10px solid white"});
                    }
                    else{
                        TweenMax.to(textNav.eq(1),0.5,{borderTop:"0px"});
                    }
                    if($(document).scrollTop() >= lok_testi && $(document).scrollTop() < lok_kontakBottom){
                        TweenMax.to(textNav.eq(0),0.25,{borderTop:"10px solid white"});
                    }
                    else{
                        TweenMax.to(textNav.eq(0),0.5,{borderTop:"0px"});
                    }
                        if($(this).scrollTop() > lok_navKonten -200 && $(this).scrollTop() < lok_navKonten +600 ){
                            $(".buletTengah").addClass("besar");
                            TweenMax.to(bulet.eq(0),0.5,{y:-200});
                            TweenMax.to(".buletTengah",1,{rotation:360});
                            TweenMax.to(bulet.eq(1),1,{y:-50,x:200,delay:0.2});
                            bulet.eq(0).hover(function(){
                                 TweenMax.to(".programStudi",0.8,{scale:1.2});
                            });
                            bulet.eq(0).mouseleave(function(){
                                TweenMax.to(".programStudi",0.8,{scale:1});
                            });
                            bulet.eq(1).hover(function(){
                                TweenMax.to(".bidangKonsentrasi",0.8,{scale:1.2});
                            });
                            bulet.eq(1).mouseleave(function(){
                                TweenMax.to(".bidangKonsentrasi",0.8,{scale:1});
                            });
                            bulet.eq(2).hover(function(){
                                 TweenMax.to(".standartLulusan",0.8,{scale:1.2});
                            });
                            bulet.eq(2).mouseleave(function(){
                                TweenMax.to(".standartLulusan",0.8,{scale:1});
                            });
                            bulet.eq(3).hover(function(){
                                 TweenMax.to(".statistik",0.8,{scale:1.2});
                            });
                            bulet.eq(3).mouseleave(function(){
                                TweenMax.to(".statistik",0.8,{scale:1});
                            });
                            bulet.eq(4).hover(function(){
                                 TweenMax.to(".bidangPekerjaan",0.8,{scale:1.2});
                            });
                            bulet.eq(4).mouseleave(function(){
                                TweenMax.to(".bidangPekerjaan",0.8,{scale:1});
                            });
                            TweenMax.to(bulet.eq(2),1,{y:175,x:125,delay:0.4});
                            TweenMax.to(bulet.eq(3),1,{y:175,x:-125,delay:0.6});
                            TweenMax.to(bulet.eq(4),1,{x:-200,y:-50,delay:0.8});
                            TweenMax.to(".judulKonten",1,{y:30,opacity:1,delay:1.5});
                        }
                    if($(this).scrollTop() > lok_navBar){
                        TweenMax.to(".navBar",0,{position:'fixed',top:0});	
                        $(".navBar").removeClass("normal");
                        $(".navBar").addClass("fixed");
                    }
                    else{
                        $(".navBar").removeClass("fixed");
                        TweenMax.to(".navBar",0,{position:'absolute',top:0});
                        TweenMax.to(".navBar",0.5,{width:1366});
                        $(".navBar").addClass("normal");
                        TweenMax.to(".navBar",1,{x:0});
                    }
                    if($(document).scrollTop() > lok_why-300 && $(document).scrollTop() < lok_why+300){
                        TweenMax.to(".judulWhy",1,{opacity:1,y:50});
                        TweenMax.to(alasan.eq(0),1,{opacity:1,y:50,delay:0.1});
                        TweenMax.to(alasan.eq(1),1,{opacity:1,y:50,delay:0.2});
                    }
                    else{
                        TweenMax.to(".judulWhy",0.5,{opacity:0,y:-50});
                        TweenMax.to(alasan.eq(0),0.5,{opacity:0,y:-50,delay:0.1});
                        TweenMax.to(alasan.eq(1),0.5,{opacity:0,y:-50,delay:0.2});
                    }
                    if($(document).scrollTop() > lok_testi-300 && $(document).scrollTop() < lok_testi+300){
                        TweenMax.to(".judulTesti",1,{opacity:1,y:50});
                        TweenMax.to(boxTesti.eq(0),1,{opacity:1,x:50,delay:0.1});
                        TweenMax.to(boxTesti.eq(1),1,{opacity:1,x:-50,delay:0.2});
                    }
                    else{
                        TweenMax.to(".judulTesti",0.5,{opacity:0,y:-50});
                        TweenMax.to(boxTesti.eq(0),0.5,{opacity:0,x:-50,delay:0.1});
                        TweenMax.to(boxTesti.eq(1),0.5,{opacity:0,x:50,delay:0.2});
                    }
                    if($(document).scrollTop() > lok_bea-300 && $(document).scrollTop() < lok_bea+300){
                        TweenMax.to(".judulBea",1,{opacity:1,y:50});
                        TweenMax.to(beasiswa.eq(0),1,{opacity:1,y:50,delay:0.1});
                        TweenMax.to(beasiswa.eq(1),1,{opacity:1,y:50,delay:0.2});
                        TweenMax.to(beasiswa.eq(2),1,{opacity:1,y:50,delay:0.3});
                    }
                    else{
                        TweenMax.to(".judulBea",0.5,{opacity:0,y:-50});
                        TweenMax.to(beasiswa.eq(0),0.5,{opacity:0,y:-50,delay:0.1});
                        TweenMax.to(beasiswa.eq(1),0.5,{opacity:0,y:-50,delay:0.2});
                        TweenMax.to(beasiswa.eq(2),0.5,{opacity:0,y:-50,delay:0.3});
                    }
                    if($(document).scrollTop() > lok_galeri-300 && $(document).scrollTop() < lok_galeri+300){
                        TweenMax.to(".judulGaleri",1,{opacity:1,y:50});
                        TweenMax.to(boxGaleri.eq(0),1,{opacity:1,y:50,delay:0.1});
                        TweenMax.to(boxGaleri.eq(1),1,{opacity:1,y:50,delay:0.2});
                        TweenMax.to(boxGaleri.eq(2),1,{opacity:1,y:50,delay:0.3});
                        TweenMax.to(boxGaleri.eq(3),1,{opacity:1,y:50,delay:0.1});
                        TweenMax.to(boxGaleri.eq(4),1,{opacity:1,y:50,delay:0.2});
                        TweenMax.to(boxGaleri.eq(5),1,{opacity:1,y:50,delay:0.3});
                    }
                    else{
                        TweenMax.to(".judulGaleri",0.5,{opacity:0,y:-50});
                        TweenMax.to(boxGaleri.eq(0),0.5,{opacity:0,y:-50,delay:0.1});
                        TweenMax.to(boxGaleri.eq(1),0.5,{opacity:0,y:-50,delay:0.2});
                        TweenMax.to(boxGaleri.eq(2),0.5,{opacity:0,y:-50,delay:0.3});
                        TweenMax.to(boxGaleri.eq(3),0.5,{opacity:0,y:-50,delay:0.1});
                        TweenMax.to(boxGaleri.eq(4),0.5,{opacity:0,y:-50,delay:0.2});
                        TweenMax.to(boxGaleri.eq(5),0.5,{opacity:0,y:-50,delay:0.3});
                    }
                });
                $(".programStudi").click(function(){
                    TweenMax.to(tab.eq(0),0.25,{backgroundColor:"#bacfe2"});
                    TweenMax.to(content.eq(0),1,{marginTop:'4%',opacity:1,display:"block"});
                    TweenMax.to(".imageProgstud1",1,{y:20,opacity:1,delay:1.2});
                    TweenMax.to("#evisi",1,{x:20,opacity:1,delay:1.3});
                    TweenMax.to(progstud,1.2,{top:0});
                    tab.eq(0).click(function(){
                        TweenMax.to(".imageProgstud1",1,{y:20,opacity:1,delay:0.25});
                        TweenMax.to(".imageProgstud2",1,{y:20,opacity:0,delay:0.25});
                        TweenMax.to(".imageProgstud3",1,{y:20,opacity:0,delay:0.25});
                    });
                    tab.eq(1).click(function(){
                        TweenMax.to(".imageProgstud1",1,{y:20,opacity:0,delay:0.25});
                        TweenMax.to(".imageProgstud2",1,{y:20,opacity:1,delay:0.25});
                        TweenMax.to(".imageProgstud3",1,{y:20,opacity:0,delay:0.25});
                    });
                    tab.eq(2).click(function(){
                        TweenMax.to(".imageProgstud1",1,{y:20,opacity:0,delay:0.25});
                        TweenMax.to(".imageProgstud2",1,{y:20,opacity:0,delay:0.25});
                        TweenMax.to(".imageProgstud3",1,{y:20,opacity:1,delay:0.25});
                    });
                    $(".back").click(function(){
                        TweenMax.to(progstud,0.5,{top:"-100%"});
                        TweenMax.to(".imageProgstud1",1,{y:-20,opacity:0,delay:0.25});
                        TweenMax.to(".imageProgstud2",1,{y:-20,opacity:0,delay:0.25});
                        TweenMax.to(".imageProgstud3",1,{y:-20,opacity:0,delay:0.25});
                        TweenMax.to(content.eq(0),0.5,{marginTop:'4%',opacity:0,display:"none"});
                        TweenMax.to(tab.eq(0),0.25,{backgroundColor:"#9db9ce"});
                        TweenMax.to(tab.eq(1),0.25,{backgroundColor:"#9db9ce"});
                        TweenMax.to(tab.eq(2),0.25,{backgroundColor:"#9db9ce"});
                        TweenMax.to("#evisi",1,{x:0,opacity:0,delay:0.5});
                        TweenMax.to(content.eq(1),0.5,{marginTop:'4%',opacity:0,display:"none"});
                        TweenMax.to(content.eq(2),0.5,{marginTop:'4%',opacity:0,display:"none"});
                    });
                });
                $(".bidangKonsentrasi").click(function(){
                    showContent();
                    TweenMax.to(bidkon,1,{left:0});
                    TweenMax.to("#network1",1,{x:-25,opacity:1,delay:1,transform:"rotate(15deg)"});
                    TweenMax.to("#network2",1,{x:-15,opacity:1,delay:1,transform:"rotate(-15deg)"});
                    TweenMax.to("#aInfo",1,{x:15,opacity:1,delay:1,transform:"rotate(-15deg)"});
                    TweenMax.from(".judulBidkon",0.8,{y:-20,opacity:0,delay:0.8});
                    TweenMax.from(".containerBidkon",1.2,{y:-20,opacity:0,delay:0.8});
                    TweenMax.to(bidkon,1.2,{top:0});
                    $(".back").click(function(){
                        TweenMax.to(bidkon,0.5,{left:"100%"});
                        TweenMax.to(content.eq(0),0.5,{marginTop:'4%',opacity:0,display:"none"});
                        TweenMax.to("#network1",0,{x:0,opacity:0,transform:"rotate(0deg)"});
                        TweenMax.to("#network2",0,{x:0,opacity:0,transform:"rotate(0deg)"});
                        TweenMax.to("#aInfo",0,{x:0,opacity:0,transform:"rotate(0deg)"});
                    
                    });
                });
                $(".standartLulusan").click(function(){
                    TweenMax.to(stanlus,1,{left:0});
                    TweenMax.to(content.eq(2),1.2,{marginTop:'4%',opacity:1,display:"block"});
                    boxStan.eq(0).hover(function(){
                        TweenMax.to(".imageStandart1",0.8,{transform:'scale(1.1)'});
                    });
                    boxStan.eq(0).mouseleave(function(){
                        TweenMax.to(".imageStandart1",0.8,{transform:'scale(1)'});
                    });
                     boxStan.eq(1).hover(function(){
                        TweenMax.to(".imageStandart2",0.8,{transform:'scale(1.1)'});
                    });
                    boxStan.eq(1).mouseleave(function(){
                        TweenMax.to(".imageStandart2",0.8,{transform:'scale(1)'});
                    });
                     boxStan.eq(2).hover(function(){
                        TweenMax.to(".imageStandart3",0.8,{transform:'scale(1.1)'});
                    });
                    boxStan.eq(2).mouseleave(function(){
                        TweenMax.to(".imageStandart3",0.8,{transform:'scale(1)'});
                    });
                     boxStan.eq(3).hover(function(){
                        TweenMax.to(".imageStandart4",0.8,{transform:'scale(1.1)'});
                    });
                    boxStan.eq(3).mouseleave(function(){
                        TweenMax.to(".imageStandart4",0.8,{transform:'scale(1)'});
                    });
                    TweenMax.from(".imageStandart1",1.3,{y:-20,opacity:0,delay:0.5});
                    TweenMax.from(".imageStandart2",1.3,{y:-20,opacity:0,delay:0.6});
                    TweenMax.from(".imageStandart3",1.3,{y:-20,opacity:0,delay:0.7});
                    TweenMax.from(".imageStandart4",1.3,{y:-20,opacity:0,delay:0.8});
                    TweenMax.from(".judulStandart",0.8,{y:-20,opacity:0,delay:0.8});
                    TweenMax.from(".descStandart",1.2,{y:-20,opacity:0,delay:1.0});
                    TweenMax.to(stanlus,1.2,{top:0});
                    $(".back").click(function(){
                        TweenMax.to(stanlus,0.5,{left:"-100%"});
                        TweenMax.to(stanlus,0.5,{top:0});
                        });
                });
                $(".statistik").click(function(){
                    TweenMax.to(stat,1,{left:0});
                    TweenMax.from(content.eq(3),1.2,{marginTop:'4%',opacity:1,display:"block"});
                    boxStat.eq(0).hover(function(){
                        TweenMax.to(".imageStatistik1",0.8,{transform:'scale(1.1)'});
                    });
                    boxStat.eq(0).mouseleave(function(){
                        TweenMax.to(".imageStatistik1",0.8,{transform:'scale(1)'});
                    });
                     boxStat.eq(1).hover(function(){
                        TweenMax.to(".imageStatistik2",0.8,{transform:'scale(1.1)'});
                    });
                    boxStat.eq(1).mouseleave(function(){
                        TweenMax.to(".imageStatistik2",0.8,{transform:'scale(1)'});
                    });
                    TweenMax.from(".imageStatistik1",1.3,{y:-20,opacity:0,delay:0.5});
                    TweenMax.from(".imageStatistik2",1.3,{y:-20,opacity:0,delay:0.7});
                    TweenMax.to("#animStatik1",1.4,{x:20,opacity:1,delay:0.5,transform:"rotate(15deg)"});
                    TweenMax.to("#animStatik2",1.4,{x:-20,opacity:1,delay:0.5,transform:"rotate(-15deg)"});
                    TweenMax.from(".descStatistik",1.4,{y:-20,opacity:0,delay:0.6});
                    TweenMax.from(".judulStatistik",0.8,{opacity:0,delay:0.8});
                    TweenMax.to(stanlus,1.2,{top:0});
                    $(".back").click(function(){
                        TweenMax.to(stat,0.5,{left:"100%"});
                        TweenMax.to(stanlus,0.5,{top:0});
                        TweenMax.to("#animStatik1",0,{x:0,opacity:0,transform:"rotate(0deg)"});
                        TweenMax.to("#animStatik2",0,{x:0,opacity:0,transform:"rotate(0deg)"});
                    });
                });
                $(".bidangPekerjaan").click(function(){
                    TweenMax.to(bidpek,1,{top:0});
                    TweenMax.from(content.eq(4),1.2,{marginTop:'4%',opacity:1,display:"block"});
                    boxpekr.eq(0).hover(function(){
                        TweenMax.to(".imagePekerjaan1",0.5,{transform:'scale(0.9)'});
                    });
                    boxpekr.eq(0).mouseleave(function(){
                        TweenMax.to(".imagePekerjaan1",0.5,{transform:'scale(1)'});
                    });
                     boxpekr.eq(1).hover(function(){
                        TweenMax.to(".imagePekerjaan2",0.5,{transform:'scale(0.9)'});
                    });
                    boxpekr.eq(1).mouseleave(function(){
                        TweenMax.to(".imagePekerjaan2",0.5,{transform:'scale(1)'});
                    });
                     boxpekr.eq(2).hover(function(){
                        TweenMax.to(".imagePekerjaan3",0.5,{transform:'scale(0.9)'});
                    });
                    boxpekr.eq(2).mouseleave(function(){
                        TweenMax.to(".imagePekerjaan3",0.5,{transform:'scale(1)'});
                    });
                     boxpekr.eq(3).hover(function(){
                        TweenMax.to(".imagePekerjaan4",0.5,{transform:'scale(0.9)'});
                    });
                    boxpekr.eq(3).mouseleave(function(){
                        TweenMax.to(".imagePekerjaan4",0.5,{transform:'scale(1)'});
                    });
                    TweenMax.from(".imagePekerjaan1",1,{y:-20,opacity:0,delay:1.2});
                    TweenMax.from(".imagePekerjaan2",1,{y:-20,opacity:0,delay:1.3});
                    TweenMax.from(".imagePekerjaan3",1,{y:-20,opacity:0,delay:1.4});
                    TweenMax.from(".imagePekerjaan4",1,{y:-20,opacity:0,delay:1.5});
                    TweenMax.from(".descPekerjaan",1,{y:-20,opacity:0,delay:1.3});
                    TweenMax.from(".judulPekerjaan",1,{opacity:1,delay:1});
                    TweenMax.from(stanlus,1.2,{top:0});
                    $(".back").click(function(){
                        TweenMax.to(bidpek,0.5,{top:"100%"});
                        });
                });
					
			});
            var index = 0;
                function leftSlider(){
                    var box = $(".box");
                    for(var i = 0; i < box.length;i++){
                            TweenMax.to(box.eq(i-1),0,{opacity:0,display:"none",marginTop:-20});
                    }
                    TweenMax.to(box.eq(index),0.5,{opacity:1,marginTop:"20px",display:"block"});
                }
                function rightSlider(){
                    var box = $(".box");
                    for(var i = 0; i < box.length;i++){
                            TweenMax.to(box.eq(i-1),0,{opacity:0,display:"none",marginTop:-20});
                    }
                    TweenMax.to(box.eq(index),0.5,{opacity:1,marginTop:"20px",display:"block"});
                }
                function plusSlider(){
                    index+=1;
                    if(index>4){
                        index=0;
                    }
                    leftSlider();
                }
                function minusSlider(){
                    index-=1;
                    if(index<0){
                        index=4;
                    }
                    rightSlider();
                }

