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
  Share2,
  MoreVertical,
  Clock,
  Sparkles,
  Package,
} from "lucide-react-native"

const COLORS = {
  navy: "#1B2A6B",
  darkNavy: "#16225A",
  blue: "#3B4FD6",
  bg: "#F4F6FB",
  card: "#FFFFFF",
  text: "#1F2A44",
  subtext: "#9AA2B5",
  orange: "#F26522",
  hotelTag: "#EAF0FF",
  hotelTagText: "#3B4FD6",
  tipBg: "#FFF6EA",
  tipText: "#B4791E",
  border: "#EEF1F6",
}

const TABS = ["Itinerary", "Budget", "Map"]
const DAYS = [
  { day: "Day 1", date: "Dec22" },
  { day: "Day 2", date: "Dec 23" },
  { day: "Day 3", date: "Dec 24" },
]

export default function TripDetailScreen() {
  const [activeTab, setActiveTab] = useState(0)
  const [activeDay, setActiveDay] = useState(0)

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      {/* Header */}
      <LinearGradient
        colors={[COLORS.navy, COLORS.darkNavy]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.circleBtn}>
            <ChevronLeft size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Goa Beach Escape</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.circleBtnSmall}>
              <Share2 size={16} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleBtnSmall}>
              <MoreVertical size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tabs}>
          {TABS.map((t, i) => (
            <TouchableOpacity key={t} style={styles.tab} onPress={() => setActiveTab(i)}>
              {activeTab === i ? (
                <View style={styles.tabActive}>
                  <Text style={styles.tabActiveText}>{t}</Text>
                </View>
              ) : (
                <Text style={styles.tabText}>{t}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </LinearGradient>

      {/* Day pills - horizontal scroll */}
      <View style={styles.dayWrap}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {DAYS.map((d, i) => (
            <TouchableOpacity
              key={d.day}
              style={[styles.dayPill, activeDay === i && styles.dayPillActive]}
              onPress={() => setActiveDay(i)}
            >
              <Text style={[styles.dayPillDay, activeDay === i && styles.dayPillTextActive]}>
                {d.day}
              </Text>
              <Text style={[styles.dayPillDate, activeDay === i && styles.dayPillTextActive]}>
                {d.date}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24, paddingHorizontal: 20 }}
      >
        <Text style={styles.sectionLabel}>ARRIVAL · DEC 22</Text>

        {/* Timeline item 1 */}
        <View style={styles.timelineRow}>
          <View style={styles.timelineDotWrap}>
            <View style={styles.timelineDot} />
            <View style={styles.timelineLine} />
          </View>
          <View style={styles.eventCard}>
            <View style={styles.eventTop}>
              <Text style={styles.eventTitle}>Check-in Zostel Goa</Text>
              <Text style={styles.eventPrice}>₹699</Text>
            </View>
            <View style={styles.eventMeta}>
              <Text style={styles.eventTime}>14:00</Text>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Hotel</Text>
              </View>
              <View style={styles.durationRow}>
                <Clock size={13} color={COLORS.subtext} />
                <Text style={styles.duration}>30 min</Text>
              </View>
            </View>
            <View style={styles.tip}>
              <Sparkles size={14} color={COLORS.orange} />
              <Text style={styles.tipText}>Ask for a sea-view dorm — book early.</Text>
            </View>
          </View>
        </View>

        {/* Transit */}
        <View style={styles.transitRow}>
          <View style={styles.transitIcon} />
          <Text style={styles.transitText}>Rickshaw to Baga Beach</Text>
          <Text style={styles.transitMeta}>20 min   ₹80</Text>
        </View>

        {/* Timeline item 2 */}
        <View style={styles.timelineRow}>
          <View style={styles.timelineDotWrap}>
            <View style={styles.timelineDot} />
          </View>
          <View style={styles.eventCard}>
            <View style={styles.eventTop}>
              <Text style={styles.eventTitle}>Sunset at Baga Beach</Text>
              <Text style={styles.eventFree}>Free</Text>
            </View>
            <View style={styles.eventMeta}>
              <Text style={styles.eventTime}>18:00</Text>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Beach</Text>
              </View>
              <View style={styles.durationRow}>
                <Clock size={13} color={COLORS.subtext} />
                <Text style={styles.duration}>90 min</Text>
              </View>
            </View>
            <View style={styles.tip}>
              <Sparkles size={14} color={COLORS.orange} />
              <Text style={styles.tipText}>
                Golden hour starts at 18:20 — arrive early for the best spot.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer actions */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.refineBtn}>
          <Sparkles size={16} color={COLORS.navy} />
          <Text style={styles.refineText}>Refine with AI</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={{ flex: 1 }}>
          <LinearGradient
            colors={["#F5A623", "#F26522"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.bookBtn}
          >
            <Package size={16} color="#fff" />
            <Text style={styles.bookText}>Book All</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: COLORS.bg },
  header: {
    paddingTop: 44,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  circleBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
  },
  circleBtnSmall: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: { color: "#fff", fontSize: 18, fontWeight: "700" },
  headerActions: { flexDirection: "row", gap: 8 },
  tabs: { flexDirection: "row", marginTop: 16 },
  tab: { flex: 1, alignItems: "center", paddingVertical: 4 },
  tabActive: {
    backgroundColor: COLORS.orange,
    borderRadius: 20,
    paddingHorizontal: 22,
    paddingVertical: 8,
  },
  tabActiveText: { color: "#fff", fontWeight: "700", fontSize: 14 },
  tabText: { color: "rgba(255,255,255,0.7)", fontSize: 14, paddingVertical: 8 },
  dayWrap: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  dayPill: {
    width: 62,
    height: 62,
    borderRadius: 18,
    backgroundColor: "#EEF1F6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  dayPillActive: { backgroundColor: COLORS.navy },
  dayPillDay: { fontSize: 14, fontWeight: "700", color: COLORS.text },
  dayPillDate: { fontSize: 11, color: COLORS.subtext, marginTop: 2 },
  dayPillTextActive: { color: "#fff" },
  sectionLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: COLORS.subtext,
    letterSpacing: 0.5,
    marginTop: 18,
    marginBottom: 12,
  },
  timelineRow: { flexDirection: "row" },
  timelineDotWrap: { width: 24, alignItems: "center", paddingTop: 20 },
  timelineDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: COLORS.navy,
    backgroundColor: "#fff",
  },
  timelineLine: { flex: 1, width: 2, backgroundColor: "#E1E5EE", marginTop: 4 },
  eventCard: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 16,
    marginLeft: 8,
    shadowColor: "#1B2A6B",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  eventTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eventTitle: { fontSize: 15, fontWeight: "700", color: COLORS.text },
  eventPrice: { fontSize: 15, fontWeight: "700", color: COLORS.orange },
  eventFree: { fontSize: 15, fontWeight: "700", color: COLORS.orange },
  eventMeta: { flexDirection: "row", alignItems: "center", gap: 10, marginTop: 8 },
  eventTime: { fontSize: 13, color: COLORS.text, fontWeight: "600" },
  tag: {
    backgroundColor: COLORS.hotelTag,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  tagText: { fontSize: 12, color: COLORS.hotelTagText, fontWeight: "600" },
  durationRow: { flexDirection: "row", alignItems: "center", gap: 4 },
  duration: { fontSize: 12, color: COLORS.subtext },
  tip: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    backgroundColor: COLORS.tipBg,
    borderRadius: 10,
    padding: 10,
    marginTop: 12,
  },
  tipText: { flex: 1, fontSize: 13, color: COLORS.tipText, lineHeight: 18 },
  transitRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 32,
    paddingVertical: 14,
    gap: 10,
  },
  transitIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#E1E5EE",
  },
  transitText: { flex: 1, fontSize: 13, color: COLORS.subtext },
  transitMeta: { fontSize: 13, color: COLORS.subtext },
  footer: {
    flexDirection: "row",
    gap: 12,
    padding: 16,
    paddingBottom: 28,
    backgroundColor: COLORS.bg,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  refineBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    height: 54,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: COLORS.navy,
  },
  refineText: { color: COLORS.navy, fontWeight: "700", fontSize: 14 },
  bookBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    height: 54,
    borderRadius: 14,
  },
  bookText: { color: "#fff", fontWeight: "700", fontSize: 15 },
})
