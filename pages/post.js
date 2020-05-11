import Layout from '../components/Layout'

const Post = ({ url }) => {
    return (
        <Layout title={`${url.query.title}`}>
        </Layout>
    )
}
export default Post