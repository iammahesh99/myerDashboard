import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import PropTypes from 'prop-types';
import ReactSimpleCarousel from "react-plain-carousel";







class Soh extends Component{


	constructor(props){
		super(props);
		
		this.state= {
			
			chartData: {},
			data1:props.data,
			storeName:props.store
			

		}
		this.handleChange = this.handleChange.bind(this);


	}
	static defaultProps = {
	    visuals: ['store1','Store2', 'Store3']
	  }

 handleChange(event) {
    
    
  }



componentDidMount() {
		const uri='https://myerdashboardserver.herokuapp.com/tablestructure';
		//console.log(uri)

    	fetch(uri,{
        method: 'GET',
        })
    	.then(response =>  response.json())
    	.then(resData => {

    	console.log(resData);

        this.setState({
         chartData:{
				labels: ["lifestyle","fruits","meat","dairy"],
				datasets:[
							{
								label:'SOH',
								backgroundColor: [
										            "rgba(255, 134,159,0.8)",
										            "rgba(98,  182, 239,0.8)",
										            "rgba(255, 218, 128,0.8)",
										            "rgba(113, 205, 205,0.8)"
										          ],
          						borderColor: "rgb(205, 130, 158)",
								data: this.state.data1
								
								

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
			
			<div style={{height:'100%'}}>
			<label style={{textAlign:'center',marginLeft:'100px',fontWeight: 'bold'}}>Current SOH of {this.state.storeName}</label><br/>
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
Soh.propTypes = {
  visualChange: PropTypes.func,
  visuals: PropTypes.array,
  value: PropTypes.string
};

export default Soh;
