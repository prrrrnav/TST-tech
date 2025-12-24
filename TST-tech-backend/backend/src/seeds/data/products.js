module.exports = [
    // ===== Fingerprint =====
    {
        id: "e3c-wifi",
        name: "E3C Wi-Fi Fingerprint Device",
        shortName: "E3C Wi-Fi",
        categoryId: "biometric-cctv",
        productTypeId: "fingerprint",
        price: 12500,
        originalPrice: 15000,
        discount: 17,
        rating: 5,
        reviews: 127,
        featured: true,
        inStock: true,
        images: ["/images/products/e3c-wifi/main.jpg"]
    },
    {
        id: "f6",
        name: "F6 Biometric Scanner",
        shortName: "F6",
        categoryId: "biometric-cctv",
        productTypeId: "fingerprint",
        price: 9500,
        originalPrice: 11000,
        discount: 14,
        rating: 4,
        reviews: 89,
        featured: false,
        inStock: true,
        images: ["/images/products/f6/main.jpg"]
    },
    {
        id: "k30-pro",
        name: "K30 PRO Fingerprint System",
        shortName: "K30 PRO",
        categoryId: "biometric-cctv",
        productTypeId: "fingerprint",
        price: 18500,
        originalPrice: 22000,
        discount: 16,
        rating: 5,
        reviews: 156,
        featured: true,
        inStock: true,
        images: ["/images/products/k30-pro/main.jpg"]
    },
    {
        id: "x990",
        name: "X990 Enterprise Fingerprint",
        shortName: "X990",
        categoryId: "biometric-cctv",
        productTypeId: "fingerprint",
        price: 15800,
        originalPrice: 18500,
        discount: 15,
        rating: 4,
        reviews: 92,
        featured: true,
        inStock: true,
        images: ["/images/products/x990/main.jpg"]
    },

    // ===== Face Recognition =====
    {
        id: "f19",
        name: "Face Recognition F19",
        shortName: "F19",
        categoryId: "biometric-cctv",
        productTypeId: "face-recognition",
        rating: 4.7,
        reviews: 98,
        featured: true,
        inStock: true,
        images: ["/images/products/f19/main.jpg"]
    },
    {
        id: "face-recognition-pro",
        name: "Face Recognition Pro",
        shortName: "FR-PRO",
        categoryId: "biometric-cctv",
        productTypeId: "face-recognition",
        price: 28500,
        originalPrice: 35000,
        discount: 18,
        rating: 5,
        reviews: 312,
        featured: true,
        inStock: true,
        images: ["/images/products/face-recognition-pro/main.jpg"]
    },
    {
        id: "thermal-face-scanner",
        name: "Thermal Face Scanner",
        shortName: "TFS-200",
        categoryId: "biometric-cctv",
        productTypeId: "face-recognition",
        price: 32000,
        originalPrice: 38000,
        discount: 16,
        rating: 4,
        reviews: 198,
        featured: false,
        inStock: true,
        images: ["/images/products/thermal-face-scanner/main.jpg"]
    },
    {
        id: "uface-301",
        name: "UFACE-301 Recognition System",
        shortName: "UFACE-301",
        categoryId: "biometric-cctv",
        productTypeId: "face-recognition",
        price: 24500,
        originalPrice: 28000,
        discount: 13,
        rating: 5,
        reviews: 143,
        featured: true,
        inStock: true,
        images: ["/images/products/uface-301/main.jpg"]
    },
    // ===== Entrance Control =====
    {
        id: "flap-barrier-fb100",
        name: "Flap Barrier FB100",
        shortName: "FB100",
        categoryId: "entrance",
        productTypeId: "flap-barriers",
        price: 125000,
        originalPrice: 145000,
        discount: 14,
        rating: 4,
        reviews: 64,
        featured: true,
        inStock: true,
        images: ["/images/products/flap-barrier-fb100/main.jpg"],
        features: [
            "Bi-directional access control",
            "Anti-tailgating",
            "Emergency open function"
        ],
        specifications: {
            "Lane Width": "600 mm",
            "Opening Time": "0.2 sec",
            "Power Supply": "AC 220V",
            "Material": "Stainless Steel"
        }
    },

    {
        id: "tripod-turnstile-tt300",
        name: "Tripod Turnstile TT300",
        shortName: "TT300",
        categoryId: "entrance",
        productTypeId: "tripod-turnstile",
        price: 68000,
        originalPrice: 78000,
        discount: 13,
        rating: 4,
        reviews: 71,
        featured: false,
        inStock: true,
        images: ["/images/products/tripod-turnstile-tt300/main.jpg"],
        features: [
            "Single / bi-directional passage",
            "Manual override",
            "High durability"
        ],
        specifications: {
            "Passage Width": "550 mm",
            "Operation Mode": "Semi-Automatic",
            "Material": "Powder Coated Steel"
        }
    },

    // ===== Inspection Products =====
    {
        id: "baggage-scanner-bs6040",
        name: "Baggage Scanner BS6040",
        shortName: "BS6040",
        categoryId: "inspection",
        productTypeId: "baggage-scanner",
        price: 850000,
        originalPrice: 920000,
        discount: 8,
        rating: 5,
        reviews: 42,
        featured: true,
        inStock: true,
        images: ["/images/products/baggage-scanner-bs6040/main.jpg"],
        features: [
            "High-resolution X-ray imaging",
            "Automatic threat detection",
            "Real-time monitoring"
        ],
        specifications: {
            "Tunnel Size": "600 x 400 mm",
            "Penetration": "30mm Steel",
            "Power Supply": "220V AC"
        }
    },

    {
        id: "metal-detector-md600",
        name: "Walk Through Metal Detector MD600",
        shortName: "MD600",
        categoryId: "inspection",
        productTypeId: "metal-detector",
        price: 125000,
        originalPrice: 145000,
        discount: 14,
        rating: 4,
        reviews: 88,
        featured: true,
        inStock: true,
        images: ["/images/products/metal-detector-md600/main.jpg"],
        features: [
            "Multi-zone detection",
            "High sensitivity",
            "Audio & visual alarms"
        ],
        specifications: {
            "Detection Zones": "6 Zones",
            "Alarm": "Sound & LED",
            "Power": "AC 220V"
        }
    }

];
