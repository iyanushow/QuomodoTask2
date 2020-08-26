window.onload = function(){
    var todayDate = new Date().toDateString();
    var currentTime = new Date().toLocaleTimeString();
    var signout = $(".signout");
    
    
    $(".date").append(todayDate)


    $(".signin").on("click", function(){
        var employeeID = $("#ID").val();
        $(".person").text(`${employeeID} - has resumed work at ${currentTime}`) ;
        signout.prop("disabled", false); 
        $(".resumed").css("display", "block").fadeOut(1000)
          
        
    });

    $(".signout").on("click", function(){
        var employeeID = $("#ID").val();
        $(".person").text(`${employeeID} - has left work at ${currentTime}`) ;
        $(".resumed").css("display", "block").fadeOut(1000)
        
    });

    
    
}
