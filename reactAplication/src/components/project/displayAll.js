import React,{useEffect,useState,useRef} from 'react'
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import {getAllUsers} from './service'
import {setAllUsers} from './redux/action'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Button } from "@material-ui/core";
// import { makeStyles } from '@material-ui/core/styles';
function mapStateToProps(state){
    return{
          users:state.allUsers
         
}
}

const mapDispatchToProps=(dispatch)=>({
    
    setAll: (users) => dispatch(setAllUsers(users))
    

})


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));
export default connect(mapStateToProps,mapDispatchToProps) ( function DisplayAll(props){
   
    
   const {users,setAll}=props
   const classes = useStyles();
   useEffect(()=>{
    getAllUsers()
    .then((users)=>{
       
      setAll(users)
        //console.log(currentUser);

        console.log(users);})
 
 },[])
        
        // 
        return (
            <>
            <div className="container">
          
      
         
        {
          users[0]?  <div className={classes.root}>
          <GridList cellHeight={100} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div"> Our Users...</ListSubheader>
            </GridListTile>
            {users[0].map((user) => (
              <GridListTile key={user._id}>
                  
            
        
                <GridListTileBar
                  title={user.name}
                  subtitle={<span>{user.email}</span>}
                  actionIcon={
                    <IconButton aria-label={`info about ${user.name}`} className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>:<h2>no history</h2>
        }
            
            </div>
            
        
        {/* {history.length?
        history.map((media)=>(<h3 key={media}>{media.title}</h3>))
        :<h3>didnt come from store...</h3>} */}
            
            <br></br>
            <br></br>
            <button type="button" className="btn btn-info btn-lg btn-block">back to Home</button>
            </>
          )
        
        
        })
        
                   