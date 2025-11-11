echo off
if not exist Libraries\OpenCV-4.7.0.js (
  nuget install Beckhoff.OpenCV -OutputDirectory scripts -ConfigFile NuGet.config
  mkdir Libraries
  copy "scripts\Beckhoff.OpenCV.470.0.12\build\scripts\opencv.js" Libraries\OpenCV-4.7.0.js
  if exist scripts\ (
    rmdir scripts /s /q
  )
)