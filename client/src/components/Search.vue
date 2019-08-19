<template>
  <section class="search">
    <h1>Track Player Stats</h1>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="platform">Platform</label>
        <select name="platform" id="platform" v-model="platform">
          <option value="psn">Playstation</option>
          <option value="xbl">Xbox</option>
          <option value="origin">Origin</option>
        </select>
      </div>
      <div class="form-group">
        <label for="gamertag">Gamertag</label>
        <input 
        type="text" 
        name="text" 
        v-model="gamertag" 
        id="gamertag" 
        placeholder="Origin ID, Xbox Live gamertag, PSN, ID, etc"
        />
      </div>
      <div class="form-group">
        <input type="submit" value="Submit">
      </div>
    </form>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
