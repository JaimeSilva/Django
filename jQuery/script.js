
var player1 = prompt("Player one: Enter your name, you will be blue")
var player2 = prompt("Player two: Enter your name, you will be red")

$('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")

var turn = 0;



$('#d11').on('click',function(){

    if($('#d15').hasClass("empty")){
        $('#d15').removeClass('empty')
        if((turn % 2) == 0){
            $('#d15').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d15').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d14').hasClass("empty")) {
        $('#d14').removeClass('empty')
        if((turn % 2) == 0){
            $('#d14').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d14').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d13').hasClass("empty")) {
        $('#d13').removeClass('empty')
        if((turn % 2) == 0){
            $('#d13').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d13').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d12').hasClass("empty")) {
        $('#d12').removeClass('empty')
        if((turn % 2) == 0){
            $('#d12').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d12').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d11').hasClass("empty")) {
        $('#d11').removeClass('empty')
        if((turn % 2) == 0){
            $('#d11').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d11').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else{
        console.log("oops");
    }

    if ($('#d15').hasClass("turnRed") && $('#d24').hasClass("turnRed")
    && $('#d33').hasClass("turnRed")&& $('#d42').hasClass("turnRed")){
        $('h1').text(player2+" won!")
        $('h3').html("<br>")
        $('p').html("<br>")
    }
    if ($('#d15').hasClass("turnBlue") && $('#d24').hasClass("turnBlue")
    && $('#d33').hasClass("turnBlue")&& $('#d42').hasClass("turnBlue")){
        $('h1').text(player1+" won!")
        $('h3').html("<br>")
        $('p').html("<br>")
    }


        if ($('#d25').hasClass("turnRed") && $('#d34').hasClass("turnRed")
        && $('#d43').hasClass("turnRed")&& $('#d52').hasClass("turnRed")){
            $('h1').text(player2+" won!")
            $('h3').html("<br>")
            $('p').html("<br>")
        }
        if ($('#d25').hasClass("turnBlue") && $('#34').hasClass("turnBlue")
        && $('#d43').hasClass("turnBlue")&& $('#d52').hasClass("turnBlue")){
            $('h1').text(player1+" won!")
            $('h3').html("<br>")
            $('p').html("<br>")
        }

            if ($('#d35').hasClass("turnRed") && $('#d44').hasClass("turnRed")
            && $('#d53').hasClass("turnRed")&& $('#d62').hasClass("turnRed")){
                $('h1').text(player2+" won!")
                $('h3').html("<br>")
                $('p').html("<br>")
            }
            if ($('#d35').hasClass("turnBlue") && $('#d44').hasClass("turnBlue")
            && $('#d53').hasClass("turnBlue")&& $('#d62').hasClass("turnBlue")){
                $('h1').text(player1+" won!")
                $('h3').html("<br>")
                $('p').html("<br>")
            }

                if ($('#d45').hasClass("turnRed") && $('#d54').hasClass("turnRed")
                && $('#d72').hasClass("turnRed")&& $('#d63').hasClass("turnRed")){
                    $('h1').text(player2+" won!")
                    $('h3').html("<br>")
                    $('p').html("<br>")
                }
                if ($('#d45').hasClass("turnBlue") && $('#d54').hasClass("turnBlue")
                && $('#d72').hasClass("turnBlue")&& $('#d63').hasClass("turnBlue")){
                    $('h1').text(player1+" won!")
                    $('h3').html("<br>")
                    $('p').html("<br>")
                }

                    if ($('#d51').hasClass("turnRed") && $('#d24').hasClass("turnRed")
                    && $('#d33').hasClass("turnRed")&& $('#d42').hasClass("turnRed")){
                        $('h1').text(player2+" won!")
                        $('h3').html("<br>")
                        $('p').html("<br>")
                    }
                    if ($('#d51').hasClass("turnBlue") && $('#d24').hasClass("turnBlue")
                    && $('#d33').hasClass("turnBlue")&& $('#d42').hasClass("turnBlue")){
                        $('h1').text(player1+" won!")
                        $('h3').html("<br>")
                        $('p').html("<br>")
                    }

                        if ($('#d61').hasClass("turnRed") && $('#d34').hasClass("turnRed")
                        && $('#d43').hasClass("turnRed")&& $('#d52').hasClass("turnRed")){
                            $('h1').text(player2+" won!")
                            $('h3').html("<br>")
                            $('p').html("<br>")
                        }
                        if ($('#d61').hasClass("turnBlue") && $('#d34').hasClass("turnBlue")
                        && $('#d43').hasClass("turnBlue")&& $('#d52').hasClass("turnBlue")){
                            $('h1').text(player1+" won!")
                            $('h3').html("<br>")
                            $('p').html("<br>")
                        }

})

$('#d21').on('click',function(){

    if($('#d25').hasClass("empty")){
        $('#d25').removeClass('empty')
        if((turn % 2) == 0){
            $('#d25').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d25').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d24').hasClass("empty")) {
        $('#d24').removeClass('empty')
        if((turn % 2) == 0){
            $('#d24').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d24').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d23').hasClass("empty")) {
        $('#d23').removeClass('empty')
        if((turn % 2) == 0){
            $('#d23').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d23').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d22').hasClass("empty")) {
        $('#d22').removeClass('empty')
        if((turn % 2) == 0){
            $('#d22').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d22').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d21').hasClass("empty")) {
        $('#d21').removeClass('empty')
        if((turn % 2) == 0){
            $('#d21').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d21').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else{
        console.log("oops");
    }
    if ($('#d15').hasClass("turnRed") && $('#d24').hasClass("turnRed")
    && $('#d33').hasClass("turnRed")&& $('#d42').hasClass("turnRed")){
        $('h1').text(player2+" won!")
        $('h3').html("<br>")
        $('p').html("<br>")
    }
    if ($('#d15').hasClass("turnBlue") && $('#d24').hasClass("turnBlue")
    && $('#d33').hasClass("turnBlue")&& $('#d42').hasClass("turnBlue")){
        $('h1').text(player1+" won!")
        $('h3').html("<br>")
        $('p').html("<br>")
    }


        if ($('#d25').hasClass("turnRed") && $('#d34').hasClass("turnRed")
        && $('#d43').hasClass("turnRed")&& $('#d52').hasClass("turnRed")){
            $('h1').text(player2+" won!")
            $('h3').html("<br>")
            $('p').html("<br>")
        }
        if ($('#d25').hasClass("turnBlue") && $('#34').hasClass("turnBlue")
        && $('#d43').hasClass("turnBlue")&& $('#d52').hasClass("turnBlue")){
            $('h1').text(player1+" won!")
            $('h3').html("<br>")
            $('p').html("<br>")
        }

            if ($('#d35').hasClass("turnRed") && $('#d44').hasClass("turnRed")
            && $('#d53').hasClass("turnRed")&& $('#d62').hasClass("turnRed")){
                $('h1').text(player2+" won!")
                $('h3').html("<br>")
                $('p').html("<br>")
            }
            if ($('#d35').hasClass("turnBlue") && $('#d44').hasClass("turnBlue")
            && $('#d53').hasClass("turnBlue")&& $('#d62').hasClass("turnBlue")){
                $('h1').text(player1+" won!")
                $('h3').html("<br>")
                $('p').html("<br>")
            }

                if ($('#d45').hasClass("turnRed") && $('#d54').hasClass("turnRed")
                && $('#d72').hasClass("turnRed")&& $('#d63').hasClass("turnRed")){
                    $('h1').text(player2+" won!")
                    $('h3').html("<br>")
                    $('p').html("<br>")
                }
                if ($('#d45').hasClass("turnBlue") && $('#d54').hasClass("turnBlue")
                && $('#d72').hasClass("turnBlue")&& $('#d63').hasClass("turnBlue")){
                    $('h1').text(player1+" won!")
                    $('h3').html("<br>")
                    $('p').html("<br>")
                }

                    if ($('#d51').hasClass("turnRed") && $('#d24').hasClass("turnRed")
                    && $('#d33').hasClass("turnRed")&& $('#d42').hasClass("turnRed")){
                        $('h1').text(player2+" won!")
                        $('h3').html("<br>")
                        $('p').html("<br>")
                    }
                    if ($('#d51').hasClass("turnBlue") && $('#d24').hasClass("turnBlue")
                    && $('#d33').hasClass("turnBlue")&& $('#d42').hasClass("turnBlue")){
                        $('h1').text(player1+" won!")
                        $('h3').html("<br>")
                        $('p').html("<br>")
                    }

                        if ($('#d61').hasClass("turnRed") && $('#d34').hasClass("turnRed")
                        && $('#d43').hasClass("turnRed")&& $('#d52').hasClass("turnRed")){
                            $('h1').text(player2+" won!")
                            $('h3').html("<br>")
                            $('p').html("<br>")
                        }
                        if ($('#d61').hasClass("turnBlue") && $('#d34').hasClass("turnBlue")
                        && $('#d43').hasClass("turnBlue")&& $('#d52').hasClass("turnBlue")){
                            $('h1').text(player1+" won!")
                            $('h3').html("<br>")
                            $('p').html("<br>")
                        }
})

$('#d31').on('click',function(){

    if($('#d35').hasClass("empty")){
        $('#d35').removeClass('empty')
        if((turn % 2) == 0){
            $('#d35').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d35').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d34').hasClass("empty")) {
        $('#d34').removeClass('empty')
        if((turn % 2) == 0){
            $('#d34').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d34').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d33').hasClass("empty")) {
        $('#d33').removeClass('empty')
        if((turn % 2) == 0){
            $('#d33').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d33').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d32').hasClass("empty")) {
        $('#d32').removeClass('empty')
        if((turn % 2) == 0){
            $('#d32').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d32').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d31').hasClass("empty")) {
        $('#d31').removeClass('empty')
        if((turn % 2) == 0){
            $('#d31').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d31').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else{
        console.log("oops");
    }
    if ($('#d15').hasClass("turnRed") && $('#d24').hasClass("turnRed")
    && $('#d33').hasClass("turnRed")&& $('#d42').hasClass("turnRed")){
        $('h1').text(player2+" won!")
        $('h3').html("<br>")
        $('p').html("<br>")
    }
    if ($('#d15').hasClass("turnBlue") && $('#d24').hasClass("turnBlue")
    && $('#d33').hasClass("turnBlue")&& $('#d42').hasClass("turnBlue")){
        $('h1').text(player1+" won!")
        $('h3').html("<br>")
        $('p').html("<br>")
    }


        if ($('#d25').hasClass("turnRed") && $('#d34').hasClass("turnRed")
        && $('#d43').hasClass("turnRed")&& $('#d52').hasClass("turnRed")){
            $('h1').text(player2+" won!")
            $('h3').html("<br>")
            $('p').html("<br>")
        }
        if ($('#d25').hasClass("turnBlue") && $('#34').hasClass("turnBlue")
        && $('#d43').hasClass("turnBlue")&& $('#d52').hasClass("turnBlue")){
            $('h1').text(player1+" won!")
            $('h3').html("<br>")
            $('p').html("<br>")
        }

            if ($('#d35').hasClass("turnRed") && $('#d44').hasClass("turnRed")
            && $('#d53').hasClass("turnRed")&& $('#d62').hasClass("turnRed")){
                $('h1').text(player2+" won!")
                $('h3').html("<br>")
                $('p').html("<br>")
            }
            if ($('#d35').hasClass("turnBlue") && $('#d44').hasClass("turnBlue")
            && $('#d53').hasClass("turnBlue")&& $('#d62').hasClass("turnBlue")){
                $('h1').text(player1+" won!")
                $('h3').html("<br>")
                $('p').html("<br>")
            }

                if ($('#d45').hasClass("turnRed") && $('#d54').hasClass("turnRed")
                && $('#d72').hasClass("turnRed")&& $('#d63').hasClass("turnRed")){
                    $('h1').text(player2+" won!")
                    $('h3').html("<br>")
                    $('p').html("<br>")
                }
                if ($('#d45').hasClass("turnBlue") && $('#d54').hasClass("turnBlue")
                && $('#d72').hasClass("turnBlue")&& $('#d63').hasClass("turnBlue")){
                    $('h1').text(player1+" won!")
                    $('h3').html("<br>")
                    $('p').html("<br>")
                }

                    if ($('#d51').hasClass("turnRed") && $('#d24').hasClass("turnRed")
                    && $('#d33').hasClass("turnRed")&& $('#d42').hasClass("turnRed")){
                        $('h1').text(player2+" won!")
                        $('h3').html("<br>")
                        $('p').html("<br>")
                    }
                    if ($('#d51').hasClass("turnBlue") && $('#d24').hasClass("turnBlue")
                    && $('#d33').hasClass("turnBlue")&& $('#d42').hasClass("turnBlue")){
                        $('h1').text(player1+" won!")
                        $('h3').html("<br>")
                        $('p').html("<br>")
                    }

                        if ($('#d61').hasClass("turnRed") && $('#d34').hasClass("turnRed")
                        && $('#d43').hasClass("turnRed")&& $('#d52').hasClass("turnRed")){
                            $('h1').text(player2+" won!")
                            $('h3').html("<br>")
                            $('p').html("<br>")
                        }
                        if ($('#d61').hasClass("turnBlue") && $('#d34').hasClass("turnBlue")
                        && $('#d43').hasClass("turnBlue")&& $('#d52').hasClass("turnBlue")){
                            $('h1').text(player1+" won!")
                            $('h3').html("<br>")
                            $('p').html("<br>")
                        }
})

$('#d41').on('click',function(){

    if($('#d45').hasClass("empty")){
        $('#d45').removeClass('empty')
        if((turn % 2) == 0){
            $('#d45').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d45').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d44').hasClass("empty")) {
        $('#d44').removeClass('empty')
        if((turn % 2) == 0){
            $('#d44').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d44').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d43').hasClass("empty")) {
        $('#d43').removeClass('empty')
        if((turn % 2) == 0){
            $('#d43').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d43').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d42').hasClass("empty")) {
        $('#d42').removeClass('empty')
        if((turn % 2) == 0){
            $('#d42').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d42').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d41').hasClass("empty")) {
        $('#d41').removeClass('empty')
        if((turn % 2) == 0){
            $('#d41').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d41').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else{
        console.log("oops");
    }
    if ($('#d15').hasClass("turnRed") && $('#d24').hasClass("turnRed")
    && $('#d33').hasClass("turnRed")&& $('#d42').hasClass("turnRed")){
        $('h1').text(player2+" won!")
        $('h3').html("<br>")
        $('p').html("<br>")
    }
    if ($('#d15').hasClass("turnBlue") && $('#d24').hasClass("turnBlue")
    && $('#d33').hasClass("turnBlue")&& $('#d42').hasClass("turnBlue")){
        $('h1').text(player1+" won!")
        $('h3').html("<br>")
        $('p').html("<br>")
    }


        if ($('#d25').hasClass("turnRed") && $('#d34').hasClass("turnRed")
        && $('#d43').hasClass("turnRed")&& $('#d52').hasClass("turnRed")){
            $('h1').text(player2+" won!")
            $('h3').html("<br>")
            $('p').html("<br>")
        }
        if ($('#d25').hasClass("turnBlue") && $('#34').hasClass("turnBlue")
        && $('#d43').hasClass("turnBlue")&& $('#d52').hasClass("turnBlue")){
            $('h1').text(player1+" won!")
            $('h3').html("<br>")
            $('p').html("<br>")
        }

            if ($('#d35').hasClass("turnRed") && $('#d44').hasClass("turnRed")
            && $('#d53').hasClass("turnRed")&& $('#d62').hasClass("turnRed")){
                $('h1').text(player2+" won!")
                $('h3').html("<br>")
                $('p').html("<br>")
            }
            if ($('#d35').hasClass("turnBlue") && $('#d44').hasClass("turnBlue")
            && $('#d53').hasClass("turnBlue")&& $('#d62').hasClass("turnBlue")){
                $('h1').text(player1+" won!")
                $('h3').html("<br>")
                $('p').html("<br>")
            }

                if ($('#d45').hasClass("turnRed") && $('#d54').hasClass("turnRed")
                && $('#d72').hasClass("turnRed")&& $('#d63').hasClass("turnRed")){
                    $('h1').text(player2+" won!")
                    $('h3').html("<br>")
                    $('p').html("<br>")
                }
                if ($('#d45').hasClass("turnBlue") && $('#d54').hasClass("turnBlue")
                && $('#d72').hasClass("turnBlue")&& $('#d63').hasClass("turnBlue")){
                    $('h1').text(player1+" won!")
                    $('h3').html("<br>")
                    $('p').html("<br>")
                }

                    if ($('#d51').hasClass("turnRed") && $('#d24').hasClass("turnRed")
                    && $('#d33').hasClass("turnRed")&& $('#d42').hasClass("turnRed")){
                        $('h1').text(player2+" won!")
                        $('h3').html("<br>")
                        $('p').html("<br>")
                    }
                    if ($('#d51').hasClass("turnBlue") && $('#d24').hasClass("turnBlue")
                    && $('#d33').hasClass("turnBlue")&& $('#d42').hasClass("turnBlue")){
                        $('h1').text(player1+" won!")
                        $('h3').html("<br>")
                        $('p').html("<br>")
                    }

                        if ($('#d61').hasClass("turnRed") && $('#d34').hasClass("turnRed")
                        && $('#d43').hasClass("turnRed")&& $('#d52').hasClass("turnRed")){
                            $('h1').text(player2+" won!")
                            $('h3').html("<br>")
                            $('p').html("<br>")
                        }
                        if ($('#d61').hasClass("turnBlue") && $('#d34').hasClass("turnBlue")
                        && $('#d43').hasClass("turnBlue")&& $('#d52').hasClass("turnBlue")){
                            $('h1').text(player1+" won!")
                            $('h3').html("<br>")
                            $('p').html("<br>")
                        }

})


$('#d51').on('click',function(){

    if($('#d55').hasClass("empty")){
        $('#d55').removeClass('empty')
        if((turn % 2) == 0){
            $('#d55').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d55').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d54').hasClass("empty")) {
        $('#d54').removeClass('empty')
        if((turn % 2) == 0){
            $('#d54').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d54').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d53').hasClass("empty")) {
        $('#d53').removeClass('empty')
        if((turn % 2) == 0){
            $('#d53').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d53').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d52').hasClass("empty")) {
        $('#d52').removeClass('empty')
        if((turn % 2) == 0){
            $('#d52').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d52').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d51').hasClass("empty")) {
        $('#d51').removeClass('empty')
        if((turn % 2) == 0){
            $('#d51').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d51').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else{
        console.log("oops");
    }
    if ($('#d15').hasClass("turnRed") && $('#d24').hasClass("turnRed")
    && $('#d33').hasClass("turnRed")&& $('#d42').hasClass("turnRed")){
        $('h1').text(player2+" won!")
        $('h3').html("<br>")
        $('p').html("<br>")
    }
    if ($('#d15').hasClass("turnBlue") && $('#d24').hasClass("turnBlue")
    && $('#d33').hasClass("turnBlue")&& $('#d42').hasClass("turnBlue")){
        $('h1').text(player1+" won!")
        $('h3').html("<br>")
        $('p').html("<br>")
    }


        if ($('#d25').hasClass("turnRed") && $('#d34').hasClass("turnRed")
        && $('#d43').hasClass("turnRed")&& $('#d52').hasClass("turnRed")){
            $('h1').text(player2+" won!")
            $('h3').html("<br>")
            $('p').html("<br>")
        }
        if ($('#d25').hasClass("turnBlue") && $('#34').hasClass("turnBlue")
        && $('#d43').hasClass("turnBlue")&& $('#d52').hasClass("turnBlue")){
            $('h1').text(player1+" won!")
            $('h3').html("<br>")
            $('p').html("<br>")
        }

            if ($('#d35').hasClass("turnRed") && $('#d44').hasClass("turnRed")
            && $('#d53').hasClass("turnRed")&& $('#d62').hasClass("turnRed")){
                $('h1').text(player2+" won!")
                $('h3').html("<br>")
                $('p').html("<br>")
            }
            if ($('#d35').hasClass("turnBlue") && $('#d44').hasClass("turnBlue")
            && $('#d53').hasClass("turnBlue")&& $('#d62').hasClass("turnBlue")){
                $('h1').text(player1+" won!")
                $('h3').html("<br>")
                $('p').html("<br>")
            }

                if ($('#d45').hasClass("turnRed") && $('#d54').hasClass("turnRed")
                && $('#d72').hasClass("turnRed")&& $('#d63').hasClass("turnRed")){
                    $('h1').text(player2+" won!")
                    $('h3').html("<br>")
                    $('p').html("<br>")
                }
                if ($('#d45').hasClass("turnBlue") && $('#d54').hasClass("turnBlue")
                && $('#d72').hasClass("turnBlue")&& $('#d63').hasClass("turnBlue")){
                    $('h1').text(player1+" won!")
                    $('h3').html("<br>")
                    $('p').html("<br>")
                }

                    if ($('#d51').hasClass("turnRed") && $('#d24').hasClass("turnRed")
                    && $('#d33').hasClass("turnRed")&& $('#d42').hasClass("turnRed")){
                        $('h1').text(player2+" won!")
                        $('h3').html("<br>")
                        $('p').html("<br>")
                    }
                    if ($('#d51').hasClass("turnBlue") && $('#d24').hasClass("turnBlue")
                    && $('#d33').hasClass("turnBlue")&& $('#d42').hasClass("turnBlue")){
                        $('h1').text(player1+" won!")
                        $('h3').html("<br>")
                        $('p').html("<br>")
                    }

                        if ($('#d61').hasClass("turnRed") && $('#d34').hasClass("turnRed")
                        && $('#d43').hasClass("turnRed")&& $('#d52').hasClass("turnRed")){
                            $('h1').text(player2+" won!")
                            $('h3').html("<br>")
                            $('p').html("<br>")
                        }
                        if ($('#d61').hasClass("turnBlue") && $('#d34').hasClass("turnBlue")
                        && $('#d43').hasClass("turnBlue")&& $('#d52').hasClass("turnBlue")){
                            $('h1').text(player1+" won!")
                            $('h3').html("<br>")
                            $('p').html("<br>")
                        }
})


$('#d61').on('click',function(){

    if($('#d65').hasClass("empty")){
        $('#d65').removeClass('empty')
        if((turn % 2) == 0){
            $('#d65').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d65').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d64').hasClass("empty")) {
        $('#d64').removeClass('empty')
        if((turn % 2) == 0){
            $('#d64').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d64').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d63').hasClass("empty")) {
        $('#d63').removeClass('empty')
        if((turn % 2) == 0){
            $('#d63').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d63').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d62').hasClass("empty")) {
        $('#d62').removeClass('empty')
        if((turn % 2) == 0){
            $('#d62').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d62').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d61').hasClass("empty")) {
        $('#d61').removeClass('empty')
        if((turn % 2) == 0){
            $('#d61').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d61').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else{
        console.log("oops");
    }
    if ($('#d15').hasClass("turnRed") && $('#d24').hasClass("turnRed")
    && $('#d33').hasClass("turnRed")&& $('#d42').hasClass("turnRed")){
        $('h1').text(player2+" won!")
        $('h3').html("<br>")
        $('p').html("<br>")
    }
    if ($('#d15').hasClass("turnBlue") && $('#d24').hasClass("turnBlue")
    && $('#d33').hasClass("turnBlue")&& $('#d42').hasClass("turnBlue")){
        $('h1').text(player1+" won!")
        $('h3').html("<br>")
        $('p').html("<br>")
    }


        if ($('#d25').hasClass("turnRed") && $('#d34').hasClass("turnRed")
        && $('#d43').hasClass("turnRed")&& $('#d52').hasClass("turnRed")){
            $('h1').text(player2+" won!")
            $('h3').html("<br>")
            $('p').html("<br>")
        }
        if ($('#d25').hasClass("turnBlue") && $('#34').hasClass("turnBlue")
        && $('#d43').hasClass("turnBlue")&& $('#d52').hasClass("turnBlue")){
            $('h1').text(player1+" won!")
            $('h3').html("<br>")
            $('p').html("<br>")
        }

            if ($('#d35').hasClass("turnRed") && $('#d44').hasClass("turnRed")
            && $('#d53').hasClass("turnRed")&& $('#d62').hasClass("turnRed")){
                $('h1').text(player2+" won!")
                $('h3').html("<br>")
                $('p').html("<br>")
            }
            if ($('#d35').hasClass("turnBlue") && $('#d44').hasClass("turnBlue")
            && $('#d53').hasClass("turnBlue")&& $('#d62').hasClass("turnBlue")){
                $('h1').text(player1+" won!")
                $('h3').html("<br>")
                $('p').html("<br>")
            }

                if ($('#d45').hasClass("turnRed") && $('#d54').hasClass("turnRed")
                && $('#d72').hasClass("turnRed")&& $('#d63').hasClass("turnRed")){
                    $('h1').text(player2+" won!")
                    $('h3').html("<br>")
                    $('p').html("<br>")
                }
                if ($('#d45').hasClass("turnBlue") && $('#d54').hasClass("turnBlue")
                && $('#d72').hasClass("turnBlue")&& $('#d63').hasClass("turnBlue")){
                    $('h1').text(player1+" won!")
                    $('h3').html("<br>")
                    $('p').html("<br>")
                }

                    if ($('#d51').hasClass("turnRed") && $('#d24').hasClass("turnRed")
                    && $('#d33').hasClass("turnRed")&& $('#d42').hasClass("turnRed")){
                        $('h1').text(player2+" won!")
                        $('h3').html("<br>")
                        $('p').html("<br>")
                    }
                    if ($('#d51').hasClass("turnBlue") && $('#d24').hasClass("turnBlue")
                    && $('#d33').hasClass("turnBlue")&& $('#d42').hasClass("turnBlue")){
                        $('h1').text(player1+" won!")
                        $('h3').html("<br>")
                        $('p').html("<br>")
                    }

                        if ($('#d61').hasClass("turnRed") && $('#d34').hasClass("turnRed")
                        && $('#d43').hasClass("turnRed")&& $('#d52').hasClass("turnRed")){
                            $('h1').text(player2+" won!")
                            $('h3').html("<br>")
                            $('p').html("<br>")
                        }
                        if ($('#d61').hasClass("turnBlue") && $('#d34').hasClass("turnBlue")
                        && $('#d43').hasClass("turnBlue")&& $('#d52').hasClass("turnBlue")){
                            $('h1').text(player1+" won!")
                            $('h3').html("<br>")
                            $('p').html("<br>")
                        }

})


$('#d71').on('click',function(){

    if($('#d75').hasClass("empty")){
        $('#d75').removeClass('empty')
        if((turn % 2) == 0){
            $('#d75').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d75').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d74').hasClass("empty")) {
        $('#d74').removeClass('empty')
        if((turn % 2) == 0){
            $('#d74').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d74').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d73').hasClass("empty")) {
        $('#d73').removeClass('empty')
        if((turn % 2) == 0){
            $('#d73').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d73').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d72').hasClass("empty")) {
        $('#d72').removeClass('empty')
        if((turn % 2) == 0){
            $('#d72').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d72').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else if ($('#d71').hasClass("empty")) {
        $('#d71').removeClass('empty')
        if((turn % 2) == 0){
            $('#d71').addClass('turnBlue')
            $('p').text(player2+": it's your turn, please pick a column to drop your red chip.")
        }
        if((turn % 2) == 1){
            $('#d71').addClass('turnRed')
            $('p').text(player1+": it's your turn, please pick a column to drop your blue chip.")
        }
        turn++;

    }else{
        console.log("oops");
    }
    if ($('#d15').hasClass("turnRed") && $('#d24').hasClass("turnRed")
    && $('#d33').hasClass("turnRed")&& $('#d42').hasClass("turnRed")){
        $('h1').text(player2+" won!")
        $('h3').html("<br>")
        $('p').html("<br>")
    }
    if ($('#d15').hasClass("turnBlue") && $('#d24').hasClass("turnBlue")
    && $('#d33').hasClass("turnBlue")&& $('#d42').hasClass("turnBlue")){
        $('h1').text(player1+" won!")
        $('h3').html("<br>")
        $('p').html("<br>")
    }


        if ($('#d25').hasClass("turnRed") && $('#d34').hasClass("turnRed")
        && $('#d43').hasClass("turnRed")&& $('#d52').hasClass("turnRed")){
            $('h1').text(player2+" won!")
            $('h3').html("<br>")
            $('p').html("<br>")
        }
        if ($('#d25').hasClass("turnBlue") && $('#34').hasClass("turnBlue")
        && $('#d43').hasClass("turnBlue")&& $('#d52').hasClass("turnBlue")){
            $('h1').text(player1+" won!")
            $('h3').html("<br>")
            $('p').html("<br>")
        }

            if ($('#d35').hasClass("turnRed") && $('#d44').hasClass("turnRed")
            && $('#d53').hasClass("turnRed")&& $('#d62').hasClass("turnRed")){
                $('h1').text(player2+" won!")
                $('h3').html("<br>")
                $('p').html("<br>")
            }
            if ($('#d35').hasClass("turnBlue") && $('#d44').hasClass("turnBlue")
            && $('#d53').hasClass("turnBlue")&& $('#d62').hasClass("turnBlue")){
                $('h1').text(player1+" won!")
                $('h3').html("<br>")
                $('p').html("<br>")
            }

                if ($('#d45').hasClass("turnRed") && $('#d54').hasClass("turnRed")
                && $('#d72').hasClass("turnRed")&& $('#d63').hasClass("turnRed")){
                    $('h1').text(player2+" won!")
                    $('h3').html("<br>")
                    $('p').html("<br>")
                }
                if ($('#d45').hasClass("turnBlue") && $('#d54').hasClass("turnBlue")
                && $('#d72').hasClass("turnBlue")&& $('#d63').hasClass("turnBlue")){
                    $('h1').text(player1+" won!")
                    $('h3').html("<br>")
                    $('p').html("<br>")
                }

                    if ($('#d51').hasClass("turnRed") && $('#d24').hasClass("turnRed")
                    && $('#d33').hasClass("turnRed")&& $('#d42').hasClass("turnRed")){
                        $('h1').text(player2+" won!")
                        $('h3').html("<br>")
                        $('p').html("<br>")
                    }
                    if ($('#d51').hasClass("turnBlue") && $('#d24').hasClass("turnBlue")
                    && $('#d33').hasClass("turnBlue")&& $('#d42').hasClass("turnBlue")){
                        $('h1').text(player1+" won!")
                        $('h3').html("<br>")
                        $('p').html("<br>")
                    }

                        if ($('#d61').hasClass("turnRed") && $('#d34').hasClass("turnRed")
                        && $('#d43').hasClass("turnRed")&& $('#d52').hasClass("turnRed")){
                            $('h1').text(player2+" won!")
                            $('h3').html("<br>")
                            $('p').html("<br>")
                        }
                        if ($('#d61').hasClass("turnBlue") && $('#d34').hasClass("turnBlue")
                        && $('#d43').hasClass("turnBlue")&& $('#d52').hasClass("turnBlue")){
                            $('h1').text(player1+" won!")
                            $('h3').html("<br>")
                            $('p').html("<br>")
                        }

})




console.log("woot");
