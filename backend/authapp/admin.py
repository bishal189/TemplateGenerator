from django.contrib import admin

from .models import Account
class Account_admin(admin.ModelAdmin):
    list_display=('email','last_login','is_active','is_superadmin')
    ordering=('-date_joined',)
    readonly_fields=('last_login','date_joined')
    filter_horizontal=()
    list_filter=()
    fieldsets=()
    
    list_display_links=('email','last_login','is_active','is_superadmin')
admin.site.register(Account,Account_admin)
