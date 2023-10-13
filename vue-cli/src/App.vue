<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- Vue.js 공식 스타일 가이드에 나와 있는 컴포넌트 명명법 종류 -->

    <!-- VisualStudioCode의 파일 바로가기의 기능을 활용하려면 아래 컴포넌트 명명법을 따라야 한다 -->
    <hello-world></hello-world>
    <!-- 파스칼 케이스(단어가 연결될때마다 단어의 첫 글자를 대문자로) -->
    <HelloWorld></HelloWorld>
    <!-- 조금 더 진보된 파스칼 케이스 -->
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  // 인스턴스 옵션 속성 or 컴포넌트 옵션 속성
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
