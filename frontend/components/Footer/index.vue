<template>
  <footer
    class="flex flex-col items-center justify-center py-10 bg-white mt-10 shadow-md shadow-gray-500"
  >
    <p class="font-body text-gray-500 text-center mb-4">
      Desenvolvido por <span class="font-bold">Gabriel Caiana</span>
    </p>

    <div class="flex gap-4">
      <a target="_blank" href="https://www.linkedin.com/in/gabrielcaiana">
        <Icon name="linkedin" color="#ef4444" />
      </a>
      <a target="_blank" href="https://github.com/gabrielcaiana">
        <Icon name="github" color="#ef4444" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>
