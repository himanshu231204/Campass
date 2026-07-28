import React, { useRef, useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { ChevronLeft, Phone } from "lucide-react-native"
import { useRouter } from "expo-router"

export default function VerifyOtpScreen() {
  const router = useRouter()
  const [otp, setOtp] = useState<string[]>(["", "", "", ""])
  const inputs = useRef<Array<TextInput | null>>([])

  const handleChange = (text: string, index: number) => {
    const next = [...otp]
    next[index] = text.slice(-1)
    setOtp(next)
    if (text && index < 3) {
      inputs.current[index + 1]?.focus()
    }
  }

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ChevronLeft size={20} color="#1e3a8a" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Verify OTP</Text>
        <View style={{ width: 36 }} />
      </View>
      <View style={styles.headerDivider} />

      <View style={styles.body}>
        <View style={styles.iconBox}>
          <Phone size={30} color="#ffffff" />
        </View>

        <Text style={styles.title}>Verify your number</Text>
        <Text style={styles.subtitle}>
          We sent a 4-digit code to your phone number
        </Text>

        <View style={styles.otpRow}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(el) => {
                inputs.current[index] = el
              }}
              style={[styles.otpBox, digit ? styles.otpBoxFilled : styles.otpBoxEmpty]}
              value={digit}
              onChangeText={(t) => handleChange(t, index)}
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
            />
          ))}
        </View>

        <Text style={styles.resendText}>
          Didn&apos;t receive code? <Text style={styles.resendLink}>Resend in 0:48</Text>
        </Text>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.buttonWrapper}
          onPress={() => router.replace("/(tabs)")}
        >
          <LinearGradient
            colors={["#1e2a63", "#2a3f8f"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.primaryButton}
          >
            <Text style={styles.primaryButtonText}>Verify OTP</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#eef2fb",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#374151",
  },
  headerDivider: {
    height: 1,
    backgroundColor: "#f1f1f4",
  },
  body: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 28,
    paddingTop: 40,
  },
  iconBox: {
    width: 74,
    height: 74,
    borderRadius: 20,
    backgroundColor: "#1e2a63",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#374151",
    marginTop: 26,
  },
  subtitle: {
    fontSize: 13,
    color: "#9ca3af",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 20,
    fontWeight: "600",
  },
  otpRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginTop: 34,
  },
  otpBox: {
    width: 62,
    height: 62,
    borderRadius: 16,
    fontSize: 24,
    fontWeight: "700",
  },
  otpBoxFilled: {
    backgroundColor: "#1e2a63",
    color: "#ffffff",
  },
  otpBoxEmpty: {
    backgroundColor: "#ffffff",
    color: "#111827",
    borderWidth: 1,
    borderColor: "#dbe3f4",
  },
  resendText: {
    marginTop: 26,
    fontSize: 13,
    color: "#9ca3af",
  },
  resendLink: {
    color: "#3b82f6",
    fontWeight: "700",
  },
  buttonWrapper: {
    width: "100%",
    marginTop: 30,
  },
  primaryButton: {
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#1e2a63",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "700",
  },
})
