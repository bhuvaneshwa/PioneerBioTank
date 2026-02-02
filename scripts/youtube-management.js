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
      location: "Ooty",
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
      location: "Trichy",
      videos: [
        "7-Wa-Xw0cE8", // trichy
        "5B6EF44PESU", // trichy
      ],
    },
    {
      location: "Madurai",
      videos: [
        "m8OOkV0Ijr0", // manamadurai
        "TTU5lS2JFgE", // madurai
        "0KmpXepr-tI", // madurai
      ],
    },
    {
      location: "Ooty",
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


const thumbnails = {
  "MBazFXnh1b8": "https://i.ytimg.com/vi/MBazFXnh1b8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCz2UTUlOa1O4I4RBVXDzZ2TO7-eA",
  "y6JytZyGQFE": "https://i.ytimg.com/vi/y6JytZyGQFE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA2zlWZA_Yp7BHHxzt3U_LdUNMD8g",
  "a4JRPdyI3-4": "https://i.ytimg.com/vi/a4JRPdyI3-4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCYHUr55hmGGcEjp_slkyDL5PBmNA",
  "DItjdChKryg": "https://i.ytimg.com/vi/DItjdChKryg/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnectaJAuuFhnIDWT5sNf1jquCfw",
  "v7cVr--PdWs": "https://i.ytimg.com/vi/v7cVr--PdWs/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA9LsWQM4qWt0y6LzaooTyU3B1m0Q",
  "oUI34Z1ucWo": "https://i.ytimg.com/vi/oUI34Z1ucWo/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCXFrXsjxuG5nzfjScK_b9tMf_lSQ",
  "Indf75ql3j8": "https://i.ytimg.com/vi/Indf75ql3j8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCNjfJ_2OMDyXeS9-bMbRdXtreCRQ",
  "OITLQsr8U5U": "https://i.ytimg.com/vi/OITLQsr8U5U/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCsdXbb0paPxIN72ow7qO4DyIERvw",
  "v7nY2ab0Qk8": "https://i.ytimg.com/vi/v7nY2ab0Qk8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAKH-nLqgg9FdkR9SiBgTC__jkBUQ",
  "2ogAFAVGrLI": "https://i.ytimg.com/vi/2ogAFAVGrLI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLABdf5oXEc4Dgm_Tx0i2dwCf9P5_g",
  "u364JEc0um8": "https://i.ytimg.com/vi/u364JEc0um8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAEo5Sn7bhWugJ6DYHi4GId7MInHQ",
  "fG0Dd7YkjYQ": "https://i.ytimg.com/vi/fG0Dd7YkjYQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD0Nn6yDbwPcM3rr8MVmROK3mjVfg",
  "hgwudbNnU6w": "https://i.ytimg.com/vi/hgwudbNnU6w/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCIHXnLLdyrdZOLEdkuG7Qt0OziXg",
  "BP_n-v_o-N0": "https://i.ytimg.com/vi/BP_n-v_o-N0/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGGUgTCg7MA8=&rs=AOn4CLBLArVUl3idxGpNMcMv3sLD7SsJ_w",
  "AoOaCno72ts": "https://i.ytimg.com/vi/AoOaCno72ts/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5wu0j2xhNgBVXrl6-OzxV3otP5g",
  "DStZNdSdJno": "https://i.ytimg.com/vi/DStZNdSdJno/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBzl7c7d1L_MBhoBR9stKr7NjLqeA",
  "B_LGxOYyd1s": "https://i.ytimg.com/vi/B_LGxOYyd1s/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCcY5m30HcJmZYgC0IDvXrzWN1rfw",
  "UYfVpQSMPhU": "https://i.ytimg.com/vi/UYfVpQSMPhU/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGHIgWCg8MA8=&rs=AOn4CLDW4OtIVbJBcGGf_-G2ebgqlufDwg",
  "sbg-7fqrrWM": "https://i.ytimg.com/vi/sbg-7fqrrWM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCZ7wNM5FGemLLef27sty7_VQHrKQ",
  "FPnXEDyco-c": "https://i.ytimg.com/vi/FPnXEDyco-c/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCYTT4zn_ZTPVhyP7jt5pH4UH7PCA",
  "kn1Ba3dzEic": "https://i.ytimg.com/vi/kn1Ba3dzEic/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBgJM1aubkl_kw6wIhHfHAlTaSA9g",
  "P6zLOsDHiCQ": "https://i.ytimg.com/vi/P6zLOsDHiCQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBQLUi15yI6YNNHUbw8voLFVSKQdQ",
  "W0YTGxufkvw": "https://i.ytimg.com/vi/W0YTGxufkvw/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDJu5A973am6t4ORth7OWaw9DMZ-g",
  "Px6i4zZC-q4": "https://i.ytimg.com/vi/Px6i4zZC-q4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDltHZl8cL7NyV6WSe-Ahz2a1M1Gg",
  "eSbME-Y5btk": "https://i.ytimg.com/vi/eSbME-Y5btk/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD1nWkSGHtqes2GC-7NdkxQXLbGjw",
  "hiDRl0dUzJ8": "https://i.ytimg.com/vi/hiDRl0dUzJ8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC79lMJoCiEEQxhI-SdI35n7YBryA",
  "_gp7LPQMvMo": "https://i.ytimg.com/vi/_gp7LPQMvMo/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDA3QnMZ1tOyrFVz-pZvVNhWNQbyQ",
  "8MABQ-nCMzQ": "https://i.ytimg.com/vi/8MABQ-nCMzQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCqrgmE588pdew0_J_6rnxUKUQRhw",
  "rDlKH3Hyywo": "https://i.ytimg.com/vi/rDlKH3Hyywo/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAJKYQRRTp7R6BLv5kytSsz8rLXtA",
  "NROLLy-PpT8": "https://i.ytimg.com/vi/NROLLy-PpT8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBYVEjHk1QVcjwdiMdlHqZKtE1vqw",
  "_hL0DyI-lDg": "https://i.ytimg.com/vi/_hL0DyI-lDg/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAGOedzMule6nVzDnT5jERrXvMsYQ",
  "-T0xpxneD3Y": "https://i.ytimg.com/vi/-T0xpxneD3Y/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAd51ubexh8fTINaAWwlc0E6_h1Vw",
  "yeMLKFj7pmg": "https://i.ytimg.com/vi/yeMLKFj7pmg/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLCUYXRj0gY9ArpCNyRc4FdK4uJjBw",
  "pD5iiiDoIIQ": "https://i.ytimg.com/vi/pD5iiiDoIIQ/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH6BIAC4AOKAgwIABABGGUgZShlMA8=&rs=AOn4CLD0VtmDVf6D_0k_Ts33oqZ-IYolrQ",
  "tG18bZgNfkk": "https://i.ytimg.com/vi/tG18bZgNfkk/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAjuzCEVh_9nx-cItcv3orVGA7CYw",
  "8D4dzH98D-A": "https://i.ytimg.com/vi/8D4dzH98D-A/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBeXpdaMA0-yswTe5ZhJhlfXQ5RKg",
  "qFxL9pBc2mI": "https://i.ytimg.com/vi/qFxL9pBc2mI/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGFMgZShlMA8=&rs=AOn4CLD1kZWAIJBzyxF7Ghp76MHhueANIQ",
  "gqlKktkRxUc": "https://i.ytimg.com/vi/gqlKktkRxUc/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYACwAWKAgwIABABGHIgUSg9MA8=&rs=AOn4CLD6ADXuJeB8R7OGhO5X14BvoINACg",
  "DItjdChKryg": "https://i.ytimg.com/vi/DItjdChKryg/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnectaJAuuFhnIDWT5sNf1jquCfw",
  "EYOe3YJEUs4": "https://i.ytimg.com/vi/EYOe3YJEUs4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAH2mtHcAzGP1h0fUfajN4YH5E1dQ",
  "FDNsqKR9rrY": "https://i.ytimg.com/vi/FDNsqKR9rrY/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDRBocBZ_zORTgno16ocLpIN1K4_Q",
  "SWLF2qA3jwo": "https://i.ytimg.com/vi/SWLF2qA3jwo/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCXRx-7W36JWXF50aTtYvUS0ny5og",
  "IoZpwQDhbdU": "https://i.ytimg.com/vi/IoZpwQDhbdU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBcDyfaP4mDQ5t-XVSMp0erb4z_6w",
  "XP7OFiHb1y8": "https://i.ytimg.com/vi/XP7OFiHb1y8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDRaPEjY2n7wwjI8Yefh3CW1SKVpA",
  "RY-6Flm-DeM": "https://i.ytimg.com/vi/RY-6Flm-DeM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBft-9xmxntigp9-XB3KrfCFmMfgQ",
  "gDT3dhL6ZXA": "https://i.ytimg.com/vi/gDT3dhL6ZXA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC2nuZ6xiMlKkRIzsjNClVcpiHCVw",
  "vIiwlHdDGo0": "https://i.ytimg.com/vi/vIiwlHdDGo0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD6c6ohxJJ11481LBagj5VxoYSa0g",
  "7-Wa-Xw0cE8": "https://i.ytimg.com/vi/7-Wa-Xw0cE8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAzgMjaxkp5lVBdY5n7i2AM2xOVQg",
  "5B6EF44PESU": "https://i.ytimg.com/vi/5B6EF44PESU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDdxF8sleF04QcJxwbR6_ZAx6x4gQ",
  "m8OOkV0Ijr0": "https://i.ytimg.com/vi/m8OOkV0Ijr0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDzl9wMcaRziTB69mUG9fCg3DfOnw",
  "TTU5lS2JFgE": "https://i.ytimg.com/vi/TTU5lS2JFgE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBTPa0BRWsia9a1fH3q1iOgjB9w9g",
  "0KmpXepr-tI": "https://i.ytimg.com/vi/0KmpXepr-tI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA8rjSgQ2Xm49QL_QETl_HoN8R1WA",
  "540VkmqUCyI": "https://i.ytimg.com/vi/540VkmqUCyI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBmDheIfkimBInRcb2cuhanGQc-ZA",
  "2lc7j0iMlp0": "https://i.ytimg.com/vi/540VkmqUCyI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBmDheIfkimBInRcb2cuhanGQc-ZA",
  "bsfCX1Rdnqk": "https://i.ytimg.com/vi/bsfCX1Rdnqk/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDzOJsMhXcYFDJS5lk-zD8af9P-3g",
  "T7-XPrJ3x-w": "https://i.ytimg.com/vi/T7-XPrJ3x-w/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD80W2HR-DXksb9pTBNgNDihY_9oQ",
  "38utghhK_1o": "https://i.ytimg.com/vi/38utghhK_1o/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCShjKnOWqCGUhuPMFMx4qR8hDl3A",
  "ixuDfOQ6SZs": "https://i.ytimg.com/vi/ixuDfOQ6SZs/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLADQQVTKyYW8NnJhfdSAkwAK7zzAA",
  "d9ne69GD-3o": "https://i.ytimg.com/vi/d9ne69GD-3o/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA9CwFZvJmmhBzf3fUaXPl9xvumrA",
  "0d8bQmGFiyY": "https://i.ytimg.com/vi/0d8bQmGFiyY/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBMG1dRrKwHPQ9dUvWBfYGy8kc7nQ",
  "l44wfsPGuJ4": "https://i.ytimg.com/vi/l44wfsPGuJ4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTE1J13xbA0SlTFBPc7JYRDsiB9w",
  "UnFCJst5I6Q": "https://i.ytimg.com/vi/UnFCJst5I6Q/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC_i4khyTNJ2XzOTD2aqg_AWBTjjQ",
  "5JHOo18s2uc": "https://i.ytimg.com/vi/5JHOo18s2uc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCC0kwV8YorhIaDqbojDRoiVbu7kA",
  "BtcdYe7ehBY": "https://i.ytimg.com/vi/BtcdYe7ehBY/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDcXRYPQuqgHF913k2ksuE49YddSQ",
  "b0AsEkK5q3I": "https://i.ytimg.com/vi/b0AsEkK5q3I/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDrEfFTdqNfNNBfvIkvl0-tDQNbBQ",
  "heOD_Gy3vjE": "https://i.ytimg.com/vi/heOD_Gy3vjE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDMbq6dZuwmKEjf2IQSQV6XsoztqQ",
  "baZzJ1_R9ME": "https://i.ytimg.com/vi/baZzJ1_R9ME/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGHIgRygsMA8=&rs=AOn4CLCbzyULAv-ar1dUQUrYKahni1zOQA",
  "OHuIYDsmHdU": "https://i.ytimg.com/vi/OHuIYDsmHdU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCpwO6ZnXs_fxVF-2WpcWVU8Fiuuw",
  "Dovu6dtyjUQ": "https://i.ytimg.com/vi/Dovu6dtyjUQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDFwFaIj4FqZJtQ5KDRby0iSRRwjQ",
  "c7XRN9lc5LQ": "https://i.ytimg.com/vi/c7XRN9lc5LQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC8zst5oCXvBuFgRuKz0l3pSurpiA",
  "PY1ULiA6c14": "https://i.ytimg.com/vi/PY1ULiA6c14/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAgrzdpdFApAJk28Kjr8YyRIT4Ahg",
  "BP_Khla5mWc": "https://i.ytimg.com/vi/BP_Khla5mWc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDahBRrD7SXSOogIDLV8-sAg7sByw",
  "LsgrwjrfVN8": "https://i.ytimg.com/vi/LsgrwjrfVN8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAcmyxUcwvOG0V5U-SIX1jextJe3g",
  "A3zFHFgqB_s": "https://i.ytimg.com/vi/A3zFHFgqB_s/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDvWi4TN0OHWJFy7GTS8Zw3jGT_pg",
  "Ttk_0_u8d_M": "https://i.ytimg.com/vi/Ttk_0_u8d_M/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCOvRC3iLTCuud1MUKdumdL6U7StQ",
  "IPC6wcqf2t8": "https://i.ytimg.com/vi/IPC6wcqf2t8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCq1z2euhha3rIbR0hjpUqcTrHtQA",
  "KoSKMvJbCdE": "https://i.ytimg.com/vi/KoSKMvJbCdE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBDANsHMaUMhAcxta-yfvZ2AqVusg",
  "Lwn4UVEzcps": "https://i.ytimg.com/vi/Lwn4UVEzcps/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCBcbbz0NyRFh39GzzOgmJwjgZDPg",
  "Yb6Hi6vhtO0": "https://i.ytimg.com/vi/Yb6Hi6vhtO0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDBt05Qe2U2kaxj6Ajn-N17M2QepQ",
  "UEWGWnL-djo": "https://i.ytimg.com/vi/UEWGWnL-djo/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCrzgiqj0xpVa9UlHN9F-ABW0piCw",
  "8bV_mvZlRG8": "https://i.ytimg.com/vi/8bV_mvZlRG8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB87C9GNQz27LLw0b5hU5-ibZj9-w",
  "loMiDQGq7W4": "https://i.ytimg.com/vi/loMiDQGq7W4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBceUicc8g6pKXLXpSUh6NTIsFlBQ",
  "62bRPQu6nRA": "https://i.ytimg.com/vi/62bRPQu6nRA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCe_04xvCNJkpIfO0HqC7M9iryXmw",
  "x1S2dUhY4H0": "https://i.ytimg.com/vi/x1S2dUhY4H0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDo2hsSUBtlP61P5PE1LY_QC5izXg",
  "pLnFcNTQES0": "https://i.ytimg.com/vi/pLnFcNTQES0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDtKQLMYEV2rNpwobeh3exjZP3QIw",
  "w9-a-pBgWfY": "https://i.ytimg.com/vi/w9-a-pBgWfY/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA-VrDF1ZE3h6kvCYAGU8PUPKxhIA",
  "6uSbdw2PIjI": "https://i.ytimg.com/vi/6uSbdw2PIjI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB8mVopVqlONiwZDR1l39zZ_ymZHQ",
  "SCUcu9l-Kzc": "https://i.ytimg.com/vi/SCUcu9l-Kzc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDxt2pjbDcLTYHPLOUm2bBjKftzjA",
  "_GdadcsJLds": "https://i.ytimg.com/vi/_GdadcsJLds/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDpEHEqqK9BuT_WHkRKg0_F7TsAwA",
  "gewlUF1VJ5E": "https://i.ytimg.com/vi/gewlUF1VJ5E/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLASoi_srX6RJO4DyRlh-aC-8mRRJg",
  "o-JZyak-RZk": "https://i.ytimg.com/vi/o-JZyak-RZk/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBlaNdp9UofsjB3OXv3SCRppafdqw"
}

// Function to create YouTube video element
function createYouTubeElement(videoId) {
  const div = document.createElement("div");
  div.className = "yt-lite relative w-full mb-2 aspect-video cursor-pointer";
  div.setAttribute("data-id", videoId);

  div.innerHTML = `
    <img
      src="${thumbnails[videoId]}"
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
  wrapper.className = "space-y-8";

  // Add each location group
  locationGroups.forEach((group, index) => {
    console.log("groupss", group)
    // Create location section
    const locationSection = document.createElement("div");
    locationSection.className = "location-group w-full";

    // Create location heading
    const heading = document.createElement("h2");
    heading.className =
      "text-2xl sm:text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3";
    heading.innerHTML = `
      <i class="fas fa-map-marker-alt text-emerald-600 text-xl"></i>
      <span>${group.location}</span>
      <span class="text-base font-normal text-slate-500">(${group.videos.length} projects)</span>
    `;
    locationSection.appendChild(heading);

    // Create videos grid for this location
    const videosGrid = document.createElement("div");

    let gridClasses =
      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8";

    // ✅ Add border & padding ONLY if NOT last group
    if (index !== locationGroups.length - 1) {
      gridClasses += " pb-15 border-b border-slate-300";
    }
    videosGrid.className = gridClasses

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
