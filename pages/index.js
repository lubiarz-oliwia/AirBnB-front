import { sanityClient } from '../sanity'
import Property from './property/[slug]'
 
const Home = ({ properties }) => {
   console.log(properties)
  return (
  <>  
  </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[ _type == "property"]'
  const properties = await sanityClient.fetch(query)

  if (!properties.length) {
    return {
      props: {
        properties: [],
      },
    }
  } else {
    return {
      props: {
        properties,
      },
    }
  }
}

export default Home
