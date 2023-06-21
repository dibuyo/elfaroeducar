// ** React Imports
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

// Styled Components
const ForgotPasswordIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxHeight: 650,
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(12),
  [theme.breakpoints.down(1540)]: {
    maxHeight: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: 500
  }
}))

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 600
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 750
  }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  display: 'flex',
  fontSize: '1rem',
  alignItems: 'center',
  textDecoration: 'none',
  justifyContent: 'center',
  color: theme.palette.primary.main
}))

const ForgotPassword = () => {
  // ** Hooks
  const theme = useTheme()

  // ** Vars
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box className='content-right' sx={{ backgroundColor: 'background.paper' }}>
      {!hidden ? (
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            borderRadius: '20px',
            justifyContent: 'center',
            backgroundColor: 'customColors.bodyBg',
            margin: theme => theme.spacing(8, 0, 8, 8)
          }}
        >
          <ForgotPasswordIllustration
            alt='forgot-password-illustration'
            src={`/images/pages/auth-v2-forgot-password-illustration-${theme.palette.mode}.png`}
          />
          <FooterIllustrationsV2 />
        </Box>
      ) : null}
      <RightWrapper>
        <Box
          sx={{
            p: [6, 12],
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <svg width={63.12} height={35.47} viewBox="0 0 64 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity={0.8} d="M55.1106 12.7736L49.562 3.45142C48.28 1.28853 46.0119 0 43.494 0C40.9761 0 38.7081 1.28853 37.4261 3.45142L27.1047 20.8006C26.5328 21.7538 25.5335 22.3258 24.4225 22.3258C24.4225 22.3258 24.4225 22.3258 24.4159 22.3258C23.3049 22.3258 22.299 21.7538 21.7336 20.794L17.0265 12.8393C16.3297 11.6625 15.2384 10.8342 13.9696 10.466L16.9477 5.46311C17.5196 4.51644 18.5189 3.94449 19.6299 3.94449C20.7409 3.94449 21.7402 4.51644 22.3122 5.46969L25.8622 11.4324C26.421 12.366 27.6306 12.6749 28.5642 12.1161C29.4977 11.5573 29.8067 10.3477 29.2479 9.41417L25.6978 3.45142C24.4159 1.28853 22.1478 0 19.6299 0C17.112 0 14.8439 1.28853 13.562 3.45142L1.04481 24.4887C-0.322616 26.7831 -0.348912 29.5376 0.97249 31.8649C2.25445 34.1198 4.5554 35.4675 7.11274 35.4675H56.0112C58.5751 35.4675 60.8695 34.1198 62.1515 31.8649C63.4729 29.5442 63.4466 26.7831 62.0791 24.4887L55.1106 12.7736ZM40.8118 5.46969C41.3772 4.51644 42.383 3.94449 43.494 3.94449C44.6051 3.94449 45.6043 4.51644 46.1763 5.46969L49.1215 10.4134C47.8527 10.7816 46.7548 11.6099 46.058 12.7999L41.3837 20.7546C40.8184 21.7144 39.8191 22.2929 38.7015 22.2929H38.6949C37.5839 22.2929 36.578 21.721 36.0127 20.7677L33.8629 17.1519L40.8118 5.46969ZM58.7263 29.9189C58.1478 30.9445 57.1551 31.5296 56.0112 31.5296H7.11274C5.96884 31.5296 4.98272 30.9445 4.39762 29.9189C3.78622 28.8473 3.79937 27.572 4.43049 26.5135L7.00755 22.1812L8.78257 19.1965L11.3728 14.851C11.7146 14.2725 12.2734 14.2067 12.5035 14.2067C12.7402 14.1936 13.2924 14.2659 13.6343 14.851L18.3348 22.7991C19.6168 24.9686 21.8848 26.2637 24.4093 26.2703C24.4159 26.2703 24.4159 26.2703 24.4225 26.2703C26.9404 26.2703 29.2084 24.9817 30.497 22.8188L31.5685 21.0175L32.627 22.7926C33.9155 24.9554 36.1836 26.244 38.7015 26.244C38.7081 26.244 38.7146 26.244 38.7212 26.244C41.2457 26.2374 43.5138 24.9291 44.7957 22.7531L49.4699 14.7984C49.8118 14.2133 50.3772 14.1476 50.6007 14.1476C50.6007 14.1476 50.6007 14.1476 50.6073 14.1476C50.8374 14.1476 51.3896 14.2133 51.738 14.7918L55.4721 21.0701L58.7066 26.5135C59.3246 27.5654 59.3377 28.8408 58.7263 29.9189Z" fill={theme.palette.primary.main}/>
            </svg>
            <Box sx={{ my: 6 }}>
              <Typography sx={{ mb: 1.5, fontWeight: 500, fontSize: '1.625rem', lineHeight: 1.385 }}>
                ¿Olvidaste tu contraseña? 🔒
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Completa con tu correcto de Wayni y recibiras un mail con las instrucciones.
              </Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
              <TextField autoFocus type='email' label='Email' sx={{ display: 'flex', mb: 4 }} />
              <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 4 }}>
                Enviar Mail
              </Button>
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { mr: 1 } }}>
                <LinkStyled href='/login'>
                  <Icon fontSize='1.25rem' icon='tabler:chevron-left' />
                  <span>Volver al login</span>
                </LinkStyled>
              </Typography>
            </form>
          </Box>
        </Box>
      </RightWrapper>
    </Box>
  )
}

ForgotPassword.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

ForgotPassword.guestGuard = true

export default ForgotPassword
