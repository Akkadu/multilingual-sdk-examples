<template>
  <div>
    <RsiApiInterpretationPlayer
      sdkKey="8abec1e6-844e-4881-afc5-1513479c8532"
      v-on:onLanguageSelected="handleOnLanguageSelected"
      v-on:onReady="handleOnReady"
      room-name="gnma"
      :hasSubtitles="true"
      v-on:onConnectionStatusUpdated="handleOnConnectionStatusUpdated" />
    <RsiSubtitles
        sdkKey="8abec1e6-844e-4881-afc5-1513479c8532"
        roomName="gnma"
        v-on:onReady="handleOnSubtitlesReady"/>
  </div>
</template>

<script lang="js">

import { RsiApiInterpretationPlayer, RsiSubtitles } from '@akkadu/rsi-vue'

export default {
  components:{
    RsiApiInterpretationPlayer,
    RsiSubtitles
  },
  methods: {
    handleOnLanguageSelected(e){
      console.info('handleLanguageSelected event:',e);
    },
    handleOnReady(e){
      console.info('handleOnReady event:',e);
    },
    handleOnConnectionStatusUpdated(e){
      console.info('handleOnConnectionStatusUpdated event:',e);
    },
    handleOnSubtitlesReady(e){
      console.info('handleOnReady event for the subtitles widget:',e);
    },
},
}
</script>