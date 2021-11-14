let backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

let borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

// URL to Game of Thrones API to fetch all characters
//let url = 'https://thronesapi.com/api/v2/Characters';

let Baratheon=0; 
let Bolton = 0;
let Greyjoy = 0;
let Lannister = 0;
let Lorathi = 0;
let Mormont =0;
let None = 0;
let stark = 0;
let Targaryen =0;
let Tyrell = 0;


let renderChart = () => {
	
		fetch("https://thronesapi.com/api/v2/Characters")
	.then(response => {
		console.log(response);
		if(!response.ok){
			throw Error("Error");
		}
		return response.json();
	})
	.then(data => {
	//	console.log(data);
		
		for(let i =0;i<data.length;i++){
		//	console.log(i);
		//	console.log(data[i].family);
			if(data[i].family == "House Baratheon"  || data[i].family == "House Lanister"  || data[i].family == "Baratheon"  )
			{
				Baratheon++;
			}
			else if (data[i].family == "Bolton" )
			{
				Bolton++;
			}
			else if (data[i].family == "House Greyjoy"  || data[i].family == "Greyjoy" )
			{
				Greyjoy++;
			}
			else if (data[i].family == "House Lannister"  || data[i].family == "House Lanister"  || data[i].family == "Lannister" )
			{
				Lannister++;
			}
			else if (data[i].family == "Lorathi"  || data[i].family == "Lorath" )
			{
				Lorathi++;
			}
			else if (data[i].family == "Mormont" )
			{
				Mormont++;
			}
			else if (data[i].family == "House Stark"  || data[i].family == "Stark" )
			{
				stark++;
			}
			else if (data[i].family == "House Targaryen"  || data[i].family == "Targaryan" )
			{
				Targaryen++;
			}
			else if (data[i].family == "House Tyrell"  || data[i].family == "Tyrell" )
			{
				Tyrell++;
			}
			else
			{
				None++;
			}	
		//	console.log(Tyrell);
	 	}  

  		// let num1 = Baratheon  + Bolton  + Greyjoy  + Lannister  + Lorathi  + Mormont + stark + Targaryen + Tyrell  + None;
		//	console.log(num1);
			
			  let donutChart = document.getElementById('donut-chart');

  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: ['Baratheon','Bolton','Greyjoy','Lannister','Lorathi','Mormont','stark','Targaryen','Tyrell','None'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [Baratheon,Bolton,Greyjoy,Lannister,Lorathi,Mormont,stark,Targaryen,Tyrell,None],
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
			
	})
	.catch(error => {
		console.log(error);
	});
	
	

};

renderChart();