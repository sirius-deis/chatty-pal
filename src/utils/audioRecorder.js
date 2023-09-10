const audioRecorder = {
  mediaRecorder: null,
  audioBlobs: [],
  start() {
    if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      return Promise.reject(new Error('This features is not supported on your device'));
    } else {
      return navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.addEventListener('dataavailable', (event) => {
          this.audioBlobs.push(event.data);
        });
        this.mediaRecorder.start();
      });
    }
  },
  stop() {},
  cancel() {},
};

export default audioRecorder;
