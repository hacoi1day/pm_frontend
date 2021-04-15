<template>
  <b-card
      header="Lịch làm việc"
      header-tag="header"
    >
    <FullCalendar :options="calendarOptions" />
  </b-card>
</template>

<script>
import FullCalendar from '@fullcalendar/vue';
import viLocale from '@fullcalendar/core/locales/vi';
import dayGridPlugin from '@fullcalendar/daygrid';

export default {
  name: 'check-in',
  components: {
    FullCalendar,
  },
  data () {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin ],
        initialView: 'dayGridMonth',
        locales: [ viLocale ],
        locale: 'vi'
      }
    }
  }
}
</script>

<style>

</style>