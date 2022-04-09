import { useRouter } from "next/router";
import Layout from "../comps/Layout"

export default function Home() {

    const r = useRouter();
    return (
        <Layout></Layout>
    )
}
