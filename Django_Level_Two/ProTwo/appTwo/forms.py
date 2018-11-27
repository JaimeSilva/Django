from django import forms
from appTwo.models import User

class MyNewForm(forms.ModelForm):
    #Form fields go here
    class Meta:
        model = User
        fields = "__all__"
        
        # Let's see the options
