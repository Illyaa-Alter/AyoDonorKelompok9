from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404
from .models import *
from .serializers import *

def home(request):
    return HttpResponse("Aman gess")


class DaerahViewSet(viewsets.ViewSet):
    queryset = Daerah.objects.all()
    serializer_class = DaerahSerializer
    permission_classes = [permissions.AllowAny]

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def update(self, request, pk=None):
        daerah = get_object_or_404(self.queryset, pk=pk)  # Perbaikan variabel
        serializer = self.serializer_class(daerah, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

class KlinikViewSet(viewsets.ViewSet):
    queryset = Klinik.objects.all()
    serializer_class = KlinikSerializer
    permission_classes = [permissions.AllowAny]

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def update(self, request, pk=None):
        clinic = get_object_or_404(self.queryset, pk=pk)
        serializer = self.serializer_class(clinic, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

class PendaftaranViewSet(viewsets.ViewSet):
    queryset = Pendaftaran.objects.all()
    serializer_class = PendaftaranSerializer
    permission_classes = [permissions.AllowAny]

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        try:
            pendaftaran = get_object_or_404(self.queryset, pk=pk)
            serializer = self.serializer_class(pendaftaran)
            return Response(serializer.data)
        except Exception as e:
            # Handle any exception for better debugging
            return Response({"error": str(e)}, status=400)

    def update(self, request, pk=None):
        pendaftaran = get_object_or_404(self.queryset, pk=pk)
        serializer = self.serializer_class(pendaftaran, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        pendaftaran = get_object_or_404(self.queryset, pk=pk)
        pendaftaran.delete()
        return Response({"message": "Pendaftaran deleted successfully"}, status=204)