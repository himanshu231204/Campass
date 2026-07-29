import React from "react"
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native"
import { useRouter } from "expo-router"
import {
  ChevronLeft,
  Plus,
  Filter,
  Calendar,
  Utensils,
  Car,
  Activity,
  Building2,
} from "lucide-react-native"
import { colors, fonts, spacing, radius, iconSize, shadows } from "../../constants/theme"
import { layout } from "../../constants/layout"
import { en } from "../../translation/en"

type Expense = {
  title: string
  sub: string
  amount: string
  icon: React.ReactNode
  bg: string
}

const TODAY: Expense[] = [
  { title: "Food", sub: "Breakfast at Calangute", amount: "-¥280", icon: <Utensils size={iconSize["4xl"]} color={colors.white} />, bg: colors.successLight },
  { title: "Transport", sub: "Cab from Airport", amount: "-₹650", icon: <Car size={iconSize["4xl"]} color={colors.white} />, bg: colors.primaryNavy },
  { title: "Activities", sub: "Water sports booking", amount: "-₹1,200", icon: <Activity size={iconSize["4xl"]} color={colors.white} />, bg: colors.accentOrange },
]

const YESTERDAY: Expense[] = [
  { title: "Hotel", sub: "Zostel Goa-1 night", amount: "-₹699", icon: <Building2 size={iconSize["4xl"]} color={colors.white} />, bg: colors.accentBlue },
  { title: "Food", sub: "Dinner at Britto's", amount: "-₹699", icon: <Utensils size={iconSize["4xl"]} color={colors.white} />, bg: colors.successLight },
]

export default function ExpensesScreen() {
  const router = useRouter()
  return (
    <SafeAreaView style={styles.safe}>
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.circleBtn} onPress={() => router.back()}>
          <ChevronLeft size={iconSize["4xl"]} color={colors.accentBlue} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{en.expenses.title}</Text>
        <TouchableOpacity style={styles.circleBtn}>
          <Plus size={iconSize["4xl"]} color={colors.accentBlue} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: spacing["5xl"], paddingHorizontal: spacing["3xl"] }}
      >
        <View style={styles.filterRow}>
          <View style={styles.filterInput}>
            <Text style={styles.filterPlaceholder}>{en.expenses.allCategories}</Text>
            <Filter size={iconSize.md} color={colors.accentBlue} />
          </View>
          <TouchableOpacity style={styles.calBtn}>
            <Calendar size={iconSize.lg} color={colors.white} />
          </TouchableOpacity>
        </View>
        <SectionHeader title={en.expenses.today} />
        {TODAY.map((e, i) => <ExpenseCard key={i} expense={e} />)}
        <SectionHeader title={en.expenses.yesterday} />
        {YESTERDAY.map((e, i) => <ExpenseCard key={i} expense={e} />)}
      </ScrollView>
    </View>
    </SafeAreaView>
  )
}

function SectionHeader({ title }: { title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.seeAll}>{en.expenses.seeAll}</Text>
      </TouchableOpacity>
    </View>
  )
}

function ExpenseCard({ expense }: { expense: Expense }) {
  return (
    <View style={styles.expenseCard}>
      <View style={[styles.expenseIcon, { backgroundColor: expense.bg }]}>{expense.icon}</View>
      <View style={{ flex: 1 }}>
        <Text style={styles.expenseTitle}>{expense.title}</Text>
        <Text style={styles.expenseSub}>{expense.sub}</Text>
      </View>
      <Text style={styles.expenseAmount}>{expense.amount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bgScreen },
  root: { flex: 1, backgroundColor: colors.bgScreen },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingTop: spacing["9xl"], paddingBottom: spacing.xl, paddingHorizontal: spacing["3xl"], backgroundColor: colors.background },
  circleBtn: { width: layout.iconButton.size, height: layout.iconButton.size, borderRadius: layout.iconButton.radius, backgroundColor: colors.bgScreen, alignItems: "center", justifyContent: "center" },
  headerTitle: { fontSize: fonts["2xl"], fontWeight: fonts.weight.bold, color: colors.textDarkNavy },
  filterRow: { flexDirection: "row", alignItems: "center", gap: spacing.lg, marginTop: spacing["2xl"] },
  filterInput: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: colors.background, borderRadius: spacing.lg, paddingHorizontal: spacing.xl, height: spacing.inputHeight },
  filterPlaceholder: { color: colors.textMutedLabel, fontSize: fonts.lg },
  calBtn: { width: 52, height: 52, borderRadius: 26, backgroundColor: colors.primaryNavy, alignItems: "center", justifyContent: "center" },
  sectionHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: spacing["4xl"], marginBottom: spacing.lg },
  sectionTitle: { fontSize: fonts.xl, fontWeight: fonts.weight.bold, color: colors.textDarkNavy },
  seeAll: { color: colors.accentBlue, fontSize: fonts.md, fontWeight: fonts.weight.semibold },
  expenseCard: { flexDirection: "row", alignItems: "center", backgroundColor: colors.background, borderRadius: radius.lg, padding: spacing.lg, marginBottom: spacing.lg, ...shadows.card },
  expenseIcon: { width: layout.statIcon.size, height: layout.statIcon.size, borderRadius: spacing["5xl"], alignItems: "center", justifyContent: "center", marginRight: spacing.lg },
  expenseTitle: { fontSize: fonts.lg, fontWeight: fonts.weight.bold, color: colors.textDarkNavy },
  expenseSub: { fontSize: fonts.md, color: colors.textMutedLabel, marginTop: spacing.xs },
  expenseAmount: { fontSize: fonts.lg, fontWeight: fonts.weight.bold, color: colors.errorLight },
})
