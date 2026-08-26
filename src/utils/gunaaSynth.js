/**
 * HTML5 Player for YouTube Shorts (ymncIGTqR70) Kanmani Anbodu Audio Track
 */

let globalAudio = null;
let isPlayingState = false;

function getGlobalAudio() {
  if (!globalAudio) {
    // Append unique cache-busting timestamp query parameter so browser loads the downloaded YouTube track
    const audioUrl = '/music/gunaa_instrumental.mp3?v=' + Date.now();
    globalAudio = new Audio(audioUrl);
    globalAudio.loop = true;
    globalAudio.volume = 0.8;
  }
  return globalAudio;
}

export function playGunaaTheme(onStatusChange) {
  const audio = getGlobalAudio();
  
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        isPlayingState = true;
        if (onStatusChange) onStatusChange(true);
      })
      .catch((error) => {
        console.log("Autoplay deferred by browser policy. Will play on click.", error);
        isPlayingState = false;
        if (onStatusChange) onStatusChange(false);
      });
  }
}

export function stopGunaaTheme(onStatusChange) {
  if (globalAudio) {
    globalAudio.pause();
  }
  isPlayingState = false;
  if (onStatusChange) onStatusChange(false);
}

export function toggleGunaaTheme(onStatusChange) {
  if (isPlayingState) {
    stopGunaaTheme(onStatusChange);
  } else {
    playGunaaTheme(onStatusChange);
  }
}

export function isGunaaPlaying() {
  return isPlayingState;
}

export function initGunaaAudio() {
  getGlobalAudio();
  return true;
}

export function getAudioContext() {
  const audio = getGlobalAudio();
  if (audio && audio.paused) {
    audio.play().catch(() => {});
  }
  return audio;
}
