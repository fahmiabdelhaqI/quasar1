<template>
  <q-page padding >
    <input
     v-model= "message"
     @keyup= "handleKeyup"
     />
    <button @click="clearMessage"> clear </button>
    <h5 v-if="message.length"> {{message}}</h5>
    <h6 v-else>No massage</h6>

    <p>{{uppercaseMessage()}}</p>
  </q-page>
</template>


<script>
export default {
 
 data() {
   return {
   message: ''

   }
  },
  
  methods: {
    clearMessage(){
      this.message=''
    },
    handleKeyup(e){
      if(e.keyCode == 27 ){
        this.message = 'ESC'
      }
    },
   uppercaseMessage() {
      return this.message.toUpperCase()
    }
  }
}
</script>
