import { createStore } from 'vuex'

export default createStore({
  state: {
    // stores data
    education:null,
    about:null,
    projects:null,
    workExp:null,
    testimonials:null,
    skills:null,
  },
  getters: {
    // used to change or update state
  },
  mutations: {
    setAboutMe(state,payload){
      state.aboutMe= payload
    },
    setEducation(state,payload){
      state.education= payload
    },
    setProjects(state,payload){
      state.projects= payload
    },
    setWorkExp(state,payload){
      state.workExp= payload
    },
    setSkills(state,payload){
      state.skills= payload
    },
    setTestimonials(state,payload){
      state.testimonials= payload
    }
    
  },
  actions: {
    // run all async code
    // dispatching
    // async getAboutMe(context){
    //   let fetchedInfo = await fetch('https://yolandamatiwane.github.io/first_api/data/')
    //   let converted = await fetchedInfo.json()
    //   context.commit('setAboutMe',converted.aboutMe)
    //   console.log(converted)
    // }
    // shortcut below
    async getAboutMe({commit}){
      let fetchedInfo = await fetch('https://yolandamatiwane.github.io/first_api/data/')
      let data = await fetchedInfo.json()
      // dependant on json file //this is a comment
      let {aboutMe,projects,education,skills,workExp,testimonials} = data
      commit('setAboutMe',aboutMe)
      commit('setProjects',projects)
      commit('setEducation',education)
      commit('setSkills',skills)
      commit('setWorkExp',workExp)
      commit('setTestimonials',testimonials)
      
    }
  },
  modules: {
  }
})
