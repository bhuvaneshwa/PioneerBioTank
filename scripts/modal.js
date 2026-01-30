function openModal() {
  // Prevent multiple modals
  if (document.getElementById("jsModal")) return;

  // Overlay
  const overlay = document.createElement("div");
  overlay.id = "jsModal";
  overlay.className =
    "fixed inset-0 z-50 flex items-center justify-center bg-black/60";

  // Modal box
  const modalBox = document.createElement("div");
 modalBox.className =
  "relative bg-white rounded-2xl shadow-2xl " +
  "w-[95%] sm:w-[90%] max-w-7xl " +
  "h-[90%] sm:h-[85%] " +
  "p-4 sm:p-6 " +
  "transform scale-95 opacity-0 transition-all duration-300 " +
  "overflow-hidden";

  modalBox.innerHTML = `
     <!-- Close Button -->
  <button id="cancelBtn"
    class="fixed sm:absolute right-3 top-3 sm:right-5 sm:top-5
           z-50 px-3 py-1.5 text-white bg-black rounded-full cursor-pointer">
    ✕
  </button>
      <!-- Scrollable Content -->
  <div class="h-full overflow-y-auto pr-2 sm:pr-4 overflow-scroll">
    <h2 class="text-base sm:text-lg font-semibold">
      FRP - Bio Septic Tank - Single Tank 1.2KL to 60KL
    </h2>

    <p class="mt-2 text-sm text-slate-600">Overview</p>
      <ul>
        <li>
        The Bio-Septic tank is an anaerobic digester for treating septic water released from toilets.
        </li>
        <li>
        It has five compartments with interconnecting flow. Common Manholes with covers are provided on top of the compartments. Inoculum to digest the human waste has to be added before using the bio-septic tank.
        </li>
        <li>
        Poly-grass lining is provided in the First Two Compartments to provide large surface area and for supporting attached growth of anaerobic bacteria..
        </li>
         <li>
       Bio-Media ( 400 sq.m./cu.m.) is filled in the Third and Fourth Compartment to increase the surface area for bio-films and serve as growth medium for the bacteria. The last compartment can be used for storing / pumping / disinfecting the treated effluent.
        </li>
        <li>
       Sludge accumulation in the tank is vastly reduced due to complete digestion of waste by the bacteria - hence periodic cleaning is unnecessary. The system is available from 1,100 litres to 60,000 litres capacity.
        </li>
        <li>
      The system is to be used for treating toilet water (black water) only. Grey water (bath and cloth rinse water) should not be mixed.
        </li>
      </ul>
      <div class="mt-6 flex justify-center">
      <a href="/assets/brochure.pdf" download
        class="px-4 py-2 bg-[#004900] text-white rounded-lg">
        Download brochure
      </a>
    </div>
  </div>
    `;

  overlay.appendChild(modalBox);
  document.body.appendChild(overlay);

  // Animate in
  requestAnimationFrame(() => {
    modalBox.classList.remove("scale-95", "opacity-0");
    modalBox.classList.add("scale-100", "opacity-100");
  });

  // Close handlers
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  modalBox.querySelector("#cancelBtn").onclick = closeModal;

  document.addEventListener("keydown", escClose);
}

function closeModal() {
  const overlay = document.getElementById("jsModal");
  if (!overlay) return;

  const modalBox = overlay.firstChild;

  modalBox.classList.remove("scale-100", "opacity-100");
  modalBox.classList.add("scale-95", "opacity-0");

  setTimeout(() => {
    overlay.remove();
    document.removeEventListener("keydown", escClose);
  }, 300);
}

function escClose(e) {
  if (e.key === "Escape") closeModal();
}
