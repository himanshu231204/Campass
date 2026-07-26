import React, { useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { User, Lock, Globe, Compass } from "lucide-react-native"

const { width } = Dimensions.get("window")

export default function SignInScreen() {
 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <LinearGradient
        colors={["#1e3a8a", "#243b7a"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <SafeAreaView>
          <View style={styles.logoBox}>
            <Compass size={30} color="#ffffff" />
          </View>
          <Text style={styles.welcomeTitle}>WELCOME BACK</Text>
          <Text style={styles.welcomeSub}>Yours Next Adventure Awaits</Text>
        </SafeAreaView>
      </LinearGradient>

      {/* Body */}
      <View style={styles.body}>
        <Text style={styles.label}>Email Address / Mobile</Text>
        <View style={styles.inputWrapper}>
          <User size={18} color="#3b82f6" />
          <TextInput
            style={styles.input}
            placeholder="student@college.edu"
            placeholderTextColor="#9ca3af"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <Text style={[styles.label, { marginTop: 20 }]}>Password</Text>
        <View style={styles.inputWrapper}>
          <Lock size={18} color="#3b82f6" />
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#9ca3af"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.forgotWrapper}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9}>
          <LinearGradient
            colors={["#1e2a63", "#2a3f8f"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.primaryButton}
          >
            <Text style={styles.primaryButtonText}>Sign In</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.dividerRow}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or continue with</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialButton}>
            <Globe size={18} color="#3b82f6" />
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Globe size={18} color="#3b82f6" />
            <Text style={styles.socialText}>Apple</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          New here? <Text style={styles.footerLink}>Create account</Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 28,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  logoBox: {
    width: 64,
    height: 64,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.12)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  welcomeTitle: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 1,
    marginTop: 18,
  },
  welcomeSub: {
    color: "#c7d2fe",
    fontSize: 13,
    marginTop: 4,
  },
  body: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 28,
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
  forgotWrapper: {
    alignSelf: "flex-end",
    marginTop: 14,
  },
  forgotText: {
    color: "#3b82f6",
    fontSize: 13,
    fontWeight: "600",
  },
  primaryButton: {
    height: 54,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
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
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 22,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#e5e7eb",
  },
  dividerText: {
    marginHorizontal: 12,
    color: "#9ca3af",
    fontSize: 12,
    fontWeight: "600",
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
    gap: 14,
  },
  socialButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 52,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    gap: 8,
  },
  socialText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
  },
  footer: {
    paddingBottom: 30,
    alignItems: "center",
  },
  footerText: {
    color: "#9ca3af",
    fontSize: 13,
  },
  footerLink: {
    color: "#3b82f6",
    fontWeight: "700",
  },
})
