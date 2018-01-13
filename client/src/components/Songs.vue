<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title='Songs'>
        <v-btn
          @click="navigateTo({name: 'songs-create'})"
          slot="action"
          class='cyan accent-2'
          light
          small
          absolute
          right
          middle
          fab>
          <v-icon>add</v-icon>
        </v-btn>
        <div 
          v-for="song in songs" 
          :key="song.id"
          class="song">

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
                  name: 'song', 
                  params: {
                    songID: song.id
                  }
                })">
                View
              </v-btn>

            </v-flex>
            <v-flex xs6>
              <img class="alblum-image" :src="song.alblumImageUrl" />
            </v-flex>
          </v-layout>
          {{song.title}} -
          {{song.artist}} -
          {{song.alblum}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    // do a request to the backend for all of the songs
    this.songs = (await SongsService.index()).data
  }
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
</style>

