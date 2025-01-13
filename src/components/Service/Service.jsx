import React from 'react'
import { Box, Typography } from '@mui/material'
import "./Service.css"

const Service = () => {
  return (
    <Box component="section"
      sx={{
        textAlign: "center"
      }}
    >
      <Typography
        sx={{
          fontSize: "25px",
          fontWeight: "bold"
        }}
      >
        Services
      </Typography>

      <Box
        component="div"
        display="flex"
        justifyContent="space-between"
        padding="10px"
      >

        <Box component="div">
          <img className='service_image' src="/images/married.jpg" />
          <Typography
            padding="10px"
          >
            Want a Happy Married life? Our matchmaking analysis can predict what's right just for you.
          </Typography>
        </Box>

        <Box component="div">
            <img className='service_image' src="/images/education.jpg"/>
            <Typography>
            Want a Happy Married life? Our matchmaking analysis can predict what's right just for you.

            </Typography>
        </Box>
        <Box component="div">
            <img className='service_image' src="/images/business.jpeg"/>
            <Typography>
            Want a Happy Married life? Our matchmaking analysis can predict what's right just for you.
            </Typography>
        </Box>

        <Box component="div">
            <img className='service_image' src="/images/wealth.jpg"/>
            <Typography>
            Want a Happy Married life? Our matchmaking analysis can predict what's right just for you.

            </Typography>
        </Box>

      </Box>
    </Box>
  )
}

export default Service