
import {useRouter} from 'next/router'
import Layout from '@/components/Layout'


export default function EventPage() {

    const router = useRouter()



    return (
        <Layout>
            <h1>My Event</h1>
            <h3>{router.query.id}</h3>
            <button onClick={()=>router.push('/')}>home</button>
        </Layout>
    )
}
