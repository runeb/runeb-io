import {parseISO, format} from "date-fns"

const defaultFormat = "dd MMMM yyyy";

export const formatDateTime = (dateStr, formatStr = defaultFormat) => format(parseISO(dateStr), formatStr)