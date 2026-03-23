// ─────────────────────────────────────────────────────────────────────────────
//  THEME CONFIG  —  src/theme.js
//
//  To switch theme: change activeThemeName below.
//  To tweak a color: edit the value inside the chosen theme object.
//
//  Available themes:
//    'monochrome-matrix'  ← Pure dark    (#0A0A0A black + #FFFFFF white)
//    'deep-learning'      ← Black/Purple (#09090B zinc + #A855F7 electric purple)
//    'arctic-glass'       ← Clean light  (#2563EB royal blue + #06B6D4 cyan)
//    'silicon-ivory'      ← Luxury light (#D97706 gold + #0EA5E9 ocean blue)
//    'midnight-electric'  ← Deep dark    (#00F0FF cyan + #8A2BE2 purple)
//    'cyber-neon'         ← Classic dark (cyan + violet)
//    'emerald-dark'       ← Nature dark  (emerald + teal)
//    'rose-gold'          ← Warm dark    (rose + fuchsia)
// ─────────────────────────────────────────────────────────────────────────────

export const activeThemeName = 'monochrome-matrix'   // ← CHANGE THIS TO SWITCH THEME

// ─── Theme definitions ───────────────────────────────────────────────────────
const themes = {

  /* ══════════════════════════════════════════════════════════════════════════
     1. Monochrome Matrix  —  Pure Black & White
     Background #0A0A0A · Cards #171717 · White #FFFFFF · Gray #A3A3A3 · Text #F5F5F5
  ══════════════════════════════════════════════════════════════════════════ */
  'monochrome-matrix': {
    name: 'Monochrome Matrix',

    // ── Page ──────────────────────────────────────────────────────────────
    pageBg:           'bg-[#0A0A0A]',
    pageBodyBg:       '#0A0A0A',

    // ── Ambient orbs  (very subtle so they don't add color) ───────────────
    orb1:             'bg-white/5',
    orb2:             'bg-[#A3A3A3]/8',

    // ── Navbar ────────────────────────────────────────────────────────────
    navBg:            'bg-[#171717]/80',
    navBorder:        'border-white/10',
    navActive:        'bg-white text-[#0A0A0A] font-semibold',
    navInactive:      'text-[#A3A3A3] hover:bg-white/8 hover:text-[#F5F5F5]',

    // ── Section label pill ─────────────────────────────────────────────────
    labelBg:          'bg-white/8',
    labelBorder:      'border-white/20',
    labelText:        'text-[#F5F5F5]',

    // ── Section heading gradient (white → gray → white) ────────────────────
    headingFrom:      'from-[#F5F5F5]',
    headingVia:       'via-[#A3A3A3]',
    headingTo:        'to-[#F5F5F5]',

    // ── Hero name gradient (raw CSS) ───────────────────────────────────────
    nameGradient:     'linear-gradient(110deg,#FFFFFF 0%,#A3A3A3 40%,#FFFFFF 70%,#A3A3A3 100%)',

    // ── Hero badge ────────────────────────────────────────────────────────
    badgeBg:          'bg-[#171717]',
    badgeBorder:      'border-white/20',
    badgeText:        'text-[#A3A3A3]',

    // ── CTA button ────────────────────────────────────────────────────────
    ctaBg:            'bg-white',
    ctaBorder:        'border-white/30',
    ctaText:          'text-[#0A0A0A] font-semibold',
    ctaGlow:          'hover:shadow-[0_0_28px_rgba(255,255,255,0.25)]',

    // ── Pills ─────────────────────────────────────────────────────────────
    pillHover:        'hover:bg-white/10 hover:text-[#F5F5F5] hover:shadow-[0_0_14px_rgba(255,255,255,0.12)]',
    pillIcon:         'text-[#A3A3A3]',

    // ── Cards ─────────────────────────────────────────────────────────────
    cardHoverBorder:  'hover:border-white/30',
    cardGlow:         'hover:shadow-[0_0_35px_rgba(255,255,255,0.07)]',
    cardBg:           'bg-[#171717]',
    cardBorder:       'border-white/10',

    // ── Section cards ─────────────────────────────────────────────────────
    sectionCardBg:    'bg-[#171717]',

    // ── Text hierarchy ─────────────────────────────────────────────────────
    textPrimary:      'text-[#F5F5F5]',
    textSecondary:    'text-[#A3A3A3]',
    textMuted:        'text-[#A3A3A3]/70',

    // ── Hero overlay ──────────────────────────────────────────────────────
    heroOverlay:      'bg-[#0A0A0A]/85',

    // ── Floating tech badges ───────────────────────────────────────────────
    badgeFloatBg:     'bg-[#171717]/95',
    badgeFloatText:   'text-[#F5F5F5]',
    badgeFloatBorder: 'border-white/12',

    // ── Timeline node bg ──────────────────────────────────────────────────
    nodeBg:           'bg-[#0A0A0A]',

    // ── Stack pills ───────────────────────────────────────────────────────
    stackPillBg:      'bg-white/5',
    stackPillBorder:  'border-white/10',
    stackPillText:    'text-[#A3A3A3]',

    // ── Profile card ──────────────────────────────────────────────────────
    profileGlow:      'shadow-[0_0_40px_rgba(255,255,255,0.15)]',
    profileRing:      'ring-white/20',
    profileAmbient:   'bg-white/5',

    // ── Skills marquee ────────────────────────────────────────────────────
    skillHover:       'hover:text-[#F5F5F5] hover:border-white/30 hover:shadow-[0_0_14px_rgba(255,255,255,0.1)]',

    // ── Bio accent ────────────────────────────────────────────────────────
    bioAccent:        'text-[#F5F5F5]',

    // ── About dots ────────────────────────────────────────────────────────
    dot1:             'bg-[#F5F5F5]',
    dot2:             'bg-[#A3A3A3]',
    dot3:             'bg-white/30',

    // ── Timeline nodes ────────────────────────────────────────────────────
    nodes: [
      { icon: 'text-[#F5F5F5]', glow: 'shadow-[0_0_14px_rgba(245,245,245,0.35)]', border: 'border-white/30' },
      { icon: 'text-[#A3A3A3]', glow: 'shadow-[0_0_14px_rgba(163,163,163,0.3)]',  border: 'border-[#A3A3A3]/40' },
      { icon: 'text-[#A3A3A3]', glow: 'shadow-[0_0_14px_rgba(163,163,163,0.2)]',  border: 'border-[#A3A3A3]/25' },
    ],

    // ── Card corner mesh & timeline line ──────────────────────────────────
    cardMesh:         'from-white/6 via-[#A3A3A3]/4 to-transparent',
    timelineLine:     'bg-white/10',
  },

  /* ══════════════════════════════════════════════════════════════════════════
     2. Deep Learning  —  Black & Electric Purple
     Background #09090B · Cards #18181B · Purple #A855F7 · Soft Purple #D8B4FE · Text #FAFAFA
  ══════════════════════════════════════════════════════════════════════════ */
  'deep-learning': {
    name: 'Deep Learning',

    // ── Page ──────────────────────────────────────────────────────────────
    pageBg:           'bg-[#09090B]',
    pageBodyBg:       '#09090B',

    // ── Ambient orbs ──────────────────────────────────────────────────────
    orb1:             'bg-[#A855F7]/20',
    orb2:             'bg-[#D8B4FE]/10',

    // ── Navbar ────────────────────────────────────────────────────────────
    navBg:            'bg-[#18181B]/70',
    navBorder:        'border-[#A855F7]/20',
    navActive:        'bg-linear-to-r from-[#A855F7] to-[#D8B4FE] text-[#09090B] font-semibold',
    navInactive:      'text-[#FAFAFA]/60 hover:bg-[#A855F7]/10 hover:text-[#D8B4FE]',

    // ── Section label pill ─────────────────────────────────────────────────
    labelBg:          'bg-[#A855F7]/12',
    labelBorder:      'border-[#A855F7]/35',
    labelText:        'text-[#A855F7]',

    // ── Section heading gradient ───────────────────────────────────────────
    headingFrom:      'from-[#FAFAFA]',
    headingVia:       'via-[#D8B4FE]',
    headingTo:        'to-[#A855F7]',

    // ── Hero name gradient (raw CSS) ───────────────────────────────────────
    nameGradient:     'linear-gradient(110deg,#FAFAFA 0%,#D8B4FE 35%,#A855F7 65%,#FAFAFA 100%)',

    // ── Hero badge ────────────────────────────────────────────────────────
    badgeBg:          'bg-[#18181B]',
    badgeBorder:      'border-[#A855F7]/35',
    badgeText:        'text-[#D8B4FE]',

    // ── CTA button ────────────────────────────────────────────────────────
    ctaBg:            'bg-linear-to-r from-[#A855F7] to-[#D8B4FE]',
    ctaBorder:        'border-[#A855F7]/40',
    ctaText:          'text-[#09090B] font-semibold',
    ctaGlow:          'hover:shadow-[0_0_28px_rgba(168,85,247,0.55)]',

    // ── Pills ─────────────────────────────────────────────────────────────
    pillHover:        'hover:bg-[#A855F7]/12 hover:text-[#D8B4FE] hover:shadow-[0_0_14px_rgba(168,85,247,0.3)]',
    pillIcon:         'text-[#A855F7]',

    // ── Cards ─────────────────────────────────────────────────────────────
    cardHoverBorder:  'hover:border-[#A855F7]/40',
    cardGlow:         'hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]',
    cardBg:           'bg-[#18181B]',
    cardBorder:       'border-[#A855F7]/15',

    // ── Section cards ─────────────────────────────────────────────────────
    sectionCardBg:    'bg-[#18181B]',

    // ── Text hierarchy ─────────────────────────────────────────────────────
    textPrimary:      'text-[#FAFAFA]',
    textSecondary:    'text-[#FAFAFA]/70',
    textMuted:        'text-[#FAFAFA]/45',

    // ── Hero overlay ──────────────────────────────────────────────────────
    heroOverlay:      'bg-[#09090B]/83',

    // ── Floating tech badges ───────────────────────────────────────────────
    badgeFloatBg:     'bg-[#18181B]/95',
    badgeFloatText:   'text-[#FAFAFA]',
    badgeFloatBorder: 'border-[#A855F7]/20',

    // ── Timeline node bg ──────────────────────────────────────────────────
    nodeBg:           'bg-[#09090B]',

    // ── Stack pills ───────────────────────────────────────────────────────
    stackPillBg:      'bg-[#A855F7]/8',
    stackPillBorder:  'border-[#A855F7]/20',
    stackPillText:    'text-[#D8B4FE]',

    // ── Profile card ──────────────────────────────────────────────────────
    profileGlow:      'shadow-[0_0_45px_rgba(168,85,247,0.4)]',
    profileRing:      'ring-[#D8B4FE]/30',
    profileAmbient:   'bg-[#A855F7]/15',

    // ── Skills marquee ────────────────────────────────────────────────────
    skillHover:       'hover:text-[#D8B4FE] hover:border-[#A855F7]/40 hover:shadow-[0_0_14px_rgba(168,85,247,0.25)]',

    // ── Bio accent ────────────────────────────────────────────────────────
    bioAccent:        'text-[#D8B4FE]',

    // ── About dots ────────────────────────────────────────────────────────
    dot1:             'bg-[#A855F7]',
    dot2:             'bg-[#D8B4FE]',
    dot3:             'bg-[#FAFAFA]/30',

    // ── Timeline nodes ────────────────────────────────────────────────────
    nodes: [
      { icon: 'text-[#A855F7]', glow: 'shadow-[0_0_14px_rgba(168,85,247,0.65)]',  border: 'border-[#A855F7]/55' },
      { icon: 'text-[#D8B4FE]', glow: 'shadow-[0_0_14px_rgba(216,180,254,0.55)]', border: 'border-[#D8B4FE]/45' },
      { icon: 'text-[#FAFAFA]', glow: 'shadow-[0_0_14px_rgba(250,250,250,0.25)]', border: 'border-[#FAFAFA]/20' },
    ],

    // ── Card corner mesh & timeline line ──────────────────────────────────
    cardMesh:         'from-[#A855F7]/12 via-[#D8B4FE]/6 to-transparent',
    timelineLine:     'bg-[#A855F7]/20',
  },

  /* ══════════════════════════════════════════════════════════════════════════
     3. Arctic Glass  —  Clean & Premium Light
     Background #F8FAFC · Cards #FFFFFF · Royal Blue #2563EB · Cyan #06B6D4 · Text #0F172A
  ══════════════════════════════════════════════════════════════════════════ */
  'arctic-glass': {
    name: 'Arctic Glass',

    // ── Page ──────────────────────────────────────────────────────────────
    pageBg:           'bg-[#F8FAFC]',
    pageBodyBg:       '#F8FAFC',

    // ── Ambient orbs ──────────────────────────────────────────────────────
    orb1:             'bg-[#2563EB]/12',   // royal blue
    orb2:             'bg-[#06B6D4]/10',   // bright cyan

    // ── Navbar ────────────────────────────────────────────────────────────
    navBg:            'bg-white/80',
    navBorder:        'border-[#0F172A]/8',
    navActive:        'bg-linear-to-r from-[#2563EB] to-[#06B6D4] text-white font-semibold',
    navInactive:      'text-[#0F172A]/60 hover:bg-[#2563EB]/8 hover:text-[#2563EB]',

    // ── Section label pill ─────────────────────────────────────────────────
    labelBg:          'bg-[#2563EB]/8',
    labelBorder:      'border-[#2563EB]/25',
    labelText:        'text-[#2563EB]',

    // ── Section heading gradient ───────────────────────────────────────────
    headingFrom:      'from-[#2563EB]',
    headingVia:       'via-[#0284c7]',
    headingTo:        'to-[#06B6D4]',

    // ── Hero name gradient (raw CSS) ───────────────────────────────────────
    nameGradient:     'linear-gradient(110deg,#2563EB 0%,#0284c7 35%,#06B6D4 65%,#2563EB 100%)',

    // ── Hero badge ────────────────────────────────────────────────────────
    badgeBg:          'bg-[#2563EB]/8',
    badgeBorder:      'border-[#2563EB]/30',
    badgeText:        'text-[#2563EB]',

    // ── CTA button ────────────────────────────────────────────────────────
    ctaBg:            'bg-linear-to-r from-[#2563EB] to-[#0284c7]',
    ctaBorder:        'border-[#2563EB]/40',
    ctaText:          'text-white font-semibold',
    ctaGlow:          'hover:shadow-[0_0_28px_rgba(37,99,235,0.45)]',

    // ── Pills ─────────────────────────────────────────────────────────────
    pillHover:        'hover:bg-[#2563EB]/8 hover:text-[#2563EB] hover:shadow-[0_0_14px_rgba(37,99,235,0.18)]',
    pillIcon:         'text-[#2563EB]',

    // ── Cards ─────────────────────────────────────────────────────────────
    cardHoverBorder:  'hover:border-[#2563EB]/30',
    cardGlow:         'hover:shadow-[0_0_35px_rgba(37,99,235,0.12)]',
    cardBg:           'bg-[#FFFFFF]',
    cardBorder:       'border-[#0F172A]/8',

    // ── Section cards ─────────────────────────────────────────────────────
    sectionCardBg:    'bg-[#FFFFFF]',

    // ── Text hierarchy ─────────────────────────────────────────────────────
    textPrimary:      'text-[#0F172A]',
    textSecondary:    'text-[#0F172A]/70',
    textMuted:        'text-[#0F172A]/45',

    // ── Hero overlay ──────────────────────────────────────────────────────
    heroOverlay:      'bg-[#F8FAFC]/90',

    // ── Floating tech badges ───────────────────────────────────────────────
    badgeFloatBg:     'bg-white/95',
    badgeFloatText:   'text-[#0F172A]',
    badgeFloatBorder: 'border-[#0F172A]/10',

    // ── Timeline node bg ──────────────────────────────────────────────────
    nodeBg:           'bg-[#F8FAFC]',

    // ── Stack pills ───────────────────────────────────────────────────────
    stackPillBg:      'bg-[#2563EB]/6',
    stackPillBorder:  'border-[#2563EB]/15',
    stackPillText:    'text-[#0F172A]/65',

    // ── Profile card ──────────────────────────────────────────────────────
    profileGlow:      'shadow-[0_0_40px_rgba(37,99,235,0.25)]',
    profileRing:      'ring-[#06B6D4]/35',
    profileAmbient:   'bg-[#2563EB]/10',

    // ── Skills marquee ────────────────────────────────────────────────────
    skillHover:       'hover:text-[#2563EB] hover:border-[#2563EB]/30 hover:shadow-[0_0_14px_rgba(37,99,235,0.15)]',

    // ── Bio accent ────────────────────────────────────────────────────────
    bioAccent:        'text-[#2563EB]',

    // ── About dots ────────────────────────────────────────────────────────
    dot1:             'bg-[#2563EB]',
    dot2:             'bg-[#06B6D4]',
    dot3:             'bg-[#0F172A]/35',

    // ── Timeline nodes ────────────────────────────────────────────────────
    nodes: [
      { icon: 'text-[#2563EB]', glow: 'shadow-[0_0_14px_rgba(37,99,235,0.45)]',   border: 'border-[#2563EB]/45' },
      { icon: 'text-[#06B6D4]', glow: 'shadow-[0_0_14px_rgba(6,182,212,0.45)]',   border: 'border-[#06B6D4]/45' },
      { icon: 'text-[#0F172A]', glow: 'shadow-[0_0_14px_rgba(15,23,42,0.12)]',    border: 'border-[#0F172A]/20' },
    ],

    // ── Card corner mesh glow & timeline line ──────────────────────────────
    cardMesh:         'from-[#2563EB]/12 via-[#06B6D4]/6 to-transparent',
    timelineLine:     'bg-[#0F172A]/10',
  },

  /* ══════════════════════════════════════════════════════════════════════════
     3. Silicon Ivory  —  Luxury Light
     Background #FAFAFA · Cards #FFFFFF · Gold #D97706 · Blue #0EA5E9 · Text #0F172A
  ══════════════════════════════════════════════════════════════════════════ */
  'silicon-ivory': {
    name: 'Silicon Ivory',

    // ── Page ──────────────────────────────────────────────────────────────
    pageBg:           'bg-[#FAFAFA]',
    pageBodyBg:       '#FAFAFA',

    // ── Ambient orbs ──────────────────────────────────────────────────────
    orb1:             'bg-[#D97706]/15',    // amber warmth
    orb2:             'bg-[#0EA5E9]/10',    // cool ocean blue

    // ── Navbar ────────────────────────────────────────────────────────────
    navBg:            'bg-white/75',
    navBorder:        'border-[#0F172A]/10',
    navActive:        'bg-linear-to-r from-[#D97706] to-[#b45309] text-white font-semibold',
    navInactive:      'text-[#0F172A]/65 hover:bg-[#D97706]/10 hover:text-[#D97706]',

    // ── Section label pill ─────────────────────────────────────────────────
    labelBg:          'bg-[#D97706]/10',
    labelBorder:      'border-[#D97706]/30',
    labelText:        'text-[#D97706]',

    // ── Section heading gradient ───────────────────────────────────────────
    headingFrom:      'from-[#D97706]',
    headingVia:       'via-[#b45309]',
    headingTo:        'to-[#0EA5E9]',

    // ── Hero name gradient (raw CSS) ───────────────────────────────────────
    nameGradient:     'linear-gradient(110deg,#D97706 0%,#b45309 35%,#0EA5E9 65%,#D97706 100%)',

    // ── Hero "Data Scientist & Web Developer" badge ────────────────────────
    badgeBg:          'bg-[#D97706]/10',
    badgeBorder:      'border-[#D97706]/35',
    badgeText:        'text-[#D97706]',

    // ── CTA "View Projects" button ─────────────────────────────────────────
    ctaBg:            'bg-linear-to-r from-[#D97706] to-[#b45309]',
    ctaBorder:        'border-[#D97706]/40',
    ctaText:          'text-white font-semibold',
    ctaGlow:          'hover:shadow-[0_0_28px_rgba(217,119,6,0.45)]',

    // ── Contact & skill pills ──────────────────────────────────────────────
    pillHover:        'hover:bg-[#D97706]/10 hover:text-[#D97706] hover:shadow-[0_0_14px_rgba(217,119,6,0.2)]',
    pillIcon:         'text-[#D97706]',

    // ── Project / generic cards ────────────────────────────────────────────
    cardHoverBorder:  'hover:border-[#D97706]/35',
    cardGlow:         'hover:shadow-[0_0_35px_rgba(217,119,6,0.15)]',

    // ── Base card surface (used inside project & journey cards) ────────────
    cardBg:           'bg-[#FFFFFF]',
    cardBorder:       'border-[#0F172A]/10',

    // ── Heavier section card (About bento, timeline cards) ─────────────────
    sectionCardBg:    'bg-[#FFFFFF]',

    // ── Text hierarchy ─────────────────────────────────────────────────────
    textPrimary:      'text-[#0F172A]',
    textSecondary:    'text-[#0F172A]/75',
    textMuted:        'text-[#0F172A]/50',

    // ── Hero background overlay ─────────────────────────────────────────────
    heroOverlay:      'bg-[#FAFAFA]/88',

    // ── Floating tech badge (around profile picture) ───────────────────────
    badgeFloatBg:     'bg-white/95',
    badgeFloatText:   'text-[#0F172A]',
    badgeFloatBorder: 'border-[#0F172A]/12',

    // ── Timeline node circle background ────────────────────────────────────
    nodeBg:           'bg-[#FAFAFA]',

    // ── Tech stack pills inside project/cert cards ─────────────────────────
    stackPillBg:      'bg-[#D97706]/8',
    stackPillBorder:  'border-[#D97706]/20',
    stackPillText:    'text-[#0F172A]/70',

    // ── Profile picture card ───────────────────────────────────────────────
    profileGlow:      'shadow-[0_0_40px_rgba(217,119,6,0.3)]',
    profileRing:      'ring-[#0EA5E9]/30',
    profileAmbient:   'bg-[#D97706]/12',

    // ── Skills marquee pill hover ──────────────────────────────────────────
    skillHover:       'hover:text-[#D97706] hover:border-[#D97706]/35 hover:shadow-[0_0_14px_rgba(217,119,6,0.2)]',

    // ── Bio inline accent ──────────────────────────────────────────────────
    bioAccent:        'text-[#D97706]',

    // ── About card dots ────────────────────────────────────────────────────
    dot1:             'bg-[#D97706]',
    dot2:             'bg-[#0EA5E9]',
    dot3:             'bg-[#0F172A]/40',

    // ── Timeline nodes ─────────────────────────────────────────────────────
    nodes: [
      { icon: 'text-[#D97706]', glow: 'shadow-[0_0_14px_rgba(217,119,6,0.5)]',   border: 'border-[#D97706]/50' },
      { icon: 'text-[#0EA5E9]', glow: 'shadow-[0_0_14px_rgba(14,165,233,0.5)]',  border: 'border-[#0EA5E9]/50' },
      { icon: 'text-[#0F172A]', glow: 'shadow-[0_0_14px_rgba(15,23,42,0.15)]',   border: 'border-[#0F172A]/25' },
    ],
    cardMesh:         'from-[#D97706]/12 via-[#0EA5E9]/6 to-transparent',
    timelineLine:     'bg-[#0F172A]/10',
  },

  /* ══════════════════════════════════════════════════════════════════════════
     2. Midnight Electric  —  #0B0F19 · #00F0FF cyan · #8A2BE2 purple
  ══════════════════════════════════════════════════════════════════════════ */
  'midnight-electric': {
    name: 'Midnight Electric',

    pageBg:           'bg-[#0B0F19]',
    pageBodyBg:       '#0B0F19',

    orb1:             'bg-[#8A2BE2]/25',
    orb2:             'bg-[#00F0FF]/15',

    navBg:            'bg-[#0B0F19]/60',
    navBorder:        'border-[#00F0FF]/15',
    navActive:        'bg-linear-to-r from-[#00F0FF] to-[#8A2BE2] text-[#0B0F19] font-semibold',
    navInactive:      'text-[#E2E8F0]/80 hover:bg-[#00F0FF]/10 hover:text-[#00F0FF]',

    labelBg:          'bg-[#00F0FF]/10',
    labelBorder:      'border-[#00F0FF]/30',
    labelText:        'text-[#00F0FF]',

    headingFrom:      'from-[#00F0FF]',
    headingVia:       'via-[#60a5fa]',
    headingTo:        'to-[#8A2BE2]',

    nameGradient:     'linear-gradient(110deg,#00F0FF 0%,#60a5fa 35%,#8A2BE2 65%,#00F0FF 100%)',

    badgeBg:          'bg-[#111827]/90',
    badgeBorder:      'border-[#00F0FF]/35',
    badgeText:        'text-[#00F0FF]',

    ctaBg:            'bg-linear-to-r from-[#00F0FF]/85 to-[#8A2BE2]/85',
    ctaBorder:        'border-[#00F0FF]/40',
    ctaText:          'text-[#0B0F19] font-bold',
    ctaGlow:          'hover:shadow-[0_0_32px_rgba(0,240,255,0.55)]',

    pillHover:        'hover:bg-[#00F0FF]/10 hover:text-[#00F0FF] hover:shadow-[0_0_14px_rgba(0,240,255,0.3)]',
    pillIcon:         'text-[#00F0FF]',

    cardHoverBorder:  'hover:border-[#00F0FF]/40',
    cardGlow:         'hover:shadow-[0_0_35px_rgba(0,240,255,0.18)]',

    cardBg:           'bg-white/5',
    cardBorder:       'border-white/10',
    sectionCardBg:    'bg-[#111827]/60',

    textPrimary:      'text-slate-100',
    textSecondary:    'text-slate-300',
    textMuted:        'text-slate-400',

    heroOverlay:      'bg-[#0B0F19]/82',

    badgeFloatBg:     'bg-[#111827]/80',
    badgeFloatText:   'text-slate-200',
    badgeFloatBorder: 'border-white/15',

    nodeBg:           'bg-[#0B0F19]',

    stackPillBg:      'bg-black/20',
    stackPillBorder:  'border-white/5',
    stackPillText:    'text-slate-300',

    profileGlow:      'shadow-[0_0_45px_rgba(0,240,255,0.4)]',
    profileRing:      'ring-[#8A2BE2]/35',
    profileAmbient:   'bg-[#00F0FF]/15',

    skillHover:       'hover:text-[#00F0FF] hover:border-[#00F0FF]/40 hover:shadow-[0_0_14px_rgba(0,240,255,0.25)]',

    bioAccent:        'text-[#00F0FF]',

    dot1:             'bg-[#00F0FF]',
    dot2:             'bg-[#8A2BE2]',
    dot3:             'bg-[#60a5fa]',

    nodes: [
      { icon: 'text-[#00F0FF]', glow: 'shadow-[0_0_14px_rgba(0,240,255,0.65)]',   border: 'border-[#00F0FF]/55' },
      { icon: 'text-[#8A2BE2]', glow: 'shadow-[0_0_14px_rgba(138,43,226,0.65)]',  border: 'border-[#8A2BE2]/55' },
      { icon: 'text-[#60a5fa]', glow: 'shadow-[0_0_14px_rgba(96,165,250,0.65)]',  border: 'border-[#60a5fa]/55' },
    ],
    cardMesh:         'from-[#00F0FF]/12 via-[#8A2BE2]/8 to-transparent',
    timelineLine:     'bg-white/10',
  },

  /* ══════════════════════════════════════════════════════════════════════════
     3. Cyber Neon  —  Cyan + Violet
  ══════════════════════════════════════════════════════════════════════════ */
  'cyber-neon': {
    name: 'Cyber Neon',

    pageBg:           'bg-slate-950',
    pageBodyBg:       '#020617',

    orb1:             'bg-violet-500/20',
    orb2:             'bg-cyan-500/20',

    navBg:            'bg-slate-900/45',
    navBorder:        'border-white/15',
    navActive:        'bg-linear-to-r from-cyan-400 to-violet-500 text-slate-950',
    navInactive:      'text-slate-200 hover:bg-white/10 hover:text-cyan-300',

    labelBg:          'bg-cyan-400/10',
    labelBorder:      'border-cyan-400/30',
    labelText:        'text-cyan-400',

    headingFrom:      'from-cyan-300',
    headingVia:       'via-blue-300',
    headingTo:        'to-violet-400',

    nameGradient:     'linear-gradient(110deg,#67e8f9 0%,#60a5fa 35%,#c084fc 60%,#67e8f9 100%)',

    badgeBg:          'bg-slate-900/80',
    badgeBorder:      'border-cyan-400/40',
    badgeText:        'text-cyan-300',

    ctaBg:            'bg-linear-to-r from-cyan-400/90 to-violet-500/90',
    ctaBorder:        'border-cyan-300/50',
    ctaText:          'text-slate-950',
    ctaGlow:          'hover:shadow-[0_0_28px_rgba(56,189,248,0.5)]',

    pillHover:        'hover:bg-white/10 hover:text-cyan-300 hover:shadow-[0_0_14px_rgba(34,211,238,0.3)]',
    pillIcon:         'text-cyan-400',

    cardHoverBorder:  'hover:border-cyan-400/40',
    cardGlow:         'hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]',

    cardBg:           'bg-white/5',
    cardBorder:       'border-white/10',
    sectionCardBg:    'bg-slate-900/50',

    textPrimary:      'text-slate-100',
    textSecondary:    'text-slate-300',
    textMuted:        'text-slate-400',

    heroOverlay:      'bg-slate-950/80',

    badgeFloatBg:     'bg-slate-900/70',
    badgeFloatText:   'text-slate-200',
    badgeFloatBorder: 'border-white/15',

    nodeBg:           'bg-slate-950',

    stackPillBg:      'bg-black/20',
    stackPillBorder:  'border-white/5',
    stackPillText:    'text-slate-300',

    profileGlow:      'shadow-[0_0_40px_rgba(56,189,248,0.35)]',
    profileRing:      'ring-violet-400/30',
    profileAmbient:   'bg-cyan-500/20',

    skillHover:       'hover:text-cyan-300 hover:border-cyan-400/40 hover:shadow-[0_0_14px_rgba(34,211,238,0.25)]',

    bioAccent:        'text-cyan-300',

    dot1:             'bg-cyan-400',
    dot2:             'bg-violet-400',
    dot3:             'bg-blue-400',

    nodes: [
      { icon: 'text-cyan-400',   glow: 'shadow-[0_0_14px_rgba(34,211,238,0.6)]',   border: 'border-cyan-400/60'   },
      { icon: 'text-violet-400', glow: 'shadow-[0_0_14px_rgba(167,139,250,0.6)]',  border: 'border-violet-400/60' },
      { icon: 'text-blue-400',   glow: 'shadow-[0_0_14px_rgba(96,165,250,0.6)]',   border: 'border-blue-400/60'   },
    ],
    cardMesh:         'from-cyan-500/12 via-violet-500/8 to-transparent',
    timelineLine:     'bg-white/10',
  },

  /* ══════════════════════════════════════════════════════════════════════════
     4. Emerald Dark  —  Emerald + Teal
  ══════════════════════════════════════════════════════════════════════════ */
  'emerald-dark': {
    name: 'Emerald Dark',

    pageBg:           'bg-[#030d0a]',
    pageBodyBg:       '#030d0a',

    orb1:             'bg-emerald-500/20',
    orb2:             'bg-teal-500/15',

    navBg:            'bg-[#030d0a]/70',
    navBorder:        'border-white/10',
    navActive:        'bg-linear-to-r from-emerald-400 to-teal-500 text-slate-950',
    navInactive:      'text-slate-200 hover:bg-white/10 hover:text-emerald-300',

    labelBg:          'bg-emerald-400/10',
    labelBorder:      'border-emerald-400/30',
    labelText:        'text-emerald-400',

    headingFrom:      'from-emerald-300',
    headingVia:       'via-teal-300',
    headingTo:        'to-cyan-400',

    nameGradient:     'linear-gradient(110deg,#6ee7b7 0%,#2dd4bf 40%,#22d3ee 70%,#6ee7b7 100%)',

    badgeBg:          'bg-emerald-950/60',
    badgeBorder:      'border-emerald-400/40',
    badgeText:        'text-emerald-300',

    ctaBg:            'bg-linear-to-r from-emerald-400/90 to-teal-500/90',
    ctaBorder:        'border-emerald-300/50',
    ctaText:          'text-slate-950',
    ctaGlow:          'hover:shadow-[0_0_28px_rgba(52,211,153,0.5)]',

    pillHover:        'hover:bg-white/10 hover:text-emerald-300 hover:shadow-[0_0_14px_rgba(52,211,153,0.3)]',
    pillIcon:         'text-emerald-400',

    cardHoverBorder:  'hover:border-emerald-400/40',
    cardGlow:         'hover:shadow-[0_0_35px_rgba(52,211,153,0.2)]',

    cardBg:           'bg-white/5',
    cardBorder:       'border-white/10',
    sectionCardBg:    'bg-[#030d0a]/60',

    textPrimary:      'text-slate-100',
    textSecondary:    'text-slate-300',
    textMuted:        'text-slate-400',

    heroOverlay:      'bg-[#030d0a]/82',

    badgeFloatBg:     'bg-slate-900/70',
    badgeFloatText:   'text-slate-200',
    badgeFloatBorder: 'border-white/15',

    nodeBg:           'bg-[#030d0a]',

    stackPillBg:      'bg-black/20',
    stackPillBorder:  'border-white/5',
    stackPillText:    'text-slate-300',

    profileGlow:      'shadow-[0_0_40px_rgba(52,211,153,0.35)]',
    profileRing:      'ring-teal-400/30',
    profileAmbient:   'bg-emerald-500/20',

    skillHover:       'hover:text-emerald-300 hover:border-emerald-400/40 hover:shadow-[0_0_14px_rgba(52,211,153,0.25)]',

    bioAccent:        'text-emerald-300',

    dot1:             'bg-emerald-400',
    dot2:             'bg-teal-400',
    dot3:             'bg-cyan-400',

    nodes: [
      { icon: 'text-emerald-400', glow: 'shadow-[0_0_14px_rgba(52,211,153,0.6)]',  border: 'border-emerald-400/60' },
      { icon: 'text-teal-400',    glow: 'shadow-[0_0_14px_rgba(45,212,191,0.6)]',  border: 'border-teal-400/60'    },
      { icon: 'text-cyan-400',    glow: 'shadow-[0_0_14px_rgba(34,211,238,0.6)]',  border: 'border-cyan-400/60'    },
    ],
    cardMesh:         'from-emerald-500/12 via-teal-500/8 to-transparent',
    timelineLine:     'bg-white/10',
  },

  /* ══════════════════════════════════════════════════════════════════════════
     5. Rose Gold  —  Rose + Fuchsia
  ══════════════════════════════════════════════════════════════════════════ */
  'rose-gold': {
    name: 'Rose Gold',

    pageBg:           'bg-[#0d050a]',
    pageBodyBg:       '#0d050a',

    orb1:             'bg-rose-500/20',
    orb2:             'bg-fuchsia-500/15',

    navBg:            'bg-[#0d050a]/70',
    navBorder:        'border-white/10',
    navActive:        'bg-linear-to-r from-rose-400 to-fuchsia-500 text-white',
    navInactive:      'text-slate-200 hover:bg-white/10 hover:text-rose-300',

    labelBg:          'bg-rose-400/10',
    labelBorder:      'border-rose-400/30',
    labelText:        'text-rose-400',

    headingFrom:      'from-rose-300',
    headingVia:       'via-pink-300',
    headingTo:        'to-fuchsia-400',

    nameGradient:     'linear-gradient(110deg,#fda4af 0%,#f472b6 40%,#e879f9 70%,#fda4af 100%)',

    badgeBg:          'bg-rose-950/60',
    badgeBorder:      'border-rose-400/40',
    badgeText:        'text-rose-300',

    ctaBg:            'bg-linear-to-r from-rose-400/90 to-fuchsia-500/90',
    ctaBorder:        'border-rose-300/50',
    ctaText:          'text-white',
    ctaGlow:          'hover:shadow-[0_0_28px_rgba(244,63,94,0.5)]',

    pillHover:        'hover:bg-white/10 hover:text-rose-300 hover:shadow-[0_0_14px_rgba(244,63,94,0.3)]',
    pillIcon:         'text-rose-400',

    cardHoverBorder:  'hover:border-rose-400/40',
    cardGlow:         'hover:shadow-[0_0_35px_rgba(244,63,94,0.2)]',

    cardBg:           'bg-white/5',
    cardBorder:       'border-white/10',
    sectionCardBg:    'bg-[#0d050a]/60',

    textPrimary:      'text-slate-100',
    textSecondary:    'text-slate-300',
    textMuted:        'text-slate-400',

    heroOverlay:      'bg-[#0d050a]/82',

    badgeFloatBg:     'bg-slate-900/70',
    badgeFloatText:   'text-slate-200',
    badgeFloatBorder: 'border-white/15',

    nodeBg:           'bg-[#0d050a]',

    stackPillBg:      'bg-black/20',
    stackPillBorder:  'border-white/5',
    stackPillText:    'text-slate-300',

    profileGlow:      'shadow-[0_0_40px_rgba(244,63,94,0.35)]',
    profileRing:      'ring-fuchsia-400/30',
    profileAmbient:   'bg-rose-500/20',

    skillHover:       'hover:text-rose-300 hover:border-rose-400/40 hover:shadow-[0_0_14px_rgba(244,63,94,0.25)]',

    bioAccent:        'text-rose-300',

    dot1:             'bg-rose-400',
    dot2:             'bg-pink-400',
    dot3:             'bg-fuchsia-400',

    nodes: [
      { icon: 'text-rose-400',    glow: 'shadow-[0_0_14px_rgba(244,63,94,0.6)]',    border: 'border-rose-400/60'    },
      { icon: 'text-pink-400',    glow: 'shadow-[0_0_14px_rgba(244,114,182,0.6)]',  border: 'border-pink-400/60'    },
      { icon: 'text-fuchsia-400', glow: 'shadow-[0_0_14px_rgba(232,121,249,0.6)]',  border: 'border-fuchsia-400/60' },
    ],
    cardMesh:         'from-rose-500/12 via-fuchsia-500/8 to-transparent',
    timelineLine:     'bg-white/10',
  },
}

// ─────────────────────────────────────────────────────────────────────────────
export const theme = themes[activeThemeName]
export default theme
