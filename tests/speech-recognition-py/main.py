import speech_recognition as sr

recognition = sr.Recognizer()

with sr.Microphone() as source:
    print("Diga algo.")
    audio = recognition.listen(source)

    try:
        sentence = recognition.recognize_google(
            audio_data= audio, language="pt-BR")
        print("Você disse: {}".format(sentence))

    except:
            print("Não entendi o que você disse.")