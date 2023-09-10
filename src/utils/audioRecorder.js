const audioRecorder = {
  mediaRecorder: null,
  audioBlobs: [],
  streamBeingCaptured: null,
  async start() {
    if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      throw new Error('This features is not supported on your device');
    } else {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.streamBeingCaptured = stream;
      this.mediaRecorder = new MediaRecorder(stream);
      this.audioBlobs = [];
      this.mediaRecorder.addEventListener('dataavailable', (event) => {
        this.audioBlobs.push(event.data);
      });
      this.mediaRecorder.start();
    }
  },
  async stop() {
    const mimeType = this.mediaRecorder.mimeType;

    this.mediaRecorder.addEventListener('stop', () => {
      return new Blob(this.audioBlobs, { type: mimeType });
    });

    this.mediaRecorder.stop();
    this.stopStream();
  },
  stopStream() {
    this.streamBeingCaptured.getTracks().forEach((track) => track.stop());
    this.mediaRecorder = null;
    this.mediaRecorder = null;
  },
  cancel() {
    this.mediaRecorder.stop();
    this.stopStream();
  },
};

export default audioRecorder;
