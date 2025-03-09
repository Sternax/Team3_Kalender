<template>
  <div class="booking">

    <!--Enter email & Name-->
    <div class="left textInputs box">
      <h2>Boka Möte</h2>
      <label for="name">Namn</label>
        <br>
        <input
          type="text"
          v-model="name"
          placeholder="Ange ditt namn"
          required
        />
        <p v-if="buttonClicked && !name" style="color: red;">
          Ange ett namn
        </p>
        <br>
      <label for="email">E-post</label>
        <br>
        <input
          type="email"
          v-model="email"
          placeholder="dig@gmail.com"
          required
        />
        <p v-if="buttonClicked && !email" style="color: red;">
          Ange en e-postadress
        </p>
        <p v-if="buttonClicked && email && !isValidEmail(email)" style="color: red;">
          Ange en giltig e-postadress
        </p>
    </div>

    <!--Book a time-->
    <div class="left box">
      <h2>Välj en tid</h2>

      <!--Message for no available times -->
      <p v-if="availableTimes.length === 0">
          Det finns inga lediga tider just nu.
      </p>
      <p v-if="availableTimes.length > 0 && !selectedTime && buttonClicked" style="color: red;">
        Du måste välja en tid att boka
      </p>
      <div v-for="(time, index) in availableTimes" :key="index">
        <input
          type="radio"
          :id="time"
          :value="time"
          v-model="selectedTime"
          :disabled="bookedTimes.includes(time)"
          class="radioTimes"
        />
        <label :for="index">
          {{ time }}
        </label>
      </div>

      <!--Booking button-->
      <div class="left box submit">
        <button
        id="book-btn"
        @click="bookTime"
        :disabled="availableTimes.length === 0">
        Boka tid
        </button>
      </div>
    </div>


    <!--Booked Times-->
    <div class="right box">
      <h2>Bokade Tider</h2>
      <ul>
        <li v-for="(booking, index) in bookedTimes" :key="index">
          {{ booking.time }} - {{ booking.name }} - {{ booking.email }}
          <button
          v-if="booking"
          class="cancel-btn"
          @click="avboka(index)">
            Avboka
          </button>
        </li>
      </ul>
      <br>
      <p v-if="bookedTimes.length === 0" style="color: #FFF;">
        Du har inga bokade tider just nu.
      </p>
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
    const buttonClicked = ref(false)
    const formSubmitted = ref(false)

    //Function to book time
    const bookTime = () => {
      buttonClicked.value = true
      formSubmitted.value = false

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

      formSubmitted.value = true
      buttonClicked.value = false
    }

    const avboka = (index) => {

      const cancelledBooking = bookedTimes.value.splice(index, 1)[0]
      availableTimes.value.push(cancelledBooking.time)

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
      name,
      buttonClicked,
      formSubmitted,
      avboka,
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

.booking {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  gap: 20px;
  margin: 70px auto 0;
  justify-content: center;
}

.left {
  grid-column: 1;

}

.right {
  grid-column: 2;
  grid-row: 1 /span 2;
}

.box {
  padding: 20px;
  background-color: #0B3B59;
  border-radius: 5px;
}

.box:not(.submit) {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.43), 0 6px 20px rgba(0, 0, 0, 0.43);
}

.submit button{
  padding: 5px;
  font-size: 18px;
}

.submit {
  text-align: center;
}

#book-btn {
  color: black;
  font-size: 16px;
  border-radius: 5px;
  background-color:#FFF;
}

#book-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background-color: gray;
}

.textInputs{
  display: flex;
  flex-direction: column;
}

.radioTimes {
  margin-right: 5px;
}

.textInputs input {
  width: 300px;
  padding: 5px;
}

 .right.box li {
  margin-left: 15px;
  margin-bottom: 20px;
  margin-top: 5px;
  list-style: none;
}

.cancel-btn {
  background-color: red;
  padding: 5px;
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.cancel-btn:hover{
  background-color: red;
  padding: 5px;
  border: none;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15), 0 12px 40px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}

@media(max-width: 955px){
  .booking {
    display: grid;
    grid-template-columns: 1fr;
    width: 80%;
    gap: 20px;
    margin: 20px auto 0;
  }

  .left {
    grid-column: 1;

  }

  .right {
    grid-column: 1;
    grid-row: 1;
  }
}


</style>
