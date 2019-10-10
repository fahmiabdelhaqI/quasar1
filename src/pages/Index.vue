<template>
  <q-page padding >
    <input
     v-model= "message"
     @keyup= "handleKeyup"
     />
    <button @click="clearMessage"> clear </button>
    <h5> {{message}}</h5>
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
    }
  }
}
</script>
