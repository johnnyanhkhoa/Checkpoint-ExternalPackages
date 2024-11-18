dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

function updateTime() {
    const userTimezone = dayjs.tz.guess();
    const currentTime = dayjs().tz(userTimezone).format('YYYY-MM-DD HH:mm:ss');
    const currentDate = dayjs().tz(userTimezone).format('dddd, MMMM D, YYYY');

    document.getElementById('timezone').textContent = `Timezone: ${userTimezone}`;
    document.getElementById('time').textContent = currentTime;
    document.getElementById('date').textContent = currentDate;
}

setInterval(updateTime, 1000);
updateTime();
