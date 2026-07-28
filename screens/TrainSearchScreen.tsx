import React from "react"
import {
  View,
  Text,
  StyleSheet,
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
} from "lucide-react-native"

const COLORS = {
  navy: "#1B2A6B",
  darkNavy: "#16225A",
  purple: "#3B1E8F",
  bg: "#E9EBEF",
  card: "#FFFFFF",
  text: "#1F2A44",
  subtext: "#9AA2B5",
  inputBg: "#F3F6FC",
  border: "#EEF1F6",
}

export default function TrainSearchScreen() {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <ChevronLeft size={22} color={COLORS.navy} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Train Search</Text>
        <View style={styles.backBtn} />
      </View>

      <View style={styles.content}>
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

          <View style={styles.inputRow}>
            <Calendar size={18} color={COLORS.purple} />
            <Text style={styles.inputTextBold}>Dec 22, Tue</Text>
          </View>

          <TouchableOpacity style={styles.inputRow}>
            <Users size={18} color={COLORS.purple} />
            <Text style={styles.inputText}>General Quota</Text>
            <ChevronRight size={18} color={COLORS.subtext} style={{ marginLeft: "auto" }} />
          </TouchableOpacity>
        </View>

        {/* Book button */}
        <TouchableOpacity activeOpacity={0.9}>
          <LinearGradient
            colors={[COLORS.navy, "#2E4CA0"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.bookBtn}
          >
            <Text style={styles.bookText}>Book Ticket</Text>
          </LinearGradient>
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
  content: { padding: 20 },
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
    marginBottom: 12,
  },
  inputText: { fontSize: 15, color: COLORS.subtext },
  inputTextBold: { fontSize: 15, color: COLORS.text, fontWeight: "600" },
  swapWrap: { alignItems: "center", marginVertical: -6, marginBottom: 6, zIndex: 2 },
  swapBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.purple,
    alignItems: "center",
    justifyContent: "center",
  },
  bookBtn: {
    height: 58,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  bookText: { color: "#fff", fontSize: 17, fontWeight: "700" },
})
