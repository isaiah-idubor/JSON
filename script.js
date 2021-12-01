$(document).ready(function(){

	var tbArray;

	$.ajax({
		method:'Get',
		url:'https://reqres.in/api/users',
		success:function(response){
				tbArray = response.data
				buildTable(tbArray);
		}
	})

})


function buildTable(data){

	var table = document.querySelector('#myTable');

	for (var i = 0; i < data.length;  i++) {
		var row = `<tr> 
						<td>${data[i].first_name}</td>
						<td>${data[i].last_name}</td>
						<td>${data[i].email}</td>
					</tr>`
		table.innerHTML += row;
	}
}
