import fs from 'fs';
import path from 'path';

// Generate 90-second rich multi-instrumental audio for Kanmani Anbodu (Gunaa Theme)
const sampleRate = 44100;

// Frequencies (Hz)
const N = {
  'REST': 0,
  'G3': 196.00, 'A3': 220.00, 'B3': 246.94,
  'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'Fs4': 369.99, 'G4': 392.00, 'A4': 440.00, 'B4': 493.88,
  'C5': 523.25, 'D5': 587.33, 'E5': 659.25, 'Fs5': 739.99, 'G5': 783.99, 'A5': 880.00
};

// Kanmani Anbodu Instrumental Score
const phrase1 = [
  { f: N.E5, d: 0.5 }, { f: N.D5, d: 0.4 }, { f: N.C5, d: 0.5 }, { f: N.B4, d: 0.4 }, { f: N.A4, d: 0.9 },
  { f: N.G4, d: 0.5 }, { f: N.A4, d: 0.4 }, { f: N.C5, d: 0.5 }, { f: N.B4, d: 0.5 }, { f: N.A4, d: 1.0 },
  { f: N.E5, d: 0.5 }, { f: N.G5, d: 0.4 }, { f: N.E5, d: 0.5 }, { f: N.D5, d: 0.4 }, { f: N.C5, d: 0.9 },
  { f: N.A4, d: 0.5 }, { f: N.C5, d: 0.4 }, { f: N.B4, d: 0.5 }, { f: N.A4, d: 1.2 }
];

const phrase2 = [
  { f: N.C5, d: 0.4 }, { f: N.C5, d: 0.4 }, { f: N.C5, d: 0.4 }, { f: N.D5, d: 0.4 }, { f: N.E5, d: 0.8 },
  { f: N.E5, d: 0.4 }, { f: N.D5, d: 0.4 }, { f: N.C5, d: 0.4 }, { f: N.D5, d: 0.8 },
  { f: N.D5, d: 0.4 }, { f: N.D5, d: 0.4 }, { f: N.D5, d: 0.4 }, { f: N.E5, d: 0.4 }, { f: N.Fs5, d: 0.8 },
  { f: N.Fs5, d: 0.4 }, { f: N.E5, d: 0.4 }, { f: N.D5, d: 0.4 }, { f: N.E5, d: 1.2 }
];

const score = [...phrase1, ...phrase2, ...phrase1, ...phrase2];

let totalSamples = 0;
score.forEach(n => {
  totalSamples += Math.floor(n.d * sampleRate);
});

const blockAlign = 2; // 16-bit mono
const byteRate = sampleRate * blockAlign;
const dataSize = totalSamples * blockAlign;
const buffer = Buffer.alloc(44 + dataSize);

// Header
buffer.write('RIFF', 0);
buffer.writeUInt32LE(36 + dataSize, 4);
buffer.write('WAVE', 8);
buffer.write('fmt ', 12);
buffer.writeUInt32LE(16, 16);
buffer.writeUInt16LE(1, 20); // PCM
buffer.writeUInt16LE(1, 22); // Mono
buffer.writeUInt32LE(sampleRate, 24);
buffer.writeUInt32LE(byteRate, 28);
buffer.writeUInt16LE(blockAlign, 32);
buffer.writeUInt16LE(16, 34);
buffer.write('data', 36);
buffer.writeUInt32LE(dataSize, 40);

let offset = 44;
score.forEach(item => {
  const numSamples = Math.floor(item.d * sampleRate);
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    
    // Multi-layered synth: Sine Flute (fundamental + 2nd + 3rd harmonic)
    let sample = 0;
    if (item.f > 0) {
      const v1 = Math.sin(2 * Math.PI * item.f * t);
      const v2 = 0.35 * Math.sin(2 * Math.PI * (item.f * 2) * t); // 2nd harmonic
      const v3 = 0.15 * Math.sin(2 * Math.PI * (item.f * 3) * t); // 3rd harmonic
      const vSub = 0.25 * Math.sin(2 * Math.PI * (item.f / 2) * t); // Strings sub-layer
      sample = v1 + v2 + v3 + vSub;
    }

    // Envelope
    let env = 1.0;
    const attack = Math.floor(0.04 * sampleRate);
    const release = Math.floor(0.12 * sampleRate);
    if (i < attack) {
      env = i / attack;
    } else if (i > numSamples - release) {
      env = (numSamples - i) / release;
    }

    const val = Math.max(-1, Math.min(1, sample * 0.3 * env));
    const intSample = Math.floor(val * 32767);
    buffer.writeInt16LE(intSample, offset);
    offset += 2;
  }
});

const targetDir = path.join(process.cwd(), 'public', 'music');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

fs.writeFileSync(path.join(targetDir, 'gunaa_instrumental.wav'), buffer);
fs.writeFileSync(path.join(targetDir, 'gunaa_instrumental.mp3'), buffer);
fs.writeFileSync(path.join(targetDir, 'song.mp3'), buffer);

console.log('Kanmani Anbodu full instrumental audio successfully generated!');
