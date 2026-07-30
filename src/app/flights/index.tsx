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
import { LinearGradient } from "expo-linear-gradient"
import { useRouter } from "expo-router"
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
import { colors, fonts, spacing, radius, iconSize, shadows } from "../../constants/theme"
import { layout } from "../../constants/layout"
import { en } from "../../translation/en"

const TABS = [en.flights.oneWay, en.flights.roundTrip, en.flights.multiCity]

export default function SearchFlightsScreen() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(0)

  return (
    <SafeAreaView style={styles.safe}>
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <ChevronLeft size={iconSize.detail} color={colors.primaryNavy} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{en.flights.title}</Text>
        <View style={styles.backBtn} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: spacing["3xl"], paddingBottom: 32 }}
      >
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
        <View style={styles.card}>
          <View style={styles.inputRow}>
            <MapPin size={iconSize.md} color={colors.iconDeepPurple} />
            <Text style={styles.inputText}>{en.flights.from}</Text>
          </View>
          <View style={styles.swapWrap}>
            <TouchableOpacity style={styles.swapBtn}>
              <ArrowUpDown size={iconSize.md} color={colors.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputRow}>
            <MapPin size={iconSize.md} color={colors.iconDeepPurple} />
            <Text style={styles.inputText}>{en.flights.to}</Text>
          </View>
          <View style={styles.dateRow}>
            <View style={styles.dateInput}>
              <Calendar size={iconSize.sm} color={colors.iconAccentBlue} />
              <Text style={styles.dateText}>{en.flights.departDate}</Text>
            </View>
            <View style={styles.dateArrow}>
              <ArrowRight size={iconSize.sm} color={colors.white} />
            </View>
            <View style={styles.dateInput}>
              <Calendar size={iconSize.sm} color={colors.iconAccentBlue} />
              <Text style={styles.dateText}>{en.flights.returnDate}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.paxRow}>
            <Users size={iconSize.md} color={colors.iconAccentBlue} />
            <Text style={styles.paxText}>{en.flights.passengers}</Text>
            <ChevronRight size={iconSize.md} color={colors.textMutedLight} style={{ marginLeft: "auto" }} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.9}>
          <LinearGradient
            colors={colors.gradientNavyLight}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.searchBtn}
          >
            <Text style={styles.searchText}>{en.flights.title}</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.quickTitle}>{en.flights.quickBook}</Text>
        <FlightCard />
        <FlightCard />
      </ScrollView>
    </View>
    </SafeAreaView>
  )
}

function FlightCard() {
  return (
    <View style={styles.flightCard}>
      <View style={styles.flightTop}>
        <View style={styles.airlineRow}>
          <View style={styles.airlineIcon}>
            <Plane size={iconSize.sm} color={colors.iconOrange} />
          </View>
          <Text style={styles.airline}>IndiGo 6E-282</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.price}>₹3,499</Text>
          <Text style={styles.perPerson}>{en.flights.perPerson}</Text>
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
          <Text style={styles.nonstopText}>{en.flights.nonStop}</Text>
        </View>
        <View style={styles.durationTag}>
          <Text style={styles.durationTagText}>2h 10m</Text>
        </View>
        <View style={styles.offersTag}>
          <Text style={styles.offersTagText}>{en.flights.offers}</Text>
        </View>
        <TouchableOpacity style={styles.selectBtn}>
          <Text style={styles.selectText}>{en.flights.select}</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing["3xl"],
    backgroundColor: colors.background,
  },
  backBtn: {
    ...layout.iconButton,
    backgroundColor: colors.bgLightBlue,
  },
  headerTitle: { fontSize: fonts["2xl"], fontWeight: fonts.weight.bold, color: colors.textDarkNavy },
  tabs: { flexDirection: "row", gap: spacing.md, marginBottom: spacing["2xl"] },
  tab: {
    flex: 1,
    height: 46,
    borderRadius: radius["2xl"],
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  tabActive: { backgroundColor: colors.primaryNavy },
  tabText: { fontSize: fonts.md, color: colors.textMutedLight, fontWeight: fonts.weight.semibold },
  tabTextActive: { color: colors.white },
  card: {
    backgroundColor: colors.background,
    borderRadius: radius["2xl"],
    padding: spacing.xl,
    ...shadows.card,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg,
    backgroundColor: colors.bgInput,
    borderRadius: radius.md,
    paddingHorizontal: spacing.xl,
    height: layout.input.height,
  },
  inputText: { fontSize: fonts.lg, color: colors.textMutedLight },
  swapWrap: { alignItems: "center", marginVertical: -8, zIndex: 2 },
  swapBtn: {
    ...layout.iconButton,
    backgroundColor: colors.deepPurple,
  },
  dateRow: { flexDirection: "row", alignItems: "center", gap: spacing.md, marginTop: spacing.lg },
  dateInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.bgInput,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    height: layout.input.heightSm,
  },
  dateText: { fontSize: fonts.md, color: colors.textDarkNavy, fontWeight: fonts.weight.semibold },
  dateArrow: {
    ...layout.iconButton,
    backgroundColor: colors.primaryNavy,
  },
  paxRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg,
    backgroundColor: colors.bgInput,
    borderRadius: radius.md,
    paddingHorizontal: spacing.xl,
    height: layout.input.height,
    marginTop: spacing.lg,
  },
  paxText: { fontSize: fonts.lg, color: colors.textMutedLight },
  searchBtn: {
    height: layout.button.heightLg,
    borderRadius: radius.button,
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing["3xl"],
  },
  searchText: { color: colors.white, fontSize: fonts.xl, fontWeight: fonts.weight.bold },
  quickTitle: { fontSize: fonts.xl, fontWeight: fonts.weight.bold, color: colors.textDarkNavy, marginTop: spacing["4xl"], marginBottom: spacing.lg },
  flightCard: {
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    padding: spacing.xl,
    marginBottom: spacing.lg,
    ...shadows.card,
  },
  flightTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  airlineRow: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  airlineIcon: {
    width: spacing["6xl"],
    height: spacing["6xl"],
    borderRadius: spacing.lg,
    backgroundColor: colors.bgOrangeLight,
    alignItems: "center",
    justifyContent: "center",
  },
  airline: { fontSize: fonts.lg, fontWeight: fonts.weight.bold, color: colors.textDarkNavy },
  price: { fontSize: fonts.xl, fontWeight: fonts.weight.bold, color: colors.accentBlue },
  perPerson: { fontSize: fonts.xs, color: colors.textMutedLight },
  timeRow: { flexDirection: "row", alignItems: "center", gap: spacing.lg, marginTop: spacing.lg },
  time: { fontSize: fonts.xl, fontWeight: fonts.weight.bold, color: colors.textDarkNavy },
  station: { fontSize: fonts.xs, color: colors.textMutedLight },
  dash: { color: colors.textMutedLight, fontSize: fonts.sm },
  tagsRow: { flexDirection: "row", alignItems: "center", gap: spacing.sm, marginTop: spacing.lg },
  nonstopTag: {
    backgroundColor: colors.bgGreenLight,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  nonstopText: { fontSize: fonts.xs, color: colors.successLight, fontWeight: fonts.weight.semibold },
  durationTag: {
    backgroundColor: colors.bgLightBlue,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  durationTagText: { fontSize: fonts.xs, color: colors.accentBlue, fontWeight: fonts.weight.semibold },
  offersTag: {
    borderWidth: 1,
    borderColor: colors.errorLight,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  offersTagText: { fontSize: fonts.xs, color: colors.errorLight, fontWeight: fonts.weight.semibold },
  selectBtn: {
    marginLeft: "auto",
    backgroundColor: colors.primaryNavy,
    borderRadius: radius.md,
    paddingHorizontal: spacing["2xl"],
    paddingVertical: spacing.sm,
  },
  selectText: { color: colors.white, fontSize: fonts.md, fontWeight: fonts.weight.bold },
})
