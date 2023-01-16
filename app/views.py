from django.shortcuts import render
import pyttsx3
import speech_recognition as sr
import datetime
import wikipedia
import webbrowser as wb
import os
import smtplib
import requests
from pprint import pprint
from selenium import webdriver

### all comments with the triple hashtags are me, Eric.


engine = pyttsx3.init("sapi5")
voices = engine.getProperty("voices")
engine.setProperty("voice", voices[1].id)


def homePage(request):
    context = {}
    return render(request, "homePage.html", context)


def speak(audio):
    engine.say(audio)
    engine.runAndWait()



def takeCommand():

    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        # r.pause_threshold = 0.7
        audio = r.listen(source, phrase_time_limit=5)
        print(audio)

    try:
        print("Recognizing...")
        query = r.recognize_google(audio, language="en-in")
        print(f"river Said:{query}\n")

    except Exception as e:
        print(e)
        print("Say that again Please...")
        speak("Say that again Please...")
        return "None"
    return query


def sendEmail(to, content):
    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.ehlo()
    server.starttls()
    server.login("Senderemail@gmail.com", "Password")
    server.sendmail("Senderemail@gmail.com", to, content)
    server.close()


def greeting ():
    speak("Welcome back sir")
    hour = int(datetime.datetime.now().hour)
    print(hour)
    year = int(datetime.datetime.now().year)
    month = int(datetime.datetime.now().month)
    date = int(datetime.datetime.now().day)
    Time = datetime.datetime.now().strftime("%I:%M:%S")
    print(Time)
    print(month)
    print(date)
    print(year)
    speak("the current Time is")
    speak(Time)
    speak("the current Date is")
    speak(month)
    speak(date)
    speak(year)
    if hour >= 6 and hour < 12:
        speak("Good Morning sir!")

    elif hour >= 12 and hour < 18:
        speak("Good Afternoon sir!")

    elif hour >= 18 and hour < 24:
        speak("Good Evening sir!")

    else:
        speak("Good Night sir!")

    speak("athena at your Service. Please tell me how can I help You ")

def command_input(query):
        if "wikipedia" in query:
            speak("Searching Wikipedia...")
            query = query.replace("wikipedia", "")
            results = wikipedia.summary(query, sentences=2)
            speak("According to Wikipedia")
            print(results)
            speak(results)

        elif "search in chrome" in query:
            speak("what should i search?")
            chrome_path = (
                "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe %s"
            )

            r = sr.Recognizer()

            with sr.Microphone() as source:
                print("say something!")
                audio = r.listen(source)
                print("done")
            try:
                text = r.recognize_google(audio)
                print("google think you said:\n" + text + ".com")
                wb.get(chrome_path).open(text + ".com")
            except Exception as e:
                print(e)

        elif "how is the weather" and "weather" in query:

            url = "http://api.weatherstack.com/current"  # Open api link here
            access_key = "b1c04b7b8ff04ccea5a9d06ab232b0b1"

            res = requests.get(url)

            data = res.json()

            weather = data["weather"][0]["main"]
            temp = data["main"]["temp"]
            wind_speed = data["wind"]["speed"]

            latitude = data["coord"]["lat"]
            longitude = data["coord"]["lon"]

            description = data["weather"][0]["description"]
            speak("Temperature : {} degree celcius".format(temp))
            print("Wind Speed : {} m/s".format(wind_speed))
            print("Latitude : {}".format(latitude))
            print("Longitude : {}".format(longitude))
            print("Description : {}".format(description))
            print("weather is: {} ".format(weather))
            speak("weather is : {} ".format(weather))

        elif "the time" in query:
            strTime = datetime.datetime.now().strftime("%I:%M:%S")
            speak(f"Sir, the time is {strTime}")

        elif "the date" in query:
            year = int(datetime.datetime.now().year)
            month = int(datetime.datetime.now().month)
            date = int(datetime.datetime.now().day)
            speak("the current Date is")
            speak(month)
            speak(date)
            speak(year)

        elif "send reminder" and "send email" in query:
            try:
                speak("What should I say?")
                content = takeCommand()
                to = "pstults04@gmail.com"
                sendEmail(to, content)
                speak("Email has been sent!")
            except Exception as e:
                print(e)
                speak("Sorry my friend . I am not able to send this email")

        elif "open" in query:
            os.system("explorer C://{}".format(query.replace("Open", "")))

        elif "go offline" in query:
            speak("ok sir shutting down the system")
            quit()

        elif "shutdown" in query:
            speak("ok sir shutting down the system")
            quit()


def main():
    greeting()
    while True:
        query = takeCommand().lower()
        command_input(query)

    