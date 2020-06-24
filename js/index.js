(function(){
    // 公共变量
    let oUL = document.querySelector("#main ul.list");
    let roX = 0
        ,roY = 0
        ,trZ = -2000;
    
    //页面布局
    (function(){
        let [x,y,z] = [5,5,5],
            num = x*y*z,
            html = '';
        
        for(let i=0;i<num;i++){
    
            let x = i%25%5;
            let y = Math.floor(i%25/5);
            let z = Math.floor(i/25)
    
            let trX = (x-2)*260;
            let trY = (y-2)*240;
            let trZ = (2-z)*800;
    
            html += `<li style = "transform : translate3D(${trX}px,${trY}px,${trZ}px)">
                        <p class="title">Css3</p>
                        <p class="author">d</p>
                        <p class="time">0-0-0</p>
            </li>`;
        }
    
        oUL.innerHTML = html;
    })();

    (function(){

        let lastX,lastY,nX,nY,x_=0,y_=0;
    
        document.onmousedown = function(e){
            lastX = e.clientX;
            lastY = e.clientY;

            this.onmousemove = function(e){
                nX = e.clientX;
                nY = e.clientY;
    
                x_ = nX - lastX;
                y_ = nY - lastY;
    
                roX += x_ *0.05;
                roY -= y_ *0.05;
    
                oUL.style.transform =  `translateZ(${trZ}px) rotateX(${roY}deg) rotateY(${roX}deg) `;
            
            };

        };
        document.onmouseup =function(){
            this.onmousemove =null;
        };
        
        mousewheel(document,function(e,d){
            trZ += d*150;
            
            trZ = Math.min(trZ,2200);
            trZ = Math.max(trZ,-10000);

            oUL.style.transform =  `translateZ(${trZ}px) rotateX(${roY}deg) rotateY(${roX}deg) `;
        });
        
    })();

})();