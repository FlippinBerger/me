<template>
    <div class='wrapper'>
        <!-- attempt at a select box solution -->
        <!-- <select class='green'> -->
        <!--     <option value='personal'>Personal</option>  -->
        <!--     <option value='open-source'>Open Source</option>  -->
        <!-- </select> -->
        <nav class='navbar'>
            <!-- <button>Open Source</button> -->
            <!-- <button>Personal</button> -->
            <h2>Open Source</h2>
            <h2>Personal</h2>
        </nav>

    </div>
</template>

<style scoped>
.navbar {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    gap: 2;
}

select {
    outline: none;
    background-color: transparent;
    border: none;
    font-size: x-large;
}

.wrapper {
    width: 100%;
}

.types {
    margin: 32px 0;
    display: flex;
    justify-content: space-between;
}
</style>
