import Layout from '../components/Layout'
import { useRouter } from 'next/router'

const Post = ({ url }) => {

    const router = useRouter()

    return (
        <Layout title={`${router.query.title}`}>
        </Layout>
    )
}
export default Post