import fs from 'fs';
import path from 'path';

// Generate a 16-bit 44.1kHz WAV file of Kanmani Anbodu (Gunaa Theme) melody
const sampleRate = 44100;

// Kanmani Anbodu notes in Hz
const notes = [
  { f: 659.25, d: 0.5 }, // E5
  { f: 587.33, d: 0.4 }, // D5
  { f: 523.25, d: 0.5 }, // C5
  { f: 493.88, d: 0.4 }, // B4
  { f: 440.00, d: 0.8 }, // A4
  
  { f: 392.00, d: 0.5 }, // G4
  { f: 440.00, d: 0.4 }, // A4
  { f: 523.25, d: 0.5 }, // C5
  { f: 493.88, d: 0.5 }, // B4
  { f: 440.00, d: 0.9 }, // A4

  { f: 659.25, d: 0.5 }, // E5
  { f: 783.99, d: 0.4 }, // G5
  { f: 659.25, d: 0.5 }, // E5
  { f: 587.33, d: 0.4 }, // D5
  { f: 523.25, d: 0.8 }, // C5

  { f: 440.00, d: 0.5 }, // A4
  { f: 523.25, d: 0.4 }, // C5
  { f: 493.88, d: 0.5 }, // B4
  { f: 440.00, d: 1.2 }  // A4
];

// Repeat loop 3 times for full track length (~35 seconds)
const fullMelody = [...notes, ...notes, ...notes];

let totalSamples = 0;
fullMelody.forEach(n => {
  totalSamples += Math.floor(n.d * sampleRate);
});

const blockAlign = 2; // 1 channel, 16-bit (2 bytes per sample)
const byteRate = sampleRate * blockAlign;
const dataSize = totalSamples * blockAlign;
const buffer = Buffer.alloc(44 + dataSize);

// Write WAV Header
buffer.write('RIFF', 0);
buffer.writeUInt32LE(36 + dataSize, 4);
buffer.write('WAVE', 8);
buffer.write('fmt ', 12);
buffer.writeUInt32LE(16, 16); // Subchunk1Size
buffer.writeUInt16LE(1, 20);  // AudioFormat (PCM)
buffer.writeUInt16LE(1, 22);  // NumChannels (Mono)
buffer.writeUInt32LE(sampleRate, 24);
buffer.writeUInt32LE(byteRate, 28);
buffer.writeUInt16LE(blockAlign, 32);
buffer.writeUInt16LE(16, 34); // BitsPerSample
buffer.write('data', 36);
buffer.writeUInt32LE(dataSize, 40);

let offset = 44;
fullMelody.forEach(item => {
  const numSamples = Math.floor(item.d * sampleRate);
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    // Synthesis: Fundamental sine + 2nd harmonic (warm acoustic flute sound)
    const val1 = Math.sin(2 * Math.PI * item.f * t);
    const val2 = 0.3 * Math.sin(2 * Math.PI * (item.f * 2) * t);
    
    // Envelope (Attack & Release)
    let env = 1.0;
    const attack = Math.floor(0.05 * sampleRate);
    const release = Math.floor(0.1 * sampleRate);
    if (i < attack) {
      env = i / attack;
    } else if (i > numSamples - release) {
      env = (numSamples - i) / release;
    }

    const sample = Math.max(-1, Math.min(1, (val1 + val2) * 0.4 * env));
    const intSample = Math.floor(sample * 32767);
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

console.log('Successfully generated Gunaa Instrumental Audio files in public/music!');
