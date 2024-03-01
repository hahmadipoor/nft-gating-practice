import {useNavigate,useLocation} from "react-router-dom"
import './Home.css'
import { useEffect, useState } from "react"
require('dotenv').config()

const Home=()=>{
    const location = useLocation()
    const navigateTo=useNavigate()
    const [account,setAccount]=useState("");
 
    useEffect(()=>{
      const accountAddress = location.state.address;
      setAccount(accountAddress);
    })
    
    const revealMsg=async()=>{
        try{
           const res = await fetch(process.env.BASE_URL+'/members',{
              method:"POST",
              headers:{
                "content-type":"application/json"
              },
              body:JSON.stringify({from:account})
           })
           const data = await res.json();
           if(data.status===200){
             navigateTo("/members")
           }else{
             window.alert("You currently do not hold any NFTs in collection ")
           }
        }catch(error){
           console.error(error)
        }
    }
    return(
    <>
        <b>your address: </b> {account}
        <br />
        <span className="beautiful-sentence">I have a secret message for holders of my NFT collection </span>
        <br />
        <span className="beautiful-sentence">If you're a holder click the following button </span>
        <br/>
        <button className="btn" onClick={revealMsg}>Reveal Message</button>
    </>
    )
 }
 export default Home;