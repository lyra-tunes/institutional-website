import { Badge } from "@/components/ui/badge"

interface VersionBadgeProps {
  version: string
  type: "version" | "upcoming"
}

export function VersionBadge({ version, type }: VersionBadgeProps) {
  const colorClasses =
    type === "version"
      ? "text-green-500 border-green-500 hover:bg-green-500/10 hover:text-green-500"
      : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-500"

  return <Badge className={`bg-transparent ${colorClasses} px-3 py-1 transition-colors`}>{version}</Badge>
}

