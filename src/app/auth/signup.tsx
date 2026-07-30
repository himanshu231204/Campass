import { LinearGradient } from "expo-linear-gradient";
import {
  CheckCircle2,
  ChevronLeft,
  Globe,
  Lock,
  Phone,
  User,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { colors, fonts, spacing, radius, shadows, iconSize } from "@/constants/theme";
import { en } from "@/translation/en";

export default function CreateAccountScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(true);

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
        <Text style={styles.headerTitle}>{en.auth.createAccountTitle}</Text>
        <View style={{ width: 36 }} />
      </View>
      <View style={styles.headerDivider} />
      <ScrollView
        style={styles.body}
        contentContainerStyle={styles.bodyContent}
        showsVerticalScrollIndicator={false}
      >
        <Field label={en.auth.fullName}>
          <User size={iconSize.md} color={colors.primaryLight} />
          <TextInput
            style={styles.input}
            placeholder={en.auth.namePlaceholder}
            placeholderTextColor={colors.textMuted}
            value={name}
            onChangeText={setName}
          />
        </Field>
        <Field label={en.auth.emailAddress}>
          <Globe size={iconSize.md} color={colors.primaryLight} />
          <TextInput
            style={styles.input}
            placeholder={en.auth.emailPlaceholder2}
            placeholderTextColor={colors.textMuted}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </Field>
        <Field label={en.auth.phoneNumber}>
          <Phone size={iconSize.md} color={colors.primaryLight} />
          <TextInput
            style={styles.input}
            placeholder={en.auth.phonePlaceholder}
            placeholderTextColor={colors.textMuted}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </Field>
        <Field label={en.auth.password}>
          <Lock size={iconSize.md} color={colors.primaryLight} />
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor={colors.textMuted}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </Field>
        <Field label={en.auth.confirmPassword}>
          <Lock size={iconSize.md} color={colors.primaryLight} />
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor={colors.textMuted}
            value={confirm}
            onChangeText={setConfirm}
            secureTextEntry
          />
        </Field>
        <View style={styles.termsRow}>
          <TouchableOpacity onPress={() => setAgree(!agree)}>
            <CheckCircle2
              size={iconSize.lg}
              color={agree ? colors.primaryMid : colors.textLight}
              fill={agree ? colors.primaryMid : "transparent"}
              strokeWidth={agree ? 2 : 1.5}
            />
          </TouchableOpacity>
          <Text style={styles.termsText}>
            {en.auth.agreeTerms}{" "}
            <Text style={styles.termsLink}>{en.auth.termsOfService}</Text>{" "}
            {en.auth.and}{" "}
            <Text style={styles.termsLink}>{en.auth.privacyPolicy}</Text>
          </Text>
        </View>
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
            <Text style={styles.primaryButtonText}>
              {en.auth.createAccount}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/auth/login")}>
          <Text style={styles.footerText}>
            {en.auth.alreadyHaveAccount}{" "}
            <Text style={styles.footerLink}>{en.auth.signInLink}</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.fieldGroup}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>{children}</View>
    </View>
  );
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
  },
  bodyContent: {
    paddingHorizontal: spacing["5xl"],
    paddingTop: spacing["5xl"],
    paddingBottom: spacing["8xl"],
  },
  fieldGroup: {
    marginBottom: spacing["2xl"],
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
  termsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.xs,
    marginBottom: spacing["4xl"],
  },
  termsText: {
    flex: 1,
    marginLeft: spacing.md,
    fontSize: fonts.sm,
    color: colors.textMuted,
  },
  termsLink: {
    color: colors.primaryLight,
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
  footerText: {
    textAlign: "center",
    marginTop: spacing["3xl"],
    color: colors.textMuted,
    fontSize: fonts.md,
  },
  footerLink: {
    color: colors.primaryLight,
    fontWeight: fonts.weight.bold,
  },
});
