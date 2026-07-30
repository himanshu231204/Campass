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
import { useRouter } from "expo-router"
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
import { colors, fonts, spacing, radius, shadows, iconSize } from "../../constants/theme"
import { en } from "../../translation/en"
import { layout } from "../../constants/layout"

const { width: SCREEN_WIDTH } = Dimensions.get("window")
const H_PADDING = spacing["2xl"]

const tags = ["Hotels", "Flights", "Food", "Activities", "Nightlife"]

const weather = [
  { temp: "28°C", month: "Dec", Icon: Sun },
  { temp: "27°C", month: "Jan", Icon: Sun },
  { temp: "29°C", month: "Feb", Icon: CloudSun },
  { temp: "32°C", month: "Mar", Icon: CloudSun },
]

const foods = [
  { name: "Fish Curry Rice", price: "120", tag: "Must Try", accent: colors.accentOrange },
  { name: "Bebinca", price: "80", tag: "Dessert", accent: colors.accentOrange },
  { name: "Xacuti Chicken", price: "80", tag: "Dessert", accent: colors.accentOrange },
  { name: "Feni Cocktail", price: "80", tag: "Dessert", accent: colors.accentOrange },
]

const attractions = [
  {
    name: "Baga Beach",
    tag: "Beach",
    rating: "4.9",
    entry: "Free",
    hours: "Open 24h",
    visit: "2-4 hrs",
    colors: colors.gradientBlueSky,
  },
  {
    name: "Fort Aguada",
    tag: "Heritage",
    rating: "4.7",
    entry: "₹25",
    hours: "9AM-6PM",
    visit: "1-2 hrs",
    colors: [colors.error, colors.warning] as [string, string],
  },
  {
    name: "Dudhsagar Falls",
    tag: "Nature",
    rating: "4.8",
    entry: "₹400",
    hours: "7AM-5PM",
    visit: "3-5 hrs",
    colors: [colors.success, colors.successLight] as [string, string],
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
  en.safety.tip1,
  en.safety.tip2,
  en.safety.tip3,
  en.safety.tip4,
]

const budgetLines = [
  { label: "Stay", value: "₹1,800" },
  { label: "Food", value: "₹600" },
  { label: "Transport", value: "₹800" },
  { label: "Activities", value: "₹700" },
  { label: "Misc", value: "₹600" },
]

export default function ExploreDetailsScreen() {
  const router = useRouter()
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: spacing["8xl"] }}
      >
        <LinearGradient
          colors={colors.gradientBlueSky}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.hero}
        >
          <View style={styles.heroTop}>
            <TouchableOpacity style={styles.heroBtn} onPress={() => router.back()}>
              <ChevronLeft size={iconSize.lg} color={colors.textBody} />
            </TouchableOpacity>
            <View style={styles.heroRight}>
              <View style={styles.heroBtn}>
                <Bookmark size={iconSize.md} color={colors.textBody} />
              </View>
              <View style={styles.heroBtn}>
                <Share2 size={iconSize.md} color={colors.textBody} />
              </View>
            </View>
          </View>
          <MapPin size={layout.statIcon.size} color={colors.whiteTransparent(0.4)} style={styles.heroPin} />
          <LinearGradient
            colors={[colors.success, colors.successLight] as [string, string]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.heroPill}
          />
        </LinearGradient>
        <View style={styles.titleRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Goa Beach Getaway</Text>
            <View style={styles.locRow}>
              <MapPin size={spacing.lg} color={colors.primaryMid} />
              <Text style={styles.locText}>North & South Goa, India</Text>
            </View>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.price}>₹4,500</Text>
            <Text style={styles.perPerson}>{en.exploreDetails.perPerson}</Text>
          </View>
        </View>
        <View style={styles.reviewRow}>
          {[0, 1, 2, 3, 4].map((s) => (
            <Star
              key={s}
              size={iconSize.sm}
              color={colors.accentAmber}
              fill={s < 4 ? colors.accentAmber : "none"}
            />
          ))}
          <Text style={styles.ratingBold}>4.8</Text>
          <Text style={styles.reviewCount}>· 2,841 reviews</Text>
        </View>
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
        <View style={styles.aiCard}>
          <View style={styles.aiTitleRow}>
            <Sparkles size={iconSize.sm} color={colors.primaryMid} />
            <Text style={styles.aiTitle}>{en.exploreDetails.aiSummary}</Text>
          </View>
          <Text style={styles.aiText}>
            Goa blends Portuguese heritage with India&apos;s most vibrant beach
            culture. Ideal for budget travellers—dozens of hostels under
            ₹700/night, world-class street food for under ₹150, and free-entry
            beaches. Best explored over 4-5 days.
          </Text>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoCard}>
            <View style={styles.infoHead}>
              <CalendarDays size={fonts.lg} color={colors.primaryMid} />
              <Text style={styles.infoLabel}>{en.exploreDetails.bestTime}</Text>
            </View>
            <Text style={styles.infoValue}>November – February</Text>
            <Text style={styles.infoDesc}>
              Dry, sunny, peak-season prices. Monsoon (Jun–Sep) is lush but some
              beaches close.
            </Text>
          </View>
          <View style={styles.infoCard}>
            <View style={styles.infoHead}>
              <Globe size={fonts.lg} color={colors.primaryMid} />
              <Text style={styles.infoLabel}>{en.exploreDetails.language}</Text>
            </View>
            <Text style={styles.infoValue}>Konkani, Portuguese (signs), Hindi, English widely spoken</Text>
          </View>
        </View>
        <View style={styles.weatherCard}>
          <View style={styles.weatherHead}>
            <CloudSun size={iconSize.sm} color={colors.primaryMid} />
            <Text style={styles.weatherTitle}>{en.exploreDetails.weatherSnapshot}</Text>
          </View>
          <View style={styles.weatherRow}>
            {weather.map((w, i) => (
              <View key={i} style={styles.weatherItem}>
                <View style={styles.weatherIcon}>
                  <w.Icon size={iconSize.lg} color={colors.accentAmber} />
                </View>
                <Text style={styles.weatherTemp}>{w.temp}</Text>
                <Text style={styles.weatherMonth}>{w.month}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>{en.exploreDetails.localFoodsToTry}</Text>
          <Text style={styles.link}>{en.home.seeAll}</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.foodRow}
        >
          {foods.map((f, i) => (
            <View key={i} style={styles.foodCard}>
              <View style={styles.foodIconWrap}>
                <Utensils size={fonts["4xl"]} color={colors.accentAmber} />
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
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>{en.exploreDetails.nearbyAttractions}</Text>
          <Text style={styles.link}>{en.home.seeAll}</Text>
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
                size={layout.iconButton.small}
                color={colors.whiteTransparent(0.4)}
                style={styles.attractionPin}
              />
            </LinearGradient>
            <View style={styles.attractionBody}>
              <View style={styles.attractionTitleRow}>
                <Text style={styles.attractionName}>{a.name}</Text>
                <View style={styles.ratingPill}>
                  <Star size={fonts.sm} color={colors.accentAmber} fill={colors.accentAmber} />
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
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>{en.exploreDetails.nearbyRestaurants}</Text>
          <Text style={styles.link}>{en.home.seeAll}</Text>
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
                <Star size={fonts.sm} color={colors.accentAmber} fill={colors.accentAmber} />
              </View>
            </View>
          </View>
        ))}
        <View style={styles.plainCard}>
          <Text style={styles.plainTitle}>{en.exploreDetails.safetyTips}</Text>
          {safety.map((s, i) => (
            <View key={i} style={styles.safetyRow}>
              <Text style={styles.safetyNum}>{i + 1}</Text>
              <Text style={styles.safetyText}>{s}</Text>
            </View>
          ))}
        </View>
        <View style={styles.plainCard}>
          <View style={styles.budgetHead}>
            <Text style={styles.plainTitle}>{en.exploreDetails.budgetImpact}</Text>
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
        <View style={styles.ctaRow}>
          <TouchableOpacity style={styles.saveBtn} activeOpacity={0.8}>
            <Text style={styles.saveBtnText}>{en.exploreDetails.savePlace}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.85} onPress={() => router.push("/trips")}>
            <LinearGradient
              colors={colors.gradientHeader}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.addBtn}
            >
              <Text style={styles.addBtnText}>{en.exploreDetails.addToTrip}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.9} style={{ marginHorizontal: H_PADDING }} onPress={() => router.push("/budget")}>
          <LinearGradient
            colors={[colors.warning, colors.accentAmber] as [string, string]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.planBtn}
          >
            <Text style={styles.planBtnText}>{en.exploreDetails.planTripWithAI}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.backgroundMuted },
  hero: {
    height: 220,
    paddingHorizontal: H_PADDING,
    paddingTop: spacing.lg,
  },
  heroTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heroRight: { flexDirection: "row", gap: spacing.md },
  heroBtn: {
    width: layout.iconButton.size,
    height: layout.iconButton.size,
    borderRadius: layout.iconButton.radius,
    backgroundColor: colors.whiteTransparent(0.9),
    alignItems: "center",
    justifyContent: "center",
  },
  heroPin: { position: "absolute", top: 80, alignSelf: "center" },
  heroPill: {
    position: "absolute",
    bottom: spacing["3xl"],
    left: H_PADDING,
    right: H_PADDING,
    height: layout.iconButton.small,
    borderRadius: radius["2xl"],
  },
  titleRow: {
    flexDirection: "row",
    paddingHorizontal: H_PADDING,
    marginTop: spacing.xl,
    alignItems: "flex-start",
  },
  title: { fontSize: fonts["4xl"], fontWeight: fonts.weight.extrabold, color: colors.textDark },
  locRow: { flexDirection: "row", alignItems: "center", gap: spacing.xs, marginTop: spacing.sm },
  locText: { fontSize: fonts.md, color: colors.textSub },
  price: { fontSize: fonts["4xl"], fontWeight: fonts.weight.extrabold, color: colors.primary },
  perPerson: { fontSize: fonts.xs, color: colors.textGray },
  reviewRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    paddingHorizontal: H_PADDING,
    marginTop: spacing.md,
  },
  ratingBold: {
    fontSize: fonts.base,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
    marginLeft: spacing.sm,
  },
  reviewCount: { fontSize: fonts.md, color: colors.textGray },
  tagRow: {
    paddingHorizontal: H_PADDING,
    gap: spacing.sm,
    marginTop: spacing.lg,
  },
  tag: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.bgLightBlue,
    backgroundColor: colors.backgroundInput,
  },
  tagText: { fontSize: fonts.sm, fontWeight: fonts.weight.semibold, color: colors.primaryMid },
  aiCard: {
    marginHorizontal: H_PADDING,
    marginTop: spacing["2xl"],
    backgroundColor: colors.backgroundInput,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
    padding: spacing.xl,
  },
  aiTitleRow: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  aiTitle: { fontSize: fonts.base, fontWeight: fonts.weight.bold, color: colors.primary },
  aiText: { fontSize: fonts.md, color: colors.textBodySecondary, lineHeight: spacing["3xl"], marginTop: spacing.sm },
  infoRow: {
    flexDirection: "row",
    paddingHorizontal: H_PADDING,
    gap: spacing.lg,
    marginTop: spacing.xl,
  },
  infoCard: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: spacing.lg,
    padding: spacing.lg,
  },
  infoHead: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  infoLabel: {
    fontSize: fonts.xs,
    fontWeight: fonts.weight.bold,
    color: colors.textSub,
    letterSpacing: 0.5,
  },
  infoValue: {
    fontSize: fonts.base,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
    marginTop: spacing.sm,
  },
  infoDesc: { fontSize: fonts.xs, color: colors.textGray, marginTop: spacing.xs, lineHeight: spacing.xl },
  weatherCard: {
    marginHorizontal: H_PADDING,
    marginTop: spacing.lg,
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    padding: spacing.xl,
  },
  weatherHead: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  weatherTitle: { fontSize: fonts.base, fontWeight: fonts.weight.bold, color: colors.textDark },
  weatherRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.lg,
  },
  weatherItem: { alignItems: "center", flex: 1 },
  weatherIcon: {
    width: layout.statIcon.size,
    height: layout.statIcon.size,
    borderRadius: layout.statIcon.radius,
    backgroundColor: colors.bgOrangeLight,
    alignItems: "center",
    justifyContent: "center",
  },
  weatherTemp: {
    fontSize: fonts.md,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
    marginTop: spacing.sm,
  },
  weatherMonth: { fontSize: fonts.xs, color: colors.textGray, marginTop: spacing.xs },
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: H_PADDING,
    marginTop: spacing["5xl"],
    marginBottom: spacing.lg,
  },
  sectionTitle: { fontSize: fonts.xl, fontWeight: fonts.weight.bold, color: colors.textDark },
  link: { fontSize: fonts.md, fontWeight: fonts.weight.semibold, color: colors.primaryMid },
  foodRow: { paddingHorizontal: H_PADDING, gap: spacing.lg },
  foodCard: {
    width: 140,
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  foodIconWrap: {
    height: 60,
    borderRadius: radius.md,
    backgroundColor: colors.bgOrangeLight,
    alignItems: "center",
    justifyContent: "center",
  },
  foodName: {
    fontSize: fonts.md,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
    marginTop: spacing.md,
  },
  foodMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing.sm,
  },
  foodPrice: { fontSize: fonts.sm, fontWeight: fonts.weight.bold, color: colors.primaryMid },
  foodTag: {
    backgroundColor: colors.bgOrangeLight,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.md,
  },
  foodTagText: { fontSize: fonts.xs, fontWeight: fonts.weight.bold },
  attractionCard: {
    marginHorizontal: H_PADDING,
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    marginBottom: spacing.lg,
    overflow: "hidden",
  },
  attractionBanner: {
    height: layout.header.height,
    padding: spacing.lg,
    justifyContent: "flex-end",
  },
  attractionPin: { position: "absolute", top: 26, alignSelf: "center" },
  attractionBannerText: { color: colors.white, fontWeight: fonts.weight.bold, fontSize: fonts.lg },
  attractionBody: { padding: spacing.lg },
  attractionTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  attractionName: { fontSize: fonts.xl, fontWeight: fonts.weight.bold, color: colors.textDark },
  ratingPill: { flexDirection: "row", alignItems: "center", gap: spacing.xs },
  ratingText: { fontSize: fonts.sm, fontWeight: fonts.weight.bold, color: colors.textBody },
  attractionTag: {
    alignSelf: "flex-start",
    backgroundColor: colors.backgroundInput,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xs,
    borderRadius: radius.md,
    marginTop: spacing.sm,
  },
  attractionTagText: { fontSize: fonts.sm, fontWeight: fonts.weight.semibold, color: colors.primaryMid },
  metaRow: {
    flexDirection: "row",
    marginTop: spacing.lg,
    gap: spacing.sm,
  },
  metaCol: {
    flex: 1,
    backgroundColor: colors.backgroundMuted,
    borderRadius: spacing.md,
    padding: spacing.md,
  },
  metaLabel: {
    fontSize: fonts.xs,
    fontWeight: fonts.weight.bold,
    color: colors.textGray,
    letterSpacing: 0.5,
  },
  metaValue: {
    fontSize: fonts.sm,
    fontWeight: fonts.weight.semibold,
    color: colors.textBody,
    marginTop: spacing.xs,
  },
  restaurantCard: {
    flexDirection: "row",
    gap: spacing.lg,
    marginHorizontal: H_PADDING,
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  restaurantImg: {
    width: 90,
    height: 90,
    borderRadius: radius.md,
    backgroundColor: colors.primaryLight,
  },
  restaurantName: { fontSize: fonts.xl, fontWeight: fonts.weight.bold, color: colors.textDark },
  restaurantType: { fontSize: fonts.md, color: colors.textSub, marginTop: spacing.xs },
  restaurantDist: { fontSize: fonts.md, color: colors.textBody, marginTop: spacing.xs },
  restaurantRating: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    alignSelf: "flex-end",
    marginTop: -spacing.lg,
  },
  plainCard: {
    marginHorizontal: H_PADDING,
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    padding: spacing.xl,
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
  },
  plainTitle: { fontSize: fonts.lg, fontWeight: fonts.weight.bold, color: colors.textDark },
  safetyRow: { flexDirection: "row", gap: spacing.md, marginTop: spacing.lg },
  safetyNum: { fontSize: fonts.sm, color: colors.textGray, width: 14 },
  safetyText: { flex: 1, fontSize: fonts.sm, color: colors.textSub, lineHeight: 17 },
  budgetHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  budgetRange: { fontSize: fonts.md, fontWeight: fonts.weight.bold, color: colors.primary },
  budgetLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.lg,
  },
  budgetLineLabel: { fontSize: fonts.md, color: colors.textSub },
  budgetLineValue: { fontSize: fonts.md, fontWeight: fonts.weight.bold, color: colors.textDark },
  budgetFootRow: { flexDirection: "row", gap: spacing.lg, marginTop: spacing.xl },
  budgetFootCol: {
    flex: 1,
    backgroundColor: colors.backgroundMuted,
    borderRadius: spacing.md,
    padding: spacing.md,
  },
  budgetFootLabel: { fontSize: fonts.xs, color: colors.textGray },
  budgetFootValue: {
    fontSize: fonts.sm,
    fontWeight: fonts.weight.bold,
    color: colors.textBody,
    marginTop: spacing.xs,
  },
  ctaRow: {
    flexDirection: "row",
    gap: spacing.lg,
    paddingHorizontal: H_PADDING,
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
  },
  saveBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.textLight,
    borderRadius: spacing.lg,
    paddingVertical: spacing.xl,
    alignItems: "center",
  },
  saveBtnText: { fontSize: fonts.base, fontWeight: fonts.weight.bold, color: colors.textBody },
  addBtn: {
    borderRadius: spacing.lg,
    paddingVertical: spacing.xl,
    alignItems: "center",
  },
  addBtnText: { fontSize: fonts.base, fontWeight: fonts.weight.bold, color: colors.white },
  planBtn: {
    borderRadius: radius.lg,
    paddingVertical: spacing.xl,
    alignItems: "center",
  },
  planBtnText: { fontSize: fonts.lg, fontWeight: fonts.weight.extrabold, color: colors.white },
})
