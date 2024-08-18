import { FC } from "react"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import { selectDataTable } from "../../utils/selectDataTable"
import { PAGE_SIZE } from "../../utils/consts"
import "../../styles/style.scss"
import { idID } from "@mui/material/locale"
import { rowSelectionStateInitializer } from "@mui/x-data-grid/internals"

const SearchResultPage: FC = () => {

    const result = useSelector((state: any) => state.searchResult.searchResult)
    const rows = selectDataTable(result)

    const columns: GridColDef<(typeof rows)[number]>[] = [
        {
            field: 'label',
            headerName: 'Название',
            width: 200,
            editable: true,
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'language',
            headerName: 'Язык',
            width: 200,
            editable: true,
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'forksCount',
            headerName: 'Число форков',
            type: 'number',
            width: 200,
            editable: true,
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'lastUpdateDate',
            headerName: 'Дата обновления',
            type: 'number',
            width: 200,
            editable: true,
            headerAlign: 'center',
            align: 'center'
        },
    ];

    return (
        <>
            <Box sx={{ height: "100%", width: "60%" }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: PAGE_SIZE,
                            },
                        },
                    }}
                    pageSizeOptions={[PAGE_SIZE]}
                    onRowClick={() => console.log(rowSelectionStateInitializer)}
                />
            </Box>
            <div className="repos-block-data">
                <p className="repos-desc">Выберите репозиторий</p>
            </div>
        </>
    );
}

export default SearchResultPage