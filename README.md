# Web Audio Sound Player

This project demonstrates how to use the Web Audio API to play multiple instances of a sound file with a slight time offset between each playback. The sound file is loaded from a fixed path, and playback is triggered by a user gesture (a button click), ensuring compatibility with modern browser autoplay policies.

Setup

1.	Clone this repository to your local machine:
```
git clone https://github.com/ssolodskih/soundapi-overlap.git
```
2.	Make sure you have a sound file named blast.ogg in the sounds directory. You can replace blast.ogg with any .ogg sound file, as long as it has the same name.
3.	Start a simple HTTP server. For example, with Python:
```
cd soundapi-overlap
python -m http.server
```
4.	Open your browser and navigate to http://localhost:8000.
