import { FC } from "react"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { Box } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { selectDataTable } from "../../utils/selectDataTable"
import { PAGE_SIZE } from "../../utils/consts"
import { setRowData } from "../../store/rowDataSlice"
import RepoInformation from "../../compounds/RepoInformation/RepoInformation"
import "../../styles/style.scss"

const SearchResultPage: FC = () => {
    const dispatch = useDispatch()

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
            <div className="result-block">
                <p className="result-desc">Результаты поиска</p>
                <Box sx={{ height: "100%", width: "100%" }}>
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
                        onRowClick={(row) => dispatch(setRowData(row.row))}
                    />
                </Box>
            </div>
            <RepoInformation />
        </>
    );
}

export default SearchResultPage