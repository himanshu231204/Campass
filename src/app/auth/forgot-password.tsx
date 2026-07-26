import React, { useState } from "react"
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
import { Globe, Phone } from "lucide-react-native"

export default function ForgetPasswordScreen() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.headerTitle}>Forget Password</Text>

      <View style={styles.body}>
        <Text style={styles.label}>Email Address</Text>
        <View style={styles.inputWrapper}>
          <Globe size={18} color="#3b82f6" />
          <TextInput
            style={styles.input}
            placeholder="email@gmail.com"
            placeholderTextColor="#9ca3af"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <Text style={styles.orText}>OR</Text>

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputWrapper}>
          <Phone size={18} color="#3b82f6" />
          <TextInput
            style={styles.input}
            placeholder="+91987xxxxxxx"
            placeholderTextColor="#9ca3af"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        <Text style={[styles.label, { marginTop: 24 }]}>Submit OTP</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.input, styles.otpInput]}
            placeholder="OTP"
            placeholderTextColor="#9ca3af"
            value={otp}
            onChangeText={setOtp}
            keyboardType="number-pad"
            textAlign="center"
          />
        </View>

        <TouchableOpacity style={styles.sendOtpWrapper}>
          <Text style={styles.sendOtpText}>Send OTP</Text>
        </TouchableOpacity>

        <Text style={styles.resendText}>
          Didn&apos;t receive code? <Text style={styles.resendLink}>Resend in 0:48</Text>
        </Text>

        <TouchableOpacity activeOpacity={0.9} style={styles.buttonWrapper}>
          <LinearGradient
            colors={["#1e2a63", "#2a3f8f"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.primaryButton}
          >
            <Text style={styles.primaryButtonText}>Submit</Text>
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
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#374151",
    textAlign: "center",
    paddingVertical: 18,
  },
  body: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 24,
  },
  label: {
    fontSize: 13,
    fontWeight: "700",
    color: "#374151",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f8fd",
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 52,
    borderWidth: 1,
    borderColor: "#eef2f9",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#111827",
  },
  otpInput: {
    marginLeft: 0,
    letterSpacing: 2,
  },
  orText: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "700",
    color: "#111827",
    marginVertical: 18,
  },
  sendOtpWrapper: {
    marginTop: 22,
  },
  sendOtpText: {
    color: "#6b7cff",
    fontSize: 22,
    fontWeight: "700",
  },
  resendText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 13,
    color: "#9ca3af",
  },
  resendLink: {
    color: "#3b82f6",
    fontWeight: "700",
  },
  buttonWrapper: {
    marginTop: 24,
  },
  primaryButton: {
    height: 58,
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
    fontSize: 18,
    fontWeight: "700",
  },
})
