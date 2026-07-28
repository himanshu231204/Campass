import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
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

// Base mobile frame dimensions
const SCREEN_WIDTH = 412
const SCREEN_HEIGHT = 917
const { width } = Dimensions.get("window")
const SCALE = Math.min(width, SCREEN_WIDTH) / SCREEN_WIDTH

const COLORS = {
  navy: "#1B2A6B",
  darkNavy: "#16225A",
  blue: "#3B4FD6",
  bg: "#EEF1FB",
  card: "#FFFFFF",
  text: "#1F2A44",
  subtext: "#8A93A8",
  green: "#0E9E6E",
  orange: "#F26522",
  border: "#EEF1F6",
  danger: "#E5484D",
}

type MenuItem = {
  label: string
  icon: React.ReactNode
  bg: string
}

const MENU: MenuItem[] = [
  { label: "Travel Preferences", icon: <Target size={20} color="#fff" />, bg: COLORS.navy },
  { label: "Saved Places", icon: <Bookmark size={20} color="#fff" />, bg: COLORS.blue },
  { label: "Travel Documents", icon: <Package size={20} color="#fff" />, bg: COLORS.green },
  { label: "Wallet & Payments", icon: <Wallet size={20} color="#fff" />, bg: COLORS.navy },
  { label: "Rewards & Points", icon: <Gift size={20} color="#fff" />, bg: COLORS.orange },
  { label: "Community", icon: <Users size={20} color="#fff" />, bg: COLORS.blue },
  { label: "Notifications", icon: <Bell size={20} color="#fff" />, bg: COLORS.orange },
  { label: "Emergency SOS", icon: <Triangle size={20} color="#fff" />, bg: COLORS.orange },
  { label: "Help & Support", icon: <HelpCircle size={20} color="#fff" />, bg: COLORS.navy },
  { label: "Privacy & Security", icon: <Lock size={20} color="#fff" />, bg: COLORS.blue },
  { label: "About TravelMate", icon: <Globe size={20} color="#fff" />, bg: COLORS.green },
]

export default function ProfileScreen() {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {/* Header */}
        <LinearGradient
          colors={[COLORS.navy, COLORS.darkNavy]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <View style={styles.headerTop}>
            <Text style={styles.headerTitle}>Profile</Text>
            <TouchableOpacity style={styles.settingsBtn}>
              <Settings size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.avatarWrap}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>A</Text>
            </View>
            <View style={styles.cameraBadge}>
              <Camera size={14} color={COLORS.blue} />
            </View>
          </View>

          <Text style={styles.name}>Arjun Sharma</Text>
          <View style={styles.emailRow}>
            <Text style={styles.email}>arjun@college.edu · Budget Traveler</Text>
          </View>
        </LinearGradient>

        {/* Stats card */}
        <View style={styles.statsCard}>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <View style={styles.statIcon}>
                <Map size={18} color="#fff" />
              </View>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Trips</Text>
            </View>
            <View style={styles.statItem}>
              <View style={styles.statIcon}>
                <Star size={18} color="#fff" />
              </View>
              <Text style={styles.statValue}>34</Text>
              <Text style={styles.statLabel}>Reviews</Text>
            </View>
            <View style={styles.statItem}>
              <View style={styles.statIcon}>
                <Award size={18} color="#fff" />
              </View>
              <Text style={styles.statValue}>4,820</Text>
              <Text style={styles.statLabel}>Points</Text>
            </View>
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity style={[styles.actionBtn, styles.actionOutline]}>
              <Text style={styles.actionOutlineText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionBtn, styles.actionOutline]}>
              <Text style={styles.actionOutlineText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Menu list */}
        <View style={styles.menuWrap}>
          {MENU.map((item) => (
            <TouchableOpacity key={item.label} style={styles.menuItem}>
              <View style={[styles.menuIcon, { backgroundColor: item.bg }]}>
                {item.icon}
              </View>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <ChevronRight size={20} color={COLORS.subtext} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Sign out */}
        <TouchableOpacity style={styles.signOut}>
          <LogOut size={18} color={COLORS.danger} />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom nav */}
      <View style={styles.bottomNav}>
        <NavItem icon={<Home size={22} color={COLORS.subtext} />} label="Home" />
        <NavItem icon={<Compass size={22} color={COLORS.subtext} />} label="Explore" />
        <NavItem icon={<Map size={22} color={COLORS.subtext} />} label="Trips" />
        <NavItem icon={<DollarSign size={22} color={COLORS.subtext} />} label="Budget" />
        <NavItem icon={<User size={22} color="#fff" />} label="Profile" active />
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
    paddingBottom: 70,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: { color: "#fff", fontSize: 20, fontWeight: "700" },
  settingsBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarWrap: { alignSelf: "center", marginTop: 16 },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: COLORS.blue,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { color: "#fff", fontSize: 34, fontWeight: "700" },
  cameraBadge: {
    position: "absolute",
    right: -2,
    bottom: -2,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 14,
  },
  emailRow: { alignItems: "center", marginTop: 6 },
  email: { color: "rgba(255,255,255,0.75)", fontSize: 13 },
  statsCard: {
    backgroundColor: COLORS.card,
    marginHorizontal: 20,
    marginTop: -46,
    borderRadius: 20,
    padding: 20,
    shadowColor: "#1B2A6B",
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  statsRow: { flexDirection: "row", justifyContent: "space-around" },
  statItem: { alignItems: "center" },
  statIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.navy,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  statValue: { fontSize: 18, fontWeight: "700", color: COLORS.text },
  statLabel: { fontSize: 12, color: COLORS.subtext, marginTop: 2 },
  actionRow: { flexDirection: "row", gap: 12, marginTop: 18 },
  actionBtn: {
    flex: 1,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  actionOutline: { borderWidth: 1.5, borderColor: COLORS.blue },
  actionOutlineText: { color: COLORS.blue, fontWeight: "600", fontSize: 14 },
  menuWrap: { marginTop: 20, paddingHorizontal: 20, gap: 12 },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  menuLabel: { flex: 1, fontSize: 15, fontWeight: "600", color: COLORS.text },
  signOut: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginHorizontal: 20,
    marginTop: 20,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#FDECEC",
  },
  signOutText: { color: COLORS.danger, fontWeight: "700", fontSize: 15 },
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
