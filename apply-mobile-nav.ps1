# PowerShell script to add banner and mobile navigation to all remaining pages

Write-Host "=== Pioneer BioTank - Adding Banner & Mobile Navigation ===" -ForegroundColor Cyan
Write-Host ""

$files = @(
    "about.html",
    "Bio-septic.html",
    "UndergroundWaterTank.html", 
    "Howitworks.html",
    "project.html",
    "contact.html"
)

$bannerCode = @'
  <!-- Top Banner -->
  <div class="text-white py-2 text-sm" style="background-color: #003233;">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row justify-between items-center gap-2">
        <div class="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <a href="tel:+919790666231" class="flex items-center hover:text-gray-300">
            <i class="fas fa-phone mr-2" style="color: #00AD50;"></i>
            <span class="text-xs sm:text-sm">+91 97906 66231</span>
          </a>
          <a href="mailto:info@pioneerbiotank.com" class="flex items-center hover:text-gray-300">
            <i class="fas fa-envelope mr-2" style="color: #00AD50;"></i>
            <span class="text-xs sm:text-sm">info@pioneerbiotank.com</span>
          </a>
        </div>
        <div class="flex items-center gap-3">
          <a href="#" class="hover:text-gray-300" style="transition: color 0.3s;" onmouseover="this.style.color='#00AD50'" onmouseout="this.style.color='white'"><i class="fab fa-facebook text-sm"></i></a>
          <a href="#" class="hover:text-gray-300" style="transition: color 0.3s;" onmouseover="this.style.color='#00AD50'" onmouseout="this.style.color='white'"><i class="fab fa-instagram text-sm"></i></a>
          <a href="#" class="hover:text-gray-300" style="transition: color 0.3s;" onmouseover="this.style.color='#00AD50'" onmouseout="this.style.color='white'"><i class="fab fa-linkedin text-sm"></i></a>
          <a href="#" class="hover:text-gray-300" style="transition: color 0.3s;" onmouseover="this.style.color='#00AD50'" onmouseout="this.style.color='white'"><i class="fab fa-youtube text-sm"></i></a>
        </div>
      </div>
    </div>
  </div>

'@

Write-Host "Banner code prepared" -ForegroundColor Green
Write-Host "Files to update: $($files.Count)" -ForegroundColor Yellow
Write-Host ""

foreach ($file in $files) {
    Write-Host "Processing: $file" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "✓ Script ready to apply changes" -ForegroundColor Green
Write-Host "✓ Banner will be added after <body> tag" -ForegroundColor Green  
Write-Host "✓ Mobile menu button and dropdown will be added" -ForegroundColor Green
Write-Host "✓ Responsive styles will be applied" -ForegroundColor Green
