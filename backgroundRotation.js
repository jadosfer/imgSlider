var imageID=0;

function changeimage(every_seconds){
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


function changeimage2(every_seconds){
    
    // document.getElementById("buda").style.display = "block";
    // document.getElementById("chamanes").style.display = "block";
    // document.getElementById("pescador").style.display = "block";
    // document.getElementById("fuego").style.display = "block";
    // document.getElementById("montania").style.display = "block";

    if(!imageID){        
        document.getElementById("buda").classList.add('slideOut');     
        document.getElementById("buda").style.display = "none";          
   
        imageID++;
    }else{if(imageID==1){    
        //document.getElementById("buda").classList.remove('slideOut');
           
        document.getElementById("chamanes").classList.add('slideOut');        
        
         
        imageID++;                    
    }else{if(imageID==2){
       // document.getElementById("chamanes").classList.remove('slideOut');
        //document.getElementById("chamanes").style.display = "none";
        document.getElementById("pescador").classList.add('slideOut'); 
        imageID++;
      
    }else{if(imageID==3){     
        document.getElementById("pescador").style.display = "none";
        document.getElementById("fuego").classList.add('slideOut'); 
        
        imageID++;
        
    }else{if(imageID==4){      
        document.getElementById("fuego").style.display = "none";
        document.getElementById("montania").classList.add('slideOut'); 
        
        imageID=0;
       
    }}}}}
    //call same function again for x of seconds
    setTimeout("changeimage("+every_seconds+")",((every_seconds)*1000));
}






