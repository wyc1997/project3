from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Topping(models.Model):
    name = models.CharField(max_length = 64)

    def __str__(self):
        return f"{self.name}"

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

    def __str__(self):
        return f"{self.size}_{self.name}".replace(" ", "_")

class Pasta(models.Model):
    name = models.CharField(max_length = 64)
    price = models.DecimalField(decimal_places = 2, max_digits = 64)

    def __str__(self):
        return f"{self.name}".replace(" ", "_").replace("/", "_")

class Salad(models.Model):
    name = models.CharField(max_length = 64)
    price = models.DecimalField(decimal_places = 2, max_digits = 64)

    def __str__(self):
        return f"{self.name}".replace(" ", "_")

class Dinner_Platter(models.Model):
    name = models.CharField(max_length = 64)
    size = models.CharField(max_length = 64)
    price = models.DecimalField(decimal_places = 2, max_digits = 64)

    def __str__(self):
        return f"{self.size}_{self.name}".replace(" ", "_")

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    pizza = models.ManyToManyField(Pizza, blank=True)
    sub = models.ManyToManyField(Sub, blank=True)
    pasta = models.ManyToManyField(Pasta, blank=True)
    salad = models.ManyToManyField(Salad, blank=True)
    dinner_platter = models.ManyToManyField(Dinner_Platter, blank=True)
    total_price = models.DecimalField(decimal_places = 2, max_digits = 64)
