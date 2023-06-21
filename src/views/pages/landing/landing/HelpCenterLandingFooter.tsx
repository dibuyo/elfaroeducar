// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

import { styled } from '@mui/material/styles'

const StyledBox1 = styled(Box)<BoxProps>(({ theme }) => ({
    display: 'flex',
    borderRadius: '5px',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(6),
    backgroundColor: theme.palette.action.hover
}))

// Styled Box component
const StyledBox2 = styled(Box)<BoxProps>(({ theme }) => ({
    display: 'flex',
    borderRadius: '5px',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(6),
    backgroundColor: theme.palette.action.hover
}))

const HelpCenterLandingFooter = () => {
  return (
    <>
        <Box sx={{ mt: 13, textAlign: 'center' }}>
            <Typography sx={{ mb: 4, fontWeight: 500, fontSize: '1.625rem', lineHeight: 1.385 }}>¿Necesitas más información?</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Podes encontrar en nuestro Blog.</Typography>
            <Typography sx={{ mb: 4, color: 'text.secondary' }}>
                O bien podes contactarte con nosotros via email las 24hs, y te estaremos respondiendo a la brevedad.
            </Typography>

            <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                    <StyledBox1>
                        <CustomAvatar skin='light' variant='rounded' sx={{ mb: 2.5, height: 38, width: 38 }}>
                            <Icon fontSize='1.75rem' icon='mdi:web' />
                        </CustomAvatar>
                        <Typography
                            href='/'
                            variant='h4'
                            component={Link}
                            onClick={e => e.preventDefault()}
                            sx={{ mb: 2.5, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                        >
                            blog.elfaroeduc.ar
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>¡Nuestro Blog y comentarios de la comunidad!</Typography>
                    </StyledBox1>
                </Grid>

                <Grid item xs={12} md={6}>
                    <StyledBox2>
                        <CustomAvatar skin='light' variant='rounded' sx={{ mb: 2.5, height: 38, width: 38 }}>
                            <Icon fontSize='1.75rem' icon='tabler:mail' />
                        </CustomAvatar>
                        <Typography
                            href='/'
                            variant='h4'
                            component={Link}
                            onClick={e => e.preventDefault()}
                            sx={{ mb: 2.5, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                        >
                            hola@elfaroeduc.ar
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>¡Una manera rápida de recibir una respuesta!</Typography>
                    </StyledBox2>
                </Grid>
            </Grid>
        </Box>
    </>
  )
}

export default HelpCenterLandingFooter
