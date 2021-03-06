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
            $(wrapper).append('<div><a href="#" class="delete">&nbsp;Delete</a><div class="new-dynamic"> <select name="myInputs[]"> <option value="NO!..your not selected any services">Select Service</option> <option value="Quotation-1">Quotation-1</option> <option value="Quotation-2">Quotation-2</option><option value="Quotation-3">Quotation-3</option><option value="Quotation-4">Quotation-4</option> </select><div class="new-bill" name="div-bill"><input type="bill"  class="sum-bill" id="sum-bill"  name="myInputs[]" placeholder="service Cost" onkeypress="return onlyNumberKey(event)"></div></div>'); //add input box
        } else {
            alert('You Reached the limits')
        }
    });

    $(wrapper).on("click", ".delete", function(e) {
        e.preventDefault();
        $(this).parent('div').remove();
        $('#sum').empty();
         x--;
    })



    $(document).on('keyup', ".sum-bill",function () {
        var total = 0;
        
        $('.sum-bill').each(function(){
            if(!isNaN(this.value) && this.value.length!=0){
          total += parseFloat($(this).val());
            }
        })  
      
        console.log(total)
        // $("#sum").html(total.toFixed(2));
        $("#sum").html(new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
          }).format(total.toFixed(2)));

      })
    //   $('.ec-bill input[type=bill]').on('keyup',function(e){
    //     var oldstr=$('.ec-bill input[type=bill]').val();
    //     var tokens = oldstr.split('/-');
    //     var suffix = tokens.pop() + '/-';
    //     var prefix = tokens.join("");
    //     $('.ec-bill input[type=bill]').val(prefix+suffix);  
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
            $(wrapper_1).append('<div></div><div class="new-input-dynamic"> &#9679 &nbsp;<input type="text" class="text" ><a href="#" class="delete1" style="text-decoration: none;">Delete</a></div>'); //add input box
        } else {
            alert('You Reached the limits')
        }
    });

    $(wrapper_1).on("click", ".delete1", function(e) {
        e.preventDefault();
        $(this).parent('div').remove();
        y--;
    })
});



$(document).ready(function() { 
      $("#previewHead").hide();
      $("#btn-Convert-Html2Image").hide();
      $("#close").hide();
      
    // Global variable 
    var element = $("#target");  
  
    // Global variable 
    var getCanvas;  
    
    $("#btn-Preview-Image").on('click', function() { 
        $('.add_form_field').hide();
        $('.add-button').hide();
        $('.delete').hide();
        $('.delete1').hide();
        $("#previewHead").show();
        $("#btn-Convert-Html2Image").show();
      $("#close").show();
        
        html2canvas(element, { 
            onrendered: function(canvas) { 
                $("#previewImage").append(canvas); 
                getCanvas = canvas; 
            } 
        }); 
        
        $('#target').hide();
        $("#btn-Preview-Image").hide();
        $("#previewImage").show();
    }); 
   
    $("#btn-Convert-Html2Image").on('click', function() { 
        var imgageData =  
            getCanvas.toDataURL("image/png"); 
      
        // Now browser starts downloading  
        // it instead of just showing it 
        var newData = imgageData.replace( 
        /^data:image\/png/, "data:application/octet-stream"); 
        
        
      
       $("#btn-Convert-Html2Image").attr( 
        "download", "Web-Quotation.png").attr( 
        "href", newData); 
    }); 



}); 
$(document).ready(function(){
    $("#close").on('click',function(){
        $('#target').show();
          $("#previewImage").hide();
          $("#previewImage").empty();
          $('#btn-Preview-Image').show();
          $('.add_form_field').show();
          $('.add-button').show();
          $('.delete').show();
          $('.delete1').show();
          $("#previewHead").hide();
          $("#btn-Convert-Html2Image").hide();
          $("#close").hide();
    
    
      })
});