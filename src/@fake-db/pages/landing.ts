// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** ThemeConfig Import
import themeConfig from 'src/configs/themeConfig'

// ** Types
import {
  HelpCenterCategoriesType,
  HelpCenterArticlesOverviewType,
  HelpCenterSubcategoryArticlesType
} from 'src/@fake-db/types'

type Data = {
  categories: HelpCenterCategoriesType[]
  keepLearning: HelpCenterArticlesOverviewType[]
  popularArticles: HelpCenterArticlesOverviewType[]
}

const data: Data = {
  popularArticles: [
    {
      slug: 'comenzar',
      title: '¡Cómo comenzar!',
      img: '/images/pages/rocket.png',
      subtitle: "Si sos maestro, tutor, docente o padre. Te explicamos como es el proceso de OnBoarding en la plataforma.",
      link: "/landing/comenzar/cuenta/crear-nueva-cuenta"
    },
    {
      slug: 'first-steps',
      title: 'Primeros pasos',
      img: '/images/pages/gift.png',
      subtitle: 'Si ya hiciste el proceso de OnBoarding, te contamos como configurar las integraciones y las alertas.'
    },
    {
      slug: 'external-content',
      title: 'Para desarrolladores',
      img: '/images/pages/external-content.png',
      subtitle: 'Este apartado esta destinado a los desarrolladores de aplicaciones Web o Mobile para que puedan integrarse con la plataforma.'
    }
  ],
  categories: [
    {
      avatarColor: 'success',
      slug: 'comenzar',
      title: 'Getting Started',
      icon: 'tabler:shopping-cart',
      subCategories: [
        {
          slug: 'cuenta',
          title: 'Cuenta',
          icon: 'tabler:box',
          articles: [
            {
              slug: 'crear-nueva-cuenta',
              title: '¿Como crear una nueva cuenta?',
              content:
                  "<p>Para crear una nueva cuenta en el Faro será necesario primero relizar el proceso de OnBoarding. Esto se debe realizar desde el proceso de registro o Sign Up.</p><br/><p>En la parte superior derecha de la pantalla se encuentra el icono de acceso al registro. </p>"
            }
          ]
        }
      ]
    }
  ],
  keepLearning: [
    {
      slug: 'blogging',
      title: 'Blogging',
      img: '/images/pages/laptop.png',
      subtitle: 'Expert tips & tools to improve your website or online store using blog.'
    },
    {
      slug: 'inspiration-center',
      title: 'Inspiration Center',
      img: '/images/pages/bulb.png',
      subtitle: 'inspiration from experts to help you start and grow your big ideas.'
    },
    {
      slug: 'community',
      title: 'Community',
      img: '/images/pages/discord.png',
      subtitle: 'A group of people living in the same place or having a particular.'
    }
  ]
}

mock.onGet('/landing/landing').reply(() => {
  const allArticles: HelpCenterSubcategoryArticlesType[] = []

  data.categories.map(category =>
    category.subCategories.map(subCategory => subCategory.articles.map(article => allArticles.push(article)))
  )

  return [
    200,
    { allArticles, categories: data.categories, popularArticles: data.popularArticles, keepLearning: data.keepLearning }
  ]
})

mock.onGet('/landing/subcategory').reply(config => {
  const { category, subcategory } = config.params
  const filteredData = data.categories.filter(item => item.slug === category)

  return [
    200,
    {
      data: filteredData[0],
      categories: data.categories,
      activeTab: subcategory || filteredData[0].subCategories[0].slug
    }
  ]
})

mock.onGet('/landing/article').reply(config => {
  const { article, category, subcategory } = config.params

  const activeCategory = data.categories.filter(item => item.slug === category)[0]
  const activeSubcategory =
    activeCategory.subCategories.filter(item => item.slug === subcategory)[0] || activeCategory.subCategories[0]
  const activeArticle = activeSubcategory.articles.filter(item => item.slug === article)[0]

  return [200, { activeArticle, activeSubcategory, categories: data.categories, articles: activeSubcategory.articles }]
})
