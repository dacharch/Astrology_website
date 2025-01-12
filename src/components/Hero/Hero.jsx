import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import "./Header.css"

const Hero = () => {
  return (
     <Box component="section" position="relative" >
          <Box component="div">
              <img className='background_image' src='/images/background.jpg'/>
          </Box>
          <Box className="div" position="absolute" sx={{top:"300px", left:"60px"}}>
            <Typography sx={{color:"#fff", fontWeight:"bold", fontSize:"40px"}}>
                   Astro with Reena Sharma
            </Typography>
            <Typography component="p" sx={{color:"#fff", fontWeight:'bold'}}>
            The stars above hold the map to your soul <p>unlock their secrets and discover your true destiny.</p>
            </Typography>

            <Button sx={{background:"green",color:"#fff", borderRadius:"10px",padding:"10px 20px"}}>
                Enquiry
            </Button>
          </Box>

        

     </Box>
  )
}

export default Hero