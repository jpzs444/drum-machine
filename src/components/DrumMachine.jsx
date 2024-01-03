import { drumPads } from "../constants"
import DrumPad from "./DrumPad"

const DrumMachine = () => {
  return (
    <div id="drum-machine">
      <div className="drum-pads">
        {drumPads.map((drumPad, ind) => (
          <DrumPad
            key={ind}
            text={drumPad.text}
            keyCode={drumPad.keyCode}
            audioDesc={drumPad.audioDesc}
            audioSample={drumPad.audioSample}/>
        ))}
      </div>

      <p id="display">-</p>
    </div>
  )
}

export default DrumMachine