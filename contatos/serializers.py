from rest_framework import serializers
from .models import Contato, Usuarios



class ContatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contato
        fields = '__all__'

class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = '__all__'

class ContatosSerializerNome(serializers.ModelSerializer):
    class Meta:
        model = Contato
        fields = ['nome']