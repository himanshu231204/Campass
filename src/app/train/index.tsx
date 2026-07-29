import React from "react"
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
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
} from "lucide-react-native"
import { colors, fonts, spacing, radius, iconSize, shadows } from "../../constants/theme"
import { layout } from "../../constants/layout"
import { en } from "../../translation/en"

export default function TrainSearchScreen() {
  const router = useRouter()
  return (
    <SafeAreaView style={styles.safe}>
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <ChevronLeft size={iconSize.detail} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{en.train.title}</Text>
        <View style={styles.backBtn} />
      </View>
      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.inputRow}>
            <MapPin size={iconSize.md} color={colors.iconDeepPurple} />
            <Text style={styles.inputText}>{en.train.from}</Text>
          </View>
          <View style={styles.swapWrap}>
            <TouchableOpacity style={styles.swapBtn}>
              <ArrowUpDown size={iconSize.md} color={colors.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputRow}>
            <MapPin size={iconSize.md} color={colors.iconDeepPurple} />
            <Text style={styles.inputText}>{en.train.to}</Text>
          </View>
          <View style={styles.inputRow}>
            <Calendar size={iconSize.md} color={colors.iconDeepPurple} />
            <Text style={styles.inputTextBold}>{en.train.date}</Text>
          </View>
          <TouchableOpacity style={styles.inputRow}>
            <Users size={iconSize.md} color={colors.iconDeepPurple} />
            <Text style={styles.inputText}>{en.train.quota}</Text>
            <ChevronRight size={iconSize.md} color={colors.textMutedLight} style={{ marginLeft: "auto" }} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.9} onPress={() => router.push("/book-train")}>
          <LinearGradient
            colors={colors.gradientNavyLight}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.bookBtn}
          >
            <Text style={styles.bookText}>{en.train.bookTicket}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
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
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing["3xl"],
    backgroundColor: colors.background,
  },
  backBtn: {
    ...layout.iconButton,
    backgroundColor: colors.bgLightBlue,
  },
  headerTitle: { fontSize: fonts["2xl"], fontWeight: fonts.weight.bold, color: colors.textDarkNavy },
  content: { padding: spacing["3xl"] },
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
    marginBottom: spacing.lg,
  },
  inputText: { fontSize: fonts.lg, color: colors.textMutedLight },
  inputTextBold: { fontSize: fonts.lg, color: colors.textDarkNavy, fontWeight: fonts.weight.semibold },
  swapWrap: { alignItems: "center", marginVertical: -6, marginBottom: 6, zIndex: 2 },
  swapBtn: {
    ...layout.iconButton,
    backgroundColor: colors.deepPurple,
  },
  bookBtn: {
    height: layout.button.heightLg,
    borderRadius: radius.button,
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing["3xl"],
  },
  bookText: { color: colors.white, fontSize: fonts.xl, fontWeight: fonts.weight.bold },
})
