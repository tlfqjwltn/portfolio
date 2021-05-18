window.onload = function(){
    let windowW = document.body.clientWidth;
    let windowH = document.scrollingElement.scrollTop;
    
    webScroll();
    webJs();
    
    let timer = null;
    window.addEventListener('resize',function(){
        clearTimeout(timer);
        timer = setTimeout(function(){
            let windowW = document.body.clientWidth;
            if(windowW>800){
                webScroll();
                webJs();
            } else if(windowW<=800){
            }
        },250);
    });
    // 반응형 resize
    
    function webJs(){
        gnbBtn();
        allMenuOn();
        siteBtn();
        gitSiteBtn();
        snsBtn();
        
        document.querySelector('.gnb_logo').onclick=function(e){
            e.preventDefault();
            window.scroll({
                behavior:'smooth',
                left:0,
                top:0
            });
            for(let i=0; i<document.getElementsByClassName('gnb_menu_txt').length;i++){
                document.getElementsByClassName('gnb_menu_txt')[i].classList.remove('on');
                document.getElementsByClassName('gnb_menu_txt_hover')[i].classList.remove('on');
            }
            document.getElementsByClassName('gnb_menu_txt')[0].classList.add('on');
            document.getElementsByClassName('gnb_menu_txt_hover')[0].classList.add('on');
        }
        // gnb_logo 버튼

        function allMenuOn(){
            let allMenuLi = document.querySelectorAll('.all_menu_txt');
            let allMenuLeft = document.querySelectorAll('.all_menu_left');
            for(let i = 0; i<allMenuLi.length;i++){
                allMenuLi[i].onclick=function(){
                    allMenuOnRemove();
                    allMenuLi.item(i).classList.add('on');
                    allMenuLeft[i].classList.add('active');
                }
                function allMenuOnRemove(){
                    for(let j=0;j<allMenuLi.length;j++){
                        allMenuLi[j].classList.remove('on');
                        allMenuLeft[j].classList.remove('active');
                    }
                }
            }
            
        }
        // allMenuOn 전체 메뉴 열기

        document.querySelector('.go_top_img').onclick=function(e){
            e.preventDefault();
            window.scroll({
                behavior:'smooth',
                left:0,
                top:0
            });
            for(let i=0; i<document.getElementsByClassName('gnb_menu_txt').length;i++){
                document.getElementsByClassName('gnb_menu_txt')[i].classList.remove('on');
                document.getElementsByClassName('gnb_menu_txt_hover')[i].classList.remove('on');
            }
            document.getElementsByClassName('gnb_menu_txt')[0].classList.add('on');
            document.getElementsByClassName('gnb_menu_txt_hover')[0].classList.add('on');
        }
        // go_top 버튼
        
        function gnbBtn(){
            let gnbBtn = document.getElementsByClassName('gnb_menu_txt');
            for(let i = 0; i<gnbBtn.length; i++){
                let sec1H = document.querySelector('#sec1').offsetTop;
                let sec2H = document.querySelector('#sec2').offsetTop;
                let sec4H = document.querySelector('#sec4').offsetTop;
                let footerH = document.querySelector('#footer').offsetTop;
                
                gnbBtn[i].onclick=function(e){
                    e.preventDefault();
    
                    let gnbChange = document.getElementsByClassName('gnb_menu_txt');
                    let gnbLine = document.getElementsByClassName('gnb_menu_txt_hover');
    
                    if(i==0){
                        window.scroll({
                            behavior:'smooth',
                            left:0,
                            top:sec1H
                        });
                        gnbClassRemove();
                        gnbChange.item(i).classList.add('on');
                        gnbLine.item(i).classList.add('on');
                    }else if(i==1){
                        window.scroll({
                            behavior:'smooth',
                            left:0,
                            top:sec2H
                        });
                        gnbClassRemove();
                        gnbChange.item(i).classList.add('on');
                        gnbLine.item(i).classList.add('on');
                    }else if(i==2){
                        window.scroll({
                            behavior:'smooth',
                            left:0,
                            top:sec4H
                        });
                        gnbClassRemove();
                        gnbChange.item(i).classList.add('on');
                        gnbLine.item(i).classList.add('on');
                    }else if(i==3){
                        window.scroll({
                            behavior:'smooth',
                            left:0,
                            top:footerH
                        });
                        gnbClassRemove();
                        gnbChange.item(i).classList.add('on');
                        gnbLine.item(i).classList.add('on');
                    }
                    function gnbClassRemove(){
                        for(j=0; j<gnbChange.length;j++){
                            gnbChange[j].classList.remove('on');
                            gnbLine[j].classList.remove('on');
                        }
                    }
                    // e. gnbClassRemove
                }
            }
        }
        // gnb 제어
        
        function siteBtn(){
            const urlArr = [
                'inae/index.html',
                'JS_Agency/index.html',
                'seoulHospital/index.html',
                'koreaTourism/index.html',
                'within/index.html'
            ]
            // urlArr url배열
            let siteBtnI = document.getElementsByClassName('move_site');
            for(let i = 0; i<siteBtnI.length; i++){
                siteBtnI[i].onclick=function(){
                    popUp(i);
                }
            }
            function popUp(i){
                let url = urlArr[i];
                let name = ""
                let option = ""
                window.open(url, name, option);
            }
            // popUp url 팝업
        }
        // siteBtn 사이트url 이동

        function gitSiteBtn(){
            const gitUrlArr = [
                'https://github.com/tlfqjwltn/OILH-',
                'https://github.com/tlfqjwltn/JS_Agency',
                'https://github.com/tlfqjwltn/koreaTourism',
                'https://github.com/tlfqjwltn/seoulHospital',
                'https://github.com/tlfqjwltn/within',
                'https://github.com/tlfqjwltn/portfolio'
            ]
            // gitUrlArr 깃허브url배열
            let gitSiteBtnI = document.querySelectorAll('.move_github');
            for(let i = 0; i<gitSiteBtnI.length; i++){
                gitSiteBtnI[i].onclick=function(){
                    gitPopUp(i);
                }
            }
            function gitPopUp(i){
                let url = gitUrlArr[i];
                let name = ""
                let option = ""
                window.open(url, name, option);
            }
            // gitPopUp 깃허브url 팝업
        }
        // gitSiteBtn 깃허브 이동

        function snsBtn(){
            const snsUrlArr = [
                "https://github.com/tlfqjwltn",
                "https://www.instagram.com/jisoo_kim_94/",
                "https://www.youtube.com/channel/UC_oxTp_qLDJexf2J_MK8Dxw"
            ]
            // snsurl 배열
            const snsBtn = document.getElementsByClassName('move_sns');
            const snsBtn2 = document.getElementsByClassName('footer_sns_txt');
            for(let i = 0; i<snsBtn.length; i++){
                snsBtn[i].onclick=function(e){
                    e.preventDefault();
                    snsPopUp(i);
                }
                snsBtn2[i].onclick=function(e){
                    e.preventDefault();
                    snsPopUp(i);
                }
            }
            function snsPopUp(i){
                let url = snsUrlArr[i];
                let name = ""
                let option = ""
                window.open(url, name, option);
            }
            // snsPopUp sns팝업
        }
        // snsBtn sns이동
    }
    
    
    function webScroll(){
        let scrollMove = 1;
        const sections = document.getElementsByClassName('section');
        let aniReset;
        // 공통 변수
        for(let i = 0;i<sections.length; i++){
            sections[i].addEventListener("mousewheel", wheelEvent, false);
            // section에서 마우스 휠 감지
            sections[i].addEventListener("DOMMouseScroll", wheelEvent, true);
            // 파이어폭스
        }

        function wheelEvent(e){
            e.preventDefault();
            let delta = 0;
            if(!e) e = window.event;
            if(e.wheelDelta){
                delta = e.wheelDelta / 120;
                if(window.opera) delta = -delta;
            } else if(e)
                delta = -e/3;
            // 브라우저별 휠 델타값 인지

        let p = e.currentTarget.parentElement;
        let secIndex = Array.prototype.indexOf.call(p.children, e.currentTarget);
        // section 배열 불러오기
        let sectionArr = e.currentTarget.parentElement.children;
        // 현재 스크롤 위치
        scrollMove = document.documentElement.scrollTop || document.body.scrollTop;
        // 현재 절대 위치
        let NextSection = scrollMove;
        let gnbChange = document.getElementsByClassName('gnb_menu_txt');
        let gnbLine = document.getElementsByClassName('gnb_menu_txt_hover');
        
        if(delta>0){
            if(secIndex>5){
                let num = (secIndex-1);
                NextSection = sectionArr[num].offsetTop;
                gnbColorUp();
                // wheelUp
            } else if(secIndex==5){
                num = 5;
            }
            // section1 고정
        } else if(delta < 0){
            if(secIndex < sectionArr.length-1){
                let num = (secIndex + 1);
                NextSection = sectionArr[num].offsetTop;
                gnbColorDown();
                // wheelDown
            }
        }
        
        function gnbColorUp(){
            if(secIndex-1==5){
                for(i=0; i<gnbChange.length;i++){
                    gnbChange[i].classList.remove('on');
                    gnbLine[i].classList.remove('on');
                }
                gnbChange.item(0).classList.add('on');
                gnbLine.item(0).classList.add('on');
            } else if(secIndex-1>5 && secIndex-1<=7){
                for(i=0; i<gnbChange.length;i++){
                    gnbChange[i].classList.remove('on');
                    gnbLine[i].classList.remove('on');
                }
                gnbChange.item(1).classList.add('on');
                gnbLine.item(1).classList.add('on');
            } else if(secIndex-1>7 && secIndex-1<=sectionArr.length-2){
                for(i=0; i<gnbChange.length;i++){
                    gnbChange[i].classList.remove('on');
                    gnbLine[i].classList.remove('on');
                }
                gnbChange.item(2).classList.add('on');
                gnbLine.item(2).classList.add('on');
            } else if(secIndex-1>sectionArr.length-2){
                for(i=0; i<gnbChange.length;i++){
                    gnbChange[i].classList.remove('on');
                    gnbLine[i].classList.remove('on');
                }
                gnbChange.item(3).classList.add('on');
                gnbLine.item(3).classList.add('on');
            }
        }
        // gnbColorWheelUp
        function gnbColorDown(){
            if(secIndex+1==5){
                for(i=0; i<gnbChange.length;i++){
                    gnbChange[i].classList.remove('on');
                    gnbLine[i].classList.remove('on');
                }
                gnbChange.item(0).classList.add('on');
                gnbLine.item(0).classList.add('on');
            } else if(secIndex+1>5 && secIndex+1<=7){
                for(i=0; i<gnbChange.length;i++){
                    gnbChange[i].classList.remove('on');
                    gnbLine[i].classList.remove('on');
                }
                gnbChange.item(1).classList.add('on');
                gnbLine.item(1).classList.add('on');
            } else if(secIndex+1>7 && secIndex+1<=sectionArr.length-2){
                for(i=0; i<gnbChange.length;i++){
                    gnbChange[i].classList.remove('on');
                    gnbLine[i].classList.remove('on');
                }
                gnbChange.item(2).classList.add('on');
                gnbLine.item(2).classList.add('on');
            } else if(secIndex+1>sectionArr.length-2){
                for(i=0; i<gnbChange.length;i++){
                    gnbChange[i].classList.remove('on');
                    gnbLine[i].classList.remove('on');
                }
                gnbChange[3].classList.add('on');
                gnbLine[3].classList.add('on');
            }
        }

        clearInterval(aniReset);
        aniReset = setInterval(trans, 0);
        // animation 초기화

        function trans(){
            let speed = 7;
            // 속도 조절 숫자 높으면 빨라짐
            if(scrollMove == NextSection){
                clearInterval(trans);
            } else{
                
                if(scrollMove - speed > NextSection){
                    scrollMove -= speed;
                } else if (scrollMove + speed < NextSection){
                    scrollMove += speed;
                } else{
                    scrollMove = NextSection;
                }
                window.scrollTo(0, scrollMove);
            }
        }
        // e. trans
        }
        // e.mouseWheel
    }
    // e.webScroll
}