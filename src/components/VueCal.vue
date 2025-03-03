<script setup>
import { VueCal } from "vue-cal";
import { ref } from "vue";
import "vue-cal/style.css";

//Skapa nya events och lägg till i kalendern
const eventTitle = ref("");
const eventStart = ref("");
const eventEnd = ref("");

const vuecalRef = ref(null);
const createEvent = () => {
  vuecalRef.value.view.createEvent({
    title: eventTitle.value,
    start: new Date(eventStart.value),
    end: new Date(eventEnd.value),
  });
};
</script>
<template>
  <div id="eventForm">
    <input
      class="eventTitle"
      type="text"
      v-model="eventTitle"
      placeholder="Event Title"
    />
    <input class="eventTime" type="datetime-local" v-model="eventStart" />
    <input class="eventTime" type="datetime-local" v-model="eventEnd" />
    <button @click="createEvent">Add Event</button>
  </div>
  <div>
    <vue-cal dark editable-events :events="events" ref="vuecalRef" />
  </div>
</template>
<style scoped>
/* CSS för dekstopvy av kalendern */
.vuecal {
  height: 600px;
  width: 1500px;
  margin-top: 60px;
  margin-bottom: 60px;

  --vuecal-primary-color: #0b3b59;
  --vuecal-base-color: #268ea6;
}

/* CSS för desktopvy av AddEvent-funktion/formulär */
#eventForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.eventTitle {
  margin-bottom: 10px;
}
.eventTime {
  margin-bottom: 10px;
}
</style>
