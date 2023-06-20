jQuery(function ($) {

    $(document).ready(function () {
        if($('.required-dc input').length) {
            // $('.submit-dc').prop('disabled', true);
            $('button[type="submit"]').prop('disabled', true);
            console.log('custom JS val')
            // $('.submit-dc').append('<div class="dum-btn" style="position: absolute; width: 100%; height: 100%"></div>')
            $('button[type="submit"]').append('<div class="dum-btn" style="position: absolute; width: 100%; height: 100%"></div>')
        }

        const email = document.querySelector('input[name=email]');
        const validateEmail= (email) => {
            var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(String(email).toLowerCase());
        }

        function privateEmailCheck() {
            const emailsBlackList = ['gmail', 'yahoo' , 'protonmail' , 'yandex', 'icloud', 'aol', 'hotmail', 'outlook'];
            const EmailInput = email.value.toLowerCase();
            const privateEmail = emailsBlackList.some(element => {
                if (EmailInput.includes(element)) {
                    return true;
                }
                return false;
            });
            if (privateEmail) {
                return true;
            }
            return false;
        }

        var selectValidation = false;
        var inputValidation = false;
        var phoneValidation = false;

        function validEmail(){
            if (validateEmail(email.value) && privateEmailCheck() == false){
                return true;
            }
            return false;
        }

        $('select').change(function(){

            if ( document.documentElement.lang.toLowerCase() === "he-il" ) {
                if($(this).val() == 'הכשרה עבורי'){
                    $(this).parent().append('<div class="error text-danger" style="font-size: 14px">בהנחה שהנך מעוניינ.ת באחת ההכשרות שלנו, לידיעתך - אנחנו נותנים שירות לארגונים בלבד. במידה ומעוניינ.ת לדעת יותר על אחת מההכשרות, ניתן <a href="https://elevation.ac/esg/" target="_blank">להקליק כאן</a></div>')
                } else {
                    $(this).siblings('.text-danger').remove();
                }
            } else if($(this).val() == 'Training for myself'){
                $(this).parent().append('<div class="error text-danger" style="font-size: 14px">Assuming you\'re interested in one of our courses, please note that we only deal with corporations.\n' +
                    'To explore our ESG programs <a href="https://elevation.ac/esg/" target="_blank">click here\n</a></div>')
            } else {
                $(this).siblings('.text-danger').remove();
            }
        });

        $('.dum-btn').mouseenter( function (){
            if($('.required-dc select').length){
                $('.required-dc select').each(function() {
                    if ($(this).val() !== "") {
                        selectValidation = true;
                    }
                    else {
                        $('button[type="submit"]').prop('disabled', true);
                        selectValidation = false;
                        return false
                    }
                });
            } else {
                selectValidation = true;
                // console.log('no select fields')
            }

            if($('.required-dc input[name="phone"]').length){
                $('.required-dc input[name="phone"]').each(function() {
                    if ($(this).val().length > 7) {
                        phoneValidation = true;
                    }
                    else {
                        $('button[type="submit"]').prop('disabled', true);
                        phoneValidation = false;
                        return false
                    }
                });
            } else {
                phoneValidation = true;
                // console.log('no phone validation')
            }

            $('.required-dc input').each(function() {
                if ($(this).val().length > 1 && validEmail() == true) {
                    inputValidation = true;
                }
                else {
                    $('button[type="submit"]').prop('disabled', true);
                    inputValidation = false;
                    return false
                }
            });

            if ((selectValidation == true && inputValidation == true) && phoneValidation == true){
                console.log('Form is valid');
                $('button[type="submit"]').prop('disabled', false);
            } else {
                console.log('Form is not valid');
                $('button[type="submit"]').prop('disabled', true);
            }

        });


        $('.dum-btn').click(function(){
            $('.text-danger').each(function(){
                $(this).remove();
            })

            $('.required-dc input').not(':input[name="phone"]').each(function() {
                if ($(this).val().length < 2) {
                    if ( document.documentElement.lang.toLowerCase() === "he-il" ) {
                        $(this).parent().append('<div class="error text-danger" style="font-size: 14px">זהו שדה חובה</div>')
                    } else if ( document.documentElement.lang.toLowerCase() === "de-de" ) {
                        $(this).parent().append('<div class="error text-danger" style="font-size: 14px">Dieses Feld ist erforderlich</div>')
                    } else {
                        $(this).parent().append('<div class="error text-danger" style="font-size: 14px">This field is required</div>')
                    }
                } else {
                    $(this).siblings('.text-danger').remove();
                }
            })

            $('.required-dc input[name="phone"]').each(function() {
                if ($(this).val().length < 8) {
                    if ( document.documentElement.lang.toLowerCase() === "he-il" ) {
                        $(this).parent().append('<div class="error text-danger" style="font-size: 14px">מספר טלפון חייב להכיל 8 ספרות ומעלה</div>')
                    } else {
                        $(this).parent().append('<div class="error text-danger" style="font-size: 14px">Phone number must have 8 digits or more</div>')
                    }
                } else {
                    $(this).siblings('.text-danger').remove();
                }
            })

            $('.required-dc select').each(function() {
                if ($(this).val() == "") {
                    if ( document.documentElement.lang.toLowerCase() === "he-il" ) {
                        $(this).parent().append('<div class="error text-danger" style="font-size: 14px">זהו שדה חובה</div>')
                    } else if ( document.documentElement.lang.toLowerCase() === "de-de" ) {
                        $(this).parent().append('<div class="error text-danger" style="font-size: 14px">Dieses Feld ist erforderlich</div>')
                    } else {
                        $(this).parent().append('<div class="error text-danger" style="font-size: 14px">This field is required</div>')
                    }
                } else {
                    $(this).siblings('.text-danger').remove();
                }
            })

            if(validEmail() == true){
                $(email).siblings('.text-danger').remove();
            } else {
                $(email).siblings('.text-danger').remove();
                if ( document.documentElement.lang.toLowerCase() === "he-il" ) {
                    $(email).parent().append('<div class="error text-danger" style="font-size: 14px">בבקשה להכניס מייל עבודה תקין</div>')
                } else if ( document.documentElement.lang.toLowerCase() === "de-de" ) {
                    $(email).parent().append('<div class="error text-danger" style="font-size: 14px">Bitte die geschäftliche Email angeben</div>')
                } else {
                    $(email).parent().append('<div class="error text-danger" style="font-size: 14px">Please enter a valid company email</div>')
                }
            }

        });

    });
})
