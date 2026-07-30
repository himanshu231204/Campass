import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  SafeAreaView,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useRouter } from "expo-router"
import {
  Bell,
  Settings,
  Search,
  Sparkles,
  ArrowRight,
  Plane,
  Building2,
  TrainFront,
  Bus,
  Car,
  MapPin,
  Zap,
  Users,
  TriangleAlert,
  Map as MapIcon,
  Home,
  Compass,
  Wallet,
  User,
} from "lucide-react-native"
import { layout } from "../../constants/layout"
import { colors, fonts, spacing, radius, shadows, iconSize } from "../../constants/theme"
import { en } from "../../translation/en"

const { width: SCREEN_WIDTH } = Dimensions.get("window")

const quickBook = [
  { label: en.home.flights, Icon: Plane, colors: [colors.primaryMid, "#1D4ED8"] as [string, string], route: "/flights" as const },
  { label: en.home.hotels, Icon: Building2, colors: [colors.success, "#047857"] as [string, string], route: undefined },
  { label: en.home.trains, Icon: TrainFront, colors: ["#3B5BDB", "#1E40AF"] as [string, string], route: "/train" as const },
  { label: en.home.bus, Icon: Bus, colors: [colors.warning, "#EA580C"] as [string, string], route: undefined },
  { label: en.home.cab, Icon: Car, colors: ["#EC4899", "#DB2777"] as [string, string], route: undefined },
]

const popular = [
  { name: "Manali", price: "8,500", colors: [colors.warning, "#B45309"] as [string, string] },
  { name: "Jaipur", price: "6,200", colors: ["#8B5CF6", colors.purple] as [string, string] },
  { name: "Jaipur", price: "6,200", colors: ["#8B5CF6", colors.purple] as [string, string] },
]

export default function HomeScreen() {
  const router = useRouter()
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: spacing["10xl"] }}
      >
        <LinearGradient
          colors={colors.gradientHeader}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <View style={styles.headerTop}>
            <View style={styles.headerLeft}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>A</Text>
              </View>
              <View>
                <Text style={styles.greeting}>{en.home.goodMorning}</Text>
                <Text style={styles.userName}>Arjun Sharma 👋</Text>
              </View>
            </View>
            <View style={styles.headerIcons}>
              <View style={styles.circleBtn}>
                <Bell size={iconSize.md} color={colors.white} />
              </View>
              <View style={styles.circleBtn}>
                <Settings size={iconSize.md} color={colors.white} />
              </View>
            </View>
          </View>
          <View style={styles.searchBar}>
            <Search size={iconSize.md} color={colors.textLight} />
            <Text style={styles.searchPlaceholder}>{en.home.whereToGo}</Text>
          </View>
        </LinearGradient>
        <View style={styles.aiCard}>
          <View style={styles.aiHeaderRow}>
            <View style={styles.aiIcon}>
              <Sparkles size={iconSize.md} color={colors.white} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.aiTitle}>{en.home.planWithAI}</Text>
              <Text style={styles.aiSubtitle}>{en.home.aiDescription}</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.85} onPress={() => router.push("/explore")}>
            <LinearGradient
              colors={colors.gradientHeader}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.aiButton}
            >
              <Text style={styles.aiButtonText}>{en.home.startAIPlanning}</Text>
              <ArrowRight size={iconSize.sm} color={colors.white} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>{en.home.quickBook}</Text>
          <Text style={styles.link}>{en.home.more}</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.quickRow}
        >
          {quickBook.map((q, i) => (
            <TouchableOpacity key={i} style={styles.quickItem} onPress={() => { if (q.route) router.push(q.route); }}>
              <LinearGradient
                colors={q.colors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.quickIcon}
              >
                <q.Icon size={iconSize.xl} color={colors.white} />
              </LinearGradient>
              <Text style={styles.quickLabel}>{q.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>{en.home.activeTrip}</Text>
          <TouchableOpacity onPress={() => router.push("/trips")}>
            <Text style={styles.link}>{en.home.seeAll}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.tripCard} onPress={() => router.push("/trips/details" as any)}>
          <LinearGradient
            colors={colors.gradientBlueSky}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.tripBanner}
          >
            <Text style={styles.tripBannerText}>Goa</Text>
            <MapPin
              size={iconSize["3xl"]}
              color={colors.whiteTransparent(0.35)}
              style={styles.bannerPin}
            />
          </LinearGradient>
          <Text style={styles.tripTitle}>Goa Beach</Text>
          <Text style={styles.tripMeta}>Dec 22 – Dec 26</Text>
          <Text style={styles.tripMeta}>3 Night, 4 Day</Text>
        </TouchableOpacity>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>{en.home.budgetSnapshot}</Text>
          <TouchableOpacity onPress={() => router.push("/budget")}>
            <Text style={styles.link}>{en.home.seeAll}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.budgetCard}>
          <View style={styles.budgetRow}>
            <View style={styles.budgetItem}>
              <Text style={styles.budgetValueDark}>₹18,000</Text>
              <Text style={styles.budgetLabel}>{en.home.total}</Text>
            </View>
            <View style={styles.budgetItem}>
              <Text style={[styles.budgetValue, { color: colors.primaryMid }]}>
                ₹7,240
              </Text>
              <Text style={styles.budgetLabel}>{en.home.spent}</Text>
            </View>
            <View style={styles.budgetItem}>
              <Text style={[styles.budgetValue, { color: colors.success }]}>
                ₹10,760
              </Text>
              <Text style={styles.budgetLabel}>{en.home.left}</Text>
            </View>
          </View>
          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>
        </View>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>{en.home.popularInIndia}</Text>
          <TouchableOpacity onPress={() => router.push("/explore")}>
            <Text style={styles.link}>{en.home.seeAll}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.popularRow}
        >
          {popular.map((p, i) => (
            <View key={i} style={styles.popularCard}>
              <LinearGradient
                colors={p.colors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.popularImage}
              >
                <MapPin size={iconSize["2xl"]} color={colors.whiteTransparent(0.4)} />
                <Text style={styles.popularBadge}>{p.name}</Text>
              </LinearGradient>
              <Text style={styles.popularName}>{p.name}</Text>
              <Text style={styles.popularPrice}>₹{p.price}{en.home.perPerson}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>{en.home.aiSavingsTip}</Text>
        </View>
        <View style={styles.tipRow}>
          <View style={styles.tipCard}>
            <View style={styles.tipIcon}>
              <Zap size={iconSize.md} color={colors.white} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.tipTitle}>{en.home.bookEarly}</Text>
              <Text style={styles.tipSubtitle}>{en.home.saveUpTo}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.askAiWrap} onPress={() => router.push("/explore")}>
            <View style={styles.askAiCircle}>
              <Sparkles size={iconSize["2xl"]} color={colors.white} />
            </View>
            <Text style={styles.askAiText}>{en.home.askAI}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionsRow}>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: colors.indigo }]} onPress={() => router.push("/explore")}>
            <Users size={iconSize.sm} color={colors.white} />
            <Text style={styles.actionText}>{en.home.community}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/profile/settings" as any)}>
            <LinearGradient
              colors={colors.sos}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.actionBtn}
            >
              <TriangleAlert size={iconSize.sm} color={colors.white} />
              <Text style={styles.actionText}>{en.home.sos}</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: colors.primary }]} onPress={() => router.push("/explore")}>
            <MapIcon size={iconSize.sm} color={colors.white} />
            <Text style={styles.actionText}>{en.home.maps}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.tabBar}>
        <TabItem Icon={Home} label={en.tabs.home} active onPress={() => router.push("/home")} />
        <TabItem Icon={Compass} label={en.tabs.explore} onPress={() => router.push("/explore")} />
        <TabItem Icon={MapIcon} label={en.tabs.trips} onPress={() => router.push("/trips")} />
        <TabItem Icon={Wallet} label={en.tabs.budget} onPress={() => router.push("/budget")} />
        <TabItem Icon={User} label={en.tabs.profile} onPress={() => router.push("/profile")} />
      </View>
    </SafeAreaView>
  )
}

function TabItem({
  Icon,
  label,
  active,
  onPress,
}: {
  Icon: any
  label: string
  active?: boolean
  onPress?: () => void
}) {
  return (
    <TouchableOpacity style={styles.tabItem} activeOpacity={0.7} onPress={onPress}>
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
  )
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.backgroundMuted },
  header: {
    paddingTop: spacing.xl,
    paddingHorizontal: spacing["3xl"],
    paddingBottom: spacing["5xl"],
    borderBottomLeftRadius: radius["2xl"],
    borderBottomRightRadius: radius["2xl"],
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: { flexDirection: "row", alignItems: "center", gap: spacing.lg },
  avatar: {
    width: layout.avatar.size,
    height: layout.avatar.size,
    borderRadius: layout.avatar.radius,
    backgroundColor: colors.backgroundMuted,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { color: colors.primary, fontWeight: fonts.weight.bold, fontSize: fonts.xl },
  greeting: { color: colors.textLight, fontSize: fonts.sm },
  userName: { color: colors.white, fontSize: fonts["2xl"], fontWeight: fonts.weight.bold },
  headerIcons: { flexDirection: "row", gap: spacing.md },
  circleBtn: {
    width: layout.iconButton.size,
    height: layout.iconButton.size,
    borderRadius: layout.iconButton.radius,
    backgroundColor: colors.whiteTransparent(0.15),
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    marginTop: spacing["3xl"],
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.whiteTransparent(0.15),
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
  searchPlaceholder: { color: colors.textLight, fontSize: fonts.base },
  aiCard: {
    backgroundColor: colors.background,
    marginHorizontal: layout.card.marginHorizontal,
    marginTop: -12,
    borderRadius: radius.lg,
    padding: spacing.xl,
    ...shadows.card,
  },
  aiHeaderRow: { flexDirection: "row", gap: spacing.lg, alignItems: "flex-start" },
  aiIcon: {
    width: layout.iconButton.size,
    height: layout.iconButton.size,
    borderRadius: radius.md,
    backgroundColor: colors.purple,
    alignItems: "center",
    justifyContent: "center",
  },
  aiTitle: { fontSize: fonts.lg, fontWeight: fonts.weight.bold, color: colors.textDark },
  aiSubtitle: { fontSize: fonts.sm, color: colors.textSub, marginTop: spacing.xs, lineHeight: 17 },
  aiButton: {
    marginTop: spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    paddingVertical: spacing.lg,
    borderRadius: radius.md,
  },
  aiButtonText: { color: colors.white, fontWeight: fonts.weight.bold, fontSize: fonts.base },
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing["3xl"],
    marginTop: spacing["5xl"],
    marginBottom: spacing.lg,
  },
  sectionTitle: { fontSize: fonts.xl, fontWeight: fonts.weight.bold, color: colors.textDark },
  link: { fontSize: fonts.md, fontWeight: fonts.weight.semibold, color: colors.primaryMid },
  quickRow: { paddingHorizontal: spacing["3xl"], gap: spacing.lg },
  quickItem: { alignItems: "center", width: layout.quickItem.width },
  quickIcon: {
    width: layout.quickIcon.size,
    height: layout.quickIcon.size,
    borderRadius: layout.quickIcon.radius,
    alignItems: "center",
    justifyContent: "center",
  },
  quickLabel: { fontSize: fonts.sm, color: colors.textBodySecondary, marginTop: spacing.sm },
  tripCard: {
    backgroundColor: colors.background,
    marginHorizontal: layout.card.marginHorizontal,
    borderRadius: radius.lg,
    padding: spacing.xl,
    ...shadows.card,
  },
  tripBanner: {
    height: layout.header.height,
    borderRadius: radius.md,
    padding: spacing.lg,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  bannerPin: { position: "absolute", top: 25, alignSelf: "center" },
  tripBannerText: { color: colors.white, fontWeight: fonts.weight.bold, fontSize: fonts.lg },
  tripTitle: {
    fontSize: fonts["2xl"],
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
    marginTop: spacing.lg,
  },
  tripMeta: { fontSize: fonts.base, color: colors.textBody, marginTop: spacing.xs },
  budgetCard: {
    backgroundColor: colors.background,
    marginHorizontal: layout.card.marginHorizontal,
    borderRadius: radius.lg,
    padding: spacing["2xl"],
    ...shadows.card,
  },
  budgetRow: { flexDirection: "row", justifyContent: "space-between" },
  budgetItem: { alignItems: "flex-start" },
  budgetValueDark: { fontSize: fonts["3xl"], fontWeight: fonts.weight.extrabold, color: colors.textDark },
  budgetValue: { fontSize: fonts["3xl"], fontWeight: fonts.weight.extrabold },
  budgetLabel: { fontSize: fonts.sm, color: colors.textGray, marginTop: spacing.xs },
  progressTrack: {
    height: layout.divider.height,
    borderRadius: layout.divider.radius,
    backgroundColor: colors.textLight,
    marginTop: spacing.xl,
    overflow: "hidden",
  },
  progressFill: {
    width: "40%",
    height: "100%",
    borderRadius: layout.divider.radius,
    backgroundColor: colors.primary,
  },
  popularRow: { paddingHorizontal: spacing["3xl"], gap: spacing.lg },
  popularCard: {
    width: layout.popularCard.width,
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    padding: spacing.sm,
    ...shadows.card,
  },
  popularImage: {
    height: layout.popularImage.height,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  popularBadge: {
    position: "absolute",
    left: spacing.md,
    bottom: spacing.md,
    color: colors.white,
    fontWeight: fonts.weight.bold,
    fontSize: fonts.base,
  },
  popularName: {
    fontSize: fonts.base,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
    marginTop: spacing.sm,
    marginLeft: spacing.xs,
  },
  popularPrice: {
    fontSize: fonts.sm,
    color: colors.primaryMid,
    marginTop: spacing.xs,
    marginLeft: spacing.xs,
    marginBottom: spacing.xs,
  },
  tipRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing["3xl"],
    gap: spacing.lg,
  },
  tipCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg,
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    padding: spacing.lg,
    ...shadows.card,
  },
  tipIcon: {
    width: layout.iconButton.size,
    height: layout.iconButton.size,
    borderRadius: layout.iconButton.radius,
    backgroundColor: colors.success,
    alignItems: "center",
    justifyContent: "center",
  },
  tipTitle: { fontSize: fonts.base, fontWeight: fonts.weight.bold, color: colors.textDark },
  tipSubtitle: { fontSize: fonts.sm, color: colors.textSub, marginTop: spacing.xs },
  askAiWrap: { alignItems: "center" },
  askAiCircle: {
    width: layout.askAiCircle.size,
    height: layout.askAiCircle.size,
    borderRadius: layout.askAiCircle.radius,
    backgroundColor: colors.primaryMid,
    alignItems: "center",
    justifyContent: "center",
  },
  askAiText: {
    fontSize: fonts.md,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
    marginTop: spacing.sm,
  },
  actionsRow: {
    flexDirection: "row",
    paddingHorizontal: spacing["3xl"],
    marginTop: spacing["5xl"],
    gap: spacing.lg,
  },
  actionBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    paddingVertical: spacing.lg,
    borderRadius: radius.pill,
  },
  actionText: { color: colors.white, fontWeight: fonts.weight.bold, fontSize: fonts.md },
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
})
