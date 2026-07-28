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
  Plus,
  MapPin,
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
  link: "#3B4FD6",
  activeGreen: "#0E9E6E",
  border: "#EEF1F6",
  track: "#E4E8F2",
}

export default function MyTripsScreen() {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      {/* Header */}
      <View style={styles.header}>
        <View style={{ width: 40 }} />
        <Text style={styles.headerTitle}>My Trips</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Plus size={22} color={COLORS.blue} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24, paddingHorizontal: 20 }}
      >
        {/* Featured trip */}
        <View style={styles.featuredCard}>
          <LinearGradient
            colors={["#1B4DB8", "#1FA9DB"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.featuredImage}
          >
            <MapPin size={44} color="rgba(255,255,255,0.6)" />
            <Text style={styles.featuredImgLabel}>Goa, India</Text>
          </LinearGradient>
          <View style={styles.featuredBody}>
            <View style={styles.featuredTitleRow}>
              <Text style={styles.featuredTitle}>Goa Beach Escape</Text>
              <View style={styles.activeBadge}>
                <Text style={styles.activeBadgeText}>Active</Text>
              </View>
            </View>
            <Text style={styles.featuredSub}>Dec 22–26 · 4 nights · 2 people</Text>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: "55%" }]} />
            </View>
            <View style={styles.featuredActions}>
              <TouchableOpacity style={styles.primaryBtn}>
                <Text style={styles.primaryBtnText}>View Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.outlineBtn}>
                <Text style={styles.outlineBtnText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Upcoming */}
        <SectionHeader title="Upcoming Trips" />
        <GradientTrip colors={["#E0450A", "#F5A623"]} label="Name" />
        <GradientTrip colors={["#7A1FD0", "#B06BF0"]} label="Name" />

        {/* Past */}
        <SectionHeader title="Past Trips" />
        <PastTrip colors={["#0E7A54", "#2FBE86"]} label="p-Name" />
        <PastTrip colors={["#16225A", "#2E6FE0"]} label="P-Name" />
      </ScrollView>

      {/* Bottom nav */}
      <View style={styles.bottomNav}>
        <NavItem icon={<Home size={22} color={COLORS.subtext} />} label="Home" />
        <NavItem icon={<Compass size={22} color={COLORS.subtext} />} label="Explore" />
        <NavItem icon={<Map size={22} color="#fff" />} label="Trips" active />
        <NavItem icon={<DollarSign size={22} color={COLORS.subtext} />} label="Budget" />
        <NavItem icon={<User size={22} color={COLORS.subtext} />} label="Profile" />
      </View>
    </View>
  )
}

function SectionHeader({ title }: { title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.seeAll}>See all</Text>
      </TouchableOpacity>
    </View>
  )
}

function GradientTrip({ colors, label }: { colors: string[]; label: string }) {
  return (
    <View style={styles.gradientTripWrap}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientTrip}
      />
      <Text style={styles.gradientTripLabel}>{label}</Text>
    </View>
  )
}

function PastTrip({ colors, label }: { colors: string[]; label: string }) {
  return (
    <View style={styles.pastTripWrap}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.pastTrip}
      />
      <Text style={styles.gradientTripLabel}>{label}</Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 48,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  headerTitle: { fontSize: 20, fontWeight: "700", color: COLORS.text },
  addBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.bg,
    alignItems: "center",
    justifyContent: "center",
  },
  featuredCard: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 18,
    shadowColor: "#1B2A6B",
    shadowOpacity: 0.06,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  featuredImage: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  featuredImgLabel: {
    position: "absolute",
    left: 16,
    bottom: 12,
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
  featuredBody: { padding: 16 },
  featuredTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  featuredTitle: { fontSize: 18, fontWeight: "700", color: COLORS.text },
  activeBadge: {
    backgroundColor: "#E4F6EE",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  activeBadgeText: { color: COLORS.activeGreen, fontSize: 12, fontWeight: "600" },
  featuredSub: { color: COLORS.subtext, fontSize: 13, marginTop: 4 },
  progressTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.track,
    marginTop: 14,
    overflow: "hidden",
  },
  progressFill: { height: 6, borderRadius: 3, backgroundColor: COLORS.navy },
  featuredActions: { flexDirection: "row", gap: 12, marginTop: 16 },
  primaryBtn: {
    flex: 1,
    height: 46,
    borderRadius: 12,
    backgroundColor: COLORS.navy,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryBtnText: { color: "#fff", fontWeight: "700", fontSize: 14 },
  outlineBtn: {
    flex: 1,
    height: 46,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: COLORS.blue,
    alignItems: "center",
    justifyContent: "center",
  },
  outlineBtnText: { color: COLORS.blue, fontWeight: "700", fontSize: 14 },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 16, fontWeight: "700", color: COLORS.text },
  seeAll: { color: COLORS.link, fontSize: 13, fontWeight: "600" },
  gradientTripWrap: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 10,
    marginBottom: 14,
  },
  gradientTrip: { height: 120, borderRadius: 14 },
  gradientTripLabel: {
    textAlign: "center",
    fontWeight: "700",
    color: COLORS.text,
    marginTop: 10,
    fontSize: 14,
  },
  pastTripWrap: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 10,
    marginBottom: 14,
  },
  pastTrip: { height: 60, borderRadius: 30 },
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
