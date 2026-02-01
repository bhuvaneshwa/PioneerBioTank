// YouTube Videos Data - Organized by Location
const youtubeVideos = {
  residential: [
    {
      location: "Coimbatore",
      videos: [
        "MBazFXnh1b8", // coimbatore
        "y6JytZyGQFE", // coimbatore
        "a4JRPdyI3-4", // coimbatore
        "DItjdChKryg", // coimbatore
        "v7cVr--PdWs", // coimbatore
        "oUI34Z1ucWo", // coimbatore
        "Indf75ql3j8", // coimbatore
        "OITLQsr8U5U", // coimbatore
        "v7nY2ab0Qk8", // palladam
      ],
    },
    {
      location: "ooty",
      videos: [
        "2ogAFAVGrLI", // ooty
        "u364JEc0um8", // ooty
      ],
    },
    {
      location: "Erode",
      videos: [
          "fG0Dd7YkjYQ", // erode
          "hgwudbNnU6w", // erode
          "BP_n-v_o-N0", // erode
          "AoOaCno72ts", // erode
          "DStZNdSdJno", // namakkal
          "B_LGxOYyd1s", // perundurai
      ],
    },
    {
      location: "Salem",
      videos: [
        "UYfVpQSMPhU", // yercad
        "sbg-7fqrrWM", // salem
        "FPnXEDyco-c", // dharmapuri
      ],
    },
    {
      location: "Chennai",
      videos: [
        "kn1Ba3dzEic", // chennai
        "P6zLOsDHiCQ", // chennai
      ],
    },
    {
      location: "Other Locations",
      videos: [
        "W0YTGxufkvw", // thanjavur
        "Px6i4zZC-q4", // thirunalveli
        "eSbME-Y5btk", // pattukottai
        "hiDRl0dUzJ8", // aruppukottai
        "_gp7LPQMvMo", // ?
        "8MABQ-nCMzQ", // palani
        "rDlKH3Hyywo", // nilgiris
        "NROLLy-PpT8", // gokarna
        "_hL0DyI-lDg", // devakottai
        "-T0xpxneD3Y", // ?
        "yeMLKFj7pmg", // ?
        "pD5iiiDoIIQ", // ?
        "tG18bZgNfkk", // ?
        "8D4dzH98D-A", // ?
        "qFxL9pBc2mI", // ?
        "gqlKktkRxUc", // ?
      ],
    },
  ],

  commercial: [
    {
      location: "Coimbatore",
      videos: [
        "DItjdChKryg", // coimbatore
        "EYOe3YJEUs4", // annur
        "FDNsqKR9rrY", // coimbatore
      ],
    },
    {
      location: "Erode",
      videos: [
        "SWLF2qA3jwo", // erode
        "IoZpwQDhbdU", // erode
      ],
    },
    {
      location: "Salem",
      videos: [
        "XP7OFiHb1y8", // salem
      ],
    },
    {
      location: "Chennai",
      videos: [
        "RY-6Flm-DeM", // chennai
        "gDT3dhL6ZXA", // chennai
        "vIiwlHdDGo0", // chennai
      ],
    },
    {
      location: "trichy",
      videos: [
        "7-Wa-Xw0cE8", // trichy
        "5B6EF44PESU", // trichy
      ],
    },
    {
      location: "madurai",
      videos: [
        "m8OOkV0Ijr0", // manamadurai
        "TTU5lS2JFgE", // madurai
        "0KmpXepr-tI", // madurai
      ],
    },
    {
      location: "ooty",
      videos: [
        "540VkmqUCyI", // ooty
        "2lc7j0iMlp0", // ooty
      ],
    },
    {
      location: "Other Locations",
      videos: [
        "bsfCX1Rdnqk", // arantangi
        "T7-XPrJ3x-w", // pudukkotai
        "38utghhK_1o", // bangalore
        "ixuDfOQ6SZs", // krishnagiri
        "d9ne69GD-3o", // karaikudi

        "0d8bQmGFiyY", // dharmapuri
        "l44wfsPGuJ4", // karnataka
        "UnFCJst5I6Q", // ramnad
        "5JHOo18s2uc", // ?
        "BtcdYe7ehBY", // pattukotai
        "b0AsEkK5q3I", // manaparai
        "heOD_Gy3vjE", // kumbagonam
        "baZzJ1_R9ME", // sivagangai
        "OHuIYDsmHdU", // palani
        "Dovu6dtyjUQ", // karaikudi
        "c7XRN9lc5LQ", // tiruppur
        "PY1ULiA6c14", // pennagaram
        "BP_Khla5mWc", // ?
        "LsgrwjrfVN8", // kotagiri
        "A3zFHFgqB_s", // kerala
        "Ttk_0_u8d_M", // jolarpattai

        "IPC6wcqf2t8", // rameshwaram
        "KoSKMvJbCdE", // ?

        "Lwn4UVEzcps", // sirkali
        "Yb6Hi6vhtO0", // kuttralam
        "UEWGWnL-djo", // nagercoil
        "8bV_mvZlRG8", // viruthachalam
        "loMiDQGq7W4", // tirunelveli
        "62bRPQu6nRA", // tiruvanamalai
        "x1S2dUhY4H0", // palani
        "pLnFcNTQES0", // sattur
        "w9-a-pBgWfY", // ?
        "6uSbdw2PIjI", // kumbakonam
        "SCUcu9l-Kzc", // kallakurichi
        "_GdadcsJLds", // kanchipuram
        "gewlUF1VJ5E", // ?
        "o-JZyak-RZk", // ?
      ],
    },
  ],
};

// Function to create YouTube video element
function createYouTubeElement(videoId) {
  const div = document.createElement("div");
  div.className = "yt-lite relative w-full mb-10 aspect-video cursor-pointer";
  div.setAttribute("data-id", videoId);

  div.innerHTML = `
    <img
      src="https://i.ytimg.com/vi/${videoId}/hqdefault.jpg"
      class="absolute inset-0 w-full h-full object-cover rounded-2xl" 
      loading="lazy"
      alt="YouTube video thumbnail" />
    <div class="absolute inset-0 flex items-center justify-center">
      <img src="./images/youtube_icon.png"
        class="w-16 h-16 sm:w-20 sm:h-20 object-contain" 
        alt="Play button" />
    </div>
    <div class="yt-loader absolute inset-0 hidden items-center justify-center bg-black/40 rounded-2xl">
      <div class="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin">
      </div>
    </div>
  `;

  return div;
}

// Function to load videos into a container with location grouping
function loadVideos(containerId, locationGroups) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Clear existing content
  container.innerHTML = "";

  // Create a wrapper for all location groups
  const wrapper = document.createElement("div");
  wrapper.className = "space-y-16";

  // Add each location group
  locationGroups.forEach((group) => {
    // Create location section
    const locationSection = document.createElement("div");
    locationSection.className = "location-group w-full";

    // Create location heading
    const heading = document.createElement("h2");
    heading.className =
      "text-2xl sm:text-3xl font-bold mt-25 text-slate-900 mb-8 flex items-center gap-3";
    heading.innerHTML = `
      <i class="fas fa-map-marker-alt text-emerald-600 text-xl"></i>
      <span>${group.location}</span>
      <span class="text-base font-normal text-slate-500">(${group.videos.length} projects)</span>
    `;
    locationSection.appendChild(heading);

    // Create videos grid for this location
    const videosGrid = document.createElement("div");
    videosGrid.className =
      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8";

    // Add all videos for this location
    group.videos.forEach((videoId) => {
      const videoElement = createYouTubeElement(videoId);
      videosGrid.appendChild(videoElement);
    });

    locationSection.appendChild(videosGrid);
    wrapper.appendChild(locationSection);
  });

  container.appendChild(wrapper);

  // Re-attach click handlers for newly created elements
  attachVideoClickHandlers();
}

// Function to attach click handlers to video elements
function attachVideoClickHandlers() {
  document.querySelectorAll(".yt-lite").forEach((el) => {
    // Remove existing listeners by cloning
    const newEl = el.cloneNode(true);
    el.parentNode.replaceChild(newEl, el);

    newEl.addEventListener("click", () => {
      if (newEl.classList.contains("loaded")) return;

      newEl.classList.add("loaded");
      newEl.classList.add("animate-pulse");

      const loader = newEl.querySelector(".yt-loader");
      loader.classList.remove("hidden");
      loader.classList.add("flex");

      const videoId = newEl.dataset.id;

      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
      iframe.className = "absolute inset-0 w-full h-full";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;

      iframe.onload = () => {
        loader.remove();
      };

      newEl.innerHTML = "";
      newEl.classList.remove("animate-pulse");
      newEl.appendChild(iframe);
    });
  });
}

// Initialize videos when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  loadVideos("residential-videos-container", youtubeVideos.residential);
  loadVideos("commercial-videos-container", youtubeVideos.commercial);
});
