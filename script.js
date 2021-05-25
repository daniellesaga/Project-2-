const listProfile = ["contact-item cf"];
const listElement = document.getElementById('contact-details');
const listPagination = document.getElementById('pagination');

let currentpage = 1;
let profiles_per_page = 10;


let start = profiles_per_page * page;
let end = start + profiles_per_page;
let paginatedItems = items.slice(start, end);

var page = document.querySelector(".page");
var pageHeader = document.querySelector(".page-header");
var contactList = document.querySelector(".contact-list");
var contact = document.querySelector(".contact-item");
var contactDetails = document.querySelector(".contact-details");


var currentpage = 1;
var numPages = 0;
var profilesPerPage = 10;
var index;

function showStudents (number) {
	for (var i = 0; i < profilesPerPage; i++) {
		index = number * profilesPerPage - profilesPerPage + i;
		eachContact[index].style.display = "block";
		
	} 
};
