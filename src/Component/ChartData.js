import React,{Component} from "react"
import SalesData from '../Component/SalesData'
import Soh from '../Component/Soh'
import ComparisionChart from '../Component/ComparisionChart'

class ChartData extends Component{

	constructor(props){
		super(props);
		
		this.state= {
			
			chartName:props.chartName
			

		}


	}

	showChart=()=>{
		if(this.state.chartName=='salesData')
		{
			return < SalesData />
		}
		else if(this.state.chartName=='soh')
		{
			return < Soh />
		}else if(this.state.chartName=='compareChart')
		{
			return < ComparisionChart />
		}


	}


	render(){
		return(

			<div >
			{
				this.showChart()
			}

			</div>

			)
	}
}
export default ChartData;