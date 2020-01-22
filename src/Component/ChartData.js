import React,{Component} from "react"
import SalesData from '../Component/SalesData'
import Soh from '../Component/Soh'
import ComparisionChart from '../Component/ComparisionChart'
import AllInOne from '../Component/AllInOne'

class ChartData extends Component{

	constructor(props){
		super(props);
		
		this.state= {
			
			type:props.type,
			tableName:props.tableName
			

		}


	}

	showChart=()=>{
		if(this.state.type=='table')
		{
			return < AllInOne tableName={this.state.tableName}  />
		}
		else if(this.state.type=='chart' && this.state.tableName=='SalesData')
		{
			return < SalesData />
		}
		else if(this.state.type=='chart' && this.state.tableName=='SOH')
		{
			return < Soh />
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