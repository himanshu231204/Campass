import React, { useState } from "react"
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
  ChevronLeft,
  ChevronRight,
  MapPin,
  ArrowUpDown,
  Calendar,
  Users,
  ArrowRight,
  Plane,
} from "lucide-react-native"

const COLORS = {
  navy: "#1B2A6B",
  purple: "#3B1E8F",
  bg: "#E9EBEF",
  card: "#FFFFFF",
  text: "#1F2A44",
  subtext: "#9AA2B5",
  inputBg: "#F3F6FC",
  blue: "#3B4FD6",
  green: "#0E9E6E",
  greenBg: "#E4F6EE",
  red: "#E5484D",
  orange: "#F26522",
  border: "#EEF1F6",
}

const TABS = ["One Way", "Round Trip", "Multi-city"]

export default function SearchFlightsScreen() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <ChevronLeft size={22} color={COLORS.navy} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search Flights</Text>
        <View style={styles.backBtn} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 32 }}
      >
        {/* Tabs */}
        <View style={styles.tabs}>
          {TABS.map((t, i) => (
            <TouchableOpacity
              key={t}
              style={[styles.tab, activeTab === i && styles.tabActive]}
              onPress={() => setActiveTab(i)}
            >
              <Text style={[styles.tabText, activeTab === i && styles.tabTextActive]}>{t}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Search card */}
        <View style={styles.card}>
          <View style={styles.inputRow}>
            <MapPin size={18} color={COLORS.purple} />
            <Text style={styles.inputText}>Delhi (DEL)</Text>
          </View>
          <View style={styles.swapWrap}>
            <TouchableOpacity style={styles.swapBtn}>
              <ArrowUpDown size={18} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.inputRow}>
            <MapPin size={18} color={COLORS.purple} />
            <Text style={styles.inputText}>Mumbai (BOM)</Text>
          </View>

          <View style={styles.dateRow}>
            <View style={styles.dateInput}>
              <Calendar size={16} color={COLORS.blue} />
              <Text style={styles.dateText}>Dec 22, 2024</Text>
            </View>
            <View style={styles.dateArrow}>
              <ArrowRight size={16} color="#fff" />
            </View>
            <View style={styles.dateInput}>
              <Calendar size={16} color={COLORS.blue} />
              <Text style={styles.dateText}>Dec 26, 2024</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.paxRow}>
            <Users size={18} color={COLORS.blue} />
            <Text style={styles.paxText}>2 Adults · Economy</Text>
            <ChevronRight size={18} color={COLORS.subtext} style={{ marginLeft: "auto" }} />
          </TouchableOpacity>
        </View>

        {/* Search button */}
        <TouchableOpacity activeOpacity={0.9}>
          <LinearGradient
            colors={[COLORS.navy, "#2E4CA0"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.searchBtn}
          >
            <Text style={styles.searchText}>Search Flights</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Quick book */}
        <Text style={styles.quickTitle}>Quick Book</Text>
        <FlightCard />
        <FlightCard />
      </ScrollView>
    </View>
  )
}

function FlightCard() {
  return (
    <View style={styles.flightCard}>
      <View style={styles.flightTop}>
        <View style={styles.airlineRow}>
          <View style={styles.airlineIcon}>
            <Plane size={16} color={COLORS.orange} />
          </View>
          <Text style={styles.airline}>IndiGo 6E-282</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.price}>₹3,499</Text>
          <Text style={styles.perPerson}>per person</Text>
        </View>
      </View>

      <View style={styles.timeRow}>
        <View>
          <Text style={styles.time}>06:15</Text>
          <Text style={styles.station}>Dli</Text>
        </View>
        <Text style={styles.dash}>———</Text>
        <View>
          <Text style={styles.time}>20:16</Text>
          <Text style={styles.station}>Bom</Text>
        </View>
        <View style={{ flex: 1 }} />
      </View>

      <View style={styles.tagsRow}>
        <View style={styles.nonstopTag}>
          <Text style={styles.nonstopText}>Non-stop</Text>
        </View>
        <View style={styles.durationTag}>
          <Text style={styles.durationTagText}>2h 10m</Text>
        </View>
        <View style={styles.offersTag}>
          <Text style={styles.offersTagText}>Offers</Text>
        </View>
        <TouchableOpacity style={styles.selectBtn}>
          <Text style={styles.selectText}>Select</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#EAF0FF",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: { fontSize: 18, fontWeight: "700", color: COLORS.text },
  tabs: { flexDirection: "row", gap: 10, marginBottom: 18 },
  tab: {
    flex: 1,
    height: 46,
    borderRadius: 24,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabActive: { backgroundColor: COLORS.navy },
  tabText: { fontSize: 13, color: COLORS.subtext, fontWeight: "600" },
  tabTextActive: { color: "#fff" },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    padding: 16,
    shadowColor: "#1B2A6B",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: COLORS.inputBg,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
  },
  inputText: { fontSize: 15, color: COLORS.subtext },
  swapWrap: { alignItems: "center", marginVertical: -8, zIndex: 2 },
  swapBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.purple,
    alignItems: "center",
    justifyContent: "center",
  },
  dateRow: { flexDirection: "row", alignItems: "center", gap: 10, marginTop: 12 },
  dateInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: COLORS.inputBg,
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 52,
  },
  dateText: { fontSize: 13, color: COLORS.text, fontWeight: "600" },
  dateArrow: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.navy,
    alignItems: "center",
    justifyContent: "center",
  },
  paxRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: COLORS.inputBg,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
    marginTop: 12,
  },
  paxText: { fontSize: 15, color: COLORS.subtext },
  searchBtn: {
    height: 58,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  searchText: { color: "#fff", fontSize: 17, fontWeight: "700" },
  quickTitle: { fontSize: 16, fontWeight: "700", color: COLORS.text, marginTop: 22, marginBottom: 12 },
  flightCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    shadowColor: "#1B2A6B",
    shadowOpacity: 0.04,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  flightTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  airlineRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  airlineIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#FEEDE3",
    alignItems: "center",
    justifyContent: "center",
  },
  airline: { fontSize: 15, fontWeight: "700", color: COLORS.text },
  price: { fontSize: 16, fontWeight: "700", color: COLORS.blue },
  perPerson: { fontSize: 11, color: COLORS.subtext },
  timeRow: { flexDirection: "row", alignItems: "center", gap: 12, marginTop: 12 },
  time: { fontSize: 16, fontWeight: "700", color: COLORS.text },
  station: { fontSize: 11, color: COLORS.subtext },
  dash: { color: COLORS.subtext, fontSize: 12 },
  tagsRow: { flexDirection: "row", alignItems: "center", gap: 8, marginTop: 14 },
  nonstopTag: {
    backgroundColor: COLORS.greenBg,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  nonstopText: { fontSize: 11, color: COLORS.green, fontWeight: "600" },
  durationTag: {
    backgroundColor: "#EAF0FF",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  durationTagText: { fontSize: 11, color: COLORS.blue, fontWeight: "600" },
  offersTag: {
    borderWidth: 1,
    borderColor: COLORS.red,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  offersTagText: { fontSize: 11, color: COLORS.red, fontWeight: "600" },
  selectBtn: {
    marginLeft: "auto",
    backgroundColor: COLORS.navy,
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  selectText: { color: "#fff", fontSize: 13, fontWeight: "700" },
})
