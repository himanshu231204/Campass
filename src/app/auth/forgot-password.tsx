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
import { ChevronLeft, Globe, Phone } from "lucide-react-native"
import { useRouter } from "expo-router"
import { colors, fonts, spacing, radius, shadows, iconSize } from "@/constants/theme"
import { layout } from "@/constants/layout"
import { en } from "@/translation/en"

export default function ForgetPasswordScreen() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ChevronLeft size={iconSize.lg} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{en.auth.forgetPasswordTitle}</Text>
        <View style={{ width: 36 }} />
      </View>
      <View style={styles.headerDivider} />
      <View style={styles.body}>
        <Text style={styles.label}>{en.auth.emailAddress}</Text>
        <View style={styles.inputWrapper}>
          <Globe size={iconSize.md} color={colors.primaryLight} />
          <TextInput
            style={styles.input}
            placeholder={en.auth.emailPlaceholder3}
            placeholderTextColor={colors.textMuted}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>
        <Text style={styles.orText}>{en.auth.or}</Text>
        <Text style={styles.label}>{en.auth.phoneNumber}</Text>
        <View style={styles.inputWrapper}>
          <Phone size={iconSize.md} color={colors.primaryLight} />
          <TextInput
            style={styles.input}
            placeholder={en.auth.phonePlaceholder2}
            placeholderTextColor={colors.textMuted}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>
        <Text style={[styles.label, { marginTop: spacing["5xl"] }]}>
          {en.auth.submitOtp}
        </Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.input, styles.otpInput]}
            placeholder={en.auth.otpPlaceholder}
            placeholderTextColor={colors.textMuted}
            value={otp}
            onChangeText={setOtp}
            keyboardType="number-pad"
            textAlign="center"
          />
        </View>
        <TouchableOpacity style={styles.sendOtpWrapper} onPress={() => {}}>
          <Text style={styles.sendOtpText}>{en.auth.sendOtp}</Text>
        </TouchableOpacity>
        <Text style={styles.resendText}>
          {en.auth.didntReceiveCode}{" "}
          <Text style={styles.resendLink}>{en.auth.resendIn}</Text>
        </Text>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.buttonWrapper}
          onPress={() => router.replace("/home")}
        >
          <LinearGradient
            colors={colors.gradientButton}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.primaryButton}
          >
            <Text style={styles.primaryButtonText}>{en.auth.submit}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing["5xl"],
    paddingVertical: spacing.lg,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: radius.xl,
    backgroundColor: colors.backgroundMuted,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: fonts["2xl"],
    fontWeight: fonts.weight.bold,
    color: colors.textSecondary,
  },
  headerDivider: {
    height: 1,
    backgroundColor: colors.borderMuted,
  },
  body: {
    flex: 1,
    paddingHorizontal: spacing["6xl"],
    paddingTop: spacing["5xl"],
  },
  label: {
    fontSize: fonts.md,
    fontWeight: fonts.weight.bold,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.backgroundInput,
    borderRadius: radius.full,
    paddingHorizontal: spacing.xl,
    height: spacing.inputHeight,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  input: {
    flex: 1,
    marginLeft: spacing.md,
    fontSize: fonts.lg,
    color: colors.text,
  },
  otpInput: {
    marginLeft: 0,
    letterSpacing: 2,
  },
  orText: {
    textAlign: "center",
    fontSize: fonts.md,
    fontWeight: fonts.weight.bold,
    color: colors.text,
    marginVertical: spacing["2xl"],
  },
  sendOtpWrapper: {
    marginTop: spacing["4xl"],
  },
  sendOtpText: {
    color: colors.primaryLight,
    fontSize: fonts["4xl"],
    fontWeight: fonts.weight.bold,
  },
  resendText: {
    textAlign: "center",
    marginTop: spacing["8xl"],
    fontSize: fonts.md,
    color: colors.textMuted,
  },
  resendLink: {
    color: colors.primaryLight,
    fontWeight: fonts.weight.bold,
  },
  buttonWrapper: {
    marginTop: spacing["5xl"],
  },
  primaryButton: {
    height: layout.button.heightLg,
    borderRadius: radius.button,
    alignItems: "center",
    justifyContent: "center",
    ...shadows.button,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: fonts["2xl"],
    fontWeight: fonts.weight.bold,
  },
})
