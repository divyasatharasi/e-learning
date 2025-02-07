$(document).ready(function() {
    $('.next-step').click(function() {
        var nextTab = $(this).data('next');
        $(nextTab).removeClass('disabled').tab('show');
    });

    // Get the query string 
    const queryString = window.location.search;
    // Parse the query string 
    const urlParams = new URLSearchParams(queryString); 
    const data = urlParams.get('id'); 
    const selectedSession = sessionList.find(s=> s.id === Number(data))
    document.getElementById('ordersummary-course-head').textContent = selectedSession.id

    $('#customer-info-next').click(function() {
        var isValid = true;

        // Validate Name
        if ($('#firstName').val() === '') {
            $('#fname-error').show();
            isValid = false;
        } else {
            $('#fname-error').hide();
        }

         if ($('#lastName').val() === '') {
            $('#lname-error').show();
            isValid = false;
        } else {
            $('#lname-error').hide();
        }

        // Validate Email
        var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!$('#email').val().match(emailPattern)) {
            $('#email-error').show();
            isValid = false;
        } else {
            $('#email-error').hide();
        }

        // Validate Phone
        if ($('#phoneNumber').val() === '') {
            $('#phone-error').show();
            isValid = false;
        } else {
            $('#phone-error').hide();
        }

        if ($('#address').val() === '') {
            $('#address-error').show();
            isValid = false;
        } else {
            $('#address-error').hide();
        }

        if (isValid) {
            $('#payment-details-tab').tab('show');
        }
    });
    
});