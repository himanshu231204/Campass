const mockElement = (type: string, props?: Record<string, unknown>, ...children: unknown[]) => ({
  type,
  props: props || {},
  children,
})

const View = (props: Record<string, unknown>) => mockElement("View", props)
const Text = (props: Record<string, unknown>) => mockElement("Text", props)
const TouchableOpacity = (props: Record<string, unknown>) => mockElement("TouchableOpacity", props)
const ScrollView = (props: Record<string, unknown>) => mockElement("ScrollView", props)
const SafeAreaView = (props: Record<string, unknown>) => mockElement("SafeAreaView", props)
const StatusBar = (props: Record<string, unknown>) => mockElement("StatusBar", props)

const Dimensions = {
  get: jest.fn(() => ({ width: 412, height: 917 })),
}

const Platform = { OS: "ios", select: (obj: Record<string, unknown>) => obj.ios }

const StyleSheet = {
  create: (styles: Record<string, unknown>) => styles,
  hairlineWidth: () => 1,
}

export { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, Dimensions, Platform, StyleSheet }
export default { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, Dimensions, Platform, StyleSheet }
