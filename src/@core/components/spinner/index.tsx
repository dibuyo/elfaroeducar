// ** MUI Imports
import {styled, useTheme} from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const LogoIllustration = styled('img')(({ theme }) => ({
    zIndex: 2,
    maxHeight: 64
}))
const FallbackSpinner = ({ sx }: { sx?: BoxProps['sx'] }) => {
  // ** Hook
  const theme = useTheme()

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx
      }}
    >
        <LogoIllustration alt='login-illustration' src={`/images/elfaroeducar-${theme.palette.mode}.svg`} />
      <CircularProgress disableShrink sx={{ mt: 6 }} />
    </Box>
  )
}

export default FallbackSpinner
