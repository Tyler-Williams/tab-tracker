<template>
  <panel title="Song Metadata" class="song-metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
        </div>

        <v-btn
          dark
          class="cyan"
          @click="navigateTo({
            name: 'song-edit',
            params: {
              songId: song.id
              }
          })">
          Edit
        </v-btn>         
              
      </v-flex>

      <v-flex xs6>
        <img class="alblum-image" :src="song.alblumImageUrl" />
        <br>
        {{song.alblum}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    test (data) {
    }
  },
  props: [
    'song'
  ]
}
</script>

<style scoped>

.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
 font-size: 18px;
}

.alblum-image {
  width: 70%;
  margin: 0 auto;
}

.song-metadata {
  height: 400px;
}

</style>
