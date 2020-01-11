import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Menu from '@material-ui/core/Menu';
import '../CssFile/Shipment.css';

//import Dropdown from './Dropdown';





class RibMessage extends Component{


  constructor(props){
    super(props);
    
    this.state= {
      
      hit: [],
      a:null,
      // name:props.name,
      alerAnchor1:null,

    }


  }

  handleAlertMenuOpen = event => {
    this.setState({alerAnchor1:event.currentTarget})
  };
   handleAlertMenuClose = event => {
    this.setState({alerAnchor1:null})
  };
// getIndex=(value, arr, prop) =>{
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i][pro] === value) {
//             return i;
//         }
//     }
//     return -1; //to handle the case where the value doesn't exist
// };



componentDidMount() {
    
    
    const uri='http://localhost:5000/rib';
    // //console.log(uri)

      fetch(uri,{
        method: 'GET',
        })
      .then(response =>  response.json())
      .then(resData => {
        //const Data=resData;

    const Data = resData.ribResponse;

    console.log(Data);

    this.setState({hit:Data});
      
      });
    }

 

  render(){
   console.log(this.state.hit);
   const open = Boolean(this.state.alerAnchor1);
   // const items = this.state.hit.slice(0,1).map((item,index) =>{return item;} )
   // console.log(items);
   // var index = this.getIndex('InvAdjust', this.state.hit, 'messageFamily');
   // console.log(index);

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
      
      <div >
      <h4 style={{textAlign:'center'}}>RibMessage</h4>
      <Paper>
      <table style={{width:'100%'}}>
        <thead>
          <tr style={{overflow:'wrap'}} >
            <th className="table_head" style={{overflow:'wrap'}}>Message Family</th>
            <th align="left" className="table_head" style={{overflow:'wrap'}}>Message Type</th>
            <th align="left" className="table_head" style={{overflow:'wrap'}}>Count</th>
        
          </tr>
        </thead>

        <tbody>
          {this.state.hit.map(row => (
            
            
            <tr  key={row.id}
            style={{overflow:'wrap'}}
            color="inherit"
            aria-haspopup="true"
            
            >
              <td className="table_column" style={{overflow:'wrap'}}>
                {row.messageFamily}
              </td>
              <td align="left" className="table_column" style={{overflow:'wrap'}}>{row.messageType}</td>
              <td align="left" className="table_column" 
              style={{overflow:'wrap'}}
              onMouseOver={this.handleAlertMenuOpen}
              >{row.count}</td>
              
            </tr>
            ))}
          
        </tbody>
      </table>
    
      
     </Paper>
     {renderAlertError}

        
       </div>
      )
  }
}

export default RibMessage;
