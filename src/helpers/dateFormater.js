export const dateFormat = (unixTimeFormat) => {
    const milliseconds = unixTimeFormat * 1000
    const FORMATER_CONFIG = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    }
    return Intl.DateTimeFormat('en-US', FORMATER_CONFIG).format(milliseconds)
}

export const timeFormat = (unixTimeFormat) => {
    const milliseconds = unixTimeFormat * 1000
    const FORMATER_CONFIG = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    }
    return Intl.DateTimeFormat('en-US', FORMATER_CONFIG).format(milliseconds)
}