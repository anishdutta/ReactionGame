 start=new Date().getTime();
        function makeappear(){
            var width= Math.random()*200 +100;
            var height= Math.random()*200 +100;
            var top= Math.random()*400;
            var left= Math.random()*400;
            var right= Math.random()*400;
            if(Math.random() > 0.5){
                document.getElementById("square").style.borderRadius="50%" ;
            }
            else{
                document.getElementById("square").style.borderRadius="0%" ;
            }
            document.getElementById("square").style.width= width;
            document.getElementById("square").style.height= height;
            document.getElementById("square").style.top= top;
            document.getElementById("square").style.right= right;
            document.getElementById("square").style.left= left;
            document.getElementById("square").style.backgroundColor= getRandomColor();




            document.getElementById("square").style.display="block";
            start=new Date().getTime();
        }
        function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

        function makedelay(){
        setTimeout(makeappear, Math.random() * 2000);
        }
        makedelay();
        
         document.getElementById("square").onclick= function(){
             document.getElementById("square").style.display="none";
             var end= new Date().getTime();
             var timetaken=(end-start)/1000;
             document.getElementById("time").innerHTML= "Time Taken :- " + timetaken;
            
             makedelay();
         }