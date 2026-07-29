import React, { useState } from "react"
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  StatusBar,
} from "react-native"
import { useRouter } from "expo-router"
import {
  ChevronLeft,
  ChevronRight,
  User,
  Lock,
  Layers,
  Globe,
  DollarSign,
  Compass,
  Zap,
  Bell,
  MessageCircle,
  Phone,
  Navigation,
  Shield,
  Flag,
} from "lucide-react-native"
import { colors, fonts, spacing, radius, iconSize, shadows } from "../../constants/theme"
import { layout } from "../../constants/layout"
import { en } from "../../translation/en"

export default function SettingsScreen() {
  const router = useRouter()
  const [darkMode, setDarkMode] = useState(true)
  const [push, setPush] = useState(true)
  const [email, setEmail] = useState(true)
  const [sms, setSms] = useState(false)

  return (
    <SafeAreaView style={styles.safe}>
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <ChevronLeft size={iconSize.detail} color={colors.primaryNavy} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{en.settings.title}</Text>
        <View style={styles.backBtn} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32, paddingHorizontal: spacing["3xl"] }}
      >
        <Text style={styles.sectionLabel}>{en.settings.account}</Text>
        <View style={styles.card}>
          <Row icon={<User size={iconSize.lg} color={colors.white} />} bg={colors.primaryNavy} label={en.settings.personalInfo} chevron />
          <Divider />
          <Row icon={<Lock size={iconSize.lg} color={colors.white} />} bg={colors.primaryNavy} label={en.settings.changePassword} chevron />
          <Divider />
          <Row icon={<Layers size={iconSize.lg} color={colors.white} />} bg={colors.primaryNavy} label={en.settings.linkedAccounts} chevron />
        </View>
        <Text style={styles.sectionLabel}>{en.settings.preferences}</Text>
        <View style={styles.card}>
          <Row icon={<Globe size={iconSize.lg} color={colors.white} />} bg={colors.accentBlue} label={en.settings.language} chevron />
          <Divider />
          <Row icon={<DollarSign size={iconSize.lg} color={colors.white} />} bg={colors.accentBlue} label={en.settings.currency} chevron />
          <Divider />
          <Row icon={<Compass size={iconSize.lg} color={colors.white} />} bg={colors.accentBlue} label={en.settings.units} chevron />
          <Divider />
          <Row icon={<Zap size={iconSize.lg} color={colors.white} />} bg={colors.accentBlue} label={en.settings.darkMode}
            right={<Switch value={darkMode} onValueChange={setDarkMode} trackColor={{ true: colors.primaryNavy, false: colors.switchTrackOff }} thumbColor={colors.white} />}
          />
        </View>
        <Text style={styles.sectionLabel}>{en.settings.notifications}</Text>
        <View style={styles.card}>
          <Row icon={<Bell size={iconSize.lg} color={colors.white} />} bg={colors.successLight} label={en.settings.pushNotifications}
            right={<Switch value={push} onValueChange={setPush} trackColor={{ true: colors.primaryNavy, false: colors.switchTrackOff }} thumbColor={colors.white} />}
          />
          <Divider />
          <Row icon={<MessageCircle size={iconSize.lg} color={colors.white} />} bg={colors.successLight} label={en.settings.emailAlerts}
            right={<Switch value={email} onValueChange={setEmail} trackColor={{ true: colors.primaryNavy, false: colors.switchTrackOff }} thumbColor={colors.white} />}
          />
          <Divider />
          <Row icon={<Phone size={iconSize.lg} color={colors.white} />} bg={colors.successLight} label={en.settings.smsAlerts}
            right={<Switch value={sms} onValueChange={setSms} trackColor={{ true: colors.primaryNavy, false: colors.switchTrackOff }} thumbColor={colors.white} />}
          />
        </View>
        <Text style={styles.sectionLabel}>{en.settings.privacy}</Text>
        <View style={styles.card}>
          <Row icon={<Navigation size={iconSize.lg} color={colors.white} />} bg={colors.accentOrange} label={en.settings.locationSharing} chevron />
          <Divider />
          <Row icon={<Shield size={iconSize.lg} color={colors.white} />} bg={colors.accentOrange} label={en.settings.dataPrivacy} chevron />
          <Divider />
          <Row icon={<Flag size={iconSize.lg} color={colors.white} />} bg={colors.accentOrange} label={en.settings.deleteAccount} chevron />
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  )
}

function Row({ icon, bg, label, chevron, right }: { icon: React.ReactNode; bg: string; label: string; chevron?: boolean; right?: React.ReactNode }) {
  return (
    <TouchableOpacity style={styles.row} activeOpacity={0.7}>
      <View style={[styles.rowIcon, { backgroundColor: bg }]}>{icon}</View>
      <Text style={styles.rowLabel}>{label}</Text>
      {right}
      {chevron && <ChevronRight size={iconSize.lg} color={colors.textMutedLight} />}
    </TouchableOpacity>
  )
}

function Divider() {
  return <View style={styles.divider} />
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bgScreen },
  root: { flex: 1, backgroundColor: colors.bgScreen },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingTop: spacing["9xl"], paddingBottom: spacing.xl, paddingHorizontal: spacing["3xl"], backgroundColor: colors.background },
  backBtn: { ...layout.iconButton, backgroundColor: colors.bgScreen, alignItems: "center", justifyContent: "center" },
  headerTitle: { fontSize: fonts["2xl"], fontWeight: fonts.weight.bold, color: colors.textDarkNavy },
  sectionLabel: { fontSize: fonts.md, fontWeight: fonts.weight.bold, color: colors.accentBlue, letterSpacing: 0.5, marginTop: spacing["4xl"], marginBottom: spacing.lg },
  card: { backgroundColor: colors.background, borderRadius: radius["2xl"], paddingHorizontal: spacing.xl, ...shadows.card },
  row: { flexDirection: "row", alignItems: "center", paddingVertical: spacing.lg },
  rowIcon: { ...layout.iconButton, alignItems: "center", justifyContent: "center", marginRight: spacing.lg },
  rowLabel: { flex: 1, fontSize: fonts.lg, fontWeight: fonts.weight.semibold, color: colors.textDarkNavy },
  divider: { height: 1, backgroundColor: colors.borderBottomNav },
})
