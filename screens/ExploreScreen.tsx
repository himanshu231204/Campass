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
  MoreVertical,
  Search,
  SlidersHorizontal,
  MapPin,
  Star,
  Home,
  Compass,
  Map as MapIcon,
  Wallet,
  User,
} from "lucide-react-native"

const { width: SCREEN_WIDTH } = Dimensions.get("window")
const CARD_GAP = 14
const H_PADDING = 20
const GRID_CARD = (SCREEN_WIDTH - H_PADDING * 2 - CARD_GAP) / 2

const categories = ["All", "Beach", "Mountains", "Heritage", "Budget"]

const trending = [
  {
    place: "Goa",
    subtitle: "Beach & Nightlife",
    price: "4,500",
    rating: "4.8",
    colors: ["#1D4ED8", "#0EA5E9"],
  },
  {
    place: "Manali",
    subtitle: "Snow & Adventure",
    price: "7,200",
    rating: "4.8",
    colors: ["#B91C1C", "#F97316"],
  },
  {
    place: "Jaipur",
    subtitle: "Royal Heritage",
    price: "5,100",
    rating: "4.8",
    colors: ["#7C3AED", "#A855F7"],
  },
  {
    place: "Kerala",
    subtitle: "Backwaters & Spa",
    price: "9,800",
    rating: "4.8",
    colors: ["#047857", "#10B981"],
  },
]

const budget = [
  {
    place: "Rishikesh",
    subtitle: "Adventure & Yoga",
    price: "3,200",
    days: "3 Days",
    colors: ["#047857", "#10B981"],
  },
  {
    place: "Hampi",
    subtitle: "UNESCO Heritage Site",
    price: "3,200",
    days: "3 Days",
    colors: ["#B45309", "#F59E0B"],
  },
]

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={{ width: 32 }} />
          <Text style={styles.headerTitle}>Explore India</Text>
          <View style={styles.menuBtn}>
            <MoreVertical size={18} color="#334155" />
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <Search size={18} color="#94A3B8" />
            <Text style={styles.searchPlaceholder}>
              Search destinations, places...
            </Text>
          </View>
          <View style={styles.filterBtn}>
            <SlidersHorizontal size={18} color="#FFFFFF" />
          </View>
        </View>

        {/* Categories */}
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

        {/* Trending Now */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Trending Now</Text>
          <Text style={styles.link}>See all</Text>
        </View>
        <View style={styles.grid}>
          {trending.map((t, i) => (
            <View key={i} style={styles.gridCard}>
              <LinearGradient
                colors={t.colors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gridImage}
              >
                <MapPin size={28} color="rgba(255,255,255,0.4)" />
                <Text style={styles.gridBadge}>{t.place}</Text>
              </LinearGradient>
              <View style={styles.gridBody}>
                <Text style={styles.gridPlace}>{t.place}</Text>
                <Text style={styles.gridSubtitle}>{t.subtitle}</Text>
                <View style={styles.gridPriceRow}>
                  <Text style={styles.gridPrice}>From ₹{t.price}</Text>
                  <View style={styles.ratingPill}>
                    <Star size={11} color="#F59E0B" fill="#F59E0B" />
                    <Text style={styles.ratingText}>{t.rating}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Budget Friendly */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Budget Friendly</Text>
          <Text style={styles.link}>See all</Text>
        </View>
        {budget.map((b, i) => (
          <View key={i} style={styles.budgetCard}>
            <LinearGradient
              colors={b.colors}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.budgetBanner}
            >
              <MapPin size={30} color="rgba(255,255,255,0.4)" />
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
          </View>
        ))}
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TabItem Icon={Home} label="Home" />
        <TabItem Icon={Compass} label="Explore" active />
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: H_PADDING,
    paddingTop: 12,
    paddingBottom: 8,
  },
  headerTitle: { fontSize: 20, fontWeight: "700", color: "#0F172A" },
  menuBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E2E8F0",
    alignItems: "center",
    justifyContent: "center",
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: H_PADDING,
    marginTop: 8,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  searchPlaceholder: { color: "#94A3B8", fontSize: 14 },
  filterBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#1E3A8A",
    alignItems: "center",
    justifyContent: "center",
  },

  categoryRow: {
    paddingHorizontal: H_PADDING,
    gap: 10,
    marginTop: 18,
  },
  chip: {
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },
  chipActive: { backgroundColor: "#1E3A8A" },
  chipText: { fontSize: 13, fontWeight: "600", color: "#64748B" },
  chipTextActive: { color: "#FFFFFF" },

  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: H_PADDING,
    marginTop: 24,
    marginBottom: 14,
  },
  sectionTitle: { fontSize: 17, fontWeight: "700", color: "#0F172A" },
  link: { fontSize: 13, fontWeight: "600", color: "#2563EB" },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: H_PADDING,
    gap: CARD_GAP,
  },
  gridCard: {
    width: GRID_CARD,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  gridImage: {
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  gridBadge: {
    position: "absolute",
    left: 12,
    bottom: 10,
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 15,
  },
  gridBody: { padding: 12 },
  gridPlace: { fontSize: 15, fontWeight: "700", color: "#0F172A" },
  gridSubtitle: { fontSize: 12, color: "#94A3B8", marginTop: 2 },
  gridPriceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  gridPrice: { fontSize: 13, fontWeight: "700", color: "#2563EB" },
  ratingPill: { flexDirection: "row", alignItems: "center", gap: 3 },
  ratingText: { fontSize: 12, fontWeight: "700", color: "#334155" },

  budgetCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: H_PADDING,
    borderRadius: 16,
    padding: 12,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  budgetBanner: {
    height: 80,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  budgetBody: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 12,
    paddingHorizontal: 4,
  },
  budgetPlace: { fontSize: 16, fontWeight: "700", color: "#0F172A" },
  budgetSubtitle: { fontSize: 13, color: "#64748B", marginTop: 2 },
  priceChip: {
    backgroundColor: "#DBEAFE",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },
  priceChipText: { fontSize: 12, fontWeight: "700", color: "#1E40AF" },
  daysChip: {
    backgroundColor: "#D1FAE5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },
  daysChipText: { fontSize: 12, fontWeight: "700", color: "#047857" },

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
