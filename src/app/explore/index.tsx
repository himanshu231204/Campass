import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  Compass,
  Home,
  Map as MapIcon,
  MapPin,
  MoreVertical,
  Search,
  SlidersHorizontal,
  Star,
  User,
  Wallet,
} from "lucide-react-native";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { layout } from "../../constants/layout";
import {
  colors,
  fonts,
  iconSize,
  radius,
  shadows,
  spacing,
} from "../../constants/theme";
import { en } from "../../translation/en";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const CARD_GAP = spacing.lg;
const H_PADDING = spacing["3xl"];
const GRID_CARD = (SCREEN_WIDTH - H_PADDING * 2 - CARD_GAP) / 2;

const categories = [
  en.explore.all,
  en.explore.beach,
  en.explore.mountains,
  en.explore.heritage,
  en.explore.budgetLabel,
];

const trending = [
  {
    place: "Goa",
    subtitle: "Beach & Nightlife",
    price: "4,500",
    rating: "4.8",
    colors: ["#1D4ED8", "#0EA5E9"] as [string, string],
  },
  {
    place: "Manali",
    subtitle: "Snow & Adventure",
    price: "7,200",
    rating: "4.8",
    colors: ["#B91C1C", "#F97316"] as [string, string],
  },
  {
    place: "Jaipur",
    subtitle: "Royal Heritage",
    price: "5,100",
    rating: "4.8",
    colors: ["#7C3AED", "#A855F7"] as [string, string],
  },
  {
    place: "Kerala",
    subtitle: "Backwaters & Spa",
    price: "9,800",
    rating: "4.8",
    colors: ["#047857", "#10B981"] as [string, string],
  },
];

const budget = [
  {
    place: "Rishikesh",
    subtitle: "Adventure & Yoga",
    price: "3,200",
    days: "3 Days",
    colors: ["#047857", "#10B981"] as [string, string],
  },
  {
    place: "Hampi",
    subtitle: "UNESCO Heritage Site",
    price: "3,200",
    days: "3 Days",
    colors: ["#B45309", colors.accentAmber] as [string, string],
  },
];

export default function ExploreScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: spacing["10xl"] }}
      >
        <View style={styles.header}>
          <View style={{ width: 32 }} />
          <Text style={styles.headerTitle}>{en.explore.title}</Text>
          <View style={styles.menuBtn}>
            <MoreVertical size={iconSize.md} color={colors.textBody} />
          </View>
        </View>
        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <Search size={iconSize.md} color={colors.textGray} />
            <Text style={styles.searchPlaceholder}>
              {en.explore.searchPlaceholder}
            </Text>
          </View>
          <View style={styles.filterBtn}>
            <SlidersHorizontal size={iconSize.md} color={colors.white} />
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryRow}
        >
          {categories.map((c, i) => (
            <TouchableOpacity
              key={c}
              activeOpacity={0.8}
              style={[styles.chip, i === 0 && styles.chipActive]}
            >
              <Text style={[styles.chipText, i === 0 && styles.chipTextActive]}>
                {c}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>{en.explore.trendingNow}</Text>
          <Text style={styles.link}>{en.home.seeAll}</Text>
        </View>
        <View style={styles.grid}>
          {trending.map((t, i) => (
            <TouchableOpacity
              key={i}
              style={styles.gridCard}
              onPress={() => router.push("/explore-details")}
            >
              <LinearGradient
                colors={t.colors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gridImage}
              >
                <MapPin
                  size={iconSize["2xl"]}
                  color={colors.whiteTransparent(0.4)}
                />
                <Text style={styles.gridBadge}>{t.place}</Text>
              </LinearGradient>
              <View style={styles.gridBody}>
                <Text style={styles.gridPlace}>{t.place}</Text>
                <Text style={styles.gridSubtitle}>{t.subtitle}</Text>
                <View style={styles.gridPriceRow}>
                  <Text style={styles.gridPrice}>From ₹{t.price}</Text>
                  <View style={styles.ratingPill}>
                    <Star
                      size={fonts.xs}
                      color={colors.accentAmber}
                      fill={colors.accentAmber}
                    />
                    <Text style={styles.ratingText}>{t.rating}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>{en.explore.budgetFriendly}</Text>
          <Text style={styles.link}>{en.home.seeAll}</Text>
        </View>
        {budget.map((b, i) => (
          <TouchableOpacity
            key={i}
            style={styles.budgetCard}
            onPress={() => router.push("/explore-details")}
          >
            <LinearGradient
              colors={b.colors}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.budgetBanner}
            >
              <MapPin
                size={iconSize["2xl"]}
                color={colors.whiteTransparent(0.4)}
              />
            </LinearGradient>
            <View style={styles.budgetBody}>
              <View style={{ flex: 1 }}>
                <Text style={styles.budgetPlace}>{b.place}</Text>
                <Text style={styles.budgetSubtitle}>{b.subtitle}</Text>
              </View>
              <View style={styles.priceChip}>
                <Text style={styles.priceChipText}>₹{b.price}</Text>
              </View>
              <View style={styles.daysChip}>
                <Text style={styles.daysChipText}>{b.days}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.tabBar}>
        <TabItem
          Icon={Home}
          label={en.tabs.home}
          onPress={() => router.push("/home")}
        />
        <TabItem
          Icon={Compass}
          label={en.tabs.explore}
          active
          onPress={() => router.push("/explore")}
        />
        <TabItem
          Icon={MapIcon}
          label={en.tabs.trips}
          onPress={() => router.push("/trips")}
        />
        <TabItem
          Icon={Wallet}
          label={en.tabs.budget}
          onPress={() => router.push("/budget")}
        />
        <TabItem
          Icon={User}
          label={en.tabs.profile}
          onPress={() => router.push("/profile")}
        />
      </View>
    </SafeAreaView>
  );
}

function TabItem({
  Icon,
  label,
  active,
  onPress,
}: {
  Icon: any;
  label: string;
  active?: boolean;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.tabItem}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {active ? (
        <View style={styles.tabActiveCircle}>
          <Icon size={iconSize.lg} color={colors.white} />
        </View>
      ) : (
        <Icon size={iconSize.lg} color={colors.textGray} />
      )}
      <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.backgroundMuted },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: H_PADDING,
    paddingTop: spacing.lg,
    paddingBottom: spacing.sm,
  },
  headerTitle: {
    fontSize: fonts["3xl"],
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
  },
  menuBtn: {
    width: layout.iconButton.small,
    height: layout.iconButton.small,
    borderRadius: layout.iconButton.smallRadius,
    backgroundColor: colors.textLight,
    alignItems: "center",
    justifyContent: "center",
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg,
    paddingHorizontal: H_PADDING,
    marginTop: spacing.sm,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    ...shadows.card,
  },
  searchPlaceholder: { color: colors.textGray, fontSize: fonts.base },
  filterBtn: {
    width: 48,
    height: 48,
    borderRadius: radius["2xl"],
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryRow: {
    paddingHorizontal: H_PADDING,
    gap: spacing.md,
    marginTop: spacing["2xl"],
  },
  chip: {
    paddingHorizontal: spacing["2xl"],
    paddingVertical: 9,
    borderRadius: radius["2xl"],
    backgroundColor: colors.background,
  },
  chipActive: { backgroundColor: colors.primary },
  chipText: {
    fontSize: fonts.md,
    fontWeight: fonts.weight.semibold,
    color: colors.textSub,
  },
  chipTextActive: { color: colors.white },
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: H_PADDING,
    marginTop: spacing["5xl"],
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: fonts.xl,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
  },
  link: {
    fontSize: fonts.md,
    fontWeight: fonts.weight.semibold,
    color: colors.primaryMid,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: H_PADDING,
    gap: CARD_GAP,
  },
  gridCard: {
    width: GRID_CARD,
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    overflow: "hidden",
    ...shadows.card,
  },
  gridImage: {
    height: layout.popularImage.height,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.smMd,
  },
  gridBadge: {
    position: "absolute",
    left: 12,
    bottom: spacing.md,
    color: colors.white,
    fontWeight: fonts.weight.bold,
    fontSize: fonts.lg,
  },
  gridBody: { padding: spacing.smMd },
  gridPlace: {
    fontSize: fonts.lg,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
  },
  gridSubtitle: {
    fontSize: fonts.sm,
    color: colors.textGray,
    marginTop: spacing.xs,
  },
  gridPriceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: spacing.md,
  },
  gridPrice: {
    fontSize: fonts.md,
    fontWeight: fonts.weight.bold,
    color: colors.primaryMid,
  },
  ratingPill: { flexDirection: "row", alignItems: "center", gap: 3 },
  ratingText: {
    fontSize: fonts.sm,
    fontWeight: fonts.weight.bold,
    color: colors.textBody,
  },
  budgetCard: {
    backgroundColor: colors.background,
    marginHorizontal: H_PADDING,
    borderRadius: radius.lg,
    padding: spacing.smMd,
    marginBottom: spacing.lg,
    ...shadows.card,
  },
  budgetBanner: {
    height: 80,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  budgetBody: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginTop: spacing.lg,
    paddingHorizontal: spacing.xs,
  },
  budgetPlace: {
    fontSize: fonts.xl,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
  },
  budgetSubtitle: {
    fontSize: fonts.md,
    color: colors.textSub,
    marginTop: spacing.xs,
  },
  priceChip: {
    backgroundColor: colors.bgLightBlue,
    paddingHorizontal: spacing.smMd,
    paddingVertical: 6,
    borderRadius: spacing.lg,
  },
  priceChipText: {
    fontSize: fonts.sm,
    fontWeight: fonts.weight.bold,
    color: colors.primary,
  },
  daysChip: {
    backgroundColor: colors.bgGreenLight,
    paddingHorizontal: spacing.smMd,
    paddingVertical: 6,
    borderRadius: spacing.lg,
  },
  daysChipText: {
    fontSize: fonts.sm,
    fontWeight: fonts.weight.bold,
    color: colors.success,
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: colors.background,
    paddingVertical: layout.tabBar.paddingVertical,
    paddingBottom: layout.tabBar.paddingBottom,
    borderTopWidth: 1,
    borderTopColor: colors.backgroundMuted,
  },
  tabItem: { flex: 1, alignItems: "center", gap: spacing.xs },
  tabActiveCircle: {
    width: layout.iconButton.size,
    height: layout.iconButton.size,
    borderRadius: layout.iconButton.radius,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: { fontSize: fonts.xs, color: colors.textGray },
  tabLabelActive: { color: colors.primary, fontWeight: fonts.weight.bold },
});
