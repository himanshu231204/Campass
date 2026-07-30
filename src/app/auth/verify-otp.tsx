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
import { colors, fonts, spacing, radius, shadows, iconSize } from "@/constants/theme"
import { en } from "@/translation/en"

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
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ChevronLeft size={iconSize.lg} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{en.auth.verifyOtp}</Text>
        <View style={{ width: 36 }} />
      </View>
      <View style={styles.headerDivider} />
      <View style={styles.body}>
        <View style={styles.iconBox}>
          <Phone size={iconSize["2xl"]} color={colors.white} />
        </View>
        <Text style={styles.title}>{en.auth.verifyYourNumber}</Text>
        <Text style={styles.subtitle}>{en.auth.weSentCode}</Text>
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
            <Text style={styles.primaryButtonText}>{en.auth.verifyOtp}</Text>
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
    alignItems: "center",
    paddingHorizontal: spacing["6xl"],
    paddingTop: spacing["8xl"],
  },
  iconBox: {
    width: 74,
    height: 74,
    borderRadius: radius["2xl"],
    backgroundColor: colors.primaryDark,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: fonts["4xl"],
    fontWeight: fonts.weight.bold,
    color: colors.textSecondary,
    marginTop: spacing["5xl"],
  },
  subtitle: {
    fontSize: fonts.md,
    color: colors.textMuted,
    textAlign: "center",
    marginTop: spacing.md,
    lineHeight: 20,
    fontWeight: fonts.weight.semibold,
  },
  otpRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: spacing.xl,
    marginTop: spacing["7xl"],
  },
  otpBox: {
    width: 62,
    height: 62,
    borderRadius: radius.button,
    fontSize: fonts["5xl"],
    fontWeight: fonts.weight.bold,
  },
  otpBoxFilled: {
    backgroundColor: colors.primaryDark,
    color: colors.white,
  },
  otpBoxEmpty: {
    backgroundColor: colors.background,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  resendText: {
    marginTop: spacing["5xl"],
    fontSize: fonts.md,
    color: colors.textMuted,
  },
  resendLink: {
    color: colors.primaryLight,
    fontWeight: fonts.weight.bold,
  },
  buttonWrapper: {
    width: "100%",
    marginTop: spacing["7xl"],
  },
  primaryButton: {
    height: spacing.buttonHeightLg,
    borderRadius: radius.button,
    alignItems: "center",
    justifyContent: "center",
    ...shadows.button,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: fonts.xl,
    fontWeight: fonts.weight.bold,
  },
})
