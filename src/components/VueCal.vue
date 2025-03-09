<script setup>
import { VueCal } from "vue-cal";
import { ref } from "vue";
import "vue-cal/style.css";

//Mobileview dropdown
const isFormHidden = ref(true);
const toggleForm = () =>{
  isFormHidden.value = !isFormHidden.value;
}

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
  <div id="calendarWrapper">

    <button id="mobileDropdownButton" @click="toggleForm">
      Lägg Till Event &#9660;
    </button>

    <div id="eventForm" :class="{'hidden': isFormHidden}">
      <div id="calendarWelcome">
        <h3>Välkommen till TimeTide!</h3>
        <p>Boka möten, planera evenemang och håll koll på ditt schema med hjälp av vår smidiga och användarvänliga kalender!</p>
      </div>
      <input
        class="eventTitle"
        type="text"
        v-model="eventTitle"
        placeholder="Eventnamn &#128197"
      />
      <input class="eventTime" type="datetime-local" v-model="eventStart" />
      <input class="eventTime" type="datetime-local" v-model="eventEnd" />
      <button id="eventBtn" @click="createEvent">Lägg Till Event</button>
    </div>

    <div>
      <vue-cal
        locale="sv"
        dark
        editable-events
        :events="events"
        ref="vuecalRef"
        :views="['day', 'week', 'month', 'year']"
      />
    </div>
</div>
</template>
<style scoped>
/* CSS för dekstopvy av kalendern */
.vuecal {
  height: 600px;
  width: 1000px;
  margin-top: 60px;
  margin-bottom: 60px;

  --vuecal-primary-color: #0b3b59;
  --vuecal-secondary-color: #071826;
  --vuecal-base-color: white;
  background-color: #071826;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

#mobileDropdownButton {
  display: none;
  width: 100%;
  padding: 10px;
  background-color: #0b3b59;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
}

.hidden {
  display: none;
}

#calendarWrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 300px;
}

/* CSS för desktopvy av AddEvent-funktion/formulär */
#eventForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #071826;
  width: 250px;
  margin-right: 30px;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

#calendarWelcome{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  margin-bottom: 20px;
}

#calendarWelcome h3 {
  text-align: center;
  margin-bottom: 0;
}

#calendarWelcome p {
  text-align: center;
  margin-top: 5px;
}

.eventTitle {
  margin-bottom: 10px;
  padding: 10px;
  width: 200px;
  background-color: #242424;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
}
.eventTime {
  margin-bottom: 10px;
  width: 200px;
  padding: 10px;
  background-color: #242424;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
}

#eventBtn {
  padding: 10px;
  margin-top: 10px;
  width: 60%;
  background-color: #0B3B59;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  /* CSS för mobilvy av kalendern */
  .vuecal {
    height: 600px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  #mobileDropdownButton {
    display: block;
    border-radius: 5px;
    margin-top: 20px;
    background-color: #0b3b59;
  }



  #calendarWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 0px;
  }

  #calendarWelcome h3{
    font-size: 1.4em;
    margin-bottom: 10px;
  }

  /* CSS för mobilvy av AddEvent-funktion/formulär */
  #eventForm {
    margin: 0 auto;
    margin-top: 20px;
    display: none;
  }

  #eventForm.hidden{
    display: none;
  }

  #eventForm:not(.hidden){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #071826;
    width: 80%;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }

  .eventTitle {
    margin-bottom: 8px;
    width: 80%;
  }
  .eventTime {
    margin-bottom: 8px;
    width: 80%;
  }
}
</style>
