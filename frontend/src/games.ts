export interface position {
  x: number;
  y: number;
}

export interface gameInfo {
  map: string;
  target: position;
}

export const games: Record<number, gameInfo> = {
  1: {
    map: "yakuza_3_kamuro_map",
    target: { x: -42, y: -17 },
  },
  2: {
    map: "yakuza_kiwami_map",
    target: { x: 16, y: 46 },
  },
  3: {
    map: "yakuza_0_osaka_map",
    target: { x: 21, y: -29 },
  },
  4: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -12, y: -4 },
  },
  5: {
    map: "yakuza_3_rykyu_map",
    target: { x: 2, y: 32 },
  },
  6: {
    map: "yakuza_0_kamuro_map",
    target: { x: -38, y: 4 },
  },
  7: {
    map: "yakuza_kiwami_map",
    target: { x: 2, y: 39 },
  },
  8: {
    map: "yakuza_3_kamuro_map",
    target: { x: -30, y: 23 },
  },
  9: {
    map: "yakuza_3_rykyu_map",
    target: { x: 15, y: 13 },
  },
  10: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: 38, y: -30 },
  },
  11: {
    map: "yakuza_0_kamuro_map",
    target: { x: -3, y: -13 },
  },
  12: {
    map: "yakuza_3_rykyu_map",
    target: { x: -12, y: 21 },
  },
  13: {
    map: "yakuza_kiwami_map",
    target: { x: 9, y: 40 },
  },
  14: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -24, y: 8 },
  },
  15: {
    map: "yakuza_0_osaka_map",
    target: { x: -3, y: 10.991379310344826 },
  },
  16: {
    map: "yakuza_3_kamuro_map",
    target: { x: -15, y: -39 },
  },
  17: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 40.55449004984982, y: 5.716878402903811 },
  },
  18: {
    map: "yakuza_kiwami_map",
    target: { x: 40.537318914097945, y: 39.22800718132854 },
  },
  19: {
    map: "yakuza_0_osaka_map",
    target: { x: 6.21967840572853, y: -5.716878402903811 },
  },
  20: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -36.519217408073715, y: 8.076225045372052 },
  },
  21: {
    map: "yakuza_dead_souls_kamuro_streets_map",
    target: { x: 7.465254387285787, y: 46.91470054446461 },
  },
  22: {
    map: "yakuza_kiwami_map",
    target: { x: 34.73436194846733, y: -19.509981851179674 },
  },
  23: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: 27.04893308863395, y: -6.624319419237749 },
  },
  24: {
    map: "yakuza_0_kamuro_map",
    target: { x: 11.149825783972126, y: 3.720508166969147 },
  },
  25: {
    map: "yakuza_3_kamuro_map",
    target: { x: 27.609549956933677, y: 25.17361111111111 },
  },
  26: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -21.836649719495092, y: 42.1875 },
  },
  27: {
    map: "yakuza_0_osaka_map",
    target: { x: -13.119911010232022, y: 4.861111111111112 },
  },
  28: {
    map: "yakuza_4_kamuro_rooftops_map",
    target: { x: 22.252283558379666, y: 31.59722222222222 },
  },
  29: {
    map: "yakuza_3_kamuro_map",
    target: { x: 38.42168140860001, y: 6.25 },
  },
  30: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 16.44291692740926, y: 13.88888888888889 },
  },
  31: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 3.7444266270337923, y: 18.92361111111111 },
  },
  32: {
    map: "yakuza_0_kamuro_map",
    target: { x: -26.94541231126597, y: -2.604166666666667 },
  },
  33: {
    map: "yakuza_kiwami_map",
    target: { x: 23.333422862054146, y: -8.854166666666668 },
  },
  34: {
    map: "yakuza_4_kamuro_rooftops_map",
    target: { x: -17.19494638602065, y: 29.166666666666668 },
  },
  35: {
    map: "yakuza_0_kamuro_map",
    target: { x: -11.975738805007099, y: -15.45138888888889 },
  },
  36: {
    map: "yakuza_kiwami_map",
    target: { x: -19.04007305543618, y: -39.0625 },
  },
  37: {
    map: "yakuza_3_kamuro_map",
    target: { x: 10.61905767574372, y: 12.67361111111111 },
  },
  38: {
    map: "yakuza_3_rykyu_map",
    target: { x: 4.75214243498818, y: 9.895833333333332 },
  },
  39: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -29.723005620249065, y: 15.104166666666666 },
  },
  40: {
    map: "yakuza_0_osaka_map",
    target: { x: 6.254841295575732, y: 21.52777777777778 },
  },
  41: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 5.860841677096372, y: 35.06944444444444 },
  },
  42: {
    map: "yakuza_4_kamuro_underground_map",
    target: { x: -16.107453811849652, y: 44.79166666666667 },
  },
  43: {
    map: "yakuza_3_kamuro_map",
    target: { x: -4.247623070297489, y: 26.73611111111111 },
  },
  44: {
    map: "yakuza_0_osaka_map",
    target: { x: 18.764523886727194, y: -29.86111111111111 },
  },
  45: {
    map: "yakuza_4_kamuro_underground_map",
    target: { x: -45.89211401832251, y: 11.75438596491228 },
  },
  46: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 19.741782491271987, y: -13.157894736842104 },
  },
  47: {
    map: "yakuza_kiwami_map",
    target: { x: -3.961278357044309, y: 24.385964912280702 },
  },
  48: {
    map: "yakuza_3_rykyu_map",
    target: { x: -15.49085479656588, y: -3.684210526315789 },
  },
  49: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: 6.347899904037793, y: 36.84210526315789 },
  },
  50: {
    map: "yakuza_0_osaka_map",
    target: { x: -13.874667212779029, y: 14.561403508771932 },
  },
  51: {
    map: "yakuza_kiwami_map",
    target: { x: 43.1967973220546, y: 17.017543859649123 },
  },
  52: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -0.6045618956226471, y: 13.333333333333334 },
  },
  53: {
    map: "yakuza_0_osaka_map",
    target: { x: -22.66195644753908, y: 41.05263157894737 },
  },
  54: {
    map: "yakuza_kiwami_map",
    target: { x: 22.06997941781829, y: 45.96491228070175 },
  },
  55: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -22.039314078500468, y: 35.6140350877193 },
  },
  56: {
    map: "yakuza_0_kamuro_map",
    target: { x: 25.90541394135746, y: 15.087719298245613 },
  },
  57: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 2.632237665502932, y: 6.315789473684211 },
  },
  58: {
    map: "yakuza_3_kamuro_map",
    target: { x: 45.654834761321915, y: 16.842105263157894 },
  },
  59: {
    map: "yakuza_5_osaka_map",
    target: { x: -27.593773254127413, y: -13.508771929824562 },
  },
  60: {
    map: "yakuza_4_kamuro_underground_map",
    target: { x: 6.782085815515643, y: 25.6140350877193 },
  },
  61: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -19.741782491271987, y: 12.456140350877194 },
  },
  62: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 4.42637628554144, y: -19.12280701754386 },
  },
  63: {
    map: "yakuza_0_osaka_map",
    target: { x: 23.124445354631714, y: -29.29824561403509 },
  },
  64: {
    map: "yakuza_4_kamuro_underground_map",
    target: { x: -0.20772773839964684, y: -37.719298245614034 },
  },

  65: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 23.03207957315065, y: 13.157894736842104 },
  },
  66: {
    map: "yakuza_5_fukuoka_map",
    target: { x: -2.8641258318209313, y: -41.75438596491228 },
  },
  67: {
    map: "yakuza_0_osaka_map",
    target: { x: -7.091496575420392, y: -29.64912280701754 },
  },
  68: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -21.008525872886985, y: -5.964912280701754 },
  },
  69: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 18.2337296620776, y: 1.0416666666666665 },
  },
  70: {
    map: "yakuza_3_rykyu_map",
    target: { x: -32.805112293144205, y: -29.86111111111111 },
  },
  71: {
    map: "yakuza_5_sapporo_map",
    target: { x: 18.46039939617235, y: 35.41666666666667 },
  },
  72: {
    map: "yakuza_kiwami_map",
    target: { x: 26.320100988397076, y: 45.48611111111111 },
  },
  73: {
    map: "yakuza_0_kamuro_map",
    target: { x: 12.72422248032004, y: 1.215277777777778 },
  },
  74: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 1.9536138923654571, y: 20.13888888888889 },
  },
  75: {
    map: "yakuza_5_nagoya_map",
    target: { x: 17.758462513164826, y: -14.756944444444445 },
  },
  76: {
    map: "yakuza_3_kamuro_map",
    target: { x: 18.148934936725635, y: 26.5625 },
  },
  77: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -29.165388323983173, y: -20.65972222222222 },
  },
  78: {
    map: "yakuza_4_kamuro_underground_map",
    target: { x: 7.400300680487419, y: 6.597222222222222 },
  },
  79: {
    map: "yakuza_5_nagoya_map",
    target: { x: 31.438515081206496, y: -13.90620061547698 },
  },
  80: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -7.465254387285787, y: -45.6442831215971 },
  },
  81: {
    map: "yakuza_3_rykyu_map",
    target: { x: -13.461018650808972, y: 39.83666061705989 },
  },
  82: {
    map: "yakuza_0_osaka_map",
    target: { x: 21.370177086349308, y: 30.58076225045372 },
  },
  83: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -20.37812684096931, y: -34.029038112522684 },
  },
  84: {
    map: "yakuza_5_osaka_map",
    target: { x: 23.282744529585443, y: -9.346642468239565 },
  },
  85: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -16.16783910923137, y: 34.029038 },
  },
  86: {
    map: "yakuza_3_kamuro_map",
    target: { x: 2.422007149141746, y: 40.381125226860256 },
  },
  87: {
    map: "yakuza_kiwami_map",
    target: { x: 23.026150055725534, y: 38.02177858439201 },
  },
  88: {
    map: "yakuza_0_osaka_map",
    target: { x: 8.771341341412029, y: 16.06170598911071 },
  },
  89: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -4.765257842720825, y: 12.79491833030853 },
  },
  90: {
    map: "yakuza_5_osaka_map",
    target: { x: -3.029946205904955, y: 37.84029038112522 },
  },
  91: {
    map: "yakuza_0_kamuro_map",
    target: { x: 12.519102634635368, y: 17.150635208711435 },
  },
  92: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -21.790472265590946, y: 24.59165154264973 },
  },
  93: {
    map: "yakuza_3_rykyu_map",
    target: { x: -18.7492759779125, y: -29.673321234119783 },
  },
  94: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 38.2482007635021, y: 38.203266787658805 },
  },
  95: {
    map: "yakuza_0_kamuro_map",
    target: { x: -15.873297434273043, y: 8.363636363636363 },
  },
  96: {
    map: "yakuza_6_kamuro_map",
    target: { x: -10.401682415822828, y: 22.363636363636363 },
  },
  97: {
    map: "yakuza_4_kamuro_underground_map",
    target: { x: 35.09088031765671, y: 7.090909090909091 },
  },
  98: {
    map: "yakuza_5_sapporo_map",
    target: { x: 0, y: 41.63636363636364 },
  },
  99: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -20.97115712822847, y: 12.181818181818182 },
  },
  100: {
    map: "yakuza_6_onomichi_map",
    target: { x: 8.974638791335707, y: -3.272727272727273 },
  },
  101: {
    map: "yakuza_5_osaka_map",
    target: { x: -34.18881118881119, y: 26 },
  },
  102: {
    map: "yakuza_4_kamuro_underground_map",
    target: { x: -12.70160698614568, y: 33.81818181818182 },
  },
  103: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: 36.18302945301542, y: -30.727272727272727 },
  },
  104: {
    map: "yakuza_3_rykyu_map",
    target: { x: -4.655705996131528, y: -12 },
  },
  105: {
    map: "yakuza_5_nagoya_map",
    target: { x: 0.11655011655011654, y: 44.25859578254354 },
  },
  106: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 9.03635225850495, y: 32 },
  },
  107: {
    map: "yakuza_5_sapporo_map",
    target: { x: -20.77583945069361, y: -45.27272727272727 },
  },
  108: {
    map: "yakuza_6_onomichi_map",
    target: { x: -18.16817121172838, y: -26 },
  },
  109: {
    map: "yakuza_0_osaka_map",
    target: { x: -43, y: -36 },
  },
  110: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 16.37256847955538, y: 17.272727272727273 },
  },
  111: {
    map: "yakuza_6_onomichi_map",
    target: { x: 14.446979517759917, y: -20.18181818181818 },
  },
  112: {
    map: "yakuza_5_fukuoka_map",
    target: { x: -22.396990595611282, y: 5.090909090909091 },
  },
  113: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -29.91756980747163, y: 24.363636363636363 },
  },
  114: {
    map: "yakuza_5_osaka_map",
    target: { x: -17.25416639435331, y: 21.818181818181817 },
  },
  115: {
    map: "yakuza_6_onomichi_map",
    target: { x: 14.22808588870295, y: 28.363636363636363 },
  },
  116: {
    map: "yakuza_0_osaka_map",
    target: { x: 21.728569744133946, y: 24.181818181818183 },
  },
  117: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: 33.67684559479791, y: 6.363636363636363 },
  },
  118: {
    map: "yakuza_5_sapporo_map",
    target: { x: -28.855332570407793, y: -44.90909090909091 },
  },
  119: {
    map: "yakuza_5_osaka_map",
    target: { x: 27.798379190902555, y: -10.363636363636363 },
  },
  120: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -38.606920735741696, y: -19.272727272727273 },
  },
  121: {
    map: "yakuza_0_osaka_map",
    target: { x: 11.822898243131707, y: -30.363636363636363 },
  },
  122: {
    map: "yakuza_6_kamuro_map",
    target: { x: -8.35544980943145, y: 20.545454545454543 },
  },
  123: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 0.4042609501124785, y: 13.818181818181818 },
  },
  124: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 4.317492163009404, y: 21.272727272727273 },
  },
  125: {
    map: "yakuza_0_kamuro_map",
    target: { x: 13.12976454439869, y: 4.363636363636364 },
  },
  126: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: 3.1327298227718985, y: -27.27272727272727 },
  },
  127: {
    map: "yakuza_5_osaka_map",
    target: { x: 4.633063198483759, y: 25.636363636363633 },
  },
  128: {
    map: "yakuza_0_kamuro_map",
    target: { x: 3.1354661598564038, y: 35.090909090909086 },
  },
  129: {
    map: "yakuza_kiwami_map",
    target: { x: 25.80489901160292, y: 23.81818181818182 },
  },
  130: {
    map: "yakuza_0_kamuro_map",
    target: { x: -20.9684299440397, y: 23.636363636363637 },
  },
  131: {
    map: "yakuza_0_kamuro_map",
    target: { x: 22.73212965895893, y: 31.454545454545457 },
  },
  132: {
    map: "yakuza_5_osaka_map",
    target: { x: 27.319096791059405, y: -21.818181818181817 },
  },
  133: {
    map: "yakuza_kiwami_map",
    target: { x: 8.601633003867642, y: 7.818181818181818 },
  },
  134: {
    map: "yakuza_0_kamuro_map",
    target: { x: 5.878999049730757, y: -23.636363636363637 },
  },
  // Duplicate Start
  135: {
    map: "yakuza_0_kamuro_map",
    target: { x: 5.878999049730757, y: -23.636363636363637 },
  },
  136: {
    map: "yakuza_0_kamuro_map",
    target: { x: 5.878999049730757, y: -23.636363636363637 },
  },
  137: {
    map: "yakuza_0_kamuro_map",
    target: { x: 5.878999049730757, y: -23.636363636363637 },
  },
  138: {
    map: "yakuza_0_kamuro_map",
    target: { x: 5.878999049730757, y: -23.636363636363637 },
  },
  139: {
    map: "yakuza_0_kamuro_map",
    target: { x: 5.878999049730757, y: -23.636363636363637 },
  },
  140: {
    map: "yakuza_0_kamuro_map",
    target: { x: 5.878999049730757, y: -23.636363636363637 },
  },
  141: {
    map: "yakuza_0_kamuro_map",
    target: { x: 5.878999049730757, y: -23.636363636363637 },
  },
  // Duplicate End
  142: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -12.127828503374355, y: -15.272727272727273 },
  },
  143: {
    map: "yakuza_5_nagoya_map",
    target: { x: 0.9280742459396751, y: 12.992654589642727 },
  },
  144: {
    map: "yakuza_6_onomichi_map",
    target: { x: -39.61974685931129, y: 12.545454545454545 },
  },
  145: {
    map: "yakuza_0_kamuro_map",
    target: { x: 16.265230704255092, y: 30.545454545454547 },
  },
  146: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -4.262430310615542, y: 23.272727272727273 },
  },
  147: {
    map: "yakuza_6_onomichi_map",
    target: { x: 0.6566808871709053, y: -32.36363636363636 },
  },
  148: {
    map: "yakuza_kiwami_map",
    target: { x: -4.691799820291441, y: 31.272727272727273 },
  },
  149: {
    map: "yakuza_5_osaka_map",
    target: { x: -23.005555192471082, y: 29.63636363636364 },
  },
  150: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 11.082318807600409, y: 16.18181818181818 },
  },
  151: {
    map: "yakuza_0_kamuro_map",
    target: { x: -33.70626121845634, y: -5.454545454545454 },
  },
  152: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -29.511049358210933, y: 29.818181818181817 },
  },
  153: {
    map: "yakuza_5_sapporo_map",
    target: { x: 15.58187958802021, y: -27.81818181818182 },
  },
  154: {
    map: "yakuza_kiwami_2_osaka_map",
    target: {
      x: 15.350376131582303,
      y: -27.090909090909093,
    },
  },
  155: {
    map: "yakuza_0_osaka_map",
    target: { x: -41.699681641315884, y: 5.2727272727272725 },
  },
  156: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -44.87296546248511, y: -16.545454545454547 },
  },
  157: {
    map: "yakuza_5_osaka_map",
    target: { x: -26.360531991373108, y: 1.4545454545454546 },
  },
  158: {
    map: "yakuza_0_kamuro_map",
    target: { x: -20.576496674057648, y: 44.90909090909091 },
  },
  159: {
    map: "yakuza_kiwami_map",
    target: { x: -20.13564089541743, y: 15.818181818181817 },
  },
  160: {
    map: "yakuza_5_nagoya_map",
    target: { x: -23.781902552204176, y: 14.007705729458564 },
  },
  161: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: 3.759275787326278, y: 29.09090909090909 },
  },
  162: {
    map: "yakuza_5_osaka_map",
    target: { x: -19.171295993725902, y: -30 },
  },
  163: {
    map: "yakuza_kiwami_map",
    target: { x: -4.691799820291441, y: 38.18181818181819 },
  },
  164: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -6.137899647286381, y: -28.363636363636363 },
  },
  165: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 38.04789968652037, y: 19.454545454545453 },
  },
  166: {
    map: "yakuza_0_kamuro_map",
    target: { x: -32.92239467849224, y: -14.909090909090908 },
  },
  167: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -19.095687791557626, y: -10.727272727272727 },
  },
  168: {
    map: "yakuza_6_kamuro_map",
    target: { x: -15.687783315667215, y: 12.545454545454545 },
  },
  169: {
    map: "yakuza_kiwami_map",
    target: { x: 36.75243192561628, y: -14.000000000000002 },
  },
  170: {
    map: "yakuza_0_osaka_map",
    target: { x: 2.236764532484377, y: -30 },
  },
  171: {
    map: "yakuza_5_fukuoka_map",
    target: { x: -19.96840125391849, y: 16.727272727272727 },
  },
  172: {
    map: "yakuza_6_onomichi_map",
    target: { x: -3.502298064911495, y: 29.454545454545457 },
  },
  173: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -16.538229605188302, y: -14.000000000000002 },
  },
  174: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 34.00025078369905, y: -6 },
  },
  175: {
    map: "yakuza_0_osaka_map",
    target: { x: 6.550524702275676, y: -30.363636363636363 },
  },
  176: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -33.05029963024353, y: 5.818181818181818 },
  },
  177: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -36.5856159851793, y: -9.272727272727273 },
  },
  178: {
    map: "yakuza_0_kamuro_map",
    target: { x: -33.314327948474286, y: -10 },
  },
  179: {
    map: "yakuza_kiwami_map",
    target: { x: 36.75243192561628, y: 18.72727272727273 },
  },
  180: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 10.741324382751166, y: 35.090909090909086 },
  },
  181: {
    map: "yakuza_6_onomichi_map",
    target: { x: -15.322554033987789, y: 27.090909090909093 },
  },
  182: {
    map: "yakuza_6_kamuro_map",
    target: { x: 5.115581515978439, y: 0.9090909090909091 },
  },
  183: {
    map: "yakuza_kiwami_map",
    target: { x: -20.33113255459624, y: 21.09090909090909 },
  },
  184: {
    map: "yakuza_5_nagoya_map",
    target: { x: -18.793503480278424, y: -34.30872852577532 },
  },
  185: {
    map: "yakuza_6_kamuro_map",
    target: { x: 18.075054689790484, y: 13.454545454545455 },
  },
  186: {
    map: "yakuza_0_osaka_map",
    target: { x: 23.326258695908503, y: -19.272727272727273 },
  },
  187: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -30.8573887543032, y: -33.09090909090909 },
  },
  188: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 44.670834987428876, y: 16.363636363636363 },
  },
  189: {
    map: "yakuza_5_nagoya_map",
    target: { x: 0.34802784222737815, y: 32.07561601818048 },
  },
  190: {
    map: "yakuza_kiwami_map",
    target: { x: 6.25573309372192, y: -16 },
  },
  191: {
    map: "yakuza_0_kamuro_map",
    target: { x: 20.184563404075597, y: -7.818181818181818 },
  },
  192: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 32.54300648405452, y: 9.454545454545455 },
  },
  193: {
    map: "yakuza_5_osaka_map",
    target: { x: 30.674073589961438, y: -33.09090909090909 },
  },
  194: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -28.3025372624872, y: 3.8181818181818183 },
  },
  195: {
    map: "yakuza_0_osaka_map",
    target: { x: -15.817120622568096, y: -29.63636363636364 },
  },
  196: {
    map: "yakuza_6_kamuro_map",
    target: { x: -4.433503980514648, y: 26.545454545454543 },
  },
  197: {
    map: "yakuza_5_nagoya_map",
    target: { x: -18.561484918793504, y: -14.616736413348066 },
  },
  198: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -4.042609501124785, y: 28.18181818181818 },
  },
  199: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 1.5344749118215952, y: 12.181818181818182 },
  },
  200: {
    map: "yakuza_5_osaka_map",
    target: { x: 6.390431997908633, y: 17.81818181818182 },
  },
  201: {
    map: "yakuza_6_onomichi_map",
    target: { x: 28.237278148348928, y: -14.363636363636365 },
  },
  202: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -20.630162703379224, y: 24.181818181818183 },
  },
  203: {
    map: "yakuza_0_kamuro_map",
    target: { x: 14.893464259317918, y: 43.27272727272727 },
  },
  204: {
    map: "yakuza_6_onomichi_map",
    target: { x: 30.645108067975578, y: 29.454545454545457 },
  },
  205: {
    map: "yakuza_5_sapporo_map",
    target: { x: 46.45708543835655, y: -31.818181818181817 },
  },
  206: {
    map: "yakuza_6_onomichi_map",
    target: { x: -34.14740613288708, y: -21.272727272727273 },
  },
  207: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 30.52170173349213, y: 36.90909090909091 },
  },
  208: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 28.873228840125385, y: -32.54545454545455 },
  },
  209: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -18.013196480938415, y: 10.181818181818182 },
  },
  210: {
    map: "yakuza_0_kamuro_map",
    target: { x: 23.124062928940976, y: 38.72727272727273 },
  },
  211: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 8.524860621231085, y: 15.272727272727273 },
  },
  212: {
    map: "yakuza_6_kamuro_map",
    target: { x: 17.0519383865948, y: 30.363636363636363 },
  },
  213: {
    map: "yakuza_5_osaka_map",
    target: { x: 21.88722959283707, y: -29.272727272727273 },
  },
  214: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -4.446870451237263, y: 17.272727272727273 },
  },
  215: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -5.952186663266607, y: 41.45454545454545 },
  },
  216: {
    map: "yakuza_0_osaka_map",
    target: { x: -23.965334276618325, y: 4.545454545454546 },
  },
  217: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 0.26984326018808774, y: 30 },
  },
  218: {
    map: "yakuza_kiwami_map",
    target: { x: -34.40653201547057, y: -14.545454545454545 },
  },
  219: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -13.157465255641974, y: 10.363636363636363 },
  },
  220: {
    map: "yakuza_6_kamuro_map",
    target: { x: -4.604023364380596, y: 16.363636363636363 },
  },
  221: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -2.727955398793947, y: 20.18181818181818 },
  },
  222: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -15.856240755489818, y: 28.909090909090907 },
  },
  223: {
    map: "yakuza_5_sapporo_map",
    target: { x: -23.084266056326236, y: 1.090909090909091 },
  },
  224: {
    map: "yakuza_0_kamuro_map",
    target: { x: 12.737831274416639, y: 34.54545454545455 },
  },
  225: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -0.808521900224957, y: 35.090909090909086 },
  },
  226: {
    map: "yakuza_5_sapporo_map",
    target: { x: 5.482513188377481, y: -23.454545454545457 },
  },
  227: {
    map: "yakuza_7_yokohama_map",
    target: { x: -27.298406229938315, y: 38 },
  },
  228: {
    map: "yakuza_7_yokohama_map",
    target: { x: 0.3455494459485863, y: 14.000000000000002 },
  },
  229: {
    map: "yakuza_0_osaka_map",
    target: { x: -29.39747671265181, y: 28.363636363636363 },
  },
  230: {
    map: "yakuza_6_onomichi_map",
    target: { x: -39.181959601197356, y: 8.727272727272728 },
  },
  231: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 8.695357833655706, y: 28.72727272727273 },
  },
  232: {
    map: "yakuza_kiwami_map",
    target: { x: 30.692190491073173, y: 16.363636363636363 },
  },
  233: {
    map: "yakuza_7_yokohama_map",
    target: { x: -26.261757892092554, y: -11.636363636363637 },
  },
  234: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 5.285413585163272, y: 0.7272727272727273 },
  },
  235: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 40.47648902821316, y: 32.36363636363636 },
  },
  236: {
    map: "yakuza_0_kamuro_map",
    target: { x: -23.124062928940976, y: -0.5454545454545455 },
  },
  237: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -11.764307657298897, y: -3.090909090909091 },
  },
  238: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 12.127828503374355, y: 18 },
  },
  239: {
    map: "yakuza_kiwami_map",
    target: { x: 23.068015783099582, y: 27.81818181818182 },
  },
  240: {
    map: "yakuza_dead_souls_kamuro_streets_map",
    target: { x: -4.042609501124785, y: 35.090909090909086 },
  },
  241: {
    map: "yakuza_5_osaka_map",
    target: { x: -33.549767989020324, y: 6.545454545454546 },
  },
  242: {
    map: "yakuza_0_osaka_map",
    target: { x: -29.39747671265181, y: -25.818181818181817 },
  },
  243: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -18.013196480938415, y: -16.727272727272727 },
  },
  244: {
    map: "yakuza_5_sapporo_map",
    target: { x: -32.317972478856724, y: -10.545454545454545 },
  },
  245: {
    map: "yakuza_7_yokohama_map",
    target: { x: 1.5549725067686382, y: 43.09090909090909 },
  },
  246: {
    map: "yakuza_6_kamuro_map",
    target: { x: 17.734015922058592, y: 1.2727272727272727 },
  },
  247: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -4.09193309819092, y: 29.272727272727273 },
  },
  248: {
    map: "yakuza_5_osaka_map",
    target: { x: -9.266126396967518, y: 42.36363636363637 },
  },
  249: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -11.904373326533214, y: -27.636363636363637 },
  },
  250: {
    map: "yakuza_6_kamuro_map",
    target: { x: -16.02882208339911, y: 24.545454545454547 },
  },
  251: {
    map: "yakuza_7_yokohama_map",
    target: { x: 23.151812878555276, y: -42.18181818181818 },
  },
  252: {
    map: "yakuza_5_sapporo_map",
    target: { x: -34.33784575878527, y: -42.18181818181818 },
  },
  253: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -3.9214358857662988, y: 34 },
  },
  254: {
    map: "yakuza_7_yokohama_map",
    target: { x: -8.638736148714656, y: -13.272727272727272 },
  },
  255: {
    map: "yakuza_0_osaka_map",
    target: { x: -1.4379200565970993, y: -5.2727272727272725 },
  },
  256: {
    map: "yakuza_6_onomichi_map",
    target: { x: -14.00919225964598, y: 31.454545454545457 },
  },
  257: {
    map: "yakuza_7_yokohama_map",
    target: { x: -27.12563150696402, y: 32.18181818181819 },
  },
  258: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 7.680958052137092, y: 35.27272727272727 },
  },
  259: {
    map: "yakuza_7_yokohama_map",
    target: { x: 34.90049404080721, y: -24.545454545454547 },
  },
  260: {
    map: "yakuza_6_onomichi_map",
    target: { x: -15.322554033987789, y: 21.636363636363637 },
  },
  261: {
    map: "yakuza_kiwami_map",
    target: { x: -3.5188498652185802, y: 14.545454545454545 },
  },
  262: {
    map: "yakuza_7_yokohama_map",
    target: { x: -43.88477963547045, y: -8 },
  },
  263: {
    map: "yakuza_5_nagoya_map",
    target: { x: -36.774941995359626, y: 35.32377966559116 },
  },
  264: {
    map: "yakuza_0_osaka_map",
    target: { x: 6.870062492630587, y: -21.818181818181817 },
  },
  265: {
    map: "yakuza_5_osaka_map",
    target: { x: -30.35455199006601, y: -29.272727272727273 },
  },
  266: {
    map: "yakuza_kiwami_map",
    target: { x: 40.857756768371296, y: -19.090909090909093 },
  },
  267: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -4.042609501124785, y: 24.181818181818183 },
  },
  268: {
    map: "yakuza_7_yokohama_map",
    target: { x: -39.21986211516454, y: 9.454545454545455 },
  },
  269: {
    map: "yakuza_5_osaka_map",
    target: { x: -19.490817593621333, y: -9.090909090909092 },
  },
  270: {
    map: "yakuza_6_kamuro_map",
    target: { x: -26.601023883087883, y: 4 },
  },
  271: {
    map: "yakuza_0_osaka_map",
    target: { x: 21.40903195377904, y: 18.363636363636363 },
  },
  272: {
    map: "yakuza_kiwami_map",
    target: { x: 10.16556627729812, y: 5.2727272727272725 },
  },
  273: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 10.523887147335422, y: 11.090909090909092 },
  },
  274: {
    map: "yakuza_0_kamuro_map",
    target: { x: 25.08372927885123, y: 22.181818181818183 },
  },
  275: {
    map: "yakuza_kiwami_map",
    target: { x: 40.46677345001367, y: 39.45454545454545 },
  },
  276: {
    map: "yakuza_6_onomichi_map",
    target: { x: -33.70961887477314, y: 13.818181818181818 },
  },
  277: {
    map: "yakuza_0_osaka_map",
    target: { x: 24.284872066973236, y: -0.5454545454545455 },
  },
  278: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 10.79373040752351, y: -42 },
  },
  279: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 43.05379118697896, y: 2.181818181818182 },
  },
  280: {
    map: "yakuza_7_yokohama_map",
    target: { x: -22.28793926368381, y: -10.181818181818182 },
  },
  281: {
    map: "yakuza_5_nagoya_map",
    target: { x: 11.7169373549884, y: 16.03780800909024 },
  },
  282: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -2.4255657006748708, y: 10.363636363636363 },
  },
  283: {
    map: "yakuza_kiwami_map",
    target: { x: -6.646716412079541, y: -29.63636363636364 },
  },
  284: {
    map: "yakuza_5_sapporo_map",
    target: { x: -38.66614564434644, y: 10.545454545454545 },
  },
  285: {
    map: "yakuza_7_yokohama_map",
    target: { x: -15.549725067686381, y: 22 },
  },
  286: {
    map: "yakuza_0_osaka_map",
    target: { x: -32.27331682584601, y: 4.7272727272727275 },
  },
  287: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 5.396865203761755, y: -5.454545454545454 },
  },
  288: {
    map: "yakuza_6_onomichi_map",
    target: { x: 17.730383953614442, y: -4.363636363636364 },
  },
  289: {
    map: "yakuza_0_osaka_map",
    target: { x: -7.988444758872775, y: 5.090909090909091 },
  },
  290: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 19.96840125391849, y: 7.2727272727272725 },
  },
  291: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -0.8524860621231084, y: 27.27272727272727 },
  },
  292: {
    map: "yakuza_0_osaka_map",
    target: { x: 8.467751444405142, y: -5.090909090909091 },
  },
  293: {
    map: "yakuza_5_sapporo_map",
    target: { x: -0.5771066514081559, y: 32.54545454545455 },
  },
  294: {
    map: "yakuza_7_yokohama_map",
    target: { x: -37.6648896083959, y: -31.09090909090909 },
  },
  295: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -0.20213047505623924, y: 34.909090909090914 },
  },
  296: {
    map: "yakuza_5_osaka_map",
    target: { x: -18.05297039409189, y: -19.090909090909093 },
  },
  297: {
    map: "yakuza_6_onomichi_map",
    target: { x: 6.566808871709054, y: -7.636363636363637 },
  },
  298: {
    map: "yakuza_6_onomichi_map",
    target: { x: 8.521358154758572, y: 16.06170598911071 },
  },
  299: {
    map: "yakuza_0_kamuro_map",
    target: { x: -5.672718381319151, y: -14.609800362976408 },
  },
  300: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 10.693472500706669, y: 0.6352087114337568 },
  },
  301: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -33.967291676723974, y: 32.758620689655174 },
  },
  302: {
    map: "yakuza_6_kamuro_map",
    target: { x: 10.893434323196677, y: 35.11796733212341 },
  },
  303: {
    map: "yakuza_0_kamuro_map",
    target: { x: 36.18803105324287, y: 16.969147005444647 },
  },
  304: {
    map: "yakuza_7_yokohama_map",
    target: { x: -15.521504151048113, y: 14.065335753176045 },
  },
  305: {
    map: "yakuza_6_kamuro_map",
    target: { x: -20.59539926729372, y: -10.798548094373865 },
  },
  306: {
    map: "yakuza_kiwami_map",
    target: { x: -11.317938162983737, y: -36.38838475499092 },
  },
  307: {
    map: "yakuza_7_yokohama_map",
    target: { x: -5.8636793459515095, y: 3.901996370235935 },
  },
  308: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 2.5528167014575844, y: 35.84392014519056 },
  },
  309: {
    map: "yakuza_5_osaka_map",
    target: { x: 27.2695158531446, y: 3.3575317604355717 },
  },
  310: {
    map: "yakuza_7_yokohama_map",
    target: { x: -33.28500334613651, y: 6.987295825771326 },
  },
  311: {
    map: "yakuza_kiwami_map",
    target: { x: 43.51552086802368, y: 3.720508166969147 },
  },
  312: {
    map: "yakuza_0_osaka_map",
    target: { x: 18.97799308414603, y: -18.784029038112525 },
  },
  313: {
    map: "yakuza_6_onomichi_map",
    target: { x: 11.143314510068903, y: -31.488203266787657 },
  },
  314: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 8.474072547729811, y: -10.980036297640654 },
  },
  315: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 11.85155516615558, y: 7.350272232304899 },
  },
  316: {
    map: "yakuza_0_osaka_map",
    target: { x: -34.447449631727245, y: 35.2994555353902 },
  },
  317: {
    map: "yakuza_6_onomichi_map",
    target: { x: 13.10978177655165, y: 7.168784029038113 },
  },
  318: {
    map: "yakuza_5_osaka_map",
    target: { x: 6.05989241180991, y: -6.442831215970962 },
  },
  319: {
    map: "yakuza_0_kamuro_map",
    target: { x: 10.562992847973593, y: 21.50635208711434 },
  },
  320: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 27.036326699899877, y: 46.007259528130675 },
  },
  321: {
    map: "yakuza_5_osaka_map",
    target: { x: -19.614914911911026, y: 41.28856624319419 },
  },
  322: {
    map: "yakuza_kiwami_map",
    target: { x: -0.7805474595161198, y: -14.24682395644283 },
  },
  323: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -19.9745995767917, y: 46.55172413793103 },
  },
  324: {
    map: "yakuza_6_kamuro_map",
    target: { x: 11.914693790996365, y: 4.627949183303085 },
  },
  325: {
    map: "yakuza_5_sapporo_map",
    target: { x: 5.18453343824024, y: 0.4537205081669692 },
  },
  326: {
    map: "yakuza_7_yokohama_map",
    target: { x: -19.660571924660942, y: 37.84029038112522 },
  },
  327: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 4.42488228252648, y: 31.125226860254084 },
  },
  328: {
    map: "yakuza_6_kamuro_map",
    target: { x: -11.914693790996365, y: -4.99092558983666 },
  },
  329: {
    map: "yakuza_5_sapporo_map",
    target: { x: -6.6246816155291945, y: -14.42831215970962 },
  },
  330: {
    map: "yakuza_0_kamuro_map",
    target: { x: 28.16798092792958, y: 28.584392014519054 },
  },
  331: {
    map: "yakuza_7_yokohama_map",
    target: { x: -44.667439723571796, y: -10.617059891107077 },
  },
  332: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 33.39983728643845, y: -15.335753176043557 },
  },
  333: {
    map: "yakuza_kiwami_map",
    target: { x: -6.439516541007988, y: -20.5989110707804 },
  },
  334: {
    map: "yakuza_7_yokohama_map",
    target: { x: 1.7246115723386795, y: 31.125226860254084 },
  },
  335: {
    map: "yakuza_0_kamuro_map",
    target: { x: 32.08020050125313, y: 39.83666061705989 },
  },
  336: {
    map: "yakuza_5_osaka_map",
    target: { x: -29.66157864728009, y: 28.765880217785845 },
  },
  337: {
    map: "yakuza_6_kamuro_map",
    target: { x: -16.16994157349507, y: -17.33212341197822 },
  },
  338: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 18.210092470397438, y: 22.23230490018149 },
  },
  339: {
    map: "yakuza_0_osaka_map",
    target: { x: -33.96901283128659, y: 12.431941923774954 },
  },
  340: {
    map: "yakuza_5_osaka_map",
    target: { x: 20.890681735449952, y: 16.969147005444647 },
  },
  341: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 11.702290661150695, y: 25.862068965517242 },
  },
  342: {
    map: "yakuza_0_kamuro_map",
    target: { x: -41.66513845589584, y: -15.335753176043557 },
  },
  343: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -16.848590229620058, y: 22.413793103448278 },
  },
  344: {
    map: "yakuza_5_nagoya_map",
    target: { x: -37.33582198673674, y: 17.876588021778584 },
  },
  345: {
    map: "yakuza_6_onomichi_map",
    target: { x: -15.51324176891945, y: 7.894736842105263 },
  },
  346: {
    map: "yakuza_kiwami_map",
    target: { x: 36.880867462136656, y: 0.6352087114337568 },
  },
  347: {
    map: "yakuza_5_osaka_map",
    target: { x: 9.089838617714866, y: -30.03629764065336 },
  },
  348: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 24.45778748180495, y: 15.090909090909092 },
  },
  349: {
    map: "yakuza_7_yokohama_map",
    target: { x: 4.664917520305914, y: -38 },
  },
  350: {
    map: "yakuza_dead_souls_kamuro_streets_map",
    target: { x: 30.52170173349213, y: 31.636363636363633 },
  },
  351: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 17.989612280005293, y: 6.909090909090909 },
  },
  352: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 12.142946708463949, y: 28.363636363636363 },
  },
  353: {
    map: "yakuza_7_yokohama_map",
    target: { x: -20.56019203394088, y: 40.36363636363636 },
  },
  354: {
    map: "yakuza_6_onomichi_map",
    target: { x: 27.799490890234992, y: 19.818181818181817 },
  },
  355: {
    map: "yakuza_0_kamuro_map",
    target: { x: 10.190265019533312, y: -1.090909090909091 },
  },
  356: {
    map: "yakuza_5_fukuoka_map",
    target: { x: -20.508087774294665, y: -15.272727272727273 },
  },
  357: {
    map: "yakuza_kiwami_map",
    target: { x: -10.947532914013362, y: -14.545454545454545 },
  },
  358: {
    map: "yakuza_6_onomichi_map",
    target: { x: -23.640511938152592, y: 15.272727272727273 },
  },
  359: {
    map: "yakuza_6_onomichi_map",
    target: { x: -20.138213873241096, y: -0.36363636363636365 },
  },
  360: {
    map: "yakuza_0_osaka_map",
    target: { x: 35.628463624572575, y: 5.090909090909091 },
  },
  361: {
    map: "yakuza_5_fukuoka_map",
    target: { x: -23.476363636363633, y: -39.63636363636363 },
  },
  362: {
    map: "yakuza_6_onomichi_map",
    target: { x: -34.58519339100101, y: -14.909090909090908 },
  },
  363: {
    map: "yakuza_0_osaka_map",
    target: { x: -33.71123688244311, y: 42.18181818181818 },
  },
  364: {
    map: "yakuza_7_yokohama_map",
    target: { x: 26.78008206101543, y: -18.545454545454547 },
  },
  365: {
    map: "yakuza_6_onomichi_map",
    target: { x: 33.70961887477314, y: 10 },
  },
  366: {
    map: "yakuza_5_nagoya_map",
    target: { x: 0.8120649651972157, y: -36.74485126133333 },
  },
  367: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 12.734219928543073, y: 26.181818181818183 },
  },
  368: {
    map: "yakuza_0_osaka_map",
    target: { x: -24.284872066973236, y: -19.090909090909093 },
  },
  369: {
    map: "yakuza_7_yokohama_map",
    target: { x: 21.942389817735226, y: -25.09090909090909 },
  },
  370: {
    map: "yakuza_kiwami_map",
    target: { x: 13.488924483337891, y: 18.545454545454547 },
  },
  371: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 29.10678840809845, y: -8.727272727272728 },
  },
  372: {
    map: "yakuza_7_yokohama_map",
    target: { x: 19.86909314204371, y: -14.000000000000002 },
  },
  373: {
    map: "yakuza_0_kamuro_map",
    target: { x: -20.576496674057648, y: 26.181818181818183 },
  },
  374: {
    map: "yakuza_5_osaka_map",
    target: { x: -36.904744787922354, y: 5.454545454545454 },
  },
  375: {
    map: "yakuza_6_kamuro_map",
    target: { x: -5.627139667576284, y: -14.363636363636365 },
  },
  376: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -12.277395638348255, y: 20.545454545454543 },
  },
  377: {
    map: "yakuza_dead_souls_kamuro_streets_map",
    target: { x: 27.08548365753606, y: 27.636363636363637 },
  },
  378: {
    map: "yakuza_kiwami_map",
    target: { x: -27.173340625854593, y: -15.454545454545453 },
  },
  379: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 34.00025078369905, y: -19.272727272727273 },
  },
  380: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -28.90465793304221, y: 23.454545454545457 },
  },
  381: {
    map: "yakuza_7_yokohama_map",
    target: { x: -7.602087810868897, y: 5.2727272727272725 },
  },
  382: {
    map: "yakuza_0_kamuro_map",
    target: { x: -22.5361630239679, y: -14.909090909090908 },
  },
  383: {
    map: "yakuza_5_sapporo_map",
    target: { x: 0.5771066514081559, y: 47.63636363636364 },
  },
  384: {
    map: "yakuza_7_yokohama_map",
    target: { x: 26.434532615066846, y: -24.363636363636363 },
  },
  385: {
    map: "yakuza_6_kamuro_map",
    target: { x: 7.843891657833607, y: 31.09090909090909 },
  },
  386: {
    map: "yakuza_0_kamuro_map",
    target: { x: -13.52169781438074, y: 45.45454545454545 },
  },
  387: {
    map: "yakuza_5_fukuoka_map",
    target: { x: -4.317492163009404, y: 23.09090909090909 },
  },
  388: {
    map: "yakuza_kiwami_map",
    target: { x: -18.767199281165762, y: -28.909090909090907 },
  },
  389: {
    map: "yakuza_7_yokohama_map",
    target: { x: -40.083735730036004, y: 12.363636363636363 },
  },
  390: {
    map: "yakuza_6_onomichi_map",
    target: { x: -3.283404435854527, y: -0.5454545454545455 },
  },
  391: {
    map: "yakuza_kiwami_map",
    target: { x: -6.646716412079541, y: -35.81818181818181 },
  },
  392: {
    map: "yakuza_dead_souls_kamuro_streets_map",
    target: { x: -3.840479026068546, y: 26.727272727272727 },
  },
  393: {
    map: "yakuza_dead_souls_kamuro_streets_map",
    target: { x: 11.723567553261876, y: 46.909090909090914 },
  },
  394: {
    map: "yakuza_0_osaka_map",
    target: { x: -21.40903195377904, y: 29.272727272727273 },
  },
  395: {
    map: "yakuza_6_kamuro_map",
    target: { x: 4.774542748246543, y: -6.545454545454546 },
  },
  396: {
    map: "yakuza_5_fukuoka_map",
    target: { x: -28.873228840125385, y: -24.90909090909091 },
  },
  397: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 33.95791980944819, y: 0.36363636363636365 },
  },
  398: {
    map: "yakuza_5_nagoya_map",
    target: { x: -10.208816705336426, y: -46.89536265949171 },
  },
  399: {
    map: "yakuza_5_osaka_map",
    target: { x: 22.526272792627932, y: -18 },
  },
  400: {
    map: "yakuza_0_osaka_map",
    target: { x: -23.00672090555359, y: 36.36363636363637 },
  },
  401: {
    map: "ishin_gion_map",
    target: { x: -19.347017239240973, y: -6.545454545454546 },
  },
  402: {
    map: "yakuza_5_osaka_map",
    target: { x: 4.633063198483759, y: -18.72727272727273 },
  },
  403: {
    map: "yakuza_5_nagoya_map",
    target: { x: 16.937354988399072, y: 31.263575106327814 },
  },
  404: {
    map: "yakuza_7_yokohama_map",
    target: { x: 17.277472297429313, y: -17.636363636363637 },
  },
  405: {
    map: "yakuza_6_kamuro_map",
    target: { x: -25.748426963758142, y: -11.272727272727273 },
  },
  406: {
    map: "yakuza_7_yokohama_map",
    target: { x: -3.9738186284087416, y: 24.727272727272727 },
  },
  407: {
    map: "yakuza_7_yokohama_map",
    target: { x: -7.947637256817483, y: 16.18181818181818 },
  },
  408: {
    map: "ishin_mibu_map",
    target: { x: -17.749419953596288, y: -3.9058689410734067 },
  },
  409: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 7.825454545454543, y: 15.818181818181817 },
  },
  410: {
    map: "yakuza_5_osaka_map",
    target: { x: 14.218711195346708, y: 23.454545454545457 },
  },
  411: {
    map: "yakuza_0_osaka_map",
    target: { x: 16.136658412923005, y: 26.90909090909091 },
  },
  412: {
    map: "yakuza_dead_souls_kamuro_streets_map",
    target: { x: 33.14939790922324, y: 39.27272727272727 },
  },
  413: {
    map: "yakuza_5_osaka_map",
    target: { x: 3.3549767989020327, y: 26.90909090909091 },
  },
  414: {
    map: "ishin_kyoto_map",
    target: { x: -22.76596499946754, y: -9.818181818181818 },
  },
  415: {
    map: "ishin_mibu_map",
    target: { x: 8.816705336426914, y: 14.256421634917935 },
  },
  416: {
    map: "yakuza_0_osaka_map",
    target: { x: -22.04810753448886, y: -4.7272727272727275 },
  },
  417: {
    map: "yakuza_6_onomichi_map",
    target: { x: 19.70042661512716, y: 16.363636363636363 },
  },
  418: {
    map: "ishin_mibu_map",
    target: { x: 2.9002320185614847, y: -12.303487164381231 },
  },
  419: {
    map: "yakuza_7_yokohama_map",
    target: { x: -15.722499790660674, y: 40.909090909090914 },
  },
  420: {
    map: "yakuza_5_sapporo_map",
    target: { x: -5.1939598626734025, y: 5.090909090909091 },
  },
  421: {
    map: "yakuza_5_osaka_map",
    target: { x: 21.727468792889354, y: 30.363636363636363 },
  },
  422: {
    map: "yakuza_5_osaka_map",
    target: { x: -34.348571988758906, y: 40.54545454545455 },
  },
  423: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 18.59600370517401, y: 0 },
  },
  424: {
    map: "yakuza_kiwami_map",
    target: { x: 37.92538188068914, y: -10.181818181818182 },
  },
  425: {
    map: "yakuza_7_yokohama_map",
    target: { x: 0, y: 14.363636363636365 },
  },
  426: {
    map: "yakuza_6_kamuro_map",
    target: { x: -18.927651609120225, y: 1.2727272727272727 },
  },
  427: {
    map: "yakuza_6_onomichi_map",
    target: { x: -37.868597826855535, y: 7.090909090909091 },
  },
  428: {
    map: "yakuza_0_kamuro_map",
    target: { x: 4.703199239784606, y: 0.7272727272727273 },
  },
  429: {
    map: "yakuza_0_osaka_map",
    target: { x: -40.741068270251155, y: 31.09090909090909 },
  },
  430: {
    map: "yakuza_6_onomichi_map",
    target: { x: 2.84561717774059, y: -23.454545454545457 },
  },
  431: {
    map: "ishin_gion_map",
    target: { x: -6.633263053454049, y: 7.454545454545454 },
  },
  432: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -21.6279608310176, y: 15.454545454545453 },
  },
  433: {
    map: "yakuza_dead_souls_kamuro_streets_map",
    target: { x: -2.2234352256186316, y: 47.090909090909086 },
  },
  434: {
    map: "yakuza_5_sapporo_map",
    target: { x: 6.059619839785636, y: 21.636363636363637 },
  },
  435: {
    map: "yakuza_6_kamuro_map",
    target: { x: -24.862048431917426, y: -2.5454545454545454 },
  },
  436: {
    map: "yakuza_7_yokohama_map",
    target: { x: -39.04708739219024, y: 18.90909090909091 },
  },
  437: {
    map: "ishin_mibu_map",
    target: { x: -13.45707656612529, y: -35.15282046966066 },
  },
  438: {
    map: "ishin_gion_map",
    target: { x: -25.151122411013265, y: 24.363636363636363 },
  },
  439: {
    map: "yakuza_0_kamuro_map",
    target: { x: -20.576496674057648, y: 29.63636363636364 },
  },
  440: {
    map: "yakuza_5_nagoya_map",
    target: { x: -36.65893271461717, y: -38.571943313001846 },
  },
  441: {
    map: "yakuza_0_osaka_map",
    target: { x: -33.87100577762057, y: 15.272727272727273 },
  },
  442: {
    map: "yakuza_6_onomichi_map",
    target: { x: -13.790298630589012, y: 14.545454545454545 },
  },
  443: {
    map: "yakuza_5_sapporo_map",
    target: { x: -11.542133028163118, y: 36.36363636363637 },
  },
  444: {
    map: "yakuza_5_fukuoka_map",
    target: { x: -1.079373040752351, y: -24.727272727272727 },
  },
  445: {
    map: "yakuza_kiwami_map",
    target: { x: 23.849982419814822, y: 32 },
  },
  446: {
    map: "yakuza_0_kamuro_map",
    target: { x: 11.170098194488439, y: 25.818181818181817 },
  },
  447: {
    map: "yakuza_5_fukuoka_map",
    target: { x: -12.142946708463949, y: -24.545454545454547 },
  },
  448: {
    map: "yakuza_5_nagoya_map",
    target: { x: 44.895591647331784, y: 18.879951200574585 },
  },
  449: {
    map: "yakuza_5_nagoya_map",
    target: { x: -18.90951276102088, y: 46.28633197560221 },
  },
  450: {
    map: "yakuza_0_kamuro_map",
    target: { x: -27.239362263752508, y: 23.09090909090909 },
  },
  451: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 35.889153605015665, y: 7.454545454545454 },
  },
  452: {
    map: "yakuza_0_kamuro_map",
    target: { x: -4.703199239784606, y: 32.90909090909091 },
  },
  453: {
    map: "yakuza_5_nagoya_map",
    target: { x: 1.9721577726218096, y: 1.4210715957421731 },
  },
  454: {
    map: "yakuza_kiwami_map",
    target: { x: 16.22580771184123, y: 32.36363636363636 },
  },
  455: {
    map: "ishin_gion_map",
    target: { x: -21.005333002604488, y: -23.636363636363637 },
  },
  456: {
    map: "yakuza_0_kamuro_map",
    target: { x: -9.994298384542287, y: 26.545454545454543 },
  },
  457: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 24.285893416927898, y: -20.363636363636363 },
  },
  458: {
    map: "yakuza_0_kamuro_map",
    target: { x: -25.86759581881533, y: -14.545454545454545 },
  },
  459: {
    map: "yakuza_7_yokohama_map",
    target: { x: -13.130878946046277, y: 4.545454545454546 },
  },
  460: {
    map: "ishin_kyoto_map",
    target: { x: -14.093216428241812, y: 32.54545454545455 },
  },
  461: {
    map: "yakuza_kiwami_map",
    target: { x: 28.34629058092745, y: 33.81818181818182 },
  },
  462: {
    map: "yakuza_6_onomichi_map",
    target: { x: 1.970042661512716, y: 15.272727272727273 },
  },
  463: {
    map: "yakuza_6_onomichi_map",
    target: { x: -17.730383953614442, y: 29.454545454545457 },
  },
  464: {
    map: "yakuza_5_sapporo_map",
    target: { x: -38.08903899293829, y: 37.63636363636363 },
  },
  465: {
    map: "yakuza_5_fukuoka_map",
    target: { x: -22.396990595611282, y: 12.363636363636363 },
  },
  466: {
    map: "yakuza_0_kamuro_map",
    target: { x: 31.550628233555063, y: 17.454545454545457 },
  },
  467: {
    map: "ishin_mibu_map",
    target: { x: -30.74245939675174, y: -27.731669481621186 },
  },
  468: {
    map: "yakuza_0_kamuro_map",
    target: { x: 6.662865589694858, y: 10.727272727272727 },
  },
  469: {
    map: "yakuza_5_nagoya_map",
    target: { x: -10.440835266821345, y: -17.66188983279558 },
  },
  470: {
    map: "yakuza_0_kamuro_map",
    target: { x: 28.02322880371661, y: 36 },
  },
  471: {
    map: "yakuza_0_kamuro_map",
    target: { x: 6.858832224685883, y: 18 },
  },
  472: {
    map: "yakuza_6_kamuro_map",
    target: { x: 15.346744547935318, y: -6.363636363636363 },
  },
  473: {
    map: "ishin_gion_map",
    target: { x: -6.080491132332877, y: 23.81818181818182 },
  },
  474: {
    map: "yakuza_6_onomichi_map",
    target: { x: 26.923916374007117, y: 37.63636363636363 },
  },
  475: {
    map: "ishin_mibu_map",
    target: { x: -38.05104408352668, y: -15.428182317239955 },
  },
  476: {
    map: "yakuza_0_kamuro_map",
    target: { x: -16.265230704255092, y: 3.4545454545454546 },
  },
  477: {
    map: "yakuza_0_kamuro_map",
    target: { x: 37.42962728328582, y: 6.7272727272727275 },
  },
  478: {
    map: "yakuza_5_nagoya_map",
    target: { x: -17.16937354988399, y: 17.052859148906077 },
  },
  479: {
    map: "ishin_mibu_map",
    target: { x: 2.668213457076566, y: -3.3199885999123957 },
  },
  480: {
    map: "ishin_kyoto_map",
    target: { x: -27.53597671364169, y: 35.090909090909086 },
  },
  481: {
    map: "yakuza_5_fukuoka_map",
    target: { x: -24.555736677115984, y: 24.181818181818183 },
  },
  482: {
    map: "yakuza_6_kamuro_map",
    target: { x: 13.300511941543942, y: -3.4545454545454546 },
  },
  483: {
    map: "yakuza_0_kamuro_map",
    target: { x: 16.657163974237143, y: 12.545454545454545 },
  },
  484: {
    map: "yakuza_kiwami_map",
    target: { x: -17.985232644450523, y: -19.090909090909093 },
  },
  485: {
    map: "yakuza_6_kamuro_map",
    target: { x: 13.471031325409891, y: 29.63636363636364 },
  },
  486: {
    map: "ishin_mibu_map",
    target: { x: 29.00232018561485, y: 12.498780611434901 },
  },
  487: {
    map: "yakuza_6_onomichi_map",
    target: { x: 26.267235486836217, y: 1.8181818181818181 },
  },
  488: {
    map: "ishin_gion_map",
    target: { x: -7.18603497457522, y: -2.727272727272727 },
  },
  489: {
    map: "yakuza_7_yokohama_map",
    target: { x: 5.356016412203086, y: 1.090909090909091 },
  },
  490: {
    map: "yakuza_0_kamuro_map",
    target: { x: -36.057860838348645, y: -17.81818181818182 },
  },
  491: {
    map: "yakuza_0_kamuro_map",
    target: { x: -3.9193326998205045, y: 44.18181818181818 },
  },
  492: {
    map: "yakuza_5_sapporo_map",
    target: { x: 30.87520585033634, y: 10.545454545454545 },
  },
  493: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 31.301818181818174, y: -25.09090909090909 },
  },
  494: {
    map: "yakuza_6_kamuro_map",
    target: { x: -22.679078054171082, y: -1.8181818181818181 },
  },
  495: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 7.015924764890282, y: -34.18181818181818 },
  },
  496: {
    map: "yakuza_6_kamuro_map",
    target: { x: 24.725310660562457, y: 29.63636363636364 },
  },
  497: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 0, y: 33.63636363636363 },
  },
  498: {
    map: "yakuza_6_kamuro_map",
    target: { x: 13.982589477007734, y: 24 },
  },
  499: {
    map: "yakuza_kiwami_map",
    target: { x: 26.39137398913935, y: 15.818181818181817 },
  },
  500: {
    map: "yakuza_6_kamuro_map",
    target: { x: -11.595318102884463, y: 9.818181818181818 },
  },
  501: {
    map: "yakuza_0_kamuro_map",
    target: { x: 0, y: 0 },
  },
  502: {
    map: "yakuza_6_kamuro_map",
    target: { x: -11.083759951286618, y: 5.636363636363637 },
  },
  503: {
    map: "yakuza_7_yokohama_map",
    target: { x: -4.146593351383035, y: 39.63636363636363 },
  },
  504: {
    map: "yakuza_6_onomichi_map",
    target: { x: -33.70961887477314, y: -8 },
  },
  505: {
    map: "ishin_kyoto_map",
    target: { x: 3.996041559493336, y: -16.666666666666664 },
  },
  506: {
    map: "yakuza_kiwami_map",
    target: { x: 16.118580364390418, y: 22.134038800705465 },
  },
  507: {
    map: "yakuza_5_sapporo_map",
    target: { x: 38.066646847733736, y: 36.067019400352734 },
  },
  508: {
    map: "yakuza_6_kamuro_map",
    target: { x: 23.487766984004477, y: 14.02116402116402 },
  },
  509: {
    map: "yakuza_7_yokohama_map",
    target: { x: 5.865808496040816, y: -10.670194003527337 },
  },
  510: {
    map: "yakuza_kiwami_map",
    target: { x: -6.257801788528046, y: -14.37389770723104 },
  },
  511: {
    map: "yakuza_6_kamuro_map",
    target: { x: 9.924408584790624, y: 0.6172839506172839 },
  },
  512: {
    map: "yakuza_5_sapporo_map",
    target: { x: 17.913716163639407, y: -10.141093474426807 },
  },
  513: {
    map: "yakuza_0_kamuro_map",
    target: { x: 2.4711841978586073, y: 13.844797178130511 },
  },
  514: {
    map: "yakuza_6_onomichi_map",
    target: { x: 13.801494248300921, y: 38.35978835978836 },
  },
  515: {
    map: "ishin_kyoto_map",
    target: { x: 0.6309539304463162, y: 36.067019400352734 },
  },
  516: {
    map: "yakuza_5_nagoya_map",
    target: { x: 15.4292343387471, y: 8.221914232508286 },
  },
  517: {
    map: "yakuza_kiwami_map",
    target: { x: 10.429669647546742, y: -20.54673721340388 },
  },
  518: {
    map: "yakuza_0_osaka_map",
    target: { x: -11.313441166445923, y: 41.53439153439153 },
  },
  519: {
    map: "ishin_kyoto_map",
    target: { x: 23.55561340332914, y: -20.8994708994709 },
  },
  520: {
    map: "yakuza_7_yokohama_map",
    target: { x: 27.31790813870437, y: -12.433862433862434 },
  },
  521: {
    map: "yakuza_6_kamuro_map",
    target: { x: 9.593594965297605, y: 21.604938271604937 },
  },
  522: {
    map: "yakuza_0_kamuro_map",
    target: { x: 7.4135525935758215, y: 34.30335097001764 },
  },
  523: {
    map: "yakuza_5_sapporo_map",
    target: { x: -38.066646847733736, y: 44.35626102292769 },
  },
  524: {
    map: "yakuza_6_kamuro_map",
    target: { x: 5.789238341127864, y: 18.253968253968253 },
  },
  525: {
    map: "yakuza_kiwami_map",
    target: { x: 17.256362507759157, y: 18.077601410934744 },
  },
  526: {
    map: "yakuza_0_osaka_map",
    target: { x: -0.15497864611569756, y: -20.01763668430335 },
  },
  527: {
    map: "yakuza_5_sapporo_map",
    target: { x: -12.035778047445225, y: 15.608465608465607 },
  },
  528: {
    map: "ishin_kyoto_map",
    target: { x: -9.253990979879305, y: 33.77425044091711 },
  },
  529: {
    map: "yakuza_6_kamuro_map",
    target: { x: -2.150288526704635, y: -9.611992945326278 },
  },
  530: {
    map: "yakuza_0_kamuro_map",
    target: { x: 8.1739169621477, y: 5.908289241622574 },
  },
  531: {
    map: "yakuza_6_onomichi_map",
    target: { x: 20.596076032079836, y: 24.95590828924162 },
  },
  532: {
    map: "ishin_kyoto_map",
    target: { x: -25.65879317148353, y: 35.5379188712522 },
  },
  533: {
    map: "yakuza_0_kamuro_map",
    target: { x: -3.6117307507164256, y: 31.30511463844797 },
  },
  534: {
    map: "yakuza_6_kamuro_map",
    target: { x: 17.698528642876614, y: -2.7336860670194003 },
  },
  535: {
    map: "yakuza_kiwami_map",
    target: { x: 1.327412500596858, y: 40.123456790123456 },
  },
  536: {
    map: "yakuza_0_kamuro_map",
    target: { x: -18.628927030011038, y: -20.54673721340388 },
  },
  537: {
    map: "yakuza_6_onomichi_map",
    target: { x: 5.732928380063459, y: 30.599647266313934 },
  },
  538: {
    map: "yakuza_5_sapporo_map",
    target: { x: -4.758330855966717, y: -48.589065255731924 },
  },
  539: {
    map: "yakuza_7_yokohama_map",
    target: { x: 36.87079626082799, y: -48.41269841269841 },
  },
  540: {
    map: "yakuza_6_kamuro_map",
    target: { x: 17.20230821363708, y: 24.42680776014109 },
  },
  541: {
    map: "yakuza_5_sapporo_map",
    target: { x: -32.46861054659642, y: 37.65432098765432 },
  },
  542: {
    map: "yakuza_6_onomichi_map",
    target: { x: -37.37019981078403, y: 0.7936507936507936 },
  },
  543: {
    map: "yakuza_5_nagoya_map",
    target: { x: 35.382830626450115, y: 43.545693898099444 },
  },
  544: {
    map: "yakuza_0_osaka_map",
    target: { x: -8.523825536363367, y: 13.844797178130511 },
  },
  545: {
    map: "yakuza_0_kamuro_map",
    target: { x: -21.100111227869643, y: 18.78306878306878 },
  },
  546: {
    map: "yakuza_5_sapporo_map",
    target: { x: 20.432832499151196, y: -39.94708994708995 },
  },
  547: {
    map: "ishin_kyoto_map",
    target: { x: 25.448475194668084, y: -13.139329805996471 },
  },
  548: {
    map: "yakuza_6_kamuro_map",
    target: { x: 4.13517024366276, y: 9.964726631393297 },
  },
  549: {
    map: "yakuza_0_osaka_map",
    target: { x: 3.2545515684296493, y: 17.724867724867725 },
  },
  550: {
    map: "yakuza_6_kamuro_map",
    target: { x: -16.37527416490453, y: -23.015873015873016 },
  },
  551: {
    map: "yakuza_0_osaka_map",
    target: { x: -22.781860979007547, y: -29.188712522045858 },
  },
  552: {
    map: "ishin_kyoto_map",
    target: { x: 1.8928617913389487, y: 21.604938271604937 },
  },
  553: {
    map: "yakuza_0_osaka_map",
    target: { x: -33.94032349933777, y: 24.95590828924162 },
  },
  554: {
    map: "yakuza_0_kamuro_map",
    target: { x: 6.653188225003942, y: 1.8518518518518516 },
  },
  555: {
    map: "yakuza_7_yokohama_map",
    target: { x: -40.39028135845248, y: 1.1463844797178129 },
  },
  556: {
    map: "yakuza_5_nagoya_map",
    target: { x: -37.23897911832947, y: -14.921251755292818 },
  },
  557: {
    map: "yakuza_5_sapporo_map",
    target: { x: 0, y: 37.47795414462081 },
  },
  558: {
    map: "yakuza_5_nagoya_map",
    target: { x: -17.633410672853827, y: -3.958699445281768 },
  },
  559: {
    map: "yakuza_7_yokohama_map",
    target: { x: -32.84852757782858, y: -27.954144620811288 },
  },
  560: {
    map: "yakuza_5_nagoya_map",
    target: { x: -37.81902552204176, y: 47.19987800143647 },
  },
  561: {
    map: "ishin_kyoto_map",
    target: { x: 22.714341496067384, y: -10.493827160493826 },
  },
  562: {
    map: "ishin_kyoto_map",
    target: { x: 8.202401095802111, y: 2.5573192239858904 },
  },
  563: {
    map: "yakuza_5_nagoya_map",
    target: { x: 43.03944315545243, y: -1.1165562537974218 },
  },
  564: {
    map: "ishin_kyoto_map",
    target: { x: -17.877028029312292, y: -14.90299823633157 },
  },
  565: {
    map: "yakuza_5_sapporo_map",
    target: { x: 28.27008332074344, y: -10.670194003527337 },
  },
  566: {
    map: "ishin_kyoto_map",
    target: { x: -13.880986469818957, y: 0.4409171075837742 },
  },
  567: {
    map: "yakuza_5_sapporo_map",
    target: { x: 23.231850649719853, y: -34.479717813051145 },
  },
  568: {
    map: "ishin_kyoto_map",
    target: { x: 17.456392075681414, y: 4.320987654320987 },
  },
  569: {
    map: "yakuza_6_kamuro_map",
    target: { x: -10.089815394537135, y: -10.141093474426807 },
  },
  570: {
    map: "yakuza_0_kamuro_map",
    target: { x: 27.753299452873588, y: 40.29982363315697 },
  },
  571: {
    map: "yakuza_6_kamuro_map",
    target: { x: -2.811915765690677, y: 10.141093474426807 },
  },
  572: {
    map: "yakuza_0_kamuro_map",
    target: { x: 5.132459487860184, y: 21.781305114638446 },
  },
  573: {
    map: "yakuza_0_kamuro_map",
    target: { x: 11.785647712864126, y: 34.30335097001764 },
  },
  574: {
    map: "yakuza_7_yokohama_map",
    target: { x: 44.07736098453528, y: -39.59435626102293 },
  },
  575: {
    map: "yakuza_6_kamuro_map",
    target: { x: 24.811021461976562, y: -2.7336860670194003 },
  },
  576: {
    map: "yakuza_6_kamuro_map",
    target: { x: 13.563358399213854, y: 8.55379188712522 },
  },
  577: {
    map: "ishin_kyoto_map",
    target: { x: 14.301622423449833, y: 8.37742504409171 },
  },
  578: {
    map: "yakuza_0_kamuro_map",
    target: { x: 10.835192252149277, y: -2.7336860670194003 },
  },
  579: {
    map: "ishin_kyoto_map",
    target: { x: -8.41271907261755, y: -35.18518518518518 },
  },
  580: {
    map: "yakuza_0_kamuro_map",
    target: { x: -3.9919129350023654, y: 32.89241622574956 },
  },
  581: {
    map: "yakuza_5_nagoya_map",
    target: { x: -24.94199535962877, y: 46.59084731754696 },
  },
  582: {
    map: "yakuza_0_osaka_map",
    target: { x: -2.634636983966859, y: 27.07231040564374 },
  },
  583: {
    map: "yakuza_7_yokohama_map",
    target: { x: -3.0167015122495626, y: -6.084656084656085 },
  },
  584: {
    map: "yakuza_0_kamuro_map",
    target: { x: 22.050566688584496, y: 28.306878306878307 },
  },
  585: {
    map: "yakuza_0_osaka_map",
    target: { x: -31.770622453718005, y: -35.00881834215168 },
  },
  586: {
    map: "ishin_kyoto_map",
    target: { x: -23.134977449698262, y: 28.130511463844798 },
  },
  587: {
    map: "yakuza_0_osaka_map",
    target: { x: -41.84423445123835, y: 25.132275132275133 },
  },
  588: {
    map: "ishin_kyoto_map",
    target: { x: -34.70246617454739, y: 23.544973544973544 },
  },
  589: {
    map: "yakuza_0_osaka_map",
    target: { x: 15.497864611569758, y: 5.026455026455026 },
  },
  590: {
    map: "ishin_kyoto_map",
    target: { x: -10.936534794402816, y: 20.72310405643739 },
  },
  591: {
    map: "yakuza_0_kamuro_map",
    target: { x: -22.050566688584496, y: -3.0864197530864197 },
  },
  592: {
    map: "yakuza_0_kamuro_map",
    target: { x: 7.983825870004731, y: -2.5573192239858904 },
  },
  593: {
    map: "ishin_kyoto_map",
    target: { x: -27.341336986007036, y: 28.306878306878307 },
  },
  594: {
    map: "ishin_kyoto_map",
    target: { x: -8.833355026248427, y: -2.5573192239858904 },
  },
  595: {
    map: "yakuza_7_yokohama_map",
    target: { x: 15.586291146622742, y: -20.72310405643739 },
  },
  596: {
    map: "yakuza_0_kamuro_map",
    target: { x: 4.942368395717215, y: -18.95943562610229 },
  },
  597: {
    map: "yakuza_7_yokohama_map",
    target: { x: 0.16759452845830905, y: -5.379188712522046 },
  },
  598: {
    map: "yakuza_0_osaka_map",
    target: { x: 25.881433901321493, y: -13.492063492063492 },
  },
  599: {
    map: "yakuza_7_yokohama_map",
    target: { x: -42.40141569995219, y: 10.846560846560847 },
  },
  600: {
    map: "yakuza_0_kamuro_map",
    target: { x: 12.736103173578975, y: 39.24162257495591 },
  },
  601: {
    map: "ishin_kyoto_map",
    target: { x: -17.03575612205054, y: 29.01234567901235 },
  },
  602: {
    map: "yakuza_0_osaka_map",
    target: { x: -16.27275784214825, y: 21.252204585537918 },
  },
  603: {
    map: "yakuza_0_kamuro_map",
    target: { x: 30.224483650732193, y: 7.142857142857142 },
  },
  604: {
    map: "yakuza_0_osaka_map",
    target: { x: 35.64508860661044, y: -32.71604938271605 },
  },
  605: {
    map: "yakuza_0_kamuro_map",
    target: { x: 9.504554607148489, y: 31.30511463844797 },
  },
  606: {
    map: "yakuza_0_osaka_map",
    target: { x: -33.94032349933777, y: 21.252204585537918 },
  },
  607: {
    map: "yakuza_7_yokohama_map",
    target: { x: -36.973790716498726, y: 27.636363636363637 },
  },
  608: {
    map: "yakuza_7_yokohama_map",
    target: { x: -44.74865325034192, y: 4 },
  },
  609: {
    map: "yakuza_7_yokohama_map",
    target: { x: -26.434532615066846, y: -22.727272727272727 },
  },
  610: {
    map: "yakuza_7_yokohama_map",
    target: { x: -3.9738186284087416, y: 28.363636363636363 },
  },
  611: {
    map: "ishin_kyoto_map",
    target: { x: -3.2522807142096486, y: -11.818181818181818 },
  },
  612: {
    map: "yakuza_7_yokohama_map",
    target: { x: -34.20939514891004, y: 9.636363636363637 },
  },
  613: {
    map: "yakuza_0_osaka_map",
    target: { x: 4.633297960146209, y: 27.27272727272727 },
  },
  614: {
    map: "ishin_kyoto_map",
    target: { x: -0.8672748571225729, y: -0.18181818181818182 },
  },
  615: {
    map: "yakuza_0_osaka_map",
    target: { x: 23.166489800731046, y: 5.2727272727272725 },
  },
  616: {
    map: "yakuza_0_osaka_map",
    target: { x: -14.53896946114845, y: -18.90909090909091 },
  },
  617: {
    map: "ishin_kyoto_map",
    target: { x: 7.805473714103156, y: -19.636363636363637 },
  },
  618: {
    map: "ishin_kyoto_map",
    target: { x: -14.093216428241812, y: -19.454545454545453 },
  },
  619: {
    map: "yakuza_0_osaka_map",
    target: { x: 39.942223794363876, y: -33.27272727272727 },
  },
  620: {
    map: "ishin_kyoto_map",
    target: { x: -4.336374285612864, y: 36.36363636363637 },
  },
  621: {
    map: "yakuza_0_osaka_map",
    target: { x: 10.544747081712062, y: 24.181818181818183 },
  },
  622: {
    map: "yakuza_7_yokohama_map",
    target: { x: -2.0732966756915174, y: 3.272727272727273 },
  },
  623: {
    map: "ishin_kyoto_map",
    target: { x: -16.695040999609528, y: 33.09090909090909 },
  },
  624: {
    map: "yakuza_0_osaka_map",
    target: { x: -29.0779389222969, y: 0 },
  },
  625: {
    map: "yakuza_0_osaka_map",
    target: { x: -23.166489800731046, y: -0.5454545454545455 },
  },
  626: {
    map: "yakuza_0_osaka_map",
    target: { x: -29.237707817474355, y: -7.636363636363637 },
  },
  627: {
    map: "kabukicho_map",
    target: { x: 10.75970515970516, y: 18 },
  },
  628: {
    map: "ishin_kyoto_map",
    target: { x: -20.814596570941752, y: 18.363636363636363 },
  },
  629: {
    map: "kabukicho_map",
    target: { x: 10.54873054873055, y: 25.272727272727273 },
  },
  630: {
    map: "ishin_kyoto_map",
    target: { x: 16.911859713890173, y: -35.27272727272727 },
  },
  631: {
    map: "kabukicho_map",
    target: { x: 11.814578214578214, y: 11.454545454545455 },
  },
  632: {
    map: "ishin_kyoto_map",
    target: { x: 24.0668772851514, y: 6.7272727272727275 },
  },
  633: {
    map: "kabukicho_map",
    target: { x: 20.464537264537263, y: -24.545454545454547 },
  },
  634: {
    map: "ishin_kyoto_map",
    target: { x: -0.6504561428419298, y: 23.09090909090909 },
  },
  635: {
    map: "kabukicho_map",
    target: { x: 14.346273546273547, y: -7.636363636363637 },
  },
  636: {
    map: "ishin_kyoto_map",
    target: { x: -30.571438713570696, y: 28.363636363636363 },
  },
  637: {
    map: "kabukicho_map",
    target: { x: 4.43046683046683, y: -6.7272727272727275 },
  },
  638: {
    map: "ishin_kyoto_map",
    target: { x: -7.805473714103156, y: -18.72727272727273 },
  },
  639: {
    map: "kabukicho_map",
    target: { x: -21.51941031941032, y: 0.18181818181818182 },
  },
};
