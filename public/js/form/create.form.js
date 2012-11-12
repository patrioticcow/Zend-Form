$(document).ready(function() {

	var uniqueId = 1;
	var theForm = $('#the_form');
	var secondTab = $('#add_form_element li:eq(1) a');
	var thirdTab = $('#add_form_element li:eq(2) a');
	var fieldProp = $('#field_properties');

	$('.delete_li').live("click", function () {
		$(this).parent().remove();
	});

	$('#add_form_element a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});

    $('.edit_form_properties').click(function (e) {
		e.preventDefault();
        thirdTab.tab('show');
	});

    /**
     * add_form_properties
     */
    $('#add_form_properties').click(function(e){
        e.preventDefault();
        var formTitle = $('.form_title_head');
        formTitle.find('.form_title_placeholder').html(
            $('[name="form_title"]').attr('value')
        );
        formTitle.find('.form_description_placeholder').html(
            $('[name="form_description"]').attr('value')
        );
        formTitle.find('[name="form_class_placeholder"]').attr('value',
            $('[name="form_class"]').attr('value')
        );
        formTitle.find('[name="form_id_placeholder"]').attr('value',
            $('[name="form_id"]').attr('value')
        );
    });

	/**
	 * single_line_text
	 */
	$('#single_line_text').click(function () {
		var liId = "edit_form_text" + uniqueId;

		line_text(liId, theForm, fieldProp, uniqueId, "edit_form_text");

		$('#'+ liId +' .edit_li').click(function () {
			secondTab.tab('show');
			$.get('/formgen/input', { name: "Edit Input Field", id: liId}).done(function(data) {
				fieldProp.html(data);
		    });
		});

		uniqueId++;
	});

	/**
	 * line_date
	 */
	$('#line_date').click(function () {
		var liId = "edit_form_date" + uniqueId;

        line_date(liId, theForm, fieldProp, uniqueId, "edit_form_date");

		$('#'+ liId +' .edit_li').click(function () {
			secondTab.tab('show');
			$.get('/formgen/date', { name: "Edit Date Field", id: liId}).done(function(data) {
				fieldProp.html(data);
		    });
		});

		uniqueId++;
	});

	/**
	 * line_number
	 */
	$('#line_number').click(function () {
		var liId = "edit_form_number" + uniqueId;

		line_number(liId, theForm, fieldProp, uniqueId, "edit_form_number");

		$('#'+ liId +' .edit_li').click(function () {
			secondTab.tab('show');
			$.get('/formgen/number', { name: "Edit Number Field", id: liId}).done(function(data) {
				fieldProp.html(data);
		    });
		});

		uniqueId++;
	});

	/**
	 * line_password
	 */
	$('#line_password').click(function () {
		var liId = "edit_form_password" + uniqueId;

        line_password(liId, theForm, fieldProp, uniqueId, "edit_form_password");

		$('#'+ liId +' .edit_li').click(function () {
			secondTab.tab('show');
			$.get('/formgen/password', { name: "Edit Password Field", id: liId}).done(function(data) {
				fieldProp.html(data);
		    });
		});

		uniqueId++;
	});

	/**
	 * line_password_verify
	 */
	$('#line_password_verify').click(function () {
		var liId = "edit_form_password_verify" + uniqueId;

        line_password_verify(liId, theForm, fieldProp, uniqueId, "edit_form_password_verify");

		$('#'+ liId +' .edit_li').click(function () {
			secondTab.tab('show');
			$.get('/formgen/passwordverify', { name: "Edit Password Verify Field", id: liId}).done(function(data) {
				fieldProp.html(data);
		    });
		});

		uniqueId++;
	});

	/**
	 * line_email
	 */
	$('#line_email').click(function () {
		var liId = "edit_form_email" + uniqueId;

        line_email(liId, theForm, fieldProp, uniqueId, "edit_form_email");

		$('#'+ liId +' .edit_li').click(function () {
			secondTab.tab('show');
			$.get('/formgen/email', { name: "Edit Email Field", id: liId}).done(function(data) {
				fieldProp.html(data);
		    });
		});

		uniqueId++;
	});

	/**
	 * line_paragraph
	 */
	$('#line_paragraph').click(function () {
		var liId = "edit_form_paragraph" + uniqueId;

		line_paragraph(liId, theForm, fieldProp, uniqueId, "edit_form_paragraph");

		$('#'+ liId +' .edit_li').click(function () {
			secondTab.tab('show');
			$.get('/formgen/paragraph', { name: "Edit Textarea Field", id: liId}).done(function(data) {
				fieldProp.html(data);
			});
		});

		uniqueId++;
	});

	/**
	 * line_checkbox
	 */
	$('#line_checkbox').click(function () {
		var liId = "edit_form_checkbox" + uniqueId;

		line_checkbox(liId, theForm, fieldProp, uniqueId, "edit_form_checkbox");

		$('#'+ liId +' .edit_li').click(function () {
            var lengthNr = $(this).parent('li').find('.checkbox').length;

			secondTab.tab('show');
			$.get('/formgen/checkbox', { name: "Edit Checkbox Field", id: liId, 'length': lengthNr}).done(function(data) {
				fieldProp.html(data);
		    });
		});

		uniqueId++;
	});

	/**
	 * line_radio
	 */
	$('#line_radio').click(function () {
		var liId = "edit_form_radio" + uniqueId;

		line_radio(liId, theForm, fieldProp, uniqueId, "edit_form_radio");

		$('#'+ liId +' .edit_li').click(function () {
            var lengthNr = $(this).parent('li').find('.radio').length;

			secondTab.tab('show');
			$.get('/formgen/radio', { name: "Edit Radio Field", id: liId, 'length': lengthNr}).done(function(data) {
				fieldProp.html(data);
		    });
		});

		uniqueId++;
	});

	/**
	 * line_dropdown
	 */
	$('#line_dropdown').click(function () {
		var liId = "edit_form_dropdown" + uniqueId;

		line_dropdown(liId, theForm, fieldProp, uniqueId, "edit_form_dropdown");

		$('#'+ liId +' .edit_li').click(function () {
            var lengthNr = $(this).parent('li').find('.dropdown').find('option').length;

			secondTab.tab('show');
			$.get('/formgen/dropdown', { name: "Edit Drop Down Field", id: liId, 'length': lengthNr}).done(function(data) {
				fieldProp.html(data);
			});
		});

		uniqueId++;
	});

    /**
     * line_upload
     */
    $('#line_upload').click(function () {
        var liId = "edit_form_text" + uniqueId;

        line_upload(liId, theForm, fieldProp, uniqueId, "edit_form_upload");

        $('#'+ liId +' .edit_li').click(function () {
            secondTab.tab('show');
            $.get('/formgen/upload', { name: "Edit Input Field", id: liId}).done(function(data) {
                fieldProp.html(data);
            });
        });

        uniqueId++;
    });

	/**
	 * generate the form
	 * convert form to json
	 */
	$('#generate_form_button').live("click", function(e){
		e.preventDefault();

        var allData = [];

		var li = $('#the_form li');

        var addFormProperties = formPropertiesJson($('.form_title_head'));
        allData.push({'form_properties' : addFormProperties});

		li.each(function(index, data) {
		    if($(this).hasClass('edit_form_text') === true) {
		        var addLineText = lineTextJson($(this));
                allData.push({'line_text' : addLineText});
		    }
            if($(this).hasClass('edit_form_date') === true) {
		        var addLineDate = lineDateJson($(this));
                allData.push({'line_date' : addLineDate});
		    }
            if($(this).hasClass('edit_form_paragraph') === true) {
		        var addParagraphText = lineParagraphJson($(this));
                allData.push({'line_paragraph' : addParagraphText});
		    }
            if($(this).hasClass('edit_form_number') === true) {
		        var addNumberText = lineNumberJson($(this));
                allData.push({'line_number' : addNumberText});
		    }
            if($(this).hasClass('edit_form_checkbox') === true) {
		        var addCheckboxText = lineCheckboxJson($(this));
                allData.push({'line_checkbox' : addCheckboxText});
		    }
            if($(this).hasClass('edit_form_radio') === true) {
		        var addRadioText = lineRadioJson($(this));
                allData.push({'line_radio' : addRadioText});
		    }
            if($(this).hasClass('edit_form_dropdown') === true) {
		        var addDropdownText = lineDropdownJson($(this));
                allData.push({'line_dropdown' : addDropdownText});
		    }
            if($(this).hasClass('edit_form_password') === true) {
		        var addPasswordText = linePasswordJson($(this));
                allData.push({'line_password' : addPasswordText});
		    }
            if($(this).hasClass('edit_form_password_verify') === true) {
		        var addPasswordVerifyText = linePasswordVerifyJson($(this));
                allData.push({'line_password_verify' : addPasswordVerifyText});
		    }
            if($(this).hasClass('edit_form_email') === true) {
		        var addEmailText = lineEmailJson($(this));
                allData.push({'line_email' : addEmailText});
		    }
            if($(this).hasClass('edit_form_upload') === true) {
		        var addUploadText = lineUploadJson($(this));
                allData.push({'line_upload' : addUploadText});
		    }
		});

        console.log(allData);
	});

	// maybe i'll do a plugin
	/*
	var defaults = {
			test : 'test'
	};

	var formElements = function(options){
		var config = $.extend({}, defaults, options);

		console.log(config.test);
	};
	*/

});