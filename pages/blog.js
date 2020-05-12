import Layout from "../components/Layout"
import Link from "next/link"

import classes from '../public/styles/blog.module.scss'

const posts = ['reat', 'angular', 'vue']

export const PostLink = ({ title }) => {
    return (
        <li>
            <Link as={`${title}-post`} href={`/post?title=${title}`} >
                <a className={classes.post_link}>{title}</a>
            </Link>
        </li>
    )
}

const Blog = () => {
    return (
        <Layout title="blog">
            <ul className={classes.post_list}>
                {
                    posts.map((post, index) => <PostLink key={index} title={post} />)
                }
            </ul>
        </Layout>
    )
}

export default Blog