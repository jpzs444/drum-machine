import $ from "jquery";

const DrumPad = ({ text, keyCode, audioDesc, audioSample }) => {

  const playAudio = () => {
    let audio = $(`#${text}`)[0];
    audio.currentTime = 0;
    audio.play();
    console.log("audio triggered");
    $('#display').text(audioDesc.split("-").join(" "));
  }

  const handleClick = () => {
    playAudio();
  };

  $(document).on("keydown", (e) => {
    if (e.which === keyCode) {
      playAudio();
      $(`#${audioDesc}`).addClass('active')
    }
  });

  $(document).on("keyup", (e) => {
    if (e.which === keyCode) {
      $(`#${audioDesc}`).removeClass('active')
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