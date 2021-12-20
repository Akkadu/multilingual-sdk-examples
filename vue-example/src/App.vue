<template>
  <div>
    <RsiApiInterpretationPlayer
      sdkKey="dc4249ee-06c1-4f80-845e-86e192f3e049"
      v-on:onLanguageSelected="handleOnLanguageSelected"
      v-on:onReady="handleOnReady"
      room-name="gnqe"
      :hasSubtitles="true"
      v-on:onConnectionStatusUpdated="handleOnConnectionStatusUpdated" />
    <RsiSubtitles
        sdkKey="dc4249ee-06c1-4f80-845e-86e192f3e049"
        roomName="gnqe"
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