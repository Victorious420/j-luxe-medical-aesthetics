import { buildWhatsAppBookingLink } from "@/src/lib/booking";

export type PricingItem = {
  name: string;
  price: string;
  link: string;
};

export type PricingCategory = {
  title: string;
  items: PricingItem[];
};

const rawPricingCategories: PricingCategory[] = [
  {
    title: "CONSULTATION",
    items: [
      {
        name: "Nurse Led Virtual Consultation (20 mins)",
        price: "£25",
        link: "",
      },
      {
        name: "Nurse Led Face to Face Consultation (25 mins)",
        price: "£35",
        link: "",
      },
    ],
  },
  {
    title: "FACIAL",
    items: [
      {
        name: "Express Facial",
        price: "£40",
        link: "",
      },
      {
        name: "Classic Facial",
        price: "£55",
        link: "",
      },
      {
        name: "Microdermabrasion Facial",
        price: "£60",
        link: "",
      },
      {
        name: "Dermaplaning Facial",
        price: "£65",
        link: "",
      },
      {
        name: "Acne (Deep Extraction /High Frequency)",
        price: "£80",
        link: "",
      },
      {
        name: "Hydrafacial",
        price: "£95",
        link: "",
      },
      {
        name: "Glow Facial",
        price: "£120",
        link: "",
      },
      {
        name: "Anti-ageing Facial",
        price: "£130",
        link: "",
      },
      {
        name: "Microcurrent/EMS (Face Sculpting)",
        price: "£99",
        link: "",
      },
      {
        name: "Vampire Facial",
        price: "£180",
        link: "",
      },
      {
        name: "Customized Luxury Facial",
        price: "£150",
        link: "",
      },
      {
        name: "Back Facial (Women)",
        price: "£75",
        link: "",
      },
      {
        name: "Back Facial (Men)",
        price: "£85",
        link: "",
      },
      {
        name: "Chemical Peel Facial",
        price: "£120",
        link: "",
      },
      {
        name: "LED Light Therapy (Add-On)",
        price: "£20",
        link: "",
      },
      {
        name: "Dermaplaning (Add-On)",
        price: "£20",
        link: "",
      },
      {
        name: "Microdermabrasion (Add-On)",
        price: "£20",
        link: "",
      },
      {
        name: "High Frequency (Add-On)",
        price: "£20",
        link: "",
      },
      {
        name: "Microcurrent (Add-On)",
        price: "£20",
        link: "",
      },
      {
        name: "EMS (Add-On)",
        price: "£20",
        link: "",
      },
    ],
  },
  {
    title: "ANTI WRINKLE TREATMENT",
    items: [
      {
        name: "Forehead",
        price: "£150",
        link: "",
      },
      {
        name: "Crow’s feet",
        price: "£150",
        link: "",
      },
      {
        name: "Frown lines",
        price: "£150",
        link: "",
      },
      {
        name: "Bunny Lines",
        price: "£150",
        link: "",
      },
      {
        name: "Gummy Smile",
        price: "£150",
        link: "",
      },
      {
        name: "Lip Flip",
        price: "£150",
        link: "",
      },
      {
        name: "2 areas treatment (Forehead and frown line)",
        price: "£180",
        link: "",
      },
      {
        name: "3 areas treatment (forehead, frown line and crow’s feet)",
        price: "£250",
        link: "",
      },
      {
        name: "Hyperhydrosis",
        price: "£350",
        link: "",
      },
      {
        name: "Nefertiti Neck Lift",
        price: "£325",
        link: "",
      },
      {
        name: "Bruxism (Teeth Grinding)",
        price: "£320",
        link: "",
      },
      {
        name: "Masseter (Jaw slimming)",
        price: "£320",
        link: "",
      },
      {
        name: "Sweaty palm",
        price: "£350",
        link: "",
      },
      {
        name: "High heel Tox/Sweaty feet",
        price: "£400",
        link: "",
      },
    ],
  },
  {
    title: "DERMAL FILLERS",
    items: [
      {
        name: "Lips (0.5ml)",
        price: "£130",
        link: "",
      },
      {
        name: "Lips (1ml)",
        price: "£200",
        link: "",
      },
      {
        name: "Nasolabial Folds",
        price: "£250",
        link: "",
      },
      {
        name: "Marionette Lines",
        price: "£250",
        link: "",
      },
      {
        name: "Cheeks",
        price: "£250",
        link: "",
      },
      {
        name: "Chin",
        price: "£250",
        link: "",
      },
      {
        name: "Jawline",
        price: "£250",
        link: "",
      },
      {
        name: "Tear Trough",
        price: "£320",
        link: "",
      },
      {
        name: "Temples",
        price: "£250",
        link: "",
      },
      {
        name: "Non-Surgical Rhinoplasty",
        price: "£250",
        link: "",
      },
      {
        name: "Smoker’s Lines",
        price: "£250",
        link: "",
      },
      {
        name: "Add on per 1ml",
        price: "£150",
        link: "",
      },
      {
        name: "Elective Filler dissolving (per area)",
        price: "£225",
        link: "",
      },
    ],
  },
  {
    title: "LIP BOOSTER",
    items: [
      {
        name: "Lumi Lips Pro Booster",
        price: "£130",
        link: "",
      },
    ],
  },
  {
    title: "SKIN BOOSTER (MESOTHERAPY AND EXOSOMES)",
    items: [
      {
        name: "Microneedling",
        price: "From £139",
        link: "",
      },
      {
        name: "Lumi Eye (1 Session)",
        price: "£100",
        link: "",
      },
      {
        name: "Lumi Eyes – (3 Sessions)",
        price: "£280",
        link: "",
      },
      {
        name: "Lumi Eye Pro (1 Session)",
        price: "£120",
        link: "",
      },
      {
        name: "Lumi Eye Pro (3 Sessions)",
        price: "£340",
        link: "",
      },
      {
        name: "Lumi Pro Skinbooster (1 Session)",
        price: "£130",
        link: "",
      },
      {
        name: "Lumi Pro Skinbooster (3 Sessions)",
        price: "£370",
        link: "",
      },
      {
        name: "Iluma Luna",
        price: "£150",
        link: "",
      },
      {
        name: "Sunekos 200 (undereye)",
        price: "£200",
        link: "",
      },
      {
        name: "Sunekos 1200",
        price: "£250",
        link: "",
      },
      {
        name: "Seventy Hyal (1 Session)",
        price: "£150",
        link: "",
      },
      {
        name: "Seventy Hyal (3 Sessions)",
        price: "£350",
        link: "",
      },
      {
        name: "Vitaran I",
        price: "From £200",
        link: "",
      },
      {
        name: "Vitaran II",
        price: "From £200",
        link: "",
      },
      {
        name: "Profhilo (1 Session)",
        price: "£220",
        link: "",
      },
      {
        name: "Profhilo (2 Session)",
        price: "£380",
        link: "",
      },
      {
        name: "Filmed",
        price: "£200",
        link: "",
      },
      {
        name: "Jalupro: classic, HMW, Superhydro",
        price: "From £200",
        link: "",
      },
      {
        name: "Nucleofill \u0026 Polynucleotide (1 Treatment)",
        price: "From £250",
        link: "",
      },
      {
        name: "Polyneucleotide: Plinest, Plenhyage, Newest",
        price: "From £220",
        link: "",
      },
      {
        name: "PDRN: Rejuran HB, Rejuran Healer",
        price: "From £300",
        link: "",
      },
      {
        name: "Mesotherapy",
        price: "From £150",
        link: "",
      },
    ],
  },
  {
    title: "PRP HAIR",
    items: [
      {
        name: "Hair (1 session)",
        price: "£250",
        link: "",
      },
      {
        name: "Hair + Biotin (1 session)",
        price: "£300",
        link: "",
      },
    ],
  },
  {
    title: "PRP FACE",
    items: [
      {
        name: "Eyes",
        price: "£175",
        link: "",
      },
      {
        name: "Face",
        price: "£220",
        link: "",
      },
      {
        name: "Neck",
        price: "£220",
        link: "",
      },
      {
        name: "Decollatage",
        price: "£220",
        link: "",
      },
      {
        name: "Face and Neck",
        price: "£280",
        link: "",
      },
      {
        name: "Face, Neck and Decollatage",
        price: "£350",
        link: "",
      },
    ],
  },
  {
    title: "EXOSOME",
    items: [
      {
        name: "Face",
        price: "From £300",
        link: "",
      },
      {
        name: "Hair",
        price: "From £300",
        link: "",
      },
    ],
  },
  {
    title: "CHEMICAL PEEL",
    items: [
      {
        name: "Biorepeel Face",
        price: "£120",
        link: "",
      },
      {
        name: "Biorepeel Neck",
        price: "£120",
        link: "",
      },
      {
        name: "Biorepeel Decoletage",
        price: "£300",
        link: "",
      },
      {
        name: "Biorepeel Body",
        price: "£300",
        link: "",
      },
      {
        name: "Biorepeel (3 Sessions)",
        price: "£330",
        link: "",
      },
      {
        name: "PRX – T33 (Single)",
        price: "£130",
        link: "",
      },
      {
        name: "PRX – T33 (3 Sessions)",
        price: "£330",
        link: "",
      },
    ],
  },
  {
    title: "BODY SERVICES",
    items: [
      {
        name: "Wood Therapy (45 mins)",
        price: "£65",
        link: "",
      },
      {
        name: "Slimming and Cellulite Reduction (60 mins)",
        price: "£85",
        link: "",
      },
      {
        name: "Snatched and Contoured (45 mins)",
        price: "£85",
        link: "",
      },
      {
        name: "Advanced Cavitation (60 mins)",
        price: "£105",
        link: "",
      },
      {
        name: "RF (60 mins)",
        price: "£105",
        link: "",
      },
      {
        name: "Vacuum (60 mins)",
        price: "£105",
        link: "",
      },
      {
        name: "Laser Pad (60 mins)",
        price: "£105",
        link: "",
      },
      {
        name: "Body Sculpting Fusion (Wood Therapy, Advanced Cavitation, RF, Vacuum and Laser Pad) (90 mins)",
        price: "£130",
        link: "",
      },
      {
        name: "Post Op care \u0026 Manual (60 mins)",
        price: "£120",
        link: "",
      },
      {
        name: "Skin tightening radio-frequency",
        price: "£80",
        link: "",
      },
      {
        name: "Laser Lipo Pads",
        price: "£55",
        link: "",
      },
      {
        name: "Lymphatic Drainage Massage (30 mins)",
        price: "£55",
        link: "",
      },
      {
        name: "Lymphatic Drainage Massage (45 mins)",
        price: "£70",
        link: "",
      },
      {
        name: "Lymphatic Drainage Massage (60 mins)",
        price: "£90",
        link: "",
      },
      {
        name: "Lymphatic Drainage Massage (90 mins)",
        price: "£155",
        link: "",
      },
    ],
  },
  {
    title: "FAT DISSOLVING INJECTIONS",
    items: [
      {
        name: "Lemon Bottle: Small Area (1 vial)",
        price: "£100",
        link: "",
      },
      {
        name: "Lemon Bottle: Medium Area (3 Vials)",
        price: "£150",
        link: "",
      },
      {
        name: "Lemon Bottle: Large area (4 vials)",
        price: "£180",
        link: "",
      },
      {
        name: "Aqualyx: Small Area (1 vial)",
        price: "£200",
        link: "",
      },
      {
        name: "Aqualyx: Medium Area (3 Vials)",
        price: "£280",
        link: "",
      },
      {
        name: "Aqualyx: Large area (4 vials)",
        price: "£350",
        link: "",
      },
    ],
  },
  {
    title: "IV VITAMIN DRIP",
    items: [
      {
        name: "Basic Hydration",
        price: "£100",
        link: "",
      },
      {
        name: "Multivitamin",
        price: "£125",
        link: "",
      },
      {
        name: "Multi-Mineral",
        price: "£125",
        link: "",
      },
      {
        name: "Energy",
        price: "£150",
        link: "",
      },
      {
        name: "Immunity",
        price: "£150",
        link: "",
      },
      {
        name: "Detox drip",
        price: "£150",
        link: "",
      },
      {
        name: "Detox drip (Double dose)",
        price: "£300",
        link: "",
      },
      {
        name: "Anti-aging drip",
        price: "£200",
        link: "",
      },
      {
        name: "High dose vitamin C (7.5mg)",
        price: "£125",
        link: "",
      },
      {
        name: "High dose Vitamin C (15mg)",
        price: "£150",
        link: "",
      },
      {
        name: "High dose vitamin C (25mg)",
        price: "£200",
        link: "",
      },
      {
        name: "High dose vitamin C (50mg)",
        price: "£275",
        link: "",
      },
      {
        name: "Skin Brightening Drip (600mg)",
        price: "£125",
        link: "",
      },
      {
        name: "Skin Brightening drip (1200mg)",
        price: "£175",
        link: "",
      },
      {
        name: "Skin Brightening drip (1800mg)",
        price: "£225",
        link: "",
      },
      {
        name: "Skin Brightening drip (2400mg)",
        price: "£275",
        link: "",
      },
      {
        name: "Skin Brightening drip (3000mg)",
        price: "£325",
        link: "",
      },
      {
        name: "Weightloss drip",
        price: "£175",
        link: "",
      },
      {
        name: "Fitness drip",
        price: "£225",
        link: "",
      },
      {
        name: "Skin and hair drip",
        price: "£175",
        link: "",
      },
      {
        name: "NAD",
        price: "£325",
        link: "",
      },
      {
        name: "Myers Cocktail",
        price: "£225",
        link: "",
      },
    ],
  },
  {
    title: "IM VITAMIN INJECTION",
    items: [
      {
        name: "Vitamin C",
        price: "£35",
        link: "",
      },
      {
        name: "Vitamin D",
        price: "£45",
        link: "",
      },
      {
        name: "Vitamin B12",
        price: "£45",
        link: "",
      },
      {
        name: "Vitamin B Complex",
        price: "£35",
        link: "",
      },
      {
        name: "Biotin",
        price: "£50",
        link: "",
      },
      {
        name: "Glutathione",
        price: "From £90",
        link: "",
      },
      {
        name: "Iron Booster",
        price: "Book Consultation",
        link: "",
      },
    ],
  },
  {
    title: "EMS SCULPT",
    items: [
      {
        name: "1 Area (1 Session)",
        price: "£99",
        link: "",
      },
      {
        name: "1 Area (3 Sessions)",
        price: "£225",
        link: "",
      },
      {
        name: "1 Areas (6 Session)",
        price: "£480",
        link: "",
      },
      {
        name: "2 Areas (1 Session)",
        price: "£150",
        link: "",
      },
      {
        name: "2 Areas (3 Sessions)",
        price: "£350",
        link: "",
      },
      {
        name: "2 Areas (6 Sessions)",
        price: "£780",
        link: "",
      },
    ],
  },
  {
    title: "TEETH WHITENING",
    items: [
      {
        name: "Standard",
        price: "£99",
        link: "",
      },
      {
        name: "Premium",
        price: "£120",
        link: "",
      },
      {
        name: "Ultra",
        price: "£150",
        link: "",
      },
      {
        name: "Top Up (30 Minutes Session)",
        price: "£50",
        link: "",
      },
    ],
  },
  {
    title: "DISSOLVE FILLERS",
    items: [
      {
        name: "1 session to dissolve fillers",
        price: "From £200",
        link: "",
      },
    ],
  },
  {
    title: "FACIAL WAXING",
    items: [
      {
        name: "Eyebrow",
        price: "£5",
        link: "",
      },
      {
        name: "Upper Lip",
        price: "£5",
        link: "",
      },
      {
        name: "Lip And Chin",
        price: "£8",
        link: "",
      },
      {
        name: "Full Face",
        price: "£30",
        link: "",
      },
      {
        name: "Chin",
        price: "£5",
        link: "",
      },
      {
        name: "Lower Lip",
        price: "£5",
        link: "",
      },
      {
        name: "Nostrils",
        price: "£5",
        link: "",
      },
      {
        name: "Forehead",
        price: "£8",
        link: "",
      },
      {
        name: "Sides",
        price: "£8",
        link: "",
      },
      {
        name: "Neck",
        price: "£10",
        link: "",
      },
      {
        name: "Full Face And Neck",
        price: "£10",
        link: "",
      },
    ],
  },
  {
    title: "UNDERARMS AND ARM WAXING",
    items: [
      {
        name: "Underarm",
        price: "£12",
        link: "",
      },
      {
        name: "Half Arm (Forearm)",
        price: "£18",
        link: "",
      },
      {
        name: "Full Arm",
        price: "£25",
        link: "",
      },
    ],
  },
  {
    title: "LEG WAXING",
    items: [
      {
        name: "Half Leg",
        price: "£20",
        link: "",
      },
      {
        name: "3/4 Leg",
        price: "£25",
        link: "",
      },
      {
        name: "Full Leg",
        price: "£30",
        link: "",
      },
    ],
  },
  {
    title: "UPPER BODY WAXING",
    items: [
      {
        name: "Chest",
        price: "£20",
        link: "",
      },
      {
        name: "Full Back",
        price: "£25",
        link: "",
      },
      {
        name: "Stomach",
        price: "£20",
        link: "",
      },
    ],
  },
  {
    title: "INTIMATE WAXING (FEMALE)",
    items: [
      {
        name: "Bikini Line",
        price: "£18",
        link: "",
      },
      {
        name: "High Bikini/ Extended Bikini",
        price: "£23",
        link: "",
      },
      {
        name: "Brazillian (Hot or Strip)",
        price: "£30",
        link: "",
      },
      {
        name: "Hollywood",
        price: "£35",
        link: "",
      },
    ],
  },
  {
    title: "MENS WAXING",
    items: [
      {
        name: "Chest Wax",
        price: "£30",
        link: "",
      },
      {
        name: "Back Wax",
        price: "£35",
        link: "",
      },
      {
        name: "Half Arms",
        price: "£20",
        link: "",
      },
      {
        name: "Shoulders",
        price: "£20",
        link: "",
      },
      {
        name: "Underarms",
        price: "£20",
        link: "",
      },
      {
        name: "Full Arms",
        price: "£25",
        link: "",
      },
      {
        name: "Half Legs",
        price: "£30",
        link: "",
      },
      {
        name: "Full Legs",
        price: "£40",
        link: "",
      },
      {
        name: "Manzilian",
        price: "£45",
        link: "",
      },
      {
        name: "Back And Shoulders",
        price: "£50",
        link: "",
      },
      {
        name: "Abdomen",
        price: "£25",
        link: "",
      },
    ],
  },
  {
    title: "FULL BODY COMBOS WAXING (FEMALE)",
    items: [
      {
        name: "Full Arms, Full Legs, Hollywood, Underarms",
        price: "£70",
        link: "",
      },
      {
        name: "Brazilian And Half Legs",
        price: "£45",
        link: "",
      },
      {
        name: "Hollywood And Half Leg",
        price: "£50",
        link: "",
      },
      {
        name: "Brazilian And Full Legs",
        price: "£55",
        link: "",
      },
      {
        name: "Full Arms, Full legs, Underarms",
        price: "£55",
        link: "",
      },
      {
        name: "Hollywood And Full Legs",
        price: "£60",
        link: "",
      },
      {
        name: "Full Arms, Full Legs, Underams, Full Back, Stomach, Full Chest",
        price: "£95",
        link: "",
      },
    ],
  },
];

export const pricingCategories: PricingCategory[] = rawPricingCategories.map((category) => ({
  ...category,
  items: category.items.map((item) => ({
    ...item,
    link: buildWhatsAppBookingLink(`${category.title} - ${item.name}`),
  })),
}));


