from django.db import models


class Category(models.Model):
  name = models.CharField(max_length=300)
  pict = models.CharField(max_length=300)


class Top_List(models.Manager):
  def get_queryset(self):
    return super().get_queryset().filter(rating__gt=5)

class Authors(models.Model):
  name = models.CharField(max_length=300)
  pict = models.CharField(max_length=500)


class Products(models.Model):
  name = models.CharField(max_length=300)
  description = models.CharField(max_length=1000)
  price = models.CharField(max_length=300)
  pict = models.CharField(max_length=500)
  rating = models.IntegerField(range(1, 10), default=0)
  category = models.ForeignKey(Category, on_delete=models.CASCADE, default='', null=True)
  authors = models.ForeignKey(Authors, on_delete=models.CASCADE, default='' ,null =True)

  objects = models.Manager()
  top_list = Top_List()
