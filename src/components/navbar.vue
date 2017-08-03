<template>
	<div class="col-12 orange navWrap">
    <!-- <verify v-if="!is_verify"></verify> -->
            <ul class="nav text-center sticky">
                <router-link tag="li" to="/Android" exact active-class="active" class="col-auto col-md-auto nav-item stick">
                <a class="nav-link" href="#"> Android</a>
                </router-link>
                <router-link tag="li" to="/Web" active-class="active" class="col-auto col-md-auto nav-item stick">
                <a class="nav-link" href="#"> Web</a>
                </router-link>
                <router-link tag="li" to="/Backend" active-class="active" class="col-auto col-md-auto nav-item stick">
                <a class="nav-link" href="#">Backend</a>
                </router-link>
    </ul>
        </div>
</template>
<script>
	
</script>
<style scoped>
.navWrap{
    background: gray;
    margin: 0;
    padding: 2%;
}
ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
}
li{
margin: auto 20px;
}
.active{
    color:#FF9800;
}
a{
    color:inherit;
    text-decoration: none;
}

</style>