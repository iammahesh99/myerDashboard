import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper';
import '../CssFile/Shipment.css';
import Menu from '@material-ui/core/Menu';

//import Dropdown from './Dropdown';





class AllInOne extends Component{


  constructor(props){
    super(props);
    
    this.state= {
      
      hit: [],
      a:null,
      tableName:props.tableName,
      alerAnchor1:null,

    }


  }
  handleAlertMenuOpen = event => {
    this.setState({alerAnchor1:event.currentTarget})
  };
   handleAlertMenuClose = event => {
    this.setState({alerAnchor1:null})
  };




componentDidMount() {
    
    const uri='https://myerdashboardserver.herokuapp.com/'+this.state.tableName;
    // //console.log(uri)

      fetch(uri,{
        method: 'GET',
        })
      .then(response =>  response.json())
      .then(resData => {
        //const Data=resData;

    const Data = resData.jsonObj;

    

    this.setState({hit:Data});
      
      });
    }


  render(){
  
   const open = Boolean(this.state.alerAnchor1);
   const alertId = 'primary-notification-account-menu';
              const renderAlertError = (
                <Menu
                  anchorEl={this.state.alerAnchor1}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  id={alertId}
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  aria-haspopup="true"
                  open={open}
                  onMouseOut={this.handleAlertMenuClose}

                >
                
                  <div style={{}}>
                  <h3 style={{color:'red',textAlign:'center'}}>Message Errors Log</h3>
                  <ul>
                  <li style={{color:'red'}}> Order is in worksheet status</li>
                  <li style={{color:'red'}}> Location is inactive</li>
                  <li style={{color:'red'}}> Failed due to timing issue</li>
                  </ul>
                  </div>
                    
                </Menu>
              );
    
    
    return (
      
      <React.Fragment  >
      <h4 style={{textAlign:'center'}}>{this.state.tableName.toUpperCase()}  Table</h4>
      <table style={{width:'100%',backgroundColor:'white'}}>
        <thead >

        { this.state.hit.slice(0,1).map(data=>(
        <tr style={{overflow:'wrap'}}>
        {Object.entries(data).map(([make, type]) => (
           <th className="table_head" style={{overflow:'wrap'}}>{make.toUpperCase()}</th>     
        ))}
        </tr>

       ))}

        </thead>

        <tbody>


      { this.state.hit.map(data=>(
        <tr  style={{overflow:'wrap'}}  onMouseOver={this.handleAlertMenuOpen}>
        {Object.entries(data).map(([make, type]) => (
            <td className="table_column" style={{overflow:'wrap'}}>
                {type}
              </td>
            
        ))}
        </tr>

       ))}
           
          
        </tbody>
      </table>
      {this.state.tableName=='rib'?renderAlertError:null}
       </React.Fragment>
      
      )
  }
}

export default AllInOne;
