from django.shortcuts import render
from rest_framework import viewsets, SearchFilter
from .models import Contato, Usuarios
from .serializers import ContatoSerializer, UsuariosSerializer
from rest_framework.decorators import action
from rest_framework.response import Response

# Create your views here.

class ContatoViewSet(viewsets.ModelViewSet):
    
    queryset = Contato.objects.all()
    serializer_class = ContatoSerializer
        
    @action(detail=False)
    def favoritados(self):
        favoritos = Contato.objects.query_params.get('favoritados')

        if favoritos is not None:
            queryset = queryset.filter(favoritado=favoritos.lower() == 'true')

        return queryset
    


    @action(detail=True)
    def favoritar(self, request, pk=None):
        contato = self.get_object()
        contato.favoritado = not contato.favoritado
        contato.save()
        serializer = ContatoSerializer(contato)
        return Response(serializer.data)


class FiltroNomeContato(viewsets.ModelViewSet):
    queryset = Contato.objects.all()
    serializer_class = ContatoSerializer

    filter_backends = [SearchFilter]
    search_fields = ['nome']
   
        


class UsuariosViewSet(viewsets.ModelViewSet):
    queryset = Usuarios.objects.all()
    serializer_class = UsuariosSerializer


    