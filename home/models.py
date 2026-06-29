from django.db import models

class Sijal(models.Model):
    name = models.CharField(max_length=30, verbose_name='نام')
    bio = models.TextField(verbose_name='بیوگرافی') 
    image = models.ImageField(
        upload_to='pic-food', 
        verbose_name='عکس'
    )


class Pishnahadroz(models.Model):
    namem = models.CharField(max_length=25, verbose_name="نام")
    akss = models.ImageField(upload_to='pic-food', verbose_name='عکس', null=True, blank=True)
    qimatt = models.CharField(max_length=30 , verbose_name="قیمت روز")

    def __str__(self):
        return self.namem


class GalleryImage(models.Model):
    image = models.ImageField(
        upload_to='pic-food',
        verbose_name='عکس',
        help_text='فرمت‌های مجاز: jpg, png, gif, webp'
    )

    name = models.CharField(
        max_length=200,
        verbose_name='نام عکس',
        help_text='جلسه کاری با تیم برنامه‌نویسی'
    )

    view_count = models.PositiveIntegerField(
        default=0,
        verbose_name='تعداد بازدید',
        editable=False
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name='تاریخ اضافه شدن'
    )

    class Meta: 
        ordering = ['-created_at']
        verbose_name = "تصویر گالری"
        verbose_name_plural = "گالری تصاویر"

    def __str__(self): 
        return f'{self.name} - {self.view_count} بازدید'