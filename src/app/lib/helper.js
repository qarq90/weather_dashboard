export const convertTimestampToNormalTime = (timestamp) => {

    const timestampSeconds = timestamp * 1000;
    const date = new Date(timestampSeconds * 1000);

    const hours = date.getHours() % 12 || 12;
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const meridiem = date.getHours() < 12 ? 'AM' : 'PM';

    return `${hours}:${minutes} ${meridiem}`;
}

export function convertTimezoneToGMTPlus(timezoneOffsetInSeconds) {

    const timezoneOffsetInHours = timezoneOffsetInSeconds / 3600;

    const hours = Math.floor(Math.abs(timezoneOffsetInHours));
    const minutes = Math.floor((Math.abs(timezoneOffsetInHours) - hours) * 60);

    const gmtSign = timezoneOffsetInHours >= 0 ? '+' : '-';

    return `GMT${gmtSign}${hours}:${minutes.toString().padStart(2, '0')}`;
}