// Возвращает данные для элемента DataGrid в виде массива из ответа сервера GitHub
export const selectDataTable = (result: Array<object>) => {
    const rowsData: Array<object> = []
    if (result.length > 0) {
        result.forEach((element: any, index: number) => {
            rowsData.push({
                id: index,
                label: element.name,
                language: element.language,
                forksCount: element.forks_count,
                lastUpdateDate: element.updated_at,
                description: element.description,
                license: element.license
            })
        });
    }
    return rowsData
}