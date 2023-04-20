export const convertirFecha = (fecha, formato) => {
    const newDate = new Date(fecha);
    const convertTimeZone = Intl.DateTimeFormat("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }).format(new Date(newDate));

    const convertDate = new Date(convertTimeZone);
    const day = convertDate.getDay();
    const validDate = convertDate.getDate();
    const date = validDate > 9 ? validDate : `0${validDate}`;
    const validHours = convertDate.getHours();
    const hours = validHours > 9 ? validHours : `0${validHours}`;
    const validMinutes = convertDate.getMinutes();
    const minutes = validMinutes > 9 ? validMinutes : `0${validMinutes}`;
    const validSeconds = convertDate.getSeconds();
    const seconds = validSeconds > 9 ? validSeconds : `0${validSeconds}`;
    const validMonth = convertDate.getMonth() + 1;
    const month = validMonth > 9 ? validMonth : `0${validMonth}`;
    const year = convertDate.getFullYear();

    const months = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];
    const days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    // console.log("test", dateFormat(newDate, "mmmm dS, yyyy, hh:MM"));

    if (formato === "long") {
        return `${days[day]} ${date} de ${months[month - 1]} del ${year}`.toLowerCase();
    } else if (formato === "semi-long") {
        return `${date} de ${months[month - 1]} del ${year}`.toLowerCase();
    } else if (formato === "short") {
        return `${date} ${months[month - 1].substring(0, 3)} ${year} | ${newDate.getHours()}:${minutes} h`;
    } else if (formato === "shortSection") {
        return `${hours}:${minutes} | ${date}/${month}/${year}`;
    } else if (formato === "shortHumor") {
        return `${days[day]} ${date}/${month}/${year}`;
    } else if (formato === "iso") {
        return newDate.toISOString();
    } else if (formato === "iso-2") {
        // 1997‑07‑16T19:20+01:00-05:00
        return `${year}-${month}-${date}T${hours}:${minutes}:${seconds}-05:00`;
    } else if (formato === "iso-sitemap") {
        // 1997‑07‑16T19:20+01:00-05:00
        return `${year}/${month}/${date}`;
    } else if (formato === "iso-global"){
        const fomattedDate = `${year}-${month}-${date}T${hours}:${minutes}:${seconds}-05:00`;
        return new Date(fomattedDate).toISOString().replace(".000Z","-00:00")
    } else if (formato === "iso-global-rss"){
        const fomattedDate = `${year}-${month}-${date}T${hours}:${minutes}:${seconds}-05:00`;
        return new Date(fomattedDate).toUTCString().replace("GMT","+0000");
    } else {
        return newDate.toDateString();
    }
};

export const convertirFechaSSR = (fecha) => {
    const selectedDate = new Date(fecha);
    const newDate = Date.parse(selectedDate + "300");
    return Intl.DateTimeFormat("en-US", {
        timeZone: "America/Lima",
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }).format(newDate);
};

export const dateFormat = (function () {
    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone =
            /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function (val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) val = "0" + val;
            return val;
        };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length === 1 && Object.prototype.toString.call(date) === "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date();
        if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) === "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        var _ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d: d,
                dd: pad(d),
                ddd: dF.i18n.dayNames[D],
                dddd: dF.i18n.dayNames[D + 7],
                m: m + 1,
                mm: pad(m + 1),
                mmm: dF.i18n.monthNames[m],
                mmmm: dF.i18n.monthNames[m + 12],
                yy: String(y).slice(2),
                yyyy: y,
                h: H % 12 || 12,
                hh: pad(H % 12 || 12),
                H: H,
                HH: pad(H),
                M: M,
                MM: pad(M),
                s: s,
                ss: pad(s),
                l: pad(L, 3),
                L: pad(L > 99 ? Math.round(L / 10) : L),
                t: H < 12 ? "a" : "p",
                tt: H < 12 ? "am" : "pm",
                T: H < 12 ? "A" : "P",
                TT: H < 12 ? "AM" : "PM",
                Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + (Math.abs(o) % 60), 4),
                S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (((d % 100) - (d % 10) !== 10) * d) % 10],
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
})();

dateFormat.masks = {
    default: "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
};

dateFormat.i18n = {
    dayNames: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ],
    monthNames: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
};
