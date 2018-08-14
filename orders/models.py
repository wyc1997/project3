from django.db import models

# Create your models here.
class Topping(models.Model):
    name = models.CharField(max_length = 64)

class Pizza(models.Model):
    type = models.CharField(max_length = 64)
    size = models.CharField(max_length = 64)
    addons = models.CharField(max_length = 64)
    toppings = models.ManyToManyField(Topping, blank=True)
    price = models.DecimalField(decimal_places = 2, max_digits = 64)

class Sub(models.Model):
    name = models.CharField(max_length = 64)
    size = models.CharField(max_length = 64)
    price = models.DecimalField(decimal_places = 2, max_digits = 64)

class Pasta(models.Model):
    name = models.CharField(max_length = 64)
    price = models.DecimalField(decimal_places = 2, max_digits = 64)

class Salad(models.Model):
    name = models.CharField(max_length = 64)
    price = models.DecimalField(decimal_places = 2, max_digits = 64)

class Dinner_Platter(models.Model):
    name = models.CharField(max_length = 64)
    size = models.CharField(max_length = 64)
    price = models.DecimalField(decimal_places = 2, max_digits = 64)

class Order(models.Model):
    pizza = models.ManyToManyField(Pizza, blank=True)
    sub = models.ManyToManyField(Sub, blank=True)
    pasta = models.ManyToManyField(Pasta, blank=True)
    salad = models.ManyToManyField(Salad, blank=True)
    dinner_platter = models.ManyToManyField(Dinner_Platter, blank=True)
    total_price = models.DecimalField(decimal_places = 2, max_digits = 64)
