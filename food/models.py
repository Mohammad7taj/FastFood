from django.db import models

class Food(models.Model):
    name = models.CharField(max_length=30, verbose_name='نام')
    abot = models.TextField(verbose_name='محتویات غذا')
    cover = models.ImageField(upload_to='pic-food', default='default.jpg', blank=True, null=True)
    qimat = models.IntegerField(verbose_name='قیمت (تومان)', null=True, blank=True)

    def __str__(self):
        return f'{self.name}'
