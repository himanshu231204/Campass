import React from "react"

const createMockIcon = (name: string) => {
  const Icon = (props: Record<string, unknown>) => {
    if (props && typeof props === "object") {
      const children = (props as Record<string, unknown>).children as React.ReactNode | undefined
      if (children) {
        return React.createElement(React.Fragment, null, children)
      }
    }
    return null
  }
  Icon.displayName = name
  return Icon
}

const icons = [
  "ArrowRight", "ArrowUpDown", "Award", "Bell", "Bookmark", "Building2", "Bus", "Calendar",
  "Camera", "Car", "CheckCircle2", "ChevronLeft", "ChevronRight", "Compass", "DollarSign",
  "Globe", "Gift", "HelpCircle", "Home", "Lock", "LogOut", "Map", "MapPin", "MoreVertical",
  "Package", "Plane", "Phone", "Search", "Settings", "ShoppingBag", "SlidersHorizontal",
  "Sparkles", "Star", "Target", "TrainFront", "Triangle", "TriangleAlert", "User", "Users",
  "Wallet", "Zap",
]

const mockIcons: Record<string, ReturnType<typeof createMockIcon>> = {}
for (const name of icons) {
  mockIcons[name] = createMockIcon(name)
}

export default mockIcons
export const {
  ArrowRight, ArrowUpDown, Award, Bell, Bookmark, Building2, Bus, Calendar,
  Camera, Car, CheckCircle2, ChevronLeft, ChevronRight, Compass, DollarSign,
  Globe, Gift, HelpCircle, Home, Lock, LogOut, Map, MapPin, MoreVertical,
  Package, Plane, Phone, Search, Settings, ShoppingBag, SlidersHorizontal,
  Sparkles, Star, Target, TrainFront, Triangle, TriangleAlert, User, Users,
  Wallet, Zap,
} = mockIcons
