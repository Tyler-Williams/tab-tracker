<template>
  <v-layout >
    <v-flex xs6 v-if="isUserLoggedIn">
      <songs-bookmarks />
      <recently-viewed-songs class="mt-2"/>
    </v-flex>
    <v-flex
      :class="{
        xs12: !isUserLoggedIn,
        xs6: isUserLoggedIn
      }"
      class="ml-2">
      <songs-search-panel/>
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongsPanel from '@/components/Songs/SongsPanel'
import SongsSearchPanel from '@/components/Songs/SongsSearchPanel'
import SongsBookmarks from '@/components/Songs/SongsBookmarks'
import RecentlyViewedSongs from '@/components/Songs/RecentlyViewedSongs'
import {mapState} from 'vuex'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  data () {
    return {
      songs: null
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

