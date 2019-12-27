/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2013 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 *
 */

(function (document, $) {
	
	"use strict";
	
	$.fn.rearrangeFormLayout = function () {
		var tabs = $('.aem-assets-metadata-form-tab');
		tabs.each(function(index, value) {
			var $value = $(value);
			var children = $value.children();
			var colLength = children.length;

			switch (colLength) {
			case 1 : children.addClass('column-1');break;
			case 2 : children.addClass('column-2');break;
			case 3 : children.addClass('column-3');break;
			case 4 : children.addClass('column-4');break;
			case 5 : children.addClass('column-5');break;
			}
			
		});
		$('#aem-assets-metadataeditor-border').height($('.data-fields.active').height());

          var currentOrderable=$('#aem-assets-metadataeditor-formid').find('coral-select[data-availablefororderdropdown="thfAvailableForOrder"]').find('coral-select-item[selected]').val();
        console.log('Test THF overlay : '+ currentOrderable);

        if(currentOrderable==='on'){

                if(($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/veritasPieceCode"]').val()===' ') ||
                $('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/veritasPieceCode"]').val()===''){
				 console.log('Test THF overlay ,inside called function with value' + $('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/veritasPieceCode"]').val() );
			  $('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/veritasPieceCode"]').attr("aria-required", 'true').attr("invalid","");
			  
			  $('#aem-assets-metadataeditor-formid').find('coral-tab[id="coral-id-4"]').attr("invalid",'');
			  }

               if( ($('#aem-assets-metadataeditor-formid').find('coral-select[data-usergroupdropdown="thfUserGroup"]').find('coral-select-item[selected]').val()===' ') ||
			   ($('#aem-assets-metadataeditor-formid').find('coral-select[data-usergroupdropdown="thfUserGroup"]').find('coral-select-item[selected]').val()==='')){
			   $('#aem-assets-metadataeditor-formid').find('coral-tab[id="coral-id-4"]').attr("invalid",'');
                $('#aem-assets-metadataeditor-formid').find('coral-select[data-usergroupdropdown="thfUserGroup"]').attr("aria-required", 'true').attr("invalid",'');
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-usergroupdropdown="thfUserGroup"]').find('button[id="coral-id-191"]')
				 .css("border-color","#e14132");
				}else{
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-usergroupdropdown="thfUserGroup"]').find('button[id="coral-id-191"]').css("border-color","");
				}

        }

       // var title=$.("[name='./jcr:content/metadata/dc:title']").val();
          //var title=$('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/dc:title"]').val()
	   //$('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/jcr:title"]').attr("aria-required", "true")
          
             $('#aem-assets-metadataeditor-formid').change(availableOrderYesValidations);
             $('#aem-assets-metadataeditor-formid').find('coral-select[data-inventorydropdown="thfInventory"]').change(inventoryTypeValidations);
			 
			
			 $('#aem-assets-metadataeditor-formid').find('coral-select[data-colorsdropdown="thfColors"]').change(validateColors);
			 $('#aem-assets-metadataeditor-formid').find('coral-select[data-pagesizedropdown="thfPagesize"]').change(validatePageSize);
			 $('#aem-assets-metadataeditor-formid').find('coral-select[data-stockdropdown="thfStock"]').change(validateStock);
		     $('#aem-assets-metadataeditor-formid').find('coral-select[data-finishdropdown="thfFinish"]').change(validateFinish);
			 $('#aem-assets-metadataeditor-formid').find('coral-select[data-coatingdropdown="thfCoating"]').change(validateCoating);
			 $('#aem-assets-metadataeditor-formid').find('coral-select[data-bindingdropdown="thfBinding"]').change(validateBinding);
		     $('#aem-assets-metadataeditor-formid').find('coral-select[data-printmethoddropdown="thfPrintMethod"]').change(validatePrintMethod);
         function availableOrderYesValidations(){

              console.log('Test THF overlay ,inside called function');
		
            if($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/dc:availablefororder"]').val()==='on'){
			 
			if(($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/veritasPieceCode"]').val()===' ') ||
                $('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/veritasPieceCode"]').val()===''){
				 console.log('Test THF overlay ,inside called function with value' + $('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/veritasPieceCode"]').val() );
			  $('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/veritasPieceCode"]').attr("aria-required", 'true').attr("invalid","");
			  
			  $('#aem-assets-metadataeditor-formid').find('coral-tab[id="coral-id-4"]').attr("invalid",'');
			  }
               if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/inventoryType"]').val()===' ') ||
			   ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/inventoryType"]').val()==='')){
			   $('#aem-assets-metadataeditor-formid').find('coral-tab[id="coral-id-4"]').attr("invalid",'');
                $('#aem-assets-metadataeditor-formid').find('coral-select[data-inventorydropdown="thfInventory"]').attr("aria-required", 'true').attr("invalid",'');
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-inventorydropdown="thfInventory"]').find('button[id="coral-id-174"]')
				 .css("border-color","#e14132");
				}else{
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-inventorydropdown="thfInventory"]').find('button[id="coral-id-174"]')
				 .css("border-color","");
				}
				
				if(($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/formOwner"]').val()===' ') ||
                $('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/formOwner"]').val()===''){
			    $('#aem-assets-metadataeditor-formid').find('coral-select[data-formowner="thfFormOwner"]').attr("aria-required", 'true').attr("invalid",'');
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-formowner="thfFormOwner"]').find('button[id="coral-id-180"]')
				 .css("border-color","#e14132");
				
				$('#aem-assets-metadataeditor-formid').find('coral-tab[id="coral-id-4"]').attr("invalid",'');
			  }else{
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-formowner="thfFormOwner"]').find('button[id="coral-id-180"]').css("border-color","");
				}
			  
			if( (typeof (($('#aem-assets-metadataeditor-formid').find('coral-select[data-viewindropdown="thfViewIn"]').find('coral-select-item[selected]').val()))==="undefined")){
			    //console.log('inside condition'+$('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/viewIn"]').val());
				$('#aem-assets-metadataeditor-formid').find('coral-tab[id="coral-id-4"]').attr("invalid",'');
                $('#aem-assets-metadataeditor-formid').find('coral-select[data-viewindropdown="thfViewIn"]').attr("aria-required", 'true').attr("aria-invalid", 'true').attr("invalid",'')
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-viewindropdown="thfViewIn"]').find('button[id="coral-id-189"]').css("border-color","#e14132");
				}else{
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-viewindropdown="thfViewIn"]').find('button[id="coral-id-189"]').css("border-color","");
				}
				
				
				 if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/userGroup"]').val()===' ') ||
			   ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/userGroup"]').val()==='')){
			   $('#aem-assets-metadataeditor-formid').find('coral-tab[id="coral-id-4"]').attr("invalid",'');
                $('#aem-assets-metadataeditor-formid').find('coral-select[data-usergroupdropdown="thfUserGroup"]').attr("aria-required", 'true').attr("invalid",'');
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-usergroupdropdown="thfUserGroup"]').find('button[id="coral-id-191"]')
				 .css("border-color","#e14132");
				}else{
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-usergroupdropdown="thfUserGroup"]').find('button[id="coral-id-191"]').css("border-color","");
				}
	 
         //console.log($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/dc:availablefororder"]').val());
		 //console.log($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/inventoryType"]').val());
		 // console.log($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/viewIn"]').val());
		 // console.log('user group'+$('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/userGroup"]').val());
            }else if($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/dc:availablefororder"]').val()==='off') {
      $('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/veritasPieceCode"]')
	  .attr("aria-required", 'false')
      .attr("aria-invalid", 'false')
      .removeAttr("invalid");
	  
	  $('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/formOwner"]')
	  .attr("aria-required", 'false')
      .attr("aria-invalid", 'false')
      .removeAttr("invalid");
	  
	  
       $('#aem-assets-metadataeditor-formid').find('coral-icon[icon="alert"]').removeClass(".coral-Icon coral-Form-fielderror coral-Icon--sizeS coral-Icon--alert");
	   
	  $('#aem-assets-metadataeditor-formid').find('coral-select[data-inventorydropdown="thfInventory"]').attr("aria-required", 'false').removeAttr("invalid");
	  $('#aem-assets-metadataeditor-formid').find('coral-select[data-viewindropdown="thfViewIn"]').attr("aria-required", 'false').removeAttr("invalid");
	  $('#aem-assets-metadataeditor-formid').find('coral-select[data-usergroupdropdown="thfUserGroup"]').attr("aria-required", 'false').removeAttr("invalid");
	   $('#aem-assets-metadataeditor-formid').find('coral-select[data-formowner="thfFormOwner"]').attr("aria-required", 'false').removeAttr("invalid");
	  $('#aem-assets-metadataeditor-formid').find('coral-tab[id="coral-id-4"]').removeAttr("invalid");
	  
	  $('#aem-assets-metadataeditor-formid').find('coral-select[data-inventorydropdown="thfInventory"]').find('button[id="coral-id-174"]').css("border-color","");
	  $('#aem-assets-metadataeditor-formid').find('coral-select[data-viewindropdown="thfViewIn"]').find('button[aria-owns="coral-id-190"]').css("border-color","");
	  $('#aem-assets-metadataeditor-formid').find('coral-select[data-usergroupdropdown="thfUserGroup"]').find('button[id="coral-id-191"]').css("border-color","");
	   $('#aem-assets-metadataeditor-formid').find('coral-select[data-formowner="thfFormOwner"]').find('button[id="coral-id-180"]').css("border-color","");
     //console.log($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/dc:availablefororder"]').val());
            }
			
			  if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/inventoryType"]').val().indexOf("POD") > 0)){
			    if(($('#aem-assets-metadataeditor-formid').find('coral-numberinput[name="./jcr:content/metadata/OfPages"]').val()==='')
			||($('#aem-assets-metadataeditor-formid').find('coral-numberinput[name="./jcr:content/metadata/OfPages"]').val()===' ')){
         $('#aem-assets-metadataeditor-formid').find('coral-numberinput[name="./jcr:content/metadata/OfPages"]').attr("aria-required", 'true');
		 $('#aem-assets-metadataeditor-formid').find('coral-numberinput[name="./jcr:content/metadata/OfPages"]').find('button[aria-controls="coral-id-219"]').css("border-color","#e14132");
			}else{
				$('#aem-assets-metadataeditor-formid').find('coral-numberinput[name="./jcr:content/metadata/OfPages"]').attr("aria-required", 'false').removeAttr("invalid");
					$('#aem-assets-metadataeditor-formid').find('coral-numberinput[name="./jcr:content/metadata/OfPages"]').find('button[aria-controls="coral-id-219"]').css("border-color","");
				}		
		}else{
				$('#aem-assets-metadataeditor-formid').find('coral-numberinput[name="./jcr:content/metadata/OfPages"]').attr("aria-required", 'false').removeAttr("invalid");
			    $('#aem-assets-metadataeditor-formid').find('coral-numberinput[name="./jcr:content/metadata/OfPages"]').find('button[aria-controls="coral-id-219"]').css("border-color","");
			}	
			
			
}

		function inventoryTypeValidations(){
			   //console.log('inside change'+$('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/inventoryType"]').val());
			   if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/inventoryType"]').val().indexOf("POD") > 0)){
				$('#aem-assets-metadataeditor-formid').find('coral-tab[id="coral-id-4"]').attr("invalid",'');
	      if(($('#aem-assets-metadataeditor-formid').find('coral-numberinput[name="./jcr:content/metadata/OfPages"]').val()==='')
			||($('#aem-assets-metadataeditor-formid').find('coral-numberinput[name="./jcr:content/metadata/OfPages"]').val()===' ')){
		
        $('#aem-assets-metadataeditor-formid').find('coral-numberinput[name="./jcr:content/metadata/OfPages"]').attr("aria-required", 'true').attr("invalid",'');
			}
			
	    if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/colors"]').val()===' ') ||
	($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/colors"]').val()==='')){
	 
        $('#aem-assets-metadataeditor-formid').find('coral-select[data-colorsdropdown="thfColors"]').attr("aria-required", 'true').attr("invalid",'');
		$('#aem-assets-metadataeditor-formid').find('coral-select[data-colorsdropdown="thfColors"]').find('button[id="coral-id-209"]').css("border-color","#e14132");
				}else{
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-colorsdropdown="thfColors"]').find('button[id="coral-id-209"]').css("border-color","");
				}
				
if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/pageSize"]').val()===' ') ||
	($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/pageSize"]').val()==='')){
	  
        $('#aem-assets-metadataeditor-formid').find('coral-select[data-pagesizedropdown="thfPagesize"]').attr("aria-required", 'true').attr("invalid",'');
				$('#aem-assets-metadataeditor-formid').find('coral-select[data-pagesizedropdown="thfPagesize"]').find('button[id="coral-id-211"]').css("border-color","#e14132");
				}else{
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-pagesizedropdown="thfPagesize"]').find('button[id="coral-id-211"]').css("border-color","");
				}
				
if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/stock"]').val()===' ') ||
	($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/stock"]').val()==='')){
		
        $('#aem-assets-metadataeditor-formid').find('coral-select[data-stockdropdown="thfStock"]').attr("aria-required", 'true').attr("invalid",'');
				$('#aem-assets-metadataeditor-formid').find('coral-select[data-stockdropdown="thfStock"]').find('button[id="coral-id-213"]').css("border-color","#e14132");
				}else{
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-stockdropdown="thfStock"]').find('button[id="coral-id-213"]').css("border-color","");
				}
				
if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/finish"]').val()===' ') ||
	($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/finish"]').val()==='')){
		
        $('#aem-assets-metadataeditor-formid').find('coral-select[data-finishdropdown="thfFinish"]').attr("aria-required", 'true').attr("invalid",'');
				$('#aem-assets-metadataeditor-formid').find('coral-select[data-finishdropdown="thfFinish"]').find('button[id="coral-id-215"]').css("border-color","#e14132");
				}else{
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-finishdropdown="thfFinish"]').find('button[id="coral-id-215"]').css("border-color","");
				}
				
if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/coating"]').val()===' ') ||
	($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/coating"]').val()==='')){
		
        $('#aem-assets-metadataeditor-formid').find('coral-select[data-coatingdropdown="thfCoating"]').attr("aria-required", 'true').attr("invalid",'');
				$('#aem-assets-metadataeditor-formid').find('coral-select[data-coatingdropdown="thfCoating"]').find('button[id="coral-id-217"]').css("border-color","#e14132");
				}else{
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-coatingdropdown="thfCoating"]').find('button[id="coral-id-217"]').css("border-color","");
				}

if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/binding"]').val()===' ') ||
    ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/binding"]').val()==='')){
	
        $('#aem-assets-metadataeditor-formid').find('coral-select[data-bindingdropdown="thfBinding"]').attr("aria-required", 'true').attr("invalid",'');
				$('#aem-assets-metadataeditor-formid').find('coral-select[data-bindingdropdown="thfBinding"]').find('button[id="coral-id-220"]').css("border-color","#e14132");
				}else{
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-bindingdropdown="thfBinding"]').find('button[id="coral-id-220"]').css("border-color","");
				}

if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/printMethod"]').val()===' ') ||
	($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/printMethod"]').val()==='')){
       
        $('#aem-assets-metadataeditor-formid').find('coral-select[data-printmethoddropdown="thfPrintMethod"]').attr("aria-required", 'true').attr("invalid",'');
				$('#aem-assets-metadataeditor-formid').find('coral-select[data-printmethoddropdown="thfPrintMethod"]').find('button[id="coral-id-222"]').css("border-color","#e14132");
				}else{
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-printmethoddropdown="thfPrintMethod"]').find('button[id="coral-id-222"]').css("border-color","");
				}
			
			$('#aem-assets-metadataeditor-formid').find('coral-tab[id="coral-id-4"]').attr("invalid",'');
			//console.log('ofPages : '+$('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/OfPages"]').val());
				}else{
$('#aem-assets-metadataeditor-formid').find('coral-numberinput[name="./jcr:content/metadata/OfPages"]').attr("aria-required", 'false').removeAttr("invalid");
$('#aem-assets-metadataeditor-formid').find('coral-select[data-colorsdropdown="thfColors"]').attr("aria-required", 'false').removeAttr("invalid");
$('#aem-assets-metadataeditor-formid').find('coral-select[data-pagesizedropdown="thfPagesize"]').attr("aria-required", 'false').removeAttr("invalid");
$('#aem-assets-metadataeditor-formid').find('coral-select[data-stockdropdown="thfStock"]').attr("aria-required", 'false').removeAttr("invalid");
$('#aem-assets-metadataeditor-formid').find('coral-select[data-finishdropdown="thfFinish"]').attr("aria-required", 'false').removeAttr("invalid");
$('#aem-assets-metadataeditor-formid').find('coral-select[data-coatingdropdown="thfCoating"]').attr("aria-required", 'false').removeAttr("invalid");
$('#aem-assets-metadataeditor-formid').find('coral-select[data-bindingdropdown="thfBinding"]').attr("aria-required", 'false').removeAttr("invalid");
$('#aem-assets-metadataeditor-formid').find('coral-select[data-printmethoddropdown="thfPrintMethod"]').attr("aria-required", 'false').removeAttr("invalid");
$('#aem-assets-metadataeditor-formid').find('coral-tab[id="coral-id-4"]').removeAttr("invalid");

 $('#aem-assets-metadataeditor-formid').find('coral-select[data-colorsdropdown="thfColors"]').find('button[id="coral-id-209"]').css("border-color","");
 $('#aem-assets-metadataeditor-formid').find('coral-select[data-pagesizedropdown="thfPagesize"]').find('button[id="coral-id-211"]').css("border-color","");
 $('#aem-assets-metadataeditor-formid').find('coral-select[data-stockdropdown="thfStock"]').find('button[id="coral-id-213"]').css("border-color","");
 $('#aem-assets-metadataeditor-formid').find('coral-select[data-finishdropdown="thfFinish"]').find('button[id="coral-id-215"]').css("border-color","");
 $('#aem-assets-metadataeditor-formid').find('coral-select[data-coatingdropdown="thfCoating"]').find('button[id="coral-id-217"]').css("border-color","");
 $('#aem-assets-metadataeditor-formid').find('coral-select[data-bindingdropdown="thfBinding"]').find('button[id="coral-id-220"]').css("border-color","");
 $('#aem-assets-metadataeditor-formid').find('coral-select[data-printmethoddropdown="thfPrintMethod"]').find('button[id="coral-id-222"]').css("border-color","");
				}
				}

	function validatePrintMethod(){
	    if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/inventoryType"]').val().indexOf("POD") > 0)){
			  if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/printMethod"]').val()===' ') ||
	              ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/printMethod"]').val()==='')){
       
                $('#aem-assets-metadataeditor-formid').find('coral-select[data-printmethoddropdown="thfPrintMethod"]').attr("aria-required", 'true').attr("invalid",'');
				$('#aem-assets-metadataeditor-formid').find('coral-select[data-printmethoddropdown="thfPrintMethod"]').find('button[id="coral-id-222"]').css("border-color","#e14132");
				}else{
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-printmethoddropdown="thfPrintMethod"]').find('button[id="coral-id-222"]').css("border-color","");
				}
				}
				}
				
	function validateBinding(){
	    if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/inventoryType"]').val().indexOf("POD") > 0)){
			if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/binding"]').val()===' ') ||
    ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/binding"]').val()==='')){
	
        $('#aem-assets-metadataeditor-formid').find('coral-select[data-bindingdropdown="thfBinding"]').attr("aria-required", 'true').attr("invalid",'');
				$('#aem-assets-metadataeditor-formid').find('coral-select[data-bindingdropdown="thfBinding"]').find('button[id="coral-id-220"]').css("border-color","#e14132");
				}else{
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-bindingdropdown="thfBinding"]').find('button[id="coral-id-220"]').css("border-color","");
				}
				}
			}
				
	 function validateCoating(){
	    if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/inventoryType"]').val().indexOf("POD") > 0)){
		if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/coating"]').val()===' ') ||
	($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/coating"]').val()==='')){
		//console.log('Coating'+$('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/coating"]').val());
        $('#aem-assets-metadataeditor-formid').find('coral-select[data-coatingdropdown="thfCoating"]').attr("aria-required", 'true').attr("invalid",'');
				$('#aem-assets-metadataeditor-formid').find('coral-select[data-coatingdropdown="thfCoating"]').find('button[id="coral-id-217"]').css("border-color","#e14132");
				}else{
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-coatingdropdown="thfCoating"]').find('button[id="coral-id-217"]').css("border-color","");
				}
				}
			}
				
	function validateFinish(){
	    if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/inventoryType"]').val().indexOf("POD") > 0)){
			 if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/finish"]').val()===' ') ||
	($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/finish"]').val()==='')){
		
        $('#aem-assets-metadataeditor-formid').find('coral-select[data-finishdropdown="thfFinish"]').attr("aria-required", 'true').attr("invalid",'');
				$('#aem-assets-metadataeditor-formid').find('coral-select[data-finishdropdown="thfFinish"]').find('button[id="coral-id-215"]').css("border-color","#e14132");
				}else{
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-finishdropdown="thfFinish"]').find('button[id="coral-id-215"]').css("border-color","");
				}
				}
		}
				
	function validateStock(){
	    if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/inventoryType"]').val().indexOf("POD") > 0)){
			 if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/stock"]').val()===' ') ||
	($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/stock"]').val()==='')){
		
        $('#aem-assets-metadataeditor-formid').find('coral-select[data-stockdropdown="thfStock"]').attr("aria-required", 'true').attr("invalid",'');
				$('#aem-assets-metadataeditor-formid').find('coral-select[data-stockdropdown="thfStock"]').find('button[id="coral-id-213"]').css("border-color","#e14132");
				}else{
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-stockdropdown="thfStock"]').find('button[id="coral-id-213"]').css("border-color","");
				}
				}
		}
				
	function validatePageSize(){
	    if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/inventoryType"]').val().indexOf("POD") > 0)){
			 if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/pageSize"]').val()===' ') ||
	($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/pageSize"]').val()==='')){
	  
        $('#aem-assets-metadataeditor-formid').find('coral-select[data-pagesizedropdown="thfPagesize"]').attr("aria-required", 'true').attr("invalid",'');
				$('#aem-assets-metadataeditor-formid').find('coral-select[data-pagesizedropdown="thfPagesize"]').find('button[id="coral-id-211"]').css("border-color","#e14132");
				}else{
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-pagesizedropdown="thfPagesize"]').find('button[id="coral-id-211"]').css("border-color","");
				}
				}
		}
				
				
	function validateColors(){
	    if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/inventoryType"]').val().indexOf("POD") > 0)){
			    if( ($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/colors"]').val()===' ') ||
	($('#aem-assets-metadataeditor-formid').find('input[name="./jcr:content/metadata/colors"]').val()==='')){
        $('#aem-assets-metadataeditor-formid').find('coral-select[data-colorsdropdown="thfColors"]').attr("aria-required", 'true').attr("invalid",'');
		$('#aem-assets-metadataeditor-formid').find('coral-select[data-colorsdropdown="thfColors"]').find('button[id="coral-id-209"]').css("border-color","#e14132");
				}else{
				 $('#aem-assets-metadataeditor-formid').find('coral-select[data-colorsdropdown="thfColors"]').find('button[id="coral-id-209"]').css("border-color","");
				}
				}
		}
	};

})(document, Granite.$);