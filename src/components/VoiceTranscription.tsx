import React, { useState, useEffect } from "react";
import Mic from "./Mic";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const VoiceTranscription: React.FC = () => {
  const [transcription, setTranscription] = useState<string>("");
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [speechRecognition, setSpeechRecognition] = useState<any>(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setTranscription(transcript);
      };

      recognition.onerror = (event: SpeechRecognitionError) => {
        console.error("Speech recognition error", event.error);
      };

      setSpeechRecognition(recognition);
    } else {
      console.warn("Speech Recognition API is not supported in this browser");
    }
  }, []);

  const startRecording = () => {
    console.log("Recording Started!!");
    if (speechRecognition) {
      setIsRecording(true);
      speechRecognition.start();
    }
  };

  const stopRecording = () => {
    console.log("Recording Stoped!!");
    if (speechRecognition) {
      setIsRecording(false);
      speechRecognition.stop();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-10 pt-10">
      <Mic
        startRecording={startRecording}
        stopRecording={stopRecording}
        isRecording={isRecording}
        setIsRecording={setIsRecording}
      />
      <p className="text-lg font-custom font-semibold">{transcription}</p>
    </div>
  );
};

export default VoiceTranscription;
