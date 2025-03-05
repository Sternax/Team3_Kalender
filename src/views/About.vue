<template>
    <h1>Om oss</h1>
    <p>
        Tanken bakom projektet var att skapa en kalender som skulle göra det
        enkelt för användarna att planera sina dagar.
    </p>
    <section class="team">
        <div class="card">
            <h2>Alexander</h2>
            <a href="">Github</a>
        </div>
        <div class="card">
            <h2>Max</h2>
            <a href="">Github</a>
        </div>
        <div class="card">
            <h2>Axel</h2>
            <a href="">Github</a>
        </div>
        <div class="card">
            <h2>Anton</h2>
            <a href="">Github</a>
        </div>
        <div class="card">
            <h2>Jesper</h2>
            <a href="">Github</a>
        </div>
    </section>
</template>

<style scoped>
section.team {
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

h2 {
    margin: 0;
}

a {
    background-color: #145e8c;
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    margin-top: 2rem;
    display: inline-block;
}
</style>
