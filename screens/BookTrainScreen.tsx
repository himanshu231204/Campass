import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native"
import {
  ChevronLeft,
  MapPin,
  Pencil,
  CalendarClock,
  ArrowDownUp,
  SlidersHorizontal,
  RefreshCw,
} from "lucide-react-native"

const COLORS = {
  navy: "#1B2A6B",
  blue: "#3B4FD6",
  bg: "#E9EBEF",
  card: "#FFFFFF",
  text: "#1F2A44",
  subtext: "#9AA2B5",
  chipBorder: "#E1E5EE",
  inputBg: "#F3F6FC",
  border: "#EEF1F6",
}

const DATES = Array.from({ length: 12 }).map(() => "Wed, Jan 12")
const FILTERS = ["Economy", "Business", "Non-Stop"]
const TRAINS = Array.from({ length: 8 }).map(() => ({
  name: "AVADH ASSAM EXP (15910)",
  dep: "13:00",
  arr: "00:35",
  from: "Katihar Jn",
  to: "Katihar Jn",
  depDate: "Sat, 18 Jul 2026",
  duration: "11h:35m",
}))

export default function BookTrainScreen() {
  const [activeDate, setActiveDate] = useState(0)

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <ChevronLeft size={22} color={COLORS.navy} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book Train</Text>
        <View style={styles.backBtn} />
      </View>

      <View style={styles.topBar}>
        {/* Route input */}
        <View style={styles.routeRow}>
          <View style={styles.routeInput}>
            <MapPin size={18} color={COLORS.navy} />
            <Text style={styles.routeText}>DLI to BOM</Text>
            <View style={styles.editWrap}>
              <Pencil size={14} color={COLORS.navy} />
              <Text style={styles.editText}>Edit</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.calBtn}>
            <CalendarClock size={20} color={COLORS.navy} />
          </TouchableOpacity>
        </View>

        {/* Offers */}
        <View style={styles.offers}>
          <Text style={styles.offersText}>OFFERS</Text>
        </View>

        {/* Date chips - horizontal scroll */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 12 }}
          style={styles.dateScroll}
        >
          {DATES.map((d, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.dateChip, activeDate === i && styles.dateChipActive]}
              onPress={() => setActiveDate(i)}
            >
              <Text style={[styles.dateChipText, activeDate === i && styles.dateChipTextActive]}>
                {d}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Sort / filter chips - horizontal scroll */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 12, alignItems: "center" }}
          style={styles.filterScroll}
        >
          <View style={styles.sortChip}>
            <ArrowDownUp size={14} color={COLORS.text} />
            <View>
              <Text style={styles.sortLabel}>Sort by</Text>
              <Text style={styles.sortValue}>Price ( Low to High )</Text>
            </View>
          </View>
          {FILTERS.map((f) => (
            <TouchableOpacity key={f} style={styles.filterChip}>
              <Text style={styles.filterChipText}>{f}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.filterChip}>
            <SlidersHorizontal size={14} color={COLORS.text} />
            <Text style={styles.filterChipText}>Filter</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Train list - vertical scroll */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
      >
        {TRAINS.map((t, i) => (
          <View key={i} style={styles.trainCard}>
            <Text style={styles.trainName}>{t.name}</Text>
            <View style={styles.trainTimeRow}>
              <View>
                <Text style={styles.trainTime}>{t.dep}</Text>
                <Text style={styles.trainStation}>{t.from}</Text>
                <Text style={styles.trainDate}>{t.depDate}</Text>
              </View>
              <View style={styles.trainMiddle}>
                <Text style={styles.trainDuration}>— {t.duration} —</Text>
                <Text style={styles.trainDays}>M T W T F S S</Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.trainTime}>{t.arr}</Text>
                <Text style={styles.trainStation}>{t.to}</Text>
                <Text style={styles.trainDate}>{t.depDate}</Text>
              </View>
            </View>
            <View style={styles.classRow}>
              {[0, 1, 2, 3].map((c) => (
                <View key={c} style={styles.classBtn}>
                  <Text style={styles.classCode}>SL</Text>
                  <View style={styles.refreshRow}>
                    <Text style={styles.refreshText}>Refresh</Text>
                    <RefreshCw size={11} color={COLORS.text} />
                  </View>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
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
    paddingBottom: 14,
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
  topBar: { paddingHorizontal: 16, paddingTop: 12, backgroundColor: COLORS.bg },
  routeRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  routeInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 54,
  },
  routeText: { fontSize: 15, fontWeight: "600", color: COLORS.text, flex: 1 },
  editWrap: { alignItems: "center" },
  editText: { fontSize: 11, color: COLORS.text },
  calBtn: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  offers: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 12,
  },
  offersText: { fontSize: 12, fontWeight: "700", color: COLORS.text, letterSpacing: 1 },
  dateScroll: { marginTop: 12 },
  dateChip: {
    borderWidth: 1,
    borderColor: COLORS.chipBorder,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 8,
    backgroundColor: "#fff",
  },
  dateChipActive: { backgroundColor: COLORS.navy, borderColor: COLORS.navy },
  dateChipText: { fontSize: 12, color: COLORS.text },
  dateChipTextActive: { color: "#fff", fontWeight: "600" },
  filterScroll: { marginTop: 12, marginBottom: 4 },
  sortChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: COLORS.chipBorder,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    backgroundColor: "#fff",
  },
  sortLabel: { fontSize: 9, color: COLORS.subtext },
  sortValue: { fontSize: 11, fontWeight: "600", color: COLORS.text },
  filterChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: COLORS.chipBorder,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 8,
    backgroundColor: "#fff",
  },
  filterChipText: { fontSize: 13, color: COLORS.text },
  trainCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  trainName: { fontSize: 14, fontWeight: "700", color: COLORS.text },
  trainTimeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  trainTime: { fontSize: 18, fontWeight: "700", color: COLORS.text },
  trainStation: { fontSize: 12, color: COLORS.subtext, marginTop: 2 },
  trainDate: { fontSize: 11, color: COLORS.subtext },
  trainMiddle: { alignItems: "center", justifyContent: "center" },
  trainDuration: { fontSize: 12, color: COLORS.subtext },
  trainDays: { fontSize: 11, color: COLORS.text, letterSpacing: 2, marginTop: 4, fontWeight: "600" },
  classRow: { flexDirection: "row", gap: 8, marginTop: 14 },
  classBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.chipBorder,
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
  },
  classCode: { fontSize: 13, fontWeight: "700", color: COLORS.text },
  refreshRow: { flexDirection: "row", alignItems: "center", gap: 3, marginTop: 2 },
  refreshText: { fontSize: 12, color: COLORS.text },
})
