import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
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

const COLORS = {
  navy: "#1B2A6B",
  blue: "#3B4FD6",
  bg: "#EEF1FB",
  card: "#FFFFFF",
  text: "#1F2A44",
  subtext: "#8A93A8",
  green: "#0E9E6E",
  orange: "#F26522",
  pink: "#D6367F",
  border: "#EEF1F6",
  track: "#EDF0F6",
}

type Cat = {
  label: string
  amount: string
  icon: React.ReactNode
  bg: string
  bar: string
  pct: number
}

const CATEGORIES: Cat[] = [
  { label: "Hotel", amount: "₹3,200", icon: <Building2 size={18} color="#fff" />, bg: COLORS.navy, bar: COLORS.navy, pct: 0.55 },
  { label: "Transport", amount: "₹1,750", icon: <Plane size={18} color="#fff" />, bg: COLORS.blue, bar: COLORS.blue, pct: 0.32 },
  { label: "Food", amount: "₹1,480", icon: <Utensils size={18} color="#fff" />, bg: COLORS.green, bar: COLORS.green, pct: 0.27 },
  { label: "Activities", amount: "₹890", icon: <Activity size={18} color="#fff" />, bg: COLORS.orange, bar: COLORS.orange, pct: 0.16 },
  { label: "Shopping", amount: "₹600", icon: <ShoppingBag size={18} color="#fff" />, bg: COLORS.pink, bar: COLORS.pink, pct: 0.11 },
  { label: "Emergency", amount: "₹320", icon: <Shield size={18} color="#fff" />, bg: COLORS.navy, bar: COLORS.navy, pct: 0.06 },
]

export default function BudgetTrackerScreen() {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {/* Header */}
        <LinearGradient
          colors={["#16324A", "#0E7A54"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <View style={styles.headerTop}>
            <Text style={styles.headerTitle}>Budget Tracker</Text>
            <TouchableOpacity style={styles.editBtn}>
              <Pencil size={14} color="#fff" />
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.budgetBox}>
            <Text style={styles.budgetLabel}>Total Trip Budget</Text>
            <Text style={styles.budgetAmount}>₹18,000</Text>
            <View style={styles.budgetTrack}>
              <View style={[styles.budgetFill, { width: "40%" }]} />
            </View>
            <View style={styles.budgetStats}>
              <View>
                <Text style={styles.budgetStatValue}>₹7,240</Text>
                <Text style={styles.budgetStatLabel}>Spent</Text>
              </View>
              <View>
                <Text style={styles.budgetStatValue}>₹10,760</Text>
                <Text style={styles.budgetStatLabel}>Remaining</Text>
              </View>
              <View>
                <Text style={styles.budgetStatValue}>4 days</Text>
                <Text style={styles.budgetStatLabel}>Left</Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        <View style={{ paddingHorizontal: 20, marginTop: -24 }}>
          {/* Category breakdown */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Category Breakdown</Text>
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

          {/* AI tip */}
          <View style={styles.tipCard}>
            <View style={styles.tipIcon}>
              <Sparkles size={20} color="#fff" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.tipTitle}>AI Budget Tip</Text>
              <Text style={styles.tipText}>
                You could save ₹800 by eating at local dhabas instead of restaurants.
              </Text>
            </View>
          </View>

          {/* Track button */}
          <TouchableOpacity activeOpacity={0.9}>
            <LinearGradient
              colors={["#16324A", "#0E7A54"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.trackBtn}
            >
              <BarChart3 size={18} color="#fff" />
              <Text style={styles.trackBtnText}>Track Expenses</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom nav */}
      <View style={styles.bottomNav}>
        <NavItem icon={<Home size={22} color={COLORS.subtext} />} label="Home" />
        <NavItem icon={<Compass size={22} color={COLORS.subtext} />} label="Explore" />
        <NavItem icon={<Map size={22} color={COLORS.subtext} />} label="Trips" />
        <NavItem icon={<DollarSign size={22} color="#fff" />} label="Budget" active />
        <NavItem icon={<User size={22} color={COLORS.subtext} />} label="Profile" />
      </View>
    </View>
  )
}

function NavItem({
  icon,
  label,
  active,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
}) {
  return (
    <TouchableOpacity style={styles.navItem}>
      <View style={active ? styles.navActiveCircle : undefined}>{icon}</View>
      <Text style={[styles.navLabel, active && styles.navLabelActive]}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: COLORS.bg },
  header: {
    paddingTop: 44,
    paddingHorizontal: 20,
    paddingBottom: 48,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: { color: "#fff", fontSize: 22, fontWeight: "700" },
  editBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(255,255,255,0.18)",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
  },
  editText: { color: "#fff", fontWeight: "600", fontSize: 13 },
  budgetBox: {
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 18,
    padding: 18,
    marginTop: 20,
  },
  budgetLabel: { color: "rgba(255,255,255,0.85)", fontSize: 13, fontWeight: "600" },
  budgetAmount: { color: "#fff", fontSize: 34, fontWeight: "800", marginTop: 6 },
  budgetTrack: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.3)",
    marginTop: 12,
    overflow: "hidden",
  },
  budgetFill: { height: 8, borderRadius: 4, backgroundColor: "#3FD08A" },
  budgetStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  budgetStatValue: { color: "#fff", fontSize: 18, fontWeight: "700" },
  budgetStatLabel: { color: "rgba(255,255,255,0.75)", fontSize: 12, marginTop: 2 },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    padding: 18,
    shadowColor: "#1B2A6B",
    shadowOpacity: 0.06,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  cardTitle: { fontSize: 17, fontWeight: "700", color: COLORS.text, marginBottom: 14 },
  catRow: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  catIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  catBody: { flex: 1 },
  catTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  catLabel: { fontSize: 14, fontWeight: "600", color: COLORS.text },
  catAmount: { fontSize: 14, fontWeight: "700", color: COLORS.text },
  catTrack: {
    height: 5,
    borderRadius: 3,
    backgroundColor: COLORS.track,
    overflow: "hidden",
  },
  catFill: { height: 5, borderRadius: 3 },
  tipCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 16,
    marginTop: 16,
  },
  tipIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.blue,
    alignItems: "center",
    justifyContent: "center",
  },
  tipTitle: { fontSize: 14, fontWeight: "700", color: COLORS.text, marginBottom: 4 },
  tipText: { fontSize: 13, color: COLORS.subtext, lineHeight: 18 },
  trackBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: 56,
    borderRadius: 16,
    marginTop: 18,
  },
  trackBtnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 22,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  navItem: { flex: 1, alignItems: "center", gap: 4 },
  navActiveCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.navy,
    alignItems: "center",
    justifyContent: "center",
  },
  navLabel: { fontSize: 11, color: COLORS.subtext },
  navLabelActive: { color: COLORS.navy, fontWeight: "600" },
})
