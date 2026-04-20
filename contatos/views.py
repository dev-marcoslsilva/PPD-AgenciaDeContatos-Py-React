from django.shortcuts import render
from rest_framework import viewsets #searchFilter
from .models import Contato, Usuarios
from .serializers import ContatoSerializer, UsuariosSerializer
from rest_framework.decorators import action
from rest_framework.response import Response

# Create your views here.

class ContatoViewSet(viewsets.ModelViewSet):
    
    queryset = Contato.objects.all()
    serializer_class = ContatoSerializer
        
    @action(detail=False)
    def favoritados(self, request):
        queryset = Contato.objects.filter(favoritado=True)
        serializer = self.get_serializer(queryset, many=True)

        return Response(serializer.data)
    


    @action(detail=True)
    def favoritar(self, request, pk=None):
        contato = self.get_object()
        contato.favoritado = not contato.favoritado
        contato.save()
        serializer = ContatoSerializer(contato)
        return Response(serializer.data)


# class FiltroNomeContato(viewsets.ModelViewSet):
#     queryset = Contato.objects.all()
#     serializer_class = ContatoSerializer

#     filter_backends = [searchFilter]
#     search_fields = ['nome']
   
        


class UsuariosViewSet(viewsets.ModelViewSet):
    queryset = Usuarios.objects.all()
    serializer_class = UsuariosSerializer


    