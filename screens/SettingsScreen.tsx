import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  StatusBar,
} from "react-native"
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

const COLORS = {
  navy: "#1B2A6B",
  blue: "#3B4FD6",
  bg: "#EEF1FB",
  card: "#FFFFFF",
  text: "#1F2A44",
  subtext: "#9AA2B5",
  green: "#0E9E6E",
  orange: "#F26522",
  sectionLabel: "#4C5DD4",
  border: "#F0F2F7",
}

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(true)
  const [push, setPush] = useState(true)
  const [email, setEmail] = useState(true)
  const [sms, setSms] = useState(false)

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <ChevronLeft size={22} color={COLORS.navy} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={styles.backBtn} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32, paddingHorizontal: 20 }}
      >
        {/* ACCOUNT */}
        <Text style={styles.sectionLabel}>ACCOUNT</Text>
        <View style={styles.card}>
          <Row icon={<User size={20} color="#fff" />} bg={COLORS.navy} label="Personal Info" chevron />
          <Divider />
          <Row icon={<Lock size={20} color="#fff" />} bg={COLORS.navy} label="Change Password" chevron />
          <Divider />
          <Row icon={<Layers size={20} color="#fff" />} bg={COLORS.navy} label="Linked Accounts" chevron />
        </View>

        {/* PREFERENCES */}
        <Text style={styles.sectionLabel}>PREFERENCES</Text>
        <View style={styles.card}>
          <Row icon={<Globe size={20} color="#fff" />} bg={COLORS.blue} label="Language" chevron />
          <Divider />
          <Row icon={<DollarSign size={20} color="#fff" />} bg={COLORS.blue} label="Currency" chevron />
          <Divider />
          <Row icon={<Compass size={20} color="#fff" />} bg={COLORS.blue} label="Units" chevron />
          <Divider />
          <Row
            icon={<Zap size={20} color="#fff" />}
            bg={COLORS.blue}
            label="Dark Mode"
            right={
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ true: COLORS.navy, false: "#D5D9E4" }}
                thumbColor="#fff"
              />
            }
          />
        </View>

        {/* NOTIFICATIONS */}
        <Text style={styles.sectionLabel}>NOTIFICATIONS</Text>
        <View style={styles.card}>
          <Row
            icon={<Bell size={20} color="#fff" />}
            bg={COLORS.green}
            label="Push Notifications"
            right={
              <Switch value={push} onValueChange={setPush} trackColor={{ true: COLORS.navy, false: "#D5D9E4" }} thumbColor="#fff" />
            }
          />
          <Divider />
          <Row
            icon={<MessageCircle size={20} color="#fff" />}
            bg={COLORS.green}
            label="Email Alerts"
            right={
              <Switch value={email} onValueChange={setEmail} trackColor={{ true: COLORS.navy, false: "#D5D9E4" }} thumbColor="#fff" />
            }
          />
          <Divider />
          <Row
            icon={<Phone size={20} color="#fff" />}
            bg={COLORS.green}
            label="SMS Alerts"
            right={
              <Switch value={sms} onValueChange={setSms} trackColor={{ true: COLORS.navy, false: "#D5D9E4" }} thumbColor="#fff" />
            }
          />
        </View>

        {/* PRIVACY */}
        <Text style={styles.sectionLabel}>PRIVACY</Text>
        <View style={styles.card}>
          <Row icon={<Navigation size={20} color="#fff" />} bg={COLORS.orange} label="Location Sharing" chevron />
          <Divider />
          <Row icon={<Shield size={20} color="#fff" />} bg={COLORS.orange} label="Data & Privacy" chevron />
          <Divider />
          <Row icon={<Flag size={20} color="#fff" />} bg={COLORS.orange} label="Delete Account" chevron />
        </View>
      </ScrollView>
    </View>
  )
}

function Row({
  icon,
  bg,
  label,
  chevron,
  right,
}: {
  icon: React.ReactNode
  bg: string
  label: string
  chevron?: boolean
  right?: React.ReactNode
}) {
  return (
    <TouchableOpacity style={styles.row} activeOpacity={0.7}>
      <View style={[styles.rowIcon, { backgroundColor: bg }]}>{icon}</View>
      <Text style={styles.rowLabel}>{label}</Text>
      {right}
      {chevron && <ChevronRight size={20} color={COLORS.subtext} />}
    </TouchableOpacity>
  )
}

function Divider() {
  return <View style={styles.divider} />
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
    backgroundColor: COLORS.bg,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: { fontSize: 18, fontWeight: "700", color: COLORS.text },
  sectionLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: COLORS.sectionLabel,
    letterSpacing: 0.5,
    marginTop: 22,
    marginBottom: 12,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    paddingHorizontal: 16,
    shadowColor: "#1B2A6B",
    shadowOpacity: 0.04,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },
  rowIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  rowLabel: { flex: 1, fontSize: 15, fontWeight: "600", color: COLORS.text },
  divider: { height: 1, backgroundColor: COLORS.border },
})
