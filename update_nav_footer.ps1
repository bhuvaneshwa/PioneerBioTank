# Script to update navigation and footer across all HTML files

$newNav = @'
    <!-- Navigation -->
    <nav class="bg-white shadow-lg fixed w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <a href="index.html" class="flex items-center">
                        <span class="text-2xl font-bold" style="color: #00AD50;">Pioneer BioTank</span>
                    </a>
                </div>
                <div class="hidden md:flex items-center space-x-8">
                    <a href="index.html" class="text-gray-700 hover:text-green-600 font-medium ACTIVE_HOME">Home</a>
                    <div class="relative group">
                        <button class="text-gray-700 hover:text-green-600 font-medium flex items-center ACTIVE_PRODUCTS">Products <i class="fas fa-chevron-down ml-1 text-xs"></i></button>
                        <div class="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-64">
                            <a href="Bio-septic.html" class="block px-4 py-2 text-gray-700 ACTIVE_BIOSEPTIC" style="background-color: transparent;" onmouseover="this.style.backgroundColor='#f0fdf4'" onmouseout="this.style.backgroundColor='transparent'">FRP Bio-Septic Tank</a>
                            <a href="UndergroundWaterTank.html" class="block px-4 py-2 text-gray-700 ACTIVE_WATER" style="background-color: transparent;" onmouseover="this.style.backgroundColor='#f0fdf4'" onmouseout="this.style.backgroundColor='transparent'">FRP Underground Water Tank</a>
                        </div>
                    </div>
                    <a href="Howitworks.html" class="text-gray-700 hover:text-green-600 font-medium ACTIVE_HOW">How It Works</a>
                    <a href="project.html" class="text-gray-700 hover:text-green-600 font-medium ACTIVE_PROJECTS">Projects</a>
                    <a href="about.html" class="text-gray-700 hover:text-green-600 font-medium ACTIVE_ABOUT">About Us</a>
                    <a href="contact.html" class="text-gray-700 hover:text-green-600 font-medium ACTIVE_CONTACT">Contact Us</a>
                    <a href="contact.html" class="text-white px-6 py-2 rounded-lg font-medium" style="background-color: #00AD50;" onmouseover="this.style.backgroundColor='#009945'" onmouseout="this.style.backgroundColor='#00AD50'">Get a Quote</a>
                </div>
            </div>
        </div>
    </nav>
'@

$newFooter = @'
    <!-- Footer -->
    <footer class="text-white py-12" style="background-color: #003233;">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-2xl font-bold mb-4" style="color: #00AD50;">Pioneer BioTank</h3>
                    <p class="text-gray-300">Leading provider of eco-friendly FRP water storage and bio-septic solutions.</p>
                    <div class="mt-4">
                        <p class="text-sm text-gray-300"><i class="fas fa-phone mr-2" style="color: #00AD50;"></i>+91 98765 43210</p>
                        <p class="text-sm text-gray-300 mt-2"><i class="fas fa-envelope mr-2" style="color: #00AD50;"></i>info@pioneerbiotank.com</p>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="index.html" class="text-gray-300 hover:text-white">Home</a></li>
                        <li><a href="about.html" class="text-gray-300 hover:text-white">About Us</a></li>
                        <li><a href="Howitworks.html" class="text-gray-300 hover:text-white">How It Works</a></li>
                        <li><a href="project.html" class="text-gray-300 hover:text-white">Projects</a></li>
                        <li><a href="contact.html" class="text-gray-300 hover:text-white">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold mb-4">Our Products</h4>
                    <ul class="space-y-2">
                        <li><a href="Bio-septic.html" class="text-gray-300 hover:text-white">FRP Bio-Septic Tank</a></li>
                        <li><a href="UndergroundWaterTank.html" class="text-gray-300 hover:text-white">FRP Underground Water Tank</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold mb-4">Follow Us</h4>
                    <div class="flex space-x-4 mb-4">
                        <a href="#" class="text-gray-300 hover:text-white text-2xl" style="transition: color 0.3s;" onmouseover="this.style.color='#00AD50'" onmouseout="this.style.color='#d1d5db'"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="text-gray-300 hover:text-white text-2xl" style="transition: color 0.3s;" onmouseover="this.style.color='#00AD50'" onmouseout="this.style.color='#d1d5db'"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="text-gray-300 hover:text-white text-2xl" style="transition: color 0.3s;" onmouseover="this.style.color='#00AD50'" onmouseout="this.style.color='#d1d5db'"><i class="fab fa-linkedin"></i></a>
                        <a href="#" class="text-gray-300 hover:text-white text-2xl" style="transition: color 0.3s;" onmouseover="this.style.color='#00AD50'" onmouseout="this.style.color='#d1d5db'"><i class="fab fa-youtube"></i></a>
                    </div>
                    <a href="contact.html" class="inline-block mt-4 text-white px-6 py-2 rounded-lg font-semibold text-sm" style="background-color: #00AD50;" onmouseover="this.style.backgroundColor='#009945'" onmouseout="this.style.backgroundColor='#00AD50'">Get a Quote</a>
                </div>
            </div>
            <div class="mt-8 pt-8 text-center text-gray-300" style="border-top: 1px solid rgba(255,255,255,0.1);">
                <p>&copy; 2025 Pioneer BioTank. All rights reserved. | Designed for sustainable water solutions.</p>
            </div>
        </div>
    </footer>
'@

Write-Host "Navigation and Footer templates created successfully!" -ForegroundColor Green
