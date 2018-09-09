<template>
    <div class="login-bgc">
      <div class="center">
        Sss
      </div>
      <div class="login">
        <div class="button start">开始</div>
        <div class="button login">登录</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="scss">
  .login-bgc{
    height:100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: #eee;
    .center{
      margin:auto;
      padding-top:30px;
      border-radius: 90px;
      height:90px;
      width: 90px;
    }
    .login{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .button{
        width: 75%;
        height: 30px;
        line-height: 30px;
      }
      .start{
        background-color: red;
      }
      .login{
        background-color: #fff;
      }
    }
  }

</style>
