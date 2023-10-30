import { Link } from "react-router-dom"
import './Home.scss'

const Home = () => {

    const content = (
        <section className="public">
            <header>
                <h1>두리안 플레이트</h1>
            </header>
            <main>
                <p>두리안 플레이트</p>
                <p>&nbsp;</p>
            </main>
            <footer>
                <Link to="/login">로그인</Link>
            </footer>
        </section>

    )
    return content
}
export default Home