import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'
import AppbarDesktop from './AppbarDesktop'
import AppbarMobile from './AppbarMobile'

function Appbar() {
 const theme=useTheme()
 const matches= useMediaQuery(theme.breakpoints.down('md'))

 return (
  <>   
  {matches? <AppbarMobile/>:<AppbarDesktop/>}
  </>
 )
}

export default Appbar
