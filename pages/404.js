import Layout from "../components/Layout"

export default ({ status }) => (
    <Layout title="Error" >
        {
            status ?
                `Couldn't get your data , Server responded with statuscode : ${status}`
                :
                <p>Couldnt get that pages, sorry!!!!</p>

        }
    </Layout>
)