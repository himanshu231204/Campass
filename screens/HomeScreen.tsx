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

const { width: SCREEN_WIDTH } = Dimensions.get("window")

const quickBook = [
  { label: "Flights", Icon: Plane, colors: ["#2563EB", "#1D4ED8"] },
  { label: "Hotels", Icon: Building2, colors: ["#0E9F6E", "#047857"] },
  { label: "Trains", Icon: TrainFront, colors: ["#3B5BDB", "#1E40AF"] },
  { label: "Bus", Icon: Bus, colors: ["#F97316", "#EA580C"] },
  { label: "Cab", Icon: Car, colors: ["#EC4899", "#DB2777"] },
]

const popular = [
  { name: "Manali", price: "8,500", colors: ["#F97316", "#B45309"] },
  { name: "Jaipur", price: "6,200", colors: ["#8B5CF6", "#6D28D9"] },
  { name: "Jaipur", price: "6,200", colors: ["#8B5CF6", "#6D28D9"] },
]

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Header */}
        <LinearGradient
          colors={["#1E3A8A", "#1E40AF"]}
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
                <Text style={styles.greeting}>Good morning,</Text>
                <Text style={styles.userName}>Arjun Sharma 👋</Text>
              </View>
            </View>
            <View style={styles.headerIcons}>
              <View style={styles.circleBtn}>
                <Bell size={18} color="#FFFFFF" />
              </View>
              <View style={styles.circleBtn}>
                <Settings size={18} color="#FFFFFF" />
              </View>
            </View>
          </View>

          <View style={styles.searchBar}>
            <Search size={18} color="#CBD5E1" />
            <Text style={styles.searchPlaceholder}>Where do you want to go?</Text>
          </View>
        </LinearGradient>

        {/* Plan with AI */}
        <View style={styles.aiCard}>
          <View style={styles.aiHeaderRow}>
            <View style={styles.aiIcon}>
              <Sparkles size={18} color="#FFFFFF" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.aiTitle}>Plan with AI</Text>
              <Text style={styles.aiSubtitle}>
                Tell me your destination & budget. I&apos;ll build the perfect
                itinerary.
              </Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.85}>
            <LinearGradient
              colors={["#1E3A8A", "#1E40AF"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.aiButton}
            >
              <Text style={styles.aiButtonText}>Start AI Planning</Text>
              <ArrowRight size={16} color="#FFFFFF" />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Quick Book */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Quick Book</Text>
          <Text style={styles.link}>More</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.quickRow}
        >
          {quickBook.map((q, i) => (
            <View key={i} style={styles.quickItem}>
              <LinearGradient
                colors={q.colors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.quickIcon}
              >
                <q.Icon size={24} color="#FFFFFF" />
              </LinearGradient>
              <Text style={styles.quickLabel}>{q.label}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Active Trip */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Active Trip</Text>
          <Text style={styles.link}>See all</Text>
        </View>
        <View style={styles.tripCard}>
          <LinearGradient
            colors={["#1E40AF", "#0EA5E9"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.tripBanner}
          >
            <Text style={styles.tripBannerText}>Goa</Text>
            <MapPin
              size={40}
              color="rgba(255,255,255,0.35)"
              style={styles.bannerPin}
            />
          </LinearGradient>
          <Text style={styles.tripTitle}>Goa Beach</Text>
          <Text style={styles.tripMeta}>Dec 22 – Dec 26</Text>
          <Text style={styles.tripMeta}>3 Night, 4 Day</Text>
        </View>

        {/* Budget Snapshot */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Budget Snapshot</Text>
          <Text style={styles.link}>See all</Text>
        </View>
        <View style={styles.budgetCard}>
          <View style={styles.budgetRow}>
            <View style={styles.budgetItem}>
              <Text style={styles.budgetValueDark}>₹18,000</Text>
              <Text style={styles.budgetLabel}>Total</Text>
            </View>
            <View style={styles.budgetItem}>
              <Text style={[styles.budgetValue, { color: "#2563EB" }]}>
                ₹7,240
              </Text>
              <Text style={styles.budgetLabel}>Spent</Text>
            </View>
            <View style={styles.budgetItem}>
              <Text style={[styles.budgetValue, { color: "#0E9F6E" }]}>
                ₹10,760
              </Text>
              <Text style={styles.budgetLabel}>Left</Text>
            </View>
          </View>
          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* Popular in India */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Popular in India</Text>
          <Text style={styles.link}>See all</Text>
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
                <MapPin size={30} color="rgba(255,255,255,0.4)" />
                <Text style={styles.popularBadge}>{p.name}</Text>
              </LinearGradient>
              <Text style={styles.popularName}>{p.name}</Text>
              <Text style={styles.popularPrice}>₹{p.price}/person</Text>
            </View>
          ))}
        </ScrollView>

        {/* AI Savings Tip */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>AI Savings Tip</Text>
        </View>
        <View style={styles.tipRow}>
          <View style={styles.tipCard}>
            <View style={styles.tipIcon}>
              <Zap size={18} color="#FFFFFF" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.tipTitle}>Book trains 30 days early</Text>
              <Text style={styles.tipSubtitle}>
                Save up to ₹1,200 on Rajdhani Express
              </Text>
            </View>
          </View>
          <View style={styles.askAiWrap}>
            <View style={styles.askAiCircle}>
              <Sparkles size={26} color="#FFFFFF" />
            </View>
            <Text style={styles.askAiText}>Ask AI</Text>
          </View>
        </View>

        {/* Action buttons */}
        <View style={styles.actionsRow}>
          <View style={[styles.actionBtn, { backgroundColor: "#4F46E5" }]}>
            <Users size={16} color="#FFFFFF" />
            <Text style={styles.actionText}>Community</Text>
          </View>
          <LinearGradient
            colors={["#F97316", "#EF4444"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.actionBtn}
          >
            <TriangleAlert size={16} color="#FFFFFF" />
            <Text style={styles.actionText}>SOS</Text>
          </LinearGradient>
          <View style={[styles.actionBtn, { backgroundColor: "#1E3A8A" }]}>
            <MapIcon size={16} color="#FFFFFF" />
            <Text style={styles.actionText}>Maps</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TabItem Icon={Home} label="Home" active />
        <TabItem Icon={Compass} label="Explore" />
        <TabItem Icon={MapIcon} label="Trips" />
        <TabItem Icon={Wallet} label="Budget" />
        <TabItem Icon={User} label="Profile" />
      </View>
    </SafeAreaView>
  )
}

function TabItem({
  Icon,
  label,
  active,
}: {
  Icon: any
  label: string
  active?: boolean
}) {
  return (
    <TouchableOpacity style={styles.tabItem} activeOpacity={0.7}>
      {active ? (
        <View style={styles.tabActiveCircle}>
          <Icon size={20} color="#FFFFFF" />
        </View>
      ) : (
        <Icon size={20} color="#94A3B8" />
      )}
      <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#EEF2F9" },
  header: {
    paddingTop: 16,
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#EEF2F9",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { color: "#1E3A8A", fontWeight: "700", fontSize: 16 },
  greeting: { color: "#CBD5E1", fontSize: 12 },
  userName: { color: "#FFFFFF", fontSize: 18, fontWeight: "700" },
  headerIcons: { flexDirection: "row", gap: 10 },
  circleBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  searchPlaceholder: { color: "#CBD5E1", fontSize: 14 },

  aiCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginTop: -12,
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  aiHeaderRow: { flexDirection: "row", gap: 12, alignItems: "flex-start" },
  aiIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#6D28D9",
    alignItems: "center",
    justifyContent: "center",
  },
  aiTitle: { fontSize: 15, fontWeight: "700", color: "#0F172A" },
  aiSubtitle: { fontSize: 12, color: "#64748B", marginTop: 2, lineHeight: 17 },
  aiButton: {
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 14,
    borderRadius: 12,
  },
  aiButtonText: { color: "#FFFFFF", fontWeight: "700", fontSize: 14 },

  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 17, fontWeight: "700", color: "#0F172A" },
  link: { fontSize: 13, fontWeight: "600", color: "#2563EB" },

  quickRow: { paddingHorizontal: 20, gap: 14 },
  quickItem: { alignItems: "center", width: 62 },
  quickIcon: {
    width: 58,
    height: 58,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  quickLabel: { fontSize: 12, color: "#475569", marginTop: 6 },

  tripCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  tripBanner: {
    height: 90,
    borderRadius: 12,
    padding: 14,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  bannerPin: { position: "absolute", top: 25, alignSelf: "center" },
  tripBannerText: { color: "#FFFFFF", fontWeight: "700", fontSize: 15 },
  tripTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
    marginTop: 14,
  },
  tripMeta: { fontSize: 14, color: "#334155", marginTop: 2 },

  budgetCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  budgetRow: { flexDirection: "row", justifyContent: "space-between" },
  budgetItem: { alignItems: "flex-start" },
  budgetValueDark: { fontSize: 20, fontWeight: "800", color: "#0F172A" },
  budgetValue: { fontSize: 20, fontWeight: "800" },
  budgetLabel: { fontSize: 12, color: "#94A3B8", marginTop: 2 },
  progressTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E2E8F0",
    marginTop: 16,
    overflow: "hidden",
  },
  progressFill: {
    width: "40%",
    height: "100%",
    borderRadius: 3,
    backgroundColor: "#1E3A8A",
  },

  popularRow: { paddingHorizontal: 20, gap: 14 },
  popularCard: {
    width: 170,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  popularImage: {
    height: 110,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  popularBadge: {
    position: "absolute",
    left: 10,
    bottom: 10,
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
  popularName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
    marginTop: 8,
    marginLeft: 4,
  },
  popularPrice: {
    fontSize: 12,
    color: "#2563EB",
    marginTop: 2,
    marginLeft: 4,
    marginBottom: 4,
  },

  tipRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 14,
  },
  tipCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  tipIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#0E9F6E",
    alignItems: "center",
    justifyContent: "center",
  },
  tipTitle: { fontSize: 14, fontWeight: "700", color: "#0F172A" },
  tipSubtitle: { fontSize: 12, color: "#64748B", marginTop: 2 },
  askAiWrap: { alignItems: "center" },
  askAiCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
  },
  askAiText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0F172A",
    marginTop: 6,
  },

  actionsRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 24,
    gap: 12,
  },
  actionBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 14,
    borderRadius: 24,
  },
  actionText: { color: "#FFFFFF", fontWeight: "700", fontSize: 13 },

  tabBar: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingBottom: 18,
    borderTopWidth: 1,
    borderTopColor: "#EEF2F9",
  },
  tabItem: { flex: 1, alignItems: "center", gap: 4 },
  tabActiveCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1E3A8A",
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: { fontSize: 11, color: "#94A3B8" },
  tabLabelActive: { color: "#1E3A8A", fontWeight: "700" },
})
