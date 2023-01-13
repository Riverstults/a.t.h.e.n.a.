from django import forms

class signupform(forms.Form):
    your_name=forms.CharField(label="Your Name", max_length=100)
    language= forms.CharField()