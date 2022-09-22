<script>

</script>

<template>
    <header id="header-container">
        <div class="header-subcontainer">
            <div class="header-logo">
                <h1>Logo</h1>
                <img src="" alt="">
            </div>
            <nav class="header-navbar">
                <ul>
                    <li><router-link to="">Quem somos</router-link></li>
                    <li><router-link to="">Recursos</router-link></li>
                    <li><router-link to="">Aprenda sobre finanças</router-link></li>
                </ul>
            </nav>
            <div class="header-buttons">
                <div class="header-btn-1">
                    <button>Cadastrar-se</button>
                </div>
                <div class="header-btn-2">
                    <button>Login</button>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
    #header-container {
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: var(--color-1);
    }

    .header-subcontainer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        max-width: 1600px;
        width: 100%;
    }

    .header-navbar ul {
        list-style-type: none;
    }

    .header-buttons {
        display: flex;
        width: auto;
    }

    .header-buttons div button {
        padding: 10px 20px;
    }
</style>
