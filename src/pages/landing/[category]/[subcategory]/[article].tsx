// ** Next Import
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Type Imports
import { HelpCenterCategoriesType, HelpCenterSubcategoryArticlesType } from 'src/@fake-db/types'

// ** Demo Components Imports
import HelpCenterArticle from '../../../../views/pages/landing/article'
import {ReactNode} from "react";
import BlankLayoutWithAppBar from "../../../../@core/layouts/BlankLayoutWithAppBar";

const HelpCenterArticlePage = ({ apiData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return apiData ? (
    <HelpCenterArticle
      articles={apiData.articles}
      activeArticle={apiData.activeArticle}
      activeSubcategory={apiData.activeSubcategory}
    />
  ) : null
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get('/landing/article', {
    params: { category: 'comenzar' }
  })
  const apiData: {
    categories: HelpCenterCategoriesType[]
    articles: HelpCenterSubcategoryArticlesType[]
    activeArticle: HelpCenterSubcategoryArticlesType
  } = await res.data

  const paths: any = []
  apiData.categories.forEach(category =>
    category.subCategories.forEach(subcategory =>
      subcategory.articles.forEach(article => {
        paths.push({
          params: { category: `${category.slug}`, subcategory: `${subcategory.slug}`, article: `${article.slug}` }
        })
      })
    )
  )

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const res = await axios.get('/landing/article', {
    params: { article: params?.article, category: params?.category, subcategory: params?.subcategory }
  })
  const apiData = await res.data

  return {
    props: {
      apiData
    }
  }
}


HelpCenterArticlePage.getLayout = (page: ReactNode) => <BlankLayoutWithAppBar>{page}</BlankLayoutWithAppBar>
HelpCenterArticlePage.guestGuard = true
export default HelpCenterArticlePage
