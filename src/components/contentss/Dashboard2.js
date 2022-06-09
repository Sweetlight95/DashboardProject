import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import './dashb.css'
import RecentUser from './RecentUser'
import Recents from './Recents'
import { Axios } from 'axios'

const Dashboard2 = () => {
    const user = () => {
        const config = {
            headers: {
              "app-id": "629e74f9007a8808a4995bb2",
            },
          };    
          const userPost = "https://dummyapi.io/docs/user";
      
           Axios.get(userPost, config).then((response) => {
            console.log(response.data, "" )
          })
    }
  return (
   <Grid>
        <Grid container style={{display: 'flex'}} >
        <Grid item style={{padding: "2rem 2rem"}} sx={2}>
            <Grid style={{display: "flex", marginBottom: "1.3rem"}}>
                <Grid style={{
                    backgroundColor: "#ffffff", border: "1px solid #FFFFFF", boxShadow: "0px 0px 7px rgba(40, 40, 40, 0.17)", borderRadius:"4px", height: "6rem", width: "12rem"}} >
                    <Typography style={{fontWeight: 400, fontSize: "13px", color: "#505050", marginLeft:"1rem" }} >Users</Typography>
                    <Typography style={{fontWeight: 700, fontSize: "24px", color: "#505050", marginLeft:"1rem"}}>100</Typography>
                </Grid>
                <Grid style={{
                    backgroundColor: "#ffffff", border: "1px solid #FFFFFF", boxShadow: "0px 0px 7px rgba(40, 40, 40, 0.17)", borderRadius:"4px", height: "6rem", width: "12rem", marginLeft: "1rem"
                }}  >
                    <Typography style={{fontWeight: 400, fontSize: "13px", color: "#505050", marginLeft:"1rem" }}>Posts</Typography>
                    <Typography style={{fontWeight: 700, fontSize: "24px", color: "#505050", marginLeft:"1rem"}}>60</Typography>
                </Grid>
            </Grid>
            <Grid style={{display: "flex"}}>
                <Grid style={{
                    backgroundColor: "#ffffff", border: "1px solid #FFFFFF", boxShadow: "0px 0px 7px rgba(40, 40, 40, 0.17)", borderRadius:"4px", height: "6rem", width: "12rem", marginBottom: "1rem" }} >
                    <Typography style={{fontWeight: 400, fontSize: "13px", color: "#505050", marginLeft:"1rem" }}>Comments</Typography>
                    <Typography style={{fontWeight: 700, fontSize: "24px", color: "#505050", marginLeft:"1rem"}}>307</Typography>
                </Grid>
                <Grid style={{
                    backgroundColor: "#ffffff", border: "1px solid #FFFFFF", boxShadow: "0px 0px 7px rgba(40, 40, 40, 0.17)", borderRadius:"4px", height: "6rem", width: "12rem", marginLeft: "1rem"
                }} >
                    <Typography style={{fontWeight: 400, fontSize: "13px", color: "#505050", marginLeft:"1rem"}}>Tags</Typography>
                    <Typography style={{fontWeight: 700, fontSize: "24px", color: "#505050", marginLeft:"1rem"}}>21</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid  item style={{
            background: "#FFFFFF", boxShadow: "0px 0px 7px 3px rgba(40, 40, 40, 0.03)", borderRadius: "4px", marginTop: "1.8rem", height: '14rem',width: '48rem' }}>
           <Typography style={{fontWeight: 700, fontSize: "15px", color: "#505050", marginBottom: "1.4rem", margin: '1rem 1rem'}}>Popular tags</Typography>
           <Grid style={{display: 'flex', justifyContent: "space-evenly"}}>
           <Grid>
             <Grid style={{background: "#F0F0F0", boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.09)", borderRadius: "4px", width: "20rem", display: "flex", justifyContent: "space-between", padding: "0.4rem 0.5rem", marginBottom: '1rem',cursor: "pointer" }} >
               <Typography>Dog</Typography>
               <Typography>345</Typography>
            </Grid>
            <Grid style={{background: "#F0F0F0", boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.09)", borderRadius: "4px", width: "20rem", display: "flex", justifyContent: "space-between", padding: "0.4rem 0.5rem", marginBottom: "1rem", cursor: 'pointer' }} className='tagss'>
               <Typography>Nature</Typography>
               <Typography>18</Typography>
            </Grid>
            <Grid style={{background: "#F0F0F0", boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.09)", borderRadius: "4px", width: "20rem", display: "flex", justifyContent: "space-between", padding: "0.4rem 0.5rem" }}>
               <Typography>Winter</Typography>
               <Typography>12</Typography>
            </Grid>

           </Grid>
            <Grid>
            <Grid style={{background: "#F0F0F0", boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.09)", borderRadius: "4px", width: "20rem", display: "flex", justifyContent: "space-between", padding: "0.4rem 0.5rem", marginBottom:'1rem'}}>
               <Typography>Water</Typography>
               <Typography>20</Typography>
            </Grid>
            <Grid style={{background: "#F0F0F0", boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.09)", borderRadius: "4px", width: "20rem", display: "flex", justifyContent: "space-between", padding: "0.4rem 0.5rem" }}>
               <Typography>Private info requests</Typography>
               <Typography>17</Typography>
            </Grid>
            </Grid>
            </Grid>
        </Grid>
    </Grid>
    <Recents />
   </Grid>
  )
}

export default Dashboard2