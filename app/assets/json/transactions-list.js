$(document).ready(function () {

    if($('#transactions_list').length > 0) {
		$('#transactions_list').DataTable({
				"bFilter": false, 
				"bInfo": false,
					"ordering": true,
				"autoWidth": true,
				"language": {
					search: ' ',
					sLengthMenu: '_MENU_',
					searchPlaceholder: "Search",
					info: "_START_ - _END_ of _TOTAL_ items",
					"lengthMenu":     "Show _MENU_ entries",
					paginate: {
					next: '<i class="ti ti-chevron-right"></i> ',
					previous: '<i class="ti ti-chevron-left"></i> '
				},
					},
				initComplete: (settings, json)=>{
					$('.dataTables_paginate').appendTo('.datatable-paginate');
					$('.dataTables_length').appendTo('.datatable-length');
				},  
				"data":[
					{
						"id" : 1,
						"si_no" : "",
						"select" : "",
						"type" : "Wallet Topup",
						"amount" : "+$650",
						"date": "25 Sep 2025, 01:22 PM",
						"payment_type":"Paypal",
						"status": "1"
					},
					{
						"id" : 2,
						"si_no" : "",
						"select" : "",
						"type" : "Purchase",
						"amount" : "-350",
						"date": "27 Sep 2025, 04:18 PM",
						"payment_type":"Cash",
						"status": "0"
					},
					{
						"id" : 3,
						"si_no" : "",
						"select" : "",
						"type" : "Refund",
						"amount" : "+$100",
						"date": "29 Sep 2025, 10:08 AM",
						"payment_type":"Paypal",
						"status": "1"
					}
					
				],
			"columns": [
				{ "render": function ( data, type, row ){
					return '<div class="form-check form-check-md"><input class="form-check-input" type="checkbox"></div>';
				}},
				{ "render": function ( data, type, row ){
					return '<div class="set-star rating-select filled"><i class="ti ti-star-filled fs-16"></i></div>';
				}},
				{ "data": "type" },
				{ "data": "amount" },
				{ "data": "date" },
				{ "data": "payment_type" },
				{ "render": function ( data, type, row ){
					if(row['status'] == "0") { var class_name = "bg-success";var status_name ="Completed" } if(row['status'] == "1") { var class_name = "bg-success";var status_name ="Completed" } else { var class_name = "bg-danger";var status_name ="Cancel"}
					return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
				}},
			]
		});
	}

});