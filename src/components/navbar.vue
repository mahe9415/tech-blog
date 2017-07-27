<template>
	<div class="col-12 container">
    <!-- <verify v-if="!is_verify"></verify> -->
            <ul class="nav text-center sticky">
                <router-link tag="li" to="/android" exact active-class="active" class="col-auto col-md-auto nav-item stick">
                <a class="nav-link" href="#" onclick="scrl()"> Android</a>
                </router-link>
                <router-link tag="li" to="/web" active-class="active" class="col-auto col-md-auto nav-item stick">
                <a class="nav-link" href="#" onclick="scrl()"> Web</a>
                </router-link>
                <router-link tag="li" to="/Backend" active-class="active" class="col-auto col-md-auto nav-item stick">
                <a class="nav-link" href="#" onclick="scrl()">Backend</a>
                </router-link>
    </ul>
        </div>
</template>
<script>
	
</script>
<style scoped>
	

</style>