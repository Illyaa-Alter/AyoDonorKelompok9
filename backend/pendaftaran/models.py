from django.db import models
from django.core.exceptions import ValidationError
from datetime import timedelta
from django.utils import timezone

class Daerah(models.Model):
    name = models.CharField(unique=True, max_length=100)
    create = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name or "Daerah Tanpa Nama"  # Pengamanan jika `name` kosong

class Klinik(models.Model):
    name = models.CharField(unique=True, max_length=50)
    nomor = models.CharField(max_length=20)
    alamat = models.CharField(max_length=200)
    daerah = models.ForeignKey(Daerah, on_delete=models.CASCADE, blank=True, null=True)
    create = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name or "Klinik Tanpa Nama"  # Pengamanan jika `name` kosong

class Pendaftaran(models.Model):
    name = models.CharField(max_length=50)
    nim = models.CharField(max_length=30)
    jenis_kelamin = models.CharField(max_length=10)
    daerah = models.ForeignKey(Daerah, on_delete=models.CASCADE, blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    klinik = models.ForeignKey(Klinik, on_delete=models.CASCADE, blank=True, null=True)
    status = models.CharField(max_length=100, default='Menunggu')
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def clean(self):
        # Validasi jenis_kelamin
        if self.jenis_kelamin.lower() not in ['laki-laki', 'perempuan']:
            raise ValidationError("Jenis kelamin harus 'Laki-laki' atau 'Perempuan'.")

    def save(self, *args, **kwargs):
        # Set end_date otomatis jika tidak diisi
        if self.start_date and not self.end_date:
            self.end_date = self.start_date + timedelta(days=3)

        # Update status jika tanggal telah terlewat
        if self.end_date and timezone.now().date() > self.end_date and self.status != 'Selesai':
            self.status = 'Terlewatkan'

        # Panggil metode simpan dari parent class
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name or "Pendaftaran Tanpa Nama"  # Pengamanan jika `name` kosong
