from django.shortcuts import render

# Create your views here.
def mypage(request):
    return render(request, 'mypage.html')

#def update(request):
#    if request.method == "POST":
#        post.title = request.POST['title']
#        post.body = request.POST['body']
#        post.photo = request.FILES['upload']
#        post.date = timezone.now()
#        post.author = request.user
#        post.save()
#        return redirect('detail', blog_id)