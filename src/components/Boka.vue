<template>
  <div>
    <h1>Boka Möte med Richard</h1>

    //Enter email
    <div>
      <label for="email">Ange ditt Mejl</label>
      <input
        type="email"
        v-model="email"
        placeholder="dig@gmail.com"
        required
      />
      <p v-if="email && !isValidEmail(email)" style="color: red;">
      Ange en giltig mejladress
      </p>
    </div>

    //Book a time
    <div>
      <h2>Välj en tid</h2>
      <div v-for="(time, index) in availableTimes" :key="index">
        <input
          type="radio"
          :id="time"
          :value="time"
          v-model="selectedTime"
          :disabled="bookedTimes.includes(time)"
        />
        <label :for="index">
          {{ time }}
        </label>
      </div>
    </div>

    //Booking button
    <div>
      <button @click="bookTime" :disabled="!selectedTime || !isValidEmail(email) || !email">
        Boka tid
      </button>
    </div>

    //Booked Times
    <div>
      <h2>Bokade Tider</h2>
      <ul>
        <li v-for="(time, index) in bookedTimes" :key="index">
          {{ time }}
        </li>
      </ul>
    </div>


  </div>
</template>


<script>
import { ref } from 'vue'

export default {
  setup() {
    const email = ref('')
    const availableTimes = ref(["9:00", "9:30", "10:00"])
    const selectedTime = ref(null)
    const bookedTimes = ref([])

    //Function to book time
    const bookTime = () => {
      bookedTimes.value.push(selectedTime.value)

      availableTimes.value = availableTimes.value.filter(
        (time) => time !== selectedTime.value
      )

      //Reset form values
      email.value = ''
      selectedTime.value = null
    }

    const isValidEmail = (email) => {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
      return re.test(email)
    }

    return {
      email,
      availableTimes,
      selectedTime,
      bookedTimes,
      bookTime,
      isValidEmail
    }

  }
}
</script>

<style scoped></style>
