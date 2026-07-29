import React from "react"
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useRouter } from "expo-router"
import {
  Settings,
  Camera,
  Map,
  Star,
  Award,
  Target,
  Bookmark,
  Package,
  Wallet,
  Gift,
  Users,
  Bell,
  Triangle,
  HelpCircle,
  Lock,
  Globe,
  ChevronRight,
  LogOut,
  Home,
  Compass,
  DollarSign,
  User,
} from "lucide-react-native"
import { layout } from "../../constants/layout"
import { colors, fonts, spacing, radius, shadows, iconSize } from "../../constants/theme"
import { en } from "../../translation/en"

const SCREEN_WIDTH = 412
const SCREEN_HEIGHT = 917
const { width } = Dimensions.get("window")
const SCALE = Math.min(width, SCREEN_WIDTH) / SCREEN_WIDTH

type MenuItem = {
  label: string
  icon: React.ReactNode
  bg: string
}

const MENU: MenuItem[] = [
  { label: en.profile.menu.travelGuide, icon: <Target size={iconSize.lg} color={colors.white} />, bg: colors.primaryNavy },
  { label: en.profile.menu.myBookings, icon: <Bookmark size={iconSize.lg} color={colors.white} />, bg: colors.accentBlue },
  { label: en.profile.menu.travelDocuments, icon: <Package size={iconSize.lg} color={colors.white} />, bg: colors.successLight },
  { label: en.profile.menu.payments, icon: <Wallet size={iconSize.lg} color={colors.white} />, bg: colors.primaryNavy },
  { label: en.profile.menu.referralProgram, icon: <Gift size={iconSize.lg} color={colors.white} />, bg: colors.accentOrange },
  { label: en.profile.menu.safetyCenter, icon: <Users size={iconSize.lg} color={colors.white} />, bg: colors.accentBlue },
  { label: en.profile.menu.notifications, icon: <Bell size={iconSize.lg} color={colors.white} />, bg: colors.accentOrange },
  { label: en.profile.menu.emergencySOS, icon: <Triangle size={iconSize.lg} color={colors.white} />, bg: colors.accentOrange },
  { label: en.profile.menu.customerSupport, icon: <HelpCircle size={iconSize.lg} color={colors.white} />, bg: colors.primaryNavy },
  { label: en.profile.menu.preferences, icon: <Lock size={iconSize.lg} color={colors.white} />, bg: colors.accentBlue },
  { label: en.profile.menu.about, icon: <Globe size={iconSize.lg} color={colors.white} />, bg: colors.successLight },
]

export default function ProfileScreen() {
  const router = useRouter()

  function getProfileRoute(label: string) {
    switch (label) {
      case en.profile.menu.travelGuide:
      case en.profile.menu.myBookings:
      case en.profile.menu.safetyCenter:
        return "/explore" as const
      case en.profile.menu.notifications:
      case en.profile.menu.payments:
      case en.profile.menu.preferences:
      case en.profile.menu.language:
      case en.profile.menu.currency:
      case en.profile.menu.travelDocuments:
      case en.profile.menu.emergencySOS:
        return "/profile/settings" as const
      default:
        return undefined
    }
  }

  return (
    <SafeAreaView style={styles.safe}>
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: spacing["5xl"] }}
      >
        <LinearGradient
          colors={colors.gradientNavy}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <View style={styles.headerTop}>
            <Text style={styles.headerTitle}>{en.profile.title}</Text>
            <TouchableOpacity style={styles.settingsBtn} onPress={() => router.push("/profile/settings" as any)}>
              <Settings size={iconSize.lg} color={colors.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.avatarWrap}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>A</Text>
            </View>
            <View style={styles.cameraBadge}>
              <Camera size={spacing.lg} color={colors.accentBlue} />
            </View>
          </View>
          <Text style={styles.name}>Arjun Sharma</Text>
          <View style={styles.emailRow}>
            <Text style={styles.email}>arjun@college.edu · Budget Traveler</Text>
          </View>
        </LinearGradient>
        <View style={styles.statsCard}>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <View style={styles.statIcon}><Map size={iconSize.md} color={colors.white} /></View>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>{en.profile.trips}</Text>
            </View>
            <View style={styles.statItem}>
              <View style={styles.statIcon}><Star size={iconSize.md} color={colors.white} /></View>
              <Text style={styles.statValue}>34</Text>
              <Text style={styles.statLabel}>{en.profile.reviews}</Text>
            </View>
            <View style={styles.statItem}>
              <View style={styles.statIcon}><Award size={iconSize.md} color={colors.white} /></View>
              <Text style={styles.statValue}>4,820</Text>
              <Text style={styles.statLabel}>{en.profile.points}</Text>
            </View>
          </View>
          <View style={styles.actionRow}>
            <TouchableOpacity style={[styles.actionBtn, styles.actionOutline]}>
              <Text style={styles.actionOutlineText}>{en.profile.editProfile}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionBtn, styles.actionOutline]}>
              <Text style={styles.actionOutlineText}>{en.profile.share}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.menuWrap}>
          {MENU.map((item) => (
            <TouchableOpacity key={item.label} style={styles.menuItem} onPress={() => { const r = getProfileRoute(item.label); if (r) { router.push(r as any); } }}>
              <View style={[styles.menuIcon, { backgroundColor: item.bg }]}>{item.icon}</View>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <ChevronRight size={iconSize.lg} color={colors.textMutedLabel} />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.signOut} onPress={() => router.push("/auth/login")}>
          <LogOut size={iconSize.md} color={colors.errorLight} />
          <Text style={styles.signOutText}>{en.profile.signOut}</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.bottomNav}>
        <NavItem icon={<Home size={iconSize["4xl"]} color={colors.textMutedLabel} />} label={en.tabs.home} onPress={() => router.push("/home")} />
        <NavItem icon={<Compass size={iconSize["4xl"]} color={colors.textMutedLabel} />} label={en.tabs.explore} onPress={() => router.push("/explore")} />
        <NavItem icon={<Map size={iconSize["4xl"]} color={colors.textMutedLabel} />} label={en.tabs.trips} onPress={() => router.push("/trips")} />
        <NavItem icon={<DollarSign size={iconSize["4xl"]} color={colors.textMutedLabel} />} label={en.tabs.budget} onPress={() => router.push("/budget")} />
        <NavItem icon={<User size={iconSize["4xl"]} color={colors.white} />} label={en.tabs.profile} active onPress={() => router.push("/profile")} />
      </View>
    </View>
    </SafeAreaView>
  )
}

function NavItem({ icon, label, active, onPress }: { icon: React.ReactNode; label: string; active?: boolean; onPress?: () => void }) {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <View style={active ? styles.navActiveCircle : undefined}>{icon}</View>
      <Text style={[styles.navLabel, active && styles.navLabelActive]}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bgScreen },
  root: { flex: 1, backgroundColor: colors.bgScreen },
  header: { paddingTop: 44, paddingHorizontal: spacing["3xl"], paddingBottom: 70, borderBottomLeftRadius: 28, borderBottomRightRadius: 28 },
  headerTop: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  headerTitle: { color: colors.white, fontSize: fonts["3xl"], fontWeight: fonts.weight.bold },
  settingsBtn: { width: layout.iconButton.size, height: layout.iconButton.size, borderRadius: layout.iconButton.radius, backgroundColor: colors.whiteTransparent(0.15), alignItems: "center", justifyContent: "center" },
  avatarWrap: { alignSelf: "center", marginTop: spacing.xl },
  avatar: { width: layout.avatar.large, height: layout.avatar.large, borderRadius: layout.avatar.largeRadius, backgroundColor: colors.accentBlue, alignItems: "center", justifyContent: "center" },
  avatarText: { color: colors.white, fontSize: fonts["6xl"], fontWeight: fonts.weight.bold },
  cameraBadge: { position: "absolute", right: -2, bottom: -2, width: 26, height: 26, borderRadius: 13, backgroundColor: colors.white, alignItems: "center", justifyContent: "center" },
  name: { color: colors.white, fontSize: fonts["4xl"], fontWeight: fonts.weight.bold, textAlign: "center", marginTop: spacing.lg },
  emailRow: { alignItems: "center", marginTop: spacing.sm },
  email: { color: colors.whiteTransparent(0.75), fontSize: fonts.md },
  statsCard: { backgroundColor: colors.background, marginHorizontal: layout.card.marginHorizontal, marginTop: -46, borderRadius: radius["2xl"], padding: spacing["3xl"], ...shadows.card },
  statsRow: { flexDirection: "row", justifyContent: "space-around" },
  statItem: { alignItems: "center" },
  statIcon: { width: layout.statIcon.size, height: layout.statIcon.size, borderRadius: layout.statIcon.radius, backgroundColor: colors.primaryNavy, alignItems: "center", justifyContent: "center", marginBottom: spacing.sm },
  statValue: { fontSize: fonts["2xl"], fontWeight: fonts.weight.bold, color: colors.textDarkNavy },
  statLabel: { fontSize: fonts.sm, color: colors.textMutedLabel, marginTop: spacing.xs },
  actionRow: { flexDirection: "row", gap: spacing.lg, marginTop: spacing["2xl"] },
  actionBtn: { flex: 1, height: layout.statIcon.size, borderRadius: radius.md, alignItems: "center", justifyContent: "center" },
  actionOutline: { borderWidth: 1.5, borderColor: colors.accentBlue },
  actionOutlineText: { color: colors.accentBlue, fontWeight: fonts.weight.semibold, fontSize: fonts.base },
  menuWrap: { marginTop: spacing["3xl"], paddingHorizontal: spacing["3xl"], gap: spacing.lg },
  menuItem: { flexDirection: "row", alignItems: "center", backgroundColor: colors.background, borderRadius: radius.lg, paddingVertical: spacing.smMd, paddingHorizontal: spacing.smMd },
  menuIcon: { width: layout.iconButton.size, height: layout.iconButton.size, borderRadius: layout.iconButton.radius, alignItems: "center", justifyContent: "center", marginRight: spacing.lg },
  menuLabel: { flex: 1, fontSize: fonts.lg, fontWeight: fonts.weight.semibold, color: colors.textDarkNavy },
  signOut: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: spacing.sm, marginHorizontal: layout.card.marginHorizontal, marginTop: spacing["3xl"], height: spacing.inputHeight, borderRadius: spacing.lg, backgroundColor: colors.bgRedLight },
  signOutText: { color: colors.errorLight, fontWeight: fonts.weight.bold, fontSize: fonts.lg },
  bottomNav: { flexDirection: "row", backgroundColor: colors.background, paddingTop: spacing.md, paddingBottom: spacing["4xl"], borderTopWidth: 1, borderTopColor: colors.borderBottomNav },
  navItem: { flex: 1, alignItems: "center", gap: spacing.xs },
  navActiveCircle: { width: layout.iconButton.size, height: layout.iconButton.size, borderRadius: layout.iconButton.radius, backgroundColor: colors.primaryNavy, alignItems: "center", justifyContent: "center" },
  navLabel: { fontSize: fonts.xs, color: colors.textMutedLabel },
  navLabelActive: { color: colors.primaryNavy, fontWeight: fonts.weight.semibold },
})
