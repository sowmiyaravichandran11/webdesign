  $(document).ready(function() {
        //1.Animate

              $('#animate1').click(function() {
                
                console.log('animation')
                $('.container1').animate(
                    {
                        left: "+=100px"
                    }
                    , 1000);
            });

            // 2.Show

            $('#show1').click(function() {
                $('.container1').fadeOut(1000);
            });

            // 3.Fade
           
                $('#fade').click(function(){
                $('.container1').fadeTo(1000,0.3);
            });
           
                                              
             // Event delegation example for items
            $(document).on('click', '.item', function() {
                $(this).fadeOut();
            });
        });