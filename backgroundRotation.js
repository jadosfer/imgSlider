var imageID=0;

function changeimage2(every_seconds){
    //change the image
    if(!imageID){
        document.getElementById("slideIn").src = "assets/images/buda1.jpg";  
        document.getElementById("slideOut").src = "assets/images/marMontania5.jpg";              
        //document.getElementById("slideOut").classList.add('verticalOut');
        imageID++;
    }else{if(imageID==1){
        document.getElementById("slideIn").src = "assets/images/tresChamanes2.jpg";
        document.getElementById("slideOut").src = "assets/images/buda1.jpg";                       
        
        imageID++;                    
    }else{if(imageID==2){
        document.getElementById("slideIn").src = "assets/images/pescador3.jpg";       
        document.getElementById("slideOut").src = "assets/images/tresChamanes2.jpg";      
        imageID++;
      
    }else{if(imageID==3){
        document.getElementById("slideIn").src = "assets/images/fuego4.jpg";           
        document.getElementById("slideOut").src = "assets/images/pescador3.jpg";      
        imageID++;
        
    }else{if(imageID==4){
        document.getElementById("slideIn").src = "assets/images/marMontania5.jpg";        
        document.getElementById("slideOut").src = "assets/images/fuego4.jpg";
        imageID=0;
       
    }}}}}
    //call same function again for x of seconds
    setTimeout("changeimage("+every_seconds+")",((every_seconds)*1000));
}








