/**
 * 日期格式化
 * @param date 需要格式化的日期时间
 * @param formatStr 格式
 * @returns 格式化后的字符串
 */
function format(date: Date, formatStr: string): string {
    let str = formatStr.replace(/YYYY-|MM-|mm-|DD|dd|HH:|hh:|mm:|ss/g, function (match): string {
        switch (match) {
            case 'YYYY-':
                return date.getFullYear().toString() + "-";
            case 'MM-':
                return (date.getMonth() + 1).toString().padStart(2, '0') + "-";
            case 'mm-':
                return (date.getMonth() + 1).toString() + "-";
            case 'DD':
                return date.getDate().toString().padStart(2, '0');
            case 'dd':
                return date.getDate().toString();
            case 'HH:':
                return date.getHours().toString().padStart(2, '0') + ":";
            case 'hh:':
                return date.getHours().toString() + ":";
            case 'mm:':
                return date.getMinutes().toString().padStart(2, '0') + ":";
            case 'ss':
                return date.getSeconds().toString().padStart(2, '0');
        }
        return "";
    })
    return str;
}

export default {
    format
}