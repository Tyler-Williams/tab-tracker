<template>
  <v-layout>
    <v-flex xs4>  
      <panel title="Song Metadata">
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="song.title"
        ></v-text-field>
        
        <v-text-field
          label="Artist"          
          required
          :rules="[required]"
          v-model="song.artist"
        ></v-text-field>
        
        <v-text-field
          label="Genre"
          required
          :rules="[required]"
          v-model="song.genre"
        ></v-text-field>
        
        <v-text-field
          label="Alblum"
          required
          :rules="[required]"
          v-model="song.alblum"
        ></v-text-field>
        
        <v-text-field
          label="Alblum Image URL"
          required
          :rules="[required]"
          v-model="song.alblumImageUrl"
        ></v-text-field>
        
        <v-text-field
          label="Youtube ID"
          required
          :rules="[required]"
          v-model="song.youTubeId"
        ></v-text-field>      
      </panel>
    </v-flex>

    <v-flex xs8 class="ml-2">
      <panel title="Song Structure">
        <v-text-field
          label="Tab"
          required
          :rules="[required]"
          v-model="song.tab"
          multi-line
        ></v-text-field>
          
        <v-text-field
          label="Lyrics"
          required
          :rules="[required]"
          v-model="song.lyrics"
          multi-line
        ></v-text-field>
      </panel>

      <div class="danger-alert" v-if="error">
        {{error}}
      </div>

      <v-btn
        dark
        class="cyan"
        @click="create">
        Create Song
      </v-btn>

    </v-flex>  
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        alblum: null,
        alblumImageUrl: null,
        youTubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
      .keys(this.song)
      .every(key => !!this.song[key])

      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all of the required fields.'
        return
      }

      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>

