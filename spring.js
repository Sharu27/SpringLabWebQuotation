{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> */}

    function onlyNumberKey(evt) { 
          
        // Only ASCII charactar in that range allowed 
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode 
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) 
            return false; 
        return true; 
    } 

    /*Js to add new fields*/
    $(document).ready(function() {
    var max_fields = 10;
    var wrapper = $("#dynamicInput");
    var add_button = $(".add-button");

    var x = 1;
    $(add_button).click(function(e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(wrapper).append('<div class="new-dynamic"> <select name="myInputs[]"> <option value="">Select Service</option> <option value="">Quotation-1</option> <option value="">Quotation-2</option><option value="">Quotation-3</option><option value="">Quotation-4</option> </select><div class="new-bill" name="div-bill"><input type="bill"  class="sum-bill" id="sum-bill"  name="myInputs[]" placeholder="service Cost" onkeypress="return onlyNumberKey(event)"><a href="#" class="delete" style="text-decoration: none;">&nbsp;Delete</a></div>'); //add input box
        } else {
            alert('You Reached the limits')
        }
    });

    $(wrapper).on("click", ".delete", function(e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    })



    $(document).on('keyup', ".sum-bill",function () {
        var total = 0;
        
        $('.sum-bill').each(function(){
          total += parseFloat($(this).val());
        })  
      
        console.log(total)
        $("#sum").html(total.toFixed(2));
      })




    //   ---------------------

     
});

$(document).ready(function() {
    var max_field = 6;
    var wrapper_1 = $(".input-dynamic");
    var add_button_1 = $(".add_form_field");

    var y= 1;
    $(add_button_1).click(function(e) {
        e.preventDefault();
        if (y < max_field) {
            y++;
            $(wrapper_1).append('<div></div><div class="new-input-dynamic"> &#9679 &nbsp;<input type="text" class="text" ><a href="#" class="delete" style="text-decoration: none;">Delete</a></div>'); //add input box
        } else {
            alert('You Reached the limits')
        }
    });

    $(wrapper_1).on("click", ".delete", function(e) {
        e.preventDefault();
        $(this).parent('div').remove();
        y--;
    })
});


$(document).ready(function() { 
      
    // Global variable 
    var element = $("#target");  
  
    // Global variable 
    var getCanvas;  

    $("#btn-Preview-Image").on('click', function() { 
        html2canvas(element, { 
            onrendered: function(canvas) { 
                $("#previewImage").append(canvas); 
                getCanvas = canvas; 
            } 
        }); 
    }); 

    $("#btn-Convert-Html2Image").on('click', function() { 
        var imgageData =  
            getCanvas.toDataURL("image/png"); 
      
        // Now browser starts downloading  
        // it instead of just showing it 
        var newData = imgageData.replace( 
        /^data:image\/png/, "data:application/octet-stream"); 
      
        $("#btn-Convert-Html2Image").attr( 
        "download", "GeeksForGeeks.png").attr( 
        "href", newData); 
    }); 
}); 