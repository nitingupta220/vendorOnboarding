$('.OpenImgUpload').click(function () {
    'use strict';
    console.log(12345);
    $('#imgupload').trigger('click');
});

jQuery(function($) {
    $('input[type="file"]').change(function () {
            console.log(123);
        if ($(this).val()) {
            var filename = $(this).val();
            $(this).closest('.first').find('.upload-path').html(filename);
        }
    });
});