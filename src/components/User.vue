<template>
    <div>
        {{randomUser.name.first}}
    </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
  name: 'UserList',
  props: {
  },
  computed: {
    ...mapState(['randomUser']),
  },
  created(){
      console.log('user from view', this.randomUser)
  }
}
</script>
<style>
    
</style>