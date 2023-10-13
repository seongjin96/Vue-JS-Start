<template>
  <!-- .prevent: submit 이벤트의 기본적인 동작을 막는다 -->
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  // Component단위로 개발시에 Component간의 데이터가 공유되지 않게 function을 연결해 새 객체를 리턴해준다
  data: function() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submitForm: function() {
      // form은 정보를 제출하고 해당 페이지로 넘어가는 특성이 있기 때문에 그걸 막기 위해서 이벤트 인자를 받아 다음과 같이 선언한다
      // event.preventDefault();
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}
</script>

<style>

</style>