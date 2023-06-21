// ** Next Imports
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'

// ** MUI Imports
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent, { CardContentProps } from '@mui/material/CardContent'

// ** Third Party Imports
import axios from 'axios'

// ** Types
import { HelpCenterCategoriesType, HelpCenterArticlesOverviewType } from 'src/@fake-db/types'

// ** Demo Imports
import HelpCenterLandingHeader from '../../views/pages/landing/landing/HelpCenterLandingHeader'
import HelpCenterLandingFooter from '../../views/pages/landing/landing/HelpCenterLandingFooter'
import HelpCenterLandingArticlesOverview from '../../views/pages/landing/landing/HelpCenterLandingArticlesOverview'
import {ReactNode} from "react";
import BlankLayoutWithAppBar from "../../@core/layouts/BlankLayoutWithAppBar";

type ApiDataType = {
  categories: HelpCenterCategoriesType[]
  keepLearning: HelpCenterArticlesOverviewType[]
  popularArticles: HelpCenterArticlesOverviewType[]
}

const StyledCardContent = styled(CardContent)<CardContentProps>(({ theme }) => ({
  paddingTop: `${theme.spacing(20)} !important`,
  paddingBottom: `${theme.spacing(20)} !important`,
  [theme.breakpoints.up('sm')]: {
    paddingLeft: `${theme.spacing(20)} !important`,
    paddingRight: `${theme.spacing(20)} !important`
  }
}))

const Landing = ({ apiData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Card>
      {apiData !== null ? (
        <>
          <HelpCenterLandingHeader data={apiData.categories} allArticles={apiData.allArticles} />
          <StyledCardContent>
            <Typography sx={{ mb: 6, fontWeight: 500, textAlign: 'center', fontSize: '1.625rem', lineHeight: 1.385 }}>
              Conoce más sobre nuestro proyecto Educativo
            </Typography>
            <HelpCenterLandingArticlesOverview articles={apiData.popularArticles} />
          </StyledCardContent>
          <StyledCardContent sx={{ textAlign: 'center', backgroundColor: 'action.hover' }}>
            <HelpCenterLandingFooter />
          </StyledCardContent>
        </>
      ) : null}
    </Card>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/landing/landing')
  const apiData: ApiDataType = res.data

  return {
    props: {
      apiData
    }
  }
}

Landing.getLayout = (page: ReactNode) => <BlankLayoutWithAppBar>{page}</BlankLayoutWithAppBar>
Landing.guestGuard = true
export default Landing
