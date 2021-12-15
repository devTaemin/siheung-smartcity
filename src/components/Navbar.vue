<template>
    <div class="Navbar" id="myTopnav">
        <div class="Navbar__logo">
            <a href="/">Smartcity</a>
        </div>
        <div class="Navbar__route">
            <a class="Navbar__route-link active" href="/">Home</a>
            <a class="Navbar__route-link" href="/about">About</a>
            <a class="Navbar__route-link" href="/">Testbeds</a>
            <a class="Navbar__route-link" href="/">Hackathon</a>
        </div>
    </div>
</template>


<script>
export default ({
    name: 'Navbar',
    methods: {
        
    }
})
</script>


<style>
    .Navbar {
        box-sizing: border-box;
        /* border: solid red; */

        padding: 10px;
        max-width: 1680px;
        width: 100%;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        z-index:4;
    }

    .Navbar__logo {
        box-sizing: border-box;
        width: 50%;
    }

    .Navbar__logo a {
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: 700;
        color: black;
    }

    .Navbar__route {
        box-sizing: border-box;
        width: 50%;
        display: flex;
        justify-content: flex-end;
    }

    .Navbar__route-link {
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: 700;
        color:black;
        margin: auto 20px;
        opacity: 0.6;
    }

    .Navbar__route-link:target {
        color: red;
        opacity: 1.0;
    }

    .Navbar__route-link:hover {
        color: #6fd6ff;
    }

    .active {
        opacity: 1.0;
    }
</style>
