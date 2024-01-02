import $ from "jquery";

const DrumPad = ({ text, keyCode, audioDesc, audioSample }) => {

  const playAudio = () => {
    let audio = $(`#${text}`)[0];
    audio.currentTime = 0;
    audio.play();
    console.log("audio triggered");
  }

  const handleClick = () => {
    playAudio();
  };

  $(document).on("keydown", (e) => {
    if (e.which === keyCode) {
      playAudio();
    }
  });

  return (
    <button type="button" className="drum-pad" id={audioDesc} onClick={handleClick}>
      {text}
      <audio className="clip" id={text} src={audioSample}></audio>
    </button>
  );
};

export default DrumPad;