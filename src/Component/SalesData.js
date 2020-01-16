import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

//import Dropdown from './Dropdown';





class SalesData extends Component{


	constructor(props){
		super(props);
		
		this.state= {
			
			chartData: {},
			

		}


	}




componentDidMount() {
		const uri='http://localhost:5000/salesData';
		//console.log(uri)

    	fetch(uri,{
        method: 'GET',
        })
    	.then(response =>  response.json())
    	.then(resData => {

    	console.log(resData);

        this.setState({
         chartData:{
				labels: ["9am", "10am", "11am", "12am", "1pm", "2pm", "3pm"],
				datasets:[
							{
								label:'store1',
								backgroundColor: "rgba(225, 204,230, .3)",
          						borderColor: "rgb(205, 130, 158)",
								data: [65, 59, 80, 81, 56, 55, 40]
								
								

							},
							{
								label:'store2',
								backgroundColor: "rgba(184, 185, 210, .3)",
          						borderColor: "rgb(35, 26, 136)",
								data: [28, 48, 40, 19, 86, 27, 90]
								

							},
							{
								label:'store3',
								backgroundColor: "rgba(255, 255, 0, .3)",
          						borderColor: "rgb(255, 255, 0)",
								data: [21, 12, 10, 59, 96, 47, 90]
								

							}
				          ]

			}});
      })
  	}


	render(){
		
		return (
			
			<div  >
			<Line 
				 data={this.state.chartData}
				 options={{
						 	legend:{
						 		labels: {
							                fontColor: "black",
							                
							            }
						 	},
						 	scales: {
						            yAxes: [{
						                ticks: {
						                    fontColor: "black",
						                    beginAtZero: true
						                }
						            }],
						            xAxes: [{
						                ticks: {
						                    fontColor: "black",
						                    beginAtZero: true
						                }
						            }]
		        				}
						 
						 }
					}
					  
			/>
				
			 </div>
			)
	}
}

export default SalesData;
