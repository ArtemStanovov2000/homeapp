import { FC } from "react"
import { useSelector } from "react-redux"
import ForksStar from "../../images/ForksStar"
import "../../styles/style.scss"

const RepoInformation: FC = () => {
    const rowData = useSelector((state: any) => state.rowData.rowData)
    console.log(rowData)

    return (
        <article className="repos-block-data">
            {rowData === ""
                ?
                <p className="repos-desc">Выберите репозиторий</p>
                :
                <div className="repos">
                    <p className="repos-label">{rowData.label}</p>
                    <div className="repos-label">
                        <div className="repos-data-box">
                            <p className="repos-language">{rowData.language}</p>
                            <div className="forks-block">
                                <ForksStar />
                                <p className="repos-data">{rowData.forksCount}</p>
                            </div>
                        </div>
                        <p className="repos-data">{rowData.license === null ? "нет" : rowData.license}</p>
                    </div>
                </div>
            }
        </article>
    )
}

export default RepoInformation