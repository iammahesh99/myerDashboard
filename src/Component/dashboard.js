import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import AllInOne from '../Component/AllInOne'
import AppBar from '@material-ui/core/AppBar';
import '../CssFile/Shipment.css';
import ChartData from '../Component/ChartData'

const styles = theme => ({
   root: {
    backgroundColor: '#4a4a4a',
    border: '3px solid #DBCBD8',
    borderRadius: '7px!important',
    marginLeft:'2%'

  },
  

  
});

class Dashboard extends Component {

   constructor(props) {
    super(props);
    this.state = {
      // understock:props.understock,
      hit:[],
      data1:[],
      tablestructure:[],
      
    };
}

   
  componentDidMount(){
    const uri='https://myerdashboardserver.herokuapp.com/tablestructure';
    const uri2='https://myerdashboardserver.herokuapp.com/tablesize';
    const uri3='https://myerdashboardserver.herokuapp.com/dashboardStructure';
    //console.log(uri)

      Promise.all([
            fetch(uri,{ method: 'GET', }),
            fetch(uri2,{ method: 'GET', }),
            fetch(uri3,{ method: 'GET', }),
        ])
        .then(([res1, res2,res3]) => Promise.all([res1.json(), res2.json(),res3.json()]))
        .then(([resdata1, resdata2,resdata3,]) => 
          this.setState({
            hit:resdata1.jsonObj,
            data1: resdata2.jsonObj,
            tablestructure:resdata3.jsonObj,
        }));
        


    

  }
  
     

  

 

render(){
   const { classes}= this.props;
   // let selfWidth=0
   let selfRow=0
   this.state.data1.map(pe=>{
          selfRow=pe.rows

        })

   //console.log(this.state.hit);
   console.log(this.state.tablestructure);

    let rows = [];
    for (var i = 1; i <=selfRow; i++)
    {
      let rowID = `row${i}`
      let cell = []
      this.state.hit.map(data=>
      {

              if(data.row==i)
              {
                    const size=(100-(data.column*2))/data.column;
                    const tablewidth=size+'%';
                    console.log(tablewidth);
                    

                      for (var idx = 1; idx <=data.column; idx++)
                      {

                            this.state.tablestructure.map(res => {
                              if(res.rowNo==i)
                              {
                                if(res.columnNo==idx)
                                {

                                  let cellID = `cell${i}-${idx}`
                                  cell.push(<div key={cellID} id={cellID}
                                  style={{float: 'left',width:tablewidth,marginRight:'2%',marginBottom:'2%',
                                  backgroundColor:'#F0FFFF'
                                  }}  
                                    ><ChartData tableName={res.url} type={res.type} /></div>)
                                    
                                  }
                              }


                            })
                          
                      }

            }
      })
      
      rows.push(<div key={i} id={rowID}>
      
      {cell}</div>)
    }
    

   
    
	 
  return (
    <div style={{width:'100%'}}>
    <h4 style={{textAlign:'center'}}>Critical Analysis</h4>
      {rows}
    </div>
  );
  }
}
Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);