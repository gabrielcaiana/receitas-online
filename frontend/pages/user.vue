<template>
  <nuxt-child></nuxt-child>
</template>

<script>
export default {
  name: 'UserPages',
  middleware: 'auth',
}
</script>
