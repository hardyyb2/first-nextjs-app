import Link from "next/link"
import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'

import classes from '../public/styles/layout.module.scss'

Router.onRouteChangeStart = url => {
    NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const links = [
    { title: 'Home', link: '' },
    { title: 'About', link: 'about' },
    { title: 'Hire Me', link: 'hireme' },
    { title: 'Blog', link: 'blog' },
]

export default ({ children, title }) => {

    const router = useRouter()

    return (
        <div className={classes.root}>
            <Head>
                <title>Portfolio</title>
            </Head>
            <header className={classes.header}>

                {
                    links.map((link, index) =>
                        <Link key={index} href={`/${link.link}`} >
                            <span className={router.pathname === `/${link.link}` ? classes.active_link : ``}>
                                <a>{link.title}</a>
                            </span>
                        </Link>

                    )
                }

            </header>
            <h2>{title}</h2>
            {children}
            <footer className={classes.footer}>
                &copy; {(new Date()).getUTCFullYear()}
            </footer>
        </div>
    )
}