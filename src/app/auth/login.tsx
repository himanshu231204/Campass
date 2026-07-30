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
import { User, Lock, Globe, Compass } from "lucide-react-native"
import { useRouter } from "expo-router"
import { colors, fonts, spacing, radius, shadows, iconSize } from "@/constants/theme"
import { en } from "@/translation/en"

export default function SignInScreen() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={colors.gradientPrimary}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <View style={styles.logoBox}>
          <Compass size={iconSize["2xl"]} color={colors.white} />
        </View>
        <Text style={styles.welcomeTitle}>{en.auth.welcomeBack}</Text>
        <Text style={styles.welcomeSub}>{en.auth.nextAdventure}</Text>
      </LinearGradient>
      <View style={styles.body}>
        <Text style={styles.label}>{en.auth.emailMobile}</Text>
        <View style={styles.inputWrapper}>
          <User size={iconSize.md} color={colors.primaryLight} />
          <TextInput
            style={styles.input}
            placeholder={en.auth.emailPlaceholder}
            placeholderTextColor={colors.textMuted}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>
        <Text style={[styles.label, { marginTop: spacing["3xl"] }]}>
          {en.auth.password}
        </Text>
        <View style={styles.inputWrapper}>
          <Lock size={iconSize.md} color={colors.primaryLight} />
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor={colors.textMuted}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          style={styles.forgotWrapper}
          onPress={() => router.push("/auth/forgot-password")}
        >
          <Text style={styles.forgotText}>{en.auth.forgotPassword}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => router.replace("/home")}
        >
          <LinearGradient
            colors={colors.gradientButton}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.primaryButton}
          >
            <Text style={styles.primaryButtonText}>{en.auth.signIn}</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.dividerRow}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>{en.auth.orContinueWith}</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialButton} onPress={() => {}}>
            <Globe size={iconSize.md} color={colors.primaryLight} />
            <Text style={styles.socialText}>{en.auth.google}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={() => {}}>
            <Globe size={iconSize.md} color={colors.primaryLight} />
            <Text style={styles.socialText}>{en.auth.apple}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.push("/auth/signup")}>
          <Text style={styles.footerText}>
            {en.auth.newHere}{" "}
            <Text style={styles.footerLink}>{en.auth.createAccount}</Text>
          </Text>
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
    paddingTop: spacing["8xl"],
    paddingBottom: spacing["7xl"],
    paddingHorizontal: spacing["6xl"],
    borderBottomLeftRadius: radius.sm,
    borderBottomRightRadius: radius.sm,
  },
  logoBox: {
    width: 64,
    height: 64,
    borderRadius: radius.xl,
    backgroundColor: colors.whiteTransparent(0.12),
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.md,
  },
  welcomeTitle: {
    color: colors.white,
    fontSize: fonts["5xl"],
    fontWeight: fonts.weight.semibold,
    letterSpacing: 1,
    marginTop: spacing["2xl"],
  },
  welcomeSub: {
    color: colors.whiteTransparent(0.75),
    fontSize: fonts.md,
    marginTop: spacing.xs,
  },
  body: {
    flex: 1,
    paddingHorizontal: spacing["6xl"],
    paddingTop: spacing["6xl"],
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
  forgotWrapper: {
    alignSelf: "flex-end",
    marginTop: spacing.lg,
  },
  forgotText: {
    color: colors.primaryLight,
    fontSize: fonts.md,
    fontWeight: fonts.weight.semibold,
  },
  primaryButton: {
    height: spacing.buttonHeight,
    borderRadius: radius.button,
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.xl,
    ...shadows.button,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: fonts.xl,
    fontWeight: fonts.weight.bold,
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing["4xl"],
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    marginHorizontal: 12,
    color: colors.textMuted,
    fontSize: fonts.sm,
    fontWeight: fonts.weight.semibold,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing["4xl"],
    gap: spacing.lg,
  },
  socialButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: spacing.inputHeight,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.sm,
  },
  socialText: {
    fontSize: fonts.lg,
    fontWeight: fonts.weight.semibold,
    color: colors.textSecondary,
  },
  footer: {
    paddingBottom: spacing["7xl"],
    alignItems: "center",
  },
  footerText: {
    color: colors.textMuted,
    fontSize: fonts.md,
  },
  footerLink: {
    color: colors.primaryLight,
    fontWeight: fonts.weight.bold,
  },
})
