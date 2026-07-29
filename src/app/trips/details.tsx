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
  Share2,
  MoreVertical,
  Clock,
  Sparkles,
  Package,
} from "lucide-react-native"
import { colors, fonts, spacing, radius, iconSize, shadows } from "../../constants/theme"
import { en } from "../../translation/en"
import { layout } from "../../constants/layout"

const TABS = [en.tripDetail.itinerary, en.tripDetail.budget, en.tripDetail.map]
const DAYS = [
  { day: "Day 1", date: "Dec22" },
  { day: "Day 2", date: "Dec 23" },
  { day: "Day 3", date: "Dec 24" },
]

export default function TripDetailScreen() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(0)
  const [activeDay, setActiveDay] = useState(0)

  return (
    <SafeAreaView style={styles.safe}>
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={colors.gradientNavy}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.circleBtn}>
            <ChevronLeft size={iconSize.detail} color={colors.white} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Goa Beach Escape</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.circleBtnSmall}>
              <Share2 size={iconSize.sm} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleBtnSmall}>
              <MoreVertical size={iconSize.sm} color={colors.white} />
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
      <View style={styles.dayWrap}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {DAYS.map((d, i) => (
            <TouchableOpacity
              key={d.day}
              style={[styles.dayPill, activeDay === i && styles.dayPillActive]}
              onPress={() => setActiveDay(i)}
            >
              <Text style={[styles.dayPillDay, activeDay === i && styles.dayPillTextActive]}>{d.day}</Text>
              <Text style={[styles.dayPillDate, activeDay === i && styles.dayPillTextActive]}>{d.date}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: spacing["5xl"], paddingHorizontal: spacing["3xl"] }}
      >
        <Text style={styles.sectionLabel}>ARRIVAL · DEC 22</Text>
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
              <View style={styles.tag}><Text style={styles.tagText}>Hotel</Text></View>
              <View style={styles.durationRow}>
                <Clock size={fonts.md} color={colors.textMutedLight} />
                <Text style={styles.duration}>30 min</Text>
              </View>
            </View>
            <View style={styles.tip}>
              <Sparkles size={spacing.lg} color={colors.accentOrange} />
              <Text style={styles.tipText}>Ask for a sea-view dorm — book early.</Text>
            </View>
          </View>
        </View>
        <View style={styles.transitRow}>
          <View style={styles.transitIcon} />
          <Text style={styles.transitText}>Rickshaw to Baga Beach</Text>
          <Text style={styles.transitMeta}>20 min   ₹80</Text>
        </View>
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
              <View style={styles.tag}><Text style={styles.tagText}>Beach</Text></View>
              <View style={styles.durationRow}>
                <Clock size={fonts.md} color={colors.textMutedLight} />
                <Text style={styles.duration}>90 min</Text>
              </View>
            </View>
            <View style={styles.tip}>
              <Sparkles size={spacing.lg} color={colors.accentOrange} />
              <Text style={styles.tipText}>Golden hour starts at 18:20 — arrive early for the best spot.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.refineBtn}>
          <Sparkles size={iconSize.sm} color={colors.primaryNavy} />
          <Text style={styles.refineText}>{en.tripDetail.refineWithAI}</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={{ flex: 1 }}>
          <LinearGradient
            colors={colors.gradientAmberOrange}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.bookBtn}
          >
            <Package size={iconSize.sm} color={colors.white} />
            <Text style={styles.bookText}>{en.tripDetail.bookAll}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bgScreen },
  root: { flex: 1, backgroundColor: colors.bgScreen },
  header: { paddingTop: 44, paddingHorizontal: spacing.xl, paddingBottom: spacing.sm },
  headerTop: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  circleBtn: { width: layout.iconButton.size, height: layout.iconButton.size, borderRadius: layout.iconButton.radius, backgroundColor: colors.whiteTransparent(0.15), alignItems: "center", justifyContent: "center" },
  circleBtnSmall: { width: layout.iconButton.small, height: layout.iconButton.small, borderRadius: layout.iconButton.smallRadius, backgroundColor: colors.whiteTransparent(0.15), alignItems: "center", justifyContent: "center" },
  headerTitle: { color: colors.white, fontSize: fonts["2xl"], fontWeight: fonts.weight.bold },
  headerActions: { flexDirection: "row", gap: spacing.sm },
  tabs: { flexDirection: "row", marginTop: spacing.xl },
  tab: { flex: 1, alignItems: "center", paddingVertical: spacing.xs },
  tabActive: { backgroundColor: colors.accentOrange, borderRadius: radius["2xl"], paddingHorizontal: spacing["4xl"], paddingVertical: spacing.sm },
  tabActiveText: { color: colors.white, fontWeight: fonts.weight.bold, fontSize: fonts.base },
  tabText: { color: colors.whiteTransparent(0.7), fontSize: fonts.base, paddingVertical: spacing.sm },
  dayWrap: { backgroundColor: colors.background, paddingVertical: spacing.lg, paddingHorizontal: spacing.xl },
  dayPill: { width: layout.quickItem.width, height: layout.quickItem.width, borderRadius: radius["2xl"], backgroundColor: colors.borderBottomNav, alignItems: "center", justifyContent: "center", marginRight: spacing.lg },
  dayPillActive: { backgroundColor: colors.primaryNavy },
  dayPillDay: { fontSize: fonts.base, fontWeight: fonts.weight.bold, color: colors.textDarkNavy },
  dayPillDate: { fontSize: fonts.xs, color: colors.textMutedLight, marginTop: spacing.xs },
  dayPillTextActive: { color: colors.white },
  sectionLabel: { fontSize: fonts.md, fontWeight: fonts.weight.bold, color: colors.textMutedLight, letterSpacing: 0.5, marginTop: spacing["2xl"], marginBottom: spacing.lg },
  timelineRow: { flexDirection: "row" },
  timelineDotWrap: { width: spacing["5xl"], alignItems: "center", paddingTop: spacing["3xl"] },
  timelineDot: { width: spacing.lg, height: spacing.lg, borderRadius: 7, borderWidth: 3, borderColor: colors.primaryNavy, backgroundColor: colors.white },
  timelineLine: { flex: 1, width: 2, backgroundColor: colors.borderLightGray, marginTop: spacing.xs },
  eventCard: { flex: 1, backgroundColor: colors.background, borderRadius: radius.lg, padding: spacing.xl, marginLeft: spacing.sm, ...shadows.card },
  eventTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  eventTitle: { fontSize: fonts.lg, fontWeight: fonts.weight.bold, color: colors.textDarkNavy },
  eventPrice: { fontSize: fonts.lg, fontWeight: fonts.weight.bold, color: colors.accentOrange },
  eventFree: { fontSize: fonts.lg, fontWeight: fonts.weight.bold, color: colors.accentOrange },
  eventMeta: { flexDirection: "row", alignItems: "center", gap: spacing.md, marginTop: spacing.sm },
  eventTime: { fontSize: fonts.md, color: colors.textDarkNavy, fontWeight: fonts.weight.semibold },
  tag: { backgroundColor: colors.bgLightBlue, borderRadius: spacing.md, paddingHorizontal: spacing.md, paddingVertical: 3 },
  tagText: { fontSize: fonts.sm, color: colors.accentBlue, fontWeight: fonts.weight.semibold },
  durationRow: { flexDirection: "row", alignItems: "center", gap: spacing.xs },
  duration: { fontSize: fonts.sm, color: colors.textMutedLight },
  tip: { flexDirection: "row", alignItems: "flex-start", gap: spacing.sm, backgroundColor: colors.bgOrangeLight, borderRadius: spacing.md, padding: spacing.md, marginTop: spacing.lg },
  tipText: { flex: 1, fontSize: fonts.md, color: colors.accentAmber, lineHeight: spacing["2xl"] },
  transitRow: { flexDirection: "row", alignItems: "center", paddingLeft: spacing["7xl"], paddingVertical: spacing.lg, gap: spacing.md },
  transitIcon: { width: spacing["3xl"], height: spacing["3xl"], borderRadius: spacing.md, backgroundColor: colors.borderLightGray },
  transitText: { flex: 1, fontSize: fonts.md, color: colors.textMutedLight },
  transitMeta: { fontSize: fonts.md, color: colors.textMutedLight },
  footer: { flexDirection: "row", gap: spacing.lg, padding: spacing.xl, paddingBottom: spacing["6xl"], backgroundColor: colors.bgScreen, borderTopWidth: 1, borderTopColor: colors.borderBottomNav },
  refineBtn: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: spacing.sm, height: spacing.buttonHeight, borderRadius: spacing.lg, borderWidth: 1.5, borderColor: colors.primaryNavy },
  refineText: { color: colors.primaryNavy, fontWeight: fonts.weight.bold, fontSize: fonts.base },
  bookBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: spacing.sm, height: spacing.buttonHeight, borderRadius: spacing.lg },
  bookText: { color: colors.white, fontWeight: fonts.weight.bold, fontSize: fonts.lg },
})
