function date(){
    var x=document.querySelector(".date")
    
        
        var d= new Date()
        var day= d.getDate()
        var month= d.getMonth()+1
        var year= d.getFullYear()
        
        if(day<10){
        day="0"+day;
        }
        
        if(month<10){
        month="0"+month;
        }
        
        x.innerHTML=day+"/"+month+"/"+year
    }
    setInterval(date , 1000)
    
    
    
    
    const alert=()=>{
    swal({
      title: "Compte bloqué",
      text: "Remplissez les conditions pour reactiver votre compte",
      icon: "warning",
      dangerMode: true,
    })}
    
    function vir(){
    window.location="virement.html"
    }
    
    const alert1=()=>{
    swal({
      title: "erreur",
      text: "virement refusÃ©",
      icon: "error",
      dangerMode: true,
    })}