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

export default function CreateAccountScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(true);

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ChevronLeft size={20} color="#1e3a8a" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Create Account</Text>

        <View style={{ width: 36 }} />
      </View>
      <View style={styles.headerDivider} />

      <ScrollView
        style={styles.body}
        contentContainerStyle={styles.bodyContent}
        showsVerticalScrollIndicator={false}
      >
        <Field label="Full Name">
          <User size={18} color="#3b82f6" />
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#9ca3af"
            value={name}
            onChangeText={setName}
          />
        </Field>

        <Field label="Email Address">
          <Globe size={18} color="#3b82f6" />
          <TextInput
            style={styles.input}
            placeholder="arjun@college.edu"
            placeholderTextColor="#9ca3af"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </Field>

        <Field label="Phone Number">
          <Phone size={18} color="#3b82f6" />
          <TextInput
            style={styles.input}
            placeholder="+919876xxxx"
            placeholderTextColor="#9ca3af"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </Field>

        <Field label="Password">
          <Lock size={18} color="#3b82f6" />
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#9ca3af"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </Field>

        <Field label="Confirm Password">
          <Lock size={18} color="#3b82f6" />
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#9ca3af"
            value={confirm}
            onChangeText={setConfirm}
            secureTextEntry
          />
        </Field>

        <View style={styles.termsRow}>
          <TouchableOpacity onPress={() => setAgree(!agree)}>
            <CheckCircle2
              size={20}
              color={agree ? "#2563eb" : "#cbd5e1"}
              fill={agree ? "#2563eb" : "transparent"}
              strokeWidth={agree ? 2 : 1.5}
            />
          </TouchableOpacity>
          <Text style={styles.termsText}>
            I agree to the{" "}
            <Text style={styles.termsLink}>Terms of Service</Text> and{" "}
            <Text style={styles.termsLink}>Privacy Policy</Text>
          </Text>
        </View>

        <TouchableOpacity activeOpacity={0.9}>
          <LinearGradient
            colors={["#1e2a63", "#2a3f8f"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.primaryButton}
          >
            <Text style={styles.primaryButtonText}>Create Account</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Already have an account?{" "}
          <Text style={styles.footerLink}>Sign in</Text>
        </Text>
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
  },
  bodyContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
  },
  fieldGroup: {
    marginBottom: 18,
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
  termsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 22,
  },
  termsText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 12,
    color: "#9ca3af",
  },
  termsLink: {
    color: "#6b7cff",
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
  footerText: {
    textAlign: "center",
    marginTop: 20,
    color: "#9ca3af",
    fontSize: 13,
  },
  footerLink: {
    color: "#3b82f6",
    fontWeight: "700",
  },
});
