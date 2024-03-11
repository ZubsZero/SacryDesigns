<template>
       <div class="Navbar">
        <div class="line2">.</div>
        <div class="line3">.</div>
        <div class="line4">.</div>
        <div class="line5">.</div>
        <nav class="nav">
            <router-link to="/" class="route">Home</router-link>
            <router-link to="/about" class="route">About Us</router-link>
            <router-link to="/fashion" class="route">Africa Fashion</router-link>
            <router-link to="/jewelry" class="route">Africa Jewelry</router-link>
            <router-link to="/art" class="route">Africa Art</router-link>
            <router-link to="/decor" class="route">Home Decor</router-link>
            <router-link to="/handcraft" class="route">Handcraft</router-link>
            <router-link to="#" class="route">Coming Soon</router-link>
            <router-link to="/contact" class="route">Contact Us</router-link>
            <router-link to="/terms" class="route">T's and C's</router-link>

        </nav>
        <div class="line7">.</div>
        <div class="line8">.</div>
        <div class="line9">.</div>
        <div class="line10">.</div>
    </div>
</template>
<script>

</script>
<style scoped>
/* NavBar */
body {
    margin: 0px;
}
.Navbar {
    background-color: goldenrod !important;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 3.8rem;
}

.route {
    color: black !important;
    margin-left: 1rem;
    text-decoration: none;
}

.line2 {
    border-right: 1px solid blue;
    color: goldenrod;
    height: 5.5rem;

}
.line3 {
    border-right: 1px solid red;
    color: goldenrod;
    height: 5.5rem;

}
.line4 {
    border-right: 1px solid white;
    color: goldenrod;
    height: 5.5rem;

}
.line5 {
    border-right: 1px solid green;
    color: goldenrod;
    height: 5.5rem;
}



.line7 {
    border-right: 1px solid green;
    color: goldenrod;
    height: 5.4rem;

}
.line8 {
    border-right: 1px solid white;
    color: goldenrod;
    height: 5.4rem;

}
.line9 {
    border-right: 1px solid red;
    color:goldenrod;
    height: 5.4rem;

}
.line10 {
    border-right: 1px solid blue;
    color:goldenrod;
    height: 5.4rem;
}


</style>