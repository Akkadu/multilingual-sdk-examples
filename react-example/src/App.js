import { RsiApiInterpretationPlayer, RsiSubtitles } from '@akkadu/rsi-react'

function App() {
  const handleOnReady = (e) => {
    console.info('Received onReady event: ',e );
  }
  const handleOnLanguageSelected = (e) => {
    console.info('Received onLanguageSelected event:',e );
  }
  const handleOnConnectionStatusUpdated = (e) => {
    console.info('Received onConnectionStatusUpdated event:',e );
  }
  const handleOnSubtitlesReady = (e) => {
    console.info('Received onReady event for the subtitles widget: ',e );
  }
  return (
    <div>
      <RsiApiInterpretationPlayer
        sdkKey="dc4249ee-06c1-4f80-845e-86e192f3e049"
        roomName="gnqe"
        onReady={handleOnReady}
        onLanguageSelected={handleOnLanguageSelected}
        onConnectionStatusUpdated={handleOnConnectionStatusUpdated}
        hasSubtitles={true}
      />
      <RsiSubtitles
        sdkKey="dc4249ee-06c1-4f80-845e-86e192f3e049"
        roomName="gnqe"
        onReady = {handleOnSubtitlesReady}
      />
    </div>
  );
}

export default App;
