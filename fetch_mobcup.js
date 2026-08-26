import https from 'https';
import fs from 'fs';
import path from 'path';

const url = 'https://mobcup.fm/ringtone/kanmani-anbodu-instrumental-lhZdkzmB';

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
  }
};

https.get(url, options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status Code:', res.statusCode);
    const mp3Matches = data.match(/https?:\/\/[^"'\s]+\.mp3/g);
    console.log('Found MP3 links:', mp3Matches);

    if (mp3Matches && mp3Matches.length > 0) {
      const mp3Url = mp3Matches[0];
      console.log('Downloading MP3 from:', mp3Url);

      const targetPath = path.join(process.cwd(), 'public', 'music', 'gunaa_instrumental.mp3');
      const targetPathWav = path.join(process.cwd(), 'public', 'music', 'gunaa_instrumental.wav');
      const targetPathSong = path.join(process.cwd(), 'public', 'music', 'song.mp3');

      https.get(mp3Url, options, (resMp3) => {
        if (resMp3.statusCode === 301 || resMp3.statusCode === 302) {
          // Handle redirect
          https.get(resMp3.headers.location, options, (resRedir) => {
            const file = fs.createWriteStream(targetPath);
            resRedir.pipe(file);
            file.on('finish', () => {
              file.close();
              fs.copyFileSync(targetPath, targetPathWav);
              fs.copyFileSync(targetPath, targetPathSong);
              console.log('Successfully downloaded Mobcup MP3 into public/music!');
            });
          });
        } else {
          const file = fs.createWriteStream(targetPath);
          resMp3.pipe(file);
          file.on('finish', () => {
            file.close();
            fs.copyFileSync(targetPath, targetPathWav);
            fs.copyFileSync(targetPath, targetPathSong);
            console.log('Successfully downloaded Mobcup MP3 into public/music!');
          });
        }
      });
    } else {
      console.log('No direct MP3 URL found in page HTML.');
    }
  });
}).on('error', (err) => {
  console.error('Error fetching page:', err.message);
});
