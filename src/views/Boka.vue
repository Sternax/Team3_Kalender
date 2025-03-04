<template>
  <h2>Boka Möte</h1>
  <div class="booking">

    <!--Enter email & Name-->
    <div class="left textInputs box">
      <label for="name">Namn</label>
        <br>
        <input
          type="text"
          v-model="name"
          placeholder="Ange ditt namn"
          required
        />
        <p v-if="!name" style="color: red;">
          Ange ett namn
        </p>
        <br>
      <label for="email">Email</label>
        <br>
        <input
          type="email"
          v-model="email"
          placeholder="dig@gmail.com"
          required
        />
        <p v-if="!email" style="color: red;">
          Ange en e-postadress
        </p>
        <p v-if="email && !isValidEmail(email)" style="color: red;">
          Ange en giltig e-postadress
        </p>
    </div>

    <!--Book a time-->
    <div class="left box">
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

    <!--Booking button-->
    <div class="left box">
      <button id="book-btn" @click="bookTime" :disabled="!selectedTime || !isValidEmail(email) || !email || !name">
        Boka tid
      </button>
    </div>

    <!--Booked Times-->
    <div class="right box">
      <h2>Bokade Tider</h2>
      <ul>
        <li v-for="(booking, index) in bookedTimes" :key="index">
          {{ booking.time }} - {{ booking.name }} - {{ booking.email }}
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
    const name = ref('')

    //Function to book time
    const bookTime = () => {
      if (!selectedTime.value || !email.value || !name.value || !isValidEmail(email.value)) {
        return 
      }

      //Pushing the inputs to the booked times array
      bookedTimes.value.push({
        name: name.value,
        email: email.value,
        time: selectedTime.value
      })

      availableTimes.value = availableTimes.value.filter(
        (time) => time !== selectedTime.value
      )

      //Reset form values
      email.value = ''
      name.value = ''
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
      isValidEmail,
      name
    }

  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  margin-top: 100px;
}

.booking {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  gap: 10px;
  margin: auto;
}

.left {
  grid-column: 1;

}

.right {
  grid-column: 2;
  grid-row: 1 /span 3
}

.box {
  padding: 20px;
  background-color: #146A8C;
}

#book-btn {
  color: black;
  font-size: 16px;
  border-radius: 5px;
  background-color:#FFF;
}

.textInputs{
  display: flex;
  flex-direction: column;
}

.textInputs input {
  width: 300px;
}
</style>