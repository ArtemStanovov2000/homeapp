import { FC } from "react"
import { Button } from "@mui/material"
import { Input } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setSearchRequest } from "../../store/searchRequestSlice"
import { setSearchResult } from "../../store/searchResultSlice"
import getGitHubReposList from "../../api/gitHubReposList"
import "../../styles/style.scss"

const Header: FC = () => {
    const dispatch = useDispatch()

    const getInputValue = (e: any) => {
        dispatch(setSearchRequest(e.target.value))
    }

    const inputValue = useSelector((state: any) => state.searchRequest.searchRequest)

    const onClickSearchButton = () => {
        getGitHubReposList(inputValue)
        .then(data => dispatch(setSearchResult(data)))
    }

    return (
        <header className="header">
            <Input
                className="input"
                id="search-request"
                placeholder="Введите поисковый запрос"
                type="text"
                disableUnderline={false}
                onInput={getInputValue}
            />
            <Button
                onClick={onClickSearchButton}
                className="button"
                variant="contained">
                Искать
            </Button>
        </header>
    )
}

export default Header