import Layout from '../components/Layout'
import Error from './404'

import axios from 'axios'

const About = ({ data, statusCode }) => {

    if (statusCode) {
        return <Error status={statusCode} />
    }
    return (
        <Layout title="About">
            <div className="aboutPara">
                <h1>UserName : {data.login}</h1>
                <h3>Name : {data.name}</h3>
                <img src={data.avatar_url} alt="Hardik" />
            </div>
            <style jsx>{`
                .aboutPara{
                    display:flex;
                    justify-content:center;
                    flex-direction:column;
                    align-items:center;
                }
                .aboutPara img {
                    width:200px;
                }
            `}</style>
        </Layout>
    )
}

About.getInitialProps = async () => {
    let res = {}, statusCode = false
    await axios.get('https://api.github.com/users/hardyyb2__')
        .then(res =>
            data = res.json()
        ).catch(err =>
            statusCode = err.response.status
        )
    return {
        data: res.data,
        statusCode: statusCode
    }
}

export default About