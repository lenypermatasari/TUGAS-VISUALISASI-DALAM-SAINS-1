function setup() {
    // put setup code here}
 
    createCanvas(400,200);
    background(255,0,255);
    line(200,0,200,200)
    stroke(255,248,255)

    y= 100;
    j = 0;
}
       
 function draw() {
        // put drawing code here

   
ellipse (100,70,100,100)
fill(120,0,0)
stroke(128,0,0);
strokeWeight(6)


ellipse (100,160,50,50/2)
fill (51,102,255)
line(100,120,100,160);
strokeCap(ROUND); 
strokeWeight(2)



stroke(128,0,0);
ellipse (300,70,100,100)
fill(128,0,0)
stroke(128,0,0);
strokeWeight(6)


ellipse (300,160,50,50/2)
fill (51,102,255)
line(300,120,300,160);
strokeCap(ROUND); 
strokeWeight(2)
stroke(128,0,0)

var x = 55;
 var dx = 0.1
 while (x <= 145){
 x1 = x
 y1 = 90 + 2 * Math.sin(PI/10*x1)
 x2 = x + dx
 y2 = 90 + 2* Math.sin(PI/10*x2)
 line(x1,y1,x2,y2)
 x += dx;
 }
 
 
}



    





 
 


   



 


  
 


     
    




   

    
