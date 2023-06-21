// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'
import Box from "@mui/material/Box";

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Hook
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import ShortcutsDropdown, { ShortcutsType } from 'src/@core/layouts/components/shared-components/ShortcutsDropdown'

const LinkStyled = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: theme.spacing(8)
}))

const LogoIllustration = styled('img')(() => ({
    zIndex: 2,
    maxHeight: 32
}))

const shortcuts: ShortcutsType[] = [
    {
        title: 'Colegios',
        url: 'register',
        icon: 'icon-park-outline:school',
        subtitle: 'Institución'
    },
    {
        title: 'Docentes',
        url: '/register',
        icon: 'mdi:teacher',
        subtitle: 'Personas'
    },
    {
        title: 'Padres',
        icon: 'mdi:user',
        url: '/apps/user/list',
        subtitle: 'Tutores'
    },
    {
        url: '/register',
        icon: 'fa6-solid:children',
        subtitle: 'Personas',
        title: 'Alumnos'
    }
]

const BlankLayoutAppBar = () => {
  // ** Hooks & Vars
  const theme = useTheme()
  const { settings, saveSettings } = useSettings()
  const { skin } = settings

  return (
    <AppBar
      color='default'
      position='sticky'
      elevation={skin === 'bordered' ? 0 : 3}
      sx={{
        backgroundColor: 'background.paper',
        ...(skin === 'bordered' && { borderBottom: `1px solid ${theme.palette.divider}` })
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          p: theme => `${theme.spacing(0, 6)} !important`,
          minHeight: `${(theme.mixins.toolbar.minHeight as number) - (skin === 'bordered' ? 1 : 0)}px !important`
        }}
      >
        <LinkStyled href='/'>
            <LogoIllustration alt='login-illustration' src={`/images/elfaroeducar-${theme.palette.mode}.svg`} />
          <Typography
            variant='h6'
            sx={{
              ml: 2.5,
              fontWeight: 600,
              lineHeight: '24px',
              fontSize: '1.375rem !important'
            }}
          >
            {themeConfig.templateName}
          </Typography>
        </LinkStyled>

          <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
              <ModeToggler settings={settings} saveSettings={saveSettings} />
              <ShortcutsDropdown settings={settings} shortcuts={shortcuts} />
          </Box>
      </Toolbar>
    </AppBar>
  )
}

export default BlankLayoutAppBar
