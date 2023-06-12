export function dateFormatter(inputDate: Date) {
    const dateOrigin = inputDate
    const date = new Date(dateOrigin)
    const formattedDate = date.toLocaleString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric'})
    return formattedDate
}