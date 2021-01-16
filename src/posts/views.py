from django.shortcuts import render


def home_view(request):
    return render(request, 'posts/main.html', {'msg': 'hello home page'})
