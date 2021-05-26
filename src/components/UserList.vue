<template>
<div>
<input type="text" v-model="filters.search"/>
<div class="row">
   <div class='col-4' v-for='user in filteredUsers' :key='user.id.value' @click="goToUserDetails(user.id.value)">
     {{user.name.first}}
     <img :src='user.picture.large'/>
   </div>
</div>
</div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: 'UserList',
  props: {
  },
  methods: {
    goToUserDetails(id){
      console.log('id', id)
      this.$router.push(`/user/${id}`)
      this.getRandomUser(id)
    },
    ...mapActions([
    'getRandomUser',
])
  },
  computed: {
    ...mapState(['filters']),
    ...mapGetters(['filteredUsers'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
