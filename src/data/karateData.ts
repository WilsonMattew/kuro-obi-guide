import { 
  Zap, 
  Hand, 
  Target, 
  Shield, 
  Users, 
  Scale, 
  ArrowDown,
  Footprints
} from "lucide-react";

// Import technique images
import maeGeriImage from "@/assets/mae-geri.jpg";
import gyakuZukiImage from "@/assets/gyaku-zuki.jpg";
import zenkutsuDachiImage from "@/assets/zenkutsu-dachi.jpg";

export interface Technique {
  id: string;
  japanese: string;
  english: string;
  description: string;
  steps: string[];
  image?: string;
}

export interface Subcategory {
  id: string;
  title: string;
  subtitle: string;
  techniques: Technique[];
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  techniques?: Technique[];
  subcategories?: Subcategory[];
}

export const karateCategories: Category[] = [
  {
    id: "stances",
    title: "Stances",
    subtitle: "立ち方 (Tachikata) - Foundation of all karate techniques",
    icon: Footprints,
    techniques: [
      {
        id: "zenkutsu",
        japanese: "前屈立ち (Zenkutsu-dachi)",
        english: "Front Stance",
        description: "A long, low stance with most weight on the front leg",
        image: zenkutsuDachiImage,
        steps: [
          "Step forward with one foot about 2 shoulder widths",
          "Keep front knee bent over the front foot",
          "Rear leg straight with foot at 45-degree angle",
          "70% weight on front leg, 30% on rear leg"
        ]
      },
      {
        id: "kokutsu",
        japanese: "後屈立ち (Kokutsu-dachi)",
        english: "Back Stance",
        description: "Defensive stance with weight primarily on the rear leg",
        steps: [
          "Step back into L-shaped foot position",
          "70% weight on rear leg, 30% on front leg",
          "Front foot points forward, rear foot perpendicular",
          "Keep both knees bent and ready to move"
        ]
      },
      {
        id: "heiko",
        japanese: "平行立ち (Heiko-dachi)",
        english: "Parallel Stance",
        description: "Natural standing position with feet parallel",
        steps: [
          "Stand with feet shoulder-width apart",
          "Feet parallel and pointing forward",
          "Weight evenly distributed",
          "Knees slightly bent, body relaxed"
        ]
      }
    ]
  },
  {
    id: "hand-strikes",
    title: "Hand Strikes",
    subtitle: "突き (Tsuki) - Powerful linear attacks using fists",
    icon: Hand,
    subcategories: [
      {
        id: "zuki",
        title: "Zuki (Straight Punches)",
        subtitle: "突き - Linear striking techniques",
        techniques: [
          {
            id: "oi-zuki",
            japanese: "追い突き (Oi-zuki)",
            english: "Lunge Punch",
            description: "A stepping punch where the same side hand and foot move forward",
            steps: [
              "Start in front stance with opposite hand extended",
              "Step forward with rear foot while pulling back front hand",
              "Punch with the hand on same side as stepping foot",
              "Rotate hips and shoulders for maximum power"
            ]
          },
          {
            id: "gyaku-zuki",
            japanese: "逆突き (Gyaku-zuki)",
            english: "Reverse Punch",
            description: "A punch using the opposite hand to the front leg",
            image: gyakuZukiImage,
            steps: [
              "Maintain front stance position",
              "Pull back punching hand to hip",
              "Drive punch forward using hip rotation",
              "Keep shoulders square and balanced"
            ]
          },
          {
            id: "kizami-zuki",
            japanese: "刻み突き (Kizami-zuki)",
            english: "Jab Punch",
            description: "A quick, straight punch with the lead hand",
            steps: [
              "Start in fighting stance",
              "Extend lead hand straight forward",
              "Keep rear hand in guard position",
              "Return quickly to guard after punch"
            ]
          }
        ]
      },
      {
        id: "shuto",
        title: "Shuto (Knife Hand)",
        subtitle: "手刀 - Striking with the edge of the hand",
        techniques: [
          {
            id: "shuto-uchi",
            japanese: "手刀打ち (Shuto-uchi)",
            english: "Knife Hand Strike",
            description: "A striking technique using the outer edge of the hand",
            steps: [
              "Form proper knife hand position",
              "Keep fingers straight and together",
              "Strike with outer edge of hand",
              "Follow through with hip rotation"
            ]
          }
        ]
      },
      {
        id: "tettsui",
        title: "Tettsui (Hammer Fist)",
        subtitle: "鉄槌 - Striking with the bottom of the fist",
        techniques: [
          {
            id: "tettsui-uchi",
            japanese: "鉄槌打ち (Tettsui-uchi)",
            english: "Hammer Fist Strike",
            description: "A downward strike using the bottom of the fist",
            steps: [
              "Form a proper fist",
              "Raise arm overhead",
              "Strike downward with bottom of fist",
              "Use whole body for power"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "kicks",
    title: "Kicks",
    subtitle: "蹴り (Keri) - Dynamic leg techniques for all ranges",
    icon: Target,
    techniques: [
      {
        id: "mae-geri",
        japanese: "前蹴り (Mae-geri)",
        english: "Front Kick",
        description: "A straight forward kick using the ball of the foot",
        image: maeGeriImage,
        steps: [
          "Lift knee high toward chest",
          "Snap foot forward to target",
          "Strike with ball of foot",
          "Retract leg quickly along same path"
        ]
      },
      {
        id: "yoko-geri",
        japanese: "横蹴り (Yoko-geri)",
        english: "Side Kick",
        description: "A powerful lateral kick using the edge of the foot",
        steps: [
          "Lift knee up and across body",
          "Pivot on supporting foot",
          "Drive heel toward target",
          "Keep body sideways for maximum power"
        ]
      },
      {
        id: "mawashi-geri",
        japanese: "回し蹴り (Mawashi-geri)",
        english: "Roundhouse Kick",
        description: "A circular kick targeting the side of opponent",
        steps: [
          "Pivot on supporting foot",
          "Lift knee in circular motion",
          "Snap shin/instep to target",
          "Follow through with hip rotation"
        ]
      }
    ]
  },
  {
    id: "blocks",
    title: "Blocks",
    subtitle: "受け (Uke) - Defensive techniques to intercept attacks",
    icon: Shield,
    techniques: [
      {
        id: "age-uke",
        japanese: "上げ受け (Age-uke)",
        english: "Rising Block",
        description: "An upward block to deflect high attacks",
        steps: [
          "Start with blocking arm across body",
          "Raise arm in upward motion",
          "End with forearm protecting head",
          "Keep opposite hand in guard position"
        ]
      },
      {
        id: "soto-uke",
        japanese: "外受け (Soto-uke)",
        english: "Outside Block",
        description: "An outward block to deflect attacks from outside",
        steps: [
          "Bring blocking arm across body",
          "Sweep outward to deflect attack",
          "Use forearm to make contact",
          "Maintain strong defensive posture"
        ]
      },
      {
        id: "gedan-barai",
        japanese: "下段払い (Gedan-barai)",
        english: "Downward Block",
        description: "A sweeping downward block for low attacks",
        steps: [
          "Start with blocking arm at shoulder height",
          "Sweep downward and outward",
          "End with arm protecting lower body",
          "Use hip rotation for power"
        ]
      }
    ]
  },
  {
    id: "kata",
    title: "Forms (Kata)",
    subtitle: "型 (Kata) - Choreographed sequences of techniques",
    icon: Zap,
    techniques: [
      {
        id: "heian-shodan",
        japanese: "平安初段 (Heian Shodan)",
        english: "Peaceful Mind First Level",
        description: "The first kata in the Heian series, focusing on basic blocks and strikes",
        steps: [
          "Begin in ready stance (yoi)",
          "Turn left into downward block",
          "Step forward with front punch",
          "Continue through 21 movements"
        ]
      },
      {
        id: "heian-nidan",
        japanese: "平安二段 (Heian Nidan)",
        english: "Peaceful Mind Second Level",
        description: "Second kata introducing side kicks and knife-hand techniques",
        steps: [
          "Begin in ready stance",
          "Turn left with knife-hand block",
          "Front kick followed by punch",
          "26 movements total"
        ]
      },
      {
        id: "tekki-shodan",
        japanese: "鉄騎初段 (Tekki Shodan)",
        english: "Iron Horse First Level",
        description: "A lateral kata performed entirely in horse stance",
        steps: [
          "Begin in horse stance",
          "All movements performed laterally",
          "Focus on hip and leg strength",
          "29 movements in straight line"
        ]
      }
    ]
  },
  {
    id: "kumite",
    title: "Basic Sparring",
    subtitle: "組手 (Kumite) - Controlled partner practice",
    icon: Users,
    techniques: [
      {
        id: "gohon-kumite",
        japanese: "五本組手 (Gohon Kumite)",
        english: "Five-Step Sparring",
        description: "Structured sparring with five attacks and one counter",
        steps: [
          "Attacker announces target area",
          "Perform five identical attacks",
          "Defender blocks and retreats",
          "Final counter-attack on fifth block"
        ]
      },
      {
        id: "sanbon-kumite",
        japanese: "三本組手 (Sanbon Kumite)",
        english: "Three-Step Sparring",
        description: "Intermediate sparring with three attacks",
        steps: [
          "Similar to five-step but condensed",
          "Three attacks with blocks",
          "Counter on third technique",
          "More dynamic movement required"
        ]
      },
      {
        id: "ippon-kumite",
        japanese: "一本組手 (Ippon Kumite)",
        english: "One-Step Sparring",
        description: "Advanced single attack and counter practice",
        steps: [
          "One predetermined attack",
          "Defender must block/evade",
          "Immediate counter-attack",
          "Requires timing and distance"
        ]
      }
    ]
  },
  {
    id: "competition",
    title: "Laws of Competition",
    subtitle: "競技規則 (Kyogi Kisoku) - Rules and scoring",
    icon: Scale,
    techniques: [
      {
        id: "scoring-areas",
        japanese: "得点部位 (Tokuten Bui)",
        english: "Scoring Areas",
        description: "Valid target areas for competition scoring",
        steps: [
          "Head and neck area",
          "Body (chest, abdomen, back)",
          "No attacks below the belt",
          "No contact to joints or groin"
        ]
      },
      {
        id: "ippon-scoring",
        japanese: "一本 (Ippon)",
        english: "Full Point",
        description: "Three-point technique that wins the match",
        steps: [
          "Jodan kicks to head/neck",
          "Any scoring technique on thrown opponent",
          "Any technique on unbalanced opponent",
          "Immediately ends the match"
        ]
      },
      {
        id: "waza-ari",
        japanese: "技あり (Waza-ari)",
        english: "Half Point",
        description: "Two-point scoring technique",
        steps: [
          "Chudan kicks to body",
          "Strong punches to body",
          "Need good form and distance",
          "Two waza-ari equal one ippon"
        ]
      }
    ]
  },
  {
    id: "ukemi",
    title: "Falling Techniques",
    subtitle: "受身 (Ukemi) - Safe falling and rolling methods",
    icon: ArrowDown,
    techniques: [
      {
        id: "ushiro-ukemi",
        japanese: "後ろ受身 (Ushiro Ukemi)",
        english: "Backward Fall",
        description: "Safe technique for falling backward",
        steps: [
          "Tuck chin to chest",
          "Curve spine into C-shape",
          "Slap ground with both arms",
          "Distribute impact across back"
        ]
      },
      {
        id: "yoko-ukemi",
        japanese: "横受身 (Yoko Ukemi)",
        english: "Side Fall",
        description: "Technique for falling to the side safely",
        steps: [
          "Fall to side while protecting head",
          "Slap ground with outside arm",
          "Keep legs slightly bent",
          "Avoid landing on elbow or shoulder"
        ]
      },
      {
        id: "mae-ukemi",
        japanese: "前受身 (Mae Ukemi)",
        english: "Forward Fall",
        description: "Technique for safe forward falling",
        steps: [
          "Extend arms to absorb impact",
          "Keep elbows slightly bent",
          "Land on forearms, not hands",
          "Protect face and chest"
        ]
      }
    ]
  }
];

export function getCategoryById(id: string): Category | undefined {
  return karateCategories.find(category => category.id === id);
}

export function getSubcategoryById(categoryId: string, subcategoryId: string): Subcategory | undefined {
  const category = getCategoryById(categoryId);
  return category?.subcategories?.find(subcategory => subcategory.id === subcategoryId);
}

export function getTechniqueById(categoryId: string, techniqueId: string, subcategoryId?: string): Technique | undefined {
  const category = getCategoryById(categoryId);
  
  if (subcategoryId) {
    const subcategory = getSubcategoryById(categoryId, subcategoryId);
    return subcategory?.techniques.find(technique => technique.id === techniqueId);
  }
  
  return category?.techniques?.find(technique => technique.id === techniqueId);
}