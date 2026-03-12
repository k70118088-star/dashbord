export const menu = [
    { name: "Dashboard", icon: "dashbord" , path: "/dashboard" },
    { name: "Attack Path Map", icon: "attack", path: "/attack-path-map" },
    { name: "Compliance View", icon: "compliance", path: "/compliance" },
    { name: "Alerts", icon: "alert", path: "/alert"  },
    { name: "Remediation", icon: "reme" , path: "/" },
    { name: "Settings", icon: "setting" , path: "/settings"},
    { name: "Logout", icon: "logout" , path: "/logout"},
  ];

export const remediationData = [
    { action: "Patch Apache server vulnerability on Finance VM", threat: "CVE-2023-29324 – Remote code execution", sla: "2 days left", suggestedBy: "AI Engine", status: "Open", level: "High", date: "Jun 17, 2025 – 11:42 AM", ticket: "+ Create Ticket", isLight: true },
    { action: "Restrict public RDP access on HR server", threat: "Lateral movement risk via RDP", sla: "Overdue", suggestedBy: "AI Engine", status: "Open", level: "Medium", date: "Jun 16, 2025 – 03:22 PM", ticket: "View in JIRA", isLight: false },
    { action: "Rotate AWS IAM credentials", threat: "Compromised credential usage detected", sla: "2 days left", suggestedBy: "Security Analyst", status: "In Progress", level: "Low", date: "Jun 15, 2025 – 10:10 AM", ticket: "View in JIRA", isLight: true },
    { action: "Disable legacy TLS 1.0 support", threat: "TLS downgrade vulnerability", sla: "Overdue", suggestedBy: "AI Engine", status: "Open", level: "High", date: "Jun 15, 2025 – 04:45 PM", ticket: "+ Create Ticket", isLight: false },
    { action: "Patch outdated version of Microsoft Exchange", threat: "CVE-2024-21006 – Elevation of privilege", sla: "2 days left", suggestedBy: "Security Analyst", status: "In Progress", level: "Medium", date: "Jun 14, 2025 – 02:18 PM", ticket: "View in JIRA", isLight: true },
    { action: "Revoke stale admin access on DevOps accounts", threat: "Unused privileged accounts", sla: "Overdue", suggestedBy: "AI Engine", status: "Resolved", level: "Low", date: "Jun 13, 2025 – 01:55 PM", ticket: "View in JIRA", isLight: false },
    { action: "Quarantine endpoint with malware beaconing", threat: "Detected communication with C2 server", sla: "2 days left", suggestedBy: "AI Engine", status: "Open", level: "High", date: "Jun 12, 2025 – 05:08 PM", ticket: "+ Create Ticket", isLight: true },
];  


export const selectList = [
  {
    key: "status",
    select: "Status",
    option: ["Open", "In Progress", "Resolved"],
  },
  {
    select: "Assigned To",
    option: [],
  },
  {
    key: "level",
    select: "Threat Level",
    option: ["High", "Medium", "Low"],
  },
  {
    select: "Deadline Range",
    option: [],
  },
];