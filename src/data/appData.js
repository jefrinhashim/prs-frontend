const ancestryGroups = [
  "African",
  "American",
  "East Asian",
  "European",
  "South Asian",
];

function buildAncestryProfile(risks) {
  return ancestryGroups.map((ancestry, index) => ({
    ancestry,
    risk: risks[index],
  }));
}

export const heroSlides = [
  {
    tag: "Genetic Analysis Report",
    title: "Your genetic skin profile",
    body:
      "Comprehensive analysis of skin health, aesthetics, and inflammatory risk with modern polygenic scoring.",
  },
  {
    tag: "Athletic Performance",
    title: "Train smarter, not harder",
    body:
      "Use your genomic baseline to understand recovery, injury predisposition, and performance traits.",
  },
  {
    tag: "Nutrition and Diet",
    title: "Eat for your genetic type",
    body:
      "See how your DNA affects metabolic efficiency, nutrient transport, and lipid handling.",
  },
];

export const categories = [
  {
    title: "Health",
    subtitle: "Genetic risk analysis",
    description:
      "Skin health insights covering inflammation, disease susceptibility, and protective markers.",
    href: "/reports/skin",
    accent: "from-rose-200 via-orange-100 to-white",
  },
  {
    title: "Nutrition",
    subtitle: "Nutrition profile",
    description:
      "Metabolic, cardiovascular, and micronutrient patterns translated into daily dietary guidance.",
    href: "/reports/nutrition",
    accent: "from-amber-100 via-lime-50 to-white",
  },
  {
    title: "Physical Traits",
    subtitle: "Phenotype analysis",
    description:
      "Body composition and appearance modules ready for future expansion in the same app shell.",
    href: "/profile",
    accent: "from-sky-100 via-cyan-50 to-white",
  },
  {
    title: "Sports",
    subtitle: "Performance profile",
    description:
      "A modular card layout prepared for sports and training traits as the product grows.",
    href: "/categories",
    accent: "from-indigo-100 via-violet-50 to-white",
  },
];

export const profileReports = [
  {
    title: "Health",
    subtitle: "34 traits",
    href: "/reports/skin",
    state: "Active",
    badges: ["2 Very High", "6 High", "11 Protective"],
  },
  {
    title: "Nutrition",
    subtitle: "36 traits",
    href: "/reports/nutrition",
    state: "Active",
    badges: ["3 Very High", "12 High", "20 Medium"],
  },
  {
    title: "Physical Traits",
    subtitle: "Locked module",
    href: "/categories",
    state: "Locked",
    badges: ["Upgrade available"],
  },
  {
    title: "Sports",
    subtitle: "Locked module",
    href: "/categories",
    state: "Locked",
    badges: ["Upgrade available"],
  },
];

export const skinDashboard = {
  reportName: "Skin Health Report",
  user: "Alex Laurent",
  userTag: "DG-2024-0847",
  score: 74,
  scoreLabel: "Moderate risk",
  summary: [
    { title: "Allergies", value: "55%", note: "1 high trait", tone: "bg-emerald-400" },
    { title: "Dermatological", value: "82%", note: "2 very high", tone: "bg-rose-400" },
    { title: "Aesthetics", value: "48%", note: "hydration protective", tone: "bg-amber-400" },
    { title: "Markers", value: "63%", note: "KLK7 elevated", tone: "bg-sky-400" },
  ],
  risks: [
    {
      title: "Skin Cancer Risk",
      level: "Very High",
      prs: "2.47",
      category: "Dermatological",
      action: "Annual dermatology screening required",
      tags: ["MC1R", "PTCH1", "TP53"],
      description:
        "UV repair and pigmentation variants justify aggressive daily protection and regular clinician review.",
    },
    {
      title: "Inflammatory Skin",
      level: "High",
      prs: "1.94",
      category: "Dermatological",
      action: "Barrier-first skincare",
      tags: ["HLA-C*06:02", "IL-23"],
      description:
        "Inflammatory and immune signaling markers point toward fragrance-free routines and trigger management.",
    },
    {
      title: "Skin Aesthetics",
      level: "Moderate",
      prs: "1.33",
      category: "Aesthetics",
      action: "Retinoid-friendly profile",
      tags: ["Collagen", "Elastin+"],
      description:
        "Wrinkle risk is moderate, but hydration and elasticity markers provide helpful protective balance.",
    },
  ],
  views: [
    {
      key: "allergies",
      title: "Allergies",
      intro: "Sensitivity and immune-response traits that can influence eczema, bite reactions, and environmental triggers.",
      traits: [
        { name: "Eczema Risk", level: "High", prs: "1.76", percentile: "79th percentile", width: "72%", description: "Barrier and immune variants suggest elevated eczema susceptibility.", ancestryProfile: buildAncestryProfile(["Low", "Moderate", "Low", "High", "Moderate"]) },
        { name: "Mosquito Bite Sensitivity", level: "Moderate", prs: "1.18", percentile: "61st percentile", width: "51%", description: "Histamine-response genetics suggest a moderate inflammatory response to bites.", ancestryProfile: buildAncestryProfile(["Very Low", "Low", "Moderate", "Moderate", "Low"]) }
      ],
    },
    {
      key: "dermatological",
      title: "Dermatological",
      intro: "Disease predispositions and inflammatory conditions where your genomic risk is most actionable.",
      traits: [
        { name: "Non-Melanoma Skin Cancer", level: "Very High", prs: "2.47", percentile: "96th percentile", width: "92%", description: "High-risk variants justify regular screening and strong UV protection.", ancestryProfile: buildAncestryProfile(["Low", "Moderate", "Low", "Very High", "Moderate"]) },
        { name: "Hidradenitis Suppurativa", level: "High", prs: "1.72", percentile: "78th percentile", width: "66%", description: "Chronic inflammatory follicular disease risk is elevated.", ancestryProfile: buildAncestryProfile(["Moderate", "Low", "Low", "High", "Moderate"]) },
        { name: "Urticaria", level: "Low", prs: "0.71", percentile: "27th percentile", width: "25%", description: "Complement and histamine pathway variants suggest lower hive susceptibility.", ancestryProfile: buildAncestryProfile(["Moderate", "Low", "Low", "Low", "Very Low"]) }
      ],
    },
    {
      key: "aesthetics",
      title: "Aesthetics",
      intro: "Visible skin quality traits covering aging, pigmentation, hydration, and UV response.",
      traits: [
        { name: "Sunburn Sensitivity", level: "High", prs: "1.96", percentile: "86th percentile", width: "76%", description: "MC1R-linked variants predict a strong erythema response after UV exposure.", ancestryProfile: buildAncestryProfile(["Low", "Moderate", "Very Low", "Very High", "Low"]) },
        { name: "Skin Hydration", level: "Very Low", prs: "0.45", percentile: "13th percentile", width: "14%", description: "Moisture-retention genes are favorable and support excellent hydration.", ancestryProfile: buildAncestryProfile(["High", "Moderate", "Low", "Very Low", "Moderate"]) },
        { name: "Skin Elasticity", level: "Very Low", prs: "0.38", percentile: "9th percentile", width: "10%", description: "Elasticity markers are highly protective.", ancestryProfile: buildAncestryProfile(["Moderate", "Low", "Very Low", "Very Low", "Low"]) }
      ],
    },
    {
      key: "markers",
      title: "Markers",
      intro: "Biomarker traits revealing barrier integrity and molecular set points for skin resilience.",
      traits: [
        { name: "Kallikrein-7 Levels", level: "High", prs: "1.82", percentile: "83rd percentile", width: "70%", description: "Elevated KLK7 activity can weaken the skin barrier and increase sensitivity.", ancestryProfile: buildAncestryProfile(["Moderate", "Low", "Moderate", "High", "Low"]) },
        { name: "Ceramide Levels", level: "Very Low", prs: "0.41", percentile: "10th percentile", width: "11%", description: "Ceramide synthesis profile is strongly protective for barrier resilience.", ancestryProfile: buildAncestryProfile(["High", "Moderate", "Low", "Very Low", "Low"]) }
      ],
    },
  ],
  recommendations: [
    {
      priority: "Critical Priority",
      title: "Sun protection protocol",
      body: "Use SPF 50+, reapply often, and prioritize UPF clothing and shade during peak UV hours.",
    },
    {
      priority: "High Priority",
      title: "Annual dermatology screening",
      body: "Schedule full-body exams and monthly self-checks to identify changes early.",
    },
    {
      priority: "Moderate Priority",
      title: "Anti-inflammatory skincare routine",
      body: "Lean on niacinamide, ceramides, and fragrance-free products that support barrier repair.",
    },
  ],
};

export const nutritionDashboard = {
  reportName: "Nutrition Report",
  user: "Alex Laurent",
  userTag: "NG-2024-0026",
  score: 78,
  scoreLabel: "High risk",
  summary: [
    { title: "Fatty Acids", value: "89%", note: "2 very high markers", tone: "bg-amber-400" },
    { title: "Metabolic", value: "72%", note: "gut diversity needs work", tone: "bg-emerald-400" },
    { title: "Vitamins", value: "83%", note: "monitor D and folate", tone: "bg-fuchsia-400" },
    { title: "Cardio", value: "87%", note: "lipoprotein risk elevated", tone: "bg-rose-400" },
  ],
  risks: [
    {
      title: "Gut Microbiome Diversity",
      level: "Very High",
      prs: "2.11",
      category: "Metabolic Efficiency",
      action: "Probiotic and fiber strategy",
      tags: ["FUT2", "NOD2", "LCT"],
      description:
        "Genetic signals point to lower microbiome diversity, making prebiotic variety and fermented foods a high-value intervention.",
    },
    {
      title: "VLDL Lipid Load",
      level: "High",
      prs: "1.88",
      category: "Cardiovascular",
      action: "Reduce refined carbohydrates",
      tags: ["APOE", "LPL"],
      description:
        "Large-particle VLDL patterns suggest active management of lipid quality and post-meal triglyceride burden.",
    },
    {
      title: "Vitamin D Handling",
      level: "Moderate",
      prs: "1.13",
      category: "Micronutrients",
      action: "Seasonal lab monitoring",
      tags: ["VDR", "GC"],
      description:
        "Transport and utilization markers suggest average vitamin D handling with room for tailored supplementation.",
    },
  ],
  views: [
    {
      key: "lipids",
      title: "Fatty Acid Profile",
      intro: "Lipid transport and fatty acid conversion traits that influence inflammation, energy storage, and membrane quality.",
      traits: [
        { name: "Diacylglycerol", level: "Very High", prs: "2.02", percentile: "91st percentile", width: "88%", description: "High lipid signaling load may increase inflammatory pressure and metabolic strain.", ancestryProfile: buildAncestryProfile(["Moderate", "High", "Low", "Very High", "Moderate"]) },
        { name: "Linoleic Acid", level: "High", prs: "1.76", percentile: "80th percentile", width: "74%", description: "Elevated omega-6 patterns support a stronger anti-inflammatory dietary strategy.", ancestryProfile: buildAncestryProfile(["Low", "Moderate", "High", "High", "Moderate"]) }
      ],
    },
    {
      key: "metabolic",
      title: "Metabolic Efficiency",
      intro: "Traits covering energy expenditure, insulin handling, and microbiome-linked metabolic flexibility.",
      traits: [
        { name: "Gut Microbiota Diversity", level: "Very High", prs: "2.11", percentile: "93rd percentile", width: "90%", description: "Low-diversity predisposition makes fiber variety and fermented foods particularly important.", ancestryProfile: buildAncestryProfile(["Moderate", "High", "Low", "Very High", "Moderate"]) },
        { name: "Resting Metabolic Rate", level: "Moderate", prs: "1.22", percentile: "57th percentile", width: "54%", description: "Average energy expenditure can improve meaningfully through routine, sleep, and exercise.", ancestryProfile: buildAncestryProfile(["Low", "Moderate", "Moderate", "Low", "Low"]) }
      ],
    },
    {
      key: "vitamins",
      title: "Vitamins and Micronutrients",
      intro: "Nutrient transport and utilization traits for key vitamins, minerals, and cofactor systems.",
      traits: [
        { name: "Low Vitamin D Risk", level: "Moderate", prs: "1.12", percentile: "39th percentile", width: "39%", description: "Supplementation and lab-based monitoring may be worthwhile depending on sun exposure.", ancestryProfile: buildAncestryProfile(["Low", "Moderate", "Moderate", "Low", "High"]) },
        { name: "Blood Manganese", level: "Moderate", prs: "1.39", percentile: "64th percentile", width: "64%", description: "Average manganese handling with room to optimize antioxidant support through whole foods.", ancestryProfile: buildAncestryProfile(["Moderate", "Low", "Moderate", "Moderate", "Low"]) }
      ],
    },
    {
      key: "cardio",
      title: "Cardiovascular Markers",
      intro: "Lipoprotein composition and inflammatory markers tied to long-term cardiovascular health.",
      traits: [
        { name: "Large Lipoprotein Phospholipids", level: "High", prs: "1.88", percentile: "87th percentile", width: "87%", description: "High phospholipid cargo may increase long-term plaque risk if not managed well.", ancestryProfile: buildAncestryProfile(["Moderate", "High", "Low", "High", "Moderate"]) },
        { name: "Total Lipids in Large VLDL", level: "High", prs: "1.79", percentile: "83rd percentile", width: "83%", description: "Triglyceride-rich lipoprotein burden is elevated and responds well to dietary cleanup.", ancestryProfile: buildAncestryProfile(["Low", "Moderate", "Low", "High", "High"]) }
      ],
    },
    {
      key: "protein",
      title: "Protein Building Blocks",
      intro: "Amino acid metabolism and peptide-processing markers tied to recovery, nitric oxide, and resilience.",
      traits: [
        { name: "N-Delta-Acetylornithine", level: "High", prs: "1.69", percentile: "79th percentile", width: "79%", description: "Elevated ornithine metabolism may influence nitric oxide availability.", ancestryProfile: buildAncestryProfile(["Moderate", "High", "Low", "Moderate", "High"]) },
        { name: "Citrulline Levels", level: "Low", prs: "0.89", percentile: "36th percentile", width: "36%", description: "Lower citrulline points to an opportunity for targeted food or supplement support.", ancestryProfile: buildAncestryProfile(["Low", "Moderate", "Low", "Low", "Very Low"]) }
      ],
    },
  ],
  recommendations: [
    {
      priority: "Critical Priority",
      title: "Gut microbiome restoration",
      body: "Prioritize probiotic support, fermented foods, and broad plant diversity to improve nutrient absorption and resilience.",
    },
    {
      priority: "High Priority",
      title: "Cardiovascular lipid management",
      body: "Reduce saturated fat and refined carbohydrate load while improving omega-3 intake and lipid monitoring.",
    },
    {
      priority: "Moderate Priority",
      title: "Fatty acid balance protocol",
      body: "Shift toward a Mediterranean-style pattern with stronger omega-3 support and fewer seed oils.",
    },
  ],
};
