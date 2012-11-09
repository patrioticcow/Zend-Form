$(document).ready(function() {
	
	var uniqueId = 1;
	var theForm = $('#the_form');
	var secondTab = $('#add_form_element li:eq(1) a');
	var fieldProp = $('#field_properties');
	
	$('.delete_li').live("click", function () {
		$(this).parent().remove();
	});
	
	$('#add_form_element a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	
	/**
	 * single_line_text
	 */
	$('#single_line_text').click(function (e) {
		
		var liId = "edit_form_text" + uniqueId;
		
		line_text(liId, theForm, fieldProp, uniqueId, "edit_form_text");
		
		$('#'+ liId +' .edit_li').click(function (e) {
			secondTab.tab('show');
			$.get('/form/input', { name: "Edit Input Field", id: liId}).done(function(data) {
				fieldProp.html(data);
		    });
		});
		
		uniqueId++;
	});
	
	/**
	 * line_number
	 */
	$('#line_number').click(function (e) {
		var liId = "edit_form_number" + uniqueId;
		
		line_number(liId, theForm, fieldProp, uniqueId, "edit_form_number");
		
		$('#'+ liId +' .edit_li').click(function (e) {
			secondTab.tab('show');
			$.get('/form/number', { name: "Edit Number Field", id: liId}).done(function(data) {
				fieldProp.html(data);
		    });
		});
		
		uniqueId++;
	});
	
	/**
	 * line_paragraph
	 */
	$('#line_paragraph').click(function (e) {
		
		var liId = "edit_form_paragraph" + uniqueId;
		
		line_paragraph(liId, theForm, fieldProp, uniqueId, "edit_form_paragraph");
		
		$('#'+ liId +' .edit_li').click(function (e) {
			secondTab.tab('show');
			$.get('/form/paragraph', { name: "Edit Textarea Field", id: liId}).done(function(data) {
				fieldProp.html(data);
			});
		});
		
		uniqueId++;
	});
	
	/**
	 * line_checkbox
	 */
	$('#line_checkbox').click(function (e) {
		
		var liId = "edit_form_checkbox" + uniqueId;
		
		line_checkbox(liId, theForm, fieldProp, uniqueId, "edit_form_checkbox");
		
		$('#'+ liId +' .edit_li').click(function (e) {
			secondTab.tab('show');
			$.get('/form/checkbox', { name: "Edit Checkbox Field", id: liId}).done(function(data) {
				fieldProp.html(data);
		    });
		});
		
		uniqueId++;
	});
	
	/**
	 * line_radio
	 */
	$('#line_radio').click(function (e) {
		
		var liId = "edit_form_radio" + uniqueId;
		
		line_radio(liId, theForm, fieldProp, uniqueId, "edit_form_radio");
		
		$('#'+ liId +' .edit_li').click(function (e) {
			secondTab.tab('show');
			$.get('/form/radio', { name: "Edit Radio Field", id: liId}).done(function(data) {
				fieldProp.html(data);
		    });
		});
		
		uniqueId++;
	});
	
	/**
	 * line_dropdown
	 */
	$('#line_dropdown').click(function (e) {
		
		var liId = "edit_form_dropdown" + uniqueId;
		
		line_dropdown(liId, theForm, fieldProp, uniqueId, "edit_form_dropdown");
		
		$('#'+ liId +' .edit_li').click(function (e) {
			secondTab.tab('show');
			$.get('/form/dropdown', { name: "Edit Drop Down Field", id: liId}).done(function(data) {
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

		var li = $('#the_form li');
		
		li.each(function(index, data) {
		    if($(this).hasClass('edit_form_text') === true) {
		        var addLineText = lineTextJson($(this));
		        console.log(addLineText);
		    }
		});
	});
	
	function trim(str){
	    return str.split(' ').join();
	}
	
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