import { FC } from "react"
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage"
import Header from "./compounds/Header/Header"
import StartPage from "./pages/StartPage/StartPage"
import { useSelector } from "react-redux"
import "../src/styles/style.scss"

const MainPage: FC = () => {

    const result = useSelector((state: any) => state.searchResult.searchResult)

    console.log(result)

    return (
        <main>
            <Header />
            <main className="main">
            {result.length === 0 ? <StartPage /> : <SearchResultPage />}
            </main>
        </main>
    )
}

export default MainPage