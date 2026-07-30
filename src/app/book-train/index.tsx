import React, { useState } from "react"
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native"
import { useRouter } from "expo-router"
import {
  ChevronLeft,
  MapPin,
  Pencil,
  CalendarClock,
  ArrowDownUp,
  SlidersHorizontal,
  RefreshCw,
} from "lucide-react-native"
import { colors, fonts, spacing, radius, iconSize, shadows } from "../../constants/theme"
import { layout } from "../../constants/layout"
import { en } from "../../translation/en"

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
  const router = useRouter()
  const [activeDate, setActiveDate] = useState(0)

  return (
    <SafeAreaView style={styles.safe}>
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <ChevronLeft size={iconSize.detail} color={colors.primaryNavy} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{en.train.bookTrain}</Text>
        <View style={styles.backBtn} />
      </View>
      <View style={styles.topBar}>
        <View style={styles.routeRow}>
          <View style={styles.routeInput}>
            <MapPin size={iconSize.md} color={colors.primaryNavy} />
            <Text style={styles.routeText}>DLI to BOM</Text>
            <View style={styles.editWrap}>
              <Pencil size={spacing.lg} color={colors.primaryNavy} />
              <Text style={styles.editText}>{en.train.edit}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.calBtn}>
            <CalendarClock size={iconSize.lg} color={colors.primaryNavy} />
          </TouchableOpacity>
        </View>
        <View style={styles.offers}>
          <Text style={styles.offersText}>{en.train.offers}</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: spacing.lg }}
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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: spacing.lg, alignItems: "center" }}
          style={styles.filterScroll}
        >
          <View style={styles.sortChip}>
            <ArrowDownUp size={spacing.lg} color={colors.textDarkNavy} />
            <View>
              <Text style={styles.sortLabel}>{en.train.sortBy}</Text>
              <Text style={styles.sortValue}>{en.train.priceLowToHigh}</Text>
            </View>
          </View>
          {FILTERS.map((f) => (
            <TouchableOpacity key={f} style={styles.filterChip}>
              <Text style={styles.filterChipText}>{f}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.filterChip}>
            <SlidersHorizontal size={spacing.lg} color={colors.textDarkNavy} />
            <Text style={styles.filterChipText}>{en.train.filter}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: spacing.xl, paddingBottom: 32 }}
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
                    <RefreshCw size={fonts.xs} color={colors.textDarkNavy} />
                  </View>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bgScreenAlt },
  root: { flex: 1, backgroundColor: colors.bgScreenAlt },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: spacing["9xl"],
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing["3xl"],
    backgroundColor: colors.background,
  },
  backBtn: {
    width: layout.iconButton.size,
    height: layout.iconButton.size,
    borderRadius: layout.iconButton.radius,
    backgroundColor: colors.bgLightBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: { fontSize: fonts["2xl"], fontWeight: fonts.weight.bold, color: colors.textDarkNavy },
  topBar: { paddingHorizontal: spacing.xl, paddingTop: spacing.smMd, backgroundColor: colors.bgScreenAlt },
  routeRow: { flexDirection: "row", alignItems: "center", gap: spacing.md },
  routeInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.background,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    height: spacing.buttonHeight,
  },
  routeText: { fontSize: fonts.lg, fontWeight: fonts.weight.semibold, color: colors.textDarkNavy, flex: 1 },
  editWrap: { alignItems: "center" },
  editText: { fontSize: fonts.xs, color: colors.textDarkNavy },
  calBtn: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  offers: {
    backgroundColor: colors.background,
    borderRadius: spacing.md,
    paddingVertical: spacing.md,
    alignItems: "center",
    marginTop: spacing.lg,
  },
  offersText: { fontSize: fonts.sm, fontWeight: fonts.weight.bold, color: colors.textDarkNavy, letterSpacing: 1 },
  dateScroll: { marginTop: spacing.lg },
  dateChip: {
    borderWidth: 1,
    borderColor: colors.borderLightGray,
    borderRadius: radius["2xl"],
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    marginRight: spacing.sm,
    backgroundColor: colors.background,
  },
  dateChipActive: { backgroundColor: colors.primaryNavy, borderColor: colors.primaryNavy },
  dateChipText: { fontSize: fonts.sm, color: colors.textDarkNavy },
  dateChipTextActive: { color: colors.white, fontWeight: fonts.weight.semibold },
  filterScroll: { marginTop: spacing.lg, marginBottom: spacing.xs },
  sortChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: colors.borderLightGray,
    borderRadius: spacing.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: 6,
    marginRight: spacing.sm,
    backgroundColor: colors.background,
  },
  sortLabel: { fontSize: fonts.xs, color: colors.textMutedLight },
  sortValue: { fontSize: fonts.xs, fontWeight: fonts.weight.semibold, color: colors.textDarkNavy },
  filterChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: colors.borderLightGray,
    borderRadius: radius["2xl"],
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    marginRight: spacing.sm,
    backgroundColor: colors.background,
  },
  filterChipText: { fontSize: fonts.md, color: colors.textDarkNavy },
  trainCard: {
    backgroundColor: colors.background,
    borderRadius: radius.md,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.borderBottomNav,
  },
  trainName: { fontSize: fonts.base, fontWeight: fonts.weight.bold, color: colors.textDarkNavy },
  trainTimeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.lg,
  },
  trainTime: { fontSize: fonts["2xl"], fontWeight: fonts.weight.bold, color: colors.textDarkNavy },
  trainStation: { fontSize: fonts.sm, color: colors.textMutedLight, marginTop: spacing.xs },
  trainDate: { fontSize: fonts.xs, color: colors.textMutedLight },
  trainMiddle: { alignItems: "center", justifyContent: "center" },
  trainDuration: { fontSize: fonts.sm, color: colors.textMutedLight },
  trainDays: { fontSize: fonts.xs, color: colors.textDarkNavy, letterSpacing: 2, marginTop: spacing.xs, fontWeight: fonts.weight.semibold },
  classRow: { flexDirection: "row", gap: spacing.sm, marginTop: spacing.lg },
  classBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.borderLightGray,
    borderRadius: spacing.sm,
    paddingVertical: spacing.sm,
    alignItems: "center",
  },
  classCode: { fontSize: fonts.md, fontWeight: fonts.weight.bold, color: colors.textDarkNavy },
  refreshRow: { flexDirection: "row", alignItems: "center", gap: 3, marginTop: spacing.xs },
  refreshText: { fontSize: fonts.sm, color: colors.textDarkNavy },
})
