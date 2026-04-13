from django.shortcuts import render
from rest_framework import viewsets
from .models import Contato, Usuarios
from .serializers import ContatoSerializer, UsuariosSerializer
from rest_framework.decorators import action
from rest_framework.response import Response

# Create your views here.

class ContatoViewSet(viewsets.ModelViewSet):
    queryset = Contato.objects.all()
    serializer_class = ContatoSerializer

    @action(detail=True)
    def achaPorId(self, request):
        contato = self.get_object().filter(id=self.kwargs['pk'])
        serializer = ContatoSerializer(contato, many=false)
        return Response(serializer.data)
        

    @action(detail=False)
    def favoritados(self, request):
        favoritos = Contato.objects.filter(favoritado=True)
        serializer = ContatoSerializer(favoritos, many=True)
        return Response(serializer.data)
    
    @action(detail=True)
    def acha_nome(self, request):
        contato = self.get_object()
        return Response({'nome': contato.nome})


    @action(detail=True)
    def acharNumero(self, request):
        contato = self.get.object()
        return Response({'numero': contato.numero})
    
    @action(detail=False)
    def ordenarPorNome(self, request):
        contato = self.get_object().order_by('nome')
        serializer = ContatoSerializer(contato, many=True)
        return Response(serializer.data)

    @action(detail=True)
    def ordenarPorNumero(self, request):
        contato = self.get_object().order_by('numero')
        serializer = ContatoSerializer(contato, many=True)
        return Response(serializer.data)

    @action(detail=True)
    def atualizarGeral(self, request):
        contato = self.get_object().update(**request.data)
        serializer = ContatoSerializer(contato)
        return Response(serializer.data)

    @action(detail=True)
    def favoritar(self, request, pk=None):
        contato = self.get_object()
        contato.favoritado = not contato.favoritado
        contato.save()
        serializer = ContatoSerializer(contato)
        return Response(serializer.data)

    @action(detail=True)
    def excluir_contato(self, request):
        contato = Contato.objects.get(id=self.kwargs['pk'])
        contato.delete()
        return Response({'message': 'Contato excluído com sucesso.'})


class UsuariosViewSet(viewsets.ModelViewSet):
    queryset = Usuarios.objects.all()
    serializer_class = UsuariosSerializer


    