import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native"
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

const COLORS = {
  navy: "#1B2A6B",
  blue: "#3B4FD6",
  bg: "#EEF1FB",
  card: "#FFFFFF",
  text: "#1F2A44",
  subtext: "#8A93A8",
  green: "#0E9E6E",
  orange: "#F26522",
  red: "#E5484D",
  link: "#3B4FD6",
  border: "#EEF1F6",
}

type Expense = {
  title: string
  sub: string
  amount: string
  icon: React.ReactNode
  bg: string
}

const TODAY: Expense[] = [
  { title: "Food", sub: "Breakfast at Calangute", amount: "-¥280", icon: <Utensils size={22} color="#fff" />, bg: COLORS.green },
  { title: "Transport", sub: "Cab from Airport", amount: "-₹650", icon: <Car size={22} color="#fff" />, bg: COLORS.navy },
  { title: "Activities", sub: "Water sports booking", amount: "-₹1,200", icon: <Activity size={22} color="#fff" />, bg: COLORS.orange },
]

const YESTERDAY: Expense[] = [
  { title: "Hotel", sub: "Zostel Goa-1 night", amount: "-₹699", icon: <Building2 size={22} color="#fff" />, bg: COLORS.blue },
  { title: "Food", sub: "Dinner at Britto's", amount: "-₹699", icon: <Utensils size={22} color="#fff" />, bg: COLORS.green },
]

export default function ExpensesScreen() {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.circleBtn}>
          <ChevronLeft size={22} color={COLORS.blue} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Expenses</Text>
        <TouchableOpacity style={styles.circleBtn}>
          <Plus size={22} color={COLORS.blue} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24, paddingHorizontal: 20 }}
      >
        {/* Filter row */}
        <View style={styles.filterRow}>
          <View style={styles.filterInput}>
            <Text style={styles.filterPlaceholder}>All categories</Text>
            <Filter size={18} color={COLORS.blue} />
          </View>
          <TouchableOpacity style={styles.calBtn}>
            <Calendar size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Today */}
        <SectionHeader title="Today · Dec 22" />
        {TODAY.map((e, i) => (
          <ExpenseCard key={i} expense={e} />
        ))}

        {/* Yesterday */}
        <SectionHeader title="Yesterday · Dec 21" />
        {YESTERDAY.map((e, i) => (
          <ExpenseCard key={i} expense={e} />
        ))}
      </ScrollView>
    </View>
  )
}

function SectionHeader({ title }: { title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.seeAll}>See all</Text>
      </TouchableOpacity>
    </View>
  )
}

function ExpenseCard({ expense }: { expense: Expense }) {
  return (
    <View style={styles.expenseCard}>
      <View style={[styles.expenseIcon, { backgroundColor: expense.bg }]}>
        {expense.icon}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.expenseTitle}>{expense.title}</Text>
        <Text style={styles.expenseSub}>{expense.sub}</Text>
      </View>
      <Text style={styles.expenseAmount}>{expense.amount}</Text>
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
  circleBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.bg,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: { fontSize: 18, fontWeight: "700", color: COLORS.text },
  filterRow: { flexDirection: "row", alignItems: "center", gap: 12, marginTop: 18 },
  filterInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.card,
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 52,
  },
  filterPlaceholder: { color: COLORS.subtext, fontSize: 15 },
  calBtn: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: COLORS.navy,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 22,
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 16, fontWeight: "700", color: COLORS.text },
  seeAll: { color: COLORS.link, fontSize: 13, fontWeight: "600" },
  expenseCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    shadowColor: "#1B2A6B",
    shadowOpacity: 0.04,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  expenseIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  expenseTitle: { fontSize: 15, fontWeight: "700", color: COLORS.text },
  expenseSub: { fontSize: 13, color: COLORS.subtext, marginTop: 2 },
  expenseAmount: { fontSize: 15, fontWeight: "700", color: COLORS.red },
})
