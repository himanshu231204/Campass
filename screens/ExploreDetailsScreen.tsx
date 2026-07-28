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
  ChevronLeft,
  Bookmark,
  Share2,
  MapPin,
  Star,
  Sparkles,
  CalendarDays,
  Globe,
  Sun,
  CloudSun,
  Utensils,
} from "lucide-react-native"

const { width: SCREEN_WIDTH } = Dimensions.get("window")
const H_PADDING = 18

const tags = ["Hotels", "Flights", "Food", "Activities", "Nightlife"]

const weather = [
  { temp: "28°C", month: "Dec", Icon: Sun },
  { temp: "27°C", month: "Jan", Icon: Sun },
  { temp: "29°C", month: "Feb", Icon: CloudSun },
  { temp: "32°C", month: "Mar", Icon: CloudSun },
]

const foods = [
  { name: "Fish Curry Rice", price: "120", tag: "Must Try", accent: "#EA580C" },
  { name: "Bebinca", price: "80", tag: "Dessert", accent: "#EA580C" },
  { name: "Xacuti Chicken", price: "80", tag: "Dessert", accent: "#EA580C" },
  { name: "Feni Cocktail", price: "80", tag: "Dessert", accent: "#EA580C" },
]

const attractions = [
  {
    name: "Baga Beach",
    tag: "Beach",
    rating: "4.9",
    entry: "Free",
    hours: "Open 24h",
    visit: "2-4 hrs",
    colors: ["#1D4ED8", "#0EA5E9"],
  },
  {
    name: "Fort Aguada",
    tag: "Heritage",
    rating: "4.7",
    entry: "₹25",
    hours: "9AM-6PM",
    visit: "1-2 hrs",
    colors: ["#B91C1C", "#F97316"],
  },
  {
    name: "Dudhsagar Falls",
    tag: "Nature",
    rating: "4.8",
    entry: "₹400",
    hours: "7AM-5PM",
    visit: "3-5 hrs",
    colors: ["#047857", "#10B981"],
  },
]

const restaurants = [
  { name: "Britto's", type: "Coastal · Indian", dist: "0.3 km", rating: "4.8" },
  {
    name: "Fisherman's Wharf",
    type: "Coastal · Indian",
    dist: "1.1 km",
    rating: "4.8",
  },
  { name: "Thalassa", type: "Coastal · Indian", dist: "2.4 km", rating: "4.8" },
]

const safety = [
  "Register valuables with your hostel on arrival.",
  "Avoid isolated beaches after dark — stick to lit stretches.",
  "Use app-based cabs at night; agree fares before boarding autos.",
  "Emergency: 112 (national), 1363 (tourist helpline).",
]

const budgetLines = [
  { label: "Stay", value: "₹1,800" },
  { label: "Food", value: "₹600" },
  { label: "Transport", value: "₹800" },
  { label: "Activities", value: "₹700" },
  { label: "Misc", value: "₹600" },
]

export default function ExploreDetailsScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Hero */}
        <LinearGradient
          colors={["#1D4ED8", "#0EA5E9"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.hero}
        >
          <View style={styles.heroTop}>
            <View style={styles.heroBtn}>
              <ChevronLeft size={20} color="#334155" />
            </View>
            <View style={styles.heroRight}>
              <View style={styles.heroBtn}>
                <Bookmark size={18} color="#334155" />
              </View>
              <View style={styles.heroBtn}>
                <Share2 size={18} color="#334155" />
              </View>
            </View>
          </View>
          <MapPin size={44} color="rgba(255,255,255,0.4)" style={styles.heroPin} />
          <LinearGradient
            colors={["#047857", "#10B981"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.heroPill}
          />
        </LinearGradient>

        {/* Title */}
        <View style={styles.titleRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Goa Beach Getaway</Text>
            <View style={styles.locRow}>
              <MapPin size={14} color="#2563EB" />
              <Text style={styles.locText}>North & South Goa, India</Text>
            </View>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.price}>₹4,500</Text>
            <Text style={styles.perPerson}>per person</Text>
          </View>
        </View>

        <View style={styles.reviewRow}>
          {[0, 1, 2, 3, 4].map((s) => (
            <Star
              key={s}
              size={16}
              color="#F59E0B"
              fill={s < 4 ? "#F59E0B" : "none"}
            />
          ))}
          <Text style={styles.ratingBold}>4.8</Text>
          <Text style={styles.reviewCount}>· 2,841 reviews</Text>
        </View>

        {/* Tags */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tagRow}
        >
          {tags.map((t) => (
            <View key={t} style={styles.tag}>
              <Text style={styles.tagText}>{t}</Text>
            </View>
          ))}
        </ScrollView>

        {/* AI Summary */}
        <View style={styles.aiCard}>
          <View style={styles.aiTitleRow}>
            <Sparkles size={16} color="#2563EB" />
            <Text style={styles.aiTitle}>AI Summary</Text>
          </View>
          <Text style={styles.aiText}>
            Goa blends Portuguese heritage with India&apos;s most vibrant beach
            culture. Ideal for budget travellers—dozens of hostels under
            ₹700/night, world-class street food for under ₹150, and free-entry
            beaches. Best explored over 4-5 days.
          </Text>
        </View>

        {/* Best time / Language */}
        <View style={styles.infoRow}>
          <View style={styles.infoCard}>
            <View style={styles.infoHead}>
              <CalendarDays size={15} color="#2563EB" />
              <Text style={styles.infoLabel}>BEST TIME</Text>
            </View>
            <Text style={styles.infoValue}>November – February</Text>
            <Text style={styles.infoDesc}>
              Dry, sunny, peak-season prices. Monsoon (Jun–Sep) is lush but some
              beaches close.
            </Text>
          </View>
          <View style={styles.infoCard}>
            <View style={styles.infoHead}>
              <Globe size={15} color="#2563EB" />
              <Text style={styles.infoLabel}>LANGUAGE</Text>
            </View>
            <Text style={styles.infoValue}>Konkani, Portuguese (signs), Hindi, English widely spoken</Text>
          </View>
        </View>

        {/* Weather */}
        <View style={styles.weatherCard}>
          <View style={styles.weatherHead}>
            <CloudSun size={16} color="#2563EB" />
            <Text style={styles.weatherTitle}>Weather Snapshot</Text>
          </View>
          <View style={styles.weatherRow}>
            {weather.map((w, i) => (
              <View key={i} style={styles.weatherItem}>
                <View style={styles.weatherIcon}>
                  <w.Icon size={20} color="#F59E0B" />
                </View>
                <Text style={styles.weatherTemp}>{w.temp}</Text>
                <Text style={styles.weatherMonth}>{w.month}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Local Foods */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Local Foods to Try</Text>
          <Text style={styles.link}>See all</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.foodRow}
        >
          {foods.map((f, i) => (
            <View key={i} style={styles.foodCard}>
              <View style={styles.foodIconWrap}>
                <Utensils size={22} color="#F59E0B" />
              </View>
              <Text style={styles.foodName}>{f.name}</Text>
              <View style={styles.foodMetaRow}>
                <Text style={styles.foodPrice}>₹{f.price}</Text>
                <View style={styles.foodTag}>
                  <Text style={[styles.foodTagText, { color: f.accent }]}>
                    {f.tag}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Nearby Attractions */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Nearby Attractions</Text>
          <Text style={styles.link}>See all</Text>
        </View>
        {attractions.map((a, i) => (
          <View key={i} style={styles.attractionCard}>
            <LinearGradient
              colors={a.colors}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.attractionBanner}
            >
              <Text style={styles.attractionBannerText}>{a.name}</Text>
              <MapPin
                size={34}
                color="rgba(255,255,255,0.4)"
                style={styles.attractionPin}
              />
            </LinearGradient>
            <View style={styles.attractionBody}>
              <View style={styles.attractionTitleRow}>
                <Text style={styles.attractionName}>{a.name}</Text>
                <View style={styles.ratingPill}>
                  <Star size={12} color="#F59E0B" fill="#F59E0B" />
                  <Text style={styles.ratingText}>{a.rating}</Text>
                </View>
              </View>
              <View style={styles.attractionTag}>
                <Text style={styles.attractionTagText}>{a.tag}</Text>
              </View>
              <View style={styles.metaRow}>
                <View style={styles.metaCol}>
                  <Text style={styles.metaLabel}>ENTRY</Text>
                  <Text style={styles.metaValue}>{a.entry}</Text>
                </View>
                <View style={styles.metaCol}>
                  <Text style={styles.metaLabel}>HOURS</Text>
                  <Text style={styles.metaValue}>{a.hours}</Text>
                </View>
                <View style={styles.metaCol}>
                  <Text style={styles.metaLabel}>VISIT</Text>
                  <Text style={styles.metaValue}>{a.visit}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}

        {/* Nearby Restaurants */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Nearby Restaurants</Text>
          <Text style={styles.link}>See all</Text>
        </View>
        {restaurants.map((r, i) => (
          <View key={i} style={styles.restaurantCard}>
            <View style={styles.restaurantImg} />
            <View style={{ flex: 1 }}>
              <Text style={styles.restaurantName}>{r.name}</Text>
              <Text style={styles.restaurantType}>{r.type}</Text>
              <Text style={styles.restaurantDist}>Dist: {r.dist}</Text>
              <View style={styles.restaurantRating}>
                <Text style={styles.ratingText}>{r.rating}</Text>
                <Star size={12} color="#F59E0B" fill="#F59E0B" />
              </View>
            </View>
          </View>
        ))}

        {/* Safety Tips */}
        <View style={styles.plainCard}>
          <Text style={styles.plainTitle}>Safety Tips</Text>
          {safety.map((s, i) => (
            <View key={i} style={styles.safetyRow}>
              <Text style={styles.safetyNum}>{i + 1}</Text>
              <Text style={styles.safetyText}>{s}</Text>
            </View>
          ))}
        </View>

        {/* Budget Impact */}
        <View style={styles.plainCard}>
          <View style={styles.budgetHead}>
            <Text style={styles.plainTitle}>Budget Impact</Text>
            <Text style={styles.budgetRange}>₹4,500 – ₹12,000 / trip</Text>
          </View>
          {budgetLines.map((b, i) => (
            <View key={i} style={styles.budgetLine}>
              <Text style={styles.budgetLineLabel}>{b.label}</Text>
              <Text style={styles.budgetLineValue}>{b.value}</Text>
            </View>
          ))}
          <View style={styles.budgetFootRow}>
            <View style={styles.budgetFootCol}>
              <Text style={styles.budgetFootLabel}>Stay / night</Text>
              <Text style={styles.budgetFootValue}>₹699-₹3,200</Text>
            </View>
            <View style={styles.budgetFootCol}>
              <Text style={styles.budgetFootLabel}>Food / day</Text>
              <Text style={styles.budgetFootValue}>₹200 - ₹600</Text>
            </View>
          </View>
        </View>

        {/* Save / Add */}
        <View style={styles.ctaRow}>
          <TouchableOpacity style={styles.saveBtn} activeOpacity={0.8}>
            <Text style={styles.saveBtnText}>Save Place</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.85}>
            <LinearGradient
              colors={["#1E3A8A", "#1E40AF"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.addBtn}
            >
              <Text style={styles.addBtnText}>+ Add to Trip</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <TouchableOpacity activeOpacity={0.9} style={{ marginHorizontal: H_PADDING }}>
          <LinearGradient
            colors={["#F97316", "#F59E0B"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.planBtn}
          >
            <Text style={styles.planBtnText}>Plan Trip to Goa with AI</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#EEF2F9" },

  hero: {
    height: 220,
    paddingHorizontal: H_PADDING,
    paddingTop: 12,
  },
  heroTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heroRight: { flexDirection: "row", gap: 10 },
  heroBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.9)",
    alignItems: "center",
    justifyContent: "center",
  },
  heroPin: { position: "absolute", top: 80, alignSelf: "center" },
  heroPill: {
    position: "absolute",
    bottom: 20,
    left: H_PADDING,
    right: H_PADDING,
    height: 34,
    borderRadius: 18,
  },

  titleRow: {
    flexDirection: "row",
    paddingHorizontal: H_PADDING,
    marginTop: 16,
    alignItems: "flex-start",
  },
  title: { fontSize: 22, fontWeight: "800", color: "#0F172A" },
  locRow: { flexDirection: "row", alignItems: "center", gap: 4, marginTop: 6 },
  locText: { fontSize: 13, color: "#64748B" },
  price: { fontSize: 22, fontWeight: "800", color: "#1E40AF" },
  perPerson: { fontSize: 11, color: "#94A3B8" },

  reviewRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    paddingHorizontal: H_PADDING,
    marginTop: 10,
  },
  ratingBold: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
    marginLeft: 6,
  },
  reviewCount: { fontSize: 13, color: "#94A3B8" },

  tagRow: {
    paddingHorizontal: H_PADDING,
    gap: 8,
    marginTop: 14,
  },
  tag: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#DBEAFE",
    backgroundColor: "#EFF6FF",
  },
  tagText: { fontSize: 12, fontWeight: "600", color: "#2563EB" },

  aiCard: {
    marginHorizontal: H_PADDING,
    marginTop: 18,
    backgroundColor: "#EFF6FF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#BFDBFE",
    padding: 16,
  },
  aiTitleRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  aiTitle: { fontSize: 14, fontWeight: "700", color: "#1E40AF" },
  aiText: { fontSize: 13, color: "#475569", lineHeight: 20, marginTop: 8 },

  infoRow: {
    flexDirection: "row",
    paddingHorizontal: H_PADDING,
    gap: 12,
    marginTop: 16,
  },
  infoCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
  },
  infoHead: { flexDirection: "row", alignItems: "center", gap: 6 },
  infoLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#64748B",
    letterSpacing: 0.5,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
    marginTop: 8,
  },
  infoDesc: { fontSize: 11, color: "#94A3B8", marginTop: 6, lineHeight: 16 },

  weatherCard: {
    marginHorizontal: H_PADDING,
    marginTop: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
  },
  weatherHead: { flexDirection: "row", alignItems: "center", gap: 6 },
  weatherTitle: { fontSize: 14, fontWeight: "700", color: "#0F172A" },
  weatherRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },
  weatherItem: { alignItems: "center", flex: 1 },
  weatherIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FEF3C7",
    alignItems: "center",
    justifyContent: "center",
  },
  weatherTemp: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0F172A",
    marginTop: 8,
  },
  weatherMonth: { fontSize: 11, color: "#94A3B8", marginTop: 2 },

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

  foodRow: { paddingHorizontal: H_PADDING, gap: 12 },
  foodCard: {
    width: 140,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 12,
  },
  foodIconWrap: {
    height: 60,
    borderRadius: 12,
    backgroundColor: "#FEF9C3",
    alignItems: "center",
    justifyContent: "center",
  },
  foodName: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0F172A",
    marginTop: 10,
  },
  foodMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  foodPrice: { fontSize: 12, fontWeight: "700", color: "#2563EB" },
  foodTag: {
    backgroundColor: "#FFEDD5",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  foodTagText: { fontSize: 11, fontWeight: "700" },

  attractionCard: {
    marginHorizontal: H_PADDING,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 14,
    overflow: "hidden",
  },
  attractionBanner: {
    height: 90,
    padding: 12,
    justifyContent: "flex-end",
  },
  attractionPin: { position: "absolute", top: 26, alignSelf: "center" },
  attractionBannerText: { color: "#FFFFFF", fontWeight: "700", fontSize: 15 },
  attractionBody: { padding: 14 },
  attractionTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  attractionName: { fontSize: 16, fontWeight: "700", color: "#0F172A" },
  ratingPill: { flexDirection: "row", alignItems: "center", gap: 3 },
  ratingText: { fontSize: 12, fontWeight: "700", color: "#334155" },
  attractionTag: {
    alignSelf: "flex-start",
    backgroundColor: "#EFF6FF",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
    marginTop: 8,
  },
  attractionTagText: { fontSize: 12, fontWeight: "600", color: "#2563EB" },
  metaRow: {
    flexDirection: "row",
    marginTop: 14,
    gap: 8,
  },
  metaCol: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    borderRadius: 10,
    padding: 10,
  },
  metaLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#94A3B8",
    letterSpacing: 0.5,
  },
  metaValue: {
    fontSize: 12,
    fontWeight: "600",
    color: "#334155",
    marginTop: 4,
  },

  restaurantCard: {
    flexDirection: "row",
    gap: 14,
    marginHorizontal: H_PADDING,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 12,
    marginBottom: 14,
  },
  restaurantImg: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: "#3B82F6",
  },
  restaurantName: { fontSize: 16, fontWeight: "700", color: "#0F172A" },
  restaurantType: { fontSize: 13, color: "#64748B", marginTop: 4 },
  restaurantDist: { fontSize: 13, color: "#334155", marginTop: 4 },
  restaurantRating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    alignSelf: "flex-end",
    marginTop: -14,
  },

  plainCard: {
    marginHorizontal: H_PADDING,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
    marginBottom: 14,
  },
  plainTitle: { fontSize: 15, fontWeight: "700", color: "#0F172A" },
  safetyRow: { flexDirection: "row", gap: 10, marginTop: 12 },
  safetyNum: { fontSize: 12, color: "#94A3B8", width: 14 },
  safetyText: { flex: 1, fontSize: 12, color: "#64748B", lineHeight: 17 },

  budgetHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  budgetRange: { fontSize: 13, fontWeight: "700", color: "#1E40AF" },
  budgetLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  budgetLineLabel: { fontSize: 13, color: "#64748B" },
  budgetLineValue: { fontSize: 13, fontWeight: "700", color: "#0F172A" },
  budgetFootRow: { flexDirection: "row", gap: 12, marginTop: 16 },
  budgetFootCol: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    borderRadius: 10,
    padding: 10,
  },
  budgetFootLabel: { fontSize: 11, color: "#94A3B8" },
  budgetFootValue: {
    fontSize: 12,
    fontWeight: "700",
    color: "#334155",
    marginTop: 4,
  },

  ctaRow: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: H_PADDING,
    marginTop: 8,
    marginBottom: 12,
  },
  saveBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: "center",
  },
  saveBtnText: { fontSize: 14, fontWeight: "700", color: "#334155" },
  addBtn: {
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: "center",
  },
  addBtnText: { fontSize: 14, fontWeight: "700", color: "#FFFFFF" },

  planBtn: {
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
  },
  planBtnText: { fontSize: 15, fontWeight: "800", color: "#FFFFFF" },
})
