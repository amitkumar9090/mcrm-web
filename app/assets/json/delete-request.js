$(document).ready(function () {
    if($('#delete_request').length > 0) {
		$('#delete_request').DataTable({
			"bFilter": false, 
			"bInfo": false,
				"ordering": true,
				"autoWidth": true,
			"language": {
				search: ' ',
				sLengthMenu: '_MENU_',
				searchPlaceholder: "Search",
				info: "_START_ - _END_ of _TOTAL_ items",
				lengthMenu:     "Show _MENU_ entries",
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
                        "customer_name" : "Darlee Robertson",
                        "customer_image" : "/assets/img/profiles/avatar-19.jpg",
                        "customer_no" : "Facility Manager",
                        "created" : "25 Sep 2025, 12:12 pm",
                        "delete_request": "25 Sep 2025, 12:12 pm",
                        "reason": "No longer using service",
                        "status" : "0",
                        "Action" : ""
                    },
                    {
                        "id" : 2,
                        "si_no" : "",
                        "select" : "",
                        "customer_name" : "Sharon Roy",
                        "customer_image" : "/assets/img/profiles/avatar-20.jpg",
                        "customer_no" : "Installer",
                        "created" : "27 Sep 2025, 07:40 am",
                        "delete_request" : "27 Sep 2025, 07:40 am",
                        "reason": "Privacy concerns",
                        "status" : "1",
                        "Action" : ""
                    }
                
                    
                ],
            "columns": [
                { "render": function ( data, type, row ){
                return '<div class="form-check form-check-md"><input class="form-check-input" type="checkbox"></div>';
            }},
                { "render": function ( data, type, row ){
                    return '<div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>';
                }},
                { "render": function ( data, type, row ){
                    return '<h6 class="d-flex align-items-center fs-14 fw-medium mb-0"><a href="javascript:void(0);" class="avatar avatar-rounded me-2"><img src="'+row['customer_image']+'" alt="User Image"></a><a href="javascript:void(0);" class="d-flex flex-column">'+row['customer_name']+' <span class="text-body fs-13 fw-normal d-inline-block mt-1">'+row['customer_no']+' </span></a></h2>';
                }},
                { "data": "created" },
                { "data": "delete_request" },
                { "data": "reason" },
                { "render": function ( data, type, row ){
                if(row['status'] == "0") { var class_name = "bg-danger";var status_name ="Rejected" } else { var class_name = "bg-warning";var status_name ="Pending"}
                return '<span class="badge badge-pill badge-status '+class_name+'" >'+status_name+'</span>';
                }},
                { "render": function ( data, type, row ){
                    return '<div class="dropdown table-action"><a href="#" class="action-icon btn btn-xs shadow btn-icon btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false"><i class="ti ti-dots-vertical"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#approve_request"><i class="ti ti-check"></i> Approve</a><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#reject_request"><i class="ti ti-x"></i> Reject</a></div></div>';
                }}
            ]
        });
	}
});