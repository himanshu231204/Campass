const mockInsets = {
  top: 44,
  bottom: 34,
  left: 0,
  right: 0,
}

const useSafeAreaInsets = jest.fn(() => mockInsets)

const SafeAreaProvider = ({ children }: { children: React.ReactNode }) => children

const SafeAreaView = ({ children, style, ...props }: any) => ({
  type: "SafeAreaView",
  props: { style, ...props },
  children,
})

export { useSafeAreaInsets, SafeAreaProvider, SafeAreaView }
export default { useSafeAreaInsets, SafeAreaProvider, SafeAreaView }
