<script setup>
import { ScheduleXCalendar } from "@schedule-x/vue";
import { createEventModalPlugin } from "@schedule-x/event-modal";
// import { createEventsServicePlugin } from "@schedule-x/events-service";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createCurrentTimePlugin } from "@schedule-x/current-time";
import {
  createCalendar,
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import "@schedule-x/theme-default/dist/index.css";

//Hämta dagens datum (YYYY-MM-DD)
const date = new Date();
let currentDate = date.toJSON().slice(0, 10);

// const eventsServicePlugin = createEventsServicePlugin();
const eventModal = createEventModalPlugin();

const calendarApp = createCalendar({
  selectedDate: `${currentDate}`, // Hämtar dagens datum från funktionen ovan och sätter det som datumet som visas i kalendern
  views: [
    createViewDay(),
    createViewWeek(),
    createViewMonthGrid(),
    createViewMonthAgenda(),
  ],
  plugins: [
    eventModal,
    createDragAndDropPlugin(),
    createCurrentTimePlugin({
      fullWeekWidth: true,
    }),
  ],
  events: [
    {
      id: 1,
      title: "Fredagsmöte",
      start: "2025-02-28 10:00",
      end: "2025-02-28 11:30",
    },
    {
      id: 2,
      title: "Sprintplanering",
      start: "2025-03-03 12:00",
      end: "2025-03-03 13:00",
    },
  ],
});

eventModal.close();
</script>

<template>
  <div>
    <ScheduleXCalendar :calendar-app="calendarApp"> </ScheduleXCalendar>
  </div>
</template>

<style scoped>
.sx-vue-calendar-wrapper {
  width: 1200px;
  max-width: 100vw;
  height: 800px;
  max-height: 90vh;
  margin-top: 50px;
}

@media screen and (max-width: 768px) {
  .sx-vue-calendar-wrapper {
    margin-top: 80px;
    width: 100%;
    height: 600px;
  }
}
</style>
