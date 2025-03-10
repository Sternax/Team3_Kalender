<template>
  <h1>Om oss</h1>
  <p>
    Tanken bakom projektet var att skapa en användarvänlig kalender som
    underlättar planeringen av användarnas dagliga aktiviteter. Genom nära
    samarbete och kontinuerliga förbättringar har vi utvecklat en intuitiv och
    tillgänglig lösning som möter användarnas behov.
  </p>
  <section>
    <h2>Vårt team</h2>
    <div class="team">
      <div class="card">
        <h3>Alexander</h3>
        <p>Frontend-utvecklare</p>
        <a href="">Github</a>
      </div>
      <div class="card">
        <h3>Max</h3>
        <p>Frontend-utvecklare</p>
        <a href="">Github</a>
      </div>
      <div class="card">
        <h3>Axel</h3>
        <p>Frontend-utvecklare</p>
        <a href="">Github</a>
      </div>
      <div class="card">
        <h3>Anton</h3>
        <p>Frontend-utvecklare</p>
        <a href="">Github</a>
      </div>
      <div class="card">
        <h3>Jesper</h3>
        <p>Frontend-utvecklare</p>
        <a href="">Github</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 1rem 0;
}

h2 {
  font-size: 1.75rem;
}

.team {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.card {
  padding: 1rem;
  border: 1px solid #ffffff16;
  border-radius: 5px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

h3 {
  margin: 0;
  font-size: 1.25rem;
}

a {
  background-color: #192236;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-top: 2rem;
  display: inline-block;
}
</style>
