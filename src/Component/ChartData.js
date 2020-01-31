import React,{Component} from "react"
import SalesData from '../Component/SalesData'
import Soh from '../Component/Soh'
import ComparisionChart from '../Component/ComparisionChart'
import AllInOne from '../Component/AllInOne'
import ReactSimpleCarousel from "react-plain-carousel";


class ChartData extends Component{

	constructor(props){
		super(props);
		
		this.state= {
			
			type:props.type,
			tableName:props.tableName,
			play:true,
			data1:[65, 59, 80, 81,],
			data2:[10, 40, 20, 31,],
			data3:[40, 29, 60, 71,]
			

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
			return (
			<ReactSimpleCarousel isInfinity autoplay={this.state.play} >
            <div ><Soh data={this.state.data1} store={"store1"}/></div>
            <div ><Soh data={this.state.data2} store={"store2"}/></div>
            <div ><Soh data={this.state.data3} store={"store3"}/></div>
          </ReactSimpleCarousel>);
			      
			    
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