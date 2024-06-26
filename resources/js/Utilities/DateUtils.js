import moment from 'moment';

export function useDateUtils() {
    function formatDate(date, format = 'YYYY-MM-DD') {
        return moment(date).format(format);
    }

    function formatDateTime(dateTime, format = 'YYYY-MM-DD HH:mm:ss') {
        return moment(dateTime).format(format);
    }

    return {
        formatDate,
        formatDateTime
    };
}