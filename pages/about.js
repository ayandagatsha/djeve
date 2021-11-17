import Layout from '@/components/Layout'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <Layout
        title='About DJ events'>
            <h1>About</h1>
            <p>An app to find the latest DJ and other musical events</p>
            <p>
                version 1
            </p>
            <Link href='/'>Home</Link>
        </Layout>
    )
}
