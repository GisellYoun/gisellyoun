// JavaScript Document

$('.tab').click(function(){ $('.tabs-wrap').hide(); //Hide all tab content 
												 var activeTab = $(this).find('a').attr('href'); $(activeTab).show(); if($(this).not('.current')) { $('.tab').removeClass('current'); $(this).addClass('current'); } return false; });


$(function(){ $(".nav li a").click(function(e){ e.preventDefault(); //To prevent the default anchor tag behaviour 
		var url = this.href; $(".main").load(url); }); });
