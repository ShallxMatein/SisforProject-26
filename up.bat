@echo off
set /p msg="Masukkan pesan commit: "
git add .
git commit -m "%msg%"
git push origin main
echo Berhasil di-up ke GitHub dan Discord!