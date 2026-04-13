from django.db import models

# Create your models here.

class Contato(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique = True, blank=True, null=True)
    telefone = models.CharField(max_length=20)
    aniversario = models.DateTimeField(auto_now_add=False, blank=True, null=True)
    favoritado = models.BooleanField(default=False)
    idUser = models.ForeignKey('Usuarios', on_delete=models.CASCADE)

class Usuarios(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique = True)
    senha = models.CharField(max_length=128)
    telefone = models.CharField(max_length=11)
    aniversario = models.DateTimeField(auto_now_add=False, blank = True, null = True)

