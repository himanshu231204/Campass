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
  Pencil,
  Building2,
  Plane,
  Utensils,
  Activity,
  ShoppingBag,
  Shield,
  Sparkles,
  BarChart3,
  Home,
  Compass,
  Map,
  DollarSign,
  User,
} from "lucide-react-native"
import { colors, fonts, spacing, radius, iconSize, shadows } from "../../constants/theme"
import { layout } from "../../constants/layout"
import { en } from "../../translation/en"

type Cat = {
  label: string
  amount: string
  icon: React.ReactNode
  bg: string
  bar: string
  pct: number
}

const CATEGORIES: Cat[] = [
  { label: "Hotel", amount: "₹3,200", icon: <Building2 size={iconSize.md} color={colors.white} />, bg: colors.primaryNavy, bar: colors.primaryNavy, pct: 0.55 },
  { label: "Transport", amount: "₹1,750", icon: <Plane size={iconSize.md} color={colors.white} />, bg: colors.accentBlue, bar: colors.accentBlue, pct: 0.32 },
  { label: "Food", amount: "₹1,480", icon: <Utensils size={iconSize.md} color={colors.white} />, bg: colors.successLight, bar: colors.successLight, pct: 0.27 },
  { label: "Activities", amount: "₹890", icon: <Activity size={iconSize.md} color={colors.white} />, bg: colors.accentOrange, bar: colors.accentOrange, pct: 0.16 },
  { label: "Shopping", amount: "₹600", icon: <ShoppingBag size={iconSize.md} color={colors.white} />, bg: "#D6367F", bar: "#D6367F", pct: 0.11 },
  { label: "Emergency", amount: "₹320", icon: <Shield size={iconSize.md} color={colors.white} />, bg: colors.primaryNavy, bar: colors.primaryNavy, pct: 0.06 },
]

export default function BudgetTrackerScreen() {
  const router = useRouter()
  return (
    <SafeAreaView style={styles.safe}>
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: spacing["5xl"] }}
      >
        <LinearGradient
          colors={["#16324A", "#0E7A54"] as [string, string]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <View style={styles.headerTop}>
            <Text style={styles.headerTitle}>{en.budgetTracker.title}</Text>
            <TouchableOpacity style={styles.editBtn}>
              <Pencil size={spacing.lg} color={colors.white} />
              <Text style={styles.editText}>{en.budgetTracker.edit}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.budgetBox}>
            <Text style={styles.budgetLabel}>{en.budgetTracker.totalTripBudget}</Text>
            <Text style={styles.budgetAmount}>₹18,000</Text>
            <View style={styles.budgetTrack}>
              <View style={[styles.budgetFill, { width: "40%" }]} />
            </View>
            <View style={styles.budgetStats}>
              <View>
                <Text style={styles.budgetStatValue}>₹7,240</Text>
                <Text style={styles.budgetStatLabel}>{en.budgetTracker.spent}</Text>
              </View>
              <View>
                <Text style={styles.budgetStatValue}>₹10,760</Text>
                <Text style={styles.budgetStatLabel}>{en.budgetTracker.remaining}</Text>
              </View>
              <View>
                <Text style={styles.budgetStatValue}>4 days</Text>
                <Text style={styles.budgetStatLabel}>{en.budgetTracker.left}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
        <View style={{ paddingHorizontal: 20, marginTop: -24 }}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{en.budgetTracker.categoryBreakdown}</Text>
            {CATEGORIES.map((c) => (
              <View key={c.label} style={styles.catRow}>
                <View style={[styles.catIcon, { backgroundColor: c.bg }]}>{c.icon}</View>
                <View style={styles.catBody}>
                  <View style={styles.catTop}>
                    <Text style={styles.catLabel}>{c.label}</Text>
                    <Text style={styles.catAmount}>{c.amount}</Text>
                  </View>
                  <View style={styles.catTrack}>
                    <View style={[styles.catFill, { width: `${c.pct * 100}%`, backgroundColor: c.bar }]} />
                  </View>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.tipCard}>
            <View style={styles.tipIcon}>
              <Sparkles size={iconSize.lg} color={colors.white} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.tipTitle}>{en.budgetTracker.aiBudgetTip}</Text>
              <Text style={styles.tipText}>
                You could save ₹800 by eating at local dhabas instead of restaurants.
              </Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.9} onPress={() => router.push("/budget/expenses" as any)}>
            <LinearGradient
              colors={["#16324A", "#0E7A54"] as [string, string]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.trackBtn}
            >
              <BarChart3 size={iconSize.md} color={colors.white} />
              <Text style={styles.trackBtnText}>{en.budgetTracker.trackExpenses}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <NavItem icon={<Home size={iconSize["4xl"]} color={colors.textMutedLabel} />} label={en.tabs.home} onPress={() => router.push("/home")} />
        <NavItem icon={<Compass size={iconSize["4xl"]} color={colors.textMutedLabel} />} label={en.tabs.explore} onPress={() => router.push("/explore")} />
        <NavItem icon={<Map size={iconSize["4xl"]} color={colors.textMutedLabel} />} label={en.tabs.trips} onPress={() => router.push("/trips")} />
        <NavItem icon={<DollarSign size={iconSize["4xl"]} color={colors.white} />} label={en.tabs.budget} active onPress={() => router.push("/budget")} />
        <NavItem icon={<User size={iconSize["4xl"]} color={colors.textMutedLabel} />} label={en.tabs.profile} onPress={() => router.push("/profile")} />
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
  header: { paddingTop: spacing["9xl"], paddingHorizontal: spacing["3xl"], paddingBottom: spacing["9xl"], borderBottomLeftRadius: 28, borderBottomRightRadius: 28 },
  headerTop: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  headerTitle: { color: colors.white, fontSize: fonts["4xl"], fontWeight: fonts.weight.bold },
  editBtn: { flexDirection: "row", alignItems: "center", gap: 6, backgroundColor: colors.whiteTransparent(0.18), paddingHorizontal: spacing.lg, paddingVertical: spacing.sm, borderRadius: radius.lg },
  editText: { color: colors.white, fontWeight: fonts.weight.semibold, fontSize: fonts.md },
  budgetBox: { backgroundColor: colors.whiteTransparent(0.12), borderRadius: radius["2xl"], padding: spacing["2xl"], marginTop: spacing["3xl"] },
  budgetLabel: { color: colors.whiteTransparent(0.85), fontSize: fonts.md, fontWeight: fonts.weight.semibold },
  budgetAmount: { color: colors.white, fontSize: fonts["6xl"], fontWeight: fonts.weight.extrabold, marginTop: spacing.sm },
  budgetTrack: { height: spacing.sm, borderRadius: radius.sm, backgroundColor: colors.whiteTransparent(0.3), marginTop: spacing.lg, overflow: "hidden" },
  budgetFill: { height: spacing.sm, borderRadius: radius.sm, backgroundColor: colors.success },
  budgetStats: { flexDirection: "row", justifyContent: "space-between", marginTop: spacing.xl },
  budgetStatValue: { color: colors.white, fontSize: fonts["2xl"], fontWeight: fonts.weight.bold },
  budgetStatLabel: { color: colors.whiteTransparent(0.75), fontSize: fonts.sm, marginTop: spacing.xs },
  card: { backgroundColor: colors.background, borderRadius: radius["2xl"], padding: spacing["2xl"], ...shadows.card },
  cardTitle: { fontSize: fonts.xl, fontWeight: fonts.weight.bold, color: colors.textDarkNavy, marginBottom: spacing.lg },
  catRow: { flexDirection: "row", alignItems: "center", marginBottom: spacing.xl },
  catIcon: { width: layout.iconButton.size, height: layout.iconButton.size, borderRadius: layout.iconButton.radius, alignItems: "center", justifyContent: "center", marginRight: spacing.lg },
  catBody: { flex: 1 },
  catTop: { flexDirection: "row", justifyContent: "space-between", marginBottom: spacing.sm },
  catLabel: { fontSize: fonts.base, fontWeight: fonts.weight.semibold, color: colors.textDarkNavy },
  catAmount: { fontSize: fonts.base, fontWeight: fonts.weight.bold, color: colors.textDarkNavy },
  catTrack: { height: 5, borderRadius: radius.sm, backgroundColor: colors.borderBottomNav, overflow: "hidden" },
  catFill: { height: 5, borderRadius: radius.sm },
  tipCard: { flexDirection: "row", alignItems: "center", gap: spacing.lg, backgroundColor: colors.background, borderRadius: radius.xl, padding: spacing.xl, marginTop: spacing.xl },
  tipIcon: { width: layout.statIcon.size, height: layout.statIcon.size, borderRadius: layout.statIcon.radius, backgroundColor: colors.accentBlue, alignItems: "center", justifyContent: "center" },
  tipTitle: { fontSize: fonts.base, fontWeight: fonts.weight.bold, color: colors.textDarkNavy, marginBottom: spacing.xs },
  tipText: { fontSize: fonts.md, color: colors.textMutedLabel, lineHeight: 18 },
  trackBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: spacing.md, height: spacing.buttonHeightLg, borderRadius: radius.button, marginTop: spacing["2xl"] },
  trackBtnText: { color: colors.white, fontWeight: fonts.weight.bold, fontSize: fonts.xl },
  bottomNav: { flexDirection: "row", backgroundColor: colors.background, paddingTop: spacing.md, paddingBottom: spacing["4xl"], borderTopWidth: 1, borderTopColor: colors.borderBottomNav },
  navItem: { flex: 1, alignItems: "center", gap: spacing.xs },
  navActiveCircle: { width: layout.iconButton.size, height: layout.iconButton.size, borderRadius: layout.iconButton.radius, backgroundColor: colors.primaryNavy, alignItems: "center", justifyContent: "center" },
  navLabel: { fontSize: fonts.xs, color: colors.textMutedLabel },
  navLabelActive: { color: colors.primaryNavy, fontWeight: fonts.weight.semibold },
})
