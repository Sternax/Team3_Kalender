<template>
  <h1>Boka Möte</h1>
  <div class="booking">
    <!--Enter email & Name-->
    <div class="left textInputs">
      <label for="name">Namn</label>
      <br />
      <input type="text" v-model="name" placeholder="Ange ditt namn" required />
      <br />
      <label for="email">E-post</label>
      <br />
      <input
        type="email"
        v-model="email"
        placeholder="dig@gmail.com"
        required
      />
      <p v-if="email && !isValidEmail(email)" style="color: red">
        Ange en giltig mejladress
      </p>
    </div>

    <!--Book a time-->
    <div class="left">
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
    <div class="left">
      <button
        id="book-btn"
        @click="bookTime"
        :disabled="!selectedTime || !isValidEmail(email) || !email"
      >
        Boka tid
      </button>
    </div>

    <!--Booked Times-->
    <div class="right">
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
import { ref } from "vue";

export default {
  setup() {
    const email = ref("");
    const availableTimes = ref(["9:00", "9:30", "10:00"]);
    const selectedTime = ref(null);
    const bookedTimes = ref([]);

    //Function to book time
    const bookTime = () => {
      bookedTimes.value.push(selectedTime.value);

      availableTimes.value = availableTimes.value.filter(
        (time) => time !== selectedTime.value
      );

      //Reset form values
      email.value = "";
      selectedTime.value = null;
    };

    const isValidEmail = (email) => {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
    };

    return {
      email,
      availableTimes,
      selectedTime,
      bookedTimes,
      bookTime,
      isValidEmail,
    };
  },
};
</script>

<style scoped>
h1 {
  margin-top: 50px;
}

.booking {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
}

.left {
  margin-left: 20px;
}

.right {
  grid-column: 2;
  grid-row: 1 / span 3;
}

#book-btn {
  color: black;
  font-size: 16px;
  border-radius: 5px;
  background-color: #fff;
}

.textInputs {
  display: flex;
  flex-direction: column;
}

.textInputs input {
  width: 300px;
}
</style>
