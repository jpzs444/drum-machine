import { drumPads } from "../constants"
import DrumPad from "./DrumPad"

const DrumMachine = () => {
  return (
    <div id="drum-machine">
      <div className="drumpads">
        {drumPads.map((drumPad, ind) => (
          <DrumPad
            key={ind}
            text={drumPad.text}
            keyCode={drumPad.keyCode}
            audioDesc={drumPad.audioDesc}
            audioSample={drumPad.audioSample}/>
        ))}
      </div>

      <p id="display">Display</p>
    </div>
  )
}

export default DrumMachine