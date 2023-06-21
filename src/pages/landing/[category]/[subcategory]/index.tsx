// ** Next Import
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Type Imports
import { HelpCenterCategoriesType } from 'src/@fake-db/types'

// ** Demo Components Imports
import HelpCenterSubcategory from '../../../../views/pages/landing/subcategory'
import {ReactNode} from "react";
import BlankLayoutWithAppBar from "../../../../@core/layouts/BlankLayoutWithAppBar";

const HelpCenterSubcategoryPage = ({ apiData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return apiData ? <HelpCenterSubcategory data={apiData.data} activeTab={apiData.activeTab} /> : null
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get('/landing/subcategory', {
    params: { category: 'comenzar' }
  })
  const apiData: { activeTab: string; data: HelpCenterCategoriesType; categories: HelpCenterCategoriesType[] } =
    await res.data

  const paths: any = []
  apiData.categories.forEach((category: HelpCenterCategoriesType) =>
    category.subCategories.forEach(subcategory => {
      paths.push({ params: { category: `${category.slug}`, subcategory: `${subcategory.slug}` } })
    })
  )

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const res = await axios.get('/landing/subcategory', {
    params: { category: params?.category, subcategory: params?.subcategory }
  })
  const apiData = await res.data

  return {
    props: {
      apiData
    }
  }
}

HelpCenterSubcategoryPage.getLayout = (page: ReactNode) => <BlankLayoutWithAppBar>{page}</BlankLayoutWithAppBar>
HelpCenterSubcategoryPage.guestGuard = true
export default HelpCenterSubcategoryPage
