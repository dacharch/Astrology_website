import React from 'react'
import { Box, Typography } from '@mui/material'


const Videos = () => {
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
        Videos
      </Typography>

      <Box
        component="div"
        display="flex"
        justifyContent="space-between"
        padding="10px"
      >

        <Box component="div">
          <iframe width="300" height="250" src="https://www.youtube.com/embed/XmX4VLO83-k" title="2025 में कुंभ, मकर और  मीन राशि पर क्या पड़ेगा असर? जानें बड़े बदलाव और उपाय! Part - 4 #astrology" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>

        <Box component="div">
          <iframe width="300" height="250" src="https://www.youtube.com/embed/LP7LanavZCM" title="2025 में सिंह, कन्या और कर्क राशि पर क्या पड़ेगा असर? जानें बड़े बदलाव और उपाय! Part -2  #astrology" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Box>
        <Box component="div">
          <iframe width="300" height="250" src="https://www.youtube.com/embed/4P26_p9dG4A" title="2025 Aur Number 9: Rashiyon Par Hone Wale Prabhav Ko Samjhiye! #astrology" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Box>

        <Box component="div">
          <iframe width="300" height="250" src="https://www.youtube.com/embed/32uMjO6wtgY" title="2025 में मेष, मिथुन और वृषभ राशि पर क्या पड़ेगा असर? जानें बड़े बदलाव और उपाय! | Part -1 |#astrology" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Box>

      </Box>
    </Box>
  )
}

export default Videos