function fetchData(){
	fetch("https://thronesapi.com/api/v2/Characters")
	.then(response => {
		console.log(response);
		if(!response.ok){
			throw Error("Error");
		}
		return response.json();
	})
	.then(data => {
		console.log(data);

			let table = document.getElementById('myTable');		
					if(window.innerWidth  > 875)
					{
						for (let i = 0; i < data.length; i=i+4)
						{
							col = `<td><img src=${data[i].imageUrl} width="200" height="200" alt=""><br>
											<b>${data[i].fullName}</b><br>
											${data[i].title}</td>`;
							col1 = `<td><img src=${data[i+1].imageUrl} width="200" height="200" alt=""><br>
											<b>${data[i+1].fullName}</b><br>
											${data[i+1].title}</td>`
							col2 = `<td><img src=${data[i+2].imageUrl} width="200" height="200" alt=""><br>
											<b>${data[i+2].fullName}</b><br>
											${data[i+2].title}</td>`
							col3 = `<td><img src=${data[i+3].imageUrl} width="200" height="200" alt=""><br>
											<b>${data[i+3].fullName}</b><br>
											${data[i+3].title}</td>`

						table.innerHTML = table.innerHTML + 	col 	+ 	col1 	+ 	col2 	+ 	col3 ;	
						}
					}
					else if(window.innerWidth  > 480 && window.innerWidth  <= 875 )
					{
						for (let i = 0; i < data.length; i=i+1)
						{
							col = `<td><img src=${data[i].imageUrl} width="200" height="200" alt=""><br>
											<b>${data[i].fullName}</b><br>
											${data[i].title}</td>`;
							col1 = `<td><img src=${data[i+1].imageUrl} width="200" height="200" alt=""><br>
											<b>${data[i+1].fullName}</b><br>
											${data[i+1].title}</td>`
							table.innerHTML = table.innerHTML + col + col1;
						}
					}
					else 
					{
						for (let i = 0; i < data.length; i=i+1)
						{
							col = `<td><img src=${data[i].imageUrl} width="200" height="200" alt=""><br><b>${data[i].fullName}</b><br>${data[i].title}</td>`;
							table.innerHTML = table.innerHTML + col;
						}
					}
	})
	.catch(error => {
		console.log(error);
	});
	}

fetchData();
