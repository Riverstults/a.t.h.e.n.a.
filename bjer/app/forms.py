from django import forms

class UserRegistarForm(UserCreationForm):
    Select = "--"
    ENGLISH = 'EN'
    FRENCH = 'FR'
    ARABIC = 'AR'
    FARCHI = 'FA'
    YEAR_IN_SCHOOL_CHOICES = [
        (Select, 'Select'),
        (ENGLISH, 'English'),
        (FRENCH, 'French'),
        (ARABIC, 'عربي'),
        (FARCHI, 'فارسي'),
    ]
    email =forms.EmailField()
    language=forms.ChoiceField(choices=YEAR_IN_SCHOOL_CHOICES)

    class Meta:
        model = User
        fields = ['language', 'username', 'email', 'password1', 'password2']
