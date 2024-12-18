from rest_framework import serializers
from .models import *  # Explicitly import the model

class DaerahSerializer(serializers.ModelSerializer):
    class Meta:
        model = Daerah
        fields = ('id', 'name')  # Konsisten dengan urutan id, name

class KlinikSerializer(serializers.ModelSerializer):
    daerah = serializers.PrimaryKeyRelatedField(queryset=Daerah.objects.all(), required=False)

    class Meta:
        model = Klinik
        fields = ('id', 'name', 'nomor', 'alamat', 'daerah')
        read_only_fields = ('id',)

class PendaftaranSerializer(serializers.ModelSerializer):
    daerah = serializers.PrimaryKeyRelatedField(queryset=Daerah.objects.all(), required=False)
    klinik = serializers.PrimaryKeyRelatedField(queryset=Klinik.objects.all(), required=False)

    class Meta:
        model = Pendaftaran
        fields = ('id', 'name', 'nim', 'jenis_kelamin', 'daerah', 'start_date', 'end_date', 'klinik', 'status', 'created', 'modified')
        read_only_fields = ('id', 'created', 'modified')
    
    def validate_jenis_kelamin(self, value):
        valid_choices = ['Laki-laki', 'Perempuan']
        if value not in valid_choices:
            raise serializers.ValidationError(f"Jenis kelamin harus salah satu dari: {', '.join(valid_choices)}.")
        return value