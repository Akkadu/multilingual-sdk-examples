import { RsiApiInterpretationPlayer, RsiSubtitles } from '@akkadu/rsi-react'
import './App.css'

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
        sdkKey="8abec1e6-844e-4881-afc5-1513479c8532"
        roomName="gnma"
        onReady={handleOnReady}
        onLanguageSelected={handleOnLanguageSelected}
        onConnectionStatusUpdated={handleOnConnectionStatusUpdated}
        hasSubtitles={true}
      />
      <RsiSubtitles
        sdkKey="8abec1e6-844e-4881-afc5-1513479c8532"
        roomName="gnma"
        onReady = {handleOnSubtitlesReady}
      />
    </div>
  );
}

export default App;
