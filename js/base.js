  $(document).ready(function() {
            // 1. Show the box
            $('#show').click(function() {
                $('#box').fadeIn(1000);
            });

            // 2. Hide the box
            $('#hide').click(function() {
                $('#box').fadeOut(1000);
            });
            $('#fade').click(function(){
                $('#box').fadeTo(1000,0.3);
            });
           
            // 4. Animate the box
            $('#animate').click(function() {
                $('#box').animate(
                    {
                        left: "+=100px"
                    }
                    , 1000);
            });

           
                     
            // Event delegation example for items
            $(document).on('click', '.item', function() {
                $(this).fadeOut();
            });
        });