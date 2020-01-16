import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import PropTypes from 'prop-types';

//import Dropdown from './Dropdown';





class ComparisionChart extends Component{


	constructor(props){
		super(props);
		
		this.state= {
			
			chartData: {},
			

		}
		this.handleChange = this.handleChange.bind(this);


	}
	static defaultProps = {
	    visuals: ['store1','Store2', 'Store3']
	  }

 handleChange(event) {
    
    
  }



componentDidMount() {
		const uri='https://myerdashboardserver.herokuapp.com/salesData';
		//console.log(uri)

    	fetch(uri,{
        method: 'GET',
        })
    	.then(response =>  response.json())
    	.then(resData => {

    	console.log(resData);

        this.setState({
         chartData:{
				labels: ["Dept1","Dept2","Dept3","Dept4"],
				datasets:[
							{
								label:'This Year',
								backgroundColor: [
										            "rgba(255, 134,159,0.6)",
										            "rgba(98,  182, 239,0.6)",
										            "rgba(255, 218, 128,0.6)",
										            "rgba(113, 205, 205,0.6)"
										          ],
          						borderColor: "rgb(205, 130, 158)",
								data: [65, 59, 80, 81,]
								
								

							},
							{
								label:'Last Year',
								backgroundColor: [
										            "rgba(255, 134,159,0.6)",
										            "rgba(98,  182, 239,0.6)",
										            "rgba(255, 218, 128,0.6)",
										            "rgba(113, 205, 205,0.6)"
										          ],
          						borderColor: "rgb(205, 130, 158)",
								data: [85, 39, 60, 101,]
								
								

							},
							
				          ]

			}});
      })
  	}


	render(){
				let visualOptions = this.props.visuals.map(visual => {
		      return <option key={visual} value={visual}>{visual}</option>
		    });
		
		return (
			
			<div>
			 <label>Select Store:  </label>
		          <select id="soflow" ref="visual" value={this.props.value} onChange={this.handleChange}>
		            {visualOptions}
		          </select>

				<Bar 
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
ComparisionChart.propTypes = {
  visualChange: PropTypes.func,
  visuals: PropTypes.array,
  value: PropTypes.string
};

export default ComparisionChart;
