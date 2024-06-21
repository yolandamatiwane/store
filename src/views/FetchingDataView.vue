<template>
    <div>
        <!-- {{ $store.state.aboutMe }} -->
          Projects
        <div v-for="project in projectData()" :key="project.name">
            <h1>{{ project.name }}</h1>
        </div>
        
    </div>
</template>
<script>
export default {
    methods:{
        projectData(){
            return this.$store.state.projects
        }
    },
    computed:{
        getAboutMe(){
            // accessing store//dispatch==access actions
            return this.$store.dispatch('getAboutMe')
        }
    },
    mounted() {
        this.getAboutMe
    },
}
</script>
<style>
    
</style>