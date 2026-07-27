import { Redirect } from "expo-router";

export default function Index() {
  // TODO: Add auth state check when auth context is implemented
  // For now, always redirect to auth/login
  return <Redirect href="/auth/login" />;
}
