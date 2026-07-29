import React from "react"
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useRouter } from "expo-router"
import {
  Plus,
  MapPin,
  Home,
  Compass,
  Map,
  DollarSign,
  User,
} from "lucide-react-native"
import { colors, fonts, spacing, radius, iconSize, shadows } from "../../constants/theme"
import { layout } from "../../constants/layout"
import { en } from "../../translation/en"

export default function MyTripsScreen() {
  const router = useRouter()
  return (
    <SafeAreaView style={styles.safe}>
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={{ width: layout.iconButton.size }} />
        <Text style={styles.headerTitle}>{en.trips.title}</Text>
        <TouchableOpacity style={styles.addBtn} onPress={() => router.push("/explore")}>
          <Plus size={iconSize["4xl"]} color={colors.accentBlue} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: spacing["5xl"], paddingHorizontal: spacing["3xl"] }}
      >
        <TouchableOpacity style={styles.featuredCard} onPress={() => router.push("/trips/details" as any)}>
          <LinearGradient
            colors={["#1B4DB8", "#1FA9DB"] as [string, string]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.featuredImage}
          >
            <MapPin size={iconSize["3xl"]} color={colors.whiteTransparent(0.6)} />
            <Text style={styles.featuredImgLabel}>Goa, India</Text>
          </LinearGradient>
          <View style={styles.featuredBody}>
            <View style={styles.featuredTitleRow}>
              <Text style={styles.featuredTitle}>Goa Beach Escape</Text>
              <View style={styles.activeBadge}>
                <Text style={styles.activeBadgeText}>{en.trips.active}</Text>
              </View>
            </View>
            <Text style={styles.featuredSub}>Dec 22–26 · 4 nights · 2 people</Text>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: "55%" }]} />
            </View>
            <View style={styles.featuredActions}>
              <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push("/trips/details" as any)}>
                <Text style={styles.primaryBtnText}>{en.trips.viewDetails}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.outlineBtn}>
                <Text style={styles.outlineBtnText}>{en.trips.edit}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <SectionHeader title={en.trips.upcomingTrips} />
        <TouchableOpacity onPress={() => router.push("/trips/details" as any)}>
          <GradientTrip colors={["#E0450A", "#F5A623"] as [string, string]} label="Name" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/trips/details" as any)}>
          <GradientTrip colors={["#7A1FD0", "#B06BF0"] as [string, string]} label="Name" />
        </TouchableOpacity>
        <SectionHeader title={en.trips.pastTrips} />
        <TouchableOpacity onPress={() => router.push("/trips/details" as any)}>
          <PastTrip colors={["#0E7A54", "#2FBE86"] as [string, string]} label="p-Name" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/trips/details" as any)}>
          <PastTrip colors={["#16225A", "#2E6FE0"] as [string, string]} label="P-Name" />
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.bottomNav}>
        <NavItem icon={              <Home size={iconSize["4xl"]} color={colors.textMutedLabel} />} label={en.tabs.home} onPress={() => router.push("/home")} />
        <NavItem icon={              <Compass size={iconSize["4xl"]} color={colors.textMutedLabel} />} label={en.tabs.explore} onPress={() => router.push("/explore")} />
        <NavItem icon={              <Map size={iconSize["4xl"]} color={colors.white} />} label={en.tabs.trips} active onPress={() => router.push("/trips")} />
        <NavItem icon={              <DollarSign size={iconSize["4xl"]} color={colors.textMutedLabel} />} label={en.tabs.budget} onPress={() => router.push("/budget")} />
        <NavItem icon={              <User size={iconSize["4xl"]} color={colors.textMutedLabel} />} label={en.tabs.profile} onPress={() => router.push("/profile")} />
      </View>
    </View>
    </SafeAreaView>
  )
}

function SectionHeader({ title }: { title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.seeAll}>{en.trips.seeAll}</Text>
      </TouchableOpacity>
    </View>
  )
}

function GradientTrip({ colors, label }: { colors: [string, string]; label: string }) {
  return (
    <View style={styles.gradientTripWrap}>
      <LinearGradient colors={colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradientTrip} />
      <Text style={styles.gradientTripLabel}>{label}</Text>
    </View>
  )
}

function PastTrip({ colors, label }: { colors: [string, string]; label: string }) {
  return (
    <View style={styles.pastTripWrap}>
      <LinearGradient colors={colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.pastTrip} />
      <Text style={styles.gradientTripLabel}>{label}</Text>
    </View>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: spacing["9xl"],
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing["3xl"],
    backgroundColor: colors.background,
  },
  headerTitle: { fontSize: fonts["3xl"], fontWeight: fonts.weight.bold, color: colors.textDarkNavy },
  addBtn: { width: layout.iconButton.size, height: layout.iconButton.size, borderRadius: layout.iconButton.radius, backgroundColor: colors.bgScreen, alignItems: "center", justifyContent: "center" },
  featuredCard: {
    backgroundColor: colors.background,
    borderRadius: radius["2xl"],
    overflow: "hidden",
    marginTop: spacing["2xl"],
    ...shadows.card,
  },
  featuredImage: { height: 150, alignItems: "center", justifyContent: "center" },
  featuredImgLabel: { position: "absolute", left: 16, bottom: 12, color: colors.white, fontWeight: fonts.weight.bold, fontSize: fonts.base },
  featuredBody: { padding: spacing.xl },
  featuredTitleRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  featuredTitle: { fontSize: fonts["2xl"], fontWeight: fonts.weight.bold, color: colors.textDarkNavy },
  activeBadge: { backgroundColor: colors.bgGreenLight, borderRadius: radius.md, paddingHorizontal: spacing.smMd, paddingVertical: spacing.xs },
  activeBadgeText: { color: colors.successLight, fontSize: fonts.sm, fontWeight: fonts.weight.semibold },
  featuredSub: { color: colors.textMutedLabel, fontSize: fonts.md, marginTop: spacing.xs },
  progressTrack: { height: layout.divider.height, borderRadius: layout.divider.radius, backgroundColor: colors.borderBottomNav, marginTop: spacing.lg, overflow: "hidden" },
  progressFill: { height: layout.divider.height, borderRadius: layout.divider.radius, backgroundColor: colors.primaryNavy },
  featuredActions: { flexDirection: "row", gap: spacing.lg, marginTop: spacing.xl },
  primaryBtn: { flex: 1, height: 46, borderRadius: radius.md, backgroundColor: colors.primaryNavy, alignItems: "center", justifyContent: "center" },
  primaryBtnText: { color: colors.white, fontWeight: fonts.weight.bold, fontSize: fonts.base },
  outlineBtn: { flex: 1, height: 46, borderRadius: radius.md, borderWidth: 1.5, borderColor: colors.accentBlue, alignItems: "center", justifyContent: "center" },
  outlineBtnText: { color: colors.accentBlue, fontWeight: fonts.weight.bold, fontSize: fonts.base },
  sectionHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: spacing["5xl"], marginBottom: spacing.lg },
  sectionTitle: { fontSize: fonts.xl, fontWeight: fonts.weight.bold, color: colors.textDarkNavy },
  seeAll: { color: colors.accentBlue, fontSize: fonts.md, fontWeight: fonts.weight.semibold },
  gradientTripWrap: { backgroundColor: colors.background, borderRadius: radius.xl, padding: spacing.md, marginBottom: spacing.lg },
  gradientTrip: { height: 120, borderRadius: spacing.lg },
  gradientTripLabel: { textAlign: "center", fontWeight: fonts.weight.bold, color: colors.textDarkNavy, marginTop: spacing.md, fontSize: fonts.base },
  pastTripWrap: { backgroundColor: colors.background, borderRadius: radius.xl, padding: spacing.md, marginBottom: spacing.lg },
  pastTrip: { height: 60, borderRadius: spacing["7xl"] },
  bottomNav: { flexDirection: "row", backgroundColor: colors.background, paddingTop: spacing.md, paddingBottom: spacing["4xl"], borderTopWidth: 1, borderTopColor: colors.borderBottomNav },
  navItem: { flex: 1, alignItems: "center", gap: spacing.xs },
  navActiveCircle: { width: layout.iconButton.size, height: layout.iconButton.size, borderRadius: layout.iconButton.radius, backgroundColor: colors.primaryNavy, alignItems: "center", justifyContent: "center" },
  navLabel: { fontSize: fonts.xs, color: colors.textMutedLabel },
  navLabelActive: { color: colors.primaryNavy, fontWeight: fonts.weight.semibold },
})
