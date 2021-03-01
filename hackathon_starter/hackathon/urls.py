from django.conf.urls import patterns, url, include
from rest_framework.routers import DefaultRouter

from hackathon import views

router = DefaultRouter()
router.register(r'snippets', views.SnippetView)

urlpatterns = patterns('',
    url(r'^', include(router.urls)),
    url(r'^register/$', views.register, name='register'),
    url(r'^login/$', views.user_login, name='login'),
    url(r'^logout/$', views.user_logout, name='logout'),
    url(r'^account/$', views.account, name='account'),
    url(r'^inventoryIN/$', views.inventoryIN, name='inventoryIn'),
    url(r'^inventoryOUT/$', views.inventoryOUT, name='inventoryOut'),
    url(r'^linkedin/$', views.linkedin, name='linkedin'),
    url(r'^linkedin_login/$', views.linkedin_login, name='linkedin_login'),
)
