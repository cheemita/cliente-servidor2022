function getOffset(currentPage = 1, listPerPage){
    return (currentPage - 1) * [listPerPage];

}

function emptyOrRows(rows) {
    if(!row) {
        return [];
    }

    return rows;
}

module.exports = {
    getOffset, emptyOrRows
}