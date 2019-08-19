<template>
  <div>
    Profile
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      loading: false,
      error: null,
      profileData: null
    }
  },
  beforeCreate() {
    document.body.className = 'body-bg-no-image';
  }
}
</script>

<style>

</style>
